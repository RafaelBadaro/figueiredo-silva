import React, { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Áreas de Atuação', href: '#areas' },
    { label: 'Sobre Nós', href: '#sobre-nos' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#faf8ff] dark:bg-[#050F21] flex justify-between items-center px-12 py-6 max-w-[1920px] mx-auto transition-all duration-300 shadow-sm">
      <div className="flex items-center">
        <img
          src="/figueiredo-silva-logo.png"
          alt="Figueiredo Silva Advogados Associados"
          className="h-16 md:h-24 w-auto"
        />
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[#050F21] dark:text-white/70 hover:text-[#775a00] font-headline font-bold tracking-tight transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#consulta"
          className="bg-primary text-on-primary px-6 py-2.5 rounded font-label text-sm font-bold uppercase tracking-widest hover:opacity-80 transition-all"
        >
          Consulta Prioritária
        </a>
      </div>
      
      <button
        className="md:hidden text-primary"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span className="material-symbols-outlined">menu</span>
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-[#050F21] md:hidden flex flex-col gap-4 p-6 border-t">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-primary dark:text-white hover:text-[#775a00] font-headline font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#consulta"
            className="bg-primary text-white px-4 py-2.5 rounded font-label text-sm font-bold uppercase tracking-widest text-center"
          >
            Consulta Prioritária
          </a>
        </div>
      )}
    </nav>
  );
}
