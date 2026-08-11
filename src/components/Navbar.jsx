import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border border-white/20 shadow-sm px-6 py-4 flex justify-between items-center transition-all duration-300">
      <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
        <img src={logo} alt="M Project Logo" className="h-8 md:h-10 w-auto" />
      </Link>
      <div className="flex items-center space-x-6">
        <Link to="/condofast" className="hidden md:block text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
          CondoFast
        </Link>
        <Link to="/ticketfast" className="hidden md:block text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors">
          TicketFast
        </Link>
        <a href="mailto:info@mprojectsrl.it" className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition-colors shadow-md">
          Contattaci
        </a>
      </div>
    </nav>
  );
}
