"use client"

import { Calendar, Users, ArrowRight, Clock, MapPin, Hash, Sparkles } from "lucide-react"
import { Event } from "./types"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface UpcomingEventCardProps {
    event: Event
    index: number
    align?: "left" | "right"
    colorTheme?: "blue" | "purple" | "green" | "orange" | "pink"
}

const THEMES = {
    blue: {
        bg: "from-blue-500/10 to-transparent",
        border: "border-blue-500/20",
        text: "text-blue-400",
        badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
        hoverBorder: "hover:border-blue-500/50",
        graphicInfo: "bg-blue-500/20",
        glow: "group-hover:opacity-100"
    },
    purple: {
        bg: "from-purple-500/10 to-transparent",
        border: "border-purple-500/20",
        text: "text-purple-400",
        badge: "bg-purple-500/10 text-purple-400 border-purple-500/20",
        hoverBorder: "hover:border-purple-500/50",
        graphicInfo: "bg-purple-500/20",
        glow: "group-hover:opacity-100"
    },
    green: {
        bg: "from-green-500/10 to-transparent",
        border: "border-green-500/20",
        text: "text-green-400",
        badge: "bg-green-500/10 text-green-400 border-green-500/20",
        hoverBorder: "hover:border-green-500/50",
        graphicInfo: "bg-green-500/20",
        glow: "group-hover:opacity-100"
    },
    orange: {
        bg: "from-orange-500/10 to-transparent",
        border: "border-orange-500/20",
        text: "text-orange-400",
        badge: "bg-orange-500/10 text-orange-400 border-orange-500/20",
        hoverBorder: "hover:border-orange-500/50",
        graphicInfo: "bg-orange-500/20",
        glow: "group-hover:opacity-100"
    },
    pink: {
        bg: "from-pink-500/10 to-transparent",
        border: "border-pink-500/20",
        text: "text-pink-400",
        badge: "bg-pink-500/10 text-pink-400 border-pink-500/20",
        hoverBorder: "hover:border-pink-500/50",
        graphicInfo: "bg-pink-500/20",
        glow: "group-hover:opacity-100"
    }
}

export function UpcomingEventCard({ event, index, align = "left", colorTheme = "blue" }: UpcomingEventCardProps) {
    const theme = THEMES[colorTheme]

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
            className={cn(
                "group relative bg-[#0a0a0a]/90 backdrop-blur-xl border-t border-l rounded-2xl overflow-hidden transition-all duration-700 z-10",
                theme.border,
                "hover:border-white/30 hover:shadow-[0_0_50px_-12px_rgba(0,0,0,0.8)]",
                align === "right" ? "md:text-right" : "md:text-left"
            )}
        >
            {/* Animated Glow Shimmer Border */}
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className={`absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0%,transparent_25%,${colorTheme === 'blue' ? '#3b82f6' : colorTheme === 'purple' ? '#a855f7' : '#22c55e'}_50%,transparent_75%,transparent_100%)] animate-[spin_4s_linear_infinite]`} />
            </div>

            <div className="absolute inset-[1px] bg-[#0a0a0a] rounded-[15px] z-[1]" />

            {/* Background Graphic Effects */}
            <div className="absolute inset-0 z-[2] opacity-30 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
                <div className={cn("absolute -top-20 -right-20 w-64 h-64 blur-[120px] rounded-full transition-all duration-700 group-hover:scale-125 opacity-30", theme.graphicInfo)} />
                <div className={cn("absolute -bottom-20 -left-20 w-48 h-48 blur-[100px] rounded-full opacity-20", theme.graphicInfo)} />
            </div>

            <div className={cn(
                "p-8 relative z-[3] flex flex-col h-full",
                align === "right" ? "md:items-end" : "md:items-start"
            )}>
                {/* Header Section */}
                <div className="flex items-center gap-3 mb-6">
                    <div className={cn("flex items-center gap-2 px-3 py-1 rounded-full border bg-white/5 backdrop-blur-sm transition-all duration-500 group-hover:border-white/20", theme.badge)}>
                        <Sparkles className="w-3.5 h-3.5 text-secondary animate-pulse" />
                        <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-white/80">
                            {event.category}
                        </span>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-grow w-full">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-space-grotesk tracking-tight leading-tight group-hover:text-secondary transition-colors">
                        {event.title}
                    </h3>
                    <p className={cn(
                        "text-white/40 text-sm mb-10 leading-relaxed font-light line-clamp-2 max-w-[85%] transition-colors group-hover:text-white/70",
                        align === "right" ? "md:ml-auto" : ""
                    )}>
                        {event.description}
                    </p>

                    {/* Meta Info Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-10">
                        <div className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl flex flex-col gap-1 transition-all group-hover:bg-white/[0.05] group-hover:border-white/10">
                            <Calendar className={cn("w-5 h-5 mb-1", theme.text)} />
                            <span className="text-[10px] text-white/30 uppercase tracking-widest font-mono">Timestamp</span>
                            <span className="text-sm font-bold text-white/90">{new Date(event.date).toLocaleDateString()}</span>
                        </div>
                        <div className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl flex flex-col gap-1 transition-all group-hover:bg-white/[0.05] group-hover:border-white/10">
                            <Clock className={cn("w-5 h-5 mb-1", theme.text)} />
                            <span className="text-[10px] text-white/30 uppercase tracking-widest font-mono">Schedule</span>
                            <span className="text-sm font-bold text-white/90">{event.time}</span>
                        </div>
                        <div className="col-span-2 bg-white/[0.02] border border-white/5 p-4 rounded-2xl flex flex-col gap-1 transition-all group-hover:bg-white/[0.05] group-hover:border-white/10">
                            <MapPin className={cn("w-5 h-5 mb-1", theme.text)} />
                            <span className="text-[10px] text-white/30 uppercase tracking-widest font-mono">Location_Point</span>
                            <span className="text-sm font-bold text-white/90 truncate">{event.location}</span>
                        </div>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="flex items-center justify-between w-full pt-8 mt-auto border-t border-white/5">
                    <div className="flex flex-col gap-2">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full bg-[#111] border border-white/10 flex items-center justify-center transition-transform hover:-translate-y-1">
                                    <div className={cn("w-full h-full opacity-30 bg-gradient-to-br", theme.bg)} />
                                </div>
                            ))}
                            <div className={cn("w-8 h-8 rounded-full border border-white/10 bg-[#111] flex items-center justify-center text-[10px] font-bold text-white z-10")}>
                                +{event.registration?.registered}
                            </div>
                        </div>
                        <span className="text-[9px] text-white/30 uppercase tracking-[0.2em] font-mono">System.Registrations</span>
                    </div>

                    <button className={cn(
                        "relative group/btn flex items-center gap-3 px-8 py-4 rounded-full text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-500 overflow-hidden",
                        "bg-white/5 border border-white/10 hover:border-transparent hover:text-black"
                    )}>
                        <div className={cn("absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 bg-gradient-to-r",
                            colorTheme === 'blue' ? 'from-blue-400 to-cyan-400' :
                                colorTheme === 'purple' ? 'from-purple-400 to-pink-400' :
                                    'from-green-400 to-emerald-400'
                        )} />
                        <span className="relative z-10 transition-colors">Access_Link</span>
                        <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                </div>
            </div>
        </motion.div>
    )
}
