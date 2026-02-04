"use client"

import { Button } from "@/components/ui/button"
import { CrystalCard } from "@/components/ui/crystal-card"
import { EventForm } from "@/components/features/EventForm"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Plus, Eye, EyeOff, Trash2, Edit, CalendarDays, Clock, Users, ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import { createClient } from "@/utils/supabase/client"

export default function EventsPage() {
    const [isOpen, setIsOpen] = useState(false)
    const [events, setEvents] = useState<any[]>([])
    const supabase = createClient()

    const fetchEvents = async () => {
        const { data } = await supabase.from('events').select('*').order('date', { ascending: true })
        if (data) setEvents(data)
    }

    useEffect(() => {
        fetchEvents()
    }, [])

    return (
        <div className="space-y-6 animate-in fade-in duration-700">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
                <div className="space-y-1">
                    <h2 className="text-3xl font-bold flex items-center gap-3 font-heading tracking-wide text-white">
                        <CalendarDays className="h-8 w-8 text-primary" />
                        EVENT_PROTOCOLS
                    </h2>
                    <p className="text-zinc-400 font-mono text-xs uppercase tracking-wider">Manage timeline and scheduled directives.</p>
                </div>

                <div className="flex items-center gap-3">
                    <Dialog open={isOpen} onOpenChange={setIsOpen}>
                        <DialogTrigger asChild>
                            <Button className="gap-2 bg-primary text-black font-bold uppercase tracking-wider border border-primary/50 shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] transition-all">
                                <Plus className="h-4 w-4" /> Create Protocol
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[600px] bg-[#0a0a0c] border-white/10 text-white">
                            <DialogHeader>
                                <DialogTitle className="font-heading tracking-wide">New Event Protocol</DialogTitle>
                                <DialogDescription className="text-zinc-500 font-mono text-xs">
                                    Initiate a new gathering directive.
                                </DialogDescription>
                            </DialogHeader>
                            <EventForm onSuccess={() => {
                                setIsOpen(false)
                                fetchEvents()
                            }} />
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            {/* Events List */}
            <CrystalCard className="p-0 overflow-hidden">
                <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/5">
                    <div className="flex items-center gap-2 text-xs font-bold font-mono text-zinc-400 uppercase tracking-widest">
                        <div>Active Schedules</div>
                    </div>
                    <Badge variant="outline" className="font-mono text-primary border-primary/20 bg-primary/5">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2" />
                        Total: {events.length}
                    </Badge>
                </div>

                <div className="divide-y divide-white/5">
                    {events.map((event) => (
                        <div key={event.id} className="p-6 hover:bg-white/5 transition-colors group flex items-center justify-between">
                            <div className="flex items-start gap-6">
                                {/* Date Box */}
                                <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-black/40 border border-white/10 group-hover:border-primary/30 transition-colors w-20 h-20 text-center">
                                    <span className="text-xs text-zinc-500 font-mono uppercase">{new Date(event.date).toLocaleString('default', { month: 'short' })}</span>
                                    <span className="text-2xl font-bold text-white font-heading">{new Date(event.date).getDate()}</span>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors flex items-center gap-2">
                                        {event.title}
                                        {event.visibility === 'public' ? (
                                            <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 border-blue-500/20 text-[10px] h-5 px-1.5 font-mono">PUB</Badge>
                                        ) : (
                                            <Badge variant="secondary" className="bg-amber-500/10 text-amber-400 border-amber-500/20 text-[10px] h-5 px-1.5 font-mono">INT</Badge>
                                        )}
                                    </h3>

                                    <div className="flex items-center gap-4 mt-2 text-xs text-zinc-500 font-mono">
                                        <div className="flex items-center gap-1.5">
                                            <Clock className="w-3.5 h-3.5" />
                                            {new Date(event.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Users className="w-3.5 h-3.5" />
                                            Unknown Attendees
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-primary hover:bg-primary/10">
                                    <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-red-400 hover:bg-red-900/20" onClick={async () => {
                                    if (!confirm('Abort protocol?')) return
                                    await supabase.from('events').delete().eq('id', event.id)
                                    fetchEvents()
                                }}>
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    ))}
                    {events.length === 0 && (
                        <div className="p-12 text-center text-zinc-500 flex flex-col items-center justify-center gap-2 font-mono text-sm">
                            <div className="h-2 w-2 rounded-full bg-zinc-800 animate-pulse" />
                            NO_ACTIVE_PROTOCOLS
                        </div>
                    )}
                </div>
            </CrystalCard>
        </div>
    )
}
