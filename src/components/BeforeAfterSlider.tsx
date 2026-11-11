import React, { useState } from "react";
import { Sparkles, MoveHorizontal, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface BeforeAfterSliderProps {
  onOpenBooking: (treatment?: string) => void;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ onOpenBooking }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section id="antes-despues" className="py-16 lg:py-24 bg-gradient-to-b from-sky-50/60 to-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Explanation */}
          <div className="lg:col-span-5 space-y-6">
            <Badge variant="dentalBlue" className="px-3 py-1 text-xs uppercase tracking-widest">
              RESULTADOS REALES
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Mira la transformación de nuestros pacientes en Lima
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Desliza la barra interactiva para comparar el cambio radical en el tono dental gracias a nuestro tratamiento de <strong>Blanqueamiento Láser y Profilaxis Ultrasónica</strong>.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Sesión Rápida de 60 Minutos</h4>
                  <p className="text-xs text-slate-500">Sin molestias ni daño al esmalte dental con tecnología fotoactivada europea.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Elimina Manchas Profundas</h4>
                  <p className="text-xs text-slate-500">Adiós a manchas de café, té y tabaco sin hipersensibilidad post-sesión.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Durabilidad Prolongada</h4>
                  <p className="text-xs text-slate-500">Incluye guía de cuidado y pasta remineralizante para mantener tu brillo.</p>
                </div>
              </div>
            </div>

            <div className="pt-3">
              <Button
                variant="dentalGreen"
                onClick={() => onOpenBooking("Blanqueamiento Dental Láser")}
                className="flex items-center space-x-2 shadow-md"
              >
                <Sparkles className="w-4 h-4" />
                <span>¡Quiero este cambio en mi sonrisa!</span>
              </Button>
            </div>
          </div>

          {/* Right Interactive Slider Box */}
          <div className="lg:col-span-7">
            <div className="bg-white p-4 rounded-3xl shadow-xl border border-slate-200">
              
              <div className="flex items-center justify-between pb-3 px-2 text-xs font-bold text-slate-500">
                <span className="text-amber-600 flex items-center">
                  ← ANTES (Dientes opacos / manchas)
                </span>
                <span className="text-emerald-600 flex items-center">
                  DESPUÉS (Blanqueamiento Láser) →
                </span>
              </div>

              {/* Container */}
              <div className="relative w-full h-[380px] rounded-2xl overflow-hidden select-none shadow-inner">
                {/* After Image (Background) */}
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80"
                  alt="Dientes blancos después del tratamiento"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Before Image (Clipped Left Layer) */}
                <div
                  className="absolute inset-y-0 left-0 overflow-hidden border-r-4 border-white shadow-xl"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=1200&q=80"
                    alt="Dientes antes del blanqueamiento"
                    className="absolute top-0 left-0 h-full max-w-none object-cover"
                    style={{
                      width: "100%",
                      minWidth: "600px",
                      filter: "sepia(0.35) brightness(0.85) saturate(1.4)",
                    }}
                  />
                  <span className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm text-white font-bold text-xs uppercase px-3 py-1 rounded-md shadow">
                    Antes
                  </span>
                </div>

                {/* Badge After */}
                <span className="absolute top-4 right-4 bg-emerald-600/90 backdrop-blur-sm text-white font-bold text-xs uppercase px-3 py-1 rounded-md shadow">
                  Después
                </span>

                {/* Draggable Divider Handle */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-2xl flex items-center justify-center text-sky-600 pointer-events-none z-20 border-2 border-sky-400"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <MoveHorizontal className="w-5 h-5" />
                </div>

                {/* Invisible input range on top */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={handleSliderChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                  aria-label="Comparativa de antes y después"
                />
              </div>

              <p className="text-center text-xs text-slate-400 mt-3 flex items-center justify-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                Desliza horizontalmente la barra para comparar el tono dental.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
