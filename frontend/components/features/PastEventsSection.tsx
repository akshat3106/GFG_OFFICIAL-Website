"use client"

import { SectionShell } from "@/components/layout/SectionShell"
import { Badge } from "@/components/ui/badge"
import { Play, FileCode, Mic, ArrowUpRight, Database, Download, Lock, HardDrive } from "lucide-react"
import { motion } from "framer-motion"

const pastEvents = [
    {
        title: "Orientation 2024",
        type: "Video Log",
        size: "2.4 GB",
        icon: Play,
        meta: "RAW_FOOTAGE",
        color: "text-blue-500",
        date: "2024-08-15"
    },
    {
        title: "Legacy Codebase",
        type: "Git Archive",
        size: "450 MB",
        icon: FileCode,
        meta: "DEPRECATED",
        color: "text-yellow-500",
        date: "2024-06-20"
    },
    {
        title: "Founder Talks",
        type: "Audio Stream",
        size: "120 MB",
        icon: Mic,
        meta: "ENCRYPTED",
        color: "text-purple-500",
        date: "2024-04-10"
    }
]

export function PastEventsSection() {
    return (
        <SectionShell id="archive" badge="Data Vault" title="Archived_Logs" subtitle="Retrieved data from previous operational cycles.">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {pastEvents.map((event, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative"
                    >
                        {/* Card Content */}
                        <div className="bg-card border border-border p-6 h-full flex flex-col justify-between relative overflow-hidden transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-tech">

                            {/* Header */}
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-sm bg-secondary/20 ${event.color}`}>
                                        <event.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{event.type}</div>
                                        <div className="text-[10px] text-muted-foreground">{event.date}</div>
                                    </div>
                                </div>
                                <Database className="w-4 h-4 text-muted-foreground/30" />
                            </div>

                            {/* Main Body */}
                            <div className="mb-6">
                                <h3 className="text-lg font-bold font-space-grotesk text-foreground mb-2 group-hover:text-primary transition-colors">
                                    {event.title}
                                </h3>
                                <div className="w-full bg-secondary/30 h-1.5 rounded-full overflow-hidden">
                                    <div className="h-full bg-muted-foreground/50 w-2/3" />
                                </div>
                                <div className="flex justify-between mt-1 text-[10px] font-mono text-muted-foreground">
                                    <span>{event.size}</span>
                                    <span>Size</span>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="mt-auto flex justify-between items-center pt-4 border-t border-border/50">
                                <Badge variant="outline" className="text-[10px] border-border text-muted-foreground font-mono uppercase tracking-wider rounded-sm bg-secondary/10">
                                    {event.meta}
                                </Badge>
                                <button className="flex items-center gap-2 text-xs font-bold text-foreground hover:text-primary transition-colors uppercase font-mono">
                                    Access <ArrowUpRight className="w-3 h-3" />
                                </button>
                            </div>

                            {/* Hover Scan */}
                            <div className="absolute top-0 right-0 w-[1px] h-full bg-primary/20 opacity-0 group-hover:opacity-100 group-hover:animate-scanline transition-opacity" />
                        </div>

                        {/* Corner markers */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/30 group-hover:border-primary transition-colors" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/30 group-hover:border-primary transition-colors" />

                    </motion.div>
                ))}
            </div>

        </SectionShell>
    )
}
