"use client"

import { SectionShell } from "@/components/layout/SectionShell"
import { Badge } from "@/components/ui/badge"
import { Github, Twitter, Linkedin, Plus, Fingerprint, Wifi, QrCode, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const teamMembers = [
    { name: "Subasis Mishra", role: "President", id: "01", skill: "Leadership" },
    { name: "Vivek Ranjan", role: "Vice President", id: "02", skill: "Management" },
    { name: "Raj Shehranshu", role: "Tech Lead", id: "03", skill: "Full Stack" },
    { name: "Runjhun Pradhan", role: "Design Lead", id: "04", skill: "UI/UX" },
    { name: "Mukesh Padhi", role: "Operation Lead", id: "05", skill: "Operations" },
    { name: "Ayush Pradhan", role: "PR & Outreach", id: "06", skill: "Marketing" },
]

export function TeamSection() {
    return (
        <SectionShell id="team" badge="Personnel" title="System_Architects" subtitle="Authorized personnel with commit access.">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {teamMembers.map((member, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative"
                    >
                        {/* Card Shape */}
                        <div className="relative overflow-hidden bg-card border border-border h-full transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-tech">

                            {/* Top Bar (Lanyard Hole Area) */}
                            <div className="h-12 bg-secondary/20 border-b border-border flex items-center justify-between px-4">
                                <div className="flex gap-2 items-center">
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Active Status</span>
                                </div>
                                <div className="w-8 h-1.5 rounded-full bg-black border border-border" />
                                <div className="text-[10px] font-mono text-muted-foreground">ID_NO.{member.id}</div>
                            </div>

                            {/* Main Content */}
                            <div className="p-6 flex flex-col items-center relative z-10">

                                {/* Photo Area */}
                                <div className="w-28 h-28 mb-6 relative">
                                    <div className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full animate-spin-slow group-hover:border-primary" />
                                    <div className="absolute inset-2 bg-gradient-to-b from-primary/20 to-transparent rounded-full overflow-hidden flex items-center justify-center">
                                        {/* Avatar Fallback with Initials - Accessible Alt */}
                                        <div className="text-3xl font-bold font-mono text-primary/50 select-none" role="img" aria-label={`Avatar for ${member.name}`}>
                                            {member.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 bg-background border border-border p-1.5 rounded-lg shadow-sm">
                                        <QrCode className="w-4 h-4 text-foreground" />
                                    </div>
                                </div>

                                {/* Identity */}
                                <div className="text-center w-full space-y-1 mb-6">
                                    <h3 className="text-lg font-bold font-space-grotesk text-foreground uppercase tracking-tight group-hover:text-primary transition-colors">
                                        {member.name}
                                    </h3>
                                    <div className="inline-flex items-center px-2 py-0.5 rounded border border-primary/20 bg-primary/5 text-primary text-xs font-mono uppercase tracking-widest">
                                        {member.role}
                                    </div>
                                </div>

                                {/* Data Grid */}
                                <div className="w-full grid grid-cols-2 gap-px bg-border mb-6">
                                    <div className="bg-card p-2 text-center">
                                        <div className="text-[10px] text-muted-foreground uppercase">Clearance</div>
                                        <div className="text-xs font-bold">Lvl 5</div>
                                    </div>
                                    <div className="bg-card p-2 text-center">
                                        <div className="text-[10px] text-muted-foreground uppercase">Specialty</div>
                                        <div className="text-xs font-bold">{member.skill}</div>
                                    </div>
                                </div>

                                {/* Social Access */}
                                <div className="flex gap-3 mt-auto">
                                    {[Github, Linkedin, Twitter].map((Icon, j) => (
                                        <a key={j} href="#" className="p-2 border border-border bg-secondary/10 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                                            <Icon className="w-4 h-4" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Holographic Overlay Effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                            {/* Scan line */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/50 opacity-0 group-hover:animate-scanline group-hover:opacity-50" />

                        </div>
                    </motion.div>
                ))}

                {/* Recruitment Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="group relative cursor-pointer"
                >
                    <div className="relative overflow-hidden bg-secondary/5 border border-dashed border-border h-full transition-all duration-300 hover:border-primary flex flex-col items-center justify-center gap-6 p-6">
                        <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Plus className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <div className="text-center">
                            <h3 className="text-lg font-bold font-space-grotesk text-foreground uppercase tracking-tight">Join The Squad</h3>
                            <p className="text-xs text-muted-foreground mt-2 max-w-[200px]">
                                Open positions available for developers, designers, and creators.
                            </p>
                        </div>
                        <Badge variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors uppercase tracking-widest text-[10px] py-2 px-4">
                            Apply_Now
                        </Badge>
                    </div>
                </motion.div>
            </div>

        </SectionShell>
    )
}
