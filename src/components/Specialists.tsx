import React from "react";
import { Badge } from "@/components/ui/badge";

export const Specialists: React.FC = () => {
  const doctors = [
    {
      name: "Dra. Valeria Mendoza",
      cop: "COP: 28415 • RNE: 1420",
      specialty: "Especialista en Estética y Rehabilitación Oral",
      bio: "Graduada con honores de la UNMSM. Más de 10 años devolviendo sonrisas naturales con carillas cerámicas y blanqueamiento láser.",
      img: "https://images.unsplash.com/photo-1594824813589-9a2cfb2f704d?auto=format&fit=crop&w=400&q=80",
      accent: "border-sky-100",
    },
    {
      name: "Dr. Jorge Huamán",
      cop: "COP: 19742 • RNE: 0982",
      specialty: "Ortodoncista y Máster en Alineadores 3D",
      bio: "Especialista certificado en ortodoncia invisible y brackets autoligados para niños, jóvenes y adultos.",
      img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80",
      accent: "border-emerald-100",
    },
    {
      name: "Dra. Claudia Paredes",
      cop: "COP: 31209 • RNE: 1845",
      specialty: "Cirugía Bucal e Implantes Dentales",
      bio: "Especialista en procedimientos indoloros, implantes guiados por tomografía y manejo de pacientes ansiosos con sedación.",
      img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
      accent: "border-sky-100",
    },
  ];

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="dentalGreen" className="px-3 py-1 text-xs uppercase tracking-widest">
            STAFF MÉDICO CERTIFICADO
          </Badge>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-3">
            Tus dientes en manos de especialistas
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Colegio Odontológico del Perú (COP) y Registro Nacional de Especialistas (RNE).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 flex flex-col items-center text-center hover:shadow-md transition"
            >
              <div className={`w-28 h-28 rounded-full overflow-hidden border-4 ${doc.accent} mb-4 shadow`}>
                <img src={doc.img} alt={doc.name} className="w-full h-full object-cover" />
              </div>
              <span className="text-[11px] font-bold text-sky-800 bg-sky-50 px-2.5 py-0.5 rounded-full mb-1">
                {doc.cop}
              </span>
              <h3 className="text-lg font-bold text-slate-900">{doc.name}</h3>
              <p className="text-xs text-emerald-600 font-semibold">{doc.specialty}</p>
              <p className="text-xs text-slate-500 mt-3 leading-relaxed">{doc.bio}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
