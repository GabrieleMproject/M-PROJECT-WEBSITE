import React, { useState } from 'react';
import { Building2, CloudLightning, ShieldCheck, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CondoFastLogo from '../components/CondoFastLogo';

export default function CondoFast() {
  const [billingMode, setBillingMode] = useState('monthly');

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
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight">
          Amministra in modo intelligente. <br className="hidden md:block"/>
          <span className="text-blue-600">Scopri CondoFAST.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
          Il SaaS definitivo per la gestione condominiale. Progettato per abbattere i tempi burocratici e rimettere al centro il valore del tuo lavoro.
        </p>
        <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-4">
          <a href="https://condofast.it" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto flex justify-center items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <span>Richiedi guida e prova gratuita</span>
            <ArrowRight className="h-5 w-5" />
          </a>
          {/* Secondary CTA suggestion */}
          <a href="#features" className="w-full md:w-auto flex justify-center items-center space-x-2 text-gray-600 px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition-all duration-300">
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

      
      {/* Toggle Mensile/Annuale */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center p-1 bg-gray-100 rounded-full mb-4">
          <button
            onClick={() => setBillingMode('monthly')}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
              billingMode === 'monthly'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Mensile
          </button>
          <button
            onClick={() => setBillingMode('annual')}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all flex items-center ${
              billingMode === 'annual'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Annuale <span className="ml-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">+ Migrazione Inclusa</span>
          </button>
        </div>
        <p className="text-sm text-gray-500 transition-all">
          {billingMode === 'annual' ? (
            <><span className="text-green-600 font-semibold">✓ Migrazione assistita inclusa.</span> Fatturazione in un'unica soluzione annuale (12 mesi).</>
          ) : (
            <>Nessun vincolo, paghi di mese in mese.</>
          )}
        </p>
      </div>

      {/* Hero Pricing Card */}
      <div className="max-w-5xl mx-auto mb-8 bg-white border-2 border-green-500 rounded-3xl overflow-hidden shadow-2xl relative">
        <div className="bg-green-50 p-6 text-center border-b border-green-100">
          <h3 className="text-3xl font-bold text-green-700 mb-2">Piano Cloud Integrato</h3>
          <p className="text-green-800 font-medium max-w-2xl mx-auto">Innovazione e digitalizzazione per i tuoi stabili, massima efficienza economica per il tuo Studio.</p>
        </div>
        
        <div className="p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-6 text-center max-w-4xl mx-auto mb-12">
            {/* Base */}
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="text-gray-500 font-semibold mb-2">Base <span className="block font-normal text-sm mt-1">Fino a 50 condomini</span></div>
              <div className="text-3xl font-black text-green-600">
                {billingMode === 'annual' ? '238,80€' : '19,90€'}
                <span className="text-sm font-normal text-gray-500">{billingMode === 'annual' ? '/anno' : '/mese'}</span>
              </div>
            </div>
            {/* Studio */}
            <div className="p-6 bg-green-50 rounded-2xl border-2 border-green-300 relative transform md:scale-105 shadow-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs font-bold px-3 py-0.5 rounded-full whitespace-nowrap">PIÙ POPOLARE</div>
              <div className="text-gray-600 font-semibold mb-2">Studio <span className="block font-normal text-sm mt-1">Fino a 100 condomini</span></div>
              <div className="text-4xl font-black text-green-600 my-2">
                {billingMode === 'annual' ? '358,80€' : '29,90€'}
                <span className="text-base font-normal text-gray-500">{billingMode === 'annual' ? '/anno' : '/mese'}</span>
              </div>
            </div>
            {/* Pro */}
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="text-gray-500 font-semibold mb-2">Professional <span className="block font-normal text-sm mt-1">Fino a 200 condomini</span></div>
              <div className="text-3xl font-black text-green-600">
                {billingMode === 'annual' ? '718,80€' : '59,90€'}
                <span className="text-sm font-normal text-gray-500">{billingMode === 'annual' ? '/anno' : '/mese'}</span>
              </div>
            </div>
          </div>

          {/* Explanation */}
          <div className="border-t border-gray-100 pt-10">
            <h4 className="text-center text-xl font-bold text-gray-900 mb-8">Come funziona l'Ecosistema Cloud Integrato</h4>
            <div className="grid md:grid-cols-3 gap-8 mb-10 text-left">
              <div className="flex gap-4 items-start">
                <div className="bg-green-100 text-green-600 w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">Piattaforma Centralizzata</div>
                  <div className="text-sm text-gray-600 leading-relaxed">Lo Studio accede all'infrastruttura CondoFAST a condizioni B2B agevolate, ottimizzando l'intera gestione contabile.</div>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">Servizi Dedicati al Condominio</div>
                  <div className="text-sm text-gray-600 leading-relaxed">L'infrastruttura tecnologica (App, GDPR, Voto Online) viene erogata a favore dei condòmini e regolarmente imputata a bilancio (ex Art. 1130 c.c.).</div>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-purple-100 text-purple-600 w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">Valore Condiviso</div>
                  <div className="text-sm text-gray-600 leading-relaxed">Massima trasparenza ed evoluzione digitale per i residenti, massima efficienza operativa per l'Amministratore.</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="https://condofast.it/app/register" className="inline-block bg-green-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-600 hover:shadow-lg transition-all hover:-translate-y-1">
                Inizia a risparmiare ora
              </a>
            </div>
            
            <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-100 max-w-3xl mx-auto">
              <p className="text-xs text-gray-500 text-center leading-relaxed">
                <strong>Condizione di Accesso:</strong> Tariffa riservata agli Studi che adottano i pacchetti Cloud (Bundle Compliance Base 129€/anno o Premium App 199€/anno) per i propri condomìni da imputare a bilancio condominiale.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decoy Pricing Card */}
      <div className="max-w-4xl mx-auto bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center opacity-90 hover:opacity-100 transition-opacity mb-24">
        <h4 className="text-lg font-bold text-gray-700 mb-2">Gestione Tradizionale (Solo Licenza Studio)</h4>
        <p className="text-sm text-gray-500 mb-6 max-w-2xl mx-auto">La soluzione classica per gli Studi che preferiscono accentrare i costi dell'infrastruttura gestionale, senza l'attivazione di servizi Cloud aggiuntivi per i residenti.</p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <div className="text-gray-900"><span className="font-bold">Base:</span> <span className="font-black ml-1 text-gray-600">{billingMode === 'annual' ? '1.188€/anno' : '99€/mese'}</span></div>
          <div className="text-gray-900"><span className="font-bold">Studio:</span> <span className="font-black ml-1 text-gray-600">{billingMode === 'annual' ? '2.388€/anno' : '199€/mese'}</span></div>
          <div className="text-gray-900"><span className="font-bold">Pro:</span> <span className="font-black ml-1 text-gray-600">{billingMode === 'annual' ? '3.588€/anno' : '299€/mese'}</span></div>
        </div>
        
        <a href="https://condofast.it/app/register" className="inline-block px-6 py-2 border border-gray-300 text-gray-600 rounded-full font-bold hover:bg-gray-100 transition-colors text-sm">
          Attiva Licenza Standard
        </a>
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
