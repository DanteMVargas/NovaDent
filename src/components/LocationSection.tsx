import React from "react";
import { MapPin, Train, Clock, Compass, Navigation } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const LocationSection: React.FC = () => {
  return (
    <section id="ubicacion" className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Location Info */}
          <div className="lg:col-span-5 space-y-6">
            <Badge variant="dentalGreen" className="px-3 py-1 text-xs uppercase tracking-widest">
              📍 SEDE CENTRO HISTÓRICO
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Ubicación Céntrica y Accesible
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Nos encontramos en el corazón de Lima, a pocos metros de la Plaza San Martín y de la Estación Jirón de la Unión del Metropolitano.
            </p>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Dirección Exacta</p>
                  <p className="font-extrabold text-slate-800 text-sm">Jr. Carabaya 450, Piso 3 (Of. 302)</p>
                  <p className="text-xs text-slate-500">Centro Histórico de Lima, Lima - Perú</p>
                  <p className="text-[11px] text-emerald-600 font-semibold mt-0.5">
                    Referencia: A media cuadra del Club de la Unión y Plaza San Martín.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 pt-3 border-t border-slate-100">
                <Train className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Cómo Llegar en Transporte</p>
                  <p className="text-xs text-slate-700"><strong>Metropolitano:</strong> Bajar en Estación Jirón de la Unión (caminar 2 minutos).</p>
                  <p className="text-xs text-slate-700"><strong>Corredor Azul:</strong> Paradero Huancavelica / Av. Tacna.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 pt-3 border-t border-slate-100">
                <Clock className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Horarios de Atención</p>
                  <p className="text-xs text-slate-700"><strong>Lunes a Sábado:</strong> 8:30 AM – 8:00 PM (Horario corrido)</p>
                  <p className="text-xs text-slate-700"><strong>Domingos:</strong> 9:00 AM – 2:00 PM (Emergencias previa cita)</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="dentalBlue" asChild className="flex items-center justify-center gap-2">
                <a
                  href="https://maps.google.com/?q=Jiron+Carabaya+450+Centro+de+Lima+Peru"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Abrir en Google Maps</span>
                </a>
              </Button>
              <Button variant="outline" asChild className="flex items-center justify-center gap-2 bg-white">
                <a
                  href="https://waze.com/ul?q=Jiron+Carabaya+450+Lima"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Compass className="w-4 h-4 text-sky-500" />
                  <span>Abrir en Waze</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Google Maps Embed Frame */}
          <div className="lg:col-span-7">
            <div className="bg-white p-3 rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
              <div className="relative w-full h-[420px] rounded-2xl overflow-hidden bg-slate-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.9904253303657!2d-77.03450282414704!3d-12.044145788192778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b598b9e59d%3A0x6b30c451dc937eb7!2sJr.%20Carabaya%2C%20Lima%2015001!5e0!3m2!1ses!2spe!4v1700000000000!5m2!1ses!2spe"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de ubicación NovaDent Centro de Lima"
                  className="w-full h-full"
                />

                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-lg border border-slate-200 text-left max-w-xs">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-xs font-bold text-slate-800">NovaDent Lima Centro</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">Estacionamiento vigilado cercano en Jr. Ucayali.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
