"use client"

import type React from "react"
import Link from "next/link"
import { ArrowRight, Building2, Search, Calendar, Compass } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface FeaturedItem {
  title: string
  description: string
  icon: React.ReactNode
  link: string
}

const featuredItems: FeaturedItem[] = [
  {
    title: "Become a Member",
    description: "Join DHBA and unlock exclusive benefits for your hotel",
    icon: <Building2 size={32} />,
    link: "/membership",
  },
  {
    title: "Explore Hotels",
    description: "Browse our comprehensive directory of quality accommodations",
    icon: <Search size={32} />,
    link: "/hotels",
  },
  {
    title: "Upcoming Events",
    description: "Stay updated with our latest events and networking opportunities",
    icon: <Calendar size={32} />,
    link: "/events",
  },
  {
    title: "Tourist Guide",
    description: "Discover top destinations and attractions in Kathmandu",
    icon: <Compass size={32} />,
    link: "/destinations",
  },
]

export function FeaturedSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-accent/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <p className="text-accent font-semibold mb-3 text-sm tracking-wide">{t("home.featured.quickAccess")}</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">{t("home.featured.title")}</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">{t("home.featured.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="group relative overflow-hidden bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-smooth"
              style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-smooth" />

              <div className="relative">
                {/* Icon with gradient */}
                <div className="text-accent mb-6 group-hover:scale-110 transition-smooth duration-300">{item.icon}</div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-smooth">
                  {item.title}
                </h3>

                <p className="text-foreground/70 text-sm mb-6 leading-relaxed">{item.description}</p>

                {/* CTA with arrow animation */}
                <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-smooth">
                  Learn More
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-smooth" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
