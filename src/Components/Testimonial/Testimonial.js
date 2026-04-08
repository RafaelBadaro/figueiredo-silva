import React from 'react';

export default function Testimonial() {
  return (
    <section className="py-32 px-12 bg-surface">
      <div className="max-w-4xl mx-auto text-center">
        <span
          className="material-symbols-outlined text-secondary/30 text-8xl mb-8"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          format_quote
        </span>
        <p className="font-headline text-2xl md:text-3xl text-on-surface italic leading-relaxed mb-12">
          "A Figueiredo Silva não apenas resolve problemas jurídicos; eles antecipam cenários e protegem o futuro do nosso grupo com uma visão que vai muito além dos códigos e tribunais."
        </p>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-surface-container-high mb-4 overflow-hidden">
            <img
              alt="Retrato Cliente"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB10ZZJd7xzHrxkGY3EbGSNgmiJjurJoYnGzp04teGnu3izGOpROCHeUVZZez0_Av0lzNo1_6xDragmtxIsnRZGs4CXljA7Yuf6NpRatdVfjhYNN_UXjIbnbOT-9LSIVECMNwnzFMx6mccD6cjF73NvXGzZyoyPQ4jvumYFI5rFbZMab4Fas39CN-oAY6trroRXax2tO30YcrZmXt_aYZOkCfgmZbVd9bbtUGKK3_2irwaiH-yiQyBnT9KkBYVXVhfzSIRwqkYx91Q"
            />
          </div>
          <h4 className="font-headline font-bold text-primary">Dr. Ricardo Mello</h4>
          <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant">CEO, Mello &amp; Co. Investimentos</p>
        </div>
      </div>
    </section>
  );
}
