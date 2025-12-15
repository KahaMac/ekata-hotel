"use client"

import { ChevronDown, FileText, BookOpen, Download } from "lucide-react"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { useLanguage } from "@/contexts/language-context"

export function ResourcesDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  const resources = [
    {
      href: "/blogs",
      label: t("nav.blogs"),
      description: "Latest articles and insights",
      icon: BookOpen,
    },
    {
      href: "/news",
      label: t("nav.news"),
      description: "Industry news and updates",
      icon: FileText,
    },
    {
      href: "/downloads",
      label: t("nav.downloads"),
      description: "Forms and documents",
      icon: Download,
    },
  ]

  return (
    <div className="relative group" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        className="text-foreground/80 hover:text-primary transition-smooth relative group flex items-center gap-1"
      >
        {t("nav.resources")}
        <ChevronDown size={16} className={`transition-smooth ${isOpen ? "rotate-180" : ""}`} />
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-smooth" />
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-xl z-50 overflow-hidden animate-fadeInUp"
          onMouseLeave={() => setIsOpen(false)}
        >
          {resources.map((resource) => (
            <Link
              key={resource.href}
              href={resource.href}
              onClick={() => setIsOpen(false)}
              className="flex items-start gap-3 px-4 py-3 text-foreground/80 hover:text-primary hover:bg-muted transition-smooth border-b border-border last:border-b-0"
            >
              <resource.icon size={18} className="mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium text-sm">{resource.label}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{resource.description}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
