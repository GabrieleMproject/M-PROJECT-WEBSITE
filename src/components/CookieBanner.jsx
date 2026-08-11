import React, { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('mproject_cookie_consent');
    if (!consent) {
      // Piccolo ritardo per l'animazione di ingresso
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('mproject_cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-auto md:w-[450px] z-50 animate-fade-in-up">
      <div className="bg-gray-900/95 backdrop-blur-md border border-gray-700 shadow-2xl rounded-2xl p-6 text-white">
        <h3 className="font-semibold text-lg mb-2">Informativa sui Cookie 🍪</h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-6">
          Utilizziamo cookie tecnici per garantirti la migliore esperienza sul nostro sito. Continuando la navigazione acconsenti al loro utilizzo. 
          <a href="/privacy-policy" className="text-blue-400 hover:text-blue-300 ml-1 underline">Scopri di più</a>.
        </p>
        <div className="flex gap-4">
          <button 
            onClick={handleAccept}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-3 px-4 rounded-xl transition-colors shadow-lg"
          >
            Accetta e Chiudi
          </button>
        </div>
      </div>
    </div>
  );
}
