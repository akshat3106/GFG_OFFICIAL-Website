"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { Timer, ArrowRight, Zap } from "lucide-react"
import Link from "next/link"

export function NextChallengeCard() {
    return (
        <GlassCard
            className="h-full flex flex-col justify-between relative overflow-hidden group border-primary/20"
            gradient="from-primary/20 to-purple-600/20"
        >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Zap className="w-32 h-32 text-primary" />
            </div>

            <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold mb-4 animate-pulse">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Daily Challenge Active
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">Maximum Subarray Sum</h3>
                <p className="text-zinc-400 text-sm mb-6 line-clamp-2">
                    Given an integer array nums, find the subarray with the largest sum, and return its sum.
                </p>

                <div className="flex items-center gap-4 text-sm text-zinc-300 mb-6">
                    <div className="flex items-center gap-1.5">
                        <Timer className="w-4 h-4 text-primary" />
                        <span>14h 32m left</span>
                    </div>
                    <div className="px-2 py-0.5 rounded bg-orange-500/20 text-orange-400 text-xs border border-orange-500/30">
                        Medium
                    </div>
                    <div className="px-2 py-0.5 rounded bg-primary/20 text-primary text-xs border border-primary/30">
                        +50 XP
                    </div>
                </div>
            </div>

            <div className="relative z-10 mt-auto">
                <Link href="/potd">
                    <Button className="w-full bg-primary text-black hover:bg-primary/90 font-bold group shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all">
                        Solve Challenge
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </Link>
            </div>
        </GlassCard>
    )
}
