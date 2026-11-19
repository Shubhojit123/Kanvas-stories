export function TeamSection() {
  return (
    <section id="approach" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Text Block */}
        <div className="w-full lg:w-[35%] flex flex-col items-start space-y-6">
          {/* Main Display Headline */}
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[48px] font-normal leading-tight lg:leading-[54px] tracking-[2.4px] uppercase text-black">
            creating<br />
            lifelong<br />
            memories
          </h2>

          {/* Subheading / Philosophy */}
          <p className="font-sans text-[13px] sm:text-[14px] font-medium tracking-[2.4px] uppercase text-black">
            by chasing moments, light & frames
          </p>

          {/* Description */}
          <p className="font-baskervville text-sm sm:text-base leading-[22px] sm:leading-[24px] text-black/85 max-w-sm">
            We are a team of professional photographers striving for the perfect blend
            of passion & professionalism.
          </p>

          {/* Portfolio Button */}
          <div className="pt-2">
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-black text-black text-[13px] sm:text-[14px] uppercase tracking-[2.4px] font-normal hover:bg-black hover:text-white transition-colors duration-300"
            >
              view portfolio
            </a>
          </div>
        </div>

        {/* Right Large Image */}
        <div className="w-full lg:w-[65%] aspect-[994/667] overflow-hidden shadow-2xl rounded-sm">
          <img
            src="/assets/team-portrait.png"
            alt="Kanvas Stories Photography Team in Action Jodhpur"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  );
}
