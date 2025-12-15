"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"
import { Search, MapPin, UserPlus, MessageSquare, Check } from "lucide-react"

type Member = {
    id: string
    name: string
    type: string
    location: string
    contactPerson: string
    image: string
    status: "Connected" | "Pending" | "Not Connected"
}

export default function NetworkDirectory() {
    const [searchQuery, setSearchQuery] = useState("")
    const [members, setMembers] = useState<Member[]>([
        {
            id: "1",
            name: "Hotel Yak & Yeti",
            type: "5 Star Hotel",
            location: "Durbar Marg, Kathmandu",
            contactPerson: "Monika Scheiblauer",
            image: "/members/yak-yeti.jpg",
            status: "Connected"
        },
        {
            id: "2",
            name: "Radisson Hotel Kathmandu",
            type: "5 Star Hotel",
            location: "Lazimpat, Kathmandu",
            contactPerson: "Subrata Banerjee",
            image: "/members/radisson.jpg",
            status: "Not Connected"
        },
        {
            id: "3",
            name: "Hyatt Regency Kathmandu",
            type: "5 Star Hotel",
            location: "Boudha, Kathmandu",
            contactPerson: "Ashish Kumar",
            image: "/members/hyatt.jpg",
            status: "Pending"
        },
        {
            id: "4",
            name: "Dwarika's Hotel",
            type: "Heritage Hotel",
            location: "Battisputali, Kathmandu",
            contactPerson: "Ambica Shrestha",
            image: "/members/dwarikas.jpg",
            status: "Not Connected"
        },
        {
            id: "5",
            name: "Kathmandu Marriott Hotel",
            type: "5 Star Hotel",
            location: "Naxal, Kathmandu",
            contactPerson: "Fabian Hamilton",
            image: "/members/marriott.jpg",
            status: "Not Connected"
        }
    ])

    const handleConnect = (id: string) => {
        setMembers(members.map(member =>
            member.id === id ? { ...member, status: "Pending" } : member
        ))
        toast.success("Connection request sent")
    }

    const filteredMembers = members.filter(member =>
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.location.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Member Network</h2>
                    <p className="text-muted-foreground">
                        Connect with other hotels and businesses in the association.
                    </p>
                </div>
                <div className="relative w-full md:w-72">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search members..."
                        className="pl-9"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMembers.map((member) => (
                    <Card key={member.id} className="overflow-hidden">
                        <div className="h-24 bg-gradient-to-r from-primary/20 to-accent/20" />
                        <CardContent className="pt-0 -mt-12 relative px-6 pb-6">
                            <div className="flex justify-between items-end mb-4">
                                <Avatar className="h-24 w-24 border-4 border-background shadow-lg">
                                    <AvatarImage src={member.image} alt={member.name} />
                                    <AvatarFallback className="text-xl font-bold bg-primary/10 text-primary">
                                        {member.name.substring(0, 2).toUpperCase()}
                                    </AvatarFallback>
                                </Avatar>
                                <Badge variant="secondary" className="mb-2">{member.type}</Badge>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-lg font-bold leading-tight mb-1">{member.name}</h3>
                                <p className="text-sm text-muted-foreground flex items-center gap-1">
                                    <MapPin className="h-3 w-3" />
                                    {member.location}
                                </p>
                            </div>

                            <div className="text-sm text-muted-foreground mb-6">
                                <span className="font-medium text-foreground">Contact:</span> {member.contactPerson}
                            </div>

                            <div className="flex gap-2">
                                {member.status === "Connected" ? (
                                    <Button variant="outline" className="flex-1">
                                        <MessageSquare className="mr-2 h-4 w-4" />
                                        Message
                                    </Button>
                                ) : member.status === "Pending" ? (
                                    <Button variant="secondary" className="flex-1" disabled>
                                        <Check className="mr-2 h-4 w-4" />
                                        Pending
                                    </Button>
                                ) : (
                                    <Button className="flex-1" onClick={() => handleConnect(member.id)}>
                                        <UserPlus className="mr-2 h-4 w-4" />
                                        Connect
                                    </Button>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
