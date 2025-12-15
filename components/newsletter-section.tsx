"use client"

import type React from "react"
import { useState } from "react"
import { Mail, CheckCircle2, Newspaper, Calendar, Bell } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function NewsletterSection() {
  const { t } = useLanguage()
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // TODO: Connect to newsletter service
    setTimeout(() => {
      setSubscribed(true)
      setEmail("")
      setIsLoading(false)
      setTimeout(() => setSubscribed(false), 5000)
    }, 1000)
  }

  const benefits = [
    { icon: Newspaper, text: "Latest industry news & insights" },
    { icon: Calendar, text: "Exclusive event invitations" },
    { icon: Bell, text: "Member updates & announcements" },
  ]

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-2xl mb-4">
          <Mail size={28} className="text-white" />
        </div>
        
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          {t("home.newsletter.title")}
        </h2>
        
        {/* Subtitle */}
        <p className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          {t("home.newsletter.subtitle")}
        </p>

        {/* Form or Success Message */}
        {!subscribed ? (
          <form onSubmit={handleSubscribe} className="max-w-xl mx-auto mb-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder={t("home.newsletter.placeholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-4 rounded-xl bg-white text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white shadow-xl text-base"
              />
              
              <button
                type="submit"
                disabled={isLoading}
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Subscribing...</span>
                  </>
                ) : (
                  <>
                    <Mail size={20} />
                    <span>{t("home.newsletter.subscribe")}</span>
                  </>
                )}
              </button>
            </div>
            
            <p className="text-xs text-white/70 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        ) : (
          <div className="max-w-xl mx-auto bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center animate-fadeInUp mb-6">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-green-500/20 rounded-full mb-3">
              <CheckCircle2 size={28} className="text-green-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">
              {t("home.newsletter.success")}
            </h3>
            <p className="text-sm text-white/80">
              Check your inbox to confirm your subscription
            </p>
          </div>
        )}

        {/* Benefits list */}
        <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 text-white/90">
              <div className="flex-shrink-0 w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center">
                <benefit.icon size={14} />
              </div>
              <span className="text-sm">{benefit.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
