import React from 'react';
import Image from 'next/image';
import { GraduationCap, Anchor, Code, Building, Trophy } from 'lucide-react';

const alumni = [
    {
        name: "Sushant Dhar",
        position: "Sub Lieutenant",
        achievement: "Indian Navy",
        desc: "Successfully recommended at 33 SSB Bhopal for Navy SSC IT, exemplifying technical excellence and leadership in naval service.",
        img: "/media/Alumni/Susant_dhar.png",
        stats: [
            { icon: <Anchor className="w-4 h-4" />, label: "Navy" },
            { icon: <Code className="w-4 h-4" />, label: "IT Officer" }
        ]
    },
    {
        name: "Kumar Abinash",
        position: "OPSC Officer",
        achievement: "Rank 278 (2022)",
        desc: "Serving with distinction as a Group B Officer in Odisha Government, contributing to state administration excellence.",
        img: "/media/Alumni/Kumar_Abinash.png",
        stats: [
            { icon: <Building className="w-4 h-4" />, label: "OPSC" },
            { icon: <Trophy className="w-4 h-4" />, label: "Rank 278" }
        ]
    },
    {
        name: "Ankit Raj Biswal",
        position: "Lieutenant",
        achievement: "Indian Army",
        desc: "Commissioned as Lieutenant in the Indian Army, leading with honor after completing training at OTA Chennai.",
        img: "/media/Alumni/Ankit_Biswal.png",
        stats: [
            { icon: <Trophy className="w-4 h-4" />, label: "Army" },
            { icon: <Trophy className="w-4 h-4" />, label: "OTA Chennai" }
        ]
    }
];

export default function AlumniSection() {
    return (
        <section id="alumni" className="py-20 bg-[#081b33] relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-5 relative z-10">

                <div className="text-center mb-16">
                    <div className="flex items-center gap-2 w-fit mx-auto mb-5 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
                        <GraduationCap className="w-4 h-4" />
                        <span>Alumni Excellence</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
                        Our Distinguished <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Alumni</span>
                    </h2>
                    <p className="text-blue-200 max-w-3xl mx-auto">
                        Celebrating our exceptional alumni and their inspiring journeys of service to the nation
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {alumni.map((alum, i) => (
                        <div key={i} className="group relative bg-[#0f2542] rounded-2xl p-1 overflow-hidden transition-transform duration-300 hover:-translate-y-2">
                            {/* Border Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 opacity-50 group-hover:opacity-100 transition-opacity"></div>

                            <div className="relative bg-[#0b1f3a] rounded-xl p-6 h-full flex flex-col">
                                <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden bg-[#081628]">
                                    <Image
                                        src={alum.img}
                                        alt={alum.name}
                                        fill
                                        className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-3 right-3 bg-blue-600/90 text-white text-xs px-2 py-1 rounded">Alumni</div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-1">{alum.name}</h3>
                                <p className="text-blue-400 font-semibold mb-1">{alum.position}</p>
                                <p className="text-xs text-purple-300 mb-4">{alum.achievement}</p>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {alum.desc}
                                </p>

                                <div className="flex gap-4 pt-4 border-t border-white/10">
                                    {alum.stats.map((stat, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                                            {stat.icon}
                                            <span>{stat.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
