import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FaqSection: React.FC = () => {
  return (
    <section id="faq" className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <Badge variant="dentalBlue" className="px-3 py-1 text-xs uppercase tracking-widest">
            RESOLVEMOS TUS DUDAS
          </Badge>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-3">
            Preguntas Frecuentes de Pacientes
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Todo lo que necesitas saber antes de tu primera visita en nuestra sede Centro de Lima.
          </p>
        </div>

        <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              ¿La primera consulta y radiografía realmente son gratis?
            </AccordionTrigger>
            <AccordionContent>
              ¡Sí, 100% gratis y sin ningún compromiso! Incluye la revisión clínica completa con cámara intraoral, examen periodontal de encías y la toma de tu radiografía digital de diagnóstico. Te entregamos tu presupuesto transparente con opciones a tu medida.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              ¿El blanqueamiento dental láser causa dolor o sensibilidad?
            </AccordionTrigger>
            <AccordionContent>
              Utilizamos la última tecnología con geles fotoactivados y desensibilizantes de nanofosfato de calcio que protegen el esmalte dental. La gran mayoría de nuestros pacientes no experimentan molestia alguna durante ni después de la sesión.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              ¿Qué medios de pago y financiamiento aceptan en Lima?
            </AccordionTrigger>
            <AccordionContent>
              Aceptamos transferencias bancarias (BCP, BBVA, Interbank), <strong>Yape y Plin</strong>, tarjetas de débito y crédito (Visa, Mastercard, Diners) con opción de pagos en hasta <strong>12 cuotas sin intereses</strong> con tarjetas seleccionadas.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              ¿Atienden emergencias dentales los fines de semana?
            </AccordionTrigger>
            <AccordionContent>
              Sí. Atendemos de lunes a sábado de 8:30 AM a 8:00 PM corrido, y los domingos contamos con turno especial de emergencias de 9:00 AM a 2:00 PM previa coordinación inmediata a través de nuestro número de WhatsApp.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              ¿Cómo puedo separar mi cupo para la promoción web?
            </AccordionTrigger>
            <AccordionContent>
              Solo haz clic en cualquiera de los botones de WhatsApp o "Agendar Cita", completa tu nombre y día preferido, y nuestro equipo de admisiones te confirmará la reserva en menos de 5 minutos congelando el precio de la promoción.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

      </div>
    </section>
  );
};
