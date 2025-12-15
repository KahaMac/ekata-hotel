import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DHBA Kathmandu - District Hotel Business Association",
  description:
    "Discover hotels, destinations, and events in Kathmandu through the District Hotel Business Association.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/hotelassociation-logo.jpg",
        type: "image/jpeg",
      },
      {
        url: "/favicon.ico",
        sizes: "any",
      },
    ],
    apple: "/hotelassociation-logo.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/hotelassociation-logo.jpg" type="image/jpeg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1a472a" />
      </head>
      <body className={`font-sans antialiased`} suppressHydrationWarning>
        <LanguageProvider>{children}</LanguageProvider>
        <Toaster position="top-right" richColors closeButton />
        <Analytics />
      </body>
    </html>
  )
}
