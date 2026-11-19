import Link from "next/link";

export function OurStory() {
  return (
    <section className="py-20 lg:py-28 bg-[#efefef] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Column: Narrative Text & CTA */}
        <div className="w-full lg:w-[48%] space-y-6">
          <p className="font-sans text-xs sm:text-sm font-semibold tracking-[2.4px] uppercase text-black/70">
            OUR HERITAGE &amp; PHILOSOPHY
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl font-normal leading-tight tracking-[1.5px] text-black">
            A Decade of Capturing Meaningful Stories
          </h2>

          <p className="font-baskervville text-sm sm:text-base leading-[24px] text-[#1d1d1b] text-justify">
            For nearly a decade, Kanvas Stories has been capturing life’s most meaningful
            moments across a wide range of shoots — from weddings, pre-weddings, and
            engagements to portraits and luxury heritage events. We&apos;ve worked with
            hundreds of clients across Rajasthan and beyond, documenting everything from
            traditional palace ceremonies to modern celebrations and lifestyle moments.
          </p>

          <p className="font-baskervville text-sm sm:text-base leading-[24px] text-[#1d1d1b] text-justify">
            Whether it&apos;s the vibrant colors of a sangeet, the quiet joy of a sacred
            vow, or the regal elegance of a fort session — we focus on real, spontaneous
            emotions paired with artistic, editorial-style portraits to tell your unique
            story through every frame.
          </p>

          <div className="pt-4">
            <a
              href="#approach"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-black text-black text-xs sm:text-sm uppercase tracking-[2.4px] font-normal hover:bg-black hover:text-white transition-colors duration-300"
            >
              DISCOVER OUR APPROACH
            </a>
          </div>
        </div>

        {/* Right Column: Editorial Photo Collage */}
        <div className="w-full lg:w-[48%] grid grid-cols-2 gap-4 sm:gap-6">
          <div className="aspect-[4/5] rounded overflow-hidden shadow-xl">
            <img
              src="/assets/mosaic-3.webp"
              alt="Destination Wedding Moments"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="aspect-[4/5] rounded overflow-hidden shadow-xl translate-y-6">
            <img
              src="/assets/about-hero.webp"
              alt="Traditional Royal Vows"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
