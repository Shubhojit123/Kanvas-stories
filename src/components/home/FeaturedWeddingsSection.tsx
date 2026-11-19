"use client";

import { useState } from "react";

interface WeddingStory {
  id: string;
  tag: string;
  number: string;
  couple: string;
  venue: string;
  description: string;
  image: string;
}

const weddingStories: WeddingStory[] = [
  {
    id: "pk",
    tag: "P & K",
    number: "/01.",
    couple: "Pankaj weds Kritika",
    venue: "The Chandra Grand, Jodhpur (Raj. India)",
    description:
      "The Chandra Grand in Jodhpur (Raj. India) was the perfect location for this beautiful Indian Hindu Wedding Ceremony. The picturesque venue provided a romantic backdrop for the couple to exchange their vows. The bride meticulously handpicked every detail and color of the wedding and reception, resulting in a truly breathtaking event.",
    image: "/assets/featured-1.webp",
  },
  {
    id: "mn",
    tag: "M & N",
    number: "/02.",
    couple: "Manish weds Neha",
    venue: "Umaid Bhawan Palace, Jodhpur",
    description:
      "A grand royal union celebrated amidst the majestic domes and sandstone courtyards of Umaid Bhawan Palace. From a high-energy Baraat to an intimate starlit reception, every moment reflected pure regal romance and joy.",
    image: "/assets/featured-2.webp",
  },
  {
    id: "sh",
    tag: "S & H",
    number: "/03.",
    couple: "Siddharth weds Harleen",
    venue: "Ajit Bhawan & Mehrangarh Fort",
    description:
      "Set against the dramatic silhouette of Mehrangarh Fort and the royal heritage lawns of Ajit Bhawan, this destination celebration seamlessly brought together timeless Punjabi fervor and Rajasthani royal grandeur.",
    image: "/assets/featured-3.webp",
  },
];

