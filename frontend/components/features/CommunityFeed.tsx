"use client"

import { CrystalCard } from "@/components/ui/crystal-card"
import { MessageSquare, Heart, Share2, Code2 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const snippets = [
    { id: 1, author: "Dev_X", role: "Contributor", date: "2h ago", language: "Python", title: "One-liner for list flattening", code: "result = [item for sublist in l for item in sublist]", likes: 24, comments: 5 },
    { id: 2, author: "Cyber_Ninja", role: "Lead", date: "5h ago", language: "JavaScript", title: "React useEffect Cleanup", code: "useEffect(() => {\n  return () => console.log('Cleaning up');\n}, []);", likes: 45, comments: 12 },
]

export function CommunityFeed() {
    return (
        <CrystalCard className="p-0">
            <div className="p-8 border-b border-white/5 flex gap-3 items-center">
                <div className="p-2 bg-primary/10 rounded-lg">
                    <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white">Comms Relay</h3>
                    <p className="text-xs text-zinc-500">Encrypted snippets from the network.</p>
                </div>
            </div>

            <div className="p-8 space-y-4">
                {snippets.map((snippet) => (
                    <div key={snippet.id} className="bg-black/40 border border-white/5 rounded-lg p-5 hover:border-primary/20 transition-colors group">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <Avatar className="w-8 h-8 border border-white/10">
                                    <AvatarFallback className="bg-zinc-800 text-zinc-400 text-xs">
                                        {snippet.author[0]}
                                    </AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="text-xs font-bold text-white group-hover:text-primary transition-colors">{snippet.author}</p>
                                    <p className="text-[10px] text-zinc-500 uppercase">{snippet.role} • {snippet.date}</p>
                                </div>
                            </div>
                            <Badge variant="secondary" className="bg-zinc-900 border-zinc-800 text-zinc-400 text-[10px]">
                                {snippet.language}
                            </Badge>
                        </div>

                        <h4 className="text-sm font-bold text-white mb-2">{snippet.title}</h4>

                        <div className="bg-black/60 rounded border border-white/5 p-3 mb-4 overflow-x-auto relative group/code">
                            <div className="absolute top-2 right-2 opacity-0 group-hover/code:opacity-100 transition-opacity">
                                <Code2 className="w-4 h-4 text-zinc-500" />
                            </div>
                            <pre className="text-xs font-mono text-zinc-300">
                                <code>{snippet.code}</code>
                            </pre>
                        </div>

                        <div className="flex gap-6 text-zinc-500 text-xs font-mono">
                            <button className="flex items-center gap-1.5 hover:text-primary transition-colors">
                                <Heart className="w-3.5 h-3.5" /> {snippet.likes}
                            </button>
                            <button className="flex items-center gap-1.5 hover:text-primary transition-colors">
                                <MessageSquare className="w-3.5 h-3.5" /> {snippet.comments}
                            </button>
                            <button className="flex items-center gap-1.5 hover:text-primary transition-colors ml-auto">
                                <Share2 className="w-3.5 h-3.5" /> Share
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </CrystalCard>
    )
}
