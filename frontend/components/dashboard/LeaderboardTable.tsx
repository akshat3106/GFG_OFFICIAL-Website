"use client"

import { CrystalCard } from "@/components/ui/crystal-card"
import { Crown, TrendingUp, TrendingDown, Minus } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

const leaderboardData = [
    { name: "Ayush Pradhan", rank: 1, xp: 15420, trend: 'up', avatar: "" },
    { name: "Smiti Sahoo", rank: 2, xp: 14200, trend: 'up', avatar: "" },
    { name: "Priya Das", rank: 3, xp: 13800, trend: 'down', avatar: "" },
    { name: "Raj Viswa", rank: 4, xp: 12500, trend: 'stable', avatar: "" },
    { name: "Ankit Kumar", rank: 5, xp: 11000, trend: 'up', avatar: "" }
]

export function LeaderboardTable() {
    return (
        <CrystalCard className="p-0 overflow-hidden">
            <div className="p-6 border-b border-white/5 bg-gradient-to-r from-yellow-500/5 to-transparent flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <Crown className="w-5 h-5 text-yellow-500 fill-yellow-500/20" />
                        Top Operatives
                    </h3>
                    <p className="text-xs text-zinc-500">Rankings updated hourly.</p>
                </div>
            </div>

            <div className="p-4 space-y-2">
                {leaderboardData.map((user, index) => (
                    <div
                        key={user.name}
                        className={cn(
                            "flex items-center justify-between p-3 rounded-lg border transition-all duration-300",
                            index === 0 ? "bg-yellow-500/5 border-yellow-500/20 shadow-[0_0_15px_rgba(234,179,8,0.1)]" :
                                index === 1 ? "bg-zinc-300/5 border-zinc-300/10" :
                                    index === 2 ? "bg-orange-700/5 border-orange-700/10" : "bg-black/20 border-white/5 hover:bg-white/5"
                        )}
                    >
                        <div className="flex items-center gap-4">
                            <div className={cn(
                                "w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm font-mono",
                                index === 0 ? "text-yellow-500" :
                                    index === 1 ? "text-zinc-300" :
                                        index === 2 ? "text-orange-400" : "text-zinc-600"
                            )}>
                                #{user.rank}
                            </div>

                            <div className="flex items-center gap-3">
                                <Avatar className="w-8 h-8 border border-white/10">
                                    <AvatarImage src={user.avatar} />
                                    <AvatarFallback className="bg-zinc-800 text-zinc-400 text-xs">
                                        {user.name.split(" ").map(n => n[0]).join("")}
                                    </AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="text-sm font-bold text-white leading-none mb-1">{user.name}</p>
                                    <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Level 42</p>
                                </div>
                            </div>
                        </div>

                        <div className="text-right">
                            <p className="text-sm font-bold text-white font-mono">{user.xp.toLocaleString()} XP</p>
                            <div className="flex items-center justify-end gap-1 text-[10px]">
                                {user.trend === 'up' && <span className="text-green-400 flex items-center"><TrendingUp className="w-3 h-3 mr-0.5" /> +120</span>}
                                {user.trend === 'down' && <span className="text-red-400 flex items-center"><TrendingDown className="w-3 h-3 mr-0.5" /> -40</span>}
                                {user.trend === 'stable' && <span className="text-zinc-500 flex items-center"><Minus className="w-3 h-3 mr-0.5" /> 0</span>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </CrystalCard>
    )
}
