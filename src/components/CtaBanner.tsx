import React from "react";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CtaBannerProps {
  onOpenBooking: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-16 bg-gradient-to-tr from-sky-700 via-sky-600 to-emerald-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-dots opacity-10" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/30 inline-block">
          ¡Agenda hoy y asegura tu descuento!
        </span>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
          Tu nueva sonrisa te espera en el Centro de Lima
        </h2>
        
        <p className="text-sky-100 text-base sm:text-lg max-w-2xl mx-auto">
          No dejes pasar más tiempo. Obtén la sonrisa brillante y sana que mereces con atención personalizada y sin dolor.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={onOpenBooking}
            className="w-full sm:w-auto bg-white text-sky-800 hover:bg-slate-100 font-extrabold text-base shadow-xl flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5 text-emerald-600" />
            <span>Agendar por WhatsApp (Respuesta Inmediata)</span>
          </Button>

          <Button
            size="lg"
            variant="outline"
            asChild
            className="w-full sm:w-auto bg-sky-900/40 hover:bg-sky-900/60 border border-white/30 text-white font-bold"
          >
            <a href="tel:014278900" className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-300" />
              <span>Llamar al (01) 427-8900</span>
            </a>
          </Button>
        </div>

        <p className="text-xs text-sky-200 mt-4">
          📍 Jr. Carabaya 450, Centro de Lima (a 1 cuadra de Plaza San Martín) • Atención de Lunes a Sábado
        </p>
      </div>
    </section>
  );
};
