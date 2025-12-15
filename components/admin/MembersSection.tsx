"use client"

import { useState } from "react"
import { Search, Plus, CheckCircle, XCircle, Edit, Trash2 } from "lucide-react"
import { mockMembers } from "@/lib/mock-data"

export function MembersSection() {
    const [members, setMembers] = useState(mockMembers)
    const [searchTerm, setSearchTerm] = useState("")
    const [filterStatus, setFilterStatus] = useState("all")
    const [showAddModal, setShowAddModal] = useState(false)
    const [editingMember, setEditingMember] = useState<any>(null)

    const filteredMembers = members.filter(member => {
        const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            member.email.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesStatus = filterStatus === "all" || member.status === filterStatus
        return matchesSearch && matchesStatus
    })

    const handleDelete = (id: number) => {
        if (confirm("Are you sure you want to delete this member?")) {
            setMembers(members.filter(m => m.id !== id))
        }
    }

    const handleStatusChange = (id: number, newStatus: string) => {
        setMembers(members.map(m => m.id === id ? { ...m, status: newStatus } : m))
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case "active": return "bg-green-100 text-green-800"
            case "pending": return "bg-yellow-100 text-yellow-800"
            case "inactive": return "bg-gray-100 text-gray-800"
            default: return "bg-gray-100 text-gray-800"
        }
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">Members Management</h2>
                <button
                    onClick={() => setShowAddModal(true)}
                    className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2"
                >
                    <Plus size={20} />
                    Add Member
                </button>
            </div>

            {/* Filters */}
            <div className="bg-card border border-border rounded-xl p-6 mb-6">
                <div className="grid md:grid-cols-[1fr,200px] gap-4">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                        <input
                            type="text"
                            placeholder="Search members..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-11 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>
                    <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                        <option value="all">All Status</option>
                        <option value="active">Active</option>
                        <option value="pending">Pending</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>
            </div>

            {/* Members Table */}
            <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-muted/50 border-b border-border">
                            <tr>
                                <th className="text-left p-4 font-semibold text-foreground">Hotel Name</th>
                                <th className="text-left p-4 font-semibold text-foreground">Contact Person</th>
                                <th className="text-left p-4 font-semibold text-foreground">Organization</th>
                                <th className="text-left p-4 font-semibold text-foreground">Status</th>
                                <th className="text-left p-4 font-semibold text-foreground">Join Date</th>
                                <th className="text-right p-4 font-semibold text-foreground">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredMembers.map((member) => (
                                <tr key={member.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                                    <td className="p-4">
                                        <div>
                                            <div className="font-semibold text-foreground">{member.name}</div>
                                            <div className="text-sm text-muted-foreground">{member.email}</div>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div>
                                            <div className="text-foreground">{member.contactPerson}</div>
                                            <div className="text-sm text-muted-foreground">{member.phone}</div>
                                        </div>
                                    </td>
                                    <td className="p-4 text-muted-foreground">{member.organization}</td>
                                    <td className="p-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(member.status)}`}>
                                            {member.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-muted-foreground">{new Date(member.joinDate).toLocaleDateString()}</td>
                                    <td className="p-4">
                                        <div className="flex items-center justify-end gap-2">
                                            {member.status === "pending" && (
                                                <>
                                                    <button
                                                        onClick={() => handleStatusChange(member.id, "active")}
                                                        className="p-2 hover:bg-green-100 rounded-lg transition-colors"
                                                        title="Approve"
                                                    >
                                                        <CheckCircle size={18} className="text-green-600" />
                                                    </button>
                                                    <button
                                                        onClick={() => handleStatusChange(member.id, "inactive")}
                                                        className="p-2 hover:bg-red-100 rounded-lg transition-colors"
                                                        title="Reject"
                                                    >
                                                        <XCircle size={18} className="text-red-600" />
                                                    </button>
                                                </>
                                            )}
                                            <button
                                                onClick={() => setEditingMember(member)}
                                                className="p-2 hover:bg-blue-100 rounded-lg transition-colors"
                                                title="Edit"
                                            >
                                                <Edit size={18} className="text-blue-600" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(member.id)}
                                                className="p-2 hover:bg-red-100 rounded-lg transition-colors"
                                                title="Delete"
                                            >
                                                <Trash2 size={18} className="text-red-600" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-card border border-border rounded-lg p-4">
                    <div className="text-2xl font-bold text-foreground">{members.filter(m => m.status === "active").length}</div>
                    <div className="text-sm text-muted-foreground">Active Members</div>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                    <div className="text-2xl font-bold text-foreground">{members.filter(m => m.status === "pending").length}</div>
                    <div className="text-sm text-muted-foreground">Pending Approval</div>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                    <div className="text-2xl font-bold text-foreground">{members.length}</div>
                    <div className="text-sm text-muted-foreground">Total Members</div>
                </div>
            </div>

            {/* Add/Edit Modal */}
            {(showAddModal || editingMember) && (
                <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
                    <div className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8">
                        <h3 className="text-2xl font-bold text-foreground mb-6">
                            {editingMember ? "Edit Member" : "Add New Member"}
                        </h3>
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Hotel Name"
                                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <input
                                type="text"
                                placeholder="Contact Person"
                                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <input
                                type="tel"
                                placeholder="Phone"
                                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                                <option>Select Organization</option>
                                <option>Kalanki Hotel Business Association</option>
                                <option>Sundhara Hotel Business Association</option>
                                <option>Bagbazar Hotel Business Association</option>
                            </select>
                            <textarea
                                placeholder="Address"
                                rows={3}
                                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button className="flex-1 bg-gradient-to-r from-primary to-accent text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all">
                                {editingMember ? "Update" : "Add"} Member
                            </button>
                            <button
                                onClick={() => {
                                    setShowAddModal(false)
                                    setEditingMember(null)
                                }}
                                className="flex-1 border-2 border-border py-3 rounded-lg font-bold hover:bg-muted transition-all"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
