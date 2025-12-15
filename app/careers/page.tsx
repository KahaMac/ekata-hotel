"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Briefcase, MapPin, Search, Clock, DollarSign, Filter, Bookmark, ChevronDown, X } from "lucide-react"
import Link from "next/link"

export default function CareersPage() {
  const jobs = [
    {
      id: 1,
      title: "Hotel Manager",
      company: "Luxury Hotel Kathmandu",
      location: "Thamel, Kathmandu",
      type: "Full-time",
      salary: "NPR 80,000 - 120,000",
      experience: "5+ years",
      posted: "2 days ago",
      description: "Seeking experienced hotel manager to oversee daily operations of our 5-star property.",
      featured: true,
    },
    {
      id: 2,
      title: "Front Desk Supervisor",
      company: "Resort Kathmandu Luxury",
      location: "Balaju, Kathmandu",
      type: "Full-time",
      salary: "NPR 40,000 - 60,000",
      experience: "3+ years",
      posted: "5 days ago",
      description: "Looking for a friendly and professional front desk supervisor to lead our reception team.",
      featured: false,
    },
    {
      id: 3,
      title: "Executive Chef",
      company: "Traditional Nepalese Hotel",
      location: "Sundhara, Kathmandu",
      type: "Full-time",
      salary: "NPR 70,000 - 100,000",
      experience: "7+ years",
      posted: "1 week ago",
      description: "Experienced executive chef needed to lead our kitchen team and create innovative menus.",
      featured: true,
    },
    {
      id: 4,
      title: "Housekeeping Manager",
      company: "Hotel Excellence",
      location: "Kalanki, Kathmandu",
      type: "Full-time",
      salary: "NPR 45,000 - 65,000",
      experience: "4+ years",
      posted: "1 week ago",
      description: "Manage housekeeping operations and ensure highest standards of cleanliness.",
      featured: false,
    },
    {
      id: 5,
      title: "Restaurant Manager",
      company: "Bhaktapur Resort Scenic",
      location: "Bhaktapur",
      type: "Full-time",
      salary: "NPR 50,000 - 75,000",
      experience: "4+ years",
      posted: "2 weeks ago",
      description: "Oversee restaurant operations, staff management, and ensure excellent dining experience.",
      featured: false,
    },
    {
      id: 6,
      title: "Guest Relations Officer",
      company: "Patan Guesthouse Nepal",
      location: "Patan, Lalitpur",
      type: "Full-time",
      salary: "NPR 35,000 - 50,000",
      experience: "2+ years",
      posted: "3 weeks ago",
      description: "Handle guest inquiries, complaints, and ensure memorable guest experiences.",
      featured: false,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-muted/20">
      <Header />
      <main className="flex-grow">
        {/* Search Bar */}
        <section className="bg-card border-b border-border sticky top-16 z-30 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex gap-3">
              {/* Main Search Input */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <input
                  type="text"
                  placeholder="Search by job title, keyword, or company..."
                  className="w-full pl-12 pr-4 py-3.5 rounded-lg border-2 border-border focus:border-primary focus:outline-none bg-background text-base"
                />
              </div>
              
              {/* Quick Filters */}
              <button className="px-5 py-3.5 border-2 border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all flex items-center gap-2 bg-background font-medium">
                <MapPin size={18} />
                <span className="hidden md:inline">Location</span>
                <ChevronDown size={16} />
              </button>
              
              <button className="px-5 py-3.5 border-2 border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all flex items-center gap-2 bg-background font-medium">
                <Filter size={18} />
                <span className="hidden md:inline">Filters</span>
                <ChevronDown size={16} />
              </button>
              
              <button className="px-8 py-3.5 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-bold hover:shadow-lg transition-all">
                Search
              </button>
            </div>
            
            {/* Active Filters */}
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="text-sm text-muted-foreground">Active filters:</span>
              <button className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium flex items-center gap-1.5 hover:bg-primary/20 transition-colors">
                Full-time
                <X size={14} />
              </button>
              <button className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium flex items-center gap-1.5 hover:bg-primary/20 transition-colors">
                Kathmandu
                <X size={14} />
              </button>
              <button className="text-sm text-primary hover:underline font-medium">Clear all</button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-7xl mx-auto px-4 py-6">
          {/* Results Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-1">
                {jobs.length} Jobs Available
              </h1>
              <p className="text-sm text-muted-foreground">Updated 2 hours ago</p>
            </div>
            
            <select className="px-4 py-2.5 border-2 border-border rounded-lg focus:border-primary focus:outline-none bg-card font-medium">
              <option>Most Recent</option>
              <option>Most Relevant</option>
              <option>Salary: High to Low</option>
              <option>Salary: Low to High</option>
            </select>
          </div>

          {/* Job Cards */}
          <div className="space-y-4">
            {jobs.map((job) => (
              <Link
                key={job.id}
                href={`/careers/${job.id}`}
                className="block bg-card border-2 border-border hover:border-primary rounded-xl p-6 hover:shadow-xl transition-all duration-200 group relative"
              >
                {/* Featured Badge */}
                {job.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-accent text-white rounded-full text-xs font-bold">
                      FEATURED
                    </span>
                  </div>
                )}
                
                <div className="flex gap-5">
                  {/* Company Logo */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0 border-2 border-border group-hover:border-primary/50 transition-colors">
                    <Briefcase className="w-8 h-8 text-primary" />
                  </div>
                  
                  {/* Job Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1">
                        <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-1.5">
                          {job.title}
                        </h2>
                        <p className="text-base font-semibold text-muted-foreground">{job.company}</p>
                      </div>
                      
                      <button 
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                        }}
                        className="p-2 hover:bg-muted rounded-lg transition-colors"
                      >
                        <Bookmark className="w-5 h-5 text-muted-foreground hover:text-primary" />
                      </button>
                    </div>
                    
                    {/* Meta Information */}
                    <div className="flex flex-wrap gap-x-5 gap-y-2 mb-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin size={16} className="text-primary" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Briefcase size={16} className="text-primary" />
                        <span>{job.experience}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                        <DollarSign size={16} className="text-primary" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock size={16} className="text-primary" />
                        <span>{job.posted}</span>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                      {job.description}
                    </p>
                    
                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-xs font-semibold">
                          {job.type}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold text-primary group-hover:underline">
                          View Details →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-10">
            <button className="px-5 py-2.5 border-2 border-border rounded-lg hover:bg-muted transition-colors disabled:opacity-50 font-medium" disabled>
              ← Previous
            </button>
            <button className="px-4 py-2.5 bg-primary text-white rounded-lg font-semibold min-w-[44px]">1</button>
            <button className="px-4 py-2.5 border-2 border-border rounded-lg hover:bg-muted transition-colors font-medium min-w-[44px]">2</button>
            <button className="px-4 py-2.5 border-2 border-border rounded-lg hover:bg-muted transition-colors font-medium min-w-[44px]">3</button>
            <span className="px-2 text-muted-foreground">...</span>
            <button className="px-4 py-2.5 border-2 border-border rounded-lg hover:bg-muted transition-colors font-medium min-w-[44px]">10</button>
            <button className="px-5 py-2.5 border-2 border-border rounded-lg hover:bg-muted transition-colors font-medium">
              Next →
            </button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-background py-16 px-4 mt-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Create a job alert and we'll notify you when new opportunities match your preferences
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-bold hover:shadow-xl transition-all">
                Create Job Alert
              </button>
              <button className="px-8 py-4 border-2 border-border rounded-xl font-bold hover:bg-card transition-all">
                Upload Your Resume
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
