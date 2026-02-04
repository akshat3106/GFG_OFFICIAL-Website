"use client"

import { CrystalCard } from "@/components/ui/crystal-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Users, Radio, AlertCircle, CheckCircle2, Activity, ArrowRight, ShieldAlert } from "lucide-react"
import Link from "next/link"
import { AdminStats } from "@/components/dashboard/AdminStats"
import { AdminRecentActivity } from "@/components/dashboard/AdminRecentActivity"

export default function AdminDashboard() {
    return (
        <div className="min-h-screen p-6 font-sans">
            <div className="max-w-[1600px] mx-auto space-y-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6 relative">
                    <div className="absolute bottom-0 left-0 w-24 h-[1px] bg-primary shadow-[0_0_10px_var(--primary)]" />

                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <ShieldAlert className="w-5 h-5 text-primary animate-pulse" />
                            <span className="text-xs font-mono text-primary uppercase tracking-widest">Sys_Admin_Level_1</span>
                        </div>
                        <h1 className="text-4xl font-bold text-white mb-2 font-heading tracking-tight">Command Center</h1>
                        <p className="text-zinc-400 font-mono text-sm max-w-xl">Oversee all club operations, event protocols, and operative data from a unified terminal.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button variant="outline" className="border-white/10 bg-black/50 text-zinc-300 hover:text-white hover:bg-white/10 font-mono text-xs h-9 uppercase tracking-wider">
                            Filter_View
                        </Button>
                        <Button className="bg-primary text-black font-bold shadow-[0_0_15px_rgba(34,197,94,0.4)] hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] transition-all font-mono text-xs h-9 uppercase tracking-wider">
                            <Radio className="w-3 h-3 mr-2" /> Init_Broadcast
                        </Button>
                    </div>
                </div>

                {/* Stats */}
                <AdminStats stats={{ events: 5, members: 124, broadcasts: 12 }} />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Quick Actions */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <Link href="/admin/events">
                                <CrystalCard className="h-full p-6 flex flex-col items-start cursor-pointer group hover:border-primary/40">
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                                        <Calendar className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-white text-lg mb-1 group-hover:text-primary transition-colors font-heading">Event Sync</h3>
                                    <p className="text-xs text-zinc-500 font-mono">Schedule & Manage Protocols</p>
                                    <div className="mt-auto pt-4 flex items-center text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity font-mono uppercase tracking-widest">
                                        Access <ArrowRight className="w-3 h-3 ml-1" />
                                    </div>
                                </CrystalCard>
                            </Link>

                            <Link href="/admin/broadcasts">
                                <CrystalCard className="h-full p-6 flex flex-col items-start cursor-pointer group hover:border-primary/40">
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                                        <Radio className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-white text-lg mb-1 group-hover:text-primary transition-colors font-heading">Broadcasts</h3>
                                    <p className="text-xs text-zinc-500 font-mono">Global Announcements</p>
                                    <div className="mt-auto pt-4 flex items-center text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity font-mono uppercase tracking-widest">
                                        Access <ArrowRight className="w-3 h-3 ml-1" />
                                    </div>
                                </CrystalCard>
                            </Link>

                            <Link href="/admin/attendance">
                                <CrystalCard className="h-full p-6 flex flex-col items-start cursor-pointer group hover:border-primary/40">
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-white text-lg mb-1 group-hover:text-primary transition-colors font-heading">Presence</h3>
                                    <p className="text-xs text-zinc-500 font-mono">Monitor Operative Status</p>
                                    <div className="mt-auto pt-4 flex items-center text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity font-mono uppercase tracking-widest">
                                        Access <ArrowRight className="w-3 h-3 ml-1" />
                                    </div>
                                </CrystalCard>
                            </Link>
                        </div>

                        {/* Recent Activity */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <Activity className="w-4 h-4 text-primary" />
                                <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest font-mono">Recent_System_Logs</h2>
                            </div>
                            <CrystalCard className="p-0 border border-white/5 bg-black/40 h-[400px] overflow-hidden">
                                <div className="p-4 border-b border-white/5 bg-white/5">
                                    <div className="flex justify-between items-center text-xs font-mono text-zinc-400">
                                        <span>TIMESTAMP</span>
                                        <span>ACTION</span>
                                        <span>OPERATOR</span>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <AdminRecentActivity />
                                </div>
                            </CrystalCard>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        {/* System Status */}
                        <CrystalCard className="p-6 space-y-6 border border-white/5 bg-black/40">
                            <div className="flex items-center gap-2 border-b border-white/10 pb-4">
                                <Activity className="w-5 h-5 text-primary" />
                                <h2 className="text-sm font-bold text-white uppercase tracking-wider font-mono">System Integrity</h2>
                            </div>

                            <div className="space-y-4 text-sm font-mono">
                                <div className="flex items-center justify-between">
                                    <span className="text-zinc-500">Database_Shard_1</span>
                                    <span className="text-green-500 flex items-center gap-2 text-xs">
                                        <CheckCircle2 className="w-3 h-3" /> [ONLINE]
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-zinc-500">API_Gateway_West</span>
                                    <span className="text-green-500 flex items-center gap-2 text-xs">
                                        <CheckCircle2 className="w-3 h-3" /> [STABLE]
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-zinc-500">Storage_Block</span>
                                    <span className="text-yellow-500 flex items-center gap-2 text-xs">
                                        <AlertCircle className="w-3 h-3" /> [85% LOAD]
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-zinc-500">Auth_Protocol</span>
                                    <span className="text-green-500 flex items-center gap-2 text-xs">
                                        <CheckCircle2 className="w-3 h-3" /> [SECURE]
                                    </span>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-white/10">
                                <div className="text-[10px] text-zinc-500 font-mono mb-1">CPU_USAGE</div>
                                <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary/80 w-[42%] animate-pulse" />
                                </div>
                            </div>
                        </CrystalCard>

                        {/* Pending Approvals */}
                        <CrystalCard className="p-6 border border-white/5 bg-gradient-to-b from-primary/5 to-transparent relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-10 translate-x-10 pointer-events-none" />

                            <h3 className="text-xs font-bold mb-2 text-zinc-500 uppercase tracking-widest font-mono">Pending Access Requests</h3>
                            <div className="text-5xl font-bold text-white mb-2 font-heading">14</div>
                            <p className="text-xs text-zinc-400 mb-6 font-mono">Operatives awaiting clearance.</p>
                            <Button size="sm" variant="outline" className="w-full border-primary/30 text-primary hover:bg-primary hover:text-black transition-colors font-bold uppercase tracking-wider text-xs h-9">
                                Review Queue <ArrowRight className="w-3 h-3 ml-2" />
                            </Button>
                        </CrystalCard>
                    </div>
                </div>
            </div>
        </div>
    )
}
