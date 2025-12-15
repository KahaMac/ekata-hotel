"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { useState } from "react"
import { X, Download, Share2, ZoomIn } from "lucide-react"

export default function PhotosPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [filter, setFilter] = useState("all")

  const photos = [
    { id: 1, src: "/luxury-hotel-kathmandu.jpg", title: "Luxury Hotel Kathmandu", category: "hotels" },
    { id: 2, src: "/luxury-hotel-lobby.png", title: "Hotel Lobby", category: "hotels" },
    { id: 3, src: "/luxury-hotel-room.png", title: "Luxury Room", category: "hotels" },
    { id: 4, src: "/luxury-hotel-restaurant.png", title: "Fine Dining Restaurant", category: "restaurants" },
    { id: 5, src: "/luxury-hotel-spa.png", title: "Spa & Wellness", category: "facilities" },
    { id: 6, src: "/resort-kathmandu-luxury.jpg", title: "Resort Kathmandu", category: "hotels" },
    { id: 7, src: "/bhaktapur-resort-scenic.jpg", title: "Bhaktapur Resort", category: "hotels" },
    { id: 8, src: "/traditional-nepalese-hotel.jpg", title: "Traditional Hotel", category: "hotels" },
    { id: 9, src: "/hotel-excellence.jpg", title: "Hotel Excellence", category: "hotels" },
    { id: 10, src: "/tourism-initiative.jpg", title: "Tourism Initiative", category: "events" },
    { id: 11, src: "/hotelassociation-logo.jpg", title: "DHBA Logo", category: "events" },
    { id: 12, src: "/luxury-hotel-lobby.png", title: "Grand Lobby", category: "hotels" },
  ]

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "hotels", label: "Hotels" },
    { id: "restaurants", label: "Restaurants" },
    { id: "facilities", label: "Facilities" },
    { id: "events", label: "Events" },
  ]

  const filteredPhotos = filter === "all" 
    ? photos 
    : photos.filter(photo => photo.category === filter)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-background py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Photo Gallery
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of stunning images showcasing the best of Kathmandu's hospitality industry
            </p>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="bg-card border-b border-border sticky top-16 z-30">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                    filter === category.id
                      ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Grid */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <p className="text-muted-foreground">
                Showing {filteredPhotos.length} {filteredPhotos.length === 1 ? 'photo' : 'photos'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer bg-muted"
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-bold text-lg mb-1">{photo.title}</h3>
                      <div className="flex items-center gap-2">
                        <ZoomIn className="w-4 h-4 text-white" />
                        <span className="text-white/90 text-sm">Click to view</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="absolute top-4 left-4 flex gap-3">
              <button className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                <Download className="w-5 h-5 text-white" />
              </button>
              <button className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                <Share2 className="w-5 h-5 text-white" />
              </button>
            </div>

            <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
              <Image
                src={filteredPhotos[selectedImage].src}
                alt={filteredPhotos[selectedImage].title}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm px-6 py-3 rounded-full">
                <p className="text-white font-semibold">{filteredPhotos[selectedImage].title}</p>
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : filteredPhotos.length - 1))
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <span className="text-white text-2xl">←</span>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage((prev) => (prev! < filteredPhotos.length - 1 ? prev! + 1 : 0))
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <span className="text-white text-2xl">→</span>
            </button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
