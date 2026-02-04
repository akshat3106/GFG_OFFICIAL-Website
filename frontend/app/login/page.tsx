"use client"

import { useState } from "react"
import { createClient } from "@/utils/supabase/client"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { User, Key, ScanLine, ArrowRight, ChevronRight, Hexagon, Shield, Lock } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { NetworkBackground } from "@/components/ui/network-background"
import { GlitchText } from "@/components/ui/glitch-text"

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [stage, setStage] = useState<'idle' | 'scanning' | 'granted'>('idle')
    const router = useRouter()
    const supabase = createClient()

    const handleLogin = async (e?: React.FormEvent) => {
        e?.preventDefault()
        if (!email || !password) {
            toast.error("ACCESS DENIED", { description: "MISSING CREDENTIALS" })
            return
        }

        setLoading(true)
        setStage('scanning')

        try {
            await new Promise(r => setTimeout(r, 1500))

            const { error } = await supabase.auth.signInWithPassword({
                email,
                password
            })

            if (error) throw error

            setStage('granted')
            toast.success("IDENTITY VERIFIED", { description: "WELCOME BACK, OPERATOR" })

            const { data: { user } } = await supabase.auth.getUser()
            setTimeout(() => {
                router.push(user?.role === 'lead' ? "/admin/dashboard" : "/dashboard")
            }, 1000)

        } catch (error: any) {
            setStage('idle')
            toast.error("AUTHENTICATION FAILED", { description: error.message.toUpperCase() })
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-background font-sans relative overflow-hidden selection:bg-primary/30 selection:text-primary">

            {/* --- BACK BUTTON --- */}
            <Link href="/" className="absolute top-8 left-8 z-50 flex items-center gap-2 text-zinc-500 hover:text-white transition-colors group">
                <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                    <ArrowRight className="w-5 h-5 rotate-180" />
                </div>
                <span className="text-xs font-mono tracking-widest uppercase">Return to Base</span>
            </Link>

            {/* --- BACKGROUND LAYERS --- */}
            <div className="absolute inset-0 z-0">
                <NetworkBackground />
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_90%)] pointer-events-none z-0" />

            {/* Spinning Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full animate-[spin_60s_linear_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]" />

            <div className="relative z-10 w-full max-w-4xl p-6 flex flex-col md:flex-row items-center gap-12">

                {/* --- LEFT SIDE: WELCOME VISUAL --- */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hidden md:flex flex-col items-start gap-6 flex-1"
                >
                    <div className="relative">
                        <div className="absolute -left-4 -top-4 w-12 h-12 border-t-2 border-l-2 border-primary/50" />
                        <h1 className="text-6xl font-black text-white leading-tight">
                            ENTER THE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">NETWORK</span>
                        </h1>
                    </div>
                    <p className="text-zinc-400 text-lg max-w-sm">
                        Secure access point for GFG Campus Body officers. Identify yourself to proceed.
                    </p>
                    <div className="flex gap-4">
                        <div className="px-4 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm text-xs font-mono text-zinc-300">
                            SECURE_CONNECTION
                        </div>
                        <div className="px-4 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm text-xs font-mono text-zinc-300 flex items-center gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" /> SYSTEM_ONLINE
                        </div>
                    </div>
                </motion.div>

                {/* --- RIGHT SIDE: HOLOGRAPHIC PRISM FORM --- */}
                <motion.div
                    initial={{ opacity: 0, x: 50, rotateY: 20 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex-1"
                    style={{ perspective: 1000 }}
                >
                    {/* The Prism Container */}
                    <div className="relative glass-card bg-background/60 backdrop-blur-xl border border-white/10 p-8 rounded-[40px] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden group hover:border-primary/30 transition-colors duration-500">
                        {/* Internal Glass Reflection */}
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                        {/* Decorative Shape */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse" />

                        <div className="relative z-10">
                            {/* Header */}
                            <div className="flex flex-col items-center mb-8">
                                <div className="w-16 h-16 relative mb-4">
                                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                                    <Image src="/gfg-official-logo.png" alt="GFG" fill className="object-contain relative z-10" />
                                </div>
                                <h2 className="text-2xl font-bold text-white tracking-widest font-heading">GATEKEEPER</h2>
                                <p className="text-[10px] text-zinc-500 font-mono tracking-widest mt-1">
                                    AUTHENTICATION REQUIRED
                                </p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleLogin} className="space-y-6">
                                <div className="space-y-4">
                                    <div className="relative group/input">
                                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-primary group-focus-within/input:h-full transition-all duration-300" />
                                        <input
                                            type="text"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="OPERATOR ID"
                                            className="w-full bg-black/40 border-b border-white/10 px-6 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary/50 focus:bg-white/5 transition-all font-mono text-sm"
                                        />
                                        <User className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600 group-focus-within/input:text-primary transition-colors" />
                                    </div>
                                    <div className="relative group/input">
                                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-primary group-focus-within/input:h-full transition-all duration-300" />
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="ACCESS KEY"
                                            className="w-full bg-black/40 border-b border-white/10 px-6 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary/50 focus:bg-white/5 transition-all font-mono text-sm"
                                        />
                                        <Key className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600 group-focus-within/input:text-primary transition-colors" />
                                    </div>
                                </div>

                                <Button
                                    className="w-full h-14 bg-gradient-to-r from-primary to-emerald-600 text-black font-bold tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.3)] mt-2"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <span className="flex items-center gap-2">
                                            <ScanLine className="w-4 h-4 animate-spin" /> SCANNING...
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-2">
                                            INITIATE LINK <ChevronRight className="w-4 h-4" />
                                        </span>
                                    )}
                                </Button>
                            </form>

                            {/* Footer Status */}
                            <div className="mt-8 flex justify-between items-center text-[10px] text-zinc-600 font-mono border-t border-white/5 pt-4">
                                <span className={stage !== 'idle' ? 'text-primary animate-pulse' : ''}>
                                    STATUS: {stage === 'idle' ? 'STANDBY' : stage === 'scanning' ? 'VERIFYING...' : 'GRANTED'}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Shield className="w-3 h-3" /> SECURE
                                </span>
                            </div>

                            {/* --- DEV CREDENTIALS HELPER (VISIBLE IN MOCK MODE) --- */}
                            <div className="mt-4 p-3 bg-yellow-500/5 rounded border border-yellow-500/10 text-[10px] font-mono text-zinc-500">
                                <div className="font-bold text-yellow-500/80 mb-2 uppercase flex items-center gap-2">
                                    <Lock className="w-3 h-3" /> Dev Access Keys
                                </div>
                                <div className="flex justify-between mb-1 items-center">
                                    <span>LEAD:</span>
                                    <button
                                        type="button"
                                        className="text-primary hover:text-white bg-primary/10 hover:bg-primary/20 px-2 py-0.5 rounded transition-colors"
                                        onClick={() => { setEmail('ADMIN001'); setPassword('adminpass') }}
                                    >
                                        Auto-Fill
                                    </button>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>MEMBER:</span>
                                    <button
                                        type="button"
                                        className="text-primary hover:text-white bg-primary/10 hover:bg-primary/20 px-2 py-0.5 rounded transition-colors"
                                        onClick={() => { setEmail('24e110a78'); setPassword('memberpass') }}
                                    >
                                        Auto-Fill
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}
