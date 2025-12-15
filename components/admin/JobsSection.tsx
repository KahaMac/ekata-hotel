"use client"

import { useState } from "react"
import { Plus, Edit, Trash2, CheckCircle } from "lucide-react"
import { mockJobs } from "@/lib/mock-data"

export function JobsSection() {
    const [jobs, setJobs] = useState(mockJobs)
    const [showModal, setShowModal] = useState(false)
    const [editingJob, setEditingJob] = useState<any>(null)
    const [formData, setFormData] = useState({ title: "", company: "", location: "", salary: "", experience: "", type: "Full-time" })

    const handleSubmit = () => {
        if (editingJob) {
            setJobs(jobs.map(j => j.id === editingJob.id ? { ...j, ...formData } : j))
        } else {
            setJobs([...jobs, { id: jobs.length + 1, status: "active", applicants: 0, views: 0, postedDate: new Date().toISOString().split('T')[0], ...formData }])
        }
        setShowModal(false)
        setEditingJob(null)
        setFormData({ title: "", company: "", location: "", salary: "", experience: "", type: "Full-time" })
    }

    const handleEdit = (job: any) => {
        setEditingJob(job)
        setFormData({ title: job.title, company: job.company, location: job.location, salary: job.salary, experience: job.experience, type: job.type })
        setShowModal(true)
    }

    const handleDelete = (id: number) => {
        if (confirm("Delete this job?")) {
            setJobs(jobs.filter(j => j.id !== id))
        }
    }

    const handleApprove = (id: number) => {
        setJobs(jobs.map(j => j.id === id ? { ...j, status: "active" } : j))
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Jobs Management</h2>
                <button onClick={() => setShowModal(true)} className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg flex items-center gap-2">
                    <Plus size={20} /> Post Job
                </button>
            </div>
            <div className="bg-card border border-border rounded-xl overflow-hidden">
                <table className="w-full">
                    <thead className="bg-muted/50 border-b">
                        <tr>
                            <th className="text-left p-4 font-semibold">Job Title</th>
                            <th className="text-left p-4 font-semibold">Company</th>
                            <th className="text-left p-4 font-semibold">Status</th>
                            <th className="text-left p-4 font-semibold">Applicants</th>
                            <th className="text-right p-4 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((job) => (
                            <tr key={job.id} className="border-b hover:bg-muted/30">
                                <td className="p-4"><div className="font-semibold">{job.title}</div><div className="text-sm text-muted-foreground">{job.location}</div></td>
                                <td className="p-4">{job.company}</td>
                                <td className="p-4"><span className={`px-3 py-1 rounded-full text-xs font-semibold ${job.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>{job.status}</span></td>
                                <td className="p-4">{job.applicants}</td>
                                <td className="p-4"><div className="flex justify-end gap-2">
                                    {job.status === 'pending' && <button onClick={() => handleApprove(job.id)} className="p-2 hover:bg-green-100 rounded-lg" title="Approve"><CheckCircle size={18} className="text-green-600" /></button>}
                                    <button onClick={() => handleEdit(job)} className="p-2 hover:bg-blue-100 rounded-lg" title="Edit"><Edit size={18} className="text-blue-600" /></button>
                                    <button onClick={() => handleDelete(job.id)} className="p-2 hover:bg-red-100 rounded-lg" title="Delete"><Trash2 size={18} className="text-red-600" /></button>
                                </div></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
                    <div className="bg-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8">
                        <h3 className="text-2xl font-bold mb-6">{editingJob ? "Edit" : "Post New"} Job</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <input type="text" placeholder="Job Title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                            <input type="text" placeholder="Company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                            <input type="text" placeholder="Location" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                            <input type="text" placeholder="Salary Range" value={formData.salary} onChange={(e) => setFormData({ ...formData, salary: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                            <input type="text" placeholder="Experience Required" value={formData.experience} onChange={(e) => setFormData({ ...formData, experience: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                            <select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                                <option>Full-time</option>
                                <option>Part-time</option>
                                <option>Contract</option>
                            </select>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button onClick={handleSubmit} className="flex-1 bg-gradient-to-r from-primary to-accent text-white py-3 rounded-lg font-bold">Save Job</button>
                            <button onClick={() => { setShowModal(false); setEditingJob(null); setFormData({ title: "", company: "", location: "", salary: "", experience: "", type: "Full-time" }); }} className="flex-1 border-2 border-border py-3 rounded-lg font-bold">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
