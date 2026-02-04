"use client"

import React from 'react'

const tracks = [
    { title: "AI/ML", description: "Harness the power of Artificial Intelligence." },
    { title: "Web3", description: "Build decentralized applications for the future." },
    { title: "Open Innovation", description: "Solve problems without boundaries." },
    { title: "HealthTech", description: "Innovate for a healthier world." },
]

const Tracks = () => {
    return (
        <section id="tracks" className="py-20 bg-[#121217]">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-6xl font-heading font-bold text-center mb-16 text-white">
                    HACK <span className="text-hack-purple">TRACKS</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {tracks.map((track, index) => (
                        <div key={index} className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-hack-green/50 hover:bg-white/10 transition-all duration-300">
                            <div className="h-12 w-12 bg-hack-green/20 rounded-lg mb-6 flex items-center justify-center">
                                <span className="text-hack-green text-xl font-bold">0{index + 1}</span>
                            </div>
                            <h3 className="text-2xl font-bold font-body text-white mb-4 group-hover:text-hack-green transition-colors">
                                {track.title}
                            </h3>
                            <p className="text-gray-400 font-body">
                                {track.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Tracks
