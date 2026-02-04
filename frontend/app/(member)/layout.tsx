import { MemberHeader } from "@/components/layout/MemberHeader"
import PageTransition from "@/components/ui/page-transition"

export default function MemberLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <MemberHeader />
            <main className="max-w-7xl mx-auto p-4 md:p-8 space-y-8 bg-grid-white/[0.02] min-h-[calc(100vh-64px)]">
                <PageTransition>
                    {children}
                </PageTransition>
            </main>
        </div>
    )
}
