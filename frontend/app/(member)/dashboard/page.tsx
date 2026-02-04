"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, Target, Zap, Activity, ArrowRight } from "lucide-react"
import { ActivityHeatmap } from "@/components/dashboard/ActivityHeatmap"
import { LeaderboardTable } from "@/components/dashboard/LeaderboardTable"
import { LearningPathTree } from "@/components/features/LearningPathTree"
import { CommunityFeed } from "@/components/features/CommunityFeed"

export default function MemberDashboard() {
    return (
        <div className="min-h-screen p-6 font-sans">
            <div className="max-w-[1600px] mx-auto space-y-8">
                {/* Header */}
                <div className="border-b border-white/10 pb-6 flex justify-between items-end">
                    <div>
                        <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">Command Center</h1>
                        <p className="text-zinc-400 font-mono text-sm">Welcome back, Operative.</p>
                    </div>
                    <div className="text-right hidden sm:block">
                        <div className="text-xs text-primary font-bold tracking-widest uppercase mb-1">System Status</div>
                        <div className="flex gap-1 justify-end">
                            <div className="w-8 h-1 bg-primary"></div>
                            <div className="w-2 h-1 bg-primary/50"></div>
                            <div className="w-1 h-1 bg-primary/20"></div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Column */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="glass-card p-5 flex flex-col items-center justify-center gap-2 border border-white/5 hover:border-primary/30 transition-colors group">
                                <Trophy className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                                <span className="text-2xl font-bold text-white">1,240</span>
                                <span className="text-[10px] uppercase tracking-wider text-zinc-500">Global Rank</span>
                            </div>
                            <div className="glass-card p-5 flex flex-col items-center justify-center gap-2 border border-white/5 hover:border-primary/30 transition-colors group">
                                <Target className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                                <span className="text-2xl font-bold text-white">85%</span>
                                <span className="text-[10px] uppercase tracking-wider text-zinc-500">Accuracy</span>
                            </div>
                            <div className="glass-card p-5 flex flex-col items-center justify-center gap-2 border border-white/5 hover:border-primary/30 transition-colors group">
                                <Zap className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                                <span className="text-2xl font-bold text-white">12</span>
                                <span className="text-[10px] uppercase tracking-wider text-zinc-500">Streak</span>
                            </div>
                            <div className="glass-card p-5 flex flex-col items-center justify-center gap-2 border border-white/5 hover:border-primary/30 transition-colors group">
                                <Activity className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                                <span className="text-2xl font-bold text-white">Top 5%</span>
                                <span className="text-[10px] uppercase tracking-wider text-zinc-500">Percentile</span>
                            </div>
                        </div>

                        {/* Current Objective */}
                        <div className="glass-card p-6 space-y-6 border border-white/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-2 opacity-20">
                                <Activity className="w-24 h-24 text-primary" />
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-primary font-bold text-xs tracking-[0.2em] mb-2 uppercase">Current Mission</h3>
                                <p className="text-xl font-bold text-white leading-tight">Advanced Graph Algorithms</p>
                            </div>

                            <div className="space-y-3 relative z-10">
                                <div className="flex justify-between text-xs text-zinc-400 font-mono">
                                    <span>PROGRESS_BAR</span>
                                    <span>65%</span>
                                </div>
                                <div className="h-1.5 w-full bg-zinc-900 overflow-hidden">
                                    <div className="h-full bg-primary w-[65%] shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                                </div>
                            </div>

                            <Button className="w-full bg-primary hover:bg-primary/90 text-black font-bold relative z-10 group overflow-hidden">
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <span className="relative flex items-center justify-center">
                                    Resume Protocol <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Button>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-8 space-y-8">
                        {/* Skill Tree */}
                        <div className="space-y-4">
                            <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Skill Matrix</h2>
                            <div className="glass-card p-6 border border-white/5 bg-black/40">
                                <LearningPathTree />
                            </div>
                        </div>

                        {/* Activity */}
                        <div className="space-y-4">
                            <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Neural Activity</h2>
                            <div className="glass-card p-6 border border-white/5 bg-black/40">
                                <ActivityHeatmap />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Leaderboard */}
                            <div className="space-y-4">
                                <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Top Operatives</h2>
                                <div className="glass-card p-0 border border-white/5 bg-black/40 overflow-hidden">
                                    <LeaderboardTable />
                                </div>
                            </div>

                            {/* Community */}
                            <div className="space-y-4">
                                <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Global Feed</h2>
                                <div className="glass-card p-0 border border-white/5 bg-black/40 overflow-hidden">
                                    <CommunityFeed />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
