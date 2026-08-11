import React from 'react';

export default function TermsAndConditions() {
  return (
    <main className="flex-grow pt-32 pb-16 px-6">
      <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-md border border-white/20 shadow-2xl rounded-3xl p-10 md:p-14">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-8">
          Termini e Condizioni
        </h1>
        
        <div className="space-y-6 text-gray-700 font-light leading-relaxed">
          <p>
            Le presenti Condizioni d'Uso disciplinano l'accesso e l'utilizzo del sito web di M PROJECT S.R.L. Accedendo al sito, l'utente accetta i termini qui riportati.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Proprietà Intellettuale</h2>
          <p>
            Tutti i contenuti presenti sul sito (testi, grafiche, loghi, software, ecc.) sono di proprietà esclusiva di M PROJECT S.R.L. o dei rispettivi licenzianti e sono protetti dalle leggi vigenti sul diritto d'autore e sulla proprietà intellettuale. Ne è vietata la riproduzione, totale o parziale, senza il nostro esplicito consenso scritto.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Utilizzo del Sito</h2>
          <p>
            L'utente si impegna a utilizzare il sito esclusivamente per scopi leciti. È severamente vietato:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Usare il sito in modo che causi, o possa causare, danni al sito stesso o una limitazione dell'accesso.</li>
            <li>Inviare comunicazioni commerciali non richieste (spam) attraverso i nostri form di contatto.</li>
            <li>Raccogliere dati in modo sistematico (scraping, data mining) senza il nostro consenso.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Limitazione di Responsabilità</h2>
          <p>
            M PROJECT S.R.L. si impegna a mantenere le informazioni sul sito accurate e aggiornate, ma non fornisce alcuna garanzia, esplicita o implicita, sulla loro completezza o precisione. Non saremo responsabili per eventuali danni diretti o indiretti derivanti dall'utilizzo del sito.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Siti di Terze Parti</h2>
          <p>
            Il nostro sito potrebbe contenere link a siti web di terzi. M PROJECT S.R.L. non ha alcun controllo su tali siti e non si assume alcuna responsabilità per i loro contenuti o per le rispettive policy sulla privacy.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Legge Applicabile e Foro Competente</h2>
          <p>
            I presenti Termini e Condizioni sono regolati dalla legge italiana. Per qualsiasi controversia derivante dall'utilizzo del sito sarà competente in via esclusiva il Foro di Como.
          </p>

          <p className="mt-8 text-sm text-gray-500">
            Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
          </p>
        </div>
      </div>
    </main>
  );
}
