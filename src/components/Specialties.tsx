import React from "react";
import { Sparkles, Smile, CircleDot, Microscope, Baby, AlertCircle, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SpecialtiesProps {
  onSelectTreatment: (treatmentName: string) => void;
}

export const Specialties: React.FC<SpecialtiesProps> = ({ onSelectTreatment }) => {
  const list = [
    {
      icon: Sparkles,
      title: "Diseño de Sonrisa & Carillas",
      desc: "Carillas de resina y porcelana de alta gama para corregir alineación, color y forma de tus dientes.",
      treatment: "Diseño de Sonrisa",
      color: "bg-sky-600",
    },
    {
      icon: Smile,
      title: "Ortodoncia Invisible (Alineadores)",
      desc: "Corrige tu mordida y alineación de forma discreta, estética y removible sin usar brackets metálicos.",
      treatment: "Ortodoncia Invisible",
      color: "bg-emerald-600",
    },
    {
      icon: CircleDot,
      title: "Implantes & Cirugía Bucal",
      desc: "Reemplazo fijo de piezas perdidas con implantes de titanio oseointegrados y extracción atraumática de muelas del juicio.",
      treatment: "Implante Dental de Titanio",
      color: "bg-sky-600",
    },
    {
      icon: Microscope,
      title: "Endodoncia con Microscopio",
      desc: "Salvamos tu diente natural eliminando infecciones y dolores agudos en una sola sesión sin ninguna molestia.",
      treatment: "Endodoncia",
      color: "bg-emerald-600",
    },
    {
      icon: Baby,
      title: "Odontopediatría Amigable",
      desc: "Atención dulce y divertida para niños. Prevención de caries, sellantes y flúor en un ambiente cero estrés.",
      treatment: "Odontopediatría",
      color: "bg-sky-600",
    },
    {
      icon: AlertCircle,
      title: "Emergencias Dentales Lima",
      desc: "Atención prioritaria inmediata para dolores intensos, dientes fracturados o hemorragias dentales.",
      treatment: "Urgencia Dental",
      color: "bg-emerald-600",
    },
  ];

  return (
    <section id="especialidades" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="dentalBlue" className="px-3 py-1 text-xs uppercase tracking-widest">
            ATENCIÓN ODONTOLÓGICA INTEGRAL
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Nuestras Especialidades en Lima Centro
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Contamos con todas las ramas de la odontología bajo un mismo techo con equipamiento de vanguardia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {list.map((spec, i) => {
            const Icon = spec.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:bg-sky-50/30 transition duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-14 h-14 rounded-2xl ${spec.color} text-white flex items-center justify-center text-2xl mb-5 shadow-md group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-700 transition">
                    {spec.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">{spec.desc}</p>
                </div>

                <button
                  onClick={() => onSelectTreatment(spec.treatment)}
                  className="inline-flex items-center text-xs font-bold text-sky-600 mt-5 hover:text-sky-800 transition"
                >
                  Consultar con especialista <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
