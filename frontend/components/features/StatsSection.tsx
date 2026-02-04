"use client"

import { useEffect, useRef } from "react"
import { useInView, useMotionValue, useSpring } from "framer-motion"

const STATS = [
    { label: "Active Members", value: 500, suffix: "+" },
    { label: "Events Hosted", value: 50, suffix: "+" },
    { label: "Projects Built", value: 120, suffix: "+" },
    { label: "Coffee Consumed", value: 1000, suffix: "L" },
]

function Counter({ value }: { value: number }) {
    const ref = useRef<HTMLSpanElement>(null)
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, {
        damping: 50,
        stiffness: 100,
    })
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = String(Math.floor(latest))
            }
        })
    }, [springValue])

    return <span ref={ref} />
}

export function StatsSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/10 rounded-full blur-[100px] -z-10" />

            <div className="container px-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {STATS.map((stat, idx) => (
                        <div key={idx} className="glass-card p-6 rounded-xl flex flex-col items-center justify-center text-center group hover:-translate-y-2 transition-transform duration-300">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-space-grotesk group-hover:text-primary transition-colors">
                                <Counter value={stat.value} />
                                {stat.suffix}
                            </div>
                            <div className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
