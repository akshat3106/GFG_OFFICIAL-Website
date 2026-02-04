"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface OrbitProps {
    radius: number
    duration: number
    delay: number
    children: React.ReactNode
}

export const OrbitSystem = () => {
    const [hoveredNode, setHoveredNode] = useState<string | null>(null)
    const [isCoreHovered, setIsCoreHovered] = useState(false)

    const nodes = [
        { id: "events", label: "Events", icon: "🗓️", desc: "Hackathons, Workshops, & Tech Talks", radius: 140, duration: 20 },
        { id: "opensource", label: "Open Source", icon: "💻", desc: "Building tools for the community", radius: 220, duration: 25 },
        { id: "mentorship", label: "Mentorship", icon: "🤝", desc: "Guidance from industry seniors", radius: 300, duration: 30 },
    ]

    return (
        <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] flex items-center justify-center mx-auto my-12">

            {/* Background Radar Effect */}
            <div className="absolute inset-0 rounded-full border border-white/5 opacity-20 animate-[spin_10s_linear_infinite]"
                style={{ background: 'conic-gradient(from 0deg, transparent 0deg, rgba(47, 141, 70, 0.1) 360deg)' }} />

            {/* Central Core */}
            <motion.div
                className={cn(
                    "relative z-20 w-24 h-24 md:w-32 md:h-32 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all duration-500",
                    isCoreHovered ? "bg-primary/20 border-primary shadow-[0_0_80px_rgba(47,141,70,0.6)]" : "bg-black border-primary/50 shadow-[0_0_50px_rgba(47,141,70,0.3)]"
                )}
                onMouseEnter={() => setIsCoreHovered(true)}
                onMouseLeave={() => setIsCoreHovered(false)}
                animate={{ scale: isCoreHovered ? 1.05 : 1 }}
                whileTap={{ scale: 0.95 }}
            >
                {/* Breathing Inner Core */}
                <motion.div
                    className="absolute inset-0 rounded-full bg-primary/20"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Core Text */}
                <div className="text-center relative z-10">
                    <motion.div
                        className="text-2xl md:text-3xl font-bold text-white font-heading"
                        animate={{ textShadow: isCoreHovered ? "0 0 20px rgba(47,141,70,0.8)" : "0 0 0px rgba(0,0,0,0)" }}
                    >
                        ITER
                    </motion.div>
                    <div className="text-[8px] md:text-[10px] text-primary font-mono tracking-widest">
                        {isCoreHovered ? ">> SYSTEM ACTIVE <<" : "CORE"}
                    </div>
                </div>
            </motion.div>

            {/* Orbits */}
            {nodes.map((node, i) => (
                <div key={node.id} className="absolute inset-0 pointer-events-none">
                    {/* Orbit Ring */}
                    <motion.div
                        className={cn(
                            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-500",
                            hoveredNode === node.id || isCoreHovered ? "border-primary/30 shadow-[0_0_20px_rgba(47,141,70,0.2)]" : "border-white/10 shadow-[0_0_15px_rgba(47,141,70,0.1)]"
                        )}
                        style={{ width: `${(node.radius * 2) / 600 * 100}%`, height: `${(node.radius * 2) / 600 * 100}%`, maxWidth: node.radius * 2, maxHeight: node.radius * 2 }}
                    />

                    {/* Rotating Assemblage */}
                    <motion.div
                        className="absolute w-full h-full"
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: isCoreHovered ? node.duration * 0.2 : node.duration, // Warp speed on core hover
                            repeat: Infinity,
                            ease: "linear",
                            delay: -(i * 5)
                        }}
                    >
                        {/* Particle Trails */}
                        {[1, 2, 3].map((trail, t) => (
                            <motion.div
                                key={`trail-${t}`}
                                className="absolute top-0 left-1/2 -ml-1 -mt-1 w-2 h-2 rounded-full bg-primary"
                                style={{
                                    opacity: 0.3 - (t * 0.1),
                                    filter: `blur(${t * 2}px)`,
                                    transform: `rotate(-${(t + 1) * 5}deg) translateY(-${node.radius}px)`
                                    // Using manual transform logic to place trailing dots relative to rotation center
                                    // Actually, since we are inside a rotating container, simply offsetting them by angle is enough?
                                    // No, the container rotates. 
                                    // The main node is at 'top-0 left-1/2' which is effectively 0 degrees relative to container.
                                    // So we just need to rotate these trails slightly BACKWARDS relative to the container.
                                }}
                            >
                                {/* Simple implementation using transform origin */}
                                <div className="w-full h-full" style={{ transformOrigin: `50% ${node.radius}px`, transform: `rotate(-${t * 4 + 2}deg)` }} />
                                {/* Wait, the parent is w-full h-full rotating. 
                                     The main node is positioned absolute at top center (radius distance).
                                     To make a trail, we need elements at the same radius but slightly rotated back.
                                     
                                     Correct approach inside rotating parent:
                                     Div positioned at center, rotated -X degrees, then translated Y = -radius.
                                 */}
                            </motion.div>
                        ))}

                        {/* Actual Trail Implementation Corrected: 
                            Instead of complex transforms, let's just use absolute positioning relative to the container 
                            and rotate them back.
                        */}
                        {[...Array(3)].map((_, t) => (
                            <div
                                key={`trail-dot-${t}`}
                                className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-primary"
                                style={{
                                    marginTop: -node.radius, // Move to orbit path (top)
                                    marginLeft: '-4px', // Center
                                    transformOrigin: `50% ${node.radius}px`, // Rotate around center of system
                                    transform: `rotate(-${(t + 1) * 3}deg)`, // Rotate BACKWARDS
                                    opacity: 0.4 / (t + 1),
                                    filter: 'blur(2px)'
                                }}
                            />
                        ))}


                        {/* The Satellite Node */}
                        <div className="absolute top-0 left-1/2 -ml-6 -mt-6 md:-ml-8 md:-mt-8 w-12 h-12 md:w-16 md:h-16 pointer-events-auto cursor-pointer group">
                            {/* Counter-rotate to keep content upright */}
                            <motion.div
                                className="w-full h-full"
                                animate={{ rotate: -360 }}
                                transition={{
                                    duration: isCoreHovered ? node.duration * 0.2 : node.duration,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: -(i * 5)
                                }}
                            >
                                <div className="relative">
                                    <div
                                        className={cn(
                                            "w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xl md:text-2xl shadow-xl transition-all duration-300",
                                            hoveredNode === node.id ? "scale-110 border-primary shadow-[0_0_30px_rgba(47,141,70,0.5)] bg-zinc-800" : "hover:border-zinc-500"
                                        )}
                                        onMouseEnter={() => setHoveredNode(node.id)}
                                        onMouseLeave={() => setHoveredNode(null)}
                                    >
                                        {node.icon}
                                    </div>

                                    {/* Tooltip */}
                                    <div className={cn(
                                        "absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 bg-zinc-900/90 backdrop-blur-md border border-zinc-800 p-3 rounded-lg text-center pointer-events-none transition-all duration-300 z-50 hidden md:block",
                                        hoveredNode === node.id ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                                    )}>
                                        <div className="text-white font-bold text-sm mb-1">{node.label}</div>
                                        <div className="text-xs text-zinc-400 font-mono">{node.desc}</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            ))}

            {/* Background Glow */}
            <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full z-0 pointer-events-none" />
        </div>
    )
}
