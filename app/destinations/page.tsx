"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { Search, MapPin, Filter } from "lucide-react"

// Mock destinations data
const mockDestinations = [
  {
    id: "1",
    name: "Kathmandu Durbar Square",
    description: "Ancient royal palace complex with stunning architecture and cultural significance",
    region: "Kathmandu Valley",
    category: "Historical",
    image: "/placeholder.svg?key=h6kqw",
    featured: true,
  },
  {
    id: "2",
    name: "Swayambhunath Stupa",
    description: "Sacred Buddhist temple atop a hill with panoramic city views",
    region: "Kathmandu Valley",
    category: "Religious",
    image: "/placeholder.svg?key=bgj9l",
    featured: true,
  },
  {
    id: "3",
    name: "Boudhanath Stupa",
    description: "One of the largest stupas in the world, center of Tibetan Buddhism",
    region: "Kathmandu Valley",
    category: "Religious",
    image: "/placeholder.svg?key=4dsq7",
    featured: true,
  },
  {
    id: "4",
    name: "Patan Durbar Square",
    description: "Beautifully preserved royal palace with intricate Newari craftsmanship",
    region: "Patan",
    category: "Historical",
    image: "/placeholder.svg?key=pnvmj",
    featured: false,
  },
  {
    id: "5",
    name: "Bhaktapur Durbar Square",
    description: "Ancient city square showcasing traditional Newari architecture",
    region: "Bhaktapur",
    category: "Historical",
    image: "/placeholder.svg?key=8rkw3",
    featured: false,
  },
  {
    id: "6",
    name: "Thamel District",
    description: "Vibrant tourist hub with shops, restaurants, and cultural experiences",
    region: "Kathmandu Valley",
    category: "Urban",
    image: "/placeholder.svg?key=kq5b2",
    featured: false,
  },
]

export default function DestinationsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")

  const regions = ["Kathmandu Valley", "Patan", "Bhaktapur"]
  const categories = ["Historical", "Religious", "Urban", "Natural"]

  const filteredDestinations = useMemo(() => {
    return mockDestinations.filter((destination) => {
      const matchesSearch =
        destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        destination.description.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesRegion = !selectedRegion || destination.region === selectedRegion
      const matchesCategory = !selectedCategory || destination.category === selectedCategory

      return matchesSearch && matchesRegion && matchesCategory
    })
  }, [searchTerm, selectedRegion, selectedCategory])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Destinations" }]} />

        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-2">Tourist Destinations</h1>
              <p className="text-lg text-muted-foreground">
                Discover the top attractions and destinations in and around Kathmandu
              </p>
            </div>

            {/* Search and Filters */}
            <div className="bg-white border border-border rounded-lg p-6 mb-8">
              <div className="space-y-4">
                {/* Search */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Search Destinations</label>
                  <div className="relative">
                    <Search size={20} className="absolute left-3 top-3 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search by name or description..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                {/* Filters Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Region Filter */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <MapPin size={16} />
                      Region
                    </label>
                    <select
                      value={selectedRegion}
                      onChange={(e) => setSelectedRegion(e.target.value)}
                      className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">All Regions</option>
                      {regions.map((region) => (
                        <option key={region} value={region}>
                          {region}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Category Filter */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Filter size={16} />
                      Category
                    </label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">All Categories</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedRegion("")
                    setSelectedCategory("")
                  }}
                  className="text-primary hover:text-primary/80 font-semibold text-sm transition"
                >
                  Clear Filters
                </button>
              </div>
            </div>

            {/* Destinations Grid */}
            {filteredDestinations.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDestinations.map((destination) => (
                  <Link
                    key={destination.id}
                    href={`/destinations/${destination.id}`}
                    className="group bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition"
                  >
                    <div className="relative aspect-video overflow-hidden bg-muted">
                      <img
                        src={destination.image || "/placeholder.svg"}
                        alt={destination.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition"
                      />
                      {destination.featured && (
                        <div className="absolute top-3 right-3 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="flex gap-2 mb-2 flex-wrap">
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                          {destination.category}
                        </span>
                        <span className="text-xs font-semibold text-muted-foreground bg-muted px-2 py-1 rounded flex items-center gap-1">
                          <MapPin size={12} />
                          {destination.region}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition">
                        {destination.name}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{destination.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-muted/30 rounded-lg">
                <p className="text-lg text-muted-foreground">No destinations found. Try adjusting your filters.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
