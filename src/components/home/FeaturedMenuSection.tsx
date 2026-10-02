"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MenuCard } from "@/components/menu/MenuCard";
import { MenuItem } from "@/types";
import { INITIAL_MENU_ITEMS } from "@/data/initialData";

export const FeaturedMenuSection = () => {
  const [featuredItems, setFeaturedItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const featured = INITIAL_MENU_ITEMS.filter((item) => item.is_featured).slice(0, 6);
    setFeaturedItems(featured);
  }, []);

  return (
    <section
      id="featured-menu"
      aria-labelledby="featured-menu-heading"
      className="py-20 lg:py-28 bg-surface-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADING */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-brand-400 text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
              Our Menu
            </span>
            <h2
              id="featured-menu-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white leading-tight"
            >
              What We&apos;re{" "}
              <span className="text-gradient-flame">Famous For</span>
            </h2>
            <p className="mt-3 text-neutral-400 max-w-md">
              Every item made fresh daily. No frozen shortcuts. Just real food, real flavour.
            </p>
          </div>
          <Link
            href="/menu"
            id="featured-menu-see-all-link"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-900 border border-white/10 text-sm text-neutral-300 hover:text-white hover:border-brand-500/40 transition-all font-medium shrink-0"
          >
            Full Menu <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredItems.map((item, i) => (
            <MenuCard key={item.id} item={item} priority={i < 3} />
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/menu"
            id="featured-menu-browse-all-btn"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm shadow-xl shadow-brand-600/25 transition-all"
          >
            Browse the Full Menu
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
