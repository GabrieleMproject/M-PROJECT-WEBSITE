import React from 'react';
import { Building2, CloudLightning, ShieldCheck, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CondoFastLogo, { CondoFastIcon } from '../components/CondoFastLogo';

export default function CondoFast() {
  const features = [
    {
      icon: <Building2 className="h-8 w-8 text-blue-500" />,
      title: 'Gestione Anagrafiche e Bilanci',
      description: 'Centralizza i dati dei condòmini e automatizza la contabilità in pochi clic, senza margini di errore.'
    },
    {
      icon: <CloudLightning className="h-8 w-8 text-blue-500" />,
      title: 'Accessibilità Cloud 100%',
      description: 'Lavora dal tuo ufficio, da casa o in mobilità. I tuoi dati sono sempre sincronizzati e accessibili ovunque.'
    },
    {
      icon: <Cpu className="h-8 w-8 text-blue-500" />,
      title: 'Intelligenza Artificiale (AI)',
      description: 'Sfrutta la potenza dell\'AI per leggere documenti, smistare le richieste e generare risposte automatiche.'
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-blue-500" />,
      title: 'Sicurezza e Privacy',
      description: 'Infrastruttura di livello enterprise basata su Supabase per garantire la massima protezione dei dati sensibili.'
    }
  ];

  return (
    <main className="flex-grow pt-32 pb-16 px-6">
      
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center space-y-8 mb-24">
        <div className="flex justify-center mb-2">
          <div className="p-4 bg-white/80 backdrop-blur-md rounded-3xl shadow-lg border border-gray-100 inline-flex items-center">
            <CondoFastLogo size={52} theme="light" />
          </div>
        </div>
        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-4">
          La rivoluzione per gli amministratori
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900">
          Amministra in modo intelligente. <br className="hidden md:block"/>
          <span className="text-blue-600">Scopri CondoFAST.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
          Il SaaS definitivo per la gestione condominiale. Progettato per abbattere i tempi burocratici e rimettere al centro il valore del tuo lavoro.
        </p>
        <div className="pt-8">
          <a href="https://condofast.it" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <span>Richiedi guida e prova gratuita</span>
            <ArrowRight className="h-5 w-5" />
          </a>
          {/* Secondary CTA suggestion */}
          <a href="#features" className="inline-flex items-center space-x-2 text-gray-600 px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition-all duration-300 ml-4">
            <span>Scopri come funziona</span>
          </a>
        </div>
      </div>

      {/* Features Grid */}
      <div id="features" className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-24 scroll-mt-28">
        {features.map((feature, index) => (
          <div key={index} className="group bg-white/70 backdrop-blur-md border border-gray-100 shadow-xl rounded-3xl p-8 md:p-12 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <div className="h-16 w-16 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
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
            <h4 className="text-xl font-bold text-gray-900 mb-2">Serve installare qualche software sul PC?</h4>
            <p className="text-gray-600">Assolutamente no. CondoFAST è 100% in cloud. Ti basta un browser web per accedere da PC, Mac, tablet o smartphone ovunque ti trovi.</p>
          </div>
          <div className="bg-white/70 backdrop-blur-md border border-gray-100 shadow-md rounded-2xl p-6 md:p-8">
            <h4 className="text-xl font-bold text-gray-900 mb-2">Posso importare i dati dal mio vecchio gestionale?</h4>
            <p className="text-gray-600">Sì, il nostro sistema è progettato per importare anagrafiche e saldi iniziali tramite file Excel/CSV in modo semplice e guidato.</p>
          </div>
          <div className="bg-white/70 backdrop-blur-md border border-gray-100 shadow-md rounded-2xl p-6 md:p-8">
            <h4 className="text-xl font-bold text-gray-900 mb-2">I dati dei miei condòmini sono al sicuro?</h4>
            <p className="text-gray-600">Garantiamo i massimi standard di sicurezza del settore, con backup automatici e piena conformità alle normative GDPR.</p>
          </div>
        </div>
      </div>
      
      {/* Vision Section */}
      <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-blue-900 to-indigo-900 rounded-[3rem] p-12 md:p-20 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-30"></div>
        <div className="relative z-10">
          <div className="flex justify-center mb-6">
            <CondoFastLogo size={44} theme="dark" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">La nostra Visione</h2>
          <p className="text-xl md:text-2xl font-light text-blue-100 leading-relaxed mb-10">
            Crediamo che l'amministratore di condominio non debba essere un passacarte, ma un vero manager. CondoFAST nasce per liberarti dalla routine e darti il controllo totale, ovunque ti trovi.
          </p>
          <Link to="/" className="text-white border border-white/30 hover:bg-white/10 px-6 py-3 rounded-full font-medium transition-colors">
            Torna alla Home
          </Link>
        </div>
      </div>
      
    </main>
  );
}
