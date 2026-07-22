import React, { useState, useEffect, useRef } from "react";
import aboutVideo from "../../assets/images/spay-about-us.mp4";
import { FaArrowRight, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import {
    FiCreditCard,
    FiRepeat,
    FiSmartphone,
    FiLink,
    FiShoppingBag,
    FiShoppingCart,
    FiCode
} from "react-icons/fi";

const services = [
    {
        title: "Payment Gateway",
        description: "Accept digital payments with a secure, conversion-focused checkout built for global commerce.",
        icon: <FiCreditCard className="text-xl" />,
        colorStart: "#38bdf8",
        colorEnd: "#0ea5e9"
    },
    {
        title: "Payout Solutions",
        description: "Execute vendor payouts and partner disbursements quickly with complete reconciliation controls.",
        icon: <FiRepeat className="text-xl" />,
        colorStart: "#a855f7",
        colorEnd: "#ec4899"
    },
    {
        title: "UPI Payments",
        description: "Enable instant UPI checkout across apps, web, and wallets with minimal integration effort.",
        icon: <FiSmartphone className="text-xl" />,
        colorStart: "#22c55e",
        colorEnd: "#06b6d4"
    },
    {
        title: "Payment Links",
        description: "Share secure payment links through chat, email, and SMS for one-click customer checkout.",
        icon: <FiLink className="text-xl" />,
        colorStart: "#38bdf8",
        colorEnd: "#818cf8"
    },
    {
        title: "Smart Checkout",
        description: "Deliver fast, adaptive checkout flows that reduce friction and boost conversion for every customer.",
        icon: <FiShoppingCart className="text-xl" />,
        colorStart: "#f97316",
        colorEnd: "#fb923c"
    },
    {
        title: "Subscription Billing",
        description: "Automate recurring payments with flexible plans, retry logic, and enterprise-grade reporting.",
        icon: <FiShoppingBag className="text-xl" />,
        colorStart: "#2563eb",
        colorEnd: "#9333ea"
    },
    {
        title: "API Integration",
        description: "Connect your systems through clean APIs, webhooks, and SDKs for powerful payment orchestration.",
        icon: <FiCode className="text-xl" />,
        colorStart: "#0ea5e9",
        colorEnd: "#14b8a6"
    }
];

const VideoService = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMuted, setIsMuted] = useState(true);
    const [isPaused, setIsPaused] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        if (isPaused) return;

        const timer = window.setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
        }, 3600);

        return () => window.clearInterval(timer);
    }, [isPaused]);

    useEffect(() => {
        // Attempt to play on mount (will succeed if muted/autoplay allowed)
        if (videoRef.current) {
            videoRef.current.play().catch(() => {});
        }
    }, []);

    return (        <section
            className="relative w-full overflow-hidden bg-slate-950 text-white"
            style={{ fontFamily: "Poppins, sans-serif" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <video
                autoPlay
                loop
                muted={isMuted}
                ref={videoRef}
                playsInline
                preload="auto"
                className="absolute inset-0 h-full w-full object-cover"
            >
                <source src={aboutVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="absolute inset-0 bg-black/12" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.1),transparent_80%)] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/05 to-slate-950/40 pointer-events-none" />

            <div className="relative mx-auto flex min-h-screen w-full max-w-[1600px] flex-col justify-center px-6 py-24 sm:px-8 lg:px-16">
                <div className="relative mx-auto w-full max-w-4xl">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            {/* <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Experience</p> */}
                            {/* <h3 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                                One service card at a time
                            </h3> */}
                        </div>
                        {/* <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-200/80 shadow-sm">
                            Auto-rotates every 3.6s
                        </div> */}
                    </div>

                    <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/8 bg-transparent p-6 shadow-none backdrop-blur-2xl transition duration-700">
                        <div key={activeIndex} className="animate-fade-up rounded-[1.75rem]  backdrop-blur-3xl transition duration-700">
                            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex items-center gap-4">
                                    <div
                                        className="flex h-16 w-16 items-center justify-center rounded-3xl text-white shadow-lg shadow-slate-950/30"
                                        style={{
                                            backgroundImage: `linear-gradient(135deg, ${services[activeIndex].colorStart}, ${services[activeIndex].colorEnd})`
                                        }}
                                    >
                                        {services[activeIndex].icon}
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                                            Featured service
                                        </p>
                                        <h4 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                                            {services[activeIndex].title}
                                        </h4>
                                    </div>
                                </div>
                                <div className="rounded-full border border-white/10 bg-slate-950/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-200/80">
                                    0{activeIndex + 1}
                                </div>
                            </div>

                            <p className="mt-6 text-base leading-7 text-slate-200/85 sm:text-lg">
                                {services[activeIndex].description}
                            </p>

                            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 text-sm text-slate-200 shadow-inner shadow-slate-950/10">
                                    <p className="uppercase tracking-[0.24em] text-slate-400">Service type</p>
                                    <p className="mt-2 text-lg font-semibold text-white">Fintech payments</p>
                                </div>
                                <a
                                    href="/contact-us"
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-cyan-500/20 transition duration-300 hover:-translate-y-0.5"
                                >
                                    Learn more
                                    <FaArrowRight className="text-sm" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                        {services.map((service, idx) => (
                            <button
                                key={service.title}
                                type="button"
                                onClick={() => setActiveIndex(idx)}
                                className={`h-3 rounded-full transition-all duration-300 ${
                                    idx === activeIndex
                                        ? "w-10 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-md shadow-cyan-500/15"
                                        : "w-3 bg-white/20 hover:bg-white/40"
                                }`}
                                aria-label={`Go to ${service.title}`}
                            />
                        ))}
                    </div>

                    <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                onClick={() => setIsMuted((prev) => !prev)}
                                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-3 text-white transition duration-300 hover:bg-white/20"
                            >
                                {isMuted ? <FaVolumeMute className="text-lg" /> : <FaVolumeUp className="text-lg" />}
                            </button>
                            <div className="rounded-full border border-white/12 bg-transparent px-4 py-3 text-sm text-slate-200/75">
                                {isMuted ? "Audio off" : "Audio on"}
                            </div>
                        </div>
                        <div className="rounded-full border border-white/12 bg-transparent px-4 py-2 text-sm text-slate-200/75 shadow-sm">
                            Tap a dot to jump to any service
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(18px) scale(0.98); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }

                .animate-fade-up {
                    animation: fadeUp 650ms cubic-bezier(0.22, 1, 0.36, 1);
                }

                @media (max-width: 1024px) {
                    .rounded-[2rem] {
                        border-radius: 1.75rem;
                    }
                }

                @media (max-width: 768px) {
                    h2 {
                        font-size: 2.75rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default VideoService;
