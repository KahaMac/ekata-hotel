"use client"

import { useState } from "react"
import { Plus, Edit, Trash2, FileText, Download, Eye, Image as ImageIcon } from "lucide-react"
import { mockResources } from "@/lib/mock-data"

export function ResourcesSection() {
    const [resources, setResources] = useState(mockResources)
    const [showModal, setShowModal] = useState(false)
    const [editingResource, setEditingResource] = useState<any>(null)
    const [formData, setFormData] = useState({ title: "", type: "PDF", category: "Reports", description: "", image: "" })

    const handleSubmit = () => {
        if (editingResource) {
            setResources(resources.map(r => r.id === editingResource.id ? { ...r, ...formData } : r))
        } else {
            setResources([...resources, {
                id: resources.length + 1,
                size: "1.0 MB",
                downloads: 0,
                date: new Date().toISOString().split('T')[0],
                ...formData
            }])
        }
        setShowModal(false)
        setEditingResource(null)
        setFormData({ title: "", type: "PDF", category: "Reports", description: "", image: "" })
    }

    const handleEdit = (resource: any) => {
        setEditingResource(resource)
        setFormData({
            title: resource.title,
            type: resource.type,
            category: resource.category,
            description: resource.description,
            image: resource.image || ""
        })
        setShowModal(true)
    }

    const handleDelete = (id: number) => {
        if (confirm("Delete this resource?")) {
            setResources(resources.filter(r => r.id !== id))
        }
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Resources Management</h2>
                <button onClick={() => setShowModal(true)} className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg flex items-center gap-2">
                    <Plus size={20} /> Upload Resource
                </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((resource) => (
                    <div key={resource.id} className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-lg hover:-translate-y-1 flex flex-col h-full">
                        {/* Image Preview */}
                        <div className="relative h-48 w-full bg-muted overflow-hidden">
                            {resource.image ? (
                                <img
                                    src={resource.image}
                                    alt={resource.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-muted/50">
                                    <FileText size={48} className="text-muted-foreground/30" />
                                </div>
                            )}
                            <div className="absolute top-3 right-3">
                                <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white rounded-full text-xs font-semibold border border-white/10">
                                    {resource.type}
                                </span>
                            </div>
                        </div>

                        <div className="p-6 flex flex-col flex-1">
                            <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-1">{resource.title}</h3>
                            <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">{resource.description}</p>

                            <div className="flex items-center justify-between text-sm text-muted-foreground mb-6 bg-muted/50 p-3 rounded-lg">
                                <span className="font-medium">{resource.category}</span>
                                <div className="flex items-center gap-2">
                                    <Download size={14} className="text-primary" />
                                    <span className="font-semibold">{resource.downloads}</span>
                                    <span className="text-xs opacity-70">downloads</span>
                                </div>
                            </div>

                            <div className="flex gap-2 mt-auto">
                                <button
                                    onClick={() => alert(`Viewing ${resource.title}`)}
                                    className="flex-1 py-2.5 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 text-sm font-semibold"
                                >
                                    <Eye size={16} /> View
                                </button>
                                <button
                                    onClick={() => handleEdit(resource)}
                                    className="w-10 h-10 border border-border rounded-lg hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                                    title="Edit"
                                >
                                    <Edit size={16} />
                                </button>
                                <button
                                    onClick={() => handleDelete(resource.id)}
                                    className="w-10 h-10 border border-red-200 text-red-500 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center justify-center transition-colors"
                                    title="Delete"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
                    <div className="bg-card rounded-2xl max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto">
                        <h3 className="text-2xl font-bold mb-6">{editingResource ? "Edit" : "Upload"} Resource</h3>
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Resource Title"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />

                            <div className="grid md:grid-cols-2 gap-4">
                                <select
                                    value={formData.type}
                                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                >
                                    <option value="PDF">PDF Document</option>
                                    <option value="DOC">Word Document</option>
                                    <option value="XLS">Excel Spreadsheet</option>
                                    <option value="IMG">Image File</option>
                                </select>
                                <input
                                    type="text"
                                    placeholder="Category"
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Cover Image URL (Optional)</label>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="https://example.com/image.jpg"
                                        value={formData.image}
                                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                        className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center overflow-hidden border border-border">
                                        {formData.image ? (
                                            <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                                        ) : (
                                            <ImageIcon size={20} className="text-muted-foreground" />
                                        )}
                                    </div>
                                </div>
                            </div>

                            <textarea
                                placeholder="Description"
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                rows={3}
                                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />

                            {!editingResource && (
                                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:bg-muted/50 transition-colors cursor-pointer">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <Plus className="text-primary" />
                                    </div>
                                    <p className="font-medium">Click to upload file</p>
                                    <p className="text-sm text-muted-foreground">PDF, DOC, XLS up to 10MB</p>
                                </div>
                            )}
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button onClick={handleSubmit} className="flex-1 bg-gradient-to-r from-primary to-accent text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all">
                                {editingResource ? "Save Changes" : "Upload Resource"}
                            </button>
                            <button onClick={() => { setShowModal(false); setEditingResource(null); setFormData({ title: "", type: "PDF", category: "Reports", description: "", image: "" }); }} className="flex-1 border-2 border-border py-3 rounded-lg font-bold hover:bg-muted transition-colors">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
