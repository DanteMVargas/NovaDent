import React from "react";
import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      <a
        href="https://wa.me/51987654321?text=Hola%20NovaDent%2C%20quisiera%20informaci%C3%B3n%20sobre%20la%20promoci%C3%B3n%20dental%20en%20Lima%20Centro"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center text-3xl shadow-2xl hover:bg-emerald-600 transition animate-pulse-glow"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-8 h-8 fill-white" />
        
        <span className="absolute right-16 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          ¿Consultas? ¡Escríbenos ahora!
        </span>
      </a>
    </div>
  );
};
