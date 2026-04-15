import React from 'react';

const message = "Olá, vim pelo site e gostaria de mais informações.";
const WHATSAPP_URL = `https://wa.me/5531996118468?text=${encodeURIComponent(message)}`;

export default function WhatsAppFAB() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-[#25D366] text-white rounded-full flex items-center gap-3 px-5 h-12 shadow-2xl z-50 hover:scale-105 transition-transform"
    >
      <img
        src="/whatsapp.svg"
        alt="WhatsApp"
        className="w-5 h-5"
      />

      <span className="font-headline text-xs font-bold uppercase tracking-[0.2em]">
        Fale conosco
      </span>
    </a>
  );
}