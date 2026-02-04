import React from 'react';
import Image from 'next/image';
import { User, ArrowRight } from 'lucide-react';

const ranks = [
    {
        name: "Devi Prasad Sarangi",
        rank: "SUO",
        year: "Third Year",
        desc: "Leading with dedication and inspiring fellow cadets through exemplary service.",
        img: "/media/Rank-Holders/SD/SUO DEVI PRASAD SARANGI.png"
    },
    {
        name: "Nikhilesh Sahoo",
        rank: "JUO",
        year: "Third Year",
        desc: "Passionate about training and mentoring new cadets in NCC values.",
        img: "/media/Rank-Holders/SD/JUO NIKHILESH SAHOO.png"
    },
    {
        name: "Raj Sahasranshu Biswal",
        rank: "JUO",
        year: "Third Year",
        desc: "Committed to excellence and fostering team spirit among junior cadets.",
        img: "/media/Rank-Holders/SD/JUO RAJ SAHASRANSU BISWAL.png"
    },
    {
        name: "Anubhav Samantray",
        rank: "JUO",
        year: "Third Year",
        desc: "Dedicated to community service and upholding the highest standards of discipline.",
        img: "/media/Rank-Holders/SD/JUO ANUBHAB SAMANTARAY.png"
    },
    {
        name: "Komal Kumari",
        rank: "JUO",
        year: "Fourth Year",
        desc: "Exhibiting remarkable leadership and a steadfast commitment to NCC ideals.",
        img: "/media/Rank-Holders/SW/JUO Komal Kumari.jpeg"
    }
];

export default function RanksSection() {
    return (
        <section id="ranks" className="py-20 bg-gradient-to-br from-white via-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-5">

                {/* Badge */}
                <div className="flex items-center gap-2 w-fit mx-auto mb-5 px-5 py-2 rounded-full bg-white/70 backdrop-blur-md border border-[#0b1f4b]/10 shadow-sm text-[#0b1f4b] text-sm font-medium">
                    <User className="w-4 h-4" />
                    <span>Leading Forward</span>
                </div>

                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#0b1f4b]">
                        Our Distinguished Cadet <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">Under Officers</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        Meet our exceptional cadet leaders who exemplify excellence and inspire their peers through dedicated service
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {ranks.map((cadet, i) => (
                        <div key={i} className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-50 group-hover:border-blue-200 transition-colors">
                                <Image
                                    src={cadet.img}
                                    alt={cadet.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="text-center">
                                <h3 className="text-lg font-bold text-[#0b1f4b] mb-1">{cadet.name}</h3>
                                <div className="flex justify-center gap-2 text-sm font-semibold mb-2">
                                    <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{cadet.rank}</span>
                                    <span className="text-gray-500 bg-gray-50 px-2 py-0.5 rounded">{cadet.year}</span>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {cadet.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="#" className="inline-flex items-center gap-2 text-[#0b1f4b] font-semibold hover:text-blue-600 transition-colors">
                        View all Rank Holders
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

            </div>
        </section>
    );
}
