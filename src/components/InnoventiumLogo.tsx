import React from 'react';

interface InnoventiumLogoProps {
  className?: string;
  variant?: 'full' | 'emblem' | 'stacked' | 'horizontal';
  theme?: 'dark' | 'light' | 'auto';
  height?: number | string;
  animated?: boolean;
}

export const InnoventiumLogo: React.FC<InnoventiumLogoProps> = ({
  className = '',
  variant = 'full',
  theme = 'dark',
  height = 56,
  animated = false,
}) => {
  const isLight = theme === 'light';

  // The Emblem SVG containing the iconic tower torch, lightning bolt, orb, and flame
  const Emblem = (
    <svg
      viewBox="0 0 200 400"
      className={`inline-block shrink-0 ${animated ? 'filter drop-shadow-[0_0_15px_rgba(0,180,216,0.5)]' : ''}`}
      style={{ height: height, width: 'auto' }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Gradients matching the exact user uploaded logo */}
        <linearGradient id="inv-tower-left-blue" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0B3C68" />
          <stop offset="50%" stopColor="#0077A8" />
          <stop offset="100%" stopColor="#00B4D8" />
        </linearGradient>

        <linearGradient id="inv-tower-right-blue" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#082A4D" />
          <stop offset="50%" stopColor="#025A82" />
          <stop offset="100%" stopColor="#0088B0" />
        </linearGradient>

        <linearGradient id="inv-green-helix" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0F4C5C" />
          <stop offset="35%" stopColor="#2A7B6B" />
          <stop offset="70%" stopColor="#439A86" />
          <stop offset="100%" stopColor="#68B684" />
        </linearGradient>

        <linearGradient id="inv-gold-bolt" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F9E27E" />
          <stop offset="40%" stopColor="#E5B942" />
          <stop offset="80%" stopColor="#C49320" />
          <stop offset="100%" stopColor="#9C6F12" />
        </linearGradient>

        <radialGradient id="inv-orb-glow" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="30%" stopColor="#FFF2D4" />
          <stop offset="60%" stopColor="#E6C280" />
          <stop offset="90%" stopColor="#BA9045" />
          <stop offset="100%" stopColor="#8A631E" />
        </radialGradient>

        <linearGradient id="inv-flame-gold" x1="0%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#D4A738" />
          <stop offset="40%" stopColor="#E8C55A" />
          <stop offset="75%" stopColor="#FCE79D" />
          <stop offset="100%" stopColor="#DFAD39" />
        </linearGradient>

        <linearGradient id="inv-flame-green" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#2D6A4F" />
          <stop offset="50%" stopColor="#40916C" />
          <stop offset="100%" stopColor="#74C69D" />
        </linearGradient>

        {/* Soft Drop Shadow Filter */}
        <filter id="inv-glow-subtle" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Base Arch / Tower Foundation (Left leg) */}
      <path
        d="M 28 360 C 45 310, 68 250, 92 180 C 85 220, 68 290, 48 360 Z"
        fill="url(#inv-tower-left-blue)"
      />
      
      {/* Base Arch / Tower Foundation (Right leg) */}
      <path
        d="M 172 360 C 155 310, 132 250, 108 180 C 115 220, 132 290, 152 360 Z"
        fill="url(#inv-tower-right-blue)"
      />

      {/* Interlaced Inner Arches and ribbons forming the "A" lattice */}
      <path
        d="M 48 360 C 70 310, 90 270, 100 245 C 110 270, 130 310, 152 360 C 135 340, 115 315, 100 280 C 85 315, 65 340, 48 360 Z"
        fill="#041E3A"
        opacity="0.85"
      />

      <path
        d="M 40 360 C 65 315, 88 260, 98 220 C 92 245, 80 295, 62 360 Z"
        fill="url(#inv-tower-left-blue)"
      />

      {/* Swirling DNA-like Helix Ribbons (Teal to Green) */}
      <path
        d="M 75 250 C 90 220, 115 190, 125 155 C 118 165, 100 185, 82 220 Z"
        fill="url(#inv-green-helix)"
      />
      <path
        d="M 125 250 C 110 220, 85 190, 75 155 C 82 165, 100 185, 118 220 Z"
        fill="url(#inv-green-helix)"
      />

      {/* Upward Neck Strands enclosing the core */}
      <path
        d="M 82 155 C 75 125, 78 95, 88 70 C 84 88, 82 110, 88 135 Z"
        fill="url(#inv-flame-green)"
      />
      <path
        d="M 118 155 C 125 125, 122 95, 112 70 C 116 88, 118 110, 112 135 Z"
        fill="url(#inv-flame-green)"
      />

      {/* Central Golden Lightning Spark */}
      <polygon
        points="108,125 90,165 104,165 92,205 120,155 105,155"
        fill="url(#inv-gold-bolt)"
        filter="url(#inv-glow-subtle)"
      />

      {/* Golden Glowing Orb / Pearl at the apex of the tower */}
      <circle
        cx="100"
        cy="92"
        r="22"
        fill="url(#inv-orb-glow)"
        filter="url(#inv-glow-subtle)"
      />

      {/* Top Rising Flame Ribbons */}
      <path
        d="M 98 70 C 92 48, 102 30, 105 12 C 109 25, 112 45, 106 68 Z"
        fill="url(#inv-flame-gold)"
      />
      <path
        d="M 88 65 C 82 48, 90 32, 94 20 C 95 32, 92 48, 96 60 Z"
        fill="url(#inv-flame-gold)"
        opacity="0.9"
      />
      <path
        d="M 112 65 C 118 48, 110 32, 106 20 C 105 32, 108 48, 104 60 Z"
        fill="url(#inv-flame-gold)"
        opacity="0.9"
      />
    </svg>
  );

  if (variant === 'emblem') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {Emblem}
      </div>
    );
  }

  return (
    <div 
      className={`inline-flex items-center gap-3 sm:gap-4 select-none ${
        variant === 'stacked' ? 'flex-col text-center' : 'flex-row'
      } ${className}`}
    >
      {/* Emblem */}
      <div className="flex items-center justify-center shrink-0">
        {Emblem}
      </div>

      {/* Typography & Golden Horizontal Line */}
      <div className={`flex flex-col ${variant === 'stacked' ? 'items-center' : 'items-start justify-center'}`}>
        
        {/* "INNOVENTIUM" */}
        <div className="flex items-baseline">
          <span 
            className={`font-display font-extrabold tracking-[0.06em] leading-none ${
              isLight 
                ? 'text-[#0B2545]' 
                : 'text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#E2F1F8] to-[#D4AF37]'
            }`}
            style={{ 
              fontSize: typeof height === 'number' ? `${Math.max(16, height * 0.46)}px` : '1.75rem',
              letterSpacing: '0.04em'
            }}
          >
            INNOVENTIUM
          </span>
        </div>

        {/* Golden Underline Bar */}
        <div 
          className="w-full h-[2px] sm:h-[2.5px] bg-gradient-to-r from-[#C5A059] via-[#E8C547] to-[#B38F3F] my-1 sm:my-1.5 rounded-full shadow-[0_0_8px_rgba(232,197,71,0.4)]" 
        />

        {/* "innovacion perpetua" */}
        <span 
          className={`font-sans tracking-[0.14em] lowercase leading-none font-semibold ${
            isLight ? 'text-[#0B2545]' : 'text-[#00B4D8]'
          }`}
          style={{ 
            fontSize: typeof height === 'number' ? `${Math.max(10, height * 0.23)}px` : '0.85rem'
          }}
        >
          innovacion perpetua
        </span>
      </div>
    </div>
  );
};
