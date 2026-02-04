import { Sidebar } from "@/components/layout/Sidebar"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen bg-background text-foreground relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-cyber-grid opacity-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <Sidebar />
            <main className="flex-1 md:ml-64 p-8 overflow-y-auto h-screen bg-grid-white/[0.02] relative z-10 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-zinc-900">
                <div className="max-w-7xl mx-auto space-y-8">
                    {children}
                </div>
            </main>
        </div>
    )
}
