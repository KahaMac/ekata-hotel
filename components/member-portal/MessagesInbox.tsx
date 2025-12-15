"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Search, Send, MoreVertical, Phone, Video } from "lucide-react"

type Message = {
    id: string
    senderId: string
    text: string
    timestamp: string
    isMe: boolean
}

type Conversation = {
    id: string
    userId: string
    name: string
    avatar: string
    lastMessage: string
    time: string
    unread: number
    online: boolean
}

export default function MessagesInbox() {
    const [activeConversation, setActiveConversation] = useState<string>("1")
    const [newMessage, setNewMessage] = useState("")

    const conversations: Conversation[] = [
        {
            id: "1",
            userId: "u1",
            name: "Monika Scheiblauer",
            avatar: "/avatars/monika.jpg",
            lastMessage: "Thank you for the update regarding the event.",
            time: "10:30 AM",
            unread: 2,
            online: true
        },
        {
            id: "2",
            userId: "u2",
            name: "DHBA Admin",
            avatar: "/logo.png",
            lastMessage: "Your membership renewal is due next month.",
            time: "Yesterday",
            unread: 0,
            online: false
        },
        {
            id: "3",
            userId: "u3",
            name: "Subrata Banerjee",
            avatar: "/avatars/subrata.jpg",
            lastMessage: "Can we schedule a meeting for next week?",
            time: "Feb 10",
            unread: 0,
            online: true
        }
    ]

    const [messages, setMessages] = useState<Message[]>([
        { id: "1", senderId: "u1", text: "Hi there! How are you?", timestamp: "10:00 AM", isMe: false },
        { id: "2", senderId: "me", text: "I'm good, thanks! How about you?", timestamp: "10:05 AM", isMe: true },
        { id: "3", senderId: "u1", text: "Doing great. Just wanted to check on the event details.", timestamp: "10:15 AM", isMe: false },
        { id: "4", senderId: "me", text: "Sure, what would you like to know?", timestamp: "10:20 AM", isMe: true },
        { id: "5", senderId: "u1", text: "Thank you for the update regarding the event.", timestamp: "10:30 AM", isMe: false },
    ])

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault()
        if (!newMessage.trim()) return

        const msg: Message = {
            id: Date.now().toString(),
            senderId: "me",
            text: newMessage,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isMe: true
        }

        setMessages([...messages, msg])
        setNewMessage("")
    }

    const activeChat = conversations.find(c => c.id === activeConversation)

    return (
        <div className="flex h-[calc(100vh-200px)] border rounded-xl overflow-hidden bg-card shadow-sm">
            {/* Sidebar */}
            <div className="w-80 border-r flex flex-col">
                <div className="p-4 border-b">
                    <h2 className="font-bold text-lg mb-4">Messages</h2>
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search messages..." className="pl-9" />
                    </div>
                </div>
                <ScrollArea className="flex-1">
                    <div className="flex flex-col">
                        {conversations.map((chat) => (
                            <button
                                key={chat.id}
                                onClick={() => setActiveConversation(chat.id)}
                                className={`flex items-start gap-3 p-4 text-left hover:bg-muted/50 transition-colors ${activeConversation === chat.id ? "bg-muted" : ""
                                    }`}
                            >
                                <div className="relative">
                                    <Avatar>
                                        <AvatarImage src={chat.avatar} />
                                        <AvatarFallback>{chat.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                                    </Avatar>
                                    {chat.online && (
                                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-background rounded-full"></span>
                                    )}
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-semibold truncate">{chat.name}</span>
                                        <span className="text-xs text-muted-foreground whitespace-nowrap">{chat.time}</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
                                </div>
                                {chat.unread > 0 && (
                                    <div className="flex flex-col justify-center h-full">
                                        <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-full">
                                            {chat.unread}
                                        </span>
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </ScrollArea>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
                {activeChat ? (
                    <>
                        {/* Chat Header */}
                        <div className="p-4 border-b flex justify-between items-center bg-card/50 backdrop-blur">
                            <div className="flex items-center gap-3">
                                <Avatar>
                                    <AvatarImage src={activeChat.avatar} />
                                    <AvatarFallback>{activeChat.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h3 className="font-semibold">{activeChat.name}</h3>
                                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                                        {activeChat.online ? (
                                            <>
                                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                                Online
                                            </>
                                        ) : (
                                            "Offline"
                                        )}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button variant="ghost" size="icon">
                                    <Phone className="h-5 w-5 text-muted-foreground" />
                                </Button>
                                <Button variant="ghost" size="icon">
                                    <Video className="h-5 w-5 text-muted-foreground" />
                                </Button>
                                <Button variant="ghost" size="icon">
                                    <MoreVertical className="h-5 w-5 text-muted-foreground" />
                                </Button>
                            </div>
                        </div>

                        {/* Messages */}
                        <ScrollArea className="flex-1 p-4">
                            <div className="space-y-4">
                                {messages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className={`flex ${msg.isMe ? "justify-end" : "justify-start"}`}
                                    >
                                        <div
                                            className={`max-w-[70%] rounded-2xl px-4 py-2 ${msg.isMe
                                                    ? "bg-primary text-primary-foreground rounded-br-none"
                                                    : "bg-muted text-foreground rounded-bl-none"
                                                }`}
                                        >
                                            <p>{msg.text}</p>
                                            <span className={`text-[10px] block mt-1 ${msg.isMe ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                                                {msg.timestamp}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>

                        {/* Input Area */}
                        <div className="p-4 border-t bg-card">
                            <form onSubmit={handleSendMessage} className="flex gap-2">
                                <Input
                                    placeholder="Type a message..."
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    className="flex-1"
                                />
                                <Button type="submit" size="icon" disabled={!newMessage.trim()}>
                                    <Send className="h-4 w-4" />
                                </Button>
                            </form>
                        </div>
                    </>
                ) : (
                    <div className="flex-1 flex items-center justify-center text-muted-foreground">
                        Select a conversation to start messaging
                    </div>
                )}
            </div>
        </div>
    )
}
