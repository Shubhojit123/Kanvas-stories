"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "why is this our top suggestion to our clients, \"do hire the same studio for photography + cinematography\"?",
      a: "Having both your photo and cinema crews from the same studio ensures seamless coordination, synchronized lighting, and zero conflict during sacred rituals. The team moves in harmony without blocking each other's shots, resulting in a cohesive visual story.",
    },
    {
      q: "we have a multi-day wedding including pre-wedding events. how do we calculate the fee for all the events?",
      a: "We curate custom packages based on your exact itinerary—number of days, venues (palaces, forts, or resorts in Jodhpur), guest count, and crew requirements. Contact us with your dates for a bespoke quote tailored to your celebration.",
    },
    {
      q: "what is your approach to post production/ editing of mages?",
      a: "We believe in timeless, true-to-life color grading. We meticulously retouch skin tones and enhance the rich textures of Rajputana architecture and attire without artificial filters, ensuring your wedding memories look fresh 50 years from now.",
    },
    {
      q: "why are the pre-wedding event fees different from the fees for the wedding/reception day?",
      a: "Pre-wedding sessions are intimate creative shoots requiring a smaller, agile crew and flexible pacing. Full wedding days involve comprehensive documentary coverage, multi-angle camera setups, drone operators, and simultaneous coverage of bride and groom parties.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#e4e4e4]">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-12">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[40px] font-normal leading-tight tracking-[2px] text-black">
            Frequently Asked<br />questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border-b border-black/20 pb-5 transition-colors"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-start justify-between text-left py-2 focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans text-xs sm:text-[14px] font-normal uppercase tracking-[2.4px] text-[#26211e] group-hover:text-black pr-4 leading-relaxed">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-black flex-shrink-0 mt-0.5 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="pt-3 pr-8 font-baskervville text-sm sm:text-base text-black/80 leading-relaxed animate-fadeIn">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
