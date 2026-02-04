import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { InnovationForge } from "@/components/features/InnovationForge"
import { HeroSection } from "@/components/features/HeroSection"
import { PotdSection } from "@/components/features/PotdSection"
import { EventsSection } from "@/components/features/EventsSection"
import { PastEventsSection } from "@/components/features/PastEventsSection"
import { TeamSection } from "@/components/features/TeamSection"
import { WelcomeSplash } from "@/components/features/WelcomeSplash"
import { InstallCTA } from "@/components/features/InstallCTA"
import { NetworkBackground } from "@/components/ui/network-background"
import { StatsSection } from "@/components/features/StatsSection"
import { MarqueeSection } from "@/components/features/MarqueeSection"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050505] font-sans selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      {/* Global Background Systems */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <NetworkBackground />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,black)] opacity-80" />
      </div>

      <div className="relative z-10 flex flex-col">
        <WelcomeSplash />
        <Navbar />

        <HeroSection />

        <MarqueeSection />

        <StatsSection />

        <PotdSection />

        <InnovationForge />

        <EventsSection />

        <PastEventsSection />

        <TeamSection />

        <InstallCTA />

        <Footer />
      </div>
    </div>
  )
}
