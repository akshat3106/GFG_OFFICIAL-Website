"use client"

import React from 'react'

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-hack-purple/20 rounded-full blur-[100px] -z-10 animate-pulse-glow" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-hack-blue/20 rounded-full blur-[100px] -z-10 animate-pulse-glow" />

            <div className="container mx-auto px-4 text-center z-10">
                <h1 className="text-6xl md:text-[8rem] lg:text-[12rem] font-heading font-bold leading-none tracking-tighter text-white mb-6">
                    HACK<span className="text-hack-green">NITR</span> 5.0
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 font-body max-w-2xl mx-auto mb-8">
                    Unleash your potential at one of India's largest student-run hackathons.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all font-body text-lg w-full sm:w-auto">
                        Register Now
                    </button>
                    <button className="px-8 py-4 border border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-all font-body text-lg w-full sm:w-auto">
                        Join Discord
                    </button>
                </div>

                <div className="mt-16 text-hack-date font-body font-semibold tracking-widest uppercase">
                    March 2026 • NIT Rourkela
                </div>
            </div>

            {/* Scrolling Marquee or Grid maybe? */}
            <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
        </section>
    )
}

export default Hero
