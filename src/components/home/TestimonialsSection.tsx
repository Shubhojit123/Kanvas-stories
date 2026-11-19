"use client";

import { useState } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "Service is was good. Make sure you inform the vendor about all your customs and traditions beforehand and also what kind of pictures you priorities and who all should be included. It will make your experience the best.",
    author: "Raj S.",
    venue: "Destination Wedding, Jodhpur",
  },
  {
    id: 2,
    quote:
      "Kanvas Stories captured our 3-day wedding in Rajasthan with such calm artistic mastery. Looking at the gallery brought all the emotions and happiness rushing back. Absolutely exceptional crew!",
    author: "Simran & Armaan",
    venue: "The Chandra Grand, Jodhpur",
  },
  {
    id: 3,
    quote:
      "From candid Baraat moments to our sunset couple portraits, every single frame looks editorial. Their team knows the best angles and natural lighting in Jodhpur. Highly recommended!",
    author: "Pooja & Vikram",
    venue: "Heritage Palace Shoot",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative">
        {/* Top Decorative Quote Icon */}
        <div className="flex justify-center mb-8">
          <img
            src="/assets/quote-mark.svg"
            alt="Quote mark"
            className="w-10 sm:w-12 h-auto opacity-80"
          />
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-2xl mx-auto text-center px-8 sm:px-12">
          {/* Left Arrow Button */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-black/60 hover:text-black transition-colors focus:outline-none"
            aria-label="Previous Testimonial"
          >
            <img
              src="/assets/slider-arrow.svg"
              alt="Previous"
              className="w-5 sm:w-6 h-auto rotate-180"
            />
          </button>

          {/* Testimonial Quote */}
          <p className="font-baskervville text-base sm:text-lg leading-[24px] sm:leading-[28px] tracking-[2px] text-[#26211e] mb-8 min-h-[100px] flex items-center justify-center">
            “{current.quote}”
          </p>

          {/* Horizontal Divider */}
          <div className="w-full max-w-[400px] mx-auto h-[1.5px] bg-[#2d2d2d]/30 mb-6" />

          {/* Author Name */}
          <div className="space-y-1">
            <h3 className="font-baskervville text-lg sm:text-xl font-normal text-[#26211e]">
              {current.author}
            </h3>
            <p className="text-xs text-black/50 uppercase tracking-widest">
              {current.venue}
            </p>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-black/60 hover:text-black transition-colors focus:outline-none"
            aria-label="Next Testimonial"
          >
            <img
              src="/assets/slider-arrow.svg"
              alt="Next"
              className="w-5 sm:w-6 h-auto"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
