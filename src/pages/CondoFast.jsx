import React from 'react';
import { Building2, CloudLightning, ShieldCheck, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CondoFastLogo from '../components/CondoFastLogo';

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

      {/* Cos'è il Servizio Cloud Integrato */}
      <div className="max-w-5xl mx-auto mb-24 px-4">
        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Il modello Cloud Integrato</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Abbiamo rivoluzionato il modo in cui paghi il software di studio, trasformandolo da centro di costo a investimento a zero impatto economico per lo Studio.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <CloudLightning className="text-green-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sinergia Totale</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lo Studio usufruisce di tariffe agevolate imbattibili, in cambio dell'adozione dell'infrastruttura Cloud Integrata per i propri condomìni.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <Building2 className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Imputazione a Bilancio</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Il costo dei servizi telematici dei condomìni è regolarmente inserito a bilancio (ex Art. 1130 c.c.), azzerando la spesa per l'Amministratore.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <ShieldCheck className="text-indigo-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Vantaggio per i Condòmini</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                I condòmini ottengono servizi di altissimo livello: conformità GDPR, Open Banking, pagamenti 1-Click e l'esclusiva App mobile dedicata.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modello Bundle Condòmini */}
      <div className="max-w-5xl mx-auto mb-24 px-4">
        <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8 md:p-12 shadow-inner">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">L'infrastruttura digitale per i tuoi condomìni</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Per accedere alle tariffe "Cloud Integrato", lo Studio attiva sui propri condomìni uno dei seguenti pacchetti annuali, imputati regolarmente a bilancio condominiale (ex Art. 1130 c.c.).
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Bundle Compliance */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border-t-4 border-blue-400 flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Bundle Compliance Base</h3>
              <div className="text-3xl font-black text-blue-600 mb-4">129€<span className="text-base font-normal text-gray-500"> /anno a condominio</span></div>
              <p className="text-gray-600 mb-6 flex-grow">
                Il pacchetto fondamentale per la compliance normativa e l'efficienza dello Studio.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <ShieldCheck className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Conformità GDPR e conservazione cloud sostitutiva</span>
                </li>
                <li className="flex items-start">
                  <Cpu className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Open Banking per Riconciliazione Automatica e flussi PSD2</span>
                </li>
              </ul>
            </div>

            {/* Bundle Premium */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border-t-4 border-indigo-600 flex flex-col transform md:-translate-y-2">
              <div className="inline-block bg-indigo-100 text-indigo-800 text-xs font-bold px-3 py-1 rounded-full mb-3 w-max">IL PIÙ SCELTO DAI CONDÒMINI</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Bundle Premium App</h3>
              <div className="text-3xl font-black text-indigo-600 mb-4">199€<span className="text-base font-normal text-gray-500"> /anno a condominio</span></div>
              <p className="text-gray-600 mb-6 flex-grow">
                Trasparenza totale per i condòmini e drastica riduzione delle chiamate in Studio.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <ShieldCheck className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Tutto quello che c'è nel Bundle Compliance Base</span>
                </li>
                <li className="flex items-start">
                  <Building2 className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">App Condòmini iOS/Android (avvisi, rate, pagamenti in-app 1-Click)</span>
                </li>
                <li className="flex items-start">
                  <CloudLightning className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Piattaforma di Voto Live in Assemblea integrata</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section - Doppio Binario */}
      <div id="pricing" className="max-w-6xl mx-auto mb-24 scroll-mt-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Scegli la tua soluzione ideale</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            CondoFAST offre due modalità di accesso per adattarsi al modello di business del tuo Studio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* Lato Sinistro - Piani Esca (Solo Licenza Studio) */}
          <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-sm flex flex-col opacity-90">
            <div className="mb-6">
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">Standard</span>
              <h3 className="text-2xl font-bold text-gray-900">Solo Licenza Studio</h3>
              <p className="text-gray-500 mt-2 text-sm">Nessun adempimento e presidio normativo sui condomìni. Il software è un costo puro per il tuo Studio.</p>
            </div>
            
            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex justify-between items-end border-b border-gray-100 pb-3">
                <div>
                  <div className="font-semibold text-gray-800">Piano Base</div>
                  <div className="text-xs text-gray-500">Fino a 50 condomini</div>
                </div>
                <div className="text-xl font-bold text-gray-900">99€<span className="text-sm font-normal text-gray-500">/mese</span></div>
              </div>
              <div className="flex justify-between items-end border-b border-gray-100 pb-3">
                <div>
                  <div className="font-semibold text-gray-800">Piano Studio</div>
                  <div className="text-xs text-gray-500">Fino a 100 condomini</div>
                </div>
                <div className="text-xl font-bold text-gray-900">199€<span className="text-sm font-normal text-gray-500">/mese</span></div>
              </div>
              <div className="flex justify-between items-end pb-3">
                <div>
                  <div className="font-semibold text-gray-800">Piano Professional</div>
                  <div className="text-xs text-gray-500">Fino a 200 condomini</div>
                </div>
                <div className="text-xl font-bold text-gray-900">299€<span className="text-sm font-normal text-gray-500">/mese</span></div>
              </div>
            </div>
            
            <a href="https://condofast.it/app/register" className="w-full block text-center bg-gray-100 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors">
              Attiva Standard
            </a>
          </div>

          {/* Lato Destro - Piani Target (Cloud Integrato) */}
          <div className="bg-white border-2 border-green-500 rounded-3xl p-8 shadow-xl flex flex-col relative transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
              ★ MIGLIOR SCELTA B2B
            </div>
            <div className="mb-6 mt-2">
              <h3 className="text-2xl font-bold text-green-700">Cloud Integrato</h3>
              <p className="text-gray-600 mt-2 text-sm font-medium">Integrazione totale. Abbattimento dei costi dello Studio attraverso i Bundle Servizi Telematici sui condomìni.</p>
            </div>
            
            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex justify-between items-end border-b border-green-100 pb-3">
                <div>
                  <div className="font-semibold text-gray-800">Piano Base</div>
                  <div className="text-xs text-gray-500">Fino a 50 condomini</div>
                </div>
                <div className="text-2xl font-black text-green-600">19,90€<span className="text-sm font-normal text-gray-500">/mese</span></div>
              </div>
              <div className="flex justify-between items-end border-b border-green-100 pb-3">
                <div>
                  <div className="font-semibold text-gray-800">Piano Studio</div>
                  <div className="text-xs text-gray-500">Fino a 100 condomini</div>
                </div>
                <div className="text-2xl font-black text-green-600">29,90€<span className="text-sm font-normal text-gray-500">/mese</span></div>
              </div>
              <div className="flex justify-between items-end pb-3">
                <div>
                  <div className="font-semibold text-gray-800">Piano Professional</div>
                  <div className="text-xs text-gray-500">Fino a 200 condomini</div>
                </div>
                <div className="text-2xl font-black text-green-600">59,90€<span className="text-sm font-normal text-gray-500">/mese</span></div>
              </div>
            </div>
            
            <a href="https://condofast.it/app/register" className="w-full block text-center bg-green-500 text-white py-4 rounded-xl font-bold hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl">
              Inizia Ora con Cloud Integrato
            </a>

            <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
              <p className="text-xs text-green-800 leading-relaxed text-center">
                <strong>Disclaimer di Trasparenza:</strong> Tariffa riservata agli Studi che adottano l'infrastruttura Cloud Integrata per i propri condomìni (Bundle obbligatorio a partire da 129€/anno a stabile imputato a bilancio condominiale ex Art 1130 c.c.). Sono disponibili il "Bundle Compliance Base" (129€) e il "Bundle Premium App" (199€) per l'accesso ai condòmini.
              </p>
            </div>
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
