"use client"

import { useState } from "react"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const [language, setLanguage] = useState("English")

  const languages = ["English", "Nepali"]

  return (
    <div className="relative">
      <button className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-foreground hover:bg-muted rounded-lg transition">
        <Globe size={18} />
        <span className="hidden sm:inline">{language}</span>
      </button>

      {/* Dropdown menu placeholder */}
      <div className="hidden absolute right-0 mt-2 w-32 bg-white border border-border rounded-lg shadow-lg z-50">
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`w-full text-left px-4 py-2 hover:bg-muted transition ${
              language === lang ? "bg-primary/10 text-primary font-semibold" : ""
            }`}
          >
            {lang}
          </button>
        ))}
      </div>
    </div>
  )
}
