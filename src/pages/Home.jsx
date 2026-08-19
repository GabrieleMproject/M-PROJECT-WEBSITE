import React from 'react';
import { Link } from 'react-router-dom';
import CondoFastLogo, { CondoFastIcon } from '../components/CondoFastLogo';

export default function Home() {
  return (
    <main className="flex-grow pt-32 pb-16 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900">
          Sviluppiamo il futuro. <br className="hidden md:block"/>
          <span className="text-gray-400">Oggi.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
          M PROJECT S.R.L. crea soluzioni software avanzate per semplificare la vita dei professionisti.
        </p>
      </div>

      {/* Products Grid */}
      <div className="max-w-2xl mx-auto mt-24">
        
        {/* CondoFast Card */}
        <Link to="/condofast" className="group block h-full">
          <div className="h-full bg-white/70 backdrop-blur-md border border-white/20 shadow-lg rounded-3xl p-10 md:p-14 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <CondoFastLogo size={44} theme="light" className="group-hover:scale-105 transition-transform" />
              </div>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                Il gestionale cloud di ultima generazione per gli amministratori di condominio. Veloce, intelligente, ovunque.
              </p>
            </div>
            <div className="mt-12 flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
              Scopri di più <span className="text-xl ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </Link>

      </div>
    </main>
  );
}
