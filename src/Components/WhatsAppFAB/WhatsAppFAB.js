import React from 'react';

export default function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/5531996118468"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-[#25D366] text-white rounded-full flex items-center gap-3 px-5 h-12 shadow-2xl z-50 hover:scale-105 transition-transform"
    >
      <span
        className="material-symbols-outlined text-xl"
        data-icon="chat"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        chat
      </span>
      <span className="font-label text-xs font-bold uppercase tracking-[0.2em]">
        WhatsApp
      </span>
    </a>
  );
}
