import React from 'react';
import { Link } from 'react-router-dom';
import logoNegative from '../assets/logo-negative.svg';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-16 px-6 text-center text-gray-400 text-sm mt-auto rounded-t-3xl md:rounded-t-[3rem] mx-4 md:mx-8 mb-0 md:mb-0 shadow-2xl">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex justify-center mb-4">
          <Link to="/" className="hover:opacity-100 transition-opacity opacity-90">
            <img src={logoNegative} alt="M Project Logo" className="h-10 md:h-12 w-auto" />
          </Link>
        </div>
        <p className="text-gray-500">
          Sede Legale: Via Civati 23, 22031 Albavilla (CO)<br />
          P.IVA: 0431 4510134<br />
          PEC: infomproject.pec
        </p>
        <div className="pt-4 flex justify-center space-x-6 text-xs text-gray-500">
          <Link to="/condofast" className="hover:text-blue-400 transition-colors">CondoFast</Link>
          <Link to="/ticketfast" className="hover:text-purple-400 transition-colors">TicketFast</Link>
          <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Termini e Condizioni</a>
        </div>
        <div className="pt-4 text-xs text-gray-600">
          © {new Date().getFullYear()} M Project SRL. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
}
