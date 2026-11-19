"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detect if past Section 1 (Hero)
      setIsScrolled(currentScrollY > 80);

      // If at Section 1 (top of page), always keep visible
      if (currentScrollY <= 80) {
        setIsVisible(true);
      } else {
        // Scroll down -> hide nav; Scroll up -> show nav
        if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 5) {
          setIsVisible(false);
        } else if (lastScrollY - currentScrollY > 5) {
          setIsVisible(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { label: "home", href: "/" },
    { label: "about", href: "/about" },
    { label: "portfolio", href: "/#portfolio" },
    { label: "inquire", href: "/#inquire" },
    { label: "our approach", href: "/#approach" },
  ];

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    if (href === "/about") {
      return pathname === "/about" || pathname.startsWith("/about");
    }
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      } ${
        isScrolled
          ? "bg-black/40 backdrop-blur-md py-3.5 sm:py-4 shadow-2xl border-b border-white/10"
          : "bg-transparent py-6 sm:py-8"
      }`}
    >
      <div
        className={`max-w-[1920px] mx-auto px-6 sm:px-12 md:px-16 flex justify-between transition-all duration-300 ${
          isScrolled ? "items-center" : "items-start"
        }`}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          className="group focus:outline-none"
          aria-label={`${siteConfig.name} - Home`}
        >
          <span
            className={`font-faraz text-white select-none whitespace-nowrap transition-all duration-300 ${
              isScrolled
                ? "text-[28px] sm:text-[34px] md:text-[38px]"
                : "text-[36px] sm:text-[42px] md:text-[50px]"
            }`}
            style={{
              fontFamily: "'Faraz', 'Faraz Demo', var(--font-playfair), Georgia, serif",
              fontWeight: 400,
              lineHeight: "100%",
              letterSpacing: "-0.1em", // -10% letter spacing
            }}
          >
            Kanvas Stories
          </span>
        </Link>

        {/* Desktop Menu: Horizontal line when scrolled, vertical stack at Section 1 (Hero) */}
        <nav
          className={`hidden md:flex transition-all duration-300 ${
            isScrolled
              ? "flex-row items-center space-x-7 lg:space-x-9 text-left"
              : "flex-col items-end space-y-2.5 text-right"
          }`}
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <a
                key={link.label}
                href={link.href}
                className={`text-[13px] tracking-[2.4px] uppercase transition-all duration-200 hover:text-white ${
                  active
                    ? "font-bold text-white opacity-100"
                    : "font-normal text-white/75 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-white/80 focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[80px] bg-black/95 backdrop-blur-xl z-40 p-8 flex flex-col justify-between">
          <nav className="flex flex-col space-y-6 pt-6" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg tracking-[2.4px] uppercase border-b border-white/10 pb-3 transition-colors ${
                    active
                      ? "font-bold text-white opacity-100"
                      : "font-normal text-white/75 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
          <div className="text-white/60 text-xs tracking-wider space-y-2 pt-6 border-t border-white/10">
            <p>Jodhpur, Rajasthan, India</p>
            <p>{siteConfig.contact.phone}</p>
          </div>
        </div>
      )}
    </header>
  );
}
