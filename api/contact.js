import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, service, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Nome, email e messaggio sono obbligatori' });
  }

  try {
    const fromEmail = process.env.NODE_ENV === 'development' 
      ? 'onboarding@resend.dev' 
      : 'Sito Web <noreply@mprojectsrl.it>';

    const data = await resend.emails.send({
      from: fromEmail,
      to: 'info@mprojectsrl.it',
      subject: subject ? `[Richiesta Sito] ${subject}` : `Nuova richiesta da ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #0052CC;">Nuova richiesta dal sito web</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Nome:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Servizio di interesse:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${service || 'Nessuno specificato'}</td>
            </tr>
          </table>
          
          <h3 style="margin-top: 20px;">Messaggio:</h3>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #0052CC;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `
    });

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Resend Error:', error);
    res.status(500).json({ error: 'Si è verificato un errore durante l\'invio dell\'email.' });
  }
}
