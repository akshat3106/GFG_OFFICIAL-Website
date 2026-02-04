import { cn } from "@/lib/utils"
import { HTMLMotionProps, motion } from "framer-motion"

interface GlassCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode
    className?: string
    gradient?: string
    hoverEffect?: boolean
}

export function GlassCard({
    children,
    className,
    gradient = "from-green-500/10 to-emerald-500/10",
    hoverEffect = true,
    ...props
}: GlassCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={hoverEffect ? { y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)" } : {}}
            transition={{ duration: 0.3 }}
            className={cn(
                "relative overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-md",
                "shadow-lg",
                className
            )}
            {...props}
        >
            {/* Gradient Background */}
            <div className={cn("absolute inset-0 bg-gradient-to-br opacity-50 pointer-events-none", gradient)} />

            {/* Content */}
            <div className="relative z-10 p-8">
                {children}
            </div>

            {/* Shine Effect */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 h-32 w-32 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 h-32 w-32 rounded-full bg-white/5 blur-3xl" />
        </motion.div>
    )
}
