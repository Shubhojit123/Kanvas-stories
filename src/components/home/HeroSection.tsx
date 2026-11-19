import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-end pb-16 sm:pb-20 overflow-hidden bg-black"
    >
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero-banner.png"
          alt="Where Every Image Tells a Story - Kanvas Stories Jodhpur"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle Dark Vignette / Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </div>

      {/* Hero Content Center */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white mb-8 sm:mb-12">
        {/* Subtitle / Eyebrow */}
        <p className="font-serif text-xl sm:text-2xl md:text-[34px] leading-tight md:leading-[44.2px] font-normal mb-3 sm:mb-4 text-white/95">
          Capturing Moments, Crafting Memories
        </p>

        {/* Main H1 Title */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-[54px] font-normal leading-tight md:leading-[59.4px] tracking-[2.7px] uppercase text-white max-w-3xl mx-auto">
          Where Every Image Tells a Story
        </h1>

        {/* Scroll Indicator Arrow */}
        <div className="mt-8 sm:mt-12 flex justify-center">
          <a
            href="#specializing"
            className="inline-flex items-center justify-center w-10 h-10 transition-transform duration-300 hover:translate-y-1 focus:outline-none"
            aria-label="Scroll to Specialization section"
          >
            <img
              src="/assets/arrow-down.svg"
              alt="Scroll down indicator"
              className="w-9 h-9"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
