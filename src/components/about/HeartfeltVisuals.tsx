export function HeartfeltVisuals() {
  return (
    <section className="relative w-full bg-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1920px] mx-auto relative min-h-[500px] flex items-center justify-center px-4">
        {/* Left Floating Image */}
        <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[25%] max-w-[480px] aspect-[541/447] shadow-xl overflow-hidden">
          <img
            src="/assets/about-left.png"
            alt="Authentic Emotional Moments Jodhpur"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Center Content Box */}
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center py-6">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-[38px] font-normal leading-snug md:leading-[44px] tracking-[1.5px] text-black mb-6">
            Heartfelt Visuals for Weddings, Portraits &amp; More — Jodhpur to the World
          </h2>
          <p className="font-baskervville text-sm sm:text-base leading-[22px] sm:leading-[24px] text-[#1d1d1b]/90">
            Kanvas Stories is a Jodhpur-based photography and videography studio known for
            capturing real, authentic, and heartfelt moments across all kinds of shoots.
            Whether it’s the emotional rituals of a wedding, the joy of a maternity
            session, the elegance of a fashion shoot, or the energy of a celebration — we
            go beyond the posed and staged. Our focus is always on storytelling through
            genuine expressions, candid emotions, and vibrant details, making every frame
            feel alive and personal.
          </p>
        </div>

        {/* Right Floating Image */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[20%] max-w-[360px] aspect-[383/447] shadow-xl overflow-hidden">
          <img
            src="/assets/about-right.png"
            alt="Editorial Wedding Portraits Rajasthan"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>

      {/* Mobile/Tablet Fallback Images */}
      <div className="lg:hidden mt-8 grid grid-cols-2 gap-4 px-6 max-w-lg mx-auto">
        <div className="aspect-[4/3] rounded overflow-hidden shadow-md">
          <img
            src="/assets/about-left.png"
            alt="Authentic Emotional Moments"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-[4/3] rounded overflow-hidden shadow-md">
          <img
            src="/assets/about-right.png"
            alt="Editorial Wedding Portraits"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
