"use client"

import { motion } from "framer-motion"
import { Users, Building2, Calendar, Award } from "lucide-react"
import { AnimatedCounter } from "./animated-counter"
import { useLanguage } from "@/contexts/language-context"

export function StatisticsSection() {
  const { language } = useLanguage()

  const stats = [
    {
      icon: Users,
      value: 29,
      label: language === "en" ? "Committee Members" : "समिति सदस्यहरू",
      suffix: "+",
    },
    {
      icon: Building2,
      value: 7,
      label: language === "en" ? "Member Associations" : "सदस्य संघहरू",
      suffix: "",
    },
    {
      icon: Calendar,
      value: 50,
      label: language === "en" ? "Annual Events" : "वार्षिक कार्यक्रमहरू",
      suffix: "+",
    },
    {
      icon: Award,
      value: 2074,
      label: language === "en" ? "Established (B.S.)" : "स्थापना (बि.स.)",
      suffix: "",
    },
  ]

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-primary to-accent text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <stat.icon size={32} />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2500} />
              </div>
              <p className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
