"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { CrystalCard } from "@/components/ui/crystal-card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Save, Loader2, ClipboardCheck, UserCheck, AlertTriangle, ShieldCheck } from "lucide-react"
import { toast } from "sonner"
import { createClient } from "@/utils/supabase/client"

interface Event {
    id: string
    title: string
}

interface Member {
    id: string
    email: string
    role: string
    avatar_url?: string
    attended: number
    total: number
}

export default function AttendancePage() {
    const [selectedEvent, setSelectedEvent] = useState<string>("")
    const [searchQuery, setSearchQuery] = useState("")
    const [attendanceState, setAttendanceState] = useState<Record<string, boolean>>({})
    const [isSaving, setIsSaving] = useState(false)
    const [events, setEvents] = useState<Event[]>([])
    const [members, setMembers] = useState<Member[]>([])
    const supabase = createClient()

    // Filter members
    const filteredMembers = members.filter(m =>
        m.email.toLowerCase().includes(searchQuery.toLowerCase())
    )

    useEffect(() => {
        const fetchResources = async () => {
            const { data: eventsData } = await supabase.from('events').select('*')
            if (eventsData) setEvents(eventsData as Event[])

            const { data: usersData } = await supabase.from('users').select('*').in('role', ['member', 'lead'])
            if (usersData) setMembers(usersData as unknown as Member[])
        }
        fetchResources()
    }, [])

    const handleToggle = (userId: string, isPresent: boolean) => {
        setAttendanceState(prev => ({
            ...prev,
            [userId]: isPresent
        }))
    }

    const handleSave = async () => {
        if (!selectedEvent) {
            toast.error("Please select an event first.")
            return
        }

        setIsSaving(true)
        try {
            // Backend batch update
            const presenceUpdates = Object.entries(attendanceState).map(([userId, isPresent]) => ({
                user_id: userId,
                event_id: selectedEvent,
                status: isPresent ? 'present' : 'absent'
            }))

            // Upsert attendance
            const { error } = await supabase.from('attendance_logs').upsert(presenceUpdates, { onConflict: 'user_id, event_id' })

            if (error) throw error

            console.log("Saving attendance for event", selectedEvent, attendanceState)
            await new Promise(resolve => setTimeout(resolve, 1500))

            toast.success("Attendance saved successfully!")
            // Reset or update state logic here
        } catch (error) {
            toast.error("Failed to save attendance.")
        } finally {
            setIsSaving(false)
        }
    }

    // Calculate stats
    const getPercentage = (attended: number, total: number) => {
        if (total === 0) return 0
        return Math.round((attended / total) * 100)
    }

    const getStatusColor = (percent: number) => {
        if (percent >= 75) return "text-primary bg-primary/10 border-primary/20"
        if (percent >= 50) return "text-yellow-400 bg-yellow-500/10 border-yellow-500/20"
        return "text-red-400 bg-red-500/10 border-red-500/20"
    }

    return (
        <div className="space-y-6 animate-in fade-in duration-700">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
                <div className="space-y-1">
                    <h2 className="text-3xl font-black uppercase tracking-widest text-white flex items-center gap-3">
                        <ClipboardCheck className="h-8 w-8 text-primary" />
                        ATTENDANCE_LOG
                    </h2>
                    <p className="text-zinc-500 font-mono text-sm">Verify presence and engagement metrics.</p>
                </div>

                <div className="flex items-center gap-2 bg-black/50 p-2 rounded-xl border border-zinc-800">
                    <Select value={selectedEvent} onValueChange={setSelectedEvent}>
                        <SelectTrigger className="w-[250px] bg-zinc-900 border-zinc-800 text-white font-mono text-xs focus:ring-primary/50">
                            <SelectValue placeholder="SELECT_PROTOCOL" />
                        </SelectTrigger>
                        <SelectContent className="bg-zinc-950 border-zinc-800 text-white font-mono text-xs">
                            {events.map(e => (<SelectItem key={e.id} value={e.id}>{e.title}</SelectItem>))}
                        </SelectContent>
                    </Select>

                    <Button
                        onClick={handleSave}
                        disabled={isSaving || !selectedEvent}
                        className="bg-primary hover:bg-primary/80 text-black font-bold uppercase tracking-wider text-xs border border-primary/50 shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                    >
                        {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
                        SAVE_DATA
                    </Button>
                </div>
            </div>

            {/* Main Content */}
            <CrystalCard className="overflow-hidden p-0">
                <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/5">
                    <div className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider">
                        <UserCheck className="w-5 h-5 text-primary" />
                        Member Roster
                    </div>

                    <div className="relative w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600" />
                        <Input
                            placeholder="SEARCH_OPERATIVE..."
                            className="pl-10 bg-black/40 border-zinc-800 text-white focus:border-primary/50 font-mono text-xs placeholder:text-zinc-700 h-9"
                            value={searchQuery}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                <div className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow className="hover:bg-zinc-900/50 border-zinc-900 bg-white/5">
                                <TableHead className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest pl-6">Member Profile</TableHead>
                                <TableHead className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">Reliability Score</TableHead>
                                <TableHead className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">Status</TableHead>
                                <TableHead className="text-right text-zinc-500 font-mono text-[10px] uppercase tracking-widest pr-6">Mark Present</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredMembers.map(member => {
                                const percent = getPercentage(member.attended, member.total)
                                const isPresent = attendanceState[member.id] || false

                                return (
                                    <TableRow key={member.id} className="hover:bg-zinc-900/50 border-white/5 group">
                                        <TableCell className="flex items-center gap-3 py-4 pl-6">
                                            <Avatar className="h-9 w-9 border border-zinc-800 group-hover:border-primary/50 transition-colors">
                                                <AvatarImage src={member.avatar_url} />
                                                <AvatarFallback className="bg-zinc-900 text-zinc-500 text-[10px] font-mono">{member.email.charAt(0).toUpperCase()}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <div className="font-bold text-white text-sm group-hover:text-primary transition-colors flex items-center gap-2">
                                                    {member.email.split('@')[0]}
                                                    {percent >= 90 && <ShieldCheck className="w-3 h-3 text-primary" />}
                                                </div>
                                                <div className="text-[10px] font-mono text-zinc-600">{member.email}</div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                <div className="w-24 h-1 bg-zinc-900 overflow-hidden rounded-full">
                                                    <div
                                                        className={`h-full ${percent < 50 ? 'bg-red-500' : 'bg-primary shadow-[0_0_10px_rgba(34,197,94,0.3)]'}`}
                                                        style={{ width: `${percent}%` }}
                                                    />
                                                </div>
                                                <span className="text-xs font-mono text-zinc-500">{percent}%</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="outline" className={`${getStatusColor(percent)} font-mono text-[10px] uppercase tracking-wider`}>
                                                {percent < 50 ? <span className="flex items-center gap-1"><AlertTriangle className="h-3 w-3" /> At Risk</span> : 'Active'}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right pr-6">
                                            <Switch
                                                checked={isPresent}
                                                onCheckedChange={(checked) => handleToggle(member.id, checked)}
                                                disabled={!selectedEvent}
                                                className="data-[state=checked]:bg-primary"
                                            />
                                        </TableCell>
                                    </TableRow>
                                )
                            })}

                            {filteredMembers.length === 0 && (
                                <TableRow className="hover:bg-transparent border-white/5">
                                    <TableCell colSpan={4} className="h-48 text-center text-zinc-500 flex flex-col items-center justify-center gap-2">
                                        <div className="h-3 w-3 rounded-full bg-zinc-800 animate-pulse" />
                                        <span className="font-mono text-xs tracking-widest">NO SUBJECTS FOUND</span>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </CrystalCard>
        </div>
    )
}
