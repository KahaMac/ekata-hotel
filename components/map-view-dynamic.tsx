"use client"

import dynamic from "next/dynamic"

// Dynamically import MapView to avoid SSR issues with Leaflet
const MapView = dynamic(() => import("./map-view").then((mod) => ({ default: mod.MapView })), {
  ssr: false,
  loading: () => (
    <div className="bg-muted border border-border rounded-lg h-[600px] flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">Loading map...</p>
      </div>
    </div>
  ),
})

export { MapView }

