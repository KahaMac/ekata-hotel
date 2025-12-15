"use client"

import { useState } from "react"
import { Plus, Edit, Trash2 } from "lucide-react"
import { mockOrganizations } from "@/lib/mock-data"

export function OrganizationsSection() {
    const [orgs, setOrgs] = useState(mockOrganizations)
    const [showModal, setShowModal] = useState(false)
    const [editingOrg, setEditingOrg] = useState<any>(null)
    const [formData, setFormData] = useState({ name: "", location: "", president: "", established: "", description: "" })

    const handleSubmit = () => {
        if (editingOrg) {
            setOrgs(orgs.map(o => o.id === editingOrg.id ? { ...o, ...formData } : o))
        } else {
            setOrgs([...orgs, { id: orgs.length + 1, memberCount: 0, ...formData }])
        }
        setShowModal(false)
        setEditingOrg(null)
        setFormData({ name: "", location: "", president: "", established: "", description: "" })
    }

    const handleEdit = (org: any) => {
        setEditingOrg(org)
        setFormData({ name: org.name, location: org.location, president: org.president, established: org.established, description: org.description })
        setShowModal(true)
    }

    const handleDelete = (id: number) => {
        if (confirm("Delete this organization?")) {
            setOrgs(orgs.filter(o => o.id !== id))
        }
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Organizations Management</h2>
                <button onClick={() => setShowModal(true)} className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg flex items-center gap-2">
                    <Plus size={20} /> Add Organization
                </button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {orgs.map((org) => (
                    <div key={org.id} className="bg-card border-2 border-border rounded-xl p-6 hover:border-primary transition-all">
                        <h3 className="font-bold text-lg mb-2">{org.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{org.location}</p>
                        <div className="space-y-2 text-sm mb-4">
                            <div className="flex justify-between"><span>Members:</span><span className="font-semibold">{org.memberCount}</span></div>
                            <div className="flex justify-between"><span>President:</span><span className="font-semibold">{org.president}</span></div>
                            <div className="flex justify-between"><span>Est:</span><span className="font-semibold">{org.established}</span></div>
                        </div>
                        <div className="flex gap-2">
                            <button onClick={() => handleEdit(org)} className="flex-1 py-2 border border-border rounded-lg hover:bg-muted flex items-center justify-center gap-2"><Edit size={16} /> Edit</button>
                            <button onClick={() => handleDelete(org.id)} className="flex-1 py-2 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 flex items-center justify-center gap-2"><Trash2 size={16} /> Delete</button>
                        </div>
                    </div>
                ))}
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
                    <div className="bg-card rounded-2xl max-w-2xl w-full p-8">
                        <h3 className="text-2xl font-bold mb-6">{editingOrg ? "Edit" : "Add"} Organization</h3>
                        <div className="space-y-4">
                            <input type="text" placeholder="Organization Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                            <input type="text" placeholder="Location" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                            <input type="text" placeholder="President Name" value={formData.president} onChange={(e) => setFormData({ ...formData, president: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                            <input type="text" placeholder="Established Year" value={formData.established} onChange={(e) => setFormData({ ...formData, established: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                            <textarea placeholder="Description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} rows={3} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button onClick={handleSubmit} className="flex-1 bg-gradient-to-r from-primary to-accent text-white py-3 rounded-lg font-bold">Save</button>
                            <button onClick={() => { setShowModal(false); setEditingOrg(null); setFormData({ name: "", location: "", president: "", established: "", description: "" }); }} className="flex-1 border-2 border-border py-3 rounded-lg font-bold">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
