import React, { useState, useEffect } from "react";
import { Clock, ArrowRight, Flame } from "lucide-react";

export const AnnouncementBar: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 42, seconds: 19 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 4, minutes: 30, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="bg-gradient-to-r from-sky-700 via-sky-600 to-emerald-600 text-white text-xs sm:text-sm py-2 px-4 shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center space-x-2">
          <span className="bg-red-500 text-white font-extrabold px-2 py-0.5 rounded text-[11px] uppercase tracking-wider flex items-center gap-1">
            <Flame className="w-3.5 h-3.5" />
            ¡Hoy!
          </span>
          <span className="font-medium text-xs sm:text-sm">
            🇵🇪 Promoción Centro de Lima: <strong>50% DCTO</strong> en Blanqueamiento Láser + Limpieza Profunda
          </span>
        </div>

        <div className="flex items-center space-x-3 text-xs">
          <div className="bg-sky-900/50 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-white/20 font-mono flex items-center space-x-1">
            <Clock className="w-3.5 h-3.5 mr-1 text-emerald-300" />
            <span>Termina en:</span>
            <span className="font-bold text-yellow-300">
              {formatNumber(timeLeft.hours)}:{formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}
            </span>
          </div>
          <a
            href="#promociones"
            className="hidden md:inline-flex items-center text-white underline hover:text-emerald-200 font-semibold transition"
          >
            Ver Oferta <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};
