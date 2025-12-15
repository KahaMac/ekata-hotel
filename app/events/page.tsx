"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { Calendar, Search, Filter } from "lucide-react"

// Mock events/news data
const mockEvents = [
  {
    id: "1",
    title: "Annual Hotel Summit 2024",
    excerpt: "Join us for an exclusive gathering of hotel industry leaders",
    content: "Annual Hotel Summit bringing together top hospitality professionals...",
    date: "2024-12-15",
    category: "Events",
    image: "/placeholder.svg?key=9xlhs",
  },
  {
    id: "2",
    title: "Tourism Recovery Initiative Launched",
    excerpt: "DHBA partners with government to boost tourism sector growth",
    content: "A comprehensive initiative to revitalize the tourism industry...",
    date: "2024-11-10",
    category: "News",
    image: "/placeholder.svg?key=j3kqp",
  },
  {
    id: "3",
    title: "Member Spotlight: Excellence in Service",
    excerpt: "Meet the hotels leading by example in customer experience",
    content: "Highlighting outstanding member hotels and their achievements...",
    date: "2024-11-05",
    category: "News",
    image: "/placeholder.svg?key=8m2jl",
  },
  {
    id: "4",
    title: "Hospitality Training Workshop",
    excerpt: "Professional development program for hotel staff",
    content: "Comprehensive training covering modern hospitality standards...",
    date: "2024-10-25",
    category: "Events",
    image: "/placeholder.svg?key=n7gkr",
  },
  {
    id: "5",
    title: "Tourism Safety Alert",
    excerpt: "Important guidelines for hotel operations",
    content: "Safety protocols and operational guidelines for all members...",
    date: "2024-10-20",
    category: "Alerts",
    image: "/placeholder.svg?key=4jxpl",
  },
  {
    id: "6",
    title: "International Guest Exchange Program",
    excerpt: "Networking opportunity with global hospitality professionals",
    content: "Connect with hotel professionals from around the world...",
    date: "2024-10-15",
    category: "Events",
    image: "/placeholder.svg?key=k8nqv",
  },
]

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")

  const categories = ["Events", "News", "Alerts"]

  const filteredEvents = useMemo(() => {
    return mockEvents.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.excerpt.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCategory = !selectedCategory || event.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  // Sort by date descending
  const sortedEvents = [...filteredEvents].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Events & News" }]} />

        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-2">Events & News</h1>
              <p className="text-lg text-muted-foreground">Stay updated with latest news, events, and announcements</p>
            </div>

            {/* Search and Filters */}
            <div className="bg-white border border-border rounded-lg p-6 mb-8 space-y-4">
              {/* Search */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Search</label>
                <div className="relative">
                  <Search size={20} className="absolute left-3 top-3 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search by title or content..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
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
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Clear */}
              <button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("")
                }}
                className="text-primary hover:text-primary/80 font-semibold text-sm transition"
              >
                Clear Filters
              </button>
            </div>

            {/* Events List */}
            {sortedEvents.length > 0 ? (
              <div className="space-y-6">
                {sortedEvents.map((event) => (
                  <Link
                    key={event.id}
                    href={`/events/${event.id}`}
                    className="group block border border-border rounded-lg overflow-hidden hover:shadow-lg transition bg-white"
                  >
                    <div className="flex flex-col sm:flex-row">
                      {/* Image */}
                      <div className="sm:w-48 h-48 sm:h-auto flex-shrink-0 overflow-hidden bg-muted">
                        <img
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-grow p-6 flex flex-col justify-between">
                        <div>
                          <div className="flex gap-2 mb-3 flex-wrap items-center">
                            <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                              {event.category}
                            </span>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Calendar size={12} />
                              {new Date(event.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </span>
                          </div>

                          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition">
                            {event.title}
                          </h3>

                          <p className="text-muted-foreground">{event.excerpt}</p>
                        </div>

                        <div className="mt-4 text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition">
                          Read More →
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-muted/30 rounded-lg">
                <p className="text-lg text-muted-foreground">No events found. Try adjusting your filters.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
