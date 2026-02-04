"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface CrystalCardProps {
    children: React.ReactNode
    className?: string
}

export const CrystalCard = ({ children, className }: CrystalCardProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const [isHovered, setIsHovered] = useState(false)

    // Mouse position state for subtle parallax
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseXFromCenter = e.clientX - rect.left - width / 2
        const mouseYFromCenter = e.clientY - rect.top - height / 2
        x.set(mouseXFromCenter / width)
        y.set(mouseYFromCenter / height)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
        x.set(0)
        y.set(0)
    }

    const mouseX = useSpring(x, { stiffness: 400, damping: 30 })
    const mouseY = useSpring(y, { stiffness: 400, damping: 30 })
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["2deg", "-2deg"])
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-2deg", "2deg"])

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ perspective: 1000 }}
            className={cn("group relative w-full", className)}
            onMouseMove={(e) => {
                handleMouseMove(e)
                setIsHovered(true)
            }}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative w-full h-full bg-[#0a0a0c]/80 border border-white/5 transition-all duration-300 overflow-hidden rounded-xl backdrop-blur-md"
            >
                {/* --- 1. Background Grid & Lighting --- */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px] opacity-20" />

                {/* --- 2. Border Glow --- */}
                <div className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-primary/30 transition-colors duration-300" />

                {/* --- 3. Content --- */}
                <div className="relative z-10 transform translate-z-10 h-full">
                    {children}
                </div>

                {/* --- 4. Corner Accents --- */}
                <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white/20 group-hover:border-primary/50 transition-colors" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/20 group-hover:border-primary/50 transition-colors" />

            </motion.div>
        </motion.div>
    )
}
