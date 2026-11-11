import React from "react";
import { Train, UserCheck, Sparkles, CircleDollarSign } from "lucide-react";

export const FeaturePillars: React.FC = () => {
  const pillars = [
    {
      icon: Train,
      title: "Fácil Acceso en Lima Centro",
      desc: "A 2 minutos de la Estación Metropolitano Jr. de la Unión. Céntrico y seguro.",
      color: "bg-sky-100 text-sky-600",
    },
    {
      icon: UserCheck,
      title: "Especialistas Certificados COP",
      desc: "Odontólogos con posgrados en estética, ortodoncia e implantología.",
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      icon: Sparkles,
      title: "Tecnología Láser 3D",
      desc: "Escáner intraoral 3D y blanqueamiento fotoactivado en una sola sesión.",
      color: "bg-sky-100 text-sky-600",
    },
    {
      icon: CircleDollarSign,
      title: "Precios Transparentes",
      desc: "Sin costos ocultos. Paga en cuotas mensuales y aprovecha promociones reales.",
      color: "bg-emerald-100 text-emerald-600",
    },
  ];

  return (
    <section className="py-10 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start space-x-4 hover:shadow-md transition"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${item.color}`}
                >
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
                  <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
