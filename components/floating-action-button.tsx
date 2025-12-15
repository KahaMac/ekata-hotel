"use client"

import { useState, useEffect } from "react"
import { ArrowUp, MessageCircle, Phone } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function FloatingActionButton() {
  const [showScroll, setShowScroll] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <AnimatePresence>
        {showScroll && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-8 right-8 z-50 flex flex-col gap-3"
          >
            {/* Quick Actions Menu */}
            <AnimatePresence>
              {showMenu && (
                <motion.div
                  initial={{ scale: 0, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0, opacity: 0, y: 20 }}
                  className="flex flex-col gap-2"
                >
                  {/* Contact Button */}
                  <motion.a
                    href="tel:+977XXXXXXXXXX"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
                    title="Call Us"
                  >
                    <Phone size={20} />
                  </motion.a>

                  {/* Message Button */}
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
                    title="Contact Us"
                  >
                    <MessageCircle size={20} />
                  </motion.a>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main FAB - Scroll to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 bg-gradient-to-r from-primary to-accent text-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-primary/50 transition-all group"
              title="Scroll to Top"
            >
              <ArrowUp size={24} className="group-hover:translate-y-[-2px] transition-transform" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
