'use client';

import React from 'react';

// Özel SVG İstanbul Silüeti - Industrial Heritage Renk Paleti
export default function IstanbulSkylineSVG() {
  return (
    <svg
      className="w-full h-auto"
      viewBox="0 0 1400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ maxHeight: '400px' }}
    >
      {/* Galata Kulesi (Sol) */}
      <g opacity="0.95">
        {/* Kule gövdesi */}
        <rect x="120" y="140" width="65" height="260" fill="#7a0004" rx="5" />
        <rect x="125" y="145" width="55" height="250" fill="#920407" rx="3" />
        
        {/* Üst kısım */}
        <rect x="110" y="120" width="85" height="25" fill="#a11411" rx="3" />
        
        {/* Konik çatı */}
        <path d="M152.5 40 L95 120 L210 120 Z" fill="#7b5800" />
        <circle cx="152.5" cy="38" r="12" fill="#f5be4d" />
        <rect x="148" y="25" width="9" height="15" fill="#fec654" />
        
        {/* Pencereler */}
        <rect x="140" y="180" width="12" height="18" fill="#f5be4d" opacity="0.6" rx="2" />
        <rect x="163" y="180" width="12" height="18" fill="#f5be4d" opacity="0.6" rx="2" />
        <rect x="140" y="220" width="12" height="18" fill="#f5be4d" opacity="0.6" rx="2" />
        <rect x="163" y="220" width="12" height="18" fill="#f5be4d" opacity="0.6" rx="2" />
        <rect x="140" y="260" width="12" height="18" fill="#f5be4d" opacity="0.6" rx="2" />
        <rect x="163" y="260" width="12" height="18" fill="#f5be4d" opacity="0.6" rx="2" />
      </g>

      {/* Sultan Ahmet Camii (Orta-Sol) */}
      <g opacity="0.95">
        {/* Ana kubbe */}
        <ellipse cx="400" cy="220" rx="90" ry="60" fill="#7a0004" />
        <ellipse cx="400" cy="225" rx="85" ry="55" fill="#920407" />
        <circle cx="400" cy="195" r="18" fill="#f5be4d" />
        
        {/* Yan kubbeler */}
        <ellipse cx="320" cy="250" rx="50" ry="35" fill="#7a0004" />
        <ellipse cx="480" cy="250" rx="50" ry="35" fill="#7a0004" />
        
        {/* Minareler */}
        <rect x="300" y="200" width="18" height="200" fill="#920407" rx="2" />
        <rect x="380" y="180" width="18" height="220" fill="#920407" rx="2" />
        <rect x="402" y="180" width="18" height="220" fill="#920407" rx="2" />
        <rect x="482" y="200" width="18" height="200" fill="#920407" rx="2" />
        
        {/* Minare üstleri */}
        <path d="M309 185 L300 200 L318 200 Z" fill="#7b5800" />
        <path d="M389 165 L380 180 L398 180 Z" fill="#7b5800" />
        <path d="M411 165 L402 180 L420 180 Z" fill="#7b5800" />
        <path d="M491 185 L482 200 L500 200 Z" fill="#7b5800" />
        
        {/* Hilaller */}
        <circle cx="309" cy="182" r="6" fill="#fec654" />
        <circle cx="389" cy="162" r="6" fill="#fec654" />
        <circle cx="411" cy="162" r="6" fill="#fec654" />
        <circle cx="491" cy="182" r="6" fill="#fec654" />
      </g>

      {/* Boğaziçi Köprüsü (Orta) */}
      <g opacity="0.9">
        {/* Ana yol */}
        <rect x="0" y="350" width="1400" height="15" fill="#7a0004" />
        <rect x="0" y="352" width="1400" height="10" fill="#920407" />
        
        {/* Sol direk */}
        <rect x="280" y="180" width="25" height="170" fill="#a11411" />
        <rect x="285" y="185" width="15" height="165" fill="#920407" />
        
        {/* Sağ direk */}
        <rect x="1095" y="180" width="25" height="170" fill="#a11411" />
        <rect x="1100" y="185" width="15" height="165" fill="#920407" />
        
        {/* Kablolar - Sol */}
        <line x1="292" y1="185" x2="100" y2="350" stroke="#5a403d" strokeWidth="2" opacity="0.7" />
        <line x1="292" y1="185" x2="200" y2="350" stroke="#5a403d" strokeWidth="2" opacity="0.7" />
        <line x1="292" y1="185" x2="400" y2="350" stroke="#5a403d" strokeWidth="2" opacity="0.7" />
        <line x1="292" y1="185" x2="500" y2="350" stroke="#5a403d" strokeWidth="2" opacity="0.7" />
        
        {/* Kablolar - Sağ */}
        <line x1="1107" y1="185" x2="900" y2="350" stroke="#5a403d" strokeWidth="2" opacity="0.7" />
        <line x1="1107" y1="185" x2="1000" y2="350" stroke="#5a403d" strokeWidth="2" opacity="0.7" />
        <line x1="1107" y1="185" x2="1200" y2="350" stroke="#5a403d" strokeWidth="2" opacity="0.7" />
        <line x1="1107" y1="185" x2="1300" y2="350" stroke="#5a403d" strokeWidth="2" opacity="0.7" />
      </g>

      {/* Kız Kulesi (Sağ) */}
      <g opacity="0.95">
        {/* Kule tabanı */}
        <rect x="850" y="260" width="55" height="140" fill="#7a0004" rx="4" />
        <rect x="855" y="265" width="45" height="135" fill="#920407" rx="3" />
        
        {/* Üst platform */}
        <rect x="840" y="245" width="75" height="20" fill="#a11411" rx="3" />
        
        {/* Konik çatı */}
        <path d="M877.5 210 L835 245 L920 245 Z" fill="#7b5800" />
        <circle cx="877.5" cy="208" r="10" fill="#f5be4d" />
        <rect x="874" y="200" width="7" height="10" fill="#fec654" />
        
        {/* Pencereler */}
        <rect x="865" y="285" width="10" height="15" fill="#f5be4d" opacity="0.6" rx="2" />
        <rect x="882" y="285" width="10" height="15" fill="#f5be4d" opacity="0.6" rx="2" />
        <rect x="865" y="320" width="10" height="15" fill="#f5be4d" opacity="0.6" rx="2" />
        <rect x="882" y="320" width="10" height="15" fill="#f5be4d" opacity="0.6" rx="2" />
      </g>

      {/* Binalar (Arka plan) */}
      <g opacity="0.75">
        <rect x="50" y="300" width="50" height="100" fill="#920407" rx="2" />
        <rect x="220" y="290" width="40" height="110" fill="#920407" rx="2" />
        <rect x="550" y="310" width="55" height="90" fill="#920407" rx="2" />
        <rect x="650" y="295" width="45" height="105" fill="#920407" rx="2" />
        <rect x="950" y="305" width="48" height="95" fill="#920407" rx="2" />
        <rect x="1050" y="285" width="60" height="115" fill="#920407" rx="2" />
        <rect x="1200" y="300" width="52" height="100" fill="#920407" rx="2" />
        <rect x="1300" y="310" width="48" height="90" fill="#920407" rx="2" />
        
        {/* Pencereler */}
        {[50, 220, 550, 650, 950, 1050, 1200, 1300].map((x, i) => (
          <g key={i}>
            <rect x={x + 10} y={320 + (i % 3) * 10} width="8" height="12" fill="#f5be4d" opacity="0.4" rx="1" />
            <rect x={x + 25} y={320 + (i % 3) * 10} width="8" height="12" fill="#f5be4d" opacity="0.4" rx="1" />
          </g>
        ))}
      </g>
    </svg>
  );
}
