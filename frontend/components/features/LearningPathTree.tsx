"use client"

import { CrystalCard } from "@/components/ui/crystal-card"
import { motion } from "framer-motion"
import { Brain, Lock, Code2, Database, Shield, Globe, Cpu } from "lucide-react"

// Mock Skill Data
const skillNodes = [
    { id: 1, title: 'Basics of C++', icon: Code2, status: 'completed', x: 50, y: 10 },
    { id: 2, title: 'Data Structures', icon: Database, status: 'active', x: 25, y: 50 },
    { id: 3, title: 'Algorithms', icon: Cpu, status: 'locked', x: 75, y: 50 },
    { id: 4, title: 'Web Dev', icon: Globe, status: 'locked', x: 50, y: 90 },
]

export function LearningPathTree() {
    return (
        <CrystalCard className="p-0 h-[400px]">
            <div className="p-8 border-b border-white/5 flex gap-3 items-center">
                <div className="p-2 bg-primary/10 rounded-lg">
                    <Brain className="w-5 h-5 text-primary" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white">Skill Matrix</h3>
                    <p className="text-xs text-zinc-500">Upgrade your neural pathways.</p>
                </div>
            </div>

            <div className="relative h-full w-full p-8 flex flex-col items-center justify-center gap-8">
                {/* Visual Mock of Tree (Vertical for now) */}
                {skillNodes.map((node, i) => {
                    const Icon = node.icon
                    const isLast = i === skillNodes.length - 1
                    return (
                        <div key={node.id} className="relative z-10 flex items-center gap-4 w-full max-w-[300px]">
                            {!isLast && (
                                <div className="absolute left-6 top-10 w-0.5 h-12 bg-white/10 z-0">
                                    <div className={`w-full h-full bg-primary/50 ${node.status === 'completed' ? 'opacity-100' : 'opacity-0'} transition-opacity`} />
                                </div>
                            )}

                            <div className={`relative z-10 w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all bg-[#0a0a0c]
                                 ${node.status === 'completed' ? 'border-primary text-primary shadow-[0_0_15px_rgba(34,197,94,0.3)]' :
                                    node.status === 'active' ? 'border-primary text-white animate-pulse' : 'border-zinc-800 text-zinc-600'}`}>
                                {node.status === 'locked' ? <Lock className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                            </div>

                            <div className="flex-1">
                                <h4 className={`text-sm font-bold ${node.status === 'locked' ? 'text-zinc-600' : 'text-zinc-200'}`}>{node.title}</h4>
                                <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">{node.status}</p>
                            </div>

                            {node.status === 'active' && (
                                <div className="text-xs text-primary font-bold">IN_PROGRESS</div>
                            )}
                        </div>
                    )
                })}
            </div>
        </CrystalCard>
    )
}
