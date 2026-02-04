"use client"

import React from 'react'

const Prizes = () => {
    return (
        <section id="prizes" className="py-20 bg-background relative">
            <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-hack-blue/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 -z-10" />

            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-6xl font-heading font-bold text-center mb-16 text-white">
                    WINNING <span className="text-hack-blue">PRIZES</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* 2nd Place */}
                    <div className="order-2 md:order-1 flex flex-col items-center justify-end">
                        <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-hack-blue/50 transition-all h-80 flex flex-col items-center justify-center">
                            <span className="text-6xl font-heading font-bold text-silver mb-4">₹20k</span>
                            <span className="text-xl text-gray-400 font-body">Runner Up</span>
                        </div>
                    </div>

                    {/* 1st Place */}
                    <div className="order-1 md:order-2 flex flex-col items-center">
                        <div className="w-full bg-white/5 border border-hack-green/50 rounded-2xl p-8 hover:bg-white/10 transition-all h-96 flex flex-col items-center justify-center relative shadow-[0_0_50px_rgba(143,169,99,0.2)]">
                            <div className="absolute -top-6 bg-hack-green text-black font-bold px-6 py-2 rounded-full font-body uppercase tracking-wider">Champion</div>
                            <span className="text-8xl font-heading font-bold text-hack-green mb-4">₹50k</span>
                            <span className="text-2xl text-white font-body">Winner</span>
                        </div>
                    </div>

                    {/* 3rd Place */}
                    <div className="order-3 md:order-3 flex flex-col items-center justify-end">
                        <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-hack-date/50 transition-all h-80 flex flex-col items-center justify-center">
                            <span className="text-6xl font-heading font-bold text-bronze mb-4">₹10k</span>
                            <span className="text-xl text-gray-400 font-body">2nd Runner Up</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Prizes
