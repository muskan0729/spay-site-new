import React from "react";
import { FaShieldAlt, FaBolt, FaChartLine, FaCheckCircle, FaClock, FaLock } from "react-icons/fa";

const benefitCards = [
    {
        icon: FaShieldAlt,
        title: "Regulatory Compliant",
        description: "NPCI-approved transfers with enterprise-grade security protocols. Every payout follows stringent audit trails and compliance standards.",
    },
    {
        icon: FaBolt,
        title: "Lightning Fast Settlements",
        description: "Instant UPI and IMPS transfers. Process payouts in seconds, not hours. Your vendors get paid faster, improving satisfaction and trust.",
    },
    {
        icon: FaCheckCircle,
        title: "Finance Team Ready",
        description: "Intuitive approval workflows, batch management, and exception handling. Built specifically for accounting and finance departments.",
    },
    {
        icon: FaChartLine,
        title: "Real-time Analytics",
        description: "Live dashboards with detailed payout insights, success rates, and reconciliation reports. Data-driven visibility at your fingertips.",
    },
    {
        icon: FaClock,
        title: "Scheduled Payouts",
        description: "Plan payouts in advance with flexible scheduling options. Automate recurring payments to vendors, employees, and partners.",
    },
    {
        icon: FaLock,
        title: "Bank-Grade Security",
        description: "256-bit encryption, multi-factor authentication, and tokenization. Your payout data is protected with military-grade security standards.",
    },
];

const Section3 = () => {
    return (
        <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-28" style={{ fontFamily: "Poppins, sans-serif" }}>
            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(16px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .fade-in-up {
                    animation: fadeInUp 600ms cubic-bezier(0.4, 0, 0.2, 1) both;
                }

                .benefit-card {
                    transition: all 400ms cubic-bezier(0.4, 0, 0.2, 1);
                }

                .benefit-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 24px 48px rgba(30, 64, 175, 0.18);
                }

                .benefit-card:hover .icon-wrapper {
                    transform: scale(1.08) rotate(-5deg);
                }

                .icon-wrapper {
                    transition: all 400ms cubic-bezier(0.4, 0, 0.2, 1);
                }

                .top-accent {
                    background: linear-gradient(90deg, transparent, rgba(29, 78, 216, 0.1), transparent);
                }
            `}</style>

            {/* Background decorative elements */}
            <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-50/60 blur-3xl" />
            <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-indigo-50/40 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(29,78,216,0.05),transparent_50%),radial-gradient(circle_at_75%_75%,rgba(59,130,246,0.04),transparent_50%)]" />

            <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                {/* Header */}
                <div className="mb-16 text-center md:text-left">
                    <div className="fade-in-up">
                        <p className="inline-block border-l-4 border-blue-600 pl-4 text-sm font-bold uppercase tracking-[0.15em] text-blue-700">
                            Why Choose Us
                        </p>
                    </div>

                    <h2 
                        className="fade-in-up mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
                        style={{ animationDelay: "80ms" }}
                    >
                        Payout Features Built for
                        <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mt-2">
                            Enterprise Excellence
                        </span>
                    </h2>

                    <p 
                        className="fade-in-up mt-6 max-w-3xl text-base text-gray-600 leading-relaxed"
                        style={{ animationDelay: "140ms" }}
                    >
                        Every feature we've built addresses real challenges faced by finance teams. Compliance, speed, security, and control all in one unified platform.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {benefitCards.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <article
                                key={item.title}
                                className="benefit-card group relative flex flex-col rounded-2xl border border-gray-200/80 bg-white p-8 shadow-md overflow-hidden"
                                style={{ animationDelay: `${idx * 60}ms` }}
                            >
                                {/* Top accent line */}
                                <div className="top-accent absolute inset-x-0 top-0 h-1" />

                                {/* Icon */}
                                <div className="mb-6">
                                    <div className="icon-wrapper inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 text-white shadow-md">
                                        <Icon size={24} className="text-blue-600" />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-bold text-gray-900 mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-sm leading-relaxed text-gray-600 flex-grow">
                                    {item.description}
                                </p>

                                {/* Arrow indicator */}
                                {/* <div className="mt-6 flex items-center text-blue-600 text-sm font-semibold opacity-0 transition-all duration-300 group-hover:opacity-100">
                                    <span>Learn more</span>
                                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div> */}
                            </article>
                        );
                    })}
                </div>

                {/* Bottom CTA Section */}
                <div className="fade-in-up mt-16 rounded-2xl border border-blue-200/50 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 p-8 sm:p-12 text-center" style={{ animationDelay: "500ms" }}>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                        Ready to revolutionize your payouts?
                    </h3>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                        Join hundreds of businesses transforming their payout operations with Spay Fintech.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/contact-us" className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3 text-sm font-bold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5">
                            Start for Free
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                        <a href="/integration" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-blue-300 bg-white px-8 py-3 text-sm font-bold text-blue-600 transition-all duration-300 hover:bg-blue-50">
                            See Integration Guide
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section3;
