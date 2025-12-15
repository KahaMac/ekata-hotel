"use client"

import { useEffect, useRef } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import L from "leaflet"
import { MapPin } from "lucide-react"
import "leaflet/dist/leaflet.css"

// Custom marker icon for hotels
const createCustomIcon = (color: string = "#2563eb") => {
  return L.divIcon({
    className: "custom-marker",
    html: `
      <div style="
        background-color: ${color};
        width: 36px;
        height: 36px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: 3px solid white;
        box-shadow: 0 3px 10px rgba(0,0,0,0.35);
        position: relative;
        transition: transform 0.2s ease;
      ">
        <div style="
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
          color: white;
          font-size: 20px;
          font-weight: bold;
          line-height: 1;
        ">🏨</div>
      </div>
    `,
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -36],
  })
}

interface Hotel {
  id: string
  name: string
  location: string
  coordinates: { lat: number; lng: number }
}

interface MapViewProps {
  hotels: Hotel[]
  center?: [number, number]
  zoom?: number
  height?: string
}

// Component to handle map bounds when hotels change
function MapBounds({ hotels }: { hotels: Hotel[] }) {
  const map = useMap()

  useEffect(() => {
    if (hotels.length > 0) {
      const bounds = L.latLngBounds(
        hotels.map((hotel) => [hotel.coordinates.lat, hotel.coordinates.lng])
      )
      map.fitBounds(bounds, { padding: [50, 50] })
    }
  }, [hotels, map])

  return null
}

export function MapView({
  hotels,
  center = [27.7172, 85.324], // Kathmandu center
  zoom = 12,
  height = "600px",
}: MapViewProps) {
  // Default to Kathmandu center if no hotels
  const defaultCenter: [number, number] =
    hotels.length > 0
      ? [hotels[0].coordinates.lat, hotels[0].coordinates.lng]
      : center

  return (
    <div className="bg-white border border-border rounded-lg overflow-hidden">
      <div style={{ height, width: "100%", position: "relative" }}>
        {typeof window !== "undefined" && (
          <MapContainer
            center={defaultCenter}
            zoom={zoom}
            style={{ height: "100%", width: "100%", zIndex: 0 }}
            scrollWheelZoom={true}
            className="rounded-lg"
          >
            {/* OpenStreetMap Tile Layer */}
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Map bounds adjustment */}
            {hotels.length > 0 && <MapBounds hotels={hotels} />}

            {/* Hotel markers */}
            {hotels.map((hotel) => (
              <Marker
                key={hotel.id}
                position={[hotel.coordinates.lat, hotel.coordinates.lng]}
                icon={createCustomIcon("#2563eb")}
              >
                <Popup>
                  <div className="p-2">
                    <h3 className="font-bold text-foreground text-sm mb-1">
                      {hotel.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-2">
                      {hotel.location}
                    </p>
                    <a
                      href={`/hotels/${hotel.id}`}
                      className="text-xs text-primary hover:underline"
                    >
                      View Details →
                    </a>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        )}
      </div>

      {/* Hotel List Below Map */}
      {hotels.length > 0 && (
        <div className="p-6 border-t border-border bg-muted/30">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Hotels on Map ({hotels.length})
          </h3>
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                className="flex items-start gap-3 p-3 bg-white rounded-lg hover:bg-muted/50 transition border border-border"
              >
                <MapPin size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold text-foreground text-sm">
                    {hotel.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{hotel.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
