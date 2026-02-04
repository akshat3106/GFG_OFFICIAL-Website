"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { CrystalCard } from "@/components/ui/crystal-card"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Megaphone, Send, History, Globe, Radio, Signal, Terminal } from "lucide-react"
import { toast } from "sonner"
import { createClient } from "@/utils/supabase/client"
import { Badge } from "@/components/ui/badge"

interface BroadcastLog {
    id: string
    message: string
    audience: string
    timestamp: string
}

export default function BroadcastsPage() {
    const [message, setMessage] = useState("")
    const [audience, setAudience] = useState("members")
    const [isSending, setIsSending] = useState(false)
    const [history, setHistory] = useState<BroadcastLog[]>([])

    const supabase = createClient()

    useEffect(() => {
        fetchHistory()
    }, [])

    const fetchHistory = async () => {
        const { data } = await supabase.from('broadcasts').select('*').order('timestamp', { ascending: false })
        if (data) setHistory(data as BroadcastLog[])
    }

    const handleSend = async () => {
        if (!message.trim()) {
            toast.error("Please enter a message.")
            return
        }

        setIsSending(true)
        try {

            const { error } = await supabase.from('broadcasts').insert({
                message,
                audience: audience === 'members' ? 'internal' : 'public'
            })

            if (error) throw error

            toast.success(`Broadcast sent to ${audience}!`)
            setMessage("")
            fetchHistory()
        } catch (error) {
            toast.error(error instanceof Error ? error.message : "Failed to send broadcast.")
        } finally {
            setIsSending(false)
        }
    }

    return (
        <div className="space-y-6 animate-in fade-in duration-700">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
                <div className="space-y-1">
                    <h2 className="text-3xl font-black uppercase tracking-widest text-white flex items-center gap-3">
                        <Signal className="h-8 w-8 text-primary" />
                        COMMS_UPLINK
                    </h2>
                    <p className="text-zinc-500 font-mono text-sm">Transmitting to global or secure channels.</p>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-12">

                {/* Transmission Panel (Span 7) */}
                <div className="md:col-span-7">
                    <CrystalCard className="h-full flex flex-col p-0">
                        <div className="p-6 border-b border-white/5 bg-white/5">
                            <h3 className="font-bold text-lg text-white flex items-center gap-2 uppercase tracking-wide">
                                <Radio className="w-5 h-5 text-primary" />
                                New Transmission
                            </h3>
                        </div>
                        <div className="p-6 space-y-8 flex-1">
                            {/* Audience Selector */}
                            <div className="space-y-4">
                                <Label className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">Select Frequency</Label>
                                <RadioGroup
                                    value={audience}
                                    onValueChange={setAudience}
                                    className="grid grid-cols-2 gap-4"
                                >
                                    <div>
                                        <RadioGroupItem value="public" id="public" className="sr-only" />
                                        <Label
                                            htmlFor="public"
                                            className={`flex flex-col items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-black/40 p-6 hover:bg-zinc-900/50 cursor-pointer transition-all ${audience === 'public' ? 'border-primary/50 bg-primary/10 shadow-[0_0_20px_rgba(34,197,94,0.1)]' : ''}`}
                                        >
                                            <Globe className={`h-8 w-8 ${audience === 'public' ? 'text-primary' : 'text-zinc-600'}`} />
                                            <span className={`font-bold uppercase tracking-wider text-xs font-mono ${audience === 'public' ? 'text-primary' : 'text-zinc-500'}`}>Public</span>
                                        </Label>
                                    </div>
                                    <div>
                                        <RadioGroupItem value="members" id="members" className="sr-only" />
                                        <Label
                                            htmlFor="members"
                                            className={`flex flex-col items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-black/40 p-6 hover:bg-zinc-900/50 cursor-pointer transition-all ${audience === 'members' ? 'border-primary/50 bg-primary/10 shadow-[0_0_20px_rgba(34,197,94,0.1)]' : ''}`}
                                        >
                                            <Megaphone className={`h-8 w-8 ${audience === 'members' ? 'text-primary' : 'text-zinc-600'}`} />
                                            <span className={`font-bold uppercase tracking-wider text-xs font-mono ${audience === 'members' ? 'text-primary' : 'text-zinc-500'}`}>Internal</span>
                                        </Label>
                                    </div>
                                </RadioGroup>
                            </div>

                            {/* Message Input */}
                            <div className="space-y-4">
                                <Label htmlFor="message" className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">Payload</Label>
                                <div className="relative group/input">
                                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-zinc-700 group-hover/input:border-primary transition-colors" />
                                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-zinc-700 group-hover/input:border-primary transition-colors" />
                                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-zinc-700 group-hover/input:border-primary transition-colors" />
                                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-zinc-700 group-hover/input:border-primary transition-colors" />

                                    <Textarea
                                        id="message"
                                        placeholder="> Input message content here..."
                                        className="min-h-[200px] resize-none bg-black/50 border-zinc-800 focus:border-primary/50 font-mono text-zinc-300 p-4 text-xs"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                </div>
                            </div>

                            <Button
                                className="w-full h-12 bg-primary text-black hover:bg-primary/80 font-bold tracking-wide uppercase border border-primary/50 shadow-[0_0_20px_rgba(34,197,94,0.2)]"
                                onClick={handleSend}
                                disabled={isSending}
                            >
                                {isSending ? "Transmitting..." : <div className="flex items-center gap-2"><Send className="h-4 w-4" /> Initialize Broadcast</div>}
                            </Button>
                        </div>
                    </CrystalCard>
                </div>

                {/* History Log (Span 5) */}
                <div className="md:col-span-5">
                    <CrystalCard className="h-full flex flex-col p-0">
                        <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/5">
                            <h3 className="font-bold text-lg text-white flex items-center gap-2 uppercase tracking-wide">
                                <History className="h-5 w-5 text-zinc-400" />
                                Logs
                            </h3>
                            <Badge variant="outline" className="text-[10px] border-zinc-800 text-zinc-500 font-mono">ENCRYPTED</Badge>
                        </div>
                        <div className="p-4 space-y-3 max-h-[600px] overflow-y-auto custom-scrollbar">
                            {history.map((item) => (
                                <div key={item.id} className="p-4 rounded-xl bg-black/40 border border-zinc-800 hover:border-primary/20 transition-colors group">
                                    <div className="flex justify-between items-start mb-2">
                                        <Badge
                                            variant="outline"
                                            className={`text-[10px] uppercase font-bold border-0 font-mono ${item.audience === 'public' ? 'bg-blue-500/10 text-blue-400' : 'bg-primary/10 text-primary'}`}
                                        >
                                            {item.audience === 'public' ? 'Globe (All)' : 'Internal'}
                                        </Badge>
                                        <span className="text-[10px] font-mono text-zinc-600">{new Date(item.timestamp).toLocaleTimeString()}</span>
                                    </div>
                                    <p className="text-xs text-zinc-400 font-mono leading-relaxed border-l-2 border-zinc-800 pl-3 group-hover:border-primary/50 transition-colors line-clamp-3">
                                        {item.message}
                                    </p>
                                    <div className="mt-2 text-[10px] text-zinc-800 font-mono group-hover:text-zinc-600 transition-colors">
                                        ID: {item.id.slice(0, 8)}...
                                    </div>
                                </div>
                            ))}
                            {history.length === 0 && (
                                <div className="flex flex-col items-center justify-center py-12 text-zinc-700 gap-2">
                                    <div className="h-2 w-2 rounded-full bg-zinc-800 animate-pulse" />
                                    <span className="text-[10px] font-mono uppercase tracking-widest">Awaiting Transmission</span>
                                </div>
                            )}
                        </div>
                    </CrystalCard>
                </div>

            </div>
        </div>
    )
}
