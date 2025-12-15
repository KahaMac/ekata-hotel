"use client"

import { useEffect, useState } from "react"
import { Search, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

export function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setIsOpen(true)
      }
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  const searchResults = [
    { title: "Hotels", href: "/hotels", type: "Page" },
    { title: "Events", href: "/events", type: "Page" },
    { title: "About DHBA", href: "/about", type: "Page" },
    { title: "Contact", href: "/contact", type: "Page" },
  ].filter((item) => item.title.toLowerCase().includes(query.toLowerCase()))

  return (
    <>
      {/* Search Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground bg-muted/50 rounded-lg hover:bg-muted transition-colors"
      >
        <Search size={16} />
        <span>Search...</span>
        <kbd className="hidden lg:inline-flex h-5 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      {/* Search Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Search Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 px-4"
            >
              <div className="bg-background border border-border rounded-xl shadow-2xl overflow-hidden">
                {/* Search Input */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
                  <Search size={20} className="text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search hotels, events, members..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
                    autoFocus
                  />
                  <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">
                    <X size={20} />
                  </button>
                </div>

                {/* Search Results */}
                <div className="max-h-96 overflow-y-auto p-2">
                  {query === "" ? (
                    <div className="px-4 py-8 text-center text-muted-foreground text-sm">
                      Start typing to search...
                    </div>
                  ) : searchResults.length > 0 ? (
                    searchResults.map((result, index) => (
                      <Link
                        key={index}
                        href={result.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-muted transition-colors group"
                      >
                        <div>
                          <p className="font-medium text-foreground group-hover:text-primary">{result.title}</p>
                          <p className="text-sm text-muted-foreground">{result.type}</p>
                        </div>
                        <Search size={16} className="text-muted-foreground" />
                      </Link>
                    ))
                  ) : (
                    <div className="px-4 py-8 text-center text-muted-foreground text-sm">No results found</div>
                  )}
                </div>

                {/* Footer */}
                <div className="px-4 py-2 border-t border-border bg-muted/30 text-xs text-muted-foreground flex items-center justify-between">
                  <span>Press ESC to close</span>
                  <span>⌘K to open</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
