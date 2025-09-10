import React from 'react';

/**
 * BrandLogo renders a stylized "FRENCH CROISSANT" wordmark
 * with an Eiffel Tower replacing the letter A, mimicking the
 * sample storefront sign. Designed to work on light headers.
 */
const BrandLogo = ({ className = '', compact = false }) => {
  const textBaseClasses = compact
    ? 'text-[16px] tracking-[0.08em]'
    : 'text-[18px] sm:text-[20px] md:text-[22px] tracking-[0.1em]';

  return (
    <div className={`inline-flex items-center select-none ${className}`} aria-label="French Croissant">
      {/* Layered text to get outlined serif effect */}
      <div className="relative font-serif uppercase leading-none">
        {/* Stroke layer */}
        <span
          className={`absolute inset-0 ${textBaseClasses}`}
          style={{
            WebkitTextStroke: '2px rgba(255, 255, 255, 0.98)',
            color: 'transparent',
            textShadow: '0 0 2px rgba(255,255,255,0.8), 0 0 1px rgba(255,255,255,0.8)'
          }}
        >
          FRENCH&nbsp;CROISS
        </span>
        {/* Fill layer */}
        <span className={`${textBaseClasses}`} style={{ color: '#1d1d1f' }}>
          FRENCH&nbsp;CROISS
        </span>
      </div>

      {/* Eiffel Tower glyph substituting the letter A */}
      <svg
        viewBox="0 0 36 60"
        width={compact ? 18 : 22}
        height={compact ? 30 : 36}
        className="mx-[2px]"
        aria-hidden="true"
      >
        {/* Tower outline */}
        <path
          d="M18 2 L28 34 L34 58 H2 L8 34 Z"
          fill="#1d1d1f"
          stroke="rgba(255,255,255,0.98)"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Crossbeams */}
        <path d="M8 34 H28" stroke="rgba(255,255,255,0.98)" strokeWidth="2" />
        <path d="M6 42 H30" stroke="rgba(255,255,255,0.98)" strokeWidth="2" />
        <path d="M4 50 H32" stroke="rgba(255,255,255,0.98)" strokeWidth="2" />
        {/* Spire */}
        <path d="M18 2 V12" stroke="rgba(255,255,255,0.98)" strokeWidth="2" />
      </svg>

      {/* Remaining letters "NT" with the same layered effect */}
      <div className="relative font-serif uppercase leading-none">
        <span
          className={`absolute inset-0 ${textBaseClasses}`}
          style={{
            WebkitTextStroke: '2px rgba(255, 255, 255, 0.98)',
            color: 'transparent',
            textShadow: '0 0 2px rgba(255,255,255,0.8), 0 0 1px rgba(255,255,255,0.8)'
          }}
        >
          NT
        </span>
        <span className={`${textBaseClasses}`} style={{ color: '#1d1d1f' }}>
          NT
        </span>
      </div>
    </div>
  );
};

export default BrandLogo;


