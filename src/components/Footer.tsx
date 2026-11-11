import React from "react";
import { Sparkles, MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-emerald-400 flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white">Nova</span>
                <span className="text-xl font-extrabold text-emerald-400">Dent</span>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Clínica Odontológica Especializada en el Centro Histórico de Lima. Comprometidos con tu salud oral, estética y confort.
            </p>
            <div className="text-[11px] text-slate-500">
              <p>RUC: 20608945123</p>
              <p>Registro Sanitario COP / DIRIS Lima Centro</p>
            </div>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">Tratamientos</h4>
            <ul className="space-y-2">
              <li><a href="#promociones" className="hover:text-white transition">Blanqueamiento Láser Zoom</a></li>
              <li><a href="#promociones" className="hover:text-white transition">Ortodoncia & Brackets</a></li>
              <li><a href="#especialidades" className="hover:text-white transition">Implantes Dentales de Titanio</a></li>
              <li><a href="#especialidades" className="hover:text-white transition">Diseño de Sonrisa & Carillas</a></li>
              <li><a href="#especialidades" className="hover:text-white transition">Endodoncia sin Dolor</a></li>
              <li><a href="#especialidades" className="hover:text-white transition">Limpieza y Destartraje</a></li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#promociones" className="hover:text-white transition">Promociones Activas</a></li>
              <li><a href="#antes-despues" className="hover:text-white transition">Casos Antes y Después</a></li>
              <li><a href="#ubicacion" className="hover:text-white transition">Cómo llegar en Metropolitano</a></li>
              <li><a href="#faq" className="hover:text-white transition">Preguntas Frecuentes</a></li>
              <li><a href="#" className="hover:text-white transition">Libro de Reclamaciones</a></li>
              <li><a href="#" className="hover:text-white transition">Términos y Condiciones</a></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">Contacto Directo</h4>
            <ul className="space-y-2.5">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Jr. Carabaya 450, Of. 302, Lima Cercado</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>(01) 427-8900</span>
              </li>
              <li className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>+51 987 654 321</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>citas@novadentlima.pe</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between text-slate-500 gap-4">
          <p>© 2026 NovaDent Lima Centro. Desarrollado con React, Node y shadcn/ui.</p>
          <p className="text-[11px]">Diseñado en blanco, azul médico y verde menta para una experiencia dental moderna en Lima, Perú.</p>
        </div>

      </div>
    </footer>
  );
};
