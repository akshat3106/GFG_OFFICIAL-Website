"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Command as CommandPrimitive } from "cmdk"
import { Search, Calculator, Calendar, CreditCard, Settings, User, Trophy, Flame, LayoutDashboard, Code } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function CommandPalette() {
    const [open, setOpen] = React.useState(false)
    const router = useRouter()

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    const runCommand = React.useCallback((command: () => unknown) => {
        setOpen(false)
        command()
    }, [])

    return (
        <AnimatePresence>
            {open && (
                <div className="fixed inset-0 z-[99999] flex items-start justify-center pt-[20vh] backdrop-blur-sm transition-all duration-300">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/50"
                        onClick={() => setOpen(false)}
                    />

                    {/* Dialog */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="relative w-full max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-black/80 shadow-2xl shadow-indigo-500/10 ring-1 ring-white/10 backdrop-blur-2xl"
                    >
                        <CommandPrimitive className="flex h-full w-full flex-col overflow-hidden rounded-xl bg-transparent text-white">
                            <div className="flex items-center border-b border-white/10 px-4" cmdk-input-wrapper="">
                                <Search className="mr-2 h-5 w-5 shrink-0 opacity-50" />
                                <CommandPrimitive.Input
                                    placeholder="Type a command or search..."
                                    className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-neutral-500 disabled:cursor-not-allowed disabled:opacity-50"
                                />
                            </div>
                            <CommandPrimitive.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                                <CommandPrimitive.Empty className="py-6 text-center text-sm text-neutral-500">
                                    No results found.
                                </CommandPrimitive.Empty>

                                <CommandPrimitive.Group heading="Navigation" className="mb-2 px-2 text-xs font-medium text-neutral-500">
                                    <CommandItem onSelect={() => runCommand(() => router.push('/dashboard'))}>
                                        <LayoutDashboard className="mr-2 h-4 w-4" />
                                        <span>Dashboard</span>
                                    </CommandItem>
                                    <CommandItem onSelect={() => runCommand(() => router.push('/#daily-challenge'))}>
                                        <Code className="mr-2 h-4 w-4" />
                                        <span>Problem of the Day</span>
                                    </CommandItem>
                                    <CommandItem onSelect={() => runCommand(() => router.push('/leaderboard'))}>
                                        <Trophy className="mr-2 h-4 w-4" />
                                        <span>Leaderboard</span>
                                    </CommandItem>
                                </CommandPrimitive.Group>

                                <CommandPrimitive.Group heading="Tools" className="mb-2 px-2 text-xs font-medium text-neutral-500">
                                    <CommandItem onSelect={() => runCommand(() => console.log("Focus Mode"))}>
                                        <Flame className="mr-2 h-4 w-4" />
                                        <span>Start Focus Mode</span>
                                    </CommandItem>
                                    <CommandItem onSelect={() => runCommand(() => console.log("Theme"))}>
                                        <Settings className="mr-2 h-4 w-4" />
                                        <span>Toggle Theme</span>
                                    </CommandItem>
                                </CommandPrimitive.Group>

                                <CommandPrimitive.Group heading="Team" className="px-2 text-xs font-medium text-neutral-500">
                                    <CommandItem onSelect={() => runCommand(() => router.push('/team'))}>
                                        <User className="mr-2 h-4 w-4" />
                                        <span>View Team</span>
                                    </CommandItem>
                                </CommandPrimitive.Group>

                            </CommandPrimitive.List>
                        </CommandPrimitive>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}

function CommandItem({ children, onSelect }: { children: React.ReactNode, onSelect: () => void }) {
    return (
        <CommandPrimitive.Item
            onSelect={onSelect}
            className="relative flex cursor-default select-none items-center rounded-lg px-3 py-2 text-sm text-neutral-400 outline-none hover:bg-white/10 hover:text-white aria-selected:bg-white/10 aria-selected:text-white transition-colors data-[selected=true]:bg-white/10 data-[selected=true]:text-white"
        >
            {children}
        </CommandPrimitive.Item>
    )
}
