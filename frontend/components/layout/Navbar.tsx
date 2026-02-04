"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Menu, X, Terminal, ChevronRight, LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { label: "Home", href: "/", id: "01" },
        { label: "Innovations", href: "#innovation", id: "02" },
        { label: "Challenges", href: "#potd", id: "03" },
        { label: "Events", href: "#events", id: "04" },
        { label: "Team", href: "#team", id: "05" },
    ]

    const scrollToSection = (e: React.MouseEvent, href: string) => {
        if (href.startsWith('#')) {
            e.preventDefault()
            const element = document.querySelector(href)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
                setIsOpen(false)
            }
        }
    }

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 40, damping: 20 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6"
        >
            <div
                className={cn(
                    "relative transition-all duration-500 ease-out flex items-center justify-between",
                    scrolled
                        ? "w-[95%] md:w-[85%] lg:w-[1200px] bg-background/90 backdrop-blur-md border border-border/50 shadow-tech rounded-none px-6 py-3"
                        : "w-full max-w-7xl px-8 py-4 bg-transparent border-transparent"
                )}
            >
                {/* Tech Corners for Scrolled State */}
                {scrolled && (
                    <>
                        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary" />
                        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary" />
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary" />
                    </>
                )}

                {/* Logo Area */}
                <div
                    className="flex items-center gap-3 cursor-pointer group"
                    onClick={() => router.push('/')}
                >
                    <div className="w-10 h-10 flex items-center justify-center bg-primary text-primary-foreground font-mono font-bold text-lg">
                        <span>&gt;_</span>
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="font-bold text-lg tracking-tight font-space-grotesk group-hover:text-primary transition-colors">
                            GFG<span className="text-primary">.ITER</span>
                        </span>
                        <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">
                            Sys.Ver.2.0
                        </span>
                    </div>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="group relative text-sm font-medium text-muted-foreground hover:text-primary transition-colors font-mono"
                        >
                            <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary font-bold content-['>']">
                                &gt;
                            </span>
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <Link href="/login" className="hidden md:block">
                        <Button variant="ghost" size="sm" className="font-mono text-muted-foreground hover:text-primary hover:bg-primary/10 gap-2">
                            <LogIn className="w-4 h-4" />
                            Login
                        </Button>
                    </Link>

                    <Link href="/join" className="hidden md:block">
                        <button className="relative px-6 py-2 bg-secondary text-secondary-foreground text-sm font-mono uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300 border border-transparent hover:border-primary/50 group">
                            <span className="mr-2 opacity-50 group-hover:opacity-100">[</span>
                            Join_Chapter
                            <span className="ml-2 opacity-50 group-hover:opacity-100">]</span>
                        </button>
                    </Link>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-24 left-4 right-4 p-0 bg-card border border-border shadow-tech md:hidden z-50 overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-primary/20">
                            <div className="h-full bg-primary/50 w-1/3 animate-scanline" />
                        </div>
                        <div className="flex flex-col">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className="group flex items-center justify-between px-6 py-4 border-b border-border/50 hover:bg-secondary/50 transition-colors"
                                >
                                    <span className="font-mono text-muted-foreground group-hover:text-primary transition-colors">
                                        <span className="text-xs mr-3 opacity-50">{link.id}</span>
                                        {link.label}
                                    </span>
                                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                </Link>
                            ))}
                        </div>
                        <div className="grid grid-cols-2 gap-px bg-border/50">
                            <Link href="/login" className="block w-full text-center py-4 bg-card text-muted-foreground font-mono uppercase text-sm hover:text-primary hover:bg-secondary/50 transition-colors">
                                Login_ID
                            </Link>
                            <Link href="/join" className="block w-full text-center py-4 bg-primary/10 text-primary font-mono uppercase text-sm font-bold tracking-wider hover:bg-primary/20 transition-colors">
                                Join_Us
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}
