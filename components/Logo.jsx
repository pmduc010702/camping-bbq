import React from 'react';

// Logo Camping BBQ - dùng chung cho Nav, Mobile drawer, Footer.
// Có 3 size: 'sm' (footer), 'md' (mobile drawer), 'lg' (nav desktop).
export default function Logo({ size = 'md', className = '' }) {
  const sizes = {
    sm: 'h-9 w-9',
    md: 'h-10 w-10',
    lg: 'h-11 w-11 md:h-12 md:w-12',
  };

  return (
    <a
      href="#"
      className={`flex items-center gap-2.5 shrink-0 group ${className}`}
      aria-label="Camping BBQ - Trang chủ"
    >
      <img
        src="/images/logo.jpg"
        alt="Camping BBQ Logo"
        className={`${sizes[size]} object-contain rounded-md group-hover:scale-105 transition`}
      />
      <span className="font-display font-black text-sm md:text-base tracking-tight leading-none hidden sm:inline">
        CAMPING<span className="text-red-500">.</span>BBQ
      </span>
    </a>
  );
}
