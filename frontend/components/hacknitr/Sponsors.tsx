"use client"

import React from 'react'

const Sponsors = () => {
    return (
        <section id="sponsors" className="py-20 bg-[#121217]">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-6xl font-heading font-bold mb-16 text-white">
                    OUR <span className="text-hack-date">SPONSORS</span>
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div key={i} className="bg-white/5 h-24 rounded-lg flex items-center justify-center border border-white/5">
                            <span className="text-gray-500 font-mono">Sponsor {i}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Sponsors
