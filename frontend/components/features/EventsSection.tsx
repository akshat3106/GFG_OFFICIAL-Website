"use client"

import { useState } from "react"
import { SectionShell } from "@/components/layout/SectionShell"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, ArrowRight, Ticket, History, Video, Image as ImageIcon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const upcomingEvents = [
    {
        title: "Quantum Computation Seminar",
        date: "2025-02-15",
        time: "14:00",
        location: "Lecture Hall A",
        category: "Research",
        status: "Upcoming",
        description: "Exploring the fundamentals of qubits and superposition."
    },
    {
        title: "Hackathon: Zero Point",
        date: "2025-03-01",
        time: "09:00",
        location: "Main Auditorium",
        category: "Competition",
        status: "Registration Open",
        description: "24-hour coding sprint. Build the impossible."
    },
    {
        title: "AI Ethics Symposium",
        date: "2025-03-10",
        time: "16:30",
        location: "Virtual Stream",
        category: "Discussion",
        status: "TBA",
        description: "Debating the moral implications of AGI."
    }
]

const pastEvents = [
    {
        title: "Orientation 2024",
        date: "2024-08-15",
        description: "Welcoming the new cohort of developers.",
        stats: { photos: 45, videos: 2 }
    },
    {
        title: "Chai Links",
        date: "2024-09-10",
        description: "Subsection 0 & 1 networking mixer.",
        stats: { photos: 120, videos: 5 }
    },
    {
        title: "Founders Unplugged",
        date: "2024-11-05",
        description: "Exclusive session with Mr. Zahid Akhtar.",
        stats: { photos: 30, videos: 1 }
    }
]

export function EventsSection() {
    const [view, setView] = useState<"UPCOMING" | "PAST">("UPCOMING")

    return (
        <SectionShell id="events" badge="Temporal Log" title="Events_Registry" subtitle="Synchronize with our milestones.">

            {/* Toggle Switch */}
            <div className="flex justify-center mb-12">
                <div className="bg-secondary/10 border border-border p-1 rounded-full flex gap-1">
                    <button
                        onClick={() => setView("UPCOMING")}
                        className={cn(
                            "px-6 py-2 rounded-full text-xs font-mono font-bold uppercase transition-all",
                            view === "UPCOMING" ? "bg-primary text-primary-foreground shadow-lg" : "text-muted-foreground hover:text-foreground"
                        )}
                    >
                        Upcoming
                    </button>
                    <button
                        onClick={() => setView("PAST")}
                        className={cn(
                            "px-6 py-2 rounded-full text-xs font-mono font-bold uppercase transition-all",
                            view === "PAST" ? "bg-primary text-primary-foreground shadow-lg" : "text-muted-foreground hover:text-foreground"
                        )}
                    >
                        Past Archives
                    </button>
                </div>
            </div>

            <div className="relative max-w-4xl mx-auto px-4">

                <AnimatePresence mode="wait">
                    {view === "UPCOMING" ? (
                        <motion.div
                            key="upcoming"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="space-y-8"
                        >
                            {/* Central Timeline Line for Upcoming */}
                            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px pointer-events-none" />

                            {upcomingEvents.map((event, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`relative flex flex-col md:flex-row gap-8 items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    <div className="flex-1 w-full pl-20 md:pl-0 group">
                                        <div className={`relative p-1 bg-gradient-to-br from-border to-transparent hover:from-primary/50 transition-colors duration-500`}>
                                            <div className="bg-card p-6 relative overflow-hidden group-hover:bg-secondary/5 transition-colors">
                                                <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                                                    <Ticket className="w-16 h-16" />
                                                </div>
                                                <div className="flex items-center gap-3 mb-4">
                                                    <Badge variant="outline" className="rounded-none border-primary/30 text-primary bg-primary/5 font-mono text-xs">
                                                        {event.category.toUpperCase()}
                                                    </Badge>
                                                    <span className="text-xs font-mono text-muted-foreground">{event.status}</span>
                                                </div>
                                                <h3 className="text-xl font-bold font-space-grotesk mb-2 group-hover:text-primary transition-colors">
                                                    {event.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                                                    {event.description}
                                                </p>
                                                <div className="grid grid-cols-2 gap-y-2 text-xs font-mono text-muted-foreground border-t border-border pt-4">
                                                    <span className="flex items-center gap-2"><Calendar className="w-3 h-3 text-primary" /> {event.date}</span>
                                                    <span className="flex items-center gap-2"><Clock className="w-3 h-3 text-primary" /> {event.time}</span>
                                                    <span className="flex items-center gap-2 col-span-2"><MapPin className="w-3 h-3 text-primary" /> {event.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-background border border-primary z-10 flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                                    </div>
                                    <div className={`hidden md:flex flex-1 ${i % 2 === 0 ? 'justify-start' : 'justify-end'} text-sm font-mono text-muted-foreground opacity-50`}>
                                        <span className="border-b border-border pb-1">T-MINUS {(30 - i * 5)} DAYS</span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="past"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                            {pastEvents.map((event, i) => (
                                <div key={i} className="group cursor-pointer">
                                    <div className="bg-card border border-border p-6 hover:border-primary/50 transition-all hover:shadow-tech">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-lg border border-border group-hover:bg-primary/10 transition-colors">
                                                <History className="w-6 h-6 text-muted-foreground group-hover:text-primary" />
                                            </div>
                                            <span className="text-xs font-mono text-muted-foreground border border-border px-2 py-1 rounded">{event.date}</span>
                                        </div>
                                        <h3 className="text-lg font-bold font-space-grotesk mb-2">{event.title}</h3>
                                        <p className="text-sm text-muted-foreground mb-6">{event.description}</p>
                                        <div className="flex gap-4 border-t border-border pt-4">
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                <ImageIcon className="w-3 h-3" />
                                                {event.stats.photos} Photos
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                <Video className="w-3 h-3" />
                                                {event.stats.videos} Videos
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>

        </SectionShell>
    )
}
