"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight, Flame, Star, Sparkles, ShieldCheck } from "lucide-react";
import { useCart } from "@/context/CartContext";

export const HeroSection = () => {
  const { setIsCartOpen } = useCart();

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-surface-950 py-10 sm:py-14 lg:py-16 border-b border-white/5"
      aria-label="Hero Section"
    >
      {/* BACKGROUND AMBIENT GLOWS */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-brand-600/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-gold-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#272c35_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: TEXT & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* LOCATION BADGE */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-900/90 border border-white/10 backdrop-blur-md text-xs text-brand-300 font-medium mb-4 w-fit shadow-md">
              <MapPin className="w-3.5 h-3.5 text-brand-400" />
              <span>Aguda, Surulere, Lagos</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 font-semibold">Open Daily</span>
            </div>

            {/* HEADLINE */}
            <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-white tracking-tight leading-[1.15] mb-4">
              Fresh food,{" "}
              <span className="text-gradient-flame">big deal.</span>
            </h1>

            {/* SHORT SUPPORTING TEXT */}
            <p className="text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed mb-6 max-w-xl">
              Juicy shawarma, flame-grilled burgers, rich fruit parfaits & crisp chicken salads — made fresh to order in Surulere.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              <button
                onClick={() => setIsCartOpen(true)}
                id="hero-order-now-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white text-sm sm:text-base font-bold shadow-lg shadow-brand-600/30 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <Flame className="w-4 h-4 text-brand-100" />
                Order Now
                <ArrowRight className="w-4 h-4 text-brand-100" />
              </button>

              <Link
                href="/menu"
                id="hero-view-menu-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl bg-surface-900/80 hover:bg-surface-800 text-neutral-200 hover:text-white text-sm sm:text-base font-semibold border border-white/10 transition-all backdrop-blur-sm"
              >
                View Full Menu
              </Link>
            </div>

            {/* SOCIAL PROOF & HIGHLIGHTS */}
            <div className="flex flex-wrap items-center gap-y-3 gap-x-6 pt-4 border-t border-white/10 text-xs sm:text-sm text-neutral-400">
              <div className="flex items-center gap-2">
                <div className="flex items-center text-gold-400">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <span className="font-medium text-neutral-200">4.9 / 5</span>
                <span className="text-neutral-500">(1,200+ foodies)</span>
              </div>

              <div className="flex items-center gap-1.5 text-neutral-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Fresh Daily Prep</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: FOOD / PRODUCT IMAGE */}
          <div className="lg:col-span-5 relative">
            {/* Glow backing */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-500/20 to-gold-500/20 rounded-3xl blur-xl opacity-75" />

            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-surface-900 shadow-2xl">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[5/4] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1561651823-34feb02250e4?q=80&w=1200&auto=format&fit=crop"
                  alt="Delicious Fresh Shawarma at Go Fresh Exotic"
                  fill
                  priority
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-950/80 via-transparent to-black/20" />
              </div>

              {/* FLOATING OVERLAY CARDS */}
              {/* Top Right Floating Badge */}
              <div className="absolute top-3.5 right-3.5 bg-surface-950/85 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
                <span className="text-xs font-semibold text-white">Chef's Signature</span>
              </div>

              {/* Bottom Info Strip */}
              <div className="absolute bottom-3 left-3 right-3 bg-surface-950/85 backdrop-blur-md border border-white/10 rounded-xl p-3 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-white">Exotic Special Shawarma</p>
                  <p className="text-[11px] text-brand-300">Spicy chicken, sausage & garlic cream</p>
                </div>
                <span className="text-xs font-extrabold text-white bg-brand-600 px-2.5 py-1 rounded-lg">
                  ₦3,500
                </span>
              </div>
            </div>

            {/* QUICK CATEGORY PILLS UNDER IMAGE */}
            <div className="mt-4 flex flex-wrap gap-2 justify-center lg:justify-start">
              {["Shawarma", "Burgers", "Parfait", "Chicken Salad"].map((cat) => (
                <Link
                  key={cat}
                  href={`/menu?category=${cat.toLowerCase().replace(" ", "-")}`}
                  className="px-3 py-1 rounded-full bg-surface-900/90 border border-white/10 text-xs text-neutral-300 hover:text-white hover:border-brand-500/50 hover:bg-surface-800 transition-all font-medium"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
