"use client"

import Link from "next/link";
import { Command, Github, Linkedin, Mail, Twitter, Globe, Cpu, Activity } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative bg-background pt-24 pb-12 overflow-hidden border-t border-border">
            {/* Background Grid */}
            <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

            <div className="container relative z-10 px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

                    {/* Brand Column (Span 5) */}
                    <div className="col-span-1 md:col-span-5 space-y-8 pr-8">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-primary flex items-center justify-center">
                                <Command className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold tracking-tight text-foreground font-space-grotesk">
                                    GeeksforGeeks
                                </span>
                                <span className="text-sm font-mono text-primary uppercase tracking-widest">
                                    ITER Student Chapter
                                </span>
                            </div>
                        </div>
                        <p className="text-muted-foreground max-w-md text-sm leading-relaxed font-normal">
                            Empowering the next generation of developers through competitive programming, open source contributions, and industry-standard technical workshops.
                        </p>

                        <div className="flex items-center gap-2">
                            <div className="h-px flex-1 bg-border" />
                            <span className="text-xs font-mono text-muted-foreground uppercase">Connect</span>
                            <div className="h-px flex-1 bg-border" />
                        </div>

                        <div className="flex gap-2">
                            {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                                <a key={i} href="#" className="h-10 w-10 flex items-center justify-center border border-border bg-secondary/10 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group">
                                    <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns (Span 7) */}
                    <div className="col-span-1 md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
                        {/* Column 1 */}
                        <div className="space-y-6">
                            <h4 className="font-mono text-sm font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
                                <span className="w-2 h-2 bg-primary rounded-full" />
                                Explore
                            </h4>
                            <ul className="space-y-3 text-sm text-muted-foreground font-medium">
                                {['Innovation Forge', 'Daily Challenges', 'Upcoming Events', 'Meet the Team'].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="hover:text-primary transition-colors flex items-center gap-2 group">
                                            <span className="w-1 h-1 bg-border group-hover:bg-primary transition-colors" />
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-6">
                            <h4 className="font-mono text-sm font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
                                <span className="w-2 h-2 bg-primary rounded-full" />
                                Resources
                            </h4>
                            <ul className="space-y-3 text-sm text-muted-foreground font-medium">
                                {['Learning Path', 'Code Library', 'Alumni Network', 'Membership'].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="hover:text-primary transition-colors flex items-center gap-2 group">
                                            <span className="w-1 h-1 bg-border group-hover:bg-primary transition-colors" />
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3 - Status */}
                        <div className="space-y-6 col-span-2 md:col-span-1">
                            <h4 className="font-mono text-sm font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
                                <Activity className="w-4 h-4 text-primary" />
                                System Status
                            </h4>
                            <div className="bg-secondary/20 border border-border p-4 space-y-3">
                                <div className="flex justify-between items-center text-xs font-mono">
                                    <span className="text-muted-foreground">Server</span>
                                    <span className="text-green-500">Online</span>
                                </div>
                                <div className="w-full h-1 bg-secondary rounded-full overflow-hidden">
                                    <div className="h-full w-[98%] bg-green-500" />
                                </div>
                                <div className="flex justify-between items-center text-xs font-mono pt-2 border-t border-border/50">
                                    <span className="text-muted-foreground">Version</span>
                                    <span className="text-foreground">v2.5.0-alpha</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-muted-foreground font-mono">
                        © 2025 GFG Student Chapter ITER. <span className="text-primary">All rights reserved.</span>
                    </p>
                    <div className="flex items-center gap-6 text-xs font-mono text-muted-foreground">
                        <span className="hover:text-foreground cursor-pointer transition-colors">Privacy Protocol</span>
                        <span className="hover:text-foreground cursor-pointer transition-colors">Terms of Op</span>
                        <span className="hover:text-foreground cursor-pointer transition-colors">Sitemap</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
