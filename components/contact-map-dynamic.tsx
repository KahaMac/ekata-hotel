"use client"

import dynamic from "next/dynamic"

// Dynamically import ContactMap to avoid SSR issues with Leaflet
const ContactMap = dynamic(
  () => import("./contact-map").then((mod) => ({ default: mod.ContactMap })),
  {
    ssr: false,
    loading: () => (
      <div className="bg-muted border border-border rounded-lg h-[400px] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading map...</p>
        </div>
      </div>
    ),
  }
)

export { ContactMap }

