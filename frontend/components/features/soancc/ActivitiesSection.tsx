import React from 'react';
import Image from 'next/image';
import { Users } from 'lucide-react';

const activities = [
    {
        id: 'parade',
        title: 'Drill & Discipline',
        desc: 'Precision drill and ceremonial parades showcasing discipline and coordination',
        img: '/media/Activities/parade.jpg',
        overlayDesc: 'Experience the precision and discipline of NCC parade platoon. Our cadets demonstrate exceptional coordination through synchronized drill movements and ceremonial displays.'
    },
    {
        id: 'adventure',
        title: 'Adventure Activities',
        desc: 'NCC cadets train in mountaineering, trekking, and survival skills through adventure camps.',
        img: '/media/Activities/Mountaineering.jpeg',
        overlayDesc: 'Take part in trekking, camping, mountaineering, survival skills, and other adventure activities that build courage, endurance, teamwork, and confidence.'
    },
    {
        id: 'extracurricular',
        title: 'Extracurricular Activities',
        desc: 'Involvement of cadets in Sports, Debate, Cultural, Drone Tech, Public Speaking, etc.',
        img: '/media/Activities/extracurricular.jpeg',
        overlayDesc: "Contributing to environmental conservation through extensive tree plantation drives. We're committed to creating a greener future for generations to come."
    },
    {
        id: 'startup',
        title: 'Startup & Innovation',
        desc: 'Fostering creativity and entrepreneurial spirit among cadets',
        img: '/media/Activities/NCCday_Startup.jpeg',
        overlayDesc: 'Encouraging innovative thinking and problem-solving. Our cadets actively participate in startup challenges, hackathons, and projects that address real-world needs.'
    },
    {
        id: 'camps',
        title: 'National Camps',
        desc: 'Cadets earn national/state representation through national camps like YEP, RDC, TSC, etc.',
        img: '/media/Activities/camps.jpeg',
        overlayDesc: 'Cadets actively participate in national and international-level camps and competitions, engaging in leadership and skill-building activities to gain knowledge, confidence, and experience.'
    },
    {
        id: 'social',
        title: 'Social Service',
        desc: 'Serving communities through health camps, cleanliness drives, and disaster relief.',
        img: '/media/Activities/social-service.jpeg',
        overlayDesc: 'Our cadets support society through disaster relief, blood donation, cleanliness drives, and awareness campaigns, building empathy and responsibility.'
    }
];

export default function ActivitiesSection() {
    return (
        <section id="activities" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-5">

                {/* Badge */}
                <div className="flex items-center gap-2 w-fit mx-auto mb-5 px-5 py-2 rounded-full bg-white/70 backdrop-blur-md border border-[#0b1f4b]/10 shadow-sm text-[#0b1f4b] text-sm font-medium">
                    <Users className="w-4 h-4" />
                    <span>Our Activities</span>
                </div>

                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#0b1f4b]">
                        Excellence in Action
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        Engaging in diverse activities that build character, serve the nation, and develop exceptional leadership skills
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activities.map((act) => (
                        <div key={act.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">

                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={act.img}
                                    alt={act.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/80 text-white flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-center mb-6 leading-relaxed">
                                        {act.overlayDesc}
                                    </p>
                                    <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-colors pointer-events-auto">
                                        View Gallery
                                    </button>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-[#0b1f4b] mb-2">{act.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{act.desc}</p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
