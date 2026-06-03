import React from "react";

const steps = [
  {
    id: "1",
    title: "Create Your Free Account",
    description:
      "Sign up for a Spay merchant account in minutes. No long contracts, no upfront fees, and no credit card required to explore the sandbox environment.",
  },
  {
    id: "2",
    title: "Integrate the API or Plugin",
    description:
      "Use our one click checkout integration API or select the pre-built plugin for your e-commerce platform. Our developer documentation covers every scenario, and our support team is available to help at every stage.",
  },
  {
    id: "3",
    title: "Customize and Test",
    description:
      "Brand the checkout with your logo, color palette, and messaging. Run full payment flows in the test environment to ensure everything works exactly as intended before going live.",
  },
  {
    id: "4",
    title: "Go Live and Grow",
    description:
      "Launch with confidence. From day one, you will have access to real-time analytics, dedicated support, and a checkout experience that is actively working to convert more of your visitors into paying customers.",
  },
];

const Section4 = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#fbfdff] to-[#f6f9fe] py-14 sm:py-16 md:py-20">
      <style>
        {`
          @keyframes stepFadeUp {
            from {
              opacity: 0;
              transform: translateY(16px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes stepGlow {
            0%, 100% {
              opacity: 0.3;
              transform: scale(0.98);
            }
            50% {
              opacity: 0.7;
              transform: scale(1.03);
            }
          }

          .step-fade-up {
            animation: stepFadeUp 720ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
          }

          .step-glow {
            animation: stepGlow 5.5s ease-in-out infinite;
          }
        `}
      </style>

      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#163f89]/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#1099d0]/8 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#163f89]/6 via-transparent to-[#1099d0]/6 blur-3xl step-glow" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-6 lg:px-10">
        <div className="step-fade-up mx-auto max-w-3xl text-center" style={{ animationDelay: "80ms" }}>
          <span className="inline-flex rounded-full bg-[#eaf1ff] px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1f56aa]">
            How It Works
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
            How to Set Up Spay&apos;s One Click Checkout Integration
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
            Getting started with Spay is designed to be straightforward, even if your team has never integrated a payment gateway before. Here is the process from sign-up to first sale:
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 md:gap-6">
          {steps.map((step, index) => (
            <article
              key={step.id}
              className="step-fade-up group rounded-[1.7rem] border border-[#dbe7f6] bg-white p-5 shadow-[0_14px_36px_-32px_rgba(20,54,111,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-[#c7daf5] hover:shadow-[0_20px_44px_-34px_rgba(16,63,136,0.22)] sm:p-6"
              style={{ animationDelay: `${140 + index * 90}ms` }}
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-[#edf3ff] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2b5ca9]">
                  Step {step.id}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-[#dbe7f6] to-transparent ml-3"></div>
              </div>

              <div className="flex items-start gap-4 sm:gap-5">
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#155DFC] text-white shadow-[0_14px_26px_-18px_rgba(22,63,137,0.55)]">
                  <div className="absolute inset-0 rounded-full ring-1 ring-white/60" />
                  <span className="text-lg font-semibold leading-none">{step.id}</span>
                </div>

                <div className="min-w-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;
