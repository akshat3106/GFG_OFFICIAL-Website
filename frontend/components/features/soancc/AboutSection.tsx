import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
    "/media/About/AboutPic.jpg",
    "/media/About/about-pic-2.jpg",
    "/media/About/about-pic-3.jpg",
    "/media/About/about-pic-4.jpg"
];

export default function AboutSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="about" className="py-20 bg-gradient-to-br from-white via-[#f9fafb] to-[#f1f5f9]">
            <div className="max-w-7xl mx-auto px-5">

                {/* Badge */}
                <div className="flex items-center gap-2 w-fit mx-auto mb-10 px-5 py-2 rounded-full bg-white/70 backdrop-blur-md border border-[#0b1f4b]/10 shadow-[0_8px_32px_rgba(11,31,75,0.1)] text-[#0b1f4b] text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-lg">
                    <span className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-[10px] text-white">i</span>
                    <span>About Us</span>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/* Slideshow */}
                    <div className="relative w-full h-[300px] md:h-[50vh] rounded-2xl overflow-hidden shadow-2xl">
                        {images.map((src, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10 scale-100' : 'opacity-0 scale-95'}`}
                            >
                                <Image
                                    src={src}
                                    alt={`About Image ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                            {images.map((_, index) => (
                                <span
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`block w-3 h-3 rounded-full cursor-pointer transition-all ${index === currentSlide ? 'bg-white scale-125 shadow' : 'bg-white/50'}`}
                                ></span>
                            ))}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="text-center md:text-left">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 relative inline-block text-[#0b1f4b]">
                            About SOA NCC
                        </h2>
                        <div className="text-lg text-gray-700 space-y-4 text-justify leading-relaxed">
                            <p>
                                Established as an integral part of the prestigious <strong>4 (O) CTC and 1 (O) GIRLS BN under the Odisha Directorate</strong>,
                                SOA NCC Unit stands as a beacon of excellence in character development, leadership training, and national service.
                            </p>
                            <p>
                                Affiliated with <strong>Siksha 'O' Anusandhan University</strong>, we are committed to nurturing young minds
                                into disciplined citizens and future leaders who embody the highest ideals of patriotism, integrity, and service.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
