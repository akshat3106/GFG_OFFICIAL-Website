"use client"

import { useState } from "react"
import { Check, Copy, Terminal, ChevronRight, Command, Linkedin, Mail, Twitter, Instagram, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function InstallCTA() {
    const [copied, setCopied] = useState(false)

    const copyCode = () => {
        navigator.clipboard.writeText("npm join gfg-iter")
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const socialLinks = [
        { icon: MessageCircle, href: "https://chat.whatsapp.com/Hr0puwutetlK6dc1MTXXJZ", label: "WhatsApp", color: "hover:text-green-500" },
        { icon: Instagram, href: "https://www.instagram.com/p/DShF7VrgI0L/?igsh=MWI3NTVyN250Z21kaA==", label: "Instagram", color: "hover:text-pink-500" },
        { icon: Linkedin, href: "https://www.linkedin.com/company/gfgiter/posts/?feedView=all", label: "LinkedIn", color: "hover:text-blue-500" },
        { icon: Mail, href: "mailto:gfgiter@gmail.com", label: "Email", color: "hover:text-red-500" },
        { icon: Twitter, href: "https://x.com/gfg_iter", label: "X (Twitter)", color: "hover:text-sky-500" },
    ]

    return (
        <section id="join" className="py-32 relative overflow-hidden flex items-center justify-center bg-background border-t border-border">
            {/* Grid Background */}
            <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

            <div className="container relative z-10 text-center px-4">
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="relative p-1 bg-gradient-to-r from-border via-primary/20 to-border rounded-xl">
                        <div className="bg-card rounded-xl p-12 md:p-20 relative overflow-hidden border border-border">

                            {/* Header */}
                            <div className="flex flex-col items-center relative z-10 mb-10">
                                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                                    <Command className="w-8 h-8 text-primary" />
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-foreground mb-4 tracking-tight">
                                    Initialize <span className="text-primary">Sequence</span>
                                </h2>
                                <p className="text-muted-foreground max-w-lg mx-auto text-lg leading-relaxed font-mono text-sm">
                                    Join the network. Access high-level protocols, mentorship nodes, and collaborative workspaces.
                                </p>
                            </div>

                            {/* Command Box */}
                            <div className="relative group w-full max-w-md mx-auto mb-16">
                                <div
                                    onClick={copyCode}
                                    className="relative flex items-center justify-between gap-4 bg-black border border-border rounded-lg px-6 py-4 cursor-pointer hover:border-primary/50 transition-all shadow-tech-hover"
                                >
                                    <div className="flex items-center gap-3 font-mono text-lg">
                                        <ChevronRight className="w-5 h-5 text-primary animate-pulse" />
                                        <span className="text-foreground">npm join gfg-iter</span>
                                    </div>

                                    <div className={cn(
                                        "p-2 rounded transition-all",
                                        copied ? "bg-green-500/20 text-green-500" : "bg-secondary/20 text-muted-foreground group-hover:text-foreground"
                                    )}>
                                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                    </div>
                                </div>
                                <div className="mt-3 text-xs text-muted-foreground font-mono opacity-60">
                                    * Protocol v2.5.0 required for initialization
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="pt-10 border-t border-border/50">
                                <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6">Establish Connection</p>
                                <div className="flex justify-center gap-6">
                                    {socialLinks.map((social, i) => (
                                        <a
                                            key={i}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={cn("p-2 text-muted-foreground transition-all transform hover:scale-110", social.color)}
                                            aria-label={social.label}
                                        >
                                            <social.icon className="w-6 h-6" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
