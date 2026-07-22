import React from "react";

const features = [
    {
        title: "Versatile Options",
        description:
            "Enjoy seamless transactions with one click, allowing customers to choose their preferred checkout method with ease.",
    },
    {
        title: "Privacy Protection",
        description:
            "Keep every payment link private and secure with OTP validation and encrypted transaction handling.",
    },
    {
        title: "Multiple Payment Methods",
        description:
            "Accept UPI, net banking, cards, and wallets through a single modern payment link experience.",
    },
    {
        title: "Quick Setup",
        description:
            "Launch your branded checkout and payment links quickly with minimal configuration.",
    },
    {
        title: "Contactless Payments",
        description:
            "Let customers pay safely without physical contact, ensuring faster, frictionless collections.",
    },
    {
        title: "Power Dashboard",
        description:
            "Manage links, notifications, and customer interactions from one sleek dashboard.",
    },
];

const Section2 = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#eef4ff] to-white" style={{ fontFamily: "Poppins, sans-serif" }}>
            <div className="pointer-events-none absolute left-0 top-8 h-56 w-56 rounded-full bg-[#d7e5ff]/80 blur-3xl" />
            <div className="pointer-events-none absolute right-0 bottom-12 h-64 w-64 rounded-full bg-[#eaf1ff]/90 blur-3xl" />
            <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
                <div className="mx-auto max-w-3xl text-center">
                    {/* <p className="text-sm uppercase tracking-[0.3em] text-[#1f3a70] font-semibold">
                       
                    </p> */}
                    <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
                         Maximize Your Spay Experience
                    </h2>
                    <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                        A clean, modern section that presents your Payment Links capabilities clearly while preserving the website’s elegant visual style.
                    </p>
                </div>

                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className="rounded-[1.5rem] border border-white bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#dbe8ff] text-lg font-semibold text-[#1f3a70]">
                                {index + 1}
                            </div>
                            <h3 className="mt-5 text-lg font-semibold text-slate-900">{feature.title}</h3>
                            <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a
                        href="https://spay.live/contact-us"
                        className="inline-flex items-center justify-center rounded-full bg-[#1d4cc9] px-8 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#102f67] hover:shadow-lg"
                    >
                        Start creating payment links
                    </a>
                    <a
                        href="https://spay.live/payment-links"
                        className="inline-flex items-center justify-center rounded-full border border-[#1d4cc9] bg-white px-8 py-3 text-sm font-semibold text-[#1d4cc9] transition duration-300 hover:bg-[#eef4ff]"
                    >
                        Explore link dashboard
                    </a>
                </div> */}
            </div>
        </section>
    );
};

export default Section2;
