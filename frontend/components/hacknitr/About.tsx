"use client"

import React from 'react'

const About = () => {
    return (
        <section id="about" className="py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <div className="relative">
                            <div className="absolute inset-0 bg-hack-purple blur-[50px] opacity-20 transform -translate-x-10 translate-y-10"></div>
                            {/* Placeholder for About Image/Illustration */}
                            <div className="w-full h-80 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center relative z-10">
                                <span className="text-white/50 font-mono">About Image</span>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 text-left">
                        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white">
                            ABOUT <span className="text-hack-blue">HACKNITR</span>
                        </h2>
                        <p className="text-gray-400 font-body text-lg leading-relaxed mb-6">
                            HackNITR 5.0 is one of the largest student-run hackathons in India. It's a platform where innovators, developers, and designers come together to solve real-world problems. We provide an environment that fosters creativity and technical excellence.
                        </p>
                        <p className="text-gray-400 font-body text-lg leading-relaxed">
                            Join us for 36 hours of non-stop coding, fun activities, and networking with industry leaders. Whether you are a beginner or a pro, there is something for everyone!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
