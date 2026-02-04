import { GlassCard } from "@/components/ui/glass-card"
import { CheckCircle2, Clock, XCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

const mockActivity = [
    { id: 1, problem: "Binary Tree Visualizer", status: "solved", time: "2 hours ago", difficulty: "Medium" },
    { id: 2, problem: "Two Sum II", status: "attempted", time: "5 hours ago", difficulty: "Easy" },
    { id: 3, problem: "Graph Coloring", status: "solved", time: "Yesterday", difficulty: "Hard" },
    { id: 4, problem: "Merge Intervals", status: "solved", time: "Yesterday", difficulty: "Medium" },
]

export function RecentActivity() {
    return (
        <GlassCard className="h-full flex flex-col">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg text-white">Recent Activity</h3>
                <Link href="/problems" className="text-xs text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
                    View All <ArrowRight className="w-3 h-3" />
                </Link>
            </div>

            <div className="space-y-4 flex-1">
                {mockActivity.map((item) => (
                    <div key={item.id} className="group flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all cursor-pointer">
                        <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-full ${item.status === 'solved' ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'}`}>
                                {item.status === 'solved' ? <CheckCircle2 className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                            </div>
                            <div>
                                <h4 className="text-sm font-medium text-white group-hover:text-primary transition-colors">{item.problem}</h4>
                                <div className="flex items-center gap-2 mt-0.5">
                                    <span className={`text-[10px] px-1.5 py-0.5 rounded border ${item.difficulty === 'Hard' ? 'border-red-500/30 text-red-500 bg-red-500/10' :
                                            item.difficulty === 'Medium' ? 'border-yellow-500/30 text-yellow-500 bg-yellow-500/10' :
                                                'border-green-500/30 text-green-500 bg-green-500/10'
                                        }`}>
                                        {item.difficulty}
                                    </span>
                                    <span className="text-xs text-zinc-500">{item.time}</span>
                                </div>
                            </div>
                        </div>
                        {item.status === 'attempted' && (
                            <Link href={`/problems/${item.id}`} className="opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-xs bg-primary text-black font-bold px-3 py-1.5 rounded-full hover:bg-primary/90">
                                    Retry
                                </span>
                            </Link>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 text-center">
                <p className="text-xs text-zinc-500">Keep solving to maintain your streak!</p>
            </div>
        </GlassCard>
    )
}
