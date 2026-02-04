"use client"

import { cn } from "@/lib/utils"

const TECHNOLOGIES = [
    "REACT", "NEXT.JS", "TYPESCRIPT", "TAILWIND", "NODE.JS", "PYTHON", "AI/ML", "CLOUD", "DEVOPS", "OPEN SOURCE",
    "REACT", "NEXT.JS", "TYPESCRIPT", "TAILWIND", "NODE.JS", "PYTHON", "AI/ML", "CLOUD", "DEVOPS", "OPEN SOURCE",
]

export function MarqueeSection() {
    return (
        <section className="relative w-full border-y border-white/5 bg-background/50 backdrop-blur-sm overflow-hidden py-4">
            <div className="flex w-full whitespace-nowrap overflow-hidden mask-fade-sides">
                <div className="flex animate-marquee gap-16 min-w-full items-center justify-around px-8">
                    {TECHNOLOGIES.map((tech, i) => (
                        <span key={i} className="text-xl font-bold font-mono text-muted-foreground/50 flex items-center gap-4">
                            <span className="w-2 h-2 rounded-full bg-primary/50" />
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex animate-marquee gap-16 min-w-full items-center justify-around px-8 absolute top-4 left-full">
                    {TECHNOLOGIES.map((tech, i) => (
                        <span key={`clone-${i}`} className="text-xl font-bold font-mono text-muted-foreground/50 flex items-center gap-4">
                            <span className="w-2 h-2 rounded-full bg-primary/50" />
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}
