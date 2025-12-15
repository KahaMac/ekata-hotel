"use client"

import { useState } from "react"
import { Plus, Edit, Trash2, Upload } from "lucide-react"
import { mockGalleryPhotos, mockGalleryVideos } from "@/lib/mock-data"

export function GallerySection() {
    const [photos, setPhotos] = useState(mockGalleryPhotos)
    const [videos, setVideos] = useState(mockGalleryVideos)
    const [activeTab, setActiveTab] = useState("photos")
    const [showPhotoModal, setShowPhotoModal] = useState(false)
    const [showVideoModal, setShowVideoModal] = useState(false)
    const [editingPhoto, setEditingPhoto] = useState<any>(null)
    const [editingVideo, setEditingVideo] = useState<any>(null)
    const [photoFormData, setPhotoFormData] = useState({ title: "", category: "", url: "" })
    const [videoFormData, setVideoFormData] = useState({ title: "", category: "", url: "", duration: "", thumbnail: "" })
    const [uploadingPhoto, setUploadingPhoto] = useState(false)
    const [uploadingVideo, setUploadingVideo] = useState(false)
    const [uploadingThumbnail, setUploadingThumbnail] = useState(false)

    const handlePhotoFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setUploadingPhoto(true)
            // Create a local URL for preview
            const reader = new FileReader()
            reader.onloadend = () => {
                setPhotoFormData({ ...photoFormData, url: reader.result as string })
                setUploadingPhoto(false)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleVideoFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setUploadingVideo(true)
            // Create a local URL for video
            const reader = new FileReader()
            reader.onloadend = () => {
                setVideoFormData({ ...videoFormData, url: reader.result as string })
                setUploadingVideo(false)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleThumbnailFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setUploadingThumbnail(true)
            // Create a local URL for preview
            const reader = new FileReader()
            reader.onloadend = () => {
                setVideoFormData({ ...videoFormData, thumbnail: reader.result as string })
                setUploadingThumbnail(false)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleDeletePhoto = (id: number) => {
        if (confirm("Delete this photo?")) {
            setPhotos(photos.filter(p => p.id !== id))
        }
    }

    const handleDeleteVideo = (id: number) => {
        if (confirm("Delete this video?")) {
            setVideos(videos.filter(v => v.id !== id))
        }
    }

    const handleEditPhoto = (photo: any) => {
        setEditingPhoto(photo)
        setPhotoFormData({ title: photo.title, category: photo.category, url: photo.url })
        setShowPhotoModal(true)
    }

    const handleEditVideo = (video: any) => {
        setEditingVideo(video)
        setVideoFormData({ title: video.title, category: video.category, url: video.url, duration: video.duration, thumbnail: video.thumbnail })
        setShowVideoModal(true)
    }

    const handleSubmitPhoto = () => {
        if (editingPhoto) {
            setPhotos(photos.map(p => p.id === editingPhoto.id ? { ...p, ...photoFormData } : p))
        } else {
            setPhotos([...photos, {
                id: photos.length + 1,
                ...photoFormData,
                uploadedBy: "Admin",
                uploadDate: new Date().toISOString().split('T')[0]
            }])
        }
        setShowPhotoModal(false)
        setEditingPhoto(null)
        setPhotoFormData({ title: "", category: "", url: "" })
    }

    const handleSubmitVideo = () => {
        if (editingVideo) {
            setVideos(videos.map(v => v.id === editingVideo.id ? { ...v, title: videoFormData.title, category: videoFormData.category, videoId: videoFormData.url, duration: videoFormData.duration, thumbnail: videoFormData.thumbnail } : v))
        } else {
            setVideos([...videos, {
                id: videos.length + 1,
                title: videoFormData.title,
                videoId: videoFormData.url,
                thumbnail: videoFormData.thumbnail,
                category: videoFormData.category,
                duration: videoFormData.duration,
                uploadedBy: "Admin",
                uploadDate: new Date().toISOString().split('T')[0]
            }])
        }
        setShowVideoModal(false)
        setEditingVideo(null)
        setVideoFormData({ title: "", category: "", url: "", duration: "", thumbnail: "" })
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Gallery Management</h2>
                <div className="flex gap-3">
                    <button onClick={() => { setShowPhotoModal(true); setEditingPhoto(null); }} className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg flex items-center gap-2">
                        <Upload size={20} /> Add Photo
                    </button>
                    <button onClick={() => { setShowVideoModal(true); setEditingVideo(null); }} className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg flex items-center gap-2">
                        <Plus size={20} /> Add Video
                    </button>
                </div>
            </div>
            <div className="flex gap-4 mb-6">
                <button onClick={() => setActiveTab("photos")} className={`px-6 py-2 rounded-lg font-semibold ${activeTab === 'photos' ? 'bg-primary text-white' : 'bg-muted'}`}>Photos ({photos.length})</button>
                <button onClick={() => setActiveTab("videos")} className={`px-6 py-2 rounded-lg font-semibold ${activeTab === 'videos' ? 'bg-primary text-white' : 'bg-muted'}`}>Videos ({videos.length})</button>
            </div>
            {activeTab === "photos" && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {photos.map((photo) => (
                        <div key={photo.id} className="relative group bg-card border border-border rounded-lg overflow-hidden">
                            <img src={photo.url} alt={photo.title} className="w-full h-48 object-cover" />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                <button onClick={() => handleEditPhoto(photo)} className="p-2 bg-white rounded-lg hover:bg-gray-100"><Edit size={18} /></button>
                                <button onClick={() => handleDeletePhoto(photo.id)} className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"><Trash2 size={18} /></button>
                            </div>
                            <div className="p-3">
                                <p className="text-sm font-semibold truncate">{photo.title}</p>
                                <p className="text-xs text-muted-foreground">{photo.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {activeTab === "videos" && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {videos.map((video) => (
                        <div key={video.id} className="bg-card border border-border rounded-lg overflow-hidden">
                            <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <p className="font-semibold mb-2">{video.title}</p>
                                <div className="flex justify-between text-sm text-muted-foreground mb-3">
                                    <span>{video.duration}</span>
                                    <span>{video.category}</span>
                                </div>
                                <div className="flex gap-2">
                                    <button onClick={() => handleEditVideo(video)} className="flex-1 py-2 border border-border rounded-lg hover:bg-muted text-sm flex items-center justify-center gap-1"><Edit size={14} /> Edit</button>
                                    <button onClick={() => handleDeleteVideo(video.id)} className="py-2 px-3 border border-red-200 text-red-600 rounded-lg hover:bg-red-50"><Trash2 size={14} /></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Photo Modal */}
            {showPhotoModal && (
                <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
                    <div className="bg-card rounded-2xl max-w-2xl w-full p-8">
                        <h3 className="text-2xl font-bold mb-6">{editingPhoto ? "Edit" : "Add"} Photo</h3>
                        <div className="space-y-4">
                            <input type="text" placeholder="Photo Title" value={photoFormData.title} onChange={(e) => setPhotoFormData({ ...photoFormData, title: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                            <input type="text" placeholder="Category" value={photoFormData.category} onChange={(e) => setPhotoFormData({ ...photoFormData, category: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />

                            {/* File Upload Section */}
                            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                                <Upload className="mx-auto mb-3 text-muted-foreground" size={32} />
                                <p className="text-sm text-muted-foreground mb-3">Upload an image file or enter URL below</p>
                                <label className="inline-block">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handlePhotoFileSelect}
                                        className="hidden"
                                    />
                                    <span className="px-6 py-2 bg-primary text-white rounded-lg cursor-pointer hover:shadow-lg transition-all inline-block">
                                        {uploadingPhoto ? "Uploading..." : "Choose File"}
                                    </span>
                                </label>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-border"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-card text-muted-foreground">OR</span>
                                </div>
                            </div>

                            <input type="text" placeholder="Image URL" value={photoFormData.url} onChange={(e) => setPhotoFormData({ ...photoFormData, url: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />

                            {photoFormData.url && (
                                <div className="border border-border rounded-lg p-4">
                                    <p className="text-sm text-muted-foreground mb-2">Preview:</p>
                                    <img src={photoFormData.url} alt="Preview" className="w-full h-48 object-cover rounded-lg" />
                                </div>
                            )}
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button onClick={handleSubmitPhoto} className="flex-1 bg-gradient-to-r from-primary to-accent text-white py-3 rounded-lg font-bold">Save Photo</button>
                            <button onClick={() => { setShowPhotoModal(false); setEditingPhoto(null); setPhotoFormData({ title: "", category: "", url: "" }); }} className="flex-1 border-2 border-border py-3 rounded-lg font-bold">Cancel</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Video Modal */}
            {showVideoModal && (
                <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
                    <div className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8">
                        <h3 className="text-2xl font-bold mb-6">{editingVideo ? "Edit" : "Add"} Video</h3>
                        <div className="space-y-4">
                            {/* Title and Category */}
                            <input type="text" placeholder="Video Title *" value={videoFormData.title} onChange={(e) => setVideoFormData({ ...videoFormData, title: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />

                            <div className="grid md:grid-cols-2 gap-4">
                                <input type="text" placeholder="Category *" value={videoFormData.category} onChange={(e) => setVideoFormData({ ...videoFormData, category: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                                <input type="text" placeholder="Duration * (e.g., 5:30)" value={videoFormData.duration} onChange={(e) => setVideoFormData({ ...videoFormData, duration: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                            </div>

                            {/* Video Upload Section */}
                            <div>
                                <label className="block text-sm font-semibold mb-2">Video Source *</label>
                                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                                    <Upload className="mx-auto mb-3 text-muted-foreground" size={32} />
                                    <p className="text-sm text-muted-foreground mb-3">Upload video file or enter YouTube/Vimeo URL below</p>
                                    <label className="inline-block">
                                        <input
                                            type="file"
                                            accept="video/*"
                                            onChange={handleVideoFileSelect}
                                            className="hidden"
                                        />
                                        <span className="px-6 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:shadow-lg transition-all inline-block">
                                            {uploadingVideo ? "Uploading..." : "Choose Video File"}
                                        </span>
                                    </label>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-border"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-card text-muted-foreground">OR</span>
                                </div>
                            </div>

                            <input type="text" placeholder="Video URL (YouTube/Vimeo)" value={videoFormData.url} onChange={(e) => setVideoFormData({ ...videoFormData, url: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />

                            {/* Thumbnail Upload Section - REQUIRED */}
                            <div>
                                <label className="block text-sm font-semibold mb-2 text-red-600">Video Thumbnail * (Required)</label>
                                <div className="border-2 border-dashed border-red-200 rounded-lg p-6 text-center">
                                    <Upload className="mx-auto mb-3 text-muted-foreground" size={32} />
                                    <p className="text-sm text-muted-foreground mb-3">Upload thumbnail image or enter URL below</p>
                                    <label className="inline-block">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleThumbnailFileSelect}
                                            className="hidden"
                                        />
                                        <span className="px-6 py-2 bg-purple-500 text-white rounded-lg cursor-pointer hover:shadow-lg transition-all inline-block">
                                            {uploadingThumbnail ? "Uploading..." : "Choose Thumbnail"}
                                        </span>
                                    </label>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-border"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-card text-muted-foreground">OR</span>
                                </div>
                            </div>

                            <input type="text" placeholder="Thumbnail URL *" value={videoFormData.thumbnail} onChange={(e) => setVideoFormData({ ...videoFormData, thumbnail: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />

                            {videoFormData.thumbnail && (
                                <div className="border border-border rounded-lg p-4">
                                    <p className="text-sm text-muted-foreground mb-2">Thumbnail Preview:</p>
                                    <img src={videoFormData.thumbnail} alt="Preview" className="w-full h-48 object-cover rounded-lg" />
                                </div>
                            )}

                            <p className="text-xs text-muted-foreground">* Required fields</p>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button
                                onClick={handleSubmitVideo}
                                disabled={!videoFormData.title || !videoFormData.category || !videoFormData.duration || !videoFormData.thumbnail || !videoFormData.url}
                                className="flex-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 rounded-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Save Video
                            </button>
                            <button onClick={() => { setShowVideoModal(false); setEditingVideo(null); setVideoFormData({ title: "", category: "", url: "", duration: "", thumbnail: "" }); }} className="flex-1 border-2 border-border py-3 rounded-lg font-bold">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
