import React from 'react';
import { Ticket, ScanLine, BarChart3, Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TicketFast() {
  const features = [
    {
      icon: <Ticket className="h-8 w-8 text-purple-500" />,
      title: 'Creazione Eventi Rapida',
      description: 'Imposta date, settori, prezzi e disponibilità del tuo evento in una dashboard intuitiva e moderna.'
    },
    {
      icon: <ScanLine className="h-8 w-8 text-purple-500" />,
      title: 'Controllo Accessi Smart',
      description: 'Sfrutta la scansione rapida dei QR code tramite l\'app dedicata per eliminare le code all\'ingresso.'
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-purple-500" />,
      title: 'Analytics in Tempo Reale',
      description: 'Monitora le vendite, i trend e gli ingressi con grafici e statistiche aggiornate al secondo.'
    },
    {
      icon: <Lock className="h-8 w-8 text-purple-500" />,
      title: 'Transazioni Sicure',
      description: 'Pagamenti protetti e sistema antifrode integrato per garantire la massima sicurezza a te e ai tuoi clienti.'
    }
  ];

  return (
    <main className="flex-grow pt-32 pb-16 px-6">
      
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center space-y-8 mb-24">
        <div className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 font-semibold text-sm mb-4">
          La biglietteria senza compromessi
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900">
          Vendi, scansiona e vivi. <br className="hidden md:block"/>
          <span className="text-purple-600">Con TicketFAST.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
          La piattaforma software per la gestione completa di eventi e biglietteria, pensata per offrire un'esperienza fluida agli organizzatori e agli spettatori.
        </p>
        <div className="pt-8">
          <div className="relative inline-block">
            <button disabled className="inline-flex items-center space-x-2 bg-gray-200 text-gray-400 px-8 py-4 rounded-full font-bold text-lg cursor-not-allowed">
              <span>Inizia a vendere</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <div className="absolute -top-3 -right-4 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg uppercase tracking-wide border-2 border-white">
              Disponibile a breve
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-24">
        {features.map((feature, index) => (
          <div key={index} className="group bg-white/70 backdrop-blur-md border border-gray-100 shadow-xl rounded-3xl p-8 md:p-12 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <div className="h-16 w-16 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
          </div>
        ))}
      </div>
      
      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Domande Frequenti</h2>
        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur-md border border-gray-100 shadow-md rounded-2xl p-6 md:p-8">
            <h4 className="text-xl font-bold text-gray-900 mb-2">Quanto tempo serve per iniziare a vendere i biglietti?</h4>
            <p className="text-gray-600">Pochissimi minuti. Ti basta creare l'evento, inserire i dettagli, impostare i prezzi dei settori e sei subito online pronto per vendere.</p>
          </div>
          <div className="bg-white/70 backdrop-blur-md border border-gray-100 shadow-md rounded-2xl p-6 md:p-8">
            <h4 className="text-xl font-bold text-gray-900 mb-2">L'app per scannerizzare i QR code ha un costo aggiuntivo?</h4>
            <p className="text-gray-600">No, il sistema di controllo accessi (scansione rapida tramite app mobile) è incluso in tutti i nostri piani senza costi nascosti.</p>
          </div>
          <div className="bg-white/70 backdrop-blur-md border border-gray-100 shadow-md rounded-2xl p-6 md:p-8">
            <h4 className="text-xl font-bold text-gray-900 mb-2">Come ricevo gli incassi delle vendite?</h4>
            <p className="text-gray-600">I pagamenti vengono processati in modo sicuro e i fondi possono essere trasferiti direttamente sul tuo conto corrente bancario tramite il nostro circuito di pagamento.</p>
          </div>
        </div>
      </div>
      
      {/* Vision Section */}
      <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-purple-900 to-fuchsia-900 rounded-[3rem] p-12 md:p-20 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-fuchsia-500 rounded-full blur-3xl opacity-30"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">La nostra Visione</h2>
          <p className="text-xl md:text-2xl font-light text-purple-100 leading-relaxed mb-10">
            Vogliamo eliminare l'attrito tecnologico nel mondo degli eventi. Il biglietto non è solo un pezzo di carta, è l'inizio di un'esperienza che deve essere perfetta dal primo clic.
          </p>
          <Link to="/" className="text-white border border-white/30 hover:bg-white/10 px-6 py-3 rounded-full font-medium transition-colors">
            Torna alla Home
          </Link>
        </div>
      </div>
      
    </main>
  );
}