export function FeaturedWeddingsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeStory = weddingStories[activeIndex];
  const leftStripes = weddingStories.slice(0, activeIndex);
  const rightStripes = weddingStories.slice(activeIndex + 1);

  return (
    <section id="portfolio" className="relative w-full bg-[#2d2d2d] text-white overflow-hidden">
      {/* Background Lineart Watermark Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
        <img
          src="/assets/featured-lineart.webp"
          alt="Rajasthan Ethnic Line Art Pattern"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Desktop Dynamic Accordion Slider (lg+) */}
      <div className="relative z-10 w-full min-h-[738px] hidden lg:flex items-stretch">
        {/* Left Collapsed Strips (when activeIndex > 0) */}
        {leftStripes.map((story) => {
          const originalIdx = weddingStories.findIndex((s) => s.id === story.id);
          return (
            <button
              key={story.id}
              onClick={() => setActiveIndex(originalIdx)}
              className="relative w-[150px] lg:w-[180px] xl:w-[225px] flex-shrink-0 overflow-hidden group border-r border-white/15 focus:outline-none transition-all duration-500 cursor-pointer text-left"
              aria-label={`View ${story.couple}`}
            >
              <img
                src={story.image}
                alt={story.couple}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/15 transition-colors" />
              <div className="absolute top-10 inset-x-0 text-center">
                <span className="font-serif text-2xl xl:text-3xl text-white tracking-wider uppercase block">
                  {story.tag}
                </span>
                <p className="text-[11px] text-white/70 uppercase tracking-widest mt-1">
                  {story.number}
                </p>
              </div>
            </button>
          );
        })}

        {/* Active Featured Main Couple Image */}
        <div className="relative w-[32%] lg:w-[31%] xl:w-[30.5%] min-h-[738px] flex-shrink-0 overflow-hidden group transition-all duration-700">
          <img
            key={activeStory.image}
            src={activeStory.image}
            alt={activeStory.couple}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          {/* Couple Monogram Tag */}
          <div className="absolute top-10 left-10 lg:left-14">
            <span className="font-serif text-3xl sm:text-4xl text-white tracking-wider uppercase">
              {activeStory.tag}
            </span>
          </div>
        </div>

        {/* Center Column: Featured Story Narrative */}
        <div className="flex-1 flex flex-col justify-center px-8 lg:px-14 xl:px-16 py-12 lg:py-16">
          {/* Couple Names */}
          <p className="font-sans text-[13px] sm:text-[14px] font-medium tracking-[2.4px] uppercase text-white/90 mb-3">
            {activeStory.couple}
          </p>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[34px] leading-tight md:leading-[44.2px] tracking-[1.36px] uppercase font-normal text-white mb-6">
            FEATURED<br />WEDDINGS
          </h2>

          {/* Location & Wedding Narrative (Figma 648px proportion) */}
          <p className="font-sans text-[13px] sm:text-[14px] font-normal leading-[22px] sm:leading-[25px] text-white/85 mb-8 max-w-[650px]">
            {activeStory.description}
          </p>

          {/* CTA Button */}
          <div>
            <a
              href="#inquire"
              className="inline-flex items-center justify-center px-8 py-3 border border-white text-white text-[13px] sm:text-[14px] uppercase tracking-[2.4px] font-normal hover:bg-white hover:text-black transition-colors duration-300"
            >
              view wedding
            </a>
          </div>
        </div>

        {/* Right Collapsed Strips (pinned to extreme right corner - Figma 225px width) */}
        {rightStripes.map((story) => {
          const originalIdx = weddingStories.findIndex((s) => s.id === story.id);
          return (
            <button
              key={story.id}
              onClick={() => setActiveIndex(originalIdx)}
              className="relative w-[150px] lg:w-[180px] xl:w-[225px] flex-shrink-0 overflow-hidden group border-l border-white/15 focus:outline-none transition-all duration-500 cursor-pointer text-left"
              aria-label={`View ${story.couple}`}
            >
              <img
                src={story.image}
                alt={story.couple}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/15 transition-colors" />
              <div className="absolute top-10 inset-x-0 text-center">
                <span className="font-serif text-2xl xl:text-3xl text-white tracking-wider uppercase block">
                  {story.tag}
                </span>
                <p className="text-[11px] text-white/70 uppercase tracking-widest mt-1">
                  {story.number}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Mobile & Tablet Interactive Layout (< lg) */}
      <div className="lg:hidden relative z-10 p-6 flex flex-col space-y-6">
        {/* Mobile Tab Selector */}
        <div className="flex items-center justify-center space-x-3">
          {weddingStories.map((story, idx) => (
            <button
              key={story.id}
              onClick={() => setActiveIndex(idx)}
              className={`px-4 py-2 text-xs font-serif uppercase tracking-wider rounded-full transition-all ${
                activeIndex === idx
                  ? "bg-white text-black font-bold shadow-lg"
                  : "bg-white/10 text-white/80 hover:bg-white/20"
              }`}
            >
              {story.tag} ({story.number})
            </button>
          ))}
        </div>

        {/* Main Photo */}
        <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden shadow-2xl">
          <img
            src={activeStory.image}
            alt={activeStory.couple}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-6 left-6">
            <span className="font-serif text-3xl text-white tracking-wider uppercase">
              {activeStory.tag}
            </span>
          </div>
        </div>

        {/* Story Narrative */}
        <div className="space-y-4">
          <p className="font-sans text-xs font-medium tracking-[2.4px] uppercase text-white/90">
            {activeStory.couple}
          </p>
          <h2 className="font-serif text-3xl uppercase font-normal text-white">
            FEATURED WEDDINGS
          </h2>
          <p className="font-sans text-sm font-normal leading-relaxed text-white/85">
            {activeStory.description}
          </p>
          <div className="pt-2">
            <a
              href="#inquire"
              className="inline-flex items-center justify-center px-8 py-3 border border-white text-white text-xs uppercase tracking-[2.4px] hover:bg-white hover:text-black transition-colors"
            >
              view wedding
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
