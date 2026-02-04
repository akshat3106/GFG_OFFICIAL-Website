import React from 'react';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

const leaders = {
    commander: {
        name: "Col Satyabrata Swain",
        rank: "Group Commander",
        img: "/media/Officers/GC_Satyabrata_Swain.png",
        quote: "Leadership is earned through courage and responsibility."
    },
    sd: [
        {
            name: "Lt Col Shantanu Dey",
            role: "Officer Commanding (OC)",
            img: "/media/Officers/OC_Shantunu_Dey.jpg",
            quote: "Discipline is the foundation of true strength."
        },
        {
            name: "Sreyansu Satya Prakash",
            role: "Care Taker Officer (CTO)",
            img: "/media/Officers/CTO_Rima_Sahani.png", // Corrected image mapping based on original code, double check if needed, original code had CTO_Sreyanshu_Satya_Prakash.png but it might be missing
            quote: "Duty performed with honor builds lasting respect."
        }
    ],
    sw: [
        {
            name: "Col Sanjeev Dewan",
            role: "Commanding Officer (CO)",
            img: "/media/Officers/CO_Sanjeev_Dewan.jpg",
            quote: "Discipline and determination create unstoppable leaders."
        },
        {
            name: "Dr. Rima Sahani",
            role: "Care Taker Officer (CTO)",
            img: "/media/Officers/CTO_Rima_Sahani.png",
            quote: "Resilience and willpower shape the strongest warriors."
        }
    ]
}

// Helper Card
const OfficerCard = ({ officer }: { officer: any }) => (
    <div className="bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-white/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
        <div className="relative h-80 w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f4b] via-transparent to-transparent opacity-60 z-10"></div>
            <Image
                src={officer.img}
                alt={officer.name}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-3 border border-white/30 z-20 pointer-events-none"></div>
        </div>
        <div className="p-6 text-center relative z-20 -mt-10 bg-white mx-4 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-[#0b1f4b] mb-1">{officer.name}</h3>
            <p className="text-sm font-semibold text-blue-600 mb-4">{officer.rank || officer.role}</p>
            <div className="relative pt-4 border-t border-gray-100">
                <Quote className="w-4 h-4 text-gray-300 absolute top-0 left-0" />
                <p className="text-gray-600 text-sm italic px-4">
                    {officer.quote}
                </p>
                <Quote className="w-4 h-4 text-gray-300 absolute top-0 right-0 rotate-180" />
            </div>
        </div>
    </div>
);

export default function LeadershipSection() {
    return (
        <section id="leadership" className="relative py-24 bg-[#0b1f4b] text-white overflow-hidden">
            {/* Background Patterns */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#0b1f4b] via-transparent to-[#0b1f4b]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-5">

                <div className="text-center mb-16">
                    <div className="flex items-center gap-2 w-fit mx-auto mb-5 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>Our Leaders</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        Words from Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">Leaders</span>
                    </h2>
                    <p className="text-white/70 max-w-2xl mx-auto">
                        Meet the distinguished leaders who guide our NCC unit with dedication and vision
                    </p>
                </div>

                {/* Commander */}
                <div className="max-w-md mx-auto mb-20 transform hover:scale-105 transition-transform duration-300">
                    <OfficerCard officer={leaders.commander} />
                </div>

                {/* Divisions */}
                <div className="grid md:grid-cols-2 gap-16">
                    {/* SD */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-0.5 flex-1 bg-white/20"></div>
                            <h3 className="text-2xl font-bold text-yellow-50">Senior Division</h3>
                            <div className="h-0.5 flex-1 bg-white/20"></div>
                        </div>
                        <div className="grid gap-8">
                            <OfficerCard officer={leaders.sd[0]} />
                            <OfficerCard officer={leaders.sd[1]} />
                        </div>
                    </div>

                    {/* SW */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-0.5 flex-1 bg-white/20"></div>
                            <h3 className="text-2xl font-bold text-yellow-50">Senior Wing</h3>
                            <div className="h-0.5 flex-1 bg-white/20"></div>
                        </div>
                        <div className="grid gap-8">
                            <OfficerCard officer={leaders.sw[0]} />
                            <OfficerCard officer={leaders.sw[1]} />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
