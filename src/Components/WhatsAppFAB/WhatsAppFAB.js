import React from 'react';

export default function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/553133004400"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-50 hover:scale-110 transition-transform"
    >
      <span
        className="material-symbols-outlined text-3xl"
        data-icon="chat"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        chat
      </span>
    </a>
  );
}
