import React, { useState, useEffect } from "react";
import { Sparkles, MessageCircle, Lock, User, Phone, Tag, Calendar, Clock } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const WHATSAPP_PHONE = "51987654321";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTreatment?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialTreatment,
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [treatment, setTreatment] = useState(
    initialTreatment || "Blanqueamiento Dental Láser"
  );
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("Mañana (8:30 AM - 1:00 PM)");
  const [note, setNote] = useState("");

  useEffect(() => {
    if (initialTreatment) {
      setTreatment(initialTreatment);
    }
  }, [initialTreatment]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone) {
      alert("Por favor ingrese su nombre y teléfono.");
      return;
    }

    const message = `🦷 *¡HOLA NOVADENT LIMA CENTRO!* 🇵🇪
Quisiera solicitar una cita con la promoción web.

📋 *Mis Datos de Reserva:*
• *Nombre:* ${name}
• *Teléfono:* ${phone}
• *Tratamiento:* ${treatment}
• *Fecha preferida:* ${date || "Lo antes posible"}
• *Horario de preferencia:* ${timeSlot}
${note ? `• *Consulta adicional:* ${note}\n` : ""}
📍 *Sede:* Centro de Lima (Jr. Carabaya 450)
_¿Tienen disponibilidad para confirmar mi turno?_`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md p-0 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-sky-600 to-emerald-600 px-6 py-4 text-white">
          <DialogHeader>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <DialogTitle>Agendar Cita en Lima Centro</DialogTitle>
            </div>
            <DialogDescription>
              Evaluación Integral + Radiografía Digital Gratis
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <Label htmlFor="patient-name" className="mb-1 block">
              Nombre y Apellido *
            </Label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <Input
                id="patient-name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ej. Juan Pérez"
                className="pl-9"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="patient-phone" className="mb-1 block">
              Celular / WhatsApp (Perú) *
            </Label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <Input
                id="patient-phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Ej. 987 654 321"
                className="pl-9"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="treatment-select" className="mb-1 block">
              Tratamiento o Promoción
            </Label>
            <div className="relative">
              <Tag className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <select
                id="treatment-select"
                value={treatment}
                onChange={(e) => setTreatment(e.target.value)}
                className="flex h-10 w-full rounded-xl border border-slate-200 bg-background pl-9 pr-3 py-2 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
              >
                <option value="Blanqueamiento Dental Láser">Blanqueamiento Dental Láser (S/ 189)</option>
                <option value="Ortodoncia y Brackets">Ortodoncia & Brackets (Diagnóstico Gratis)</option>
                <option value="Ortodoncia Invisible">Alineadores Dentales Invisibles</option>
                <option value="Implante Dental de Titanio">Implante Dental de Titanio (S/ 1,399)</option>
                <option value="Pack Limpieza Dental S/69">Pack Prevención & Limpieza Ultrasonido (S/ 69)</option>
                <option value="Diseño de Sonrisa">Diseño de Sonrisa / Carillas</option>
                <option value="Urgencia Dental">Urgencia por Dolor Dental</option>
                <option value="Evaluación General">Solo Evaluación General y Presupuesto</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="booking-date" className="mb-1 block">
                Fecha Preferida
              </Label>
              <div className="relative">
                <Calendar className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                <Input
                  id="booking-date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="pl-8 text-[11px]"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="booking-time" className="mb-1 block">
                Turno
              </Label>
              <div className="relative">
                <Clock className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-3" />
                <select
                  id="booking-time"
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="flex h-10 w-full rounded-xl border border-slate-200 bg-background pl-7 pr-2 py-2 text-[11px] focus:ring-2 focus:ring-sky-500 focus:outline-none"
                >
                  <option value="Mañana (8:30 AM - 1:00 PM)">Mañana (8:30 - 1pm)</option>
                  <option value="Tarde (2:00 PM - 5:00 PM)">Tarde (2 - 5pm)</option>
                  <option value="Noche (5:00 PM - 8:00 PM)">Noche (5 - 8pm)</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="booking-notes" className="mb-1 block">
              Consulta adicional (Opcional)
            </Label>
            <textarea
              id="booking-notes"
              rows={2}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="¿Alguna molestia, diente específico o dolor?"
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
            />
          </div>

          <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-emerald-500" />
            Tus datos son 100% privados. Sede Centro de Lima.
          </p>

          <Button
            type="submit"
            variant="dentalGreen"
            className="w-full py-3.5 text-sm font-bold shadow-lg flex items-center justify-center space-x-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Confirmar Cita por WhatsApp</span>
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
