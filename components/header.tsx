"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { MembersDropdown } from "./members-dropdown"
import { GalleryDropdown } from "./gallery-dropdown"
import { memberOrganizations } from "@/lib/member-organizations"
import { LanguageToggle } from "./language-toggle"
import { useLanguage } from "@/contexts/language-context"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [membersOpen, setMembersOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-md bg-background/80">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group flex-shrink-0 mr-4">
            <Image
              src="/hotelassociation-logo.jpg"
              alt="District Hotel Business Association Kathmandu"
              width={220}
              height={56}
              className="h-14 w-auto max-w-[200px] md:max-w-[220px] lg:max-w-[240px] object-contain group-hover:opacity-90 transition-smooth"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
            <Link
              href="/"
              className="text-foreground/80 hover:text-primary transition-smooth relative group whitespace-nowrap"
            >
              {t("nav.home")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-smooth" />
            </Link>
            <MembersDropdown />
            {[
              { href: "/hotels", label: t("nav.hotels") },
              { href: "/destinations", label: t("nav.destinations") },
              { href: "/events", label: t("nav.events") },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-smooth relative group whitespace-nowrap"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-smooth" />
              </Link>
            ))}
            <GalleryDropdown />
            <Link
              href="/resources"
              className="text-foreground/80 hover:text-primary transition-smooth relative group whitespace-nowrap"
            >
              {t("nav.resources")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-smooth" />
            </Link>
            <Link
              href="/careers"
              className="text-foreground/80 hover:text-primary transition-smooth relative group whitespace-nowrap"
            >
              {t("nav.careers")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-smooth" />
            </Link>
            {[
              { href: "/about", label: t("nav.about") },
              { href: "/contact", label: t("nav.contact") },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-smooth relative group whitespace-nowrap"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-smooth" />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <LanguageToggle />
            <Link href="/login" className="text-foreground/80 hover:text-primary transition-smooth font-medium">
              {t("nav.login")}
            </Link>
            <Link
              href="/member-portal"
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-2.5 rounded-full hover:shadow-lg transition-smooth font-semibold"
            >
              {t("nav.memberPortal")}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-smooth"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fadeInUp">
            <Link
              href="/"
              className="block text-foreground/80 hover:text-primary hover:bg-muted px-3 py-2 rounded-lg transition-smooth"
              onClick={() => setIsOpen(false)}
            >
              {t("nav.home")}
            </Link>
            <div className="px-3 py-2">
              <button
                onClick={() => setMembersOpen(!membersOpen)}
                className="w-full text-left text-foreground/80 hover:text-primary transition-smooth font-medium"
              >
                {t("nav.members")}
              </button>
              {membersOpen && (
                <div className="mt-2 space-y-1 border-l-2 border-primary pl-3">
                  {memberOrganizations.map((org) => (
                    <Link
                      key={org.id}
                      href={`/members/${org.id}`}
                      onClick={() => {
                        setIsOpen(false)
                        setMembersOpen(false)
                      }}
                      className="block text-sm text-foreground/70 hover:text-primary py-1 transition-smooth"
                    >
                      {org.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {[
              { href: "/hotels", label: t("nav.hotels") },
              { href: "/destinations", label: t("nav.destinations") },
              { href: "/events", label: t("nav.events") },
              { href: "/gallery/photos", label: "Photos" },
              { href: "/gallery/videos", label: "Videos" },
              { href: "/resources", label: t("nav.resources") },
              { href: "/careers", label: t("nav.careers") },
              { href: "/about", label: t("nav.about") },
              { href: "/contact", label: t("nav.contact") },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-foreground/80 hover:text-primary hover:bg-muted px-3 py-2 rounded-lg transition-smooth"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2 border-t border-border">
              <div className="px-3 py-2">
                <LanguageToggle />
              </div>
              <Link href="/login" className="text-foreground/80 hover:text-primary px-3 py-2 transition-smooth">
                {t("nav.login")}
              </Link>
              <Link
                href="/member-portal"
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-2.5 rounded-full transition-smooth text-center font-semibold"
              >
                {t("nav.memberPortal")}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
