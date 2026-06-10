import React from "react";
import { FaCheckCircle, FaArrowRight, FaClock, FaEye } from "react-icons/fa";

const highlights = [
    { icon: FaCheckCircle, text: "Fast bulk vendor payouts" },
    { icon: FaClock, text: "Instant settlements" },
    { icon: FaEye, text: "Complete visibility" },
];

const featureCards = [
    {
        title: "Batch Payouts in Minutes",
        description: "Upload payout files, review transfers, and confirm settlements from one intuitive dashboard. Process thousands of transactions simultaneously.",
        badge: "Fast Setup",
        gradient: "from-blue-50 to-indigo-50"
    },
    {
        title: "Real-time Visibility",
        description: "Track payout progress, exceptions, and approvals with crystal-clear insights. Monitor every transaction from initiation to settlement.",
        badge: "Finance-Ready",
        gradient: "from-indigo-50 to-blue-50"
    }
];

const Section2 = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white py-16 md:py-28" style={{ fontFamily: "Poppins, sans-serif" }}>
            <style>{`
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(12px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes floatCard {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-8px);
                    }
                }

                .slide-up {
                    animation: slideUp 600ms cubic-bezier(0.4, 0, 0.2, 1) both;
                }

                .feature-card {
                    animation: floatCard 6s ease-in-out infinite;
                }

                .highlight-badge {
                    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
                }

                .highlight-badge:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 12px 24px rgba(30, 64, 175, 0.15);
                }
            `}</style>

            {/* Background decorations */}
            <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl pointer-events-none opacity-60" />
            <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-indigo-100/30 blur-3xl pointer-events-none opacity-50" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.08),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.08),transparent_50%)]" />

            <div className="relative mx-auto max-w-6xl px-6 md:px-12">
                <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
                    {/* Left content */}
                    <div className="space-y-8">
                        <div className="slide-up">
                            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-700 border border-blue-200/50 shadow-sm">
                                 Payout Excellence
                            </span>
                        </div>

                        <div className="slide-up space-y-4" style={{ animationDelay: "100ms" }}>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                                Smart Payouts,
                                <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Complete Control</span>
                            </h2>
                            <p className="max-w-xl text-base text-gray-600 leading-relaxed">
                                Move money with confidence. Our modern payout workflow delivers speed, visibility, and the efficiency your finance teams deserve.
                            </p>
                        </div>

                        {/* Highlight badges */}
                        <div className="grid gap-3 sm:grid-cols-3 slide-up" style={{ animationDelay: "200ms" }}>
                            {highlights.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="highlight-badge group rounded-2xl border border-blue-200/50 bg-white/70 backdrop-blur-sm px-4 py-4 shadow-md hover:shadow-lg transition-all"
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="flex-shrink-0">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-md group-hover:shadow-lg transition-all">
                                                    <Icon className="text-sm" />
                                                </div>
                                            </div>
                                            <p className="text-sm font-semibold text-slate-900 leading-snug">{item.text}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA Buttons */}
                        {/* <div className="flex flex-col sm:flex-row gap-3 slide-up pt-4" style={{ animationDelay: "300ms" }}>
                            <a href="/contact-us" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-1 active:translate-y-0">
                                Get Started
                                <FaArrowRight className="text-xs" />
                            </a>
                            <a href="/integration" className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-blue-200 bg-white/50 backdrop-blur-sm px-8 py-4 text-sm font-bold text-blue-600 transition-all duration-300 hover:border-blue-300 hover:bg-white/80 hover:-translate-y-1">
                                Learn More
                            </a>
                        </div> */}
                    </div>

                    {/* Right feature cards */}
                    <div className="grid gap-6">
                        {featureCards.map((card, idx) => (
                            <div
                                key={idx}
                                className={`feature-card group rounded-3xl border-2 border-blue-200/50 bg-gradient-to-br ${card.gradient} p-8 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
                                style={{ animationDelay: `${idx * 800}ms` }}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-600 border border-blue-200/50">
                                        {card.badge}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">{card.title}</h3>
                                <p className="text-sm leading-relaxed text-slate-700">
                                    {card.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section2;
