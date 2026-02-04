import React from 'react';
import { Target, Eye } from 'lucide-react'; // Simulating icons with Lucide, might need adjustments

const objectives = [
    {
        title: "Aim",
        icon: <Target className="w-8 h-8" />,
        colorClass: "bg-[#ff6e6e] text-white shadow-[0_4px_20px_rgba(239,68,68,0.3)]",
        items: [
            "Develop character, camaraderie, discipline, and leadership",
            "Shaping organized and trained youth for the future",
            "Provide environment that motivates young people"
        ]
    },
    {
        title: "Vision",
        icon: <Eye className="w-8 h-8" />,
        colorClass: "bg-[#77a7fb] text-white shadow-[0_4px_20px_rgba(30,41,59,0.2)]",
        items: [
            "Empower youth volunteers to become leaders",
            "Foster leadership and character development",
            "Create disciplined and responsible citizens"
        ]
    },
    {
        title: "Motto",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>,
        colorClass: "bg-[#8fdbff] text-white shadow-[0_4px_20px_rgba(14,165,233,0.3)]",
        items: [
            "Uphold Unity and Discipline as core values",
            "Promote National Integration and a secular outlook",
            "Encourage the spirit of adventure and sportsmanship"
        ]
    }
];

export default function ObjectivesSection() {
    return (
        <section id="Objectives" className="relative py-20 bg-gradient-to-br from-[#ebf8ff] via-[#f0f9ff] to-[#e6f0ff] min-h-screen overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] pointer-events-none z-0">
                <div className="absolute top-[30%] left-[20%] w-[50vh] h-[50vh] bg-[#5da9e9]/10 rounded-full blur-[100px]"></div>
                <div className="absolute top-[70%] left-[80%] w-[50vh] h-[50vh] bg-[#c8102e]/10 rounded-full blur-[100px]"></div>
                <div className="absolute top-[20%] left-[60%] w-[50vh] h-[50vh] bg-[#0b1f4b]/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-5">
                {/* Badge */}
                <div className="flex items-center gap-2 w-fit mx-auto mb-10 px-5 py-2 rounded-full bg-white/70 backdrop-blur-md border border-[#0b1f4b]/10 shadow-[0_8px_32px_rgba(11,31,75,0.1)] text-[#0b1f4b] text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-lg">
                    <Target className="w-4 h-4" />
                    <span>Core Principles</span>
                </div>

                <div className="text-center mb-16">
                    <h1 className="text-5xl lg:text-6xl font-bold mb-5 bg-gradient-to-br from-[#0b1f4b] to-[#5da9e9] text-transparent bg-clip-text">
                        NCC Objectives
                    </h1>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        Building character, developing leadership, and fostering national unity through disciplined training and service
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {objectives.map((obj, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-white/90 backdrop-blur-xl border border-white/80 rounded-3xl p-8 text-center shadow-[0_8px_32px_rgba(11,31,75,0.08)] transition-all duration-500 hover:-translate-y-3 hover:rotate-1 hover:shadow-[0_20px_60px_rgba(11,31,75,0.15)] overflow-hidden"
                        >
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#5da9e9]/10 to-transparent -translate-x-full transition-transform duration-700 group-hover:translate-x-full z-0"></div>

                            <div className={`relative z-10 w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-y-12 ${obj.colorClass}`}>
                                {obj.icon}
                            </div>

                            <h3 className="relative z-10 text-2xl font-bold text-[#0b1f4b] mb-4 transition-transform duration-300 group-hover:-translate-y-1">
                                {obj.title}
                            </h3>

                            <div className="relative z-10 text-slate-600 text-left">
                                <ul className="list-disc pl-5 space-y-2">
                                    {obj.items.map((item, i) => (
                                        <li key={i} className="transition-transform duration-300 group-hover:translate-x-1">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
