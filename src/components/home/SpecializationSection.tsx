export function SpecializationSection() {
  return (
    <section id="specializing" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
          <p className="font-sans text-[13px] sm:text-[14px] font-medium tracking-[2.4px] uppercase text-black mb-3">
            specializing in
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[40px] font-normal leading-tight md:leading-[44.2px] tracking-[2px] text-black">
            North Indian, Fusion &<br className="hidden sm:inline" /> Destination Weddings
          </h2>
        </div>

        {/* Desktop Staggered Editorial Collage (lg+ matching Figma coordinates) */}
        <div className="hidden lg:block relative h-[780px] w-full max-w-[1550px] mx-auto">
          {/* Photo 1: IMG_9032 (left upper) */}
          <div className="absolute left-[3%] top-[140px] w-[24%] aspect-[357/237] shadow-xl overflow-hidden hover:scale-105 transition-transform duration-500">
            <img
              src="/assets/mosaic-1.png"
              alt="North Indian Wedding Rituals - Kanvas Stories"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Photo 2: RAM_8840 (left lower overlap) */}
          <div className="absolute left-[13%] top-[380px] w-[29%] aspect-[446/297] shadow-2xl z-10 overflow-hidden hover:scale-105 transition-transform duration-500">
            <img
              src="/assets/mosaic-2.png"
              alt="Bridal Details Jodhpur"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Photo 3: IMG_2163 (Center Grand Photo) */}
          <div className="absolute left-[33%] top-[90px] w-[37%] aspect-[567/377] shadow-2xl z-20 overflow-hidden hover:scale-105 transition-transform duration-500">
            <img
              src="/assets/mosaic-3.png"
              alt="Destination Wedding Couple in Jodhpur"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Photo 4: RAM_6938 (right upper) */}
          <div className="absolute right-[13%] top-[0px] w-[28%] aspect-[420/280] shadow-xl overflow-hidden hover:scale-105 transition-transform duration-500">
            <img
              src="/assets/mosaic-4.png"
              alt="Emotional Wedding Moments"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Photo 5: IMG_2343 (right lower) */}
          <div className="absolute right-[3%] top-[360px] w-[25%] aspect-[371/248] shadow-xl z-10 overflow-hidden hover:scale-105 transition-transform duration-500">
            <img
              src="/assets/mosaic-5.png"
              alt="Royal Wedding Celebrations Rajasthan"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Mobile / Tablet Responsive Grid */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          <div className="sm:col-span-2 aspect-[16/10] overflow-hidden rounded-lg shadow-xl">
            <img
              src="/assets/mosaic-3.png"
              alt="Destination Wedding Couple in Jodhpur"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-md">
            <img
              src="/assets/mosaic-1.png"
              alt="North Indian Wedding Rituals"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-md">
            <img
              src="/assets/mosaic-4.png"
              alt="Emotional Wedding Moments"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-md">
            <img
              src="/assets/mosaic-2.png"
              alt="Bridal Details Jodhpur"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-md">
            <img
              src="/assets/mosaic-5.png"
              alt="Royal Wedding Celebrations"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
