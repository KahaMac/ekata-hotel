"use client"

import { useState } from "react"
import { Plus, Edit, Trash2 } from "lucide-react"
import { mockEvents } from "@/lib/mock-data"

export function EventsSection() {
    const [events, setEvents] = useState(mockEvents)
    const [showModal, setShowModal] = useState(false)
    const [editingEvent, setEditingEvent] = useState<any>(null)
    const [formData, setFormData] = useState({ title: "", date: "", time: "", location: "", capacity: "", description: "" })

    const handleSubmit = () => {
        if (editingEvent) {
            setEvents(events.map(e => e.id === editingEvent.id ? { ...e, ...formData, capacity: parseInt(formData.capacity) } : e))
        } else {
            setEvents([...events, { id: events.length + 1, registered: 0, status: "upcoming", organizer: "Admin", ...formData, capacity: parseInt(formData.capacity) }])
        }
        setShowModal(false)
        setEditingEvent(null)
        setFormData({ title: "", date: "", time: "", location: "", capacity: "", description: "" })
    }

    const handleEdit = (event: any) => {
        setEditingEvent(event)
        setFormData({ title: event.title, date: event.date, time: event.time, location: event.location, capacity: event.capacity.toString(), description: event.description })
        setShowModal(true)
    }

    const handleDelete = (id: number) => {
        if (confirm("Delete this event?")) {
            setEvents(events.filter(e => e.id !== id))
        }
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Events Management</h2>
                <button onClick={() => setShowModal(true)} className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg flex items-center gap-2">
                    <Plus size={20} /> Create Event
                </button>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                {events.map((event) => (
                    <div key={event.id} className="bg-card border-2 border-border rounded-xl p-6">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="font-bold text-lg mb-1">{event.title}</h3>
                                <p className="text-sm text-muted-foreground">{event.date} at {event.time}</p>
                            </div>
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">{event.status}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
                        <div className="flex justify-between text-sm mb-4">
                            <span>Location: {event.location}</span>
                            <span className="font-semibold">{event.registered}/{event.capacity} registered</span>
                        </div>
                        <div className="flex gap-2">
                            <button onClick={() => handleEdit(event)} className="flex-1 py-2 border border-border rounded-lg hover:bg-muted flex items-center justify-center gap-2"><Edit size={16} /> Edit</button>
                            <button onClick={() => handleDelete(event.id)} className="py-2 px-4 border border-red-200 text-red-600 rounded-lg hover:bg-red-50"><Trash2 size={16} /></button>
                        </div>
                    </div>
                ))}
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
                    <div className="bg-card rounded-2xl max-w-2xl w-full p-8">
                        <h3 className="text-2xl font-bold mb-6">{editingEvent ? "Edit" : "Create"} Event</h3>
                        <div className="space-y-4">
                            <input type="text" placeholder="Event Title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                            <div className="grid md:grid-cols-2 gap-4">
                                <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                                <input type="time" value={formData.time} onChange={(e) => setFormData({ ...formData, time: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                            </div>
                            <input type="text" placeholder="Location" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                            <input type="number" placeholder="Capacity" value={formData.capacity} onChange={(e) => setFormData({ ...formData, capacity: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                            <textarea placeholder="Description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} rows={3} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button onClick={handleSubmit} className="flex-1 bg-gradient-to-r from-primary to-accent text-white py-3 rounded-lg font-bold">Save Event</button>
                            <button onClick={() => { setShowModal(false); setEditingEvent(null); setFormData({ title: "", date: "", time: "", location: "", capacity: "", description: "" }); }} className="flex-1 border-2 border-border py-3 rounded-lg font-bold">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
