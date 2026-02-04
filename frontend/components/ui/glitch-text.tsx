"use client"

import { cn } from "@/lib/utils"

export function GlitchText({ text, className }: { text: string, className?: string }) {
    return (
        <div className={cn("relative inline-block group", className)}>
            <span className="relative z-10">{text}</span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-primary opacity-0 group-hover:opacity-70 group-hover:animate-glitch-1 clip-path-inset-1">
                {text}
            </span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-red-500 opacity-0 group-hover:opacity-70 group-hover:animate-glitch-2 clip-path-inset-2">
                {text}
            </span>
        </div>
    )
}
