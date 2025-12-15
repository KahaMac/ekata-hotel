"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
import { toast } from "sonner"
import { Plus, Briefcase, MapPin, DollarSign, Clock, Trash2, Edit } from "lucide-react"

// Mock data type
type Job = {
    id: string
    title: string
    type: string
    location: string
    salary: string
    postedAt: string
    status: "Active" | "Closed"
    applicants: number
    description?: string
}

import ViewModal from "./ViewModal"
import { Eye } from "lucide-react"

export default function MyJobs() {
    const [jobs, setJobs] = useState<Job[]>([
        {
            id: "1",
            title: "Front Desk Officer",
            type: "Full-time",
            location: "Kathmandu",
            salary: "Rs. 25,000 - 35,000",
            postedAt: "2025-02-10",
            status: "Active",
            applicants: 12,
            description: "We are looking for a professional Front Desk Officer to manage our reception area. You will act as the 'face' of our company and ensure visitors receive a heartwarming welcome."
        },
        {
            id: "2",
            title: "Housekeeping Supervisor",
            type: "Full-time",
            location: "Kathmandu",
            salary: "Rs. 30,000 - 40,000",
            postedAt: "2025-01-25",
            status: "Closed",
            applicants: 8,
            description: "Experienced Housekeeping Supervisor needed to oversee our housekeeping staff and ensure high standards of cleanliness and hygiene are maintained throughout the hotel."
        }
    ])

    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [viewingJob, setViewingJob] = useState<Job | null>(null)
    const [editingJob, setEditingJob] = useState<Job | null>(null)
    const [jobToDelete, setJobToDelete] = useState<string | null>(null)

    const [newJob, setNewJob] = useState({
        title: "",
        type: "Full-time",
        location: "Kathmandu",
        salary: "",
        description: ""
    })

    const handleCreateOrUpdateJob = (e: React.FormEvent) => {
        e.preventDefault()

        if (editingJob) {
            // Update existing job
            const updatedJobs = jobs.map(job =>
                job.id === editingJob.id
                    ? {
                        ...job,
                        title: newJob.title,
                        type: newJob.type,
                        location: newJob.location,
                        salary: newJob.salary,
                        description: newJob.description
                    }
                    : job
            )
            setJobs(updatedJobs)
            toast.success("Job updated successfully")
        } else {
            // Create new job
            const job: Job = {
                id: Math.random().toString(36).substr(2, 9),
                title: newJob.title,
                type: newJob.type,
                location: newJob.location,
                salary: newJob.salary,
                postedAt: new Date().toISOString().split('T')[0],
                status: "Active",
                applicants: 0,
                description: newJob.description
            }
            setJobs([job, ...jobs])
            toast.success("Job posted successfully")
        }

        setIsDialogOpen(false)
        resetForm()
    }

    const resetForm = () => {
        setNewJob({ title: "", type: "Full-time", location: "Kathmandu", salary: "", description: "" })
        setEditingJob(null)
    }

    const openCreateDialog = () => {
        resetForm()
        setIsDialogOpen(true)
    }

    const openEditDialog = (job: Job) => {
        setEditingJob(job)
        setNewJob({
            title: job.title,
            type: job.type,
            location: job.location,
            salary: job.salary,
            description: job.description || ""
        })
        setIsDialogOpen(true)
    }

    const confirmDelete = () => {
        if (jobToDelete) {
            setJobs(jobs.filter(job => job.id !== jobToDelete))
            toast.success("Job deleted successfully")
            setJobToDelete(null)
        }
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">My Jobs</h2>
                    <p className="text-muted-foreground">
                        Manage your job postings and view applicants.
                    </p>
                </div>
                <Button onClick={openCreateDialog}>
                    <Plus className="mr-2 h-4 w-4" />
                    Post a Job
                </Button>

                <Dialog open={isDialogOpen} onOpenChange={(open) => {
                    setIsDialogOpen(open)
                    if (!open) resetForm()
                }}>
                    <DialogContent className="sm:max-w-[500px]">
                        <form onSubmit={handleCreateOrUpdateJob}>
                            <DialogHeader>
                                <DialogTitle>{editingJob ? "Edit Job" : "Post a New Job"}</DialogTitle>
                                <DialogDescription>
                                    {editingJob ? "Update the details of your job posting." : "Fill in the details to post a new job opening."}
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="title">Job Title</Label>
                                    <Input
                                        id="title"
                                        value={newJob.title}
                                        onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                                        placeholder="e.g. Senior Chef"
                                        required
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="type">Employment Type</Label>
                                        <Select
                                            value={newJob.type}
                                            onValueChange={(value) => setNewJob({ ...newJob, type: value })}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Full-time">Full-time</SelectItem>
                                                <SelectItem value="Part-time">Part-time</SelectItem>
                                                <SelectItem value="Contract">Contract</SelectItem>
                                                <SelectItem value="Internship">Internship</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="location">Location</Label>
                                        <Input
                                            id="location"
                                            value={newJob.location}
                                            onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                                            placeholder="e.g. Kathmandu"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="salary">Salary Range</Label>
                                    <Input
                                        id="salary"
                                        value={newJob.salary}
                                        onChange={(e) => setNewJob({ ...newJob, salary: e.target.value })}
                                        placeholder="e.g. Rs. 30,000 - 50,000"
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="description">Description</Label>
                                    <Textarea
                                        id="description"
                                        value={newJob.description}
                                        onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
                                        placeholder="Job description and requirements..."
                                        rows={4}
                                        required
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit">{editingJob ? "Update Job" : "Post Job"}</Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="grid gap-4">
                {jobs.map((job) => (
                    <div key={job.id} className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
                        <div className="absolute top-0 right-0 p-4 opacity-10 transition-transform group-hover:scale-150 group-hover:opacity-20">
                            <Briefcase size={100} />
                        </div>

                        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <h3 className="font-bold text-xl text-foreground">{job.title}</h3>
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${job.status === "Active"
                                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                        : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400"
                                        }`}>
                                        {job.status}
                                    </span>
                                </div>

                                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-1.5 bg-muted/50 px-3 py-1.5 rounded-lg">
                                        <Briefcase className="h-4 w-4 text-primary" />
                                        {job.type}
                                    </div>
                                    <div className="flex items-center gap-1.5 bg-muted/50 px-3 py-1.5 rounded-lg">
                                        <MapPin className="h-4 w-4 text-primary" />
                                        {job.location}
                                    </div>
                                    <div className="flex items-center gap-1.5 bg-muted/50 px-3 py-1.5 rounded-lg">
                                        <DollarSign className="h-4 w-4 text-primary" />
                                        {job.salary}
                                    </div>
                                    <div className="flex items-center gap-1.5 bg-muted/50 px-3 py-1.5 rounded-lg">
                                        <Clock className="h-4 w-4 text-primary" />
                                        Posted {job.postedAt}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-border pt-4 md:pt-0 md:pl-6">
                                <div className="text-center min-w-[80px]">
                                    <div className="text-3xl font-bold text-foreground">{job.applicants}</div>
                                    <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Applicants</div>
                                </div>
                                <div className="flex gap-2">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="hover:bg-primary hover:text-white transition-colors"
                                        onClick={() => setViewingJob(job)}
                                    >
                                        <Eye className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="hover:bg-primary hover:text-white transition-colors"
                                        onClick={() => openEditDialog(job)}
                                    >
                                        <Edit className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="text-destructive hover:bg-destructive hover:text-white transition-colors"
                                        onClick={() => setJobToDelete(job.id)}
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {jobs.length === 0 && (
                    <div className="text-center py-12 border-2 border-dashed rounded-lg">
                        <Briefcase className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                        <h3 className="text-lg font-medium">No jobs posted yet</h3>
                        <p className="text-muted-foreground mb-4">Post your first job opening to find talent.</p>
                        <Button onClick={openCreateDialog}>Post a Job</Button>
                    </div>
                )}
            </div>

            {viewingJob && (
                <ViewModal
                    isOpen={!!viewingJob}
                    onClose={() => setViewingJob(null)}
                    title={viewingJob.title}
                    footer={
                        <Button variant="outline" onClick={() => setViewingJob(null)}>Close</Button>
                    }
                >
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm font-semibold text-muted-foreground">Type</p>
                                <p className="font-medium">{viewingJob.type}</p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-muted-foreground">Location</p>
                                <p className="font-medium">{viewingJob.location}</p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-muted-foreground">Salary</p>
                                <p className="font-medium">{viewingJob.salary}</p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-muted-foreground">Posted Date</p>
                                <p className="font-medium">{viewingJob.postedAt}</p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-muted-foreground">Status</p>
                                <Badge variant={viewingJob.status === "Active" ? "default" : "secondary"}>
                                    {viewingJob.status}
                                </Badge>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-muted-foreground">Applicants</p>
                                <p className="font-medium">{viewingJob.applicants}</p>
                            </div>
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-muted-foreground mb-1">Description</p>
                            <p className="text-sm leading-relaxed">
                                {viewingJob.description || "No description provided."}
                            </p>
                        </div>
                    </div>
                </ViewModal>
            )}

            <AlertDialog open={!!jobToDelete} onOpenChange={(open) => !open && setJobToDelete(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete the job posting and remove it from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={confirmDelete} className="bg-destructive text-white hover:bg-destructive/90">
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}
