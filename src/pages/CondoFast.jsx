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

      
      {/* Nuovo blocco Prezzi */}
      <div id="pricing" className="max-w-6xl mx-auto mb-24 scroll-mt-28">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Un unico software, tutta la potenza.</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Abbiamo omologato le funzionalità: nessun blocco. Scegli semplicemente in base alla dimensione del tuo studio.
            Il risparmio è garantito passando all'Ecosistema Cloud Integrato.
          </p>
        </div>

        {/* Toggle Mensile/Annuale */}
        <div className="text-center mb-12">
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
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            { name: 'Base', limit: 'Fino a 50 condomini', tradM: '99', tradA: '1.188', cloudM: '19,90', cloudA: '238,80', pop: false, discount: '-80%' },
            { name: 'Studio', limit: 'Fino a 100 condomini', tradM: '199', tradA: '2.388', cloudM: '29,90', cloudA: '358,80', pop: true, discount: '-85%' },
            { name: 'Professional', limit: 'Fino a 200 condomini', tradM: '299', tradA: '3.588', cloudM: '59,90', cloudA: '718,80', pop: false, discount: '-80%' }
          ].map((plan, i) => (
            <div key={i} className={`relative bg-white rounded-3xl p-8 border ${plan.pop ? 'border-green-500 shadow-2xl scale-105 z-10' : 'border-gray-200 shadow-lg'} flex flex-col`}>
              {plan.pop && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">PIÙ SCELTO</div>}
              <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
              <p className="text-gray-500 font-medium mb-6">{plan.limit}</p>
              
              {/* Sistema Tradizionale */}
              <div className="mb-4 p-4 rounded-xl bg-gray-50 border border-gray-200 flex flex-col items-start">
                <div className="text-xs text-gray-500 font-semibold mb-1 uppercase tracking-wider">Sistema Tradizionale</div>
                <div className="text-gray-800 text-xl font-bold mb-3">
                  {billingMode === 'annual' ? plan.tradA : plan.tradM}€<span className="text-sm font-normal">/{billingMode === 'annual' ? 'anno' : 'mese'}</span>
                </div>
                <a href="https://condofast.it/app/register?type=trad" className="text-sm font-semibold text-gray-600 border border-gray-300 px-4 py-1.5 rounded-lg hover:bg-gray-100 transition-colors w-full text-center">
                  Attiva Tradizionale
                </a>
              </div>

              {/* Cloud Integrato */}
              <div className="mb-4 p-6 rounded-xl bg-green-50 border-2 border-green-200 relative flex flex-col flex-grow">
                <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md transform rotate-3">
                  {plan.discount}
                </div>
                <div className="text-xs text-green-700 font-bold mb-1 uppercase tracking-wider flex items-center gap-1">
                  Cloud Integrato <CloudLightning className="w-4 h-4" />
                </div>
                <div className="text-green-600 text-4xl font-black mb-3">
                  {billingMode === 'annual' ? plan.cloudA : plan.cloudM}€<span className="text-lg font-normal">/{billingMode === 'annual' ? 'anno' : 'mese'}</span>
                </div>
                <div className="text-xs text-green-800 font-medium leading-tight mb-4 flex-grow">
                  Prezzo riservato attivando i servizi digitali ai condòmini.
                </div>
                <a href="https://condofast.it/app/register?type=cloud" className={`w-full text-center py-3 rounded-xl font-bold transition-all ${plan.pop ? 'bg-green-500 text-white hover:bg-green-600 shadow-md' : 'bg-green-100 text-green-800 hover:bg-green-200'}`}>
                  Attiva Cloud Integrato
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Feature List */}
        <div className="mt-16 bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Incluso nella licenza Software per lo Studio:</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              "Intelligenza Artificiale (OCR)",
              "Riconciliazione Bancaria",
              "Modulo Fiscale (F24, CU)",
              "Recupero Crediti Automatico",
              "Ticket & Segnalazioni",
              "Assistenza Prioritaria 24h"
            ].map((feat, i) => (
              <div key={i} className="flex items-center gap-3">
                <ShieldCheck className="text-gray-700 w-6 h-6 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{feat}</span>
              </div>
            ))}
          </div>
          
          <h3 className="text-xl font-bold text-green-700 mb-6 text-center border-t border-gray-100 pt-8">Funzionalità sbloccate attivando i Bundle Condominiali:</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "App Condòmini iOS / Android",
              "Assemblea Live & Voto Smartphone",
              "Generazione Registro GDPR & Privacy"
            ].map((feat, i) => (
              <div key={i} className="flex items-center gap-3">
                <CloudLightning className="text-green-500 w-6 h-6 flex-shrink-0" />
                <span className="text-green-800 font-semibold">{feat}</span>
              </div>
            ))}
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
