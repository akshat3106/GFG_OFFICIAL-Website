"use client"

import { useState, useEffect } from "react"
import { createClient } from "@/utils/supabase/client"
import { GlassCard } from "@/components/ui/glass-card"
import { Video, Play, Clock, Calendar, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Recording {
    id: string
    title: string
    description: string
    url: string
    thumbnail_url?: string
    duration: string
    created_at: string
}

export default function RecordingsPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [recordings, setRecordings] = useState<Recording[]>([])
    const supabase = createClient()

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchRecordings = async () => {
            try {
                const { data } = await supabase.from('recordings').select('*').order('created_at', { ascending: false })
                if (data && data.length > 0) {
                    setRecordings(data as Recording[])
                } else {
                    // Fallback mock data if DB is empty
                    setRecordings([
                        { id: '1', title: "Intro to DSA Workshop", created_at: "2024-10-12", duration: "1h 45m", description: "Technical", url: "#" },
                        { id: '2', title: "Resume Building Session", created_at: "2024-09-28", duration: "55m", description: "Career", url: "#" },
                        { id: '3', title: "Graph Algorithms Deep Dive", created_at: "2024-11-05", duration: "2h 10m", description: "Advanced", url: "#" },
                    ] as Recording[])
                }
            } catch (error) {
                console.error("Failed to fetch recordings", error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchRecordings()
    }, [])
    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Header */}
            <div className="flex flex-col gap-2 border-b border-zinc-800 pb-6">
                <div>
                    <h1 className="text-3xl font-black uppercase tracking-widest text-white flex items-center gap-3">
                        <Database className="h-8 w-8 text-primary" />
                        SESSION_LOGS
                    </h1>
                    <p className="text-zinc-500 font-mono text-sm">Access decrypted mission briefings and technical workshops.</p>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {isLoading ? (
                    [1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="rounded-xl border border-white/5 overflow-hidden">
                            <div className="aspect-video bg-white/5 animate-pulse" />
                            <div className="p-5 space-y-4">
                                <div className="h-4 w-20 bg-white/5 animate-pulse rounded" />
                                <div className="h-6 w-3/4 bg-white/5 animate-pulse rounded" />
                                <div className="h-9 w-full bg-white/5 animate-pulse rounded" />
                            </div>
                        </div>
                    ))
                ) : (
                    recordings.map((rec, i) => (
                        <GlassCard
                            key={i}
                            className="group overflow-hidden relative border-white/5 hover:border-primary/50 transition-all duration-300"
                        >
                            {/* Thumbnail Placeholder */}
                            <div className="aspect-video bg-black/40 relative flex items-center justify-center group-hover:bg-primary/5 transition-all border-b border-white/5">
                                <Video className="h-12 w-12 text-zinc-800 group-hover:text-primary transition-colors duration-300" />

                                {/* Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm bg-black/50">
                                    <div className="rounded-full bg-primary/20 p-4 border border-primary/50 shadow-[0_0_20px_rgba(34,197,94,0.3)] transform scale-90 group-hover:scale-100 transition-transform">
                                        <Play className="h-8 w-8 text-primary fill-primary" />
                                    </div>
                                </div>

                                {/* Duration Badge */}
                                <div className="absolute bottom-3 right-3">
                                    <Badge className="bg-black/80 border border-white/10 text-primary font-mono text-[10px] flex items-center gap-1 uppercase tracking-wider">
                                        <Clock className="w-3 h-3" />
                                        {rec.duration}
                                    </Badge>
                                </div>
                            </div>

                            <div className="p-5 space-y-4">
                                <div className="space-y-1">
                                    <div className="flex items-center justify-between">
                                        <Badge variant="outline" className="text-[10px] text-zinc-500 border-white/10 uppercase tracking-wider font-mono">
                                            {rec.description || 'Session'}
                                        </Badge>
                                        <span className="text-[10px] text-zinc-500 font-mono flex items-center gap-1 uppercase tracking-wider">
                                            <Calendar className="w-3 h-3" />
                                            {new Date(rec.created_at).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <h3 className="font-bold text-lg text-white leading-tight group-hover:text-primary transition-colors line-clamp-1 mt-2">
                                        {rec.title}
                                    </h3>
                                </div>

                                <Button className="w-full bg-transparent hover:bg-primary text-zinc-400 hover:text-black border border-white/10 hover:border-primary transition-all font-mono text-xs uppercase tracking-widest h-9">
                                    [ Initialize Replay ]
                                </Button>
                            </div>
                        </GlassCard>
                    ))
                )}
            </div>
        </div>
    )
}
