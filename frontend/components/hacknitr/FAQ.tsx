"use client"

import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
    { question: "Who can participate?", answer: "Any student with a passion for technology can participate, regardless of their background." },
    { question: "Is it free?", answer: "Yes, participation in HackNITR is completely free of charge." },
    { question: "What is the team size?", answer: "You can participate individually or in a team of 2-4 members." },
    { question: "Will there be food?", answer: "Yes! We provide meals, snacks, and drinks throughout the event." },
]

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section id="faq" className="py-20 bg-background">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-4xl md:text-6xl font-heading font-bold text-center mb-16 text-white">
                    FREQUENTLY <span className="text-gray-500">ASKED</span>
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-white/10 rounded-lg bg-white/5 overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-lg font-body font-medium text-white">{faq.question}</span>
                                {openIndex === index ? <Minus className="text-hack-green" /> : <Plus className="text-gray-500" />}
                            </button>
                            {openIndex === index && (
                                <div className="p-6 pt-0 text-gray-400 font-body border-t border-white/5">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ
