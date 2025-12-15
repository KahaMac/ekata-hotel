"use client"

import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { memberOrganizations } from "@/lib/member-organizations"
import { useLanguage } from "@/contexts/language-context"

export function MembersDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
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

  // Get translated name or fallback to English name from data
  const getMemberOrgName = (org: typeof memberOrganizations[0]) => {
    // Try to get translated name based on ID pattern
    const idToKeyMap: { [key: string]: string } = {
      "balaju-hotel-business": "members.balaju",
      "kalanki-hotel-guesthouse": "members.kalanki",
      "kathmandu-hotel-business": "members.kathmandu",
      "nepal-guesthouse-business": "members.nepalguesthouse",
      "sundhara-hotel-business": "members.sundhara",
      "united-hotel-guesthouse": "members.united",
      "nepali-hotel-business": "members.nepalihotel",
    }
    
    const translationKey = idToKeyMap[org.id]
    if (translationKey) {
      return t(translationKey)
    }
    
    // Fallback to the actual name from data
    return org.name
  }

  return (
    <div className="relative group" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        className="text-foreground/80 hover:text-primary transition-smooth relative group flex items-center gap-1"
      >
        {t("nav.members")}
        <ChevronDown size={16} className={`transition-smooth ${isOpen ? "rotate-180" : ""}`} />
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-smooth" />
      </button>

      {/* Desktop Dropdown */}
      {isOpen && (
        <div 
          className="absolute top-full left-0 mt-2 w-72 bg-background border border-border rounded-lg shadow-xl z-50 overflow-hidden animate-fadeInUp"
          onMouseLeave={() => setIsOpen(false)}
        >
          {memberOrganizations.map((org) => (
            <Link
              key={org.id}
              href={`/members/${org.id}`}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-foreground/80 hover:text-primary hover:bg-muted transition-smooth border-b border-border last:border-b-0"
            >
              <div className="font-medium text-sm">{getMemberOrgName(org)}</div>
              <div className="text-xs text-muted-foreground mt-1">
                {org.committee.length} {t("members.membersCount")}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
