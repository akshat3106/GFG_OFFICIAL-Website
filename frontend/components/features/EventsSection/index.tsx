"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Event } from "./types"
import { UpcomingEventCard } from "./UpcomingEventCard"
import { cn } from "@/lib/utils"

interface ExtendedEvent extends Event {
    theme: "blue" | "purple" | "green" | "orange" | "pink"
}

const EVENTS: ExtendedEvent[] = [
    {
        id: "1",
        title: "Intro to DSA",
        description: "Master the fundamentals of Data Structures and Algorithms with our comprehensive workshop series.",
        date: "2026-01-29",
        time: "10:00 AM",
        location: "Auditorium 1",
        category: "Workshop",
        type: "upcoming",
        tags: ["C++", "Java", "Algorithms"],
        registration: {
            status: "Open",
            capacity: 100,
            registered: 45,
            deadline: "2026-01-28",
            link: "#"
        },
        theme: "blue"
    },
    {
        id: "2",
        title: "Resume Workshop",
        description: "Learn industry secrets to craft a resume that gets you hired. Live reviews included.",
        date: "2026-01-24",
        time: "2:00 PM",
        location: "Seminar Hall",
        category: "Career",
        type: "upcoming",
        tags: ["Interview", "Soft Skills"],
        registration: {
            status: "Open",
            capacity: 50,
            registered: 12,
            deadline: "2026-01-23",
            link: "#"
        },
        theme: "purple"
    },
    {
        id: "3",
        title: "System Design 101",
        description: "Scalability, Load Balancing, and Database Sharding explained for beginners.",
        date: "2026-02-01",
        time: "11:00 AM",
        location: "Lab 3",
        category: "Tech Talk",
        type: "upcoming",
        tags: ["Architecture", "Backend"],
        registration: {
            status: "Waitlist",
            capacity: 60,
            registered: 60,
            deadline: "2026-01-31",
            link: "#"
        },
        theme: "green"
    }
]

export function EventsSection() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1.2])

    return (
        <section id="events" className="py-32 bg-[#050505] relative overflow-hidden" ref={containerRef}>
            {/* Advanced Background System */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-10 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 blur-[120px] rounded-full opacity-20" />
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full mix-blend-screen animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full mix-blend-screen animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="container px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-40">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl mb-8">
                            <div className="w-2 h-2 rounded-full bg-secondary animate-ping" />
                            <span className="text-[10px] font-mono text-white/60 font-bold tracking-[0.4em] uppercase">
                                NEXT_CHAPTER.EXE
                            </span>
                        </div>

                        <h2 className="text-6xl md:text-9xl font-black font-space-grotesk mb-8 tracking-tighter">
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">Future.</span>
                            <span className="text-secondary italic">Events</span>
                        </h2>

                        <p className="text-white/40 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
                            Syncing with the latest innovations and community gatherings. <br className="hidden md:block" />
                            Explore our upcoming roadmap of workshops, hackathons, and seminars.
                        </p>
                    </motion.div>
                </div>

                {/* Timeline Visual System */}
                <div className="relative max-w-7xl mx-auto">
                    {/* SVG Circuitry Path */}
                    <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-full pointer-events-none overflow-visible hidden md:block" viewBox="0 0 16 100" preserveAspectRatio="none">
                        <path
                            d="M 8 0 V 1000"
                            fill="none"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="2"
                        />
                        <motion.path
                            d="M 8 0 V 1000"
                            fill="none"
                            stroke="url(#timeline-gradient-v2)"
                            strokeWidth="4"
                            style={{ pathLength }}
                            transition={{ type: "spring", stiffness: 30 }}
                        />
                        <defs>
                            <linearGradient id="timeline-gradient-v2" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#3b82f6" />
                                <stop offset="50%" stopColor="#a855f7" />
                                <stop offset="100%" stopColor="#22c55e" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Events Staggered Layout */}
                    <div className="space-y-48">
                        {EVENTS.map((event, index) => (
                            <div key={event.id} className={cn(
                                "relative flex flex-col md:flex-row items-center gap-16 md:gap-24 group",
                                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                            )}>
                                {/* Visual Connector Node (Desktop) */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 hidden md:flex">
                                    <div className={cn("w-14 h-14 rounded-2xl rotate-45 border-2 bg-[#050505] shadow-[0_0_40px_-5px_rgba(0,0,0,0.8)] flex items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-90",
                                        event.theme === 'blue' ? 'border-blue-500 shadow-blue-500/40' :
                                            event.theme === 'purple' ? 'border-purple-500 shadow-purple-500/40' :
                                                'border-green-500 shadow-green-500/40'
                                    )}>
                                        <div className={cn("w-3 h-3 rounded-sm rotate-45 animate-pulse",
                                            event.theme === 'blue' ? 'bg-blue-400' :
                                                event.theme === 'purple' ? 'bg-purple-400' :
                                                    'bg-green-400'
                                        )} />
                                    </div>
                                </div>

                                {/* Event Content Side */}
                                <div className="w-full md:w-1/2 flex flex-col gap-6 relative z-20">
                                    <div className={cn(
                                        "flex flex-col mb-2",
                                        index % 2 === 0 ? "md:items-end text-left md:text-right" : "md:items-start text-left"
                                    )}>
                                        <motion.span
                                            initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            className="text-5xl md:text-7xl font-black font-space-grotesk text-white/5 uppercase leading-none tracking-tighter"
                                        >
                                            {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                        </motion.span>
                                    </div>
                                    <UpcomingEventCard
                                        event={event}
                                        index={index}
                                        align={index % 2 === 0 ? "right" : "left"}
                                        colorTheme={event.theme}
                                    />
                                </div>

                                {/* Decorative Decoration Side (Filling the Blank Space) */}
                                <div className={cn(
                                    "hidden md:flex w-1/2 flex-col gap-8 opacity-40 group-hover:opacity-100 transition-opacity duration-700",
                                    index % 2 === 0 ? "items-start pl-12" : "items-end pr-12"
                                )}>
                                    <div className="flex gap-4">
                                        {event.tags.map((tag, i) => (
                                            <span key={i} className="text-[10px] font-mono text-secondary border border-secondary/20 px-3 py-1 rounded-full bg-secondary/5">
                                                {tag.toUpperCase()}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="w-48 h-px bg-gradient-to-r from-secondary/50 to-transparent" />
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            <span className="text-[10px] font-mono text-white/40 tracking-widest">SYSTEM_STATUS: ACTIVE</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                            <span className="text-[10px] font-mono text-white/40 tracking-widest">NETWORK_SYNC: COMPLETED</span>
                                        </div>
                                    </div>
                                    {/* Geometric Accent */}
                                    <div className={cn(
                                        "w-24 h-24 border-2 border-white/5 rounded-3xl rotate-12 transition-transform group-hover:rotate-45 duration-1000",
                                        event.theme === 'blue' ? 'border-blue-500/10' : event.theme === 'purple' ? 'border-purple-500/10' : 'border-green-500/10'
                                    )} />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Finish Indicator */}
                    <div className="mt-48 flex flex-col items-center justify-center text-center">
                        <div className="w-px h-32 bg-gradient-to-b from-white/10 to-transparent" />
                        <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em] mt-8 mb-32">
                            END_TRANSMISSION
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
