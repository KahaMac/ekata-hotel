import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { Star, MapPin, Phone, Globe, Mail } from "lucide-react"

// Mock hotel details
const mockHotel = {
  id: "1",
  name: "Hotel Radisson Blu",
  description: "Luxury 5-star hotel with modern amenities and stunning views",
  longDescription: `Experience world-class luxury at Hotel Radisson Blu Kathmandu. Our 5-star property offers 
  exceptional service, elegant rooms with modern furnishings, and comprehensive facilities including a spa, 
  fine dining restaurants, and a state-of-the-art business center. Located in the heart of Kathmandu, 
  we provide the perfect blend of comfort and convenience for both leisure and business travelers.`,
  image: "/luxury-hotel-kathmandu.jpg",
  gallery: [
    "/luxury-hotel-lobby.png",
    "/luxury-hotel-room.png",
    "/luxury-hotel-restaurant.png",
    "/luxury-hotel-spa.png",
  ],
  location: "Thamel, Kathmandu",
  starRating: 5,
  hotelType: "Hotel",
  membershipStatus: "active",
  contact: {
    phone: "+977 1 4411818",
    email: "info@radissonblu.com",
    website: "www.radissonblu.com",
  },
  amenities: [
    "Free WiFi",
    "Swimming Pool",
    "Spa & Wellness",
    "Fine Dining",
    "Business Center",
    "Room Service",
    "Parking",
    "Concierge",
  ],
  coordinates: { lat: 27.7172, lng: 85.324 },
}

export default function HotelDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Hotels", href: "/hotels" }, { label: mockHotel.name }]}
        />

        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Hero Image */}
            <div className="mb-8 rounded-lg overflow-hidden h-96">
              <img
                src={mockHotel.image || "/placeholder.svg"}
                alt={mockHotel.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Header Info */}
            <div className="mb-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-2">{mockHotel.name}</h1>
                  <div className="flex items-center gap-4 text-lg">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className={i < mockHotel.starRating ? "fill-accent text-accent" : "text-muted-foreground"}
                        />
                      ))}
                    </div>
                    <span className="text-muted-foreground">
                      {mockHotel.hotelType} • {mockHotel.membershipStatus === "active" && "✓ DHBA Member"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-lg text-muted-foreground">
                <MapPin size={20} />
                <span>{mockHotel.location}</span>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-8">
                {/* Description */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">About</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">
                    {mockHotel.longDescription}
                  </p>
                </div>

                {/* Amenities */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Amenities</h2>
                  <div className="grid grid-cols-2 gap-3">
                    {mockHotel.amenities.map((amenity, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                        <span className="text-primary text-lg">✓</span>
                        <span className="text-foreground">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gallery */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Gallery</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {mockHotel.gallery.map((image, i) => (
                      <div key={i} className="aspect-square rounded-lg overflow-hidden">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`Gallery ${i + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="lg:col-span-1">
                {/* Contact Card */}
                <div className="bg-primary text-primary-foreground rounded-lg p-6 space-y-6 sticky top-24">
                  <div>
                    <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
                  </div>

                  <div>
                    <p className="text-sm opacity-80 mb-2">Phone</p>
                    <a
                      href={`tel:${mockHotel.contact.phone}`}
                      className="flex items-center gap-2 hover:opacity-80 transition"
                    >
                      <Phone size={18} />
                      <span>{mockHotel.contact.phone}</span>
                    </a>
                  </div>

                  <div>
                    <p className="text-sm opacity-80 mb-2">Email</p>
                    <a
                      href={`mailto:${mockHotel.contact.email}`}
                      className="flex items-center gap-2 hover:opacity-80 transition break-all"
                    >
                      <Mail size={18} />
                      <span className="text-sm">{mockHotel.contact.email}</span>
                    </a>
                  </div>

                  <div>
                    <p className="text-sm opacity-80 mb-2">Website</p>
                    <a
                      href={`https://${mockHotel.contact.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:opacity-80 transition"
                    >
                      <Globe size={18} />
                      <span className="text-sm truncate">{mockHotel.contact.website}</span>
                    </a>
                  </div>

                  <div className="pt-4 border-t border-primary-foreground/20">
                    <button className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:opacity-90 transition">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
