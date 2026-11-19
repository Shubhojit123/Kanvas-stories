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
      <div className="relative z-10 w-full min-h-[738px] h-[738px] hidden lg:flex items-stretch overflow-hidden [--strip-w:180px] xl:[--strip-w:225px] [--photo-w:360px] xl:[--photo-w:430px]">
        {weddingStories.map((story, idx) => {
          const isActive = activeIndex === idx;

          return (
            <div
              key={story.id}
              role={isActive ? undefined : "button"}
              tabIndex={isActive ? undefined : 0}
              aria-label={isActive ? undefined : `View ${story.couple}`}
              onClick={() => {
                if (!isActive) setActiveIndex(idx);
              }}
              onKeyDown={(e) => {
                if (!isActive && (e.key === "Enter" || e.key === " ")) {
                  e.preventDefault();
                  setActiveIndex(idx);
                }
              }}
              style={{
                width: isActive
                  ? "calc(100% - 2 * var(--strip-w))"
                  : "var(--strip-w)",
                flexShrink: 0,
                transition: "width 750ms cubic-bezier(0.25, 1, 0.5, 1)",
              }}
              className={`relative h-full min-h-[738px] overflow-hidden select-none border-r border-white/15 last:border-r-0 ${
                isActive
                  ? "cursor-default"
                  : "cursor-pointer group focus:outline-none focus-visible:ring-1 focus-visible:ring-white/50"
              }`}
            >
              <div className="flex w-full h-full min-w-0 overflow-hidden">
                {/* Couple Image Container */}
                <div
                  style={{
                    width: isActive ? "var(--photo-w)" : "var(--strip-w)",
                    transition: "width 750ms cubic-bezier(0.25, 1, 0.5, 1)",
                  }}
                  className="relative h-full shrink-0 overflow-hidden group"
                >
                  <img
                    src={story.image}
                    alt={story.couple}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none pointer-events-none"
                  />

                  {/* Active Monogram Tag (Top Left) */}
                  <div
                    className={`absolute top-10 left-8 lg:left-12 xl:left-14 transition-all duration-500 ${
                      isActive
                        ? "opacity-100 translate-y-0 delay-200"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <span className="font-serif text-3xl sm:text-4xl text-white tracking-wider uppercase drop-shadow-md">
                      {story.tag}
                    </span>
                  </div>

                  {/* Inactive Strip Overlay & Centered Monogram + Number */}
                  <div
                    className={`absolute inset-0 bg-black/45 group-hover:bg-black/20 transition-all duration-500 flex flex-col justify-between py-10 ${
                      isActive
                        ? "opacity-0 pointer-events-none duration-300"
                        : "opacity-100 duration-500 delay-150"
                    }`}
                  >
                    <div className="text-center w-full px-2">
                      <span className="font-serif text-2xl xl:text-3xl text-white tracking-wider uppercase block drop-shadow-sm">
                        {story.tag}
                      </span>
                      <p className="text-[11px] text-white/70 uppercase tracking-widest mt-1">
                        {story.number}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Narrative Details (Active State) */}
                <div
                  className={`flex-1 flex flex-col justify-center px-8 lg:px-12 xl:px-16 py-12 lg:py-16 min-w-[280px] max-w-[680px] transition-all duration-500 ease-out ${
                    isActive
                      ? "opacity-100 translate-x-0 delay-200"
                      : "opacity-0 -translate-x-4 pointer-events-none duration-150"
                  }`}
                >
                  {/* Couple Names */}
                  <p className="font-sans text-[13px] sm:text-[14px] font-medium tracking-[2.4px] uppercase text-white/90 mb-3">
                    {story.couple}
                  </p>

                  {/* Heading */}
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-[34px] leading-tight md:leading-[44.2px] tracking-[1.36px] uppercase font-normal text-white mb-6">
                    FEATURED<br />WEDDINGS
                  </h2>

                  {/* Location & Wedding Narrative */}
                  <p className="font-sans text-[13px] sm:text-[14px] font-normal leading-[22px] sm:leading-[25px] text-white/85 mb-8 line-clamp-6 xl:line-clamp-none">
                    {story.description}
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
              </div>
            </div>
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
              className={`px-4 py-2 text-xs font-serif uppercase tracking-wider rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? "bg-white text-black font-bold shadow-lg scale-105"
                  : "bg-white/10 text-white/80 hover:bg-white/20"
              }`}
            >
              {story.tag} ({story.number})
            </button>
          ))}
        </div>

        {/* Main Photo with smooth crossfade */}
        <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden shadow-2xl bg-black/40">
          {weddingStories.map((story, idx) => (
            <div
              key={story.id}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                activeIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <img
                src={story.image}
                alt={story.couple}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6">
                <span className="font-serif text-3xl text-white tracking-wider uppercase drop-shadow-md">
                  {story.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Story Narrative with smooth crossfade */}
        <div className="relative min-h-[220px]">
          {weddingStories.map((story, idx) => (
            <div
              key={story.id}
              className={`space-y-4 transition-all duration-500 ease-in-out ${
                activeIndex === idx
                  ? "opacity-100 translate-y-0 relative z-10"
                  : "opacity-0 translate-y-2 absolute inset-0 pointer-events-none z-0"
              }`}
            >
              <p className="font-sans text-xs font-medium tracking-[2.4px] uppercase text-white/90">
                {story.couple}
              </p>
              <h2 className="font-serif text-3xl uppercase font-normal text-white">
                FEATURED WEDDINGS
              </h2>
              <p className="font-sans text-sm font-normal leading-relaxed text-white/85">
                {story.description}
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
          ))}
        </div>
      </div>
    </section>
  );
}
