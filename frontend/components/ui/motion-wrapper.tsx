"use client"

import { motion, useInView, Variant } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface MotionProps extends React.ComponentPropsWithoutRef<typeof motion.div> {
    children: React.ReactNode
    className?: string
    delay?: number
    duration?: number
    viewportAmount?: number
}

export function FadeIn({ children, className, delay = 0, duration = 0.5, viewportAmount = 0.3, ...props }: MotionProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: viewportAmount })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration, delay, type: "spring", stiffness: 100, damping: 20 }}
            className={cn(className)}
            {...props}
        >
            {children}
        </motion.div>
    )
}

export function SlideInLeft({ children, className, delay = 0, duration = 0.5, viewportAmount = 0.3, ...props }: MotionProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: viewportAmount })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration, delay, type: "spring", stiffness: 100, damping: 20 }}
            className={cn(className)}
            {...props}
        >
            {children}
        </motion.div>
    )
}

export function SlideInRight({ children, className, delay = 0, duration = 0.5, viewportAmount = 0.3, ...props }: MotionProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: viewportAmount })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration, delay, type: "spring", stiffness: 100, damping: 20 }}
            className={cn(className)}
            {...props}
        >
            {children}
        </motion.div>
    )
}

export function StaggerContainer({ children, className, delay = 0, staggerChildren = 0.1, ...props }: MotionProps & { staggerChildren?: number }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={{
                hidden: { opacity: 0 },
                show: {
                    opacity: 1,
                    transition: {
                        staggerChildren,
                        delayChildren: delay,
                    },
                },
            }}
            className={cn(className)}
            {...props}
        >
            {children}
        </motion.div>
    )
}

export const staggerItem: { hidden: Variant, show: Variant } = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
}
