"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, Plus, Edit, Trash2 } from "lucide-react"

export default function AdminDestinationsPage() {
  const destinations = [
    { id: "1", name: "Kathmandu Durbar Square", region: "Kathmandu Valley", status: "Published" },
    { id: "2", name: "Boudhanath Stupa", region: "Kathmandu Valley", status: "Published" },
    { id: "3", name: "Patan Durbar Square", region: "Patan", status: "Draft" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <Link href="/admin" className="flex items-center gap-2 text-primary hover:text-primary/80 font-semibold">
                <ArrowLeft size={20} />
                Back
              </Link>
              <h1 className="text-4xl font-bold text-foreground">Manage Destinations</h1>
            </div>
            <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition font-semibold">
              <Plus size={20} />
              Add Destination
            </button>
          </div>

          <div className="bg-white border border-border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted/30 border-b border-border">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-foreground">Name</th>
                  <th className="text-left py-4 px-6 font-semibold text-foreground">Region</th>
                  <th className="text-left py-4 px-6 font-semibold text-foreground">Status</th>
                  <th className="text-left py-4 px-6 font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {destinations.map((dest) => (
                  <tr key={dest.id} className="border-b border-border hover:bg-muted/30 transition">
                    <td className="py-4 px-6 font-semibold text-foreground">{dest.name}</td>
                    <td className="py-4 px-6 text-muted-foreground">{dest.region}</td>
                    <td className="py-4 px-6">
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${dest.status === "Published" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                          }`}
                      >
                        {dest.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex gap-3">
                        <button className="text-primary hover:text-primary/80 transition">
                          <Edit size={18} />
                        </button>
                        <button className="text-destructive hover:text-destructive/80 transition">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
