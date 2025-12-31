"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Briefcase, MapPin, Clock, DollarSign, Building2, Users, Calendar, ArrowLeft, Bookmark, Share2, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function JobDetailClient({ id }: { id: string }) {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [showApplicationForm, setShowApplicationForm] = useState(false)

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
      description: "We are seeking an experienced hotel manager to oversee daily operations of our 5-star property in the heart of Kathmandu.",
      responsibilities: [
        "Oversee all aspects of hotel operations including front desk, housekeeping, and food & beverage",
        "Manage and train staff to ensure excellent customer service",
        "Develop and implement strategies to increase revenue and guest satisfaction",
        "Handle guest complaints and resolve issues promptly",
        "Ensure compliance with health and safety regulations",
        "Prepare budgets and financial reports",
        "Coordinate with other departments to ensure smooth operations",
      ],
      requirements: [
        "Bachelor's degree in Hotel Management or related field",
        "Minimum 5 years of experience in hotel management",
        "Excellent leadership and communication skills",
        "Strong problem-solving abilities",
        "Proficiency in hotel management software",
        "Fluent in English and Nepali",
        "Customer-focused with attention to detail",
      ],
      benefits: [
        "Competitive salary package",
        "Health insurance coverage",
        "Annual performance bonus",
        "Paid vacation and sick leave",
        "Professional development opportunities",
        "Staff accommodation available",
        "Meals provided during shifts",
      ],
      featured: true,
      applicants: 45,
      views: 320,
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
      responsibilities: [
        "Supervise front desk operations and staff",
        "Handle guest check-ins and check-outs",
        "Manage reservations and room assignments",
        "Train new front desk staff",
        "Resolve guest complaints professionally",
      ],
      requirements: [
        "Hotel Management degree preferred",
        "3+ years experience in front desk operations",
        "Excellent communication skills",
        "Fluent in English",
        "Computer proficiency",
      ],
      benefits: [
        "Competitive salary",
        "Health insurance",
        "Performance bonuses",
        "Career growth opportunities",
      ],
      featured: false,
      applicants: 28,
      views: 156,
    },
  ]

  const job = jobs.find(j => j.id === parseInt(id)) || jobs[0]

  return (
    <div className="flex flex-col min-h-screen bg-muted/20">
      <Header />
      <main className="flex-grow">
        <div className="bg-card border-b border-border">
          <div className="max-w-5xl mx-auto px-4 py-4">
            <Link href="/careers" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft size={18} />
              <span>Back to Jobs</span>
            </Link>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-[1fr,320px] gap-8">
            <div>
              <div className="bg-card border-2 border-border rounded-2xl p-8 mb-6">
                {job.featured && (
                  <span className="inline-block px-3 py-1 bg-accent text-white rounded-full text-xs font-bold mb-4">FEATURED JOB</span>
                )}
                <div className="flex gap-5 mb-6">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0 border-2 border-border">
                    <Briefcase className="w-10 h-10 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold text-foreground mb-2">{job.title}</h1>
                    <p className="text-xl font-semibold text-primary mb-3">{job.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground"><MapPin size={16} className="text-primary" /><span>{job.location}</span></div>
                      <div className="flex items-center gap-2 text-muted-foreground"><Briefcase size={16} className="text-primary" /><span>{job.type}</span></div>
                      <div className="flex items-center gap-2 text-muted-foreground"><Clock size={16} className="text-primary" /><span>{job.experience}</span></div>
                      <div className="flex items-center gap-2 font-semibold text-foreground"><DollarSign size={16} className="text-primary" /><span>{job.salary}</span></div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setShowApplicationForm(true)} className="flex-1 bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all">Apply Now</button>
                  <button onClick={() => setIsBookmarked(!isBookmarked)} className={`px-6 py-4 border-2 rounded-xl font-semibold transition-all ${isBookmarked ? 'border-primary bg-primary/10 text-primary' : 'border-border hover:border-primary hover:bg-primary/5'}`}>
                    <Bookmark className={isBookmarked ? 'fill-current' : ''} size={20} />
                  </button>
                  <button className="px-6 py-4 border-2 border-border rounded-xl font-semibold hover:border-primary hover:bg-primary/5 transition-all"><Share2 size={20} /></button>
                </div>
              </div>

              <div className="bg-card border-2 border-border rounded-2xl p-8 mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">Job Description</h2>
                <p className="text-muted-foreground leading-relaxed">{job.description}</p>
              </div>

              <div className="bg-card border-2 border-border rounded-2xl p-8 mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">Key Responsibilities</h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((item, index) => (
                    <li key={index} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>
                  ))}
                </ul>
              </div>

              <div className="bg-card border-2 border-border rounded-2xl p-8 mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">Requirements</h2>
                <ul className="space-y-3">
                  {job.requirements.map((item, index) => (
                    <li key={index} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>
                  ))}
                </ul>
              </div>

              <div className="bg-card border-2 border-border rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Benefits & Perks</h2>
                <ul className="space-y-3">
                  {job.benefits.map((item, index) => (
                    <li key={index} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="bg-card border-2 border-border rounded-2xl p-6 mb-6 sticky top-24">
                <h3 className="font-bold text-foreground mb-4">Job Statistics</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between"><div className="flex items-center gap-2 text-sm text-muted-foreground"><Users size={16} className="text-primary" /><span>Applicants</span></div><span className="font-bold text-foreground">{job.applicants}</span></div>
                  <div className="flex items-center justify-between"><div className="flex items-center gap-2 text-sm text-muted-foreground"><Building2 size={16} className="text-primary" /><span>Views</span></div><span className="font-bold text-foreground">{job.views}</span></div>
                  <div className="flex items-center justify-between"><div className="flex items-center gap-2 text-sm text-muted-foreground"><Calendar size={16} className="text-primary" /><span>Posted</span></div><span className="font-bold text-foreground">{job.posted}</span></div>
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <button onClick={() => setShowApplicationForm(true)} className="w-full bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all">Apply for this Job</button>
                </div>
              </div>
              <div className="bg-card border-2 border-border rounded-2xl p-6">
                <h3 className="font-bold text-foreground mb-4">About the Company</h3>
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 border-2 border-border"><Building2 className="w-8 h-8 text-primary" /></div>
                <h4 className="font-bold text-foreground mb-2">{job.company}</h4>
                <p className="text-sm text-muted-foreground mb-4">Leading hospitality provider in Kathmandu with over 15 years of excellence in service.</p>
                <Link href="#" className="text-sm text-primary hover:underline font-semibold">View all jobs from this company →</Link>
              </div>
            </div>
          </div>
        </div>

        {showApplicationForm && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
            <div className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-foreground">Apply for {job.title}</h2>
                  <button onClick={() => setShowApplicationForm(false)} className="p-2 hover:bg-muted rounded-lg transition-colors"><ArrowLeft size={20} /></button>
                </div>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div><label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label><input type="text" required className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary focus:outline-none" placeholder="John Doe" /></div>
                    <div><label className="block text-sm font-semibold text-foreground mb-2">Email *</label><input type="email" required className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary focus:outline-none" placeholder="john@example.com" /></div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div><label className="block text-sm font-semibold text-foreground mb-2">Phone Number *</label><input type="tel" required className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary focus:outline-none" placeholder="+977 98XXXXXXXX" /></div>
                    <div><label className="block text-sm font-semibold text-foreground mb-2">Years of Experience *</label><select className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary focus:outline-none"><option>0-2 years</option><option>3-5 years</option><option>5-10 years</option><option>10+ years</option></select></div>
                  </div>
                  <div><label className="block text-sm font-semibold text-foreground mb-2">Cover Letter *</label><textarea required rows={6} className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary focus:outline-none resize-none" placeholder="Tell us why you're a great fit for this position..." /></div>
                  <div><label className="block text-sm font-semibold text-foreground mb-2">Upload Resume (PDF) *</label><input type="file" accept=".pdf" required className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary focus:outline-none" /></div>
                  <div className="flex gap-3 pt-4">
                    <button type="submit" className="flex-1 bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all">Submit Application</button>
                    <button type="button" onClick={() => setShowApplicationForm(false)} className="px-8 py-4 border-2 border-border rounded-xl font-bold hover:bg-muted transition-all">Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}