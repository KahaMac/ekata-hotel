"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { HotelCard } from "@/components/hotel-card"
import { HotelFilters, type HotelFilters as HotelFiltersType } from "@/components/hotel-filters"
import { MapView } from "@/components/map-view-dynamic"
import { LayoutGrid, Map } from "lucide-react"

// Mock data - replace with API calls
const mockHotels = [
  {
    id: "1",
    name: "Hotel Radisson Blu",
    description: "Luxury 5-star hotel with modern amenities and stunning views",
    image: "/luxury-hotel-kathmandu.jpg",
    location: "Thamel",
    starRating: 5,
    hotelType: "Hotel",
    featured: true,
    membershipStatus: "active",
    coordinates: { lat: 27.7172, lng: 85.324 },
  },
  {
    id: "2",
    name: "Dwarika's Hotel",
    description: "Heritage hotel with traditional Nepalese architecture",
    image: "/traditional-nepalese-hotel.jpg",
    location: "Kathmandu Center",
    starRating: 5,
    hotelType: "Boutique Hotel",
    featured: true,
    membershipStatus: "active",
    coordinates: { lat: 27.7164, lng: 85.3129 },
  },
  {
    id: "3",
    name: "Everest Hotel",
    description: "Budget-friendly accommodation in the heart of Thamel",
    image: "/guesthouse-kathmandu-thamel.jpg",
    location: "Thamel",
    starRating: 3,
    hotelType: "Guesthouse",
    featured: false,
    membershipStatus: "active",
    coordinates: { lat: 27.7165, lng: 85.3252 },
  },
  {
    id: "4",
    name: "Shangri-La Kathmandu",
    description: "Premier resort with world-class facilities and services",
    image: "/resort-kathmandu-luxury.jpg",
    location: "Other",
    starRating: 5,
    hotelType: "Resort",
    featured: true,
    membershipStatus: "active",
    coordinates: { lat: 27.7207, lng: 85.331 },
  },
  {
    id: "5",
    name: "Patan Guest House",
    description: "Cozy guesthouse with authentic Nepalese hospitality",
    image: "/patan-guesthouse-nepal.jpg",
    location: "Patan",
    starRating: 4,
    hotelType: "Guesthouse",
    featured: false,
    membershipStatus: "active",
    coordinates: { lat: 27.6771, lng: 85.3137 },
  },
  {
    id: "6",
    name: "Bhaktapur Resort",
    description: "Scenic resort overlooking ancient city of Bhaktapur",
    image: "/bhaktapur-resort-scenic.jpg",
    location: "Bhaktapur",
    starRating: 4,
    hotelType: "Resort",
    featured: false,
    membershipStatus: "active",
    coordinates: { lat: 27.6718, lng: 85.4269 },
  },
]

export default function HotelsPage() {
  const [filters, setFilters] = useState<HotelFiltersType>({
    searchTerm: "",
    location: "",
    starRating: null,
    hotelType: "",
  })

  const [viewMode, setViewMode] = useState<"grid" | "map">("grid")

  const filteredHotels = useMemo(() => {
    return mockHotels.filter((hotel) => {
      const matchesSearch =
        hotel.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        hotel.description.toLowerCase().includes(filters.searchTerm.toLowerCase())

      const matchesLocation = !filters.location || hotel.location === filters.location

      const matchesRating = filters.starRating === null || hotel.starRating >= filters.starRating

      const matchesType = !filters.hotelType || hotel.hotelType === filters.hotelType

      return matchesSearch && matchesLocation && matchesRating && matchesType
    })
  }, [filters])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Hotels" }]} />

        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-2">Hotels Directory</h1>
              <p className="text-lg text-muted-foreground">
                Explore {filteredHotels.length} quality accommodations in Kathmandu
              </p>
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition ${
                  viewMode === "grid"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                <LayoutGrid size={20} />
                Grid View
              </button>
              <button
                onClick={() => setViewMode("map")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition ${
                  viewMode === "map"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                <Map size={20} />
                Map View
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <HotelFilters onFiltersChange={setFilters} />
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                {viewMode === "grid" ? (
                  <>
                    {filteredHotels.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredHotels.map((hotel) => (
                          <HotelCard key={hotel.id} {...hotel} />
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12 bg-muted/30 rounded-lg">
                        <p className="text-lg text-muted-foreground">
                          No hotels found matching your filters. Try adjusting your search.
                        </p>
                      </div>
                    )}
                  </>
                ) : (
                  <MapView hotels={filteredHotels} />
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
