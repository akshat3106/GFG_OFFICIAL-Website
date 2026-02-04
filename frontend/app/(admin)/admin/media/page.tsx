"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Image as ImageIcon, Video, Upload, Database } from "lucide-react"
import { toast } from "sonner"
import { MediaGallery } from "@/components/admin/media/MediaGallery"
import { MediaList } from "@/components/admin/media/MediaList"

// Mock Data Types
type GalleryItem = { id: number; name: string }
type VideoItem = { id: number; title: string; date: string; duration: string }

export default function MediaManagerPage() {
    const [isUploading, setIsUploading] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    // State for data
    const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([])
    const [videoItems, setVideoItems] = useState<VideoItem[]>([])

    useEffect(() => {
        // Simulate fetching initial data
        const loadData = async () => {
            // Artificial delay to show skeleton
            setTimeout(() => {
                setGalleryItems([1, 2, 3, 4, 5, 6].map(i => ({ id: i, name: `IMG_${1000 + i}.PNG` })))
                setVideoItems([
                    { id: 1, title: "Intro to Algorithms", date: "Dec 12, 2024", duration: "1:24:00" },
                    { id: 2, title: "React State Management", date: "Dec 15, 2024", duration: "45:30" },
                    { id: 3, title: "System Design for Beginners", date: "Dec 20, 2024", duration: "2:05:12" },
                ])
                setIsLoading(false)
            }, 1000)
        }
        loadData()
    }, [])

    const handleUploadClick = () => {
        setIsUploading(true)
        setTimeout(() => {
            setIsUploading(false)
            toast.success("Media uploaded successfully!")
        }, 1500)
    }

    const handleDeleteGallery = (id: number) => {
        setGalleryItems(prev => prev.filter(item => item.id !== id))
        toast.success("Image deleted from archive.")
    }

    const handleDeleteVideo = (id: number) => {
        setVideoItems(prev => prev.filter(item => item.id !== id))
        toast.success("Log entry removed.")
    }

    return (
        <div className="space-y-6 animate-in fade-in duration-700">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-800 pb-6">
                <div className="space-y-1">
                    <h2 className="text-3xl font-black uppercase tracking-widest text-white flex items-center gap-3">
                        <Database className="h-8 w-8 text-primary" />
                        MEDIA_ARCHIVE
                    </h2>
                    <p className="text-zinc-500 font-mono text-sm">Manage classified gallery images and protocol recordings.</p>
                </div>
                <Button
                    onClick={handleUploadClick}
                    disabled={isUploading}
                    className="bg-primary hover:bg-primary/80 text-black font-bold uppercase tracking-wider text-xs border border-primary/50 shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                >
                    <Upload className="mr-2 h-4 w-4" /> {isUploading ? "UPLOADING..." : "UPLOAD_CONTENT"}
                </Button>
            </div>

            <Tabs defaultValue="gallery" className="w-full">
                <TabsList className="bg-zinc-900/50 border border-zinc-800 p-1 rounded-xl mb-8">
                    <TabsTrigger
                        value="gallery"
                        className="gap-2 data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:border-primary/50 border border-transparent font-mono text-xs uppercase tracking-wider"
                    >
                        <ImageIcon className="h-4 w-4" /> GALLERY_IMG
                    </TabsTrigger>
                    <TabsTrigger
                        value="video"
                        className="gap-2 data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:border-primary/50 border border-transparent font-mono text-xs uppercase tracking-wider"
                    >
                        <Video className="h-4 w-4" /> SESSION_LOGS
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="gallery" className="space-y-6 mt-0">
                    <MediaGallery
                        items={galleryItems}
                        isLoading={isLoading}
                        onDelete={handleDeleteGallery}
                    />
                </TabsContent>

                <TabsContent value="video" className="space-y-4 mt-0">
                    <MediaList
                        items={videoItems}
                        isLoading={isLoading}
                        onDelete={handleDeleteVideo}
                    />
                </TabsContent>
            </Tabs>
        </div>
    )
}
