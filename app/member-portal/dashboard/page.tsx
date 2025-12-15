"use client"

import { useState } from "react"
import Link from "next/link"
import {
  LayoutDashboard, FileText, Calendar, Settings, LogOut, Menu, X,
  Briefcase, Users, Bell, MessageSquare, Award, TrendingUp
} from "lucide-react"

// Import sub-components
import MyJobs from "@/components/member-portal/MyJobs"
import EventsList from "@/components/member-portal/EventsList"
import ResourcesList from "@/components/member-portal/ResourcesList"
import NetworkDirectory from "@/components/member-portal/NetworkDirectory"
import MessagesInbox from "@/components/member-portal/MessagesInbox"
import ProfileSettings from "@/components/member-portal/ProfileSettings"

export default function MemberDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeSection, setActiveSection] = useState("dashboard")

  const stats = [
    { label: "Job Posts", value: "3", icon: Briefcase, color: "from-blue-500 to-blue-600" },
    { label: "Events Attended", value: "8", icon: Calendar, color: "from-green-500 to-green-600" },
    { label: "Resources Accessed", value: "24", icon: FileText, color: "from-purple-500 to-purple-600" },
    { label: "Network Connections", value: "45", icon: Users, color: "from-orange-500 to-orange-600" },
  ]

  const upcomingEvents = [
    { title: "Annual General Meeting", date: "Feb 15, 2025", time: "10:00 AM" },
    { title: "Tourism Workshop", date: "Feb 22, 2025", time: "2:00 PM" },
    { title: "Networking Dinner", date: "Mar 5, 2025", time: "7:00 PM" },
  ]

  const benefits = [
    { title: "Training Programs", description: "Access to exclusive training", icon: Award },
    { title: "Networking Events", description: "Connect with industry leaders", icon: Users },
    { title: "Job Portal", description: "Post jobs and find talent", icon: Briefcase },
    { title: "Resources", description: "Industry reports and guides", icon: FileText },
  ]

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return (
          <>
            {/* Welcome Banner */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-accent p-8 mb-8 text-white shadow-lg">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-2">Welcome back, Luxury Hotel Kathmandu!</h2>
                <p className="text-white/90 max-w-2xl">
                  Your membership is active. You have 3 new job applicants and 2 upcoming events this week.
                </p>
              </div>
              <div className="absolute right-0 top-0 h-full w-1/3 bg-white/10 -skew-x-12 transform translate-x-12"></div>
              <div className="absolute right-20 bottom-0 h-full w-1/3 bg-white/5 -skew-x-12 transform translate-x-12"></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs font-bold px-2 py-1 rounded-full bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                      +12%
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-1">{stat.value}</h3>
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Upcoming Events */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="text-xl font-bold text-foreground mb-6">Upcoming Events</h2>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{event.title}</h3>
                        <p className="text-sm text-muted-foreground">{event.date} • {event.time}</p>
                      </div>
                      <button
                        onClick={() => setActiveSection("events")}
                        className="text-sm text-primary hover:underline font-semibold"
                      >
                        RSVP
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setActiveSection("events")}
                  className="block mt-4 text-center text-primary hover:underline font-semibold w-full"
                >
                  View All Events →
                </button>
              </div>

              {/* Member Benefits */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="text-xl font-bold text-foreground mb-6">Member Benefits</h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <button
                onClick={() => setActiveSection("jobs")}
                className="relative overflow-hidden bg-gradient-to-br from-primary to-blue-600 text-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 group text-left"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4 backdrop-blur-sm group-hover:scale-110 transition-transform">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-xl mb-1">Post a Job</h3>
                  <p className="text-sm text-white/90">Find the perfect candidate for your hotel</p>
                </div>
                <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-4 translate-y-4 group-hover:scale-150 transition-transform duration-500">
                  <Briefcase size={120} />
                </div>
              </button>

              <button
                onClick={() => setActiveSection("resources")}
                className="bg-card border border-border hover:border-primary/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group text-left relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FileText className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-bold text-xl text-foreground mb-1 group-hover:text-primary transition-colors">Browse Resources</h3>
                <p className="text-sm text-muted-foreground">Access training materials & reports</p>
              </button>

              <button
                onClick={() => setActiveSection("network")}
                className="bg-card border border-border hover:border-primary/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group text-left relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="font-bold text-xl text-foreground mb-1 group-hover:text-primary transition-colors">Connect</h3>
                <p className="text-sm text-muted-foreground">Network with other members</p>
              </button>
            </div>
          </>
        )
      case "jobs":
        return <MyJobs />
      case "events":
        return <EventsList />
      case "resources":
        return <ResourcesList />
      case "network":
        return <NetworkDirectory />
      case "messages":
        return <MessagesInbox />
      case "settings":
        return <ProfileSettings />
      default:
        return <div>Section not found</div>
    }
  }

  return (
    <div className="flex h-screen bg-muted/20">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-card border-r border-border transition-all duration-300 flex flex-col`}>
        <div className="p-6 border-b border-border flex items-center justify-between">
          {sidebarOpen && <h2 className="font-bold text-xl">Member Portal</h2>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-muted rounded-lg">
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {[
            { icon: LayoutDashboard, label: "Dashboard", id: "dashboard" },
            { icon: Briefcase, label: "My Jobs", id: "jobs" },
            { icon: Calendar, label: "Events", id: "events" },
            { icon: FileText, label: "Resources", id: "resources" },
            { icon: MessageSquare, label: "Messages", id: "messages" },
            { icon: Users, label: "Network", id: "network" },
            { icon: Settings, label: "Settings", id: "settings" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeSection === item.id
                ? 'bg-primary text-white'
                : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                }`}
            >
              <item.icon size={20} />
              {sidebarOpen && <span className="font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-border">
          <Link href="/member-portal" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground w-full transition-colors">
            <LogOut size={20} />
            {sidebarOpen && <span className="font-medium">Logout</span>}
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-card border-b border-border p-6 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Welcome Back!</h1>
              <p className="text-sm text-muted-foreground">Luxury Hotel Kathmandu</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-muted rounded-lg">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-bold">
                L
              </div>
            </div>
          </div>
        </header>

        <div className="p-6">
          {renderContent()}
        </div>
      </main>
    </div>
  )
}
