import React from "react";
import autopayVisual from "../../assets/images/create-link-11.png";

const trustPoints = ["Instant mandate setup", "NPCI compliant", "24x7 recurring collections"];

const Section1 = () => {
    return (
        <section className="relative overflow-hidden bg-[#f2f5fb]" style={{ fontFamily: "Poppins, sans-serif" }}>
            <style>
                {`
                    @keyframes upiHeroRise {
                        from {
                            opacity: 0;
                            transform: translateY(16px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @keyframes upiPulse {
                        0%,
                        100% {
                            transform: scale(1);
                            opacity: 0.45;
                        }
                        50% {
                            transform: scale(1.08);
                            opacity: 0.72;
                        }
                    }

                    .upi-hero-rise {
                        animation: upiHeroRise 720ms cubic-bezier(0.2, 0.85, 0.2, 1) both;
                    }

                    .upi-hero-pulse {
                        animation: upiPulse 4s ease-in-out infinite;
                    }
                `}
            </style>

            <div className="pointer-events-none absolute left-[-6rem] top-[-5rem] h-[16rem] w-[16rem] rounded-full bg-[#1d4c9a]/20 blur-3xl" />
            <div className="pointer-events-none absolute bottom-[-6rem] right-[-4rem] h-[18rem] w-[18rem] rounded-full bg-[#0ea5d4]/20 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20 lg:py-11">
                <div className="grid items-center gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14">
                    <div className="space-y-7 text-center md:text-left">
                        <p className="inline-flex items-center gap-2 border-l-2 border-[#1099d0] pl-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0f3d91]">
                            Online Payment Links for Easy Collections
                        </p>

                        <h1 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                            Send a payment link.
                            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                Get paid faster.
                            </span>
                        </h1>

                        <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-gray-600 leading-relaxed lg:mx-0">
                            Generate secure payment links in seconds and collect payments through WhatsApp, SMS, email, or social media. No website required. Accept multiple payment methods and provide customers with a fast, seamless payment experience.
                        </p>

                        {/* <div className="flex flex-col items-center gap-4 sm:flex-row md:items-start">
                            <a href="https://spay.live/contact-us" className="rounded-full bg-[#2B7FFF] px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#102f67] hover:shadow-lg hover:shadow-[#163f89]/30">
                                Get Started Now
                            </a>
                        </div> */}
                    </div>

                    <div className="upi-hero-rise mx-auto w-full max-w-xl lg:ml-auto lg:mr-0" style={{ animationDelay: "220ms" }}>
                        <div className="relative">
                            <div className="absolute left-[-1rem] top-6 h-16 w-16 rounded-full bg-[#0ea5d4]/30 blur-2xl upi-hero-pulse" />
                            <div className="absolute bottom-4 right-[-1.2rem] h-20 w-20 rounded-full bg-[#1d4c9a]/25 blur-2xl upi-hero-pulse" style={{ animationDelay: "1.2s" }} />

                            <div className="relative">
                                <img
                                    src={autopayVisual}
                                    alt="Spay Payment Links Gateway Mumbai"
                                    className="h-[260px] w-full rounded-[1.2rem] object-cover sm:h-[470px] md:h-[480px]"
                                />


                                {/* <div className="absolute bottom-5 right-5 rounded-xl border border-[#cfe1ff] bg-white/95 px-3 py-2 text-[11px] font-semibold text-[#193d74] shadow-sm">
                                    Zero missed billing cycles
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section1;
