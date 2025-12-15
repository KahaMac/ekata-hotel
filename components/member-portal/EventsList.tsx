"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "sonner"
import { Calendar, MapPin, Clock, Users, CheckCircle2, XCircle } from "lucide-react"

type Event = {
    id: string
    title: string
    date: string
    time: string
    location: string
    description: string
    category: string
    attendees: number
    rsvpStatus: "Attending" | "Not Attending" | "Pending" | null
}

import ViewModal from "./ViewModal"
import { Eye } from "lucide-react"

export default function EventsList() {
    const [events, setEvents] = useState<Event[]>([
        {
            id: "1",
            title: "Annual General Meeting 2025",
            date: "Feb 15, 2025",
            time: "10:00 AM - 2:00 PM",
            location: "Hotel Yak & Yeti, Durbar Marg",
            description: "The Annual General Meeting of DHBA to discuss the yearly progress and future roadmap.",
            category: "Meeting",
            attendees: 120,
            rsvpStatus: "Attending"
        },
        {
            id: "2",
            title: "Hospitality Tourism Workshop",
            date: "Feb 22, 2025",
            time: "2:00 PM - 5:00 PM",
            location: "Radisson Hotel, Lazimpat",
            description: "A workshop focused on sustainable tourism practices and hospitality trends.",
            category: "Workshop",
            attendees: 45,
            rsvpStatus: null
        },
        {
            id: "3",
            title: "Networking Dinner Night",
            date: "Mar 05, 2025",
            time: "7:00 PM - 10:00 PM",
            location: "Hyatt Regency, Boudha",
            description: "An evening of networking with industry leaders, government officials, and fellow members.",
            category: "Networking",
            attendees: 80,
            rsvpStatus: "Not Attending"
        }
    ])

    const [viewingEvent, setViewingEvent] = useState<Event | null>(null)

    const handleRSVP = (id: string, status: "Attending" | "Not Attending") => {
        setEvents(events.map(event =>
            event.id === id ? { ...event, rsvpStatus: status } : event
        ))
        toast.success(`RSVP updated: ${status}`)
    }

    const EventCard = ({ event }: { event: Event }) => (
        <div className="group relative mb-6 overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="absolute top-0 left-0 h-full w-2 bg-gradient-to-b from-primary to-accent"></div>
            <div className="p-6 pl-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Date Leaf */}
                    <div className="flex-shrink-0 flex flex-col items-center">
                        <div className="w-20 overflow-hidden rounded-xl border border-border bg-white shadow-sm dark:bg-muted">
                            <div className="bg-primary py-1 text-center text-xs font-bold uppercase text-white tracking-wider">
                                {event.date.split(' ')[0]}
                            </div>
                            <div className="flex flex-col items-center justify-center py-3">
                                <span className="text-3xl font-bold text-foreground">{event.date.split(' ')[1].replace(',', '')}</span>
                                <span className="text-xs text-muted-foreground">{event.date.split(' ')[2]}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 space-y-4">
                        <div className="flex items-start justify-between">
                            <div>
                                <Badge variant="secondary" className="mb-2 bg-primary/10 text-primary hover:bg-primary/20 border-0">
                                    {event.category}
                                </Badge>
                                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{event.title}</h3>
                            </div>
                            {event.rsvpStatus && (
                                <Badge className={`${event.rsvpStatus === "Attending"
                                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                    : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                                    } px-3 py-1 text-xs font-bold border-0`}>
                                    {event.rsvpStatus}
                                </Badge>
                            )}
                        </div>

                        <p className="text-muted-foreground leading-relaxed">{event.description}</p>

                        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground border-t border-border pt-4">
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-primary" />
                                <span className="font-medium">{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span className="font-medium">{event.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="h-4 w-4 text-primary" />
                                <span className="font-medium">{event.attendees} attending</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 justify-center min-w-[160px] border-l border-border pl-6">
                        <Button
                            variant="outline"
                            className="w-full justify-start gap-2 hover:bg-primary/10 hover:text-primary"
                            onClick={() => setViewingEvent(event)}
                        >
                            <Eye className="h-4 w-4" />
                            View Details
                        </Button>
                        <Button
                            className={`w-full justify-start gap-2 font-semibold ${event.rsvpStatus === "Attending"
                                ? "bg-green-600 hover:bg-green-700 text-white shadow-md"
                                : "bg-primary hover:bg-primary/90 text-white shadow-md"
                                }`}
                            onClick={() => handleRSVP(event.id, "Attending")}
                        >
                            <CheckCircle2 className="h-4 w-4" />
                            {event.rsvpStatus === "Attending" ? "Confirmed" : "Register Now"}
                        </Button>
                        <Button
                            variant="ghost"
                            className="w-full justify-start gap-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                            onClick={() => handleRSVP(event.id, "Not Attending")}
                        >
                            <XCircle className="h-4 w-4" />
                            Not Interested
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold tracking-tight">Events</h2>
                <p className="text-muted-foreground">
                    Browse upcoming events and manage your RSVPs.
                </p>
            </div>

            <Tabs defaultValue="upcoming">
                <TabsList>
                    <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
                    <TabsTrigger value="my-events">My Events</TabsTrigger>
                    <TabsTrigger value="past">Past Events</TabsTrigger>
                </TabsList>

                <TabsContent value="upcoming" className="mt-6">
                    {events.map(event => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </TabsContent>

                <TabsContent value="my-events" className="mt-6">
                    {events.filter(e => e.rsvpStatus === "Attending").length > 0 ? (
                        events.filter(e => e.rsvpStatus === "Attending").map(event => (
                            <EventCard key={event.id} event={event} />
                        ))
                    ) : (
                        <div className="text-center py-12 border-2 border-dashed rounded-lg">
                            <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                            <h3 className="text-lg font-medium">No upcoming events</h3>
                            <p className="text-muted-foreground">You haven't RSVP'd to any upcoming events yet.</p>
                        </div>
                    )}
                </TabsContent>

                <TabsContent value="past" className="mt-6">
                    <div className="text-center py-12 border-2 border-dashed rounded-lg">
                        <Clock className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                        <h3 className="text-lg font-medium">No past events</h3>
                        <p className="text-muted-foreground">Past events will appear here.</p>
                    </div>
                </TabsContent>
            </Tabs>

            {viewingEvent && (
                <ViewModal
                    isOpen={!!viewingEvent}
                    onClose={() => setViewingEvent(null)}
                    title={viewingEvent.title}
                    footer={
                        <div className="flex gap-2 w-full justify-end">
                            <Button variant="outline" onClick={() => setViewingEvent(null)}>Close</Button>
                            <Button
                                onClick={() => {
                                    handleRSVP(viewingEvent.id, "Attending")
                                    setViewingEvent(null)
                                }}
                                className="bg-primary text-white"
                            >
                                Register Now
                            </Button>
                        </div>
                    }
                >
                    <div className="space-y-6">
                        <div className="flex flex-wrap gap-4">
                            <Badge variant="secondary" className="bg-primary/10 text-primary">
                                {viewingEvent.category}
                            </Badge>
                            {viewingEvent.rsvpStatus && (
                                <Badge variant="outline">
                                    Status: {viewingEvent.rsvpStatus}
                                </Badge>
                            )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Calendar className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">Date</p>
                                        <p className="font-semibold">{viewingEvent.date}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Clock className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">Time</p>
                                        <p className="font-semibold">{viewingEvent.time}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <MapPin className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">Location</p>
                                        <p className="font-semibold">{viewingEvent.location}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Users className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">Attendees</p>
                                        <p className="font-semibold">{viewingEvent.attendees} confirmed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-2">About Event</h4>
                            <p className="text-muted-foreground leading-relaxed">
                                {viewingEvent.description}
                            </p>
                            <p className="mt-4 text-muted-foreground leading-relaxed">
                                Join us for this exciting event where industry experts will share their insights.
                                This is a great opportunity to network with other professionals in the field.
                                Refreshments will be provided.
                            </p>
                        </div>
                    </div>
                </ViewModal>
            )}
        </div>
    )
}
