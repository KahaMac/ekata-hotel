"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Download, Search, FileBarChart, BookOpen, Shield, Eye } from "lucide-react"

type Resource = {
    id: string
    title: string
    type: "PDF" | "DOC" | "XLS"
    category: string
    size: string
    date: string
    downloads: number
}

import ViewModal from "./ViewModal"

export default function ResourcesList() {
    const [searchQuery, setSearchQuery] = useState("")
    const [viewingResource, setViewingResource] = useState<Resource | null>(null)

    const resources: Resource[] = [
        {
            id: "1",
            title: "Hotel Safety Guidelines 2025",
            type: "PDF",
            category: "Guidelines",
            size: "2.4 MB",
            date: "Jan 15, 2025",
            downloads: 124
        },
        {
            id: "2",
            title: "Tourism Statistics Report Q4 2024",
            type: "PDF",
            category: "Reports",
            size: "5.1 MB",
            date: "Jan 10, 2025",
            downloads: 89
        },
        {
            id: "3",
            title: "Membership Renewal Form",
            type: "DOC",
            category: "Forms",
            size: "156 KB",
            date: "Dec 20, 2024",
            downloads: 450
        },
        {
            id: "4",
            title: "Sustainable Hospitality Toolkit",
            type: "PDF",
            category: "Training",
            size: "12.8 MB",
            date: "Dec 05, 2024",
            downloads: 67
        },
        {
            id: "5",
            title: "Employee Code of Conduct Template",
            type: "DOC",
            category: "HR",
            size: "245 KB",
            date: "Nov 15, 2024",
            downloads: 210
        }
    ]

    const filteredResources = resources.filter(resource =>
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.category.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const getIcon = (category: string) => {
        switch (category) {
            case "Reports": return FileBarChart
            case "Training": return BookOpen
            case "Guidelines": return Shield
            default: return FileText
        }
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Resources</h2>
                    <p className="text-muted-foreground">
                        Access important documents, reports, and training materials.
                    </p>
                </div>
                <div className="relative w-full md:w-72">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search resources..."
                        className="pl-9"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            <Tabs defaultValue="all">
                <TabsList>
                    <TabsTrigger value="all">All Resources</TabsTrigger>
                    <TabsTrigger value="reports">Reports</TabsTrigger>
                    <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
                    <TabsTrigger value="forms">Forms</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredResources.map((resource) => {
                            const Icon = getIcon(resource.category)
                            return (
                                <Card key={resource.id} className="hover:shadow-md transition-shadow">
                                    <CardHeader className="pb-3">
                                        <div className="flex items-start justify-between">
                                            <div className="p-2 bg-primary/10 rounded-lg">
                                                <Icon className="h-6 w-6 text-primary" />
                                            </div>
                                            <Badge variant="outline">{resource.type}</Badge>
                                        </div>
                                        <CardTitle className="text-lg mt-3 line-clamp-2">{resource.title}</CardTitle>
                                        <CardDescription>{resource.category} • {resource.date}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                                            <span>{resource.size}</span>
                                            <span>{resource.downloads} downloads</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button className="flex-1" variant="outline" onClick={() => setViewingResource(resource)}>
                                                <Eye className="mr-2 h-4 w-4" />
                                                View
                                            </Button>
                                            <Button className="flex-1" variant="outline">
                                                <Download className="mr-2 h-4 w-4" />
                                                Download
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>

                    {filteredResources.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground">No resources found matching your search.</p>
                        </div>
                    )}
                </TabsContent>

                {/* Other tabs would filter similarly */}
                <TabsContent value="reports" className="mt-6">
                    <div className="text-center py-12 border-2 border-dashed rounded-lg">
                        <p className="text-muted-foreground">Filter implementation pending...</p>
                    </div>
                </TabsContent>
            </Tabs>

            {viewingResource && (
                <ViewModal
                    isOpen={!!viewingResource}
                    onClose={() => setViewingResource(null)}
                    title={viewingResource.title}
                    footer={
                        <div className="flex gap-2 w-full justify-end">
                            <Button variant="outline" onClick={() => setViewingResource(null)}>Close</Button>
                            <Button className="bg-primary text-white">
                                <Download className="mr-2 h-4 w-4" />
                                Download
                            </Button>
                        </div>
                    }
                >
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg border border-border">
                            <div className="p-3 bg-white rounded-lg shadow-sm">
                                {(() => {
                                    const Icon = getIcon(viewingResource.category)
                                    return <Icon className="h-8 w-8 text-primary" />
                                })()}
                            </div>
                            <div>
                                <p className="font-semibold text-foreground">{viewingResource.title}</p>
                                <p className="text-sm text-muted-foreground">{viewingResource.type} • {viewingResource.size}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Category</p>
                                <p className="font-medium">{viewingResource.category}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Uploaded Date</p>
                                <p className="font-medium">{viewingResource.date}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Total Downloads</p>
                                <p className="font-medium">{viewingResource.downloads}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">File Type</p>
                                <p className="font-medium">{viewingResource.type}</p>
                            </div>
                        </div>

                        <div className="bg-muted/20 p-4 rounded-lg text-center border border-dashed border-border">
                            <p className="text-sm text-muted-foreground mb-2">Preview not available for this file type.</p>
                            <Button variant="link" className="text-primary">Download to view content</Button>
                        </div>
                    </div>
                </ViewModal>
            )}
        </div>
    )
}
