import { GlassCard } from "@/components/ui/glass-card"
import { Calendar, Users, Megaphone, TrendingUp } from "lucide-react"

interface AdminStatsProps {
    stats: {
        events: number
        members: number
        broadcasts: number
    }
}

export function AdminStats({ stats }: AdminStatsProps) {
    return (
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
            {/* Events Card */}
            <GlassCard className="group" gradient="from-purple-500/20 to-indigo-500/20">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-zinc-400">Total Events</p>
                        <h3 className="text-3xl font-bold text-white mt-1">{stats.events}</h3>
                        <p className="text-xs text-purple-400 mt-1 flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            +2 from last month
                        </p>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                        <Calendar className="w-6 h-6 text-purple-500 fill-purple-500/50" />
                    </div>
                </div>
            </GlassCard>

            {/* Members Card */}
            <GlassCard className="group" gradient="from-blue-500/20 to-cyan-500/20">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-zinc-400">Active Members</p>
                        <h3 className="text-3xl font-bold text-white mt-1">{stats.members}</h3>
                        <p className="text-xs text-blue-400 mt-1 flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            Active community
                        </p>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                        <Users className="w-6 h-6 text-blue-500 fill-blue-500/50" />
                    </div>
                </div>
            </GlassCard>

            {/* Attendance Card */}
            <GlassCard className="group" gradient="from-emerald-500/20 to-green-500/20">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-zinc-400">Avg. Attendance</p>
                        <h3 className="text-3xl font-bold text-white mt-1">72%</h3>
                        <p className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            +4% from last sem
                        </p>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30 group-hover:scale-110 transition-transform duration-300">
                        <TrendingUp className="w-6 h-6 text-emerald-500 fill-emerald-500/50" />
                    </div>
                </div>
            </GlassCard>

            {/* Broadcasts Card */}
            <GlassCard className="group" gradient="from-orange-500/20 to-red-500/20">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-zinc-400">Broadcasts Sent</p>
                        <h3 className="text-3xl font-bold text-white mt-1">{stats.broadcasts}</h3>
                        <p className="text-xs text-orange-400 mt-1 flex items-center gap-1">
                            <Megaphone className="w-3 h-3" />
                            Total sent
                        </p>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-orange-500/20 flex items-center justify-center border border-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                        <Megaphone className="w-6 h-6 text-orange-500 fill-orange-500/50" />
                    </div>
                </div>
            </GlassCard>
        </div>
    )
}
