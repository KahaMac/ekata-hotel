"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { Play, X, Calendar, Eye } from "lucide-react"

export default function VideosPage() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null)
  const [filter, setFilter] = useState("all")

  const videos = [
    {
      id: 1,
      title: "Hospitality Excellence in Nepal",
      thumbnail: "/luxury-hotel-lobby.png",
      videoId: "oerd3LVEyPs",
      duration: "3:45",
      views: "1.2K",
      date: "2 weeks ago",
      category: "promotional",
      description: "Discover the excellence of Nepal's hospitality industry",
    },
    {
      id: 2,
      title: "Hotel Tour - Luxury Kathmandu",
      thumbnail: "/luxury-hotel-kathmandu.jpg",
      videoId: "zjFvdA4eDrw",
      duration: "5:20",
      views: "2.5K",
      date: "1 month ago",
      category: "tours",
      description: "A complete tour of our luxury hotel facilities",
    },
    {
      id: 3,
      title: "DHBA Annual Conference 2024",
      thumbnail: "/tourism-initiative.jpg",
      videoId: "oerd3LVEyPs",
      duration: "12:30",
      views: "3.8K",
      date: "2 months ago",
      category: "events",
      description: "Highlights from our annual conference",
    },
    {
      id: 4,
      title: "Traditional Nepalese Hospitality",
      thumbnail: "/traditional-nepalese-hotel.jpg",
      videoId: "zjFvdA4eDrw",
      duration: "4:15",
      views: "1.8K",
      date: "3 weeks ago",
      category: "culture",
      description: "Experience authentic Nepalese hospitality",
    },
    {
      id: 5,
      title: "Resort Facilities Showcase",
      thumbnail: "/resort-kathmandu-luxury.jpg",
      videoId: "oerd3LVEyPs",
      duration: "6:40",
      views: "2.1K",
      date: "1 month ago",
      category: "tours",
      description: "Explore our world-class resort facilities",
    },
    {
      id: 6,
      title: "Culinary Excellence",
      thumbnail: "/luxury-hotel-restaurant.png",
      videoId: "zjFvdA4eDrw",
      duration: "8:20",
      views: "4.2K",
      date: "2 weeks ago",
      category: "culinary",
      description: "Meet our award-winning chefs and their creations",
    },
  ]

  const categories = [
    { id: "all", label: "All Videos" },
    { id: "promotional", label: "Promotional" },
    { id: "tours", label: "Hotel Tours" },
    { id: "events", label: "Events" },
    { id: "culture", label: "Culture" },
    { id: "culinary", label: "Culinary" },
  ]

  const filteredVideos = filter === "all" 
    ? videos 
    : videos.filter(video => video.category === filter)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-background py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Video Gallery
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch our collection of videos showcasing the vibrant hospitality scene in Kathmandu
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

        {/* Video Grid */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <p className="text-muted-foreground">
                Showing {filteredVideos.length} {filteredVideos.length === 1 ? 'video' : 'videos'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map((video, index) => (
                <div
                  key={video.id}
                  className="group cursor-pointer"
                  onClick={() => setSelectedVideo(index)}
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-muted mb-3">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/90 group-hover:bg-white group-hover:scale-110 transition-all flex items-center justify-center">
                        <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-white text-xs font-semibold">
                      {video.duration}
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                    {video.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Eye size={14} />
                      <span>{video.views} views</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{video.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Player Modal */}
        {selectedVideo !== null && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="relative max-w-6xl w-full">
              <div className="aspect-video rounded-xl overflow-hidden bg-black">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${filteredVideos[selectedVideo].videoId}?autoplay=1`}
                  title={filteredVideos[selectedVideo].title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              
              <div className="mt-6 text-center">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {filteredVideos[selectedVideo].title}
                </h2>
                <p className="text-white/80">
                  {filteredVideos[selectedVideo].description}
                </p>
              </div>
            </div>

            {/* Navigation */}
            {filteredVideos.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedVideo((prev) => (prev! > 0 ? prev! - 1 : filteredVideos.length - 1))
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                >
                  <span className="text-white text-2xl">←</span>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedVideo((prev) => (prev! < filteredVideos.length - 1 ? prev! + 1 : 0))
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                >
                  <span className="text-white text-2xl">→</span>
                </button>
              </>
            )}
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
