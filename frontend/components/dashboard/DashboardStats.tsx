import { GlassCard } from "@/components/ui/glass-card"
import { Flame, Trophy, TrendingUp, Star } from "lucide-react"

export function DashboardStats() {
    return (
        <div className="grid gap-6 md:grid-cols-3">
            {/* Streak Card */}
            <GlassCard className="group" gradient="from-orange-500/20 to-red-600/20">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-zinc-400">Current Streak</p>
                        <h3 className="text-3xl font-bold text-white mt-1">12 Days</h3>
                        <p className="text-xs text-orange-400 mt-1 flex items-center gap-1">
                            <Flame className="w-3 h-3 fill-orange-400 animate-pulse" />
                            Unstoppable!
                        </p>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-orange-500/20 flex items-center justify-center border border-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                        <Flame className="w-6 h-6 text-orange-500 fill-orange-500/50" />
                    </div>
                </div>
            </GlassCard>

            {/* Points Card */}
            <GlassCard className="group" gradient="from-blue-500/20 to-cyan-500/20">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-zinc-400">Total XP</p>
                        <h3 className="text-3xl font-bold text-white mt-1">2,450</h3>
                        <div className="w-full bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden">
                            <div className="h-full bg-blue-500 w-[70%] rounded-full" />
                        </div>
                        <p className="text-xs text-blue-400 mt-1">50 XP to Level 5</p>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                        <Star className="w-6 h-6 text-blue-500 fill-blue-500/50" />
                    </div>
                </div>
            </GlassCard>

            {/* Rank Card */}
            <GlassCard className="group" gradient="from-purple-500/20 to-pink-500/20">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-zinc-400">Global Rank</p>
                        <h3 className="text-3xl font-bold text-white mt-1">#42</h3>
                        <p className="text-xs text-green-400 mt-1 flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            Top 5%
                        </p>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                        <Trophy className="w-6 h-6 text-purple-500 fill-purple-500/50" />
                    </div>
                </div>
            </GlassCard>
        </div>
    )
}
