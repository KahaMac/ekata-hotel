"use client"

import Link from "next/link"
import { useState } from "react"
import { ChevronDown, Image as ImageIcon, Video } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function GalleryDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  const galleryItems = [
    {
      href: "/gallery/photos",
      label: "Photos",
      icon: ImageIcon,
      description: "View our photo gallery",
    },
    {
      href: "/gallery/videos",
      label: "Videos",
      icon: Video,
      description: "Watch our video collection",
    },
  ]

  return (
    <div
      className="relative z-40"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="text-foreground/80 hover:text-primary transition-smooth relative group flex items-center gap-1 whitespace-nowrap py-2">
        {t("nav.gallery")}
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-smooth" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-64 bg-card border-2 border-border rounded-xl shadow-2xl py-2 z-50">
          {galleryItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-start gap-3 px-4 py-3 hover:bg-muted transition-smooth group"
              onClick={() => setIsOpen(false)}
            >
              <item.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-semibold text-foreground group-hover:text-primary transition-smooth">
                  {item.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {item.description}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
