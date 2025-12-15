"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Building2, MapPin, FileText, Users, ImageIcon, BarChart3, LogOut, Settings } from "lucide-react"

export default function AdminPage() {
    const router = useRouter()
    const [activeTab, setActiveTab] = useState("dashboard")

    const handleLogout = () => {
        localStorage.removeItem("auth_token")
        router.push("/")
    }

    const stats = [
        { label: "Total Hotels", value: "156", icon: Building2, trend: "+12 this month" },
        { label: "Destinations", value: "34", icon: MapPin, trend: "+3 new" },
        { label: "News & Events", value: "89", icon: FileText, trend: "45 published" },
        { label: "Members", value: "234", icon: Users, trend: "+18 new" },
    ]

    const recentActivity = [
        { action: "New member joined", time: "2 hours ago", type: "info" },
        { action: "Hotel listing updated", time: "5 hours ago", type: "update" },
        { action: "Event created", time: "1 day ago", type: "event" },
        { action: "Gallery uploaded", time: "2 days ago", type: "upload" },
    ]

    const managementSections = [
        {
            title: "Manage Hotels",
            description: "Add, edit, or delete hotel listings",
            link: "/admin/hotels",
            icon: Building2,
        },
        {
            title: "Manage Destinations",
            description: "Create and update destination pages",
            link: "/admin/destinations",
            icon: MapPin,
        },
        { title: "Manage Events & News", description: "Publish and manage content", link: "/admin/events", icon: FileText },
        {
            title: "Manage Members",
            description: "Approve applications and manage members",
            link: "/admin/members",
            icon: Users,
        },
        { title: "Manage Gallery", description: "Upload and organize media", link: "/admin/gallery", icon: ImageIcon },
        { title: "View Reports", description: "Analytics and statistics", link: "/admin/reports", icon: BarChart3 },
    ]

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h1 className="text-4xl font-bold text-foreground">Admin Dashboard</h1>
                            <p className="text-muted-foreground mt-1">Manage all DHBA content and members</p>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-foreground hover:bg-muted transition"
                        >
                            <LogOut size={18} />
                            Logout
                        </button>
                    </div>

                    {/* Navigation Tabs */}
                    <div className="bg-white border border-border rounded-lg mb-8 flex flex-wrap">
                        {[
                            { id: "dashboard", label: "Dashboard" },
                            { id: "content", label: "Content Management" },
                            { id: "members", label: "Members" },
                            { id: "settings", label: "Settings" },
                        ].map(({ id, label }) => (
                            <button
                                key={id}
                                onClick={() => setActiveTab(id)}
                                className={`flex-1 px-4 py-4 font-semibold border-b-2 transition ${activeTab === id
                                    ? "border-primary text-primary"
                                    : "border-transparent text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>

                    {/* Dashboard Tab */}
                    {activeTab === "dashboard" && (
                        <div className="space-y-8">
                            {/* Stats Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {stats.map(({ label, value, icon: Icon, trend }, i) => (
                                    <div key={i} className="bg-white border border-border rounded-lg p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <p className="text-muted-foreground font-semibold text-sm">{label}</p>
                                            <Icon size={24} className="text-primary opacity-20" />
                                        </div>
                                        <p className="text-3xl font-bold text-foreground">{value}</p>
                                        <p className="text-xs text-muted-foreground mt-2">{trend}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Main Content Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                {/* Activity Feed */}
                                <div className="lg:col-span-2 bg-white border border-border rounded-lg p-6">
                                    <h2 className="text-2xl font-bold text-foreground mb-4">Recent Activity</h2>
                                    <div className="space-y-4">
                                        {recentActivity.map((activity, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/30 transition"
                                            >
                                                <div>
                                                    <p className="font-semibold text-foreground">{activity.action}</p>
                                                    <p className="text-sm text-muted-foreground">{activity.time}</p>
                                                </div>
                                                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                                                    {activity.type}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Quick Links */}
                                <div className="bg-primary text-primary-foreground rounded-lg p-6">
                                    <h3 className="text-lg font-bold mb-4">System Status</h3>
                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center justify-between text-sm">
                                            <span>Database</span>
                                            <span className="inline-flex items-center gap-2">
                                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                                Online
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span>API Server</span>
                                            <span className="inline-flex items-center gap-2">
                                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                                Online
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span>Backups</span>
                                            <span className="inline-flex items-center gap-2">
                                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                                Active
                                            </span>
                                        </div>
                                    </div>
                                    <Link
                                        href="/admin/reports"
                                        className="block w-full text-center bg-accent text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
                                    >
                                        View Full Reports
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Content Management Tab */}
                    {activeTab === "content" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {managementSections.map((section, i) => (
                                <Link
                                    key={i}
                                    href={section.link}
                                    className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition group"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition">
                                            <section.icon size={24} />
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition">
                                        {section.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">{section.description}</p>
                                </Link>
                            ))}
                        </div>
                    )}

                    {/* Members Tab */}
                    {activeTab === "members" && (
                        <div className="bg-white border border-border rounded-lg p-6">
                            <h2 className="text-2xl font-bold text-foreground mb-6">Member Management</h2>
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-border">
                                        <th className="text-left py-3 px-4 font-semibold text-foreground">Hotel Name</th>
                                        <th className="text-left py-3 px-4 font-semibold text-foreground">Contact</th>
                                        <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                                        <th className="text-left py-3 px-4 font-semibold text-foreground">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { hotel: "Hotel Radisson Blu", contact: "contact@radisson.com", status: "Active" },
                                        { hotel: "Dwarika's Hotel", contact: "info@dwarikas.com", status: "Active" },
                                        { hotel: "Everest Hotel", contact: "stay@everest.com", status: "Pending" },
                                    ].map((member, i) => (
                                        <tr key={i} className="border-b border-border hover:bg-muted/30 transition">
                                            <td className="py-3 px-4 text-foreground font-semibold">{member.hotel}</td>
                                            <td className="py-3 px-4 text-muted-foreground">{member.contact}</td>
                                            <td className="py-3 px-4">
                                                <span
                                                    className={`text-xs font-semibold px-3 py-1 rounded-full ${member.status === "Active" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                                                        }`}
                                                >
                                                    {member.status}
                                                </span>
                                            </td>
                                            <td className="py-3 px-4">
                                                <button className="text-primary hover:text-primary/80 text-sm font-semibold">Edit</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* Settings Tab */}
                    {activeTab === "settings" && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="bg-white border border-border rounded-lg p-6">
                                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                                    <Settings size={20} />
                                    Site Settings
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-foreground mb-2">Site Name</label>
                                        <input
                                            type="text"
                                            defaultValue="DHBA Kathmandu"
                                            className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-foreground mb-2">Contact Email</label>
                                        <input
                                            type="email"
                                            defaultValue="info@dhba.org.np"
                                            className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                        />
                                    </div>
                                    <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:opacity-90 transition">
                                        Save Settings
                                    </button>
                                </div>
                            </div>

                            <div className="bg-white border border-border rounded-lg p-6">
                                <h3 className="text-xl font-bold text-foreground mb-4">System Information</h3>
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-sm text-muted-foreground">Version</p>
                                        <p className="font-semibold text-foreground">1.0.0</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Last Updated</p>
                                        <p className="font-semibold text-foreground">{new Date().toLocaleDateString()}</p>
                                    </div>
                                    <button className="w-full border border-destructive text-destructive py-2 rounded-lg font-semibold hover:bg-destructive/5 transition">
                                        Reset Database
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    )
}
