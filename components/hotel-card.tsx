import Link from "next/link"
import { MapPin, Star } from "lucide-react"

interface HotelCardProps {
  id: string
  name: string
  description: string
  image: string
  location: string
  starRating: number
  hotelType: string
  featured: boolean
  membershipStatus: string
}

export function HotelCard({
  id,
  name,
  description,
  image,
  location,
  starRating,
  hotelType,
  featured,
  membershipStatus,
}: HotelCardProps) {
  return (
    <Link href={`/hotels/${id}`}>
      <div className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition group">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden bg-muted">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition"
          />
          {featured && (
            <div className="absolute top-3 right-3 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
              Featured
            </div>
          )}
          <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
            {hotelType}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition">{name}</h3>

          {/* Star Rating */}
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < starRating ? "fill-accent text-accent" : "text-muted-foreground"}
              />
            ))}
            <span className="text-sm text-muted-foreground ml-2">({starRating}★)</span>
          </div>

          {/* Location */}
          <div className="flex items-start gap-2 mb-3 text-sm text-muted-foreground">
            <MapPin size={16} className="flex-shrink-0 mt-0.5" />
            <span>{location}</span>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{description}</p>

          {/* Membership Status */}
          <div className="pt-3 border-t border-border">
            <p className="text-xs font-semibold text-primary">
              {membershipStatus === "active" ? "✓ DHBA Member" : "Apply to Join"}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}
