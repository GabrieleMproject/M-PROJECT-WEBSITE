import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Metodo non consentito' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY non configurata nelle variabili d\'ambiente di Vercel.');
    return res.status(500).json({ 
      error: 'Il servizio email non è ancora configurato sul server (chiave RESEND_API_KEY mancante).' 
    });
  }

  const { name, email, subject, service, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Nome, email e messaggio sono obbligatori.' });
  }

  try {
    const resend = new Resend(apiKey);

    const fromEmail = process.env.NODE_ENV === 'development' 
      ? 'onboarding@resend.dev' 
      : 'Sito Web <noreply@mprojectsrl.it>';

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: 'info@mprojectsrl.it',
      reply_to: email,
      subject: subject ? `[Richiesta Sito] ${subject}` : `Nuova richiesta da ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; border-radius: 8px;">
          <h2 style="color: #0052CC; margin-top: 0;">Nuova richiesta dal sito web</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee; width: 140px;"><strong>Nome:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Servizio:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${service || 'Nessuno specificato'}</td>
            </tr>
          </table>
          
          <h3 style="margin-top: 20px; color: #333;">Messaggio:</h3>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; border-left: 4px solid #0052CC; white-space: pre-wrap; line-height: 1.5;">
            ${message}
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

