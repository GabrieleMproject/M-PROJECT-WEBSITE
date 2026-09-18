const fs = require('fs');

let jsx = fs.readFileSync('src/pages/CondoFast.jsx', 'utf8');

// 1. Add useState
jsx = jsx.replace("import React from 'react';", "import React, { useState } from 'react';");

// 2. Add state variable
jsx = jsx.replace("export default function CondoFast() {", "export default function CondoFast() {\n  const [billingMode, setBillingMode] = useState('monthly');\n");

const newUI = `
      {/* Toggle Mensile/Annuale */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center p-1 bg-gray-100 rounded-full mb-4">
          <button
            onClick={() => setBillingMode('monthly')}
            className={\`px-6 py-2 rounded-full text-sm font-semibold transition-all \${
              billingMode === 'monthly'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }\`}
          >
            Mensile
          </button>
          <button
            onClick={() => setBillingMode('annual')}
            className={\`px-6 py-2 rounded-full text-sm font-semibold transition-all flex items-center \${
              billingMode === 'annual'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }\`}
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
          <span className="inline-block bg-green-500 text-white font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-3">Miglior Scelta per lo Studio</span>
          <h3 className="text-3xl font-bold text-green-700 mb-2">Piano Cloud Integrato</h3>
          <p className="text-green-800 font-medium max-w-2xl mx-auto">Abbatti i costi del software spostando il valore sui servizi telematici per i condomìni.</p>
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
            <h4 className="text-center text-xl font-bold text-gray-900 mb-8">Perché costa così poco? Il segreto del Cloud Integrato</h4>
            <div className="grid md:grid-cols-3 gap-8 mb-10 text-left">
              <div className="flex gap-4 items-start">
                <div className="bg-green-100 text-green-600 w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">Canone Simbolico</div>
                  <div className="text-sm text-gray-600 leading-relaxed">Lo Studio gode di tariffe B2B quasi azzerate per l'utilizzo del gestionale CondoFAST.</div>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">Servizi a Bilancio</div>
                  <div className="text-sm text-gray-600 leading-relaxed">I pacchetti telematici (es. Privacy, App) vengono approvati in assemblea e fatturati al condominio ex Art. 1130 c.c.</div>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-purple-100 text-purple-600 w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">Tutti Vincono</div>
                  <div className="text-sm text-gray-600 leading-relaxed">Tu abbatti i costi fissi. I condòmini ricevono un'App Premium dedicata. Zero frizione.</div>
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
        <h4 className="text-lg font-bold text-gray-700 mb-2">Preferisci accollarti interamente i costi sullo Studio?</h4>
        <p className="text-sm text-gray-500 mb-6 max-w-2xl mx-auto">Nessun adempimento e presidio normativo sui condomìni. Il software diventa un costo puro per il tuo Studio. Scegli il piano Standard.</p>
        
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
`;

const regex = /\{\/\* Cos'è il Servizio Cloud Integrato \*\/\}[\s\S]*?\{\/\* Vision Section \*\/\}/;

if (regex.test(jsx)) {
  jsx = jsx.replace(regex, newUI);
  fs.writeFileSync('src/pages/CondoFast.jsx', jsx, 'utf8');
  console.log("Successfully replaced UI section in React.");
} else {
  console.error("Could not find the target section in CondoFast.jsx.");
  process.exit(1);
}
