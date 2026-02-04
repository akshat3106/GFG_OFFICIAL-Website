"use client";

import React, { useState, useEffect } from 'react';
import HeroSection from '@/components/features/soancc/HeroSection';
import AboutSection from '@/components/features/soancc/AboutSection';
import ObjectivesSection from '@/components/features/soancc/ObjectivesSection';
import ActivitiesSection from '@/components/features/soancc/ActivitiesSection';
import LeadershipSection from '@/components/features/soancc/LeadershipSection';
import RanksSection from '@/components/features/soancc/RanksSection';
import AchievementsSection from '@/components/features/soancc/AchievementsSection';
import AlumniSection from '@/components/features/soancc/AlumniSection';
import Link from 'next/link';

export default function SOANCCPage() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-200">

            {/* Navigation */}
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
                <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
                    {/* Logo area */}
                    <div className="flex items-center gap-4">
                        <div className="relative w-10 h-10 md:w-12 md:h-12">
                            <img src="/media/Logo/NCC_logo.png" alt="NCC Logo" className="w-full h-full object-contain" />
                        </div>
                        <div className="hidden md:flex flex-col leading-tight text-white mix-blend-difference">
                            <span className="font-bold text-lg">SOA NCC</span>
                            <span className="text-xs opacity-90">4 (O) CTC | 1 (O) GIRLS BN</span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className={`hidden md:flex items-center gap-8 font-medium ${scrolled ? 'text-slate-700' : 'text-white'}`}>
                        <Link href="#home" className="hover:text-blue-400 transition-colors">Home</Link>
                        <Link href="#about" className="hover:text-blue-400 transition-colors">About Us</Link>
                        <Link href="#Objectives" className="hover:text-blue-400 transition-colors">Objectives</Link>
                        <Link href="#activities" className="hover:text-blue-400 transition-colors">Activities</Link>
                        <Link href="#achievements" className="hover:text-blue-400 transition-colors">Achievements</Link>
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-4">
                        <Link href="#join" className="px-5 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 transition-all">
                            Join
                        </Link>
                        <div className="w-10 h-10 bg-white rounded-lg p-1">
                            <img src="/media/Logo/SOA_logo.png" alt="SOA Logo" className="w-full h-full object-contain" />
                        </div>

                        {/* Mobile Toggle */}
                        <button className="md:hidden text-white mix-blend-difference" onClick={() => setMenuOpen(!menuOpen)}>
                            <div className="space-y-1.5">
                                <span className={`block w-8 h-0.5 bg-current transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                                <span className={`block w-8 h-0.5 bg-current transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></span>
                                <span className={`block w-8 h-0.5 bg-current transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`absolute top-full left-0 w-full bg-white shadow-xl border-t transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="flex flex-col p-5 gap-4 text-slate-800 font-medium text-center">
                        <Link href="#home" onClick={() => setMenuOpen(false)}>Home</Link>
                        <Link href="#about" onClick={() => setMenuOpen(false)}>About Us</Link>
                        <Link href="#Objectives" onClick={() => setMenuOpen(false)}>Objectives</Link>
                        <Link href="#activities" onClick={() => setMenuOpen(false)}>Activities</Link>
                        <Link href="#achievements" onClick={() => setMenuOpen(false)}>Achievements</Link>
                    </div>
                </div>
            </nav>

            <HeroSection />
            <AboutSection />
            <ObjectivesSection />
            <ActivitiesSection />
            <LeadershipSection />
            <RanksSection />
            <AchievementsSection />
            <AlumniSection />

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-400 py-12 text-center">
                <p>&copy; {new Date().getFullYear()} SOA NCC. All rights reserved.</p>
                <p className="text-sm mt-2 opacity-50">Affiliated with Siksha 'O' Anusandhan University</p>
            </footer>

        </main>
    );
}
