import React from "react";
import { Sparkles, Check, MessageCircle, Shield, CalendarCheck, Receipt } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface PromotionsProps {
  onSelectTreatment: (treatmentName: string) => void;
}

export const Promotions: React.FC<PromotionsProps> = ({ onSelectTreatment }) => {
  const promoList = [
    {
      id: "blanqueamiento",
      title: "Blanqueamiento Dental Láser Zoom",
      subtitle: "+ Profilaxis ultrasónica y pulido de regalo.",
      oldPrice: "S/ 380",
      currentPrice: "S/ 189",
      discount: "-50% DCTO",
      note: "Dientes hasta 4 tonos más blancos en 1 hora.",
      highlight: true,
      popularTag: "⭐ MÁS SOLICITADO",
      features: [
        "1 Sesión de Láser Fotoactivado",
        "Limpieza con Ultrasonido sin dolor",
        "Gel desensibilizante protector incluido",
        "Diagnóstico digital con cámara intraoral",
      ],
      buttonText: "Reservar Oferta S/ 189",
      treatmentQuery: "Blanqueamiento Dental Láser",
    },
    {
      id: "ortodoncia",
      title: "Ortodoncia Estética o Metálica",
      subtitle: "Alineación perfecta para niños, jóvenes y adultos.",
      oldPrice: "Instalación inicial desde:",
      currentPrice: "S/ 99",
      discount: "/ cuota mes",
      note: "¡Estudio fotográfico y modelos 3D GRATIS!",
      highlight: false,
      popularTag: null,
      features: [
        "Brackets autoligados o zafiro estéticos",
        "Plan de cuotas sin intereses",
        "Especialista en Ortodoncia certificado",
        "Control mensual personalizado",
      ],
      buttonText: "Pedir Evaluación Gratis",
      treatmentQuery: "Ortodoncia y Brackets",
    },
    {
      id: "implantes",
      title: "Implante Dental de Titanio",
      subtitle: "Recupera la función y estética como un diente natural.",
      oldPrice: "Antes: S/ 2,200",
      currentPrice: "S/ 1,399",
      discount: "OFERTA",
      note: "Titanio biocompatible grado médico europeo.",
      highlight: false,
      popularTag: null,
      features: [
        "Cirugía guiada por tomografía 3D",
        "Garantía escrita del implante",
        "Cirujano bucal y maxilofacial",
        "Financiación hasta en 12 cuotas",
      ],
      buttonText: "Consultar Implante",
      treatmentQuery: "Implante Dental de Titanio",
    },
    {
      id: "limpieza",
      title: "Pack Prevención Dental",
      subtitle: "Limpieza completa + Detección temprana de caries.",
      oldPrice: "Antes: S/ 160",
      currentPrice: "S/ 69",
      discount: "POPULAR",
      note: "Para adultos y niños. Sin dolor.",
      highlight: false,
      popularTag: null,
      features: [
        "Destartraje con ultrasonido",
        "Profilaxis con pasta abrasiva de menta",
        "Aplicación de flúor barniz protector",
        "Odontograma digital completo",
      ],
      buttonText: "Agendar Pack S/ 69",
      treatmentQuery: "Pack Limpieza Dental S/69",
    },
  ];

  return (
    <section id="promociones" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="dentalGreen" className="px-3 py-1 text-xs uppercase tracking-widest">
            🔥 OFERTAS EXCLUSIVAS DEL MES
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Promociones Especiales en Lima Centro
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Diseñamos estas promociones para que sonreír no sea un lujo. Precios en Soles (S/.) con garantía médica y diagnóstico sin costo.
          </p>
        </div>

        {/* Promos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {promoList.map((promo) => (
            <Card
              key={promo.id}
              className={`flex flex-col justify-between relative hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ${
                promo.highlight ? "border-2 border-emerald-500 shadow-lg" : "border-slate-200"
              }`}
            >
              {promo.popularTag && (
                <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white font-extrabold text-[11px] uppercase px-4 py-1 rounded-full shadow-md">
                  {promo.popularTag}
                </div>
              )}

              <div>
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center text-xl mb-2">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{promo.title}</CardTitle>
                  <p className="text-xs text-slate-500 mt-1">{promo.subtitle}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-xs text-slate-400 line-through font-medium block">
                      {promo.oldPrice}
                    </span>
                    <div className="flex items-baseline space-x-2 mt-0.5">
                      <span className="text-3xl font-extrabold text-slate-900">{promo.currentPrice}</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">
                        {promo.discount}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1">{promo.note}</p>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-600">
                    {promo.features.map((feat, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>

              <CardFooter className="pt-2">
                <Button
                  variant={promo.highlight ? "dentalGreen" : "dentalBlue"}
                  onClick={() => onSelectTreatment(promo.treatmentQuery)}
                  className="w-full flex items-center justify-center space-x-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{promo.buttonText}</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Trust Footnotes */}
        <div className="mt-12 text-center text-xs text-slate-500 flex items-center justify-center space-x-6 flex-wrap gap-y-2">
          <span className="flex items-center">
            <Shield className="w-4 h-4 text-emerald-500 mr-1.5" /> Sin pagos por adelantado
          </span>
          <span className="flex items-center">
            <CalendarCheck className="w-4 h-4 text-sky-600 mr-1.5" /> Cambios de fecha sin penalidad
          </span>
          <span className="flex items-center">
            <Receipt className="w-4 h-4 text-slate-400 mr-1.5" /> Boleta o Factura electrónica
          </span>
        </div>

      </div>
    </section>
  );
};
