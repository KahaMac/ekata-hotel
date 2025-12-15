"use client"

import { useState } from "react"
import { Search, MapPin, Star, Home } from "lucide-react"

interface HotelFiltersProps {
  onFiltersChange: (filters: HotelFilters) => void
}

export interface HotelFilters {
  searchTerm: string
  location: string
  starRating: number | null
  hotelType: string
}

export function HotelFilters({ onFiltersChange }: HotelFiltersProps) {
  const [filters, setFilters] = useState<HotelFilters>({
    searchTerm: "",
    location: "",
    starRating: null,
    hotelType: "",
  })

  const handleFilterChange = (newFilters: Partial<HotelFilters>) => {
    const updated = { ...filters, ...newFilters }
    setFilters(updated)
    onFiltersChange(updated)
  }

  const clearFilters = () => {
    const empty = { searchTerm: "", location: "", starRating: null, hotelType: "" }
    setFilters(empty)
    onFiltersChange(empty)
  }

  return (
    <div className="bg-white border border-border rounded-lg p-6">
      <div className="mb-6">
        <label className="block text-sm font-semibold text-foreground mb-2">Search Hotels</label>
        <div className="relative">
          <Search size={20} className="absolute left-3 top-3 text-muted-foreground" />
          <input
            type="text"
            placeholder="Hotel name or keyword..."
            value={filters.searchTerm}
            onChange={(e) => handleFilterChange({ searchTerm: e.target.value })}
            className="w-full pl-10 pr-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div className="space-y-4">
        {/* Location Filter */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
            <MapPin size={16} />
            Location
          </label>
          <select
            value={filters.location}
            onChange={(e) => handleFilterChange({ location: e.target.value })}
            className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">All Locations</option>
            <option value="thamel">Thamel</option>
            <option value="kathmandu-center">Kathmandu Center</option>
            <option value="bhaktapur">Bhaktapur</option>
            <option value="patan">Patan</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Star Rating Filter */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
            <Star size={16} />
            Star Rating
          </label>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <label key={rating} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="rating"
                  value={rating}
                  checked={filters.starRating === rating}
                  onChange={() => handleFilterChange({ starRating: rating })}
                  className="accent-primary"
                />
                <span className="text-sm">{rating} Stars & Up</span>
              </label>
            ))}
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="rating"
                value=""
                checked={filters.starRating === null}
                onChange={() => handleFilterChange({ starRating: null })}
                className="accent-primary"
              />
              <span className="text-sm">All Ratings</span>
            </label>
          </div>
        </div>

        {/* Hotel Type Filter */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
            <Home size={16} />
            Hotel Type
          </label>
          <select
            value={filters.hotelType}
            onChange={(e) => handleFilterChange({ hotelType: e.target.value })}
            className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">All Types</option>
            <option value="hotel">Hotel</option>
            <option value="guesthouse">Guesthouse</option>
            <option value="resort">Resort</option>
            <option value="boutique">Boutique Hotel</option>
          </select>
        </div>
      </div>

      <button
        onClick={clearFilters}
        className="w-full mt-6 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/5 transition font-semibold"
      >
        Clear Filters
      </button>
    </div>
  )
}
