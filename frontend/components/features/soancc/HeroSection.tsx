import React from 'react';
import { ChevronDown, Volume2, VolumeX } from 'lucide-react';

export default function HeroSection() {
    const [isMuted, setIsMuted] = React.useState(true);

    const toggleMute = () => {
        const video = document.getElementById('heroVideo') as HTMLVideoElement;
        if (video) {
            video.muted = !video.muted;
            setIsMuted(video.muted);
        }
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-[-2]">
                <video
                    id="heroVideo"
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/media/HeroPage/HeroImage.jpeg"
                >
                    {/* <source src="/media/HeroPage/HeroVideo1.mp4" type="video/mp4" /> */}
                </video>
                <div className="absolute inset-0 bg-black/50 z-0"></div>
            </div>

            <div className="relative z-10 text-center text-white px-5 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-br from-[#FF9933] via-white to-[#138808] text-transparent bg-clip-text">
                    SOA NCC
                </h1>
                <h2 className="text-2xl md:text-5xl font-semibold mb-6 drop-shadow-md">
                    4 (O) CTC | 1 (O) GIRLS BN
                </h2>
                <p className="text-lg md:text-2xl font-medium mb-8 drop-shadow-md">
                    Discipline. Leadership. Service.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <button
                        onClick={() => scrollToSection('about')}
                        className="px-6 py-3 rounded-xl border border-white/30 bg-white/30 backdrop-blur-md text-white font-medium transition-all hover:bg-white/50 hover:-translate-y-1 hover:scale-105 shadow-lg"
                    >
                        Explore
                    </button>
                    <button
                        onClick={() => scrollToSection('join')}
                        className="px-6 py-3 rounded-xl border border-white/30 bg-white/30 backdrop-blur-md text-white font-medium transition-all hover:bg-white/50 hover:-translate-y-1 hover:scale-105 shadow-lg"
                    >
                        Why Join Us
                    </button>
                    <button
                        onClick={() => scrollToSection('achievements')}
                        className="px-6 py-3 rounded-xl border border-white/30 bg-white/30 backdrop-blur-md text-white font-medium transition-all hover:bg-white/50 hover:-translate-y-1 hover:scale-105 shadow-lg"
                    >
                        Achievements
                    </button>
                </div>
            </div>

            {/* Music Control */}
            <button
                onClick={toggleMute}
                className="fixed bottom-5 left-5 z-50 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/40 border-2 border-white/40 flex items-center justify-center text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-[#42b8e7]/50"
            >
                {isMuted ? <VolumeX className="w-6 h-6 md:w-8 md:h-8" /> : <Volume2 className="w-6 h-6 md:w-8 md:h-8" />}
            </button>

            {/* Scroll Indicator */}
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-white animate-bounce text-3xl">
                <ChevronDown />
            </div>

        </section>
    );
}
