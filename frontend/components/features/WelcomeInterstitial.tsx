"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface WelcomeInterstitialProps {
    name: string
    role?: string // 'member' | 'lead' etc
    onComplete?: () => void
}

export const WelcomeInterstitial = ({ name, role = "OPERATOR", onComplete }: WelcomeInterstitialProps) => {
    const [isVisible, setIsVisible] = useState(true)
    const [showName, setShowName] = useState(false)

    useEffect(() => {
        // Animation sequence
        const nameTimer = setTimeout(() => setShowName(true), 800)

        const dismissTimer = setTimeout(() => {
            setIsVisible(false)
            if (onComplete) onComplete()
        }, 3500)

        return () => {
            clearTimeout(nameTimer)
            clearTimeout(dismissTimer)
        }
    }, [onComplete])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden font-mono cursor-wait"
                >
                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

                    {/* Central Content */}
                    <div className="relative z-10 text-center space-y-6">

                        {/* "HI" Block */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-8xl md:text-9xl font-black text-white tracking-tighter flex items-center justify-center gap-4"
                        >
                            <span>HI</span>
                        </motion.div>

                        {/* Name Reveal */}
                        <div className="h-20 md:h-24 flex items-center justify-center overflow-hidden">
                            {showName && (
                                <motion.div
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                    className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-white uppercase tracking-widest"
                                >
                                    {name.split(' ')[0]}
                                </motion.div>
                            )}
                        </div>

                        {/* Loading Bar / Role */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                            className="flex flex-col items-center gap-2"
                        >
                            <div className="flex items-center gap-2 text-xs text-primary font-bold tracking-[0.3em]">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                {role.toUpperCase()} ACCESS
                            </div>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 1.5, duration: 1.5, ease: "linear" }}
                                className="h-0.5 bg-primary w-64 shadow-[0_0_10px_rgba(0,255,42,0.5)]"
                            />
                        </motion.div>
                    </div>

                    {/* Scanline Overlay */}


                </motion.div>
            )}
        </AnimatePresence>
    )
}
