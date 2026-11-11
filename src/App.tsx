import React, { useState } from "react";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturePillars } from "@/components/FeaturePillars";
import { Promotions } from "@/components/Promotions";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { Specialties } from "@/components/Specialties";
import { Specialists } from "@/components/Specialists";
import { Testimonials } from "@/components/Testimonials";
import { LocationSection } from "@/components/LocationSection";
import { FaqSection } from "@/components/FaqSection";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { BookingModal } from "@/components/BookingModal";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<string | undefined>(undefined);

  const handleOpenBooking = (treatment?: string) => {
    setSelectedTreatment(treatment);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-sky-500 selection:text-white">
      {/* 1. Urgency announcement */}
      <AnnouncementBar />

      {/* 2. Sticky Glass Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* 3. Hero Section */}
      <main className="flex-grow">
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 4. Feature Pillars */}
        <FeaturePillars />

        {/* 5. Pricing & Promotions */}
        <Promotions onSelectTreatment={handleOpenBooking} />

        {/* 6. Interactive Before & After Slider */}
        <BeforeAfterSlider onOpenBooking={handleOpenBooking} />

        {/* 7. Specialties */}
        <Specialties onSelectTreatment={handleOpenBooking} />

        {/* 8. Doctor Specialists */}
        <Specialists />

        {/* 9. Reviews & Testimonials */}
        <Testimonials />

        {/* 10. Location (Centro de Lima) */}
        <LocationSection />

        {/* 11. FAQ Accordion */}
        <FaqSection />

        {/* 12. Final Call-To-Action Banner */}
        <CtaBanner onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* Booking Dialog Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialTreatment={selectedTreatment}
      />

      {/* Floating Elements */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
