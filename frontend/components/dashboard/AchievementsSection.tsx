"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Lock, Trophy, Zap, Code, Target, BookOpen } from "lucide-react"
import { motion } from "framer-motion"

const achievements = [
    {
        id: 1,
        title: "Code Warrior",
        description: "Complete 7 day streak",
        icon: Zap,
        color: "text-yellow-400",
        bg: "bg-yellow-400/10",
        border: "border-yellow-400/20",
        unlocked: true,
        date: "2 days ago"
    },
    {
        id: 2,
        title: "Problem Solver",
        description: "Solve 10 Easy problems",
        icon: Code,
        color: "text-blue-400",
        bg: "bg-blue-400/10",
        border: "border-blue-400/20",
        unlocked: true,
        date: "1 week ago"
    },
    {
        id: 3,
        title: "Sharpshooter",
        description: "Submit solution with 0 errors",
        icon: Target,
        color: "text-green-400",
        bg: "bg-green-400/10",
        border: "border-green-400/20",
        unlocked: true,
        date: "Today"
    },
    {
        id: 4,
        title: "Knowledge Seeker",
        description: "Read 5 articles",
        icon: BookOpen,
        color: "text-purple-400",
        bg: "bg-purple-400/10",
        border: "border-purple-400/20",
        unlocked: false,
    },
    {
        id: 5,
        title: "Mastermind",
        description: "Win a weekly contest",
        icon: Trophy,
        color: "text-red-400",
        bg: "bg-red-400/10",
        border: "border-red-400/20",
        unlocked: false,
    }
]

export function AchievementsSection() {
    return (
        <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <Trophy className="w-5 h-5 text-yellow-500" />
                        Achievements
                    </h3>
                    <p className="text-sm text-zinc-400">Badge Gallery</p>
                </div>
                <Badge variant="outline" className="bg-white/5 border-white/10 text-xs">
                    {achievements.filter(a => a.unlocked).length}/{achievements.length} Unlocked
                </Badge>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                {achievements.map((achievement) => {
                    const Icon = achievement.icon
                    return (
                        <motion.div
                            key={achievement.id}
                            whileHover={{ scale: 1.05 }}
                            className={`
                                relative p-4 rounded-xl border flex flex-col items-center text-center gap-3 transition-all duration-300
                                ${achievement.unlocked
                                    ? `${achievement.bg} ${achievement.border}`
                                    : "bg-zinc-800/30 border-zinc-700/50 opacity-60 grayscale"
                                }
                            `}
                        >
                            <div className={`
                                p-3 rounded-full 
                                ${achievement.unlocked ? "bg-black/20" : "bg-black/50"}
                            `}>
                                <Icon className={`w-6 h-6 ${achievement.unlocked ? achievement.color : "text-zinc-500"}`} />
                            </div>
                            <div>
                                <h4 className={`text-sm font-semibold ${achievement.unlocked ? "text-white" : "text-zinc-400"}`}>
                                    {achievement.title}
                                </h4>
                                <p className="text-[10px] text-zinc-500 mt-1 line-clamp-2">
                                    {achievement.description}
                                </p>
                            </div>
                            {!achievement.unlocked && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-xl backdrop-blur-[1px]">
                                    <Lock className="w-5 h-5 text-zinc-500" />
                                </div>
                            )}
                        </motion.div>
                    )
                })}
            </div>
        </GlassCard>
    )
}
