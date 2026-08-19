import React from 'react';

export function CondoFastIcon({ size = 48, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block align-middle transition-transform duration-300 ${className}`}
      style={{ overflow: 'visible' }}
    >
      <defs>
        <linearGradient id="mpWL" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        
        <linearGradient id="mpWD" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
        
        <linearGradient id="mpWH" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        
        <linearGradient id="mpSF" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="50%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>

        <filter id="mpNG" x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Torre 1 (Sinistra) */}
      <g>
        <path d="M 20 55 L 35 63 L 35 85 L 20 77 Z" fill="url(#mpWD)" />
        <path d="M 35 63 L 50 55 L 50 77 L 35 85 Z" fill="url(#mpWL)" />
        <path d="M 20 55 L 35 47 L 50 55 L 35 63 Z" fill="url(#mpWH)" />
        <g fill="#e0f2fe" opacity="0.95">
          <path d="M 23 63 L 26 64.6 L 26 68.6 L 23 67 Z" opacity="0.9" fill="#38bdf8" />
          <path d="M 28 65.7 L 31 67.3 L 31 71.3 L 28 69.7 Z" opacity="0.5" />
        </g>
      </g>

      {/* Torre 2 (Centro) */}
      <g>
        <path d="M 38 38 L 53 46 L 53 78 L 38 70 Z" fill="url(#mpWD)" />
        <path d="M 53 46 L 68 38 L 68 70 L 53 78 Z" fill="url(#mpWL)" />
        <path d="M 38 38 L 53 30 L 68 38 L 53 46 Z" fill="url(#mpWH)" opacity="0.95" />
        <g fill="#e0f2fe" opacity="0.95">
          <path d="M 41 46 L 44 47.6 L 44 51.6 L 41 50 Z" opacity="0.9" />
          <path d="M 46 48.7 L 49 50.3 L 49 54.3 L 46 52.7 Z" opacity="0.45" />
          <path d="M 41 54 L 44 55.6 L 44 59.6 L 41 58 Z" opacity="0.8" fill="#38bdf8" />
          <path d="M 46 56.7 L 49 58.3 L 49 62.3 L 46 60.7 Z" opacity="0.9" />
        </g>
      </g>

      {/* Torre 3 (Destra) */}
      <g>
        <path d="M 56 25 L 71 33 L 71 68 L 56 60 Z" fill="url(#mpWD)" />
        <path d="M 71 33 L 86 25 L 86 60 L 71 68 Z" fill="url(#mpWL)" />
        <path d="M 56 25 L 71 17 L 86 25 L 71 33 Z" fill="url(#mpWH)" opacity="0.9" />
        <g fill="#e0f2fe" opacity="0.95">
          <path d="M 59 33 L 62 34.6 L 62 38.6 L 59 37 Z" opacity="0.9" />
          <path d="M 64 35.7 L 67 37.3 L 67 41.3 L 64 39.7 Z" opacity="0.4" />
          <path d="M 59 41 L 62 42.6 L 62 46.6 L 59 45 Z" opacity="0.8" fill="#38bdf8" />
          <path d="M 64 43.7 L 67 45.3 L 67 49.3 L 64 47.7 Z" opacity="0.9" />
          <path d="M 59 49 L 62 50.6 L 62 54.6 L 59 53 Z" opacity="0.5" />
          <path d="M 64 51.7 L 67 53.3 L 67 57.3 L 64 55.7 Z" opacity="0.85" />
        </g>
      </g>

      {/* Onda Smart Flow */}
      <path
        d="M 12 73 C 32 93, 68 93, 88 53"
        stroke="url(#mpSF)"
        strokeWidth="4.5"
        strokeLinecap="round"
        filter="url(#mpNG)"
      />
    </svg>
  );
}

export default function CondoFastLogo({ size = 40, theme = 'dark', showText = true, className = '' }) {
  const isDark = theme === 'dark';
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <CondoFastIcon size={size} />
      {showText && (
        <span className="text-2xl md:text-3xl font-extrabold tracking-tight" style={{ fontFamily: 'Sora, sans-serif' }}>
          <span className={isDark ? 'text-white' : 'text-gray-900'}>Condo</span>
          <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>FAST</span>
        </span>
      )}
    </div>
  );
}
