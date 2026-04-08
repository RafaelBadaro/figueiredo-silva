import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#050F21] text-white w-full border-t border-white/5 py-12 px-12 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex flex-col items-center md:items-start gap-2">
        <span className="font-headline text-lg text-[#775a00] uppercase font-black tracking-tighter">Figueiredo Silva</span>
        <p className="font-label text-[10px] uppercase tracking-widest text-white/40">
          © 2024 Figueiredo Silva Advogados Associados. Todos os direitos reservados.
        </p>
      </div>
      <div className="flex gap-8">
        <button
          className="font-label text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors"
        >
          Termos de Uso
        </button>
        <button
          className="font-label text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors"
        >
          Política de Privacidade
        </button>
        <button
          className="font-label text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors"
        >
          Ética e Compliance
        </button>
      </div>
      <div className="flex gap-4">
        <button
          className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all"
        >
          <span className="material-symbols-outlined text-sm" data-icon="share">
            share
          </span>
        </button>
        <button
          className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all"
        >
          <span className="material-symbols-outlined text-sm" data-icon="work">
            work
          </span>
        </button>
      </div>
    </footer>
  );
}
