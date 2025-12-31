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
  title: "United Hotel and Guesthouse Professionals Association, Nepal",
  description:
    "Discover hotels, destinations, and events in Nepal through United Hotel and Guesthouse Professionals Association.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/ekata-logo.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/ekata-logo.png",
        type: "image/png",
        sizes: "16x16",
      },
    ],
    apple: "/ekata-logo.png",
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
        <link rel="icon" type="image/png" sizes="32x32" href="/ekata-logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/ekata-logo.png" />
        <link rel="apple-touch-icon" href="/ekata-logo.png" />
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
