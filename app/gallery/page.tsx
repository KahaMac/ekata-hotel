"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { Filter, Calendar } from "lucide-react"

// Mock gallery albums
const mockAlbums = [
  {
    id: "1",
    title: "Hotel Summit 2024",
    category: "Events",
    date: "2024-12-15",
    cover: "/placeholder.svg?key=d7gmk",
    images: ["/placeholder.svg?key=x3nwl", "/placeholder.svg?key=j4kms", "/placeholder.svg?key=p8vqr"],
    imageCount: 24,
  },
  {
    id: "2",
    title: "Luxury Hotels in Kathmandu",
    category: "Hotels",
    date: "2024-11-20",
    cover: "/placeholder.svg?key=k2jql",
    images: ["/placeholder.svg?key=m9nxo", "/placeholder.svg?key=r3stl", "/placeholder.svg?key=w5uvk"],
    imageCount: 32,
  },
  {
    id: "3",
    title: "Tourist Destinations",
    category: "Destinations",
    date: "2024-11-10",
    cover: "/placeholder.svg?key=f6ghd",
    images: ["/placeholder.svg?key=a1bcs", "/placeholder.svg?key=d4efg", "/placeholder.svg?key=h7ijk"],
    imageCount: 18,
  },
  {
    id: "4",
    title: "Cultural Heritage Tour",
    category: "Destinations",
    date: "2024-10-28",
    cover: "/placeholder.svg?key=l9mnp",
    images: ["/placeholder.svg?key=q2rstu", "/placeholder.svg?key=v5wxyz", "/placeholder.svg?key=e8fghi"],
    imageCount: 28,
  },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null)

  const categories = ["Hotels", "Destinations", "Events"]

  const filteredAlbums = useMemo(() => {
    return mockAlbums.filter((album) => !selectedCategory || album.category === selectedCategory)
  }, [selectedCategory])

  const currentAlbum = selectedAlbum ? mockAlbums.find((a) => a.id === selectedAlbum) : null

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Gallery" }]} />

        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-2">Photo Gallery</h1>
              <p className="text-lg text-muted-foreground">Explore photos from hotels, destinations, and events</p>
            </div>

            {!selectedAlbum ? (
              <>
                {/* Category Filter */}
                <div className="mb-8 flex flex-wrap gap-3">
                  <button
                    onClick={() => setSelectedCategory("")}
                    className={`px-4 py-2 rounded-lg font-semibold transition ${
                      selectedCategory === ""
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground hover:bg-muted/80"
                    }`}
                  >
                    All Albums
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-lg font-semibold transition flex items-center gap-2 ${
                        selectedCategory === cat
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground hover:bg-muted/80"
                      }`}
                    >
                      <Filter size={16} />
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Albums Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredAlbums.map((album) => (
                    <button
                      key={album.id}
                      onClick={() => setSelectedAlbum(album.id)}
                      className="group bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition text-left"
                    >
                      {/* Cover Image */}
                      <div className="relative aspect-video overflow-hidden bg-muted">
                        <img
                          src={album.cover || "/placeholder.svg"}
                          alt={album.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                          <span className="text-white font-semibold">View Album</span>
                        </div>
                      </div>

                      {/* Album Info */}
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition">
                          {album.title}
                        </h3>

                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span className="font-semibold text-primary bg-primary/10 px-2 py-1 rounded text-xs">
                            {album.category}
                          </span>
                          <span>{album.imageCount} photos</span>
                        </div>

                        <div className="mt-3 pt-3 border-t border-border flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar size={14} />
                          {new Date(album.date).toLocaleDateString()}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {filteredAlbums.length === 0 && (
                  <div className="text-center py-12 bg-muted/30 rounded-lg">
                    <p className="text-lg text-muted-foreground">No albums in this category. Try a different filter.</p>
                  </div>
                )}
              </>
            ) : (
              <>
                {/* Album Detail View */}
                <div className="mb-6">
                  <button
                    onClick={() => setSelectedAlbum(null)}
                    className="text-primary hover:text-primary/80 font-semibold mb-4"
                  >
                    ← Back to Albums
                  </button>
                  <h2 className="text-3xl font-bold text-foreground">{currentAlbum?.title}</h2>
                  <p className="text-muted-foreground mt-2">{currentAlbum?.imageCount} photos</p>
                </div>

                {/* Images Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {currentAlbum?.images.map((image, i) => (
                    <div key={i} className="aspect-square rounded-lg overflow-hidden group cursor-pointer">
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Photo ${i + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition"
                      />
                    </div>
                  ))}
                </div>

                {/* Load More */}
                <div className="text-center">
                  <button className="px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary/5 transition font-semibold">
                    Load More Photos
                  </button>
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
