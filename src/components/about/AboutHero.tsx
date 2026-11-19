import Image from "next/image";

export function AboutHero() {
  return (
    <section className="relative w-full min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-end p-6 sm:p-12 md:p-16 overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/about-hero.webp"
          alt="Capturing natural moments of joy & celebration - Kanvas Stories"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
      </div>

      {/* Hero Headline Box with subtle dark backdrop */}
      <div className="relative z-10 max-w-4xl bg-black/40 backdrop-blur-sm p-6 sm:p-10 border-l border-white/30 text-white mb-6 sm:mb-8">
        <p className="font-sans text-xs sm:text-sm font-semibold tracking-[2.4px] uppercase text-white/90 mb-3">
          JODHPUR &amp; DESTINATION WEDDING PHOTOGRAPHER
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-normal leading-tight md:leading-[59.4px] tracking-[2.7px] uppercase text-white">
          Capturing natural moments<br />
          of joy &amp; celebration
        </h1>
      </div>
    </section>
  );
}
