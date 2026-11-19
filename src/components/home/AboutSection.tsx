export function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-[#efefef] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1920px] mx-auto relative min-h-[520px] flex items-center justify-center">
        {/* Left Floating Image (matching Figma IMG_7975) */}
        <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[28%] max-w-[540px] aspect-[629/434] shadow-2xl overflow-hidden">
          <img
            src="/assets/about-left.webp"
            alt="Bride in Palatial Setting Jodhpur"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Center Content */}
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center py-8">
          {/* Eyebrow */}
          <p className="font-sans text-[13px] sm:text-[14px] font-medium tracking-[2.4px] uppercase text-black mb-4">
            our simple rule of thumb
          </p>

          {/* Heading */}
          <h2 className="font-serif text-2xl sm:text-3xl md:text-[40px] font-normal leading-snug md:leading-[44.2px] tracking-[2px] text-black mb-8">
            Not just a wedding shoot,<br />
            It’s your story, beautifully told,<br />
            Through emotion and art.
          </h2>

          {/* About CTA Button */}
          <div>
            <a
              href="#approach"
              className="inline-flex items-center justify-center px-9 py-3 border border-black text-black text-[13px] sm:text-[14px] uppercase tracking-[2.4px] font-normal hover:bg-black hover:text-white transition-colors duration-300"
            >
              about us
            </a>
          </div>
        </div>

        {/* Right Floating Image (matching Figma IMG_2191) */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[20%] max-w-[380px] aspect-[379/585] shadow-2xl overflow-hidden">
          <img
            src="/assets/about-right.webp"
            alt="Regal Groom & Bride Portrait Jodhpur"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>

      {/* Mobile/Tablet Fallback Images */}
      <div className="lg:hidden mt-8 grid grid-cols-2 gap-4 px-6 max-w-lg mx-auto">
        <div className="aspect-[4/3] rounded overflow-hidden shadow-md">
          <img
            src="/assets/about-left.webp"
            alt="Bride in Palatial Setting"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-[4/3] rounded overflow-hidden shadow-md">
          <img
            src="/assets/about-right.webp"
            alt="Regal Groom & Bride Portrait"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
