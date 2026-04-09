import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-[#050F21] text-white w-full border-t border-white/5 pt-12 pb-24 px-12">
            <div className="max-w-7xl mx-auto flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <a
                            href="https://www.instagram.com/figueiredosilvaadv?igsh=MWY4dGlyM3p0Nmt4ZQ=="
                            target="_blank"
                            rel="noreferrer"
                            className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 transition-all"
                            aria-label="Instagram - figueiredosilvaadv"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-white"
                            >
                                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
                                <path
                                    d="M7.75 7.75H8.5C8.91421 7.75 9.25 8.08579 9.25 8.5V9.25C9.25 9.66421 8.91421 10 8.5 10H7.75C7.33579 10 7 9.66421 7 9.25V8.5C7 8.08579 7.33579 7.75 7.75 7.75Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5ZM12 14.5C10.62 14.5 9.5 13.38 9.5 12C9.5 10.62 10.62 9.5 12 9.5C13.38 9.5 14.5 10.62 14.5 12C14.5 13.38 13.38 14.5 12 14.5Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                    </div>
                    <p className="font-label text-[10px] uppercase tracking-widest text-white/40">
                        © 2026 Todos os direitos reservados – Figueiredo Silva Advogados Associados
                    </p>
                </div>

                <div className="space-y-4 text-sm text-white/70">
                    <div>
                        <p className="font-label uppercase tracking-[0.35em] text-white/40 mb-1">Email</p>
                        <a href="mailto:figueiredosilva@terra.com.br" className="text-white hover:text-secondary transition-colors">
                            figueiredosilva@terra.com.br
                        </a>
                    </div>
                    <div>
                        <p className="font-label uppercase tracking-[0.35em] text-white/40 mb-1">Endereço</p>
                        <p>Av. do Contorno, 8000 – sala 1709, Santo Agostinho, Belo Horizonte – MG, 30110-932</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
