import React from 'react';

export default function PrivacyPolicy() {
  return (
    <main className="flex-grow pt-32 pb-16 px-6">
      <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-md border border-white/20 shadow-2xl rounded-3xl p-10 md:p-14">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-8">
          Privacy Policy
        </h1>
        
        <div className="space-y-6 text-gray-700 font-light leading-relaxed">
          <p>
            Ai sensi del Regolamento (UE) 2016/679 (GDPR), questa pagina descrive le modalità di trattamento dei dati personali degli utenti che consultano il sito web di M PROJECT S.R.L.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Titolare del Trattamento</h2>
          <p>
            Il Titolare del trattamento è <strong>M PROJECT S.R.L.</strong><br/>
            Sede Legale: Via Civati 23, 22031 Albavilla (CO)<br/>
            P.IVA: 0431 4510134<br/>
            Email: <a href="mailto:info@mprojectsrl.it" className="text-blue-600 hover:underline">info@mprojectsrl.it</a><br/>
            PEC: info@mproject.it
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Tipologia di Dati Trattati e Finalità</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Dati di navigazione:</strong> I sistemi informatici preposti al funzionamento del sito acquisiscono alcuni dati la cui trasmissione è implicita nell'uso dei protocolli di navigazione (es. indirizzi IP). Questi dati sono trattati in forma anonima a fini statistici.</li>
            <li><strong>Dati forniti volontariamente dall'utente:</strong> Attraverso il form di "Contatto" raccogliamo Nome, Email e un eventuale messaggio. Questi dati vengono utilizzati esclusivamente per rispondere in modo mirato alla tua richiesta (Art. 6, co. 1, lett. b GDPR).</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Conservazione dei Dati</h2>
          <p>
            I dati personali raccolti per le richieste di contatto saranno conservati per il tempo strettamente necessario a gestire la richiesta medesima e per eventuali successivi adempimenti di legge o commerciali, qualora segua un rapporto contrattuale.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Comunicazione a Terzi e Trasferimento</h2>
          <p>
            I tuoi dati non saranno diffusi né venduti a terzi. Potranno essere comunicati a soggetti esterni che operano per conto del Titolare (es. fornitori di servizi di hosting o email, come Vercel o Resend) designati come Responsabili del Trattamento. I server si trovano prevalentemente all'interno dell'Unione Europea.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Diritti dell'Interessato</h2>
          <p>
            In ogni momento puoi esercitare i tuoi diritti (Art. 15-22 GDPR) tra cui il diritto di accedere ai tuoi dati, chiederne la rettifica, la cancellazione, la limitazione o opporti al loro trattamento. Per esercitare tali diritti puoi scrivere a <strong>info@mprojectsrl.it</strong>.
          </p>

          <p className="mt-8 text-sm text-gray-500">
            Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
          </p>
        </div>
      </div>
    </main>
  );
}
