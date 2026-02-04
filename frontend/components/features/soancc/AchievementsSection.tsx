import React, { useState } from 'react';
import Image from 'next/image';
import { Award, ChevronLeft, ChevronRight } from 'lucide-react';

const achievements = [
    {
        title: "MOUNTAINEERING CAMP",
        desc: "CDT Vivek Ranjan Sahoo was one of 150 cadets to attend Leadership & Team Building Camp at NIM Uttarkashi.",
        img: "/media/Achievement/MountaineeringCamp.jpeg"
    },
    {
        title: "AITSC 2025",
        desc: "2 Cadets from SOA NCC represented Odisha Directorate at the All India Thal Sainik Camp, DG NCC New Delhi",
        img: "/media/Achievement/AITSC2025.png"
    },
    {
        title: "ID STATE PARADE",
        desc: "Best Senior Division Boys Platoon Trophy by the Honorable Chief Minister of Odisha.",
        img: "/media/Achievement/ID-STATE-PARADE.png"
    },
    {
        title: "EBSB CAMP",
        desc: "3 Cadets of SOA NCC got selected in Ek Bharat Shrestha Bharat Camp held at AAD Centre Gopalpur, Ganjam, Odisha",
        img: "/media/Achievement/EBSB.jpeg"
    },
    {
        title: "YEP 2024",
        desc: "SUO Abinash Nanda represented India at the Youth Exchange Program (YEP) in Kyrgyzstan.",
        img: "/media/Achievement/YEP.png"
    },
    {
        title: "AITSC 2024",
        desc: "All India Thal Sainik Camp representation with outstanding performance at Rajpath, New Delhi.",
        img: "/media/Achievement/TSC2024.png"
    },
    {
        title: "Capital Day Awards",
        desc: "6 SOA NCC Cadets won 2nd Prize at the 77th Capital Foundation Day Parade.",
        img: "/media/Achievement/CapitalFoundationDay.png"
    },
    {
        title: "DG NCC Medallion",
        desc: "CDT Bidisha Karna received the DG NCC Medallion and qualified for the 66th NSCC, New Delhi.",
        img: "/media/Achievement/DG_NCC_Shooting.jpg"
    }
];

export default function AchievementsSection() {
    const [activeIndex, setActiveIndex] = useState(3); // Start with some index

    const nextSlide = () => setActiveIndex((prev) => (prev + 1) % achievements.length);
    const prevSlide = () => setActiveIndex((prev) => (prev - 1 + achievements.length) % achievements.length);

    // Calculate focused slide styling
    const getSlideStyle = (index: number) => {
        if (index === activeIndex) return "opacity-100 scale-100 z-20 shadow-2xl";
        return "opacity-50 scale-90 z-10 grayscale";
    };

    return (
        <section id="achievements" className="py-24 bg-[#0b1f4b] text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('/media/pattern.png')] opacity-5 mix-blend-overlay"></div>

            <div className="max-w-7xl mx-auto px-5 relative z-10">
                <div className="text-center mb-16">
                    <div className="flex items-center gap-2 w-fit mx-auto mb-5 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
                        <Award className="w-4 h-4" />
                        <span>Our Pride</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        Celebrating Excellence
                    </h2>
                    <p className="text-white/70 max-w-2xl mx-auto">
                        Recognizing outstanding achievements in training, competitions, and dedicated national service
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative max-w-5xl mx-auto">

                    <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center perspective-1000">
                        {achievements.map((item, i) => {
                            // Simple logic to show current, prev, next
                            // Ideally needs a more robust carousel logic for 3D effect
                            // Here we just render the active one prominently for simplicity in MVP
                            if (i !== activeIndex) return null;

                            return (
                                <div key={i} className="relative w-full md:w-[80%] h-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 animate-fadeIn">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8">
                                        <h3 className="text-3xl font-bold mb-2 text-yellow-400">{item.title}</h3>
                                        <p className="text-lg text-white/90">{item.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Navigation */}
                    <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur transition-all">
                        <ChevronLeft className="w-8 h-8" />
                    </button>
                    <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur transition-all">
                        <ChevronRight className="w-8 h-8" />
                    </button>

                    <div className="flex justify-center gap-2 mt-8">
                        {achievements.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                className={`w-3 h-3 rounded-full transition-all ${i === activeIndex ? 'bg-yellow-400 w-8' : 'bg-white/30 hover:bg-white/50'}`}
                            ></button>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}
