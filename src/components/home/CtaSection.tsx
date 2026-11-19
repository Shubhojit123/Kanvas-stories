import { siteConfig } from "@/config/site";

export function CtaSection() {
  return (
    <section id="inquire" className="py-24 sm:py-32 bg-[#efefef] text-center">
      <div className="max-w-4xl mx-auto px-6">
        {/* Eyebrow */}
        <p className="font-sans text-[13px] sm:text-[14px] font-medium tracking-[2.4px] uppercase text-black mb-4">
          let&apos;s discuss how we can
        </p>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-[40px] font-normal leading-tight md:leading-[44.2px] tracking-[2px] uppercase text-black mb-8 sm:mb-10">
          MAKE YOUR WEDDING<br />DAY MEMORABLE
        </h2>

        {/* Action Button */}
        <div>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
              siteConfig.contact.whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-3.5 border border-black text-black text-[13px] sm:text-[14px] uppercase tracking-[2.4px] font-medium hover:bg-black hover:text-white transition-colors duration-300"
          >
            INQUIRE NOW
          </a>
        </div>
      </div>
    </section>
  );
}
