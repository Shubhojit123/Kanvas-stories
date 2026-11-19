import { Navbar } from "@/components/home/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { SpecializationSection } from "@/components/home/SpecializationSection";
import { FeaturedWeddingsSection } from "@/components/home/FeaturedWeddingsSection";
import { MarqueeBanner } from "@/components/home/MarqueeBanner";
import { AboutSection } from "@/components/home/AboutSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { TeamSection } from "@/components/home/TeamSection";
import { CtaSection } from "@/components/home/CtaSection";
import { Footer } from "@/components/home/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-black selection:bg-black selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Specializing In + 5-Photo Editorial Mosaic */}
      <SpecializationSection />

      {/* Featured Weddings (Pankaj weds Kritika at The Chandra Grand, Jodhpur) */}
      <FeaturedWeddingsSection />

      {/* Editorial Marquee Statement */}
      <MarqueeBanner />

      {/* Our Simple Rule of Thumb (About) */}
      <AboutSection />

      {/* Testimonials Carousel (Raj S. & destination couples) */}
      <TestimonialsSection />

      {/* Team / Creating Lifelong Memories */}
      <TeamSection />

      {/* Call to Action (Inquire Now) */}
      <CtaSection />

      {/* Editorial Dark Footer */}
      <Footer />
    </div>
  );
}
