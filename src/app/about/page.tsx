import type { Metadata } from "next";
import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { HeartfeltVisuals } from "@/components/about/HeartfeltVisuals";
import { OurStory } from "@/components/about/OurStory";
import { TeamSection } from "@/components/about/TeamSection";
import { FaqAccordion } from "@/components/about/FaqAccordion";
import { InstagramCta } from "@/components/about/InstagramCta";

export const metadata: Metadata = {
  title: "About Us | Kanvas Stories - Destination Wedding Photography",
  description:
    "Discover the story behind Kanvas Stories, our creative philosophy, and the dedicated team capturing royal weddings across Jodhpur and worldwide.",
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-white text-black selection:bg-black selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Hero Section */}
      <AboutHero />

      {/* Heartfelt Visuals & Studio Introduction */}
      <HeartfeltVisuals />

      {/* A Decade of Capturing Meaningful Stories */}
      <OurStory />

      {/* Meet The Team (Digvijay, Ram, Kamlesh) */}
      <TeamSection />

      {/* Frequently Asked Questions Accordion */}
      <FaqAccordion />

      {/* Instagram Journey Grid & Inquire CTA */}
      <InstagramCta />

      {/* Editorial Black Footer */}
      <Footer />
    </div>
  );
}
