"use client"

import { useState } from "react"
import { Search, Send, MoreVertical, Phone, Video, Check, CheckCheck } from "lucide-react"
import { mockMessages } from "@/lib/mock-data"

export function MessagesSection() {
    const [messages, setMessages] = useState(mockMessages)
    const [activeMessage, setActiveMessage] = useState<any>(null)
    const [replyText, setReplyText] = useState("")
    const [broadcastMode, setBroadcastMode] = useState(false)

    const handleSendMessage = () => {
        if (!replyText.trim()) return

        // Mock sending logic
        alert(`Message sent: ${replyText}`)
        setReplyText("")

        if (broadcastMode) {
            setBroadcastMode(false)
        }
    }

    return (
        <div className="flex h-[calc(100vh-200px)] bg-card border border-border rounded-xl overflow-hidden">
            {/* Sidebar List */}
            <div className="w-1/3 border-r border-border flex flex-col">
                <div className="p-4 border-b border-border">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="font-bold text-lg">Messages</h2>
                        <button
                            onClick={() => { setActiveMessage(null); setBroadcastMode(true); }}
                            className="text-xs bg-primary text-white px-3 py-1 rounded-full hover:bg-primary/90"
                        >
                            Broadcast
                        </button>
                    </div>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                        <input
                            type="text"
                            placeholder="Search messages..."
                            className="w-full pl-9 pr-4 py-2 bg-muted rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            onClick={() => { setActiveMessage(msg); setBroadcastMode(false); }}
                            className={`p-4 border-b border-border cursor-pointer hover:bg-muted/50 transition-colors ${activeMessage?.id === msg.id ? 'bg-muted' : ''}`}
                        >
                            <div className="flex justify-between items-start mb-1">
                                <div className="flex items-center gap-2">
                                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-bold`}>
                                        {msg.avatar}
                                    </div>
                                    <span className={`font-semibold ${!msg.read ? 'text-foreground' : 'text-muted-foreground'}`}>
                                        {msg.sender}
                                    </span>
                                </div>
                                <span className="text-xs text-muted-foreground">{msg.date}</span>
                            </div>
                            <p className={`text-sm mb-1 ${!msg.read ? 'font-medium text-foreground' : 'text-muted-foreground'}`}>
                                {msg.subject}
                            </p>
                            <p className="text-xs text-muted-foreground line-clamp-1">
                                {msg.preview}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col bg-muted/10">
                {activeMessage ? (
                    <>
                        {/* Header */}
                        <div className="p-4 border-b border-border bg-card flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold">
                                    {activeMessage.avatar}
                                </div>
                                <div>
                                    <h3 className="font-bold">{activeMessage.sender}</h3>
                                    <p className="text-xs text-muted-foreground">Active now</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="p-2 hover:bg-muted rounded-full"><Phone size={18} /></button>
                                <button className="p-2 hover:bg-muted rounded-full"><Video size={18} /></button>
                                <button className="p-2 hover:bg-muted rounded-full"><MoreVertical size={18} /></button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-muted/30">
                            <div className="flex justify-center">
                                <span className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">Today</span>
                            </div>

                            <div className="flex justify-start group">
                                <div className="flex gap-3 max-w-[80%]">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-1">
                                        {activeMessage.avatar}
                                    </div>
                                    <div className="space-y-1">
                                        <div className="bg-card border border-border rounded-2xl rounded-tl-none p-4 shadow-sm">
                                            <p className="text-sm font-bold mb-1 text-primary">{activeMessage.subject}</p>
                                            <p className="text-sm text-foreground leading-relaxed">{activeMessage.preview}</p>
                                        </div>
                                        <span className="text-[10px] text-muted-foreground ml-2 opacity-0 group-hover:opacity-100 transition-opacity">{activeMessage.date}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Mock Reply */}
                            <div className="flex justify-end group">
                                <div className="flex gap-3 max-w-[80%] flex-row-reverse">
                                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-1">
                                        A
                                    </div>
                                    <div className="space-y-1">
                                        <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-none p-4 shadow-md">
                                            <p className="text-sm leading-relaxed">Thank you for reaching out. We will review this and get back to you shortly.</p>
                                        </div>
                                        <div className="flex items-center justify-end gap-1 mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span className="text-[10px] text-muted-foreground">Just now</span>
                                            <CheckCheck size={12} className="text-primary" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Input */}
                        <div className="p-4 bg-card border-t border-border">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Type your reply..."
                                    value={replyText}
                                    onChange={(e) => setReplyText(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                                    className="flex-1 px-4 py-3 bg-muted rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                                <button
                                    onClick={handleSendMessage}
                                    className="bg-primary text-white p-3 rounded-xl hover:shadow-lg transition-all"
                                >
                                    <Send size={20} />
                                </button>
                            </div>
                        </div>
                    </>
                ) : broadcastMode ? (
                    <div className="flex-1 flex flex-col">
                        <div className="p-6 border-b border-border bg-card">
                            <h2 className="text-xl font-bold mb-2">New Broadcast Message</h2>
                            <p className="text-muted-foreground">Send a message to all members or specific groups.</p>
                        </div>
                        <div className="p-8 max-w-2xl mx-auto w-full space-y-6">
                            <div>
                                <label className="block text-sm font-semibold mb-2">To:</label>
                                <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                                    <option>All Members</option>
                                    <option>Active Members Only</option>
                                    <option>Pending Members Only</option>
                                    <option>Organization Presidents</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2">Subject:</label>
                                <input
                                    type="text"
                                    placeholder="Announcement Subject"
                                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2">Message:</label>
                                <textarea
                                    rows={6}
                                    placeholder="Type your announcement here..."
                                    value={replyText}
                                    onChange={(e) => setReplyText(e.target.value)}
                                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <button
                                onClick={handleSendMessage}
                                className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:shadow-lg"
                            >
                                Send Broadcast
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="flex-1 flex items-center justify-center text-muted-foreground">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                                <Send size={32} />
                            </div>
                            <p>Select a conversation or start a broadcast</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
