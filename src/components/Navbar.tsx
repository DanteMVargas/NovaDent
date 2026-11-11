import React, { useState } from "react";
import { Sparkles, Phone, MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onOpenBooking: (treatment?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Promociones", href: "#promociones", highlight: true },
    { name: "Especialidades", href: "#especialidades" },
    { name: "Antes y Después", href: "#antes-despues" },
    { name: "Opiniones", href: "#testimonios" },
    { name: "Ubicación", href: "#ubicacion" },
    { name: "Preguntas", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-40 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-sky-600 to-emerald-500 flex items-center justify-center text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center">
                <span className="text-2xl font-extrabold text-sky-700 tracking-tight">Nova</span>
                <span className="text-2xl font-extrabold text-emerald-600 tracking-tight">Dent</span>
                <span className="ml-1.5 text-[10px] bg-sky-100 text-sky-800 font-extrabold px-1.5 py-0.5 rounded">
                  LIMA
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-wide">
                Centro Odontológico Especializado
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-sky-600 transition flex items-center"
              >
                {link.highlight && (
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
                )}
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Items */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href="tel:014278900"
              className="flex items-center space-x-2 text-slate-600 hover:text-sky-700 transition px-3 py-1.5 rounded-xl border border-slate-200"
            >
              <Phone className="w-4 h-4 text-sky-600" />
              <div className="text-left leading-tight">
                <span className="block text-[10px] text-slate-400 font-bold uppercase">Citas Lima</span>
                <span className="text-xs font-bold text-slate-800">(01) 427-8900</span>
              </div>
            </a>

            <Button
              variant="dentalGreen"
              onClick={() => onOpenBooking()}
              className="flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Agendar Cita</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-sky-600 focus:outline-none"
            aria-label="Abrir Menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-700 font-semibold py-2 px-3 rounded-lg hover:bg-sky-50 hover:text-sky-600 transition"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <Button
              variant="dentalGreen"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center space-x-2 py-3"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Agendar Cita por WhatsApp</span>
            </Button>
            <a
              href="tel:014278900"
              className="w-full text-center py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-sky-600" /> Llamar al (01) 427-8900
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
