"use client"

import { useState } from "react"
import { Plus, Edit, Trash2, Eye, Image as ImageIcon, Calendar, User } from "lucide-react"
import { mockBlogPosts } from "@/lib/mock-data"

export function ContentSection() {
    const [posts, setPosts] = useState(mockBlogPosts)
    const [showModal, setShowModal] = useState(false)
    const [editingPost, setEditingPost] = useState<any>(null)
    const [formData, setFormData] = useState({ title: "", excerpt: "", author: "", category: "", status: "draft", image: "" })

    const handleSubmit = () => {
        if (editingPost) {
            setPosts(posts.map(p => p.id === editingPost.id ? { ...p, ...formData } : p))
        } else {
            setPosts([...posts, { id: posts.length + 1, date: new Date().toISOString().split('T')[0], views: 0, ...formData }])
        }
        setShowModal(false)
        setEditingPost(null)
        setFormData({ title: "", excerpt: "", author: "", category: "", status: "draft", image: "" })
    }

    const handleEdit = (post: any) => {
        setEditingPost(post)
        setFormData({
            title: post.title,
            excerpt: post.excerpt,
            author: post.author,
            category: post.category,
            status: post.status,
            image: post.image || ""
        })
        setShowModal(true)
    }

    const handleDelete = (id: number) => {
        if (confirm("Delete this post?")) {
            setPosts(posts.filter(p => p.id !== id))
        }
    }

    const toggleStatus = (id: number) => {
        setPosts(posts.map(p => p.id === id ? { ...p, status: p.status === 'published' ? 'draft' : 'published' } : p))
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Blog Posts Management</h2>
                <button onClick={() => setShowModal(true)} className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg flex items-center gap-2">
                    <Plus size={20} /> New Post
                </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <div key={post.id} className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col h-full">
                        <div className="relative h-48 w-full bg-muted overflow-hidden">
                            {post.image ? (
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-muted/50">
                                    <ImageIcon size={48} className="text-muted-foreground/30" />
                                </div>
                            )}
                            <div className="absolute top-3 right-3">
                                <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-sm ${post.status === 'published'
                                        ? 'bg-green-500 text-white'
                                        : 'bg-gray-500 text-white'
                                    }`}>
                                    {post.status === 'published' ? 'Published' : 'Draft'}
                                </span>
                            </div>
                        </div>

                        <div className="p-6 flex flex-col flex-1">
                            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                                <span className="bg-primary/10 text-primary px-2 py-1 rounded-md font-semibold">{post.category}</span>
                                <span>•</span>
                                <div className="flex items-center gap-1">
                                    <Calendar size={12} />
                                    {post.date}
                                </div>
                            </div>

                            <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                            <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">{post.excerpt}</p>

                            <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <User size={14} />
                                    <span>{post.author}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Eye size={14} />
                                    <span>{post.views}</span>
                                </div>
                            </div>

                            <div className="flex gap-2 mt-4">
                                <button onClick={() => handleEdit(post)} className="flex-1 py-2 border border-border rounded-lg hover:bg-muted flex items-center justify-center gap-2 text-sm font-medium transition-colors">
                                    <Edit size={16} /> Edit
                                </button>
                                <button onClick={() => toggleStatus(post.id)} className="flex-1 py-2 border border-border rounded-lg hover:bg-muted flex items-center justify-center gap-2 text-sm font-medium transition-colors">
                                    {post.status === 'published' ? 'Unpublish' : 'Publish'}
                                </button>
                                <button onClick={() => handleDelete(post.id)} className="w-10 h-10 border border-red-200 text-red-500 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center justify-center transition-colors">
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
                    <div className="bg-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8">
                        <h3 className="text-2xl font-bold mb-6">{editingPost ? "Edit" : "Create"} Blog Post</h3>
                        <div className="space-y-4">
                            <input type="text" placeholder="Post Title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />

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

                            <textarea placeholder="Excerpt" value={formData.excerpt} onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })} rows={3} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />

                            <div className="grid md:grid-cols-2 gap-4">
                                <input type="text" placeholder="Author" value={formData.author} onChange={(e) => setFormData({ ...formData, author: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                                <input type="text" placeholder="Category" value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                            </div>
                            <select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                                <option value="draft">Draft</option>
                                <option value="published">Published</option>
                            </select>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button onClick={handleSubmit} className="flex-1 bg-gradient-to-r from-primary to-accent text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all">Save Post</button>
                            <button onClick={() => { setShowModal(false); setEditingPost(null); setFormData({ title: "", excerpt: "", author: "", category: "", status: "draft", image: "" }); }} className="flex-1 border-2 border-border py-3 rounded-lg font-bold hover:bg-muted transition-colors">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
