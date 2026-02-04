"use client"

import { useState, useEffect } from "react"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { createClient } from "@/utils/supabase/client"
import {
    Search,
    FileText,
    Download,
    ExternalLink,
    BookOpen,
    Code,
    Terminal,
    Database,
    Filter
} from "lucide-react"

interface Resource {
    id: string
    title: string
    description: string
    file_url: string
    type: string
    created_at: string
}

export default function ResourcesPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedType, setSelectedType] = useState("all")
    const [resources, setResources] = useState<Resource[]>([])
    const supabase = createClient()

    useEffect(() => {
        const fetchResources = async () => {
            const { data } = await supabase.from('resources').select('*').order('created_at', { ascending: false })
            if (data) setResources(data as Resource[])
        }
        fetchResources()
    }, [])

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-800 pb-6">
                <div className="space-y-1">
                    <h1 className="text-3xl font-black uppercase tracking-widest text-white flex items-center gap-3">
                        <Database className="h-8 w-8 text-primary" />
                        Knowledge Base
                    </h1>
                    <p className="text-zinc-500 font-mono text-sm">Access classified documentation and learning protocols.</p>
                </div>

                <div className="flex items-center gap-2 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 h-4 w-4" />
                        <Input
                            placeholder="SEARCH_DB..."
                            className="pl-9 bg-black/50 border-zinc-800 text-zinc-300 font-mono text-xs focus:border-primary/50"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <Button variant="outline" className="border-zinc-800 bg-black/50 text-zinc-400 hover:text-white hover:border-zinc-600">
                        <Filter className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* Content Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                    { title: "Standard Operating Procedures", type: "PDF", size: "2.4 MB", category: "PROTOCOLS", icon: FileText },
                    { title: "Advanced Data Structures", type: "DOC", size: "125 KB", category: "LEARNING", icon: BookOpen },
                    { title: "System Architecture Diagrams", type: "IMG", size: "15 MB", category: "TECHNICAL", icon: Code },
                    { title: "API Documentation v2.0", type: "LINK", size: "WEB", category: "DEV_TOOLS", icon: Terminal },
                    { title: "Security Compliance Guide", type: "PDF", size: "4.1 MB", category: "PROTOCOLS", icon: FileText },
                    { title: "Legacy Codebase Archive", type: "ZIP", size: "1.2 GB", category: "ARCHIVE", icon: Database },
                ].map((item, i) => (
                    <GlassCard key={i} className="group p-5 flex flex-col justify-between hover:border-primary/50 transition-all duration-300">
                        <div className="space-y-4">
                            <div className="flex justify-between items-start">
                                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded group-hover:border-primary/30 group-hover:bg-primary/5 transition-colors">
                                    <item.icon className="h-6 w-6 text-zinc-500 group-hover:text-primary transition-colors" />
                                </div>
                                <Badge variant="outline" className="border-zinc-800 text-[10px] text-zinc-600 font-mono tracking-widest">{item.category}</Badge>
                            </div>

                            <div>
                                <h3 className="font-bold text-white group-hover:text-primary transition-colors line-clamp-1">{item.title}</h3>
                                <div className="flex items-center gap-3 mt-2 text-[10px] font-mono text-zinc-500">
                                    <span>FMT: {item.type}</span>
                                    <span>SIZE: {item.size}</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center justify-between">
                            <span className="text-[10px] text-zinc-600 font-mono">LAST_UPDATED: TODAY</span>
                            <Button size="sm" variant="ghost" className="h-8 text-zinc-400 hover:text-primary hover:bg-primary/10">
                                {item.type === 'LINK' ? <ExternalLink className="h-4 w-4" /> : <Download className="h-4 w-4" />}
                            </Button>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </div>
    )
}
