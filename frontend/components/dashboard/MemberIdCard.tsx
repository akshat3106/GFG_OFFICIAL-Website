"use client"

import React from "react"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { QrCode, Cpu, Wifi } from "lucide-react"

interface MemberIdCardProps {
    name: string
    role: string
    id: string
    joinDate: string
    avatarUrl?: string
}

export function MemberIdCard({ name, role, id, joinDate, avatarUrl }: MemberIdCardProps) {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 })
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 })

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"])
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"])

    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseXVal = e.clientX - rect.left
        const mouseYVal = e.clientY - rect.top

        const xPct = mouseXVal / width - 0.5
        const yPct = mouseYVal / height - 0.5

        x.set(xPct)
        y.set(yPct)
    }

    const onMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <div className="perspective-1000 w-full flex justify-center py-4">
            <motion.div
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="relative w-[340px] h-[210px] rounded-xl bg-black border border-white/20 shadow-2xl transition-shadow duration-500 overflow-hidden group cursor-pointer"
            >
                {/* Holographic Effects */}
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-500/20 via-transparent to-purple-500/20 opacity-50 pointer-events-none mix-blend-color-dodge" />
                <div className="absolute inset-0 z-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />

                {/* Shine Glare */}
                <motion.div
                    style={{
                        x: useTransform(mouseX, [-0.5, 0.5], ["-100%", "100%"]),
                        y: useTransform(mouseY, [-0.5, 0.5], ["-100%", "100%"]),
                    }}
                    className="absolute inset-0 z-20 bg-gradient-to-tr from-transparent via-white/10 to-transparent blur-xl" // Shine
                />

                {/* Content Layer (Stays Flat mainly, or pops slightly) */}
                <div className="relative z-10 h-full p-5 flex flex-col justify-between">
                    {/* Header */}
                    <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2">
                            <div className="p-1.5 rounded-full bg-white/10 border border-white/10">
                                <Cpu className="w-4 h-4 text-cyan-400" />
                            </div>
                            <span className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase">
                                GFG Student Chapter
                            </span>
                        </div>
                        <Wifi className="w-4 h-4 text-white/50" />
                    </div>

                    {/* Main Info */}
                    <div className="flex items-center gap-4 mt-2">
                        <div className="relative">
                            <Avatar className="w-16 h-16 border-2 border-cyan-500/50 ring-2 ring-cyan-500/20">
                                <AvatarImage src={avatarUrl} />
                                <AvatarFallback className="bg-black text-cyan-400 font-bold border border-white/10">
                                    {name.split(" ").map(n => n[0]).join("")}
                                </AvatarFallback>
                            </Avatar>
                            {/* Status Indicator */}
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black animate-pulse" />
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-white tracking-tight">{name}</h2>
                            <p className="text-xs text-indigo-300 font-medium uppercase tracking-wider">{role}</p>
                            <p className="text-[10px] text-zinc-500 mt-1 font-mono">ID: {id}</p>
                        </div>
                    </div>

                    {/* Footer / Stats */}
                    <div className="flex justify-between items-end mt-4">
                        <div className="space-y-1">
                            <p className="text-[9px] text-zinc-500 uppercase font-bold tracking-widest">Joined</p>
                            <p className="text-xs font-mono text-white">{joinDate}</p>
                        </div>

                        <div className="p-1 bg-white rounded-md">
                            <QrCode className="w-10 h-10 text-black" />
                        </div>
                    </div>
                </div>

                {/* Cyberpunk Grid/Lines Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-cyan-900/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

            </motion.div>
        </div>
    )
}
