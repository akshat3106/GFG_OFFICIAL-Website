"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Play, Pause, RotateCcw, Timer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"

export function PomodoroTimer() {
    const [timeLeft, setTimeLeft] = React.useState(25 * 60)
    const [isActive, setIsActive] = React.useState(false)
    const [mode, setMode] = React.useState<'focus' | 'break'>('focus')

    React.useEffect(() => {
        let interval: NodeJS.Timeout | null = null

        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prev) => prev - 1)
            }, 1000)
        } else if (timeLeft === 0) {
            setIsActive(false)
            // Play sound or notify
        }

        return () => {
            if (interval) clearInterval(interval)
        }
    }, [isActive, timeLeft])

    const toggleTimer = () => setIsActive(!isActive)

    const resetTimer = () => {
        setIsActive(false)
        setTimeLeft(mode === 'focus' ? 25 * 60 : 5 * 60)
    }

    const switchMode = (newMode: 'focus' | 'break') => {
        setMode(newMode)
        setIsActive(false)
        setTimeLeft(newMode === 'focus' ? 25 * 60 : 5 * 60)
    }

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }

    const progress = React.useMemo(() => {
        const total = mode === 'focus' ? 25 * 60 : 5 * 60
        return ((total - timeLeft) / total) * 100
    }, [timeLeft, mode])

    return (
        <GlassCard className="p-4 relative overflow-hidden group">
            {/* Background Gradient Animation */}
            <div className={`
                absolute inset-0 opacity-10 transition-colors duration-500
                ${mode === 'focus' ? 'bg-indigo-500' : 'bg-green-500'}
            `} />

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium text-white flex items-center gap-2">
                        <Timer className="w-4 h-4 text-indigo-400" />
                        Focus Mode
                    </h3>
                    <div className="flex gap-1">
                        <button
                            onClick={() => switchMode('focus')}
                            className={`px-2 py-1 text-[10px] rounded border transition-colors ${mode === 'focus' ? 'bg-indigo-500/20 border-indigo-500 text-white' : 'border-transparent text-zinc-500 hover:text-zinc-300'}`}
                        >
                            Focus
                        </button>
                        <button
                            onClick={() => switchMode('break')}
                            className={`px-2 py-1 text-[10px] rounded border transition-colors ${mode === 'break' ? 'bg-green-500/20 border-green-500 text-white' : 'border-transparent text-zinc-500 hover:text-zinc-300'}`}
                        >
                            Break
                        </button>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center py-2">
                    <div className="text-4xl font-mono font-bold text-white tracking-wider mb-4">
                        {formatTime(timeLeft)}
                    </div>

                    {/* Ring Progress using simple SVG or CSS */}
                    <div className="w-full h-1.5 bg-zinc-800 rounded-full mb-6 overflow-hidden">
                        <motion.div
                            className={`h-full rounded-full ${mode === 'focus' ? 'bg-indigo-500' : 'bg-green-500'}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ ease: "linear" }}
                        />
                    </div>

                    <div className="flex gap-3">
                        <Button
                            size="sm"
                            onClick={toggleTimer}
                            className={mode === 'focus' ? "bg-indigo-600 hover:bg-indigo-700" : "bg-green-600 hover:bg-green-700"}
                        >
                            {isActive ? <Pause className="w-4 h-4 mr-1" /> : <Play className="w-4 h-4 mr-1" />}
                            {isActive ? "Pause" : "Start"}
                        </Button>
                        <Button variant="outline" size="sm" onClick={resetTimer} className="bg-white/5 border-white/10">
                            <RotateCcw className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </GlassCard>
    )
}
