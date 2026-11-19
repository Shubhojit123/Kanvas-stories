import { siteConfig } from "@/config/site";

export function InstagramCta() {
  const instaImages = [
    { src: "/assets/insta-1.webp", alt: "Kanvas Stories Instagram 1" },
    { src: "/assets/insta-2.webp", alt: "Kanvas Stories Instagram 2" },
    { src: "/assets/insta-3.webp", alt: "Kanvas Stories Instagram 3" },
    { src: "/assets/insta-4.webp", alt: "Kanvas Stories Instagram 4" },
    { src: "/assets/insta-5.webp", alt: "Kanvas Stories Instagram 5" },
  ];

  return (
    <section className="py-24 bg-white text-center">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Top Inquire CTA */}
        <div className="max-w-xl mx-auto mb-16">
          <p className="font-sans text-xs sm:text-sm font-normal tracking-[2.4px] uppercase text-black mb-3">
            let&apos;s discuss how we can
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal leading-tight tracking-[2px] uppercase text-black mb-8">
            MAKE YOUR WEDDING<br />DAY MEMORABLE
          </h2>
          <div>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                siteConfig.contact.whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-3.5 border border-black text-black text-xs sm:text-sm uppercase tracking-[2.4px] font-normal hover:bg-black hover:text-white transition-colors duration-300"
            >
              INQUIRE NOW
            </a>
          </div>
        </div>

        {/* Vertical Divider Line */}
        <div className="w-[1.5px] h-24 bg-black/20 mx-auto mb-12" />

        {/* Instagram Follow Section */}
        <div className="space-y-8">
          <p className="font-sans text-xs sm:text-sm font-normal tracking-[2.4px] uppercase text-[#26211e]">
            follow our journey
          </p>

          {/* 5-Photo Instagram Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {instaImages.map((img, idx) => (
              <a
                key={idx}
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden bg-black/5 rounded-sm shadow-md"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-sans tracking-wider">
                  Instagram
                </div>
              </a>
            ))}
          </div>

          {/* Instagram Handle Pill Button */}
          <div className="pt-4">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-white border border-black/80 rounded-full text-xs sm:text-sm font-semibold tracking-[2.4px] uppercase text-[#26211e] hover:bg-black hover:text-white transition-all shadow-sm"
            >
              @kanvasstories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
