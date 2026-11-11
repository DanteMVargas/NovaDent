import React from "react";
import { MapPin, Gift, Star, ShieldCheck, CreditCard, Sparkles, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative bg-mesh-dental overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Location Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-semibold shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              <span>Sede Centro de Lima • Jr. Carabaya 450 (a pasos de Plaza San Martín)</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Vuelve a sonreír con seguridad en el{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-emerald-500">
                corazón de Lima
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Odontología de alta tecnología, <strong>sin dolor</strong> y con especialistas certificados por el COP. Disfruta de una atención cálida, diagnósticos digitales en 3D y facilidades de pago a tu alcance.
            </p>

            {/* Free Diagnosis Callout */}
            <div className="bg-emerald-50/90 border border-emerald-200 rounded-2xl p-4 max-w-xl mx-auto lg:mx-0 flex items-start space-x-3 text-left shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex-shrink-0 flex items-center justify-center font-bold text-lg shadow-sm">
                <Gift className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-emerald-950">¡Evaluación Integral + Radiografía Digital GRATIS!</h2>
                <p className="text-xs text-emerald-700 mt-0.5">Válido para nuevos pacientes que agenden desde esta web durante el mes.</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <Button
                variant="dentalGreen"
                size="lg"
                onClick={onOpenBooking}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 text-base shadow-lg shadow-emerald-500/25"
              >
                <MessageCircle className="w-5 h-5" />
                <span>¡Agendar mi Cita con Descuento!</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full sm:w-auto border-sky-200 text-sky-700 bg-sky-50/80 hover:bg-sky-100"
              >
                <a href="#promociones" className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-sky-600" />
                  <span>Ver Promociones</span>
                </a>
              </Button>
            </div>

            {/* Trust Metrics */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="text-left">
                <div className="flex items-center space-x-1 text-yellow-400 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-slate-900 font-extrabold text-sm ml-1">4.9</span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">+480 Reseñas Google</p>
              </div>

              <div className="text-left border-l border-slate-200 pl-4">
                <p className="text-lg font-extrabold text-sky-700 leading-none">+12,500</p>
                <p className="text-xs text-slate-500 mt-1 font-medium">Pacientes Satisfechos</p>
              </div>

              <div className="text-left border-l border-slate-200 pl-4">
                <p className="text-lg font-extrabold text-emerald-600 leading-none">15 Años</p>
                <p className="text-xs text-slate-500 mt-1 font-medium">Liderando en Lima</p>
              </div>
            </div>

          </div>

          {/* Right Visual Image & Badges */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />

            <div className="relative z-10 bg-white p-3 rounded-3xl shadow-2xl border border-slate-100">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                  alt="Clínica Dental NovaDent Centro de Lima"
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <Badge variant="dentalGreen" className="mb-1 text-[10px]">
                    TECNOLOGÍA LÁSER 3D
                  </Badge>
                  <p className="text-lg font-bold">Ambientes Esterilizados y Cómodos</p>
                  <p className="text-xs text-slate-200">Sede equipada con sillones ergonómicos y radiología digital.</p>
                </div>
              </div>

              {/* Floating Badge 1: Sin Dolor */}
              <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-md border border-slate-100 py-2.5 px-4 rounded-2xl shadow-xl flex items-center space-x-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center text-lg">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-slate-900">Tratamientos Sin Dolor</p>
                  <p className="text-[11px] text-slate-500">Anestesia computarizada suave</p>
                </div>
              </div>

              {/* Floating Badge 2: Facilidades de pago */}
              <div className="absolute -bottom-5 -right-4 bg-white/95 backdrop-blur-md border border-slate-100 py-3 px-4 rounded-2xl shadow-xl flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-lg">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-slate-900">Facilidades de Pago</p>
                  <p className="text-[11px] text-slate-500">Yape, Plin y Cuotas sin Interés</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
