import { GlassCard } from "@/components/ui/glass-card"
import { Calendar, Megaphone, Trophy, ArrowRight, Activity } from "lucide-react"
import Link from "next/link"

const mockAdminActivity = [
    { title: "New event created: 'Mock Interview Marathon'", time: "Just now", type: "event" },
    { title: "Member milestone reached: 100 Active Members", time: "2 hours ago", type: "milestone" },
    { title: "Broadcast sent: 'Semester Updates'", time: "5 hours ago", type: "broadcast" },
    { title: "New Lead Added: 'Ayush Kumar'", time: "1 day ago", type: "admin" }
]

export function AdminRecentActivity() {
    return (
        <GlassCard className="h-full flex flex-col">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-primary" />
                    <h3 className="font-bold text-lg text-white">Recent Activity</h3>
                </div>
                <Link href="/admin/logs" className="text-xs text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
                    View Logs <ArrowRight className="w-3 h-3" />
                </Link>
            </div>

            <div className="space-y-4 flex-1">
                {mockAdminActivity.map((item, i) => (
                    <div key={i} className="group flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all cursor-pointer">
                        <div className={`mt-1 p-2 rounded-full flex items-center justify-center border ${item.type === 'event' ? 'bg-purple-500/10 border-purple-500/30 text-purple-500' :
                                item.type === 'milestone' ? 'bg-yellow-500/10 border-yellow-500/30 text-yellow-500' :
                                    item.type === 'broadcast' ? 'bg-orange-500/10 border-orange-500/30 text-orange-500' :
                                        'bg-blue-500/10 border-blue-500/30 text-blue-500'
                            }`}>
                            {item.type === 'event' ? <Calendar className="w-3 h-3" /> :
                                item.type === 'milestone' ? <Trophy className="w-3 h-3" /> :
                                    item.type === 'broadcast' ? <Megaphone className="w-3 h-3" /> :
                                        <UsersIcon className="w-3 h-3" />}
                        </div>
                        <div>
                            <div className="text-sm font-medium text-white group-hover:text-primary transition-colors leading-tight">
                                {item.title}
                            </div>
                            <div className="text-xs text-zinc-500 mt-1">{item.time}</div>
                        </div>
                    </div>
                ))}
            </div>
        </GlassCard>
    )
}

function UsersIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}
