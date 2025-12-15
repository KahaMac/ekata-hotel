import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { MapPin, Hotel, ArrowRight } from "lucide-react"

// Mock destination detail
const mockDestination = {
  id: "1",
  name: "Kathmandu Durbar Square",
  description: "Ancient royal palace complex with stunning architecture",
  longDescription: `Kathmandu Durbar Square, also known as Hanuman Dhoka, is one of three royal squares in the Kathmandu Valley. 
  The square showcases some of the finest architecture and cultural treasures of Nepal. With medieval temples, courtyards, 
  and palaces, this UNESCO World Heritage Site is a testament to Newari architectural brilliance spanning several centuries.`,
  region: "Kathmandu Valley",
  category: "Historical",
  image: "/placeholder.svg?key=kq5wf",
  gallery: ["/placeholder.svg?key=dh5ka", "/placeholder.svg?key=7gsm3", "/placeholder.svg?key=nv8jk"],
  nearbyHotels: [
    { id: "1", name: "Hotel Radisson Blu", distance: "0.5 km" },
    { id: "2", name: "Dwarika's Hotel", distance: "0.8 km" },
    { id: "3", name: "Everest Hotel", distance: "1.2 km" },
  ],
  highlights: [
    "Ancient palace complex",
    "Museum with historical artifacts",
    "Traditional Newari architecture",
    "Shopping and dining nearby",
    "Best visited in the morning",
  ],
}

export default function DestinationDetailPage({
  params,
}: {
  params: { id: string }
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Destinations", href: "/destinations" },
            { label: mockDestination.name },
          ]}
        />

        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Hero Image */}
            <div className="mb-8 rounded-lg overflow-hidden h-96">
              <img
                src={mockDestination.image || "/placeholder.svg"}
                alt={mockDestination.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-4">{mockDestination.name}</h1>
              <div className="flex flex-wrap gap-4 text-lg text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin size={20} />
                  <span>{mockDestination.region}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary font-semibold">{mockDestination.category}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Description */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">About</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">{mockDestination.longDescription}</p>
                </div>

                {/* Highlights */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Highlights</h2>
                  <ul className="space-y-3">
                    {mockDestination.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span className="text-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Gallery */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Gallery</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {mockDestination.gallery.map((image, i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition"
                      >
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`Gallery ${i + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Nearby Hotels */}
                <div className="bg-primary text-primary-foreground rounded-lg p-6 sticky top-24">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Hotel size={20} />
                    Hotels Nearby
                  </h3>

                  <div className="space-y-3 mb-6">
                    {mockDestination.nearbyHotels.map((hotel) => (
                      <Link
                        key={hotel.id}
                        href={`/hotels/${hotel.id}`}
                        className="block p-3 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition"
                      >
                        <p className="font-semibold text-sm">{hotel.name}</p>
                        <p className="text-xs opacity-80">{hotel.distance} away</p>
                      </Link>
                    ))}
                  </div>

                  <Link
                    href="/hotels"
                    className="w-full flex items-center justify-center gap-2 bg-accent text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
                  >
                    View All Hotels
                    <ArrowRight size={16} />
                  </Link>
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
