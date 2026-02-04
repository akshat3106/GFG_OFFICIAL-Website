"use client"

import { useState, useEffect } from "react"
import { CrystalCard } from "@/components/ui/crystal-card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { Activity } from "lucide-react"

// Simple seeded random generator for consistency
const seededRandom = (seed: number) => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

const generateHeatmapData = (animate: boolean) => {
    const data = []
    const today = new Date()
    for (let i = 0; i < 365; i++) {
        const date = new Date(today)
        date.setDate(date.getDate() - (364 - i))
        // More activity in recent months, occasional bursts
        const intensity = Math.random() > 0.7 ? Math.floor(Math.random() * 5) : 0
        data.push({
            date: date.toISOString().split('T')[0],
            count: animate ? intensity : 0
        })
    }
    return data
}

export function ActivityHeatmap() {
    const [activityData, setActivityData] = useState(() => generateHeatmapData(false))

    useEffect(() => {
        const timer = setTimeout(() => {
            setActivityData(generateHeatmapData(true))
        }, 100)
        return () => clearTimeout(timer)
    }, [])

    const getColor = (count: number) => {
        if (count === 0) return "bg-white/5"
        if (count === 1) return "bg-primary/20"
        if (count === 2) return "bg-primary/40 shadow-[0_0_5px_rgba(34,197,94,0.2)]"
        if (count === 3) return "bg-primary/70 shadow-[0_0_8px_rgba(34,197,94,0.4)]"
        return "bg-primary shadow-[0_0_12px_rgba(34,197,94,0.8)]"
    }

    return (
        <CrystalCard className="p-0">
            <div className="p-6 border-b border-white/5 flex gap-3 items-center">
                <div className="p-2 bg-primary/10 rounded-lg">
                    <Activity className="w-5 h-5 text-primary" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white">Neural Activity</h3>
                    <p className="text-xs text-zinc-500">Code frequency analysis.</p>
                </div>
            </div>

            <div className="p-6 overflow-x-auto custom-scrollbar">
                <div className="min-w-[700px] flex gap-1">
                    {/* Render columns (weeks) - approx 52 */}
                    {Array.from({ length: 52 }).map((_, weekIndex) => (
                        <div key={weekIndex} className="flex flex-col gap-1">
                            {Array.from({ length: 7 }).map((_, dayIndex) => {
                                const index = weekIndex * 7 + dayIndex
                                const dayData = activityData[index] || { count: 0, date: '' }
                                return (
                                    <TooltipProvider key={dayIndex}>
                                        <Tooltip delayDuration={0}>
                                            <TooltipTrigger>
                                                <div
                                                    className={cn(
                                                        "w-3 h-3 rounded-[1px] transition-all duration-500 hover:scale-125 hover:z-10 border border-transparent",
                                                        getColor(dayData.count)
                                                    )}
                                                />
                                            </TooltipTrigger>
                                            <TooltipContent className="bg-black/90 border border-primary/20 text-xs font-mono text-primary">
                                                <p>{dayData.count} contributions on {dayData.date}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                )
                            })}
                        </div>
                    ))}
                </div>

                <div className="flex items-center gap-2 text-[10px] text-zinc-500 mt-4 justify-end font-mono">
                    <span>IDLE</span>
                    <div className="flex gap-1">
                        <div className="w-3 h-3 rounded-[1px] bg-white/5" />
                        <div className="w-3 h-3 rounded-[1px] bg-primary/20" />
                        <div className="w-3 h-3 rounded-[1px] bg-primary/40" />
                        <div className="w-3 h-3 rounded-[1px] bg-primary" />
                    </div>
                    <span>ACTIVE</span>
                </div>
            </div>
        </CrystalCard>
    )
}
