"use client"

import { SectionShell } from "@/components/layout/SectionShell"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Cpu, Database, Globe, Zap, Shield, Sparkles, Layers, Box, Heart, Laptop } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const projects = [
    {
        title: "Bhumicare",
        category: "Social Impact",
        icon: Heart,
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800&h=600",
        desc: "Sustainable environmental impact platform connecting volunteers with eco-initiatives.",
        tech: ["React", "Node.js", "MongoDB"],
        size: "large"
    },
    {
        title: "Nyrama",
        category: "Deep Tech",
        icon: Zap,
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800&h=600",
        desc: "Advanced neural network architecture for real-time pattern recognition.",
        tech: ["Python", "TensorFlow", "FastAPI"],
        size: "medium"
    },
    {
        title: "Test Your Frontend Skills",
        category: "Education",
        icon: Laptop,
        image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&q=80&w=800&h=600",
        desc: "Interactive quiz and coding challenges to benchmark your frontend proficiency.",
        tech: ["Vue.js", "Tailwind", "Jest"],
        size: "medium"
    },
    {
        title: "Hyper Ledger",
        category: "Blockchain",
        icon: Shield,
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800&h=600",
        desc: "Decentralized identity verification protocol.",
        tech: ["Solidity", "Next.js", "IPFS"],
        size: "medium" // Added a 4th one for the grid
    }
]

export function InnovationForge() {
    return (
        <SectionShell id="innovation" badge="Project Gallery" title="Innovation_Forge" subtitle="Deployed solutions from the student branch.">

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px] max-w-7xl mx-auto">

                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className={cn(
                            "group relative overflow-hidden bg-card border border-border transition-all duration-500 hover:border-primary/50",
                            project.size === "large" ? "md:col-span-2 md:row-span-2" : "md:col-span-2 md:row-span-1"
                        )}
                    >
                        {/* Background Image with Overlay */}
                        <div className="absolute inset-0 z-0">
                            <div className="absolute inset-0 bg-background/80 group-hover:bg-background/60 transition-colors z-10" />
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                            />
                        </div>

                        {/* Content */}
                        <div className="relative z-20 h-full flex flex-col justify-between p-6 md:p-8">

                            {/* Top Bar */}
                            <div className="flex justify-between items-start">
                                <Badge variant="outline" className="bg-background/50 backdrop-blur border-white/10 text-muted-foreground font-mono">
                                    {project.category}
                                </Badge>
                                <div className="p-2 bg-background/50 backdrop-blur rounded-full border border-white/10 text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors cursor-pointer">
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                            </div>

                            {/* Bottom Info */}
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <project.icon className="w-6 h-6 text-primary" />
                                    <h3 className="text-2xl md:text-3xl font-bold font-space-grotesk text-foreground">
                                        {project.title}
                                    </h3>
                                </div>

                                <p className="text-muted-foreground line-clamp-2 max-w-md mb-4 text-sm font-medium">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="text-xs font-mono text-muted-foreground bg-secondary/50 px-2 py-1 border border-white/5">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Hover Grid Effect */}
                        <div className="absolute inset-0 grid-bg opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none" />

                        {/* Frame Corners */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/30 group-hover:border-primary transition-colors" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary/30 group-hover:border-primary transition-colors" />

                    </motion.div>
                ))}

                {/* Submit Project Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="md:col-span-2 md:row-span-1 group relative overflow-hidden bg-secondary/5 border border-dashed border-border hover:border-primary/50 transition-all duration-300 flex flex-col items-center justify-center text-center p-8 gap-4 cursor-pointer"
                >
                    <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <Layers className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-foreground">Submit Your Project</h3>
                        <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                            Have a project that pushes boundaries? Deploy it to the Forge.
                        </p>
                    </div>
                    <Badge className="bg-primary text-primary-foreground hover:bg-primary/90 mt-2">Start Submission</Badge>
                </motion.div>

            </div>
        </SectionShell>
    )
}
