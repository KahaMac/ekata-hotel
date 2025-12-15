"use client"

import { useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

// Custom marker icon for office location
const createOfficeIcon = () => {
  return L.divIcon({
    className: "custom-marker-office",
    html: `
      <div style="
        background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
        width: 44px;
        height: 44px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: 4px solid white;
        box-shadow: 0 4px 14px rgba(37, 99, 235, 0.5);
        position: relative;
      ">
        <div style="
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
          color: white;
          font-size: 22px;
          font-weight: bold;
          line-height: 1;
        ">📍</div>
      </div>
    `,
    iconSize: [44, 44],
    iconAnchor: [22, 44],
    popupAnchor: [0, -44],
  })
}

interface ContactMapProps {
  latitude?: number
  longitude?: number
  address?: string
  height?: string
}

// Component to set initial map view
function MapInitializer({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap()

  useEffect(() => {
    map.setView([lat, lng], 15)
  }, [lat, lng, map])

  return null
}

export function ContactMap({
  latitude = 27.7172, // Kathmandu approximate coordinates
  longitude = 85.324,
  address = "Balaju, 16, Kathmandu, Nepal",
  height = "400px",
}: ContactMapProps) {
  return (
    <div
      className="bg-muted border border-border rounded-lg overflow-hidden"
      style={{ height, width: "100%" }}
    >
      {typeof window !== "undefined" && (
        <MapContainer
          center={[latitude, longitude]}
          zoom={15}
          style={{ height: "100%", width: "100%", zIndex: 0 }}
          scrollWheelZoom={true}
          className="rounded-lg"
        >
          {/* OpenStreetMap Tile Layer */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Initialize map view */}
          <MapInitializer lat={latitude} lng={longitude} />

          {/* Office location marker */}
          <Marker
            position={[latitude, longitude]}
            icon={createOfficeIcon()}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-bold text-foreground text-sm mb-1">
                  District Hotel Business Association
                </h3>
                <p className="text-xs text-muted-foreground mb-2">{address}</p>
                <p className="text-xs text-muted-foreground">
                  Phone: +977 01-4981882
                </p>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  )
}

