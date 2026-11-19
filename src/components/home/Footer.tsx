import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  const footerLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/#portfolio" },
    { label: "Our Approach", href: "/#approach" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Inquire", href: "/#inquire" },
    { label: "T&C", href: "#terms" },
  ];

  return (
    <footer className="w-full bg-black text-white pt-12 sm:pt-16 pb-8 relative overflow-hidden border-t border-white/10">
      <div className="max-w-[1920px] mx-auto px-6 sm:px-12 md:px-16">
        {/* Main Footer Row */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-14">
          {/* Left Block: Brand & Contact Info */}
          <div className="space-y-8 max-w-md">
            {/* Logo & Worldwide Subtitle */}
            <div className="flex flex-wrap items-center gap-6">
              <span
                className="font-faraz text-[36px] sm:text-[42px] md:text-[50px] text-white select-none whitespace-nowrap"
                style={{
                  fontFamily: "'Faraz', 'Faraz Demo', var(--font-playfair), Georgia, serif",
                  fontWeight: 400,
                  lineHeight: "100%",
                  letterSpacing: "-0.1em",
                }}
              >
                Kanvas Stories
              </span>
              <div className="hidden sm:block w-[1.5px] h-12 bg-white/30" />
              <div className="text-[10px] sm:text-[11px] uppercase tracking-[2px] text-white/70 leading-relaxed font-sans">
                <p>based in Jodhpur, India</p>
                <p>available worldwide</p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-3 pt-2">
              <p className="font-sans text-[16px] sm:text-[18px] font-medium text-white mb-4">
                Contact Us
              </p>

              {/* Address */}
              <div className="flex items-start space-x-3 text-sm text-white/85">
                <img
                  src="/assets/icon-location.svg"
                  alt="Location"
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                />
                <p className="leading-snug">
                  {siteConfig.contact.address.street},<br />
                  {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.postalCode}
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3 text-sm text-white/85">
                <img
                  src="/assets/icon-email.svg"
                  alt="Email"
                  className="w-5 h-5 flex-shrink-0"
                />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3 text-sm text-white/85">
                <img
                  src="/assets/icon-phone.svg"
                  alt="Phone"
                  className="w-5 h-5 flex-shrink-0"
                />
                <a
                  href={`tel:${siteConfig.contact.rawPhone}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Right Block: Navigation Links & Back to Top */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10 lg:gap-14">
            {/* Links List */}
            <nav
              className="flex flex-wrap lg:flex-nowrap gap-x-6 gap-y-3 sm:gap-8"
              aria-label="Footer Navigation"
            >
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-sans text-sm sm:text-base lg:text-[18px] font-light text-white/85 hover:text-white transition-opacity whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Back to top Button */}
            <div className="hidden md:flex items-center space-x-4 pl-4 border-l border-white/20">
              <a
                href="#hero"
                className="group flex flex-col items-center space-y-2 text-white/70 hover:text-white transition-colors"
                aria-label="Back to top"
              >
                <img
                  src="/assets/arrow-up.svg"
                  alt="Up arrow"
                  className="w-5 h-5 group-hover:-translate-y-1 transition-transform"
                />
                <span className="text-xs uppercase tracking-widest [writing-mode:vertical-lr] rotate-180">
                  back to top
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Divider & Copyright */}
        <div className="border-t border-white/20 pt-6 flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-[11px] uppercase tracking-[2px] text-white/60">
          <p className="mx-auto text-center">
            Copyright © {new Date().getFullYear()} Kanvas Stories. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
