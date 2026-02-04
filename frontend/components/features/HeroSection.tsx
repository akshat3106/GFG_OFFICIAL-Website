"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Terminal, ChevronRight, Zap } from "lucide-react"

export function HeroSection() {
    const { scrollY } = useScroll()
    const y = useTransform(scrollY, [0, 500], [0, 200])
    const opacity = useTransform(scrollY, [0, 300], [1, 0])

    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-20">
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-background">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(34,197,94,0.15),transparent_50%)]" />
                <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-30" />
            </div>

            {/* Glowing Orbs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse-glow delay-1000" />

            <motion.div
                style={{ y, opacity }}
                className="container relative z-10 px-4 flex flex-col items-center text-center"
            >
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-default"
                >
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-mono text-primary-foreground/80 tracking-widest uppercase">
                        GFG Student Chapter • ITER
                    </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none font-space-grotesk text-white mb-6 relative z-10"
                >
                    BUILD <span className="text-stroke text-transparent">THE</span> <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-green-200 to-green-500 text-glow">
                        FUTURE
                    </span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 font-light"
                >
                    Join the premier coding community at ITER. We innovate, collaborate, and deploy real-world solutions.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <Link href="#join" className="group relative px-8 py-4 bg-primary text-black font-bold font-mono uppercase tracking-wider overflow-hidden rounded-sm hover:shadow-[0_0_40px_-10px_rgba(34,197,94,0.6)] transition-shadow">
                        <span className="relative z-10 flex items-center gap-2">
                            Initialize_Join
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>

                    <Link href="#events" className="group px-8 py-4 bg-transparent border border-white/20 text-white font-bold font-mono uppercase tracking-wider rounded-sm hover:bg-white/5 transition-colors">
                        <span className="flex items-center gap-2">
                            Explore_Events
                            <Terminal className="w-4 h-4" />
                        </span>
                    </Link>
                </motion.div>

                {/* Floaters // Code snippets or cool tech visuals */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="absolute top-0 w-full h-full pointer-events-none -z-10"
                >
                    {/* Floating Elements (Decorative) */}
                    <div className="absolute top-[20%] left-[10%] p-4 glass rounded-lg animate-float opacity-60 hidden md:block">
                        <Code2Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="absolute bottom-[30%] right-[10%] p-4 glass rounded-lg animate-float opacity-60 hidden md:block" style={{ animationDelay: "2s" }}>
                        <CpuIcon className="w-8 h-8 text-blue-400" />
                    </div>
                    <div className="absolute top-[40%] right-[20%] p-3 glass rounded-lg animate-float opacity-40 hidden md:block" style={{ animationDelay: "1s" }}>
                        <Zap className="w-6 h-6 text-yellow-400" />
                    </div>
                </motion.div>
            </motion.div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-20" />
        </section>
    )
}

function Code2Icon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>
    )
}

function CpuIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="16" height="16" x="4" y="4" rx="2" /><rect width="6" height="6" x="9" y="9" rx="1" /><path d="M15 2v2" /><path d="M15 20v2" /><path d="M2 15h2" /><path d="M2 9h2" /><path d="M20 15h2" /><path d="M20 9h2" /><path d="M9 2v2" /><path d="M9 20v2" /></svg>
    )
}
