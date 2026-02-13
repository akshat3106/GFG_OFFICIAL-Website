"use client"

import { LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { createClient } from "@/utils/supabase/client"
import Image from "next/image"
// @ts-ignore
import gfgLogo from "@/assets/gfg-logo.svg"

export function MemberNavbar() {
    const router = useRouter()
    const supabase = createClient()

    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.push("/login")
        router.refresh()
    }

    return (
        <div className="flex items-center justify-between p-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
            <div className="flex items-center gap-3 font-bold text-xl">
                <div className="relative w-9 h-9">
                    <Image src={gfgLogo} alt="GFG Logo" fill className="object-contain" />
                </div>
                <span className="font-mono tracking-tight text-white">{`{ GFG Student Chapter }`}</span>
            </div>
            <div className="flex items-center gap-2">
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleLogout}
                    className="text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                </Button>
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-sm border border-primary/20">
                    M
                </div>
            </div>
        </div>
    )
}
