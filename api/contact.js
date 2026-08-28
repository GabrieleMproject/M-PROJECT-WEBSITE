import { Resend } from 'resend';

// ---------------------------------------------------------------------------
// Rate Limiter in-memory (compatibile con Vercel Serverless Functions)
// Nota: in ambienti con multiple istanze, considerare KV store esterno.
// ---------------------------------------------------------------------------
const ipRequestMap = new Map();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minuti
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip) {
  const now = Date.now();
  const record = ipRequestMap.get(ip);

  // Pulizia periodica delle entry scadute per evitare memory leak
  if (ipRequestMap.size > 1000) {
    for (const [key, val] of ipRequestMap) {
      if (now - val.windowStart > RATE_LIMIT_WINDOW_MS) ipRequestMap.delete(key);
    }
  }

  if (!record || now - record.windowStart > RATE_LIMIT_WINDOW_MS) {
    ipRequestMap.set(ip, { windowStart: now, count: 1 });
    return false;
  }
  record.count++;
  return record.count > RATE_LIMIT_MAX;
}

// ---------------------------------------------------------------------------
// Sanitizzazione HTML — previene HTML/XSS injection nel template email
// ---------------------------------------------------------------------------
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ---------------------------------------------------------------------------
// Handler principale
// ---------------------------------------------------------------------------
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Metodo non consentito' });
  }

  // 1. Rate Limiting per IP
  const clientIp = req.headers['x-forwarded-for']?.split(',')[0]?.trim()
                 || req.socket?.remoteAddress || 'unknown';
  if (isRateLimited(clientIp)) {
    return res.status(429).json({
      error: 'Troppe richieste. Riprova tra qualche minuto.'
    });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY non configurata nelle variabili d\'ambiente di Vercel.');
    return res.status(500).json({
      error: 'Il servizio email non è ancora configurato sul server (chiave RESEND_API_KEY mancante).'
    });
  }

  const { name, email, subject, service, message, recaptchaToken } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Nome, email e messaggio sono obbligatori.' });
  }

  // 2. Validazione reCAPTCHA v3 server-side
  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
  if (recaptchaSecret) {
    if (!recaptchaToken) {
      return res.status(403).json({ error: 'Token di sicurezza mancante. Ricarica la pagina e riprova.' });
    }
    try {
      const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${encodeURIComponent(recaptchaSecret)}&response=${encodeURIComponent(recaptchaToken)}`,
      });
      const verifyData = await verifyRes.json();
      if (!verifyData.success || (verifyData.score != null && verifyData.score < 0.5)) {
        return res.status(403).json({ error: 'Verifica di sicurezza non superata. Riprova.' });
      }
    } catch (err) {
      console.warn('reCAPTCHA verification network error:', err);
      // Non bloccare l'utente se la verifica fallisce per errore di rete
    }
  }

  // 3. Sanitizzazione HTML di tutti gli input utente
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeService = escapeHtml(service);
  const safeMessage = escapeHtml(message);

  try {
    const resend = new Resend(apiKey);

    const fromEmail = process.env.NODE_ENV === 'development'
      ? 'onboarding@resend.dev'
      : 'Sito Web <noreply@mprojectsrl.it>';

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: 'info@mprojectsrl.it',
      reply_to: email,
      subject: subject ? `[Richiesta Sito] ${safeSubject}` : `Nuova richiesta da ${safeName}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; border-radius: 8px;">
          <h2 style="color: #0052CC; margin-top: 0;">Nuova richiesta dal sito web</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee; width: 140px;"><strong>Nome:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Servizio:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${safeService || 'Nessuno specificato'}</td>
            </tr>
          </table>
          <h3 style="margin-top: 20px; color: #333;">Messaggio:</h3>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; border-left: 4px solid #0052CC; white-space: pre-wrap; line-height: 1.5;">
            ${safeMessage}
          </div>
        </div>
      `
    });

    if (error) {
      console.error('Resend API Error:', error);
      return res.status(400).json({
        error: `Errore nell'invio email: ${error.message || 'Verifica la configurazione del dominio su Resend.'}`
      });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Handler Error:', error);
    return res.status(500).json({
      error: 'Si è verificato un errore imprevisto durante l\'invio dell\'email.'
    });
  }
}
