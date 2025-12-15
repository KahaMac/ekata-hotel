"use client"

import { useState } from "react"

export function SettingsSection() {
    const [siteSettings, setSiteSettings] = useState({ siteName: "DHBA Kathmandu", email: "info@dhba.com", phone: "+977 1234567" })
    const [homeSettings, setHomeSettings] = useState({ heroTitle: "District Hotel Business Association", heroSubtitle: "Representing hospitality sector since 2074 B.S.", videoUrl: "https://youtu.be/oerd3LVEyPs" })

    const handleSaveSite = () => {
        alert("Site information saved successfully!")
    }

    const handleSaveHome = () => {
        alert("Homepage settings updated successfully!")
    }

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">System Settings</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-bold text-lg mb-4">Site Information</h3>
                    <div className="space-y-4">
                        <div><label className="block text-sm font-semibold mb-2">Site Name</label><input type="text" value={siteSettings.siteName} onChange={(e) => setSiteSettings({ ...siteSettings, siteName: e.target.value })} className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" /></div>
                        <div><label className="block text-sm font-semibold mb-2">Contact Email</label><input type="email" value={siteSettings.email} onChange={(e) => setSiteSettings({ ...siteSettings, email: e.target.value })} className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" /></div>
                        <div><label className="block text-sm font-semibold mb-2">Phone</label><input type="tel" value={siteSettings.phone} onChange={(e) => setSiteSettings({ ...siteSettings, phone: e.target.value })} className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" /></div>
                        <button onClick={handleSaveSite} className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:shadow-lg">Save Changes</button>
                    </div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-bold text-lg mb-4">Homepage Settings</h3>
                    <div className="space-y-4">
                        <div><label className="block text-sm font-semibold mb-2">Hero Title</label><input type="text" value={homeSettings.heroTitle} onChange={(e) => setHomeSettings({ ...homeSettings, heroTitle: e.target.value })} className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" /></div>
                        <div><label className="block text-sm font-semibold mb-2">Hero Subtitle</label><textarea rows={3} value={homeSettings.heroSubtitle} onChange={(e) => setHomeSettings({ ...homeSettings, heroSubtitle: e.target.value })} className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" /></div>
                        <div><label className="block text-sm font-semibold mb-2">Video URL</label><input type="text" value={homeSettings.videoUrl} onChange={(e) => setHomeSettings({ ...homeSettings, videoUrl: e.target.value })} className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" /></div>
                        <button onClick={handleSaveHome} className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:shadow-lg">Update Homepage</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
