import React from "react";
import { Star } from "lucide-react";

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Milagros Gutiérrez",
      district: "Lima Cercado",
      treatment: "Blanqueamiento Láser Zoom",
      time: "Hace 1 semana",
      avatarInitials: "MG",
      avatarColor: "bg-sky-200 text-sky-800",
      content:
        "Me hice el blanqueamiento con la promoción de la web y el cambio fue increíble en una sola hora. Lo mejor es que la clínica queda a dos cuadras de mi trabajo en Jirón Carabaya. Cero dolor y la Dra. Valeria es un amor.",
    },
    {
      name: "Renzo Tello",
      district: "Breña",
      treatment: "Ortodoncia Estética",
      time: "Hace 3 semanas",
      avatarInitials: "RT",
      avatarColor: "bg-emerald-200 text-emerald-800",
      content:
        "Tenía pánico a los dentistas por malas experiencias de niño. El Dr. Jorge me explicó todo con el escáner 3D y me colocó los brackets sin ninguna molestia. Además me dieron facilidad de pagar en cuotas mensuales con Yape.",
    },
    {
      name: "Carmen Palomino",
      district: "Rímac",
      treatment: "Urgencia Dental & Endodoncia",
      time: "Hace 1 mes",
      avatarInitials: "CP",
      avatarColor: "bg-sky-200 text-sky-800",
      content:
        "Fui por una emergencia de dolor de muela un sábado por la tarde. Me atendieron de inmediato en su sede de Lima Centro, me hicieron la radiografía gratis y me calmaron el dolor en el acto. 100% recomendados.",
    },
  ];

  return (
    <section id="testimonios" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center space-x-1 text-yellow-400 text-base mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-slate-800 font-extrabold text-sm ml-2">4.9 de 5 estrellas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Lo que opinan nuestros pacientes en Lima
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Opiniones de vecinos del Cercado de Lima, Breña, Jesús María y distritos aledaños.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div
              key={i}
              className="bg-slate-50 p-6 rounded-3xl border border-slate-200 relative flex flex-col justify-between hover:shadow-md transition"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-yellow-400 space-x-0.5">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">{rev.time}</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{rev.content}"
                </p>
              </div>

              <div className="flex items-center space-x-3 mt-6 pt-4 border-t border-slate-200">
                <div
                  className={`w-10 h-10 rounded-full font-bold flex items-center justify-center text-sm ${rev.avatarColor}`}
                >
                  {rev.avatarInitials}
                </div>
                <div>
                  <p className="font-bold text-sm text-slate-900">{rev.name}</p>
                  <p className="text-[11px] text-slate-500">
                    {rev.district} • {rev.treatment}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs font-semibold text-slate-600 hover:text-sky-600 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-full transition"
          >
            Ver más reseñas verificadas en Google Maps
          </a>
        </div>

      </div>
    </section>
  );
};
