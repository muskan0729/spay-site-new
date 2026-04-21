import React from "react";
import { FaCheckCircle, FaServer, FaCode, FaWebhook, FaRocket } from "react-icons/fa";

const steps = [
	{
		number: "01",
		title: "Register & Get API Credentials",
		description:
			"Submit merchant KYC via Spay's portal. Receive sandbox API keys and developer documentation within 24 hours.",
		accent: "#18b9c3",
		icon: FaCheckCircle,
	},
	{
		number: "02",
		title: "Explore the Sandbox",
		description:
			"Simulate mandate creation, debit execution, failures, retries, and cancellations in the sandbox. Our test environment mirrors production exactly.",
		accent: "#1aa6d7",
		icon: FaServer,
	},
	{
		number: "03",
		title: "Integrate Mandate API",
		description:
			"Call the /v2/upi/mandate endpoint to create mandates. Pass customer VPA, amount, frequency, start date, and your webhook URL. Receive a mandate ID and deep link instantly.",
		accent: "#f0b34f",
		icon: FaCode,
	},
	{
		number: "04",
		title: "Handle Webhooks",
		description:
			"Set up your webhook listener to receive real-time callbacks for mandate approval, successful debits, failures, cancellations, and settlement confirmations.",
		accent: "#f34a55",
		icon: FaWebhook,
	},
	{
		number: "05",
		title: "Go Live",
		description:
			"Complete merchant verification, switch API keys to production, and start collecting. Your customers can set mandates immediately. Most merchants complete this in 2–5 business days.",
		accent: "#2f6ee5",
		icon: FaRocket,
	},
];

const Section4 = () => {
	return (
		<section className="relative overflow-hidden bg-[#f5f8fc] py-16 sm:py-18 md:py-24">
			<style>
				{`
					@keyframes s4Rise {
						from {
							opacity: 0;
							transform: translateY(18px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}

					@keyframes s4Float {
						0%, 100% {
							transform: translateY(0px);
						}
						50% {
							transform: translateY(-6px);
						}
					}

					@keyframes s4Sheen {
						0% {
							background-position: 0% 50%;
						}
						100% {
							background-position: 100% 50%;
						}
					}

					.s4-rise {
						animation: s4Rise 720ms cubic-bezier(0.22, 1, 0.36, 1) both;
					}

					.s4-float {
						animation: s4Float 5.8s ease-in-out infinite;
					}

					.s4-sheen {
						background-image: linear-gradient(120deg, rgba(24,185,195,0.18), rgba(26,166,215,0.18), rgba(47,110,229,0.18));
						background-size: 200% 200%;
						animation: s4Sheen 6s linear infinite alternate;
					}

					@media (prefers-reduced-motion: reduce) {
						.s4-rise,
						.s4-float,
						.s4-sheen {
							animation: none !important;
						}
					}
				`}
			</style>

			<div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-[#18b9c3]/10 blur-3xl s4-float" />
			<div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#f0b34f]/10 blur-3xl s4-float" style={{ animationDelay: "1.1s" }} />
			<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8e4f5] to-transparent" />

			<div className="relative mx-auto max-w-7xl px-6 md:px-10">
				<div className="grid items-start gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12">
					<div className="s4-rise lg:sticky lg:top-8" style={{ animationDelay: "80ms" }}>
						<span className="inline-flex rounded-full border border-[#dbe7f6] bg-white px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#24508d] shadow-sm">
							Integration Workflow
						</span>

						<h2 className="mt-4 text-3xl font-semibold leading-tight text-[#0f172a] sm:text-4xl md:text-[2.9rem] [font-family:Georgia,Times_New_Roman,serif]">
							UPI Payment Gateway Integration
							<br className="hidden sm:block" />
							From Zero to Live in 3 Days
						</h2>

						<p className="mt-5 max-w-xl text-sm leading-relaxed text-[#5c697d] sm:text-base md:text-[1.03rem]">
							One of the most common questions developers ask is how difficult UPI payment gateway integration really is. With Spay, the honest answer is surprisingly simple. Our API payment gateway is REST-based, thoroughly documented, and includes sandbox simulation tools so your team can test every mandate flow before touching production.
						</p>

						<div className="mt-7 rounded-[1.65rem] border border-[#dfe9f8] bg-white p-5 shadow-[0_18px_44px_-32px_rgba(20,54,111,0.18)]">
							<p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#24508d]">
								Integration Checklist for Developers
							</p>
							<div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
								{steps.map((step) => (
									<div key={step.number} className="group flex items-center gap-3 rounded-2xl border border-[#edf2fb] bg-[#fbfdff] px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d4e4fb] hover:bg-white hover:shadow-[0_14px_28px_-24px_rgba(20,54,111,0.28)]">
										<span className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold text-white transition-transform duration-300 group-hover:scale-105" style={{ backgroundColor: step.accent }}>
											{step.number}
										</span>
										<span className="text-sm font-medium text-[#12233d]">{step.title}</span>
									</div>
								))}
							</div>
						</div>
					</div>

					<div className="s4-rise" style={{ animationDelay: "140ms" }}>
						<div className="relative rounded-[2.1rem] border border-[#dfe9f8] bg-white p-5 shadow-[0_24px_60px_-36px_rgba(20,54,111,0.18)] md:p-6">
							<div className="pointer-events-none absolute inset-x-6 top-0 h-[2px] rounded-full s4-sheen" />

							<div className="mb-6 flex items-center justify-between gap-4">
								<div>
									<p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#24508d]">
										Developer journey
									</p>
									<h3 className="mt-2 text-xl font-semibold text-[#0f172a] [font-family:Georgia,Times_New_Roman,serif]">
										Build once, test safely, go live confidently
									</h3>
								</div>
								<div className="hidden rounded-full border border-[#e2ebf8] bg-[#f7faff] px-3 py-1 text-xs font-semibold text-[#5c697d] md:block">
									5 steps
								</div>
							</div>

							<div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
								{steps.map((step, index) => {
									const Icon = step.icon;

									return (
										<article
											key={step.number}
											className={`s4-rise group relative overflow-hidden rounded-[1.55rem] border border-[#e6edf7] bg-[#f8fbff] p-5 shadow-[0_14px_30px_-28px_rgba(20,54,111,0.26)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d5e4fa] hover:shadow-[0_18px_38px_-28px_rgba(20,54,111,0.34)] ${index % 2 === 1 ? "md:translate-y-4 xl:translate-y-4" : ""}`}
										style={{ animationDelay: `${180 + index * 90}ms`, borderTopColor: step.accent }}
										>
										<div className="absolute right-0 top-0 h-16 w-16 rounded-bl-[1.2rem]" style={{ backgroundColor: `${step.accent}12` }} />
										<div className="absolute left-0 top-0 h-[3px] w-full" style={{ backgroundColor: step.accent }} />

											<div className="relative flex items-start justify-between gap-4">
												<div className="flex min-w-0 items-start gap-4">
													<div
													className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-white shadow-[0_12px_24px_-18px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-105"
														style={{ backgroundColor: step.accent }}
													>
														<Icon size={17} />
													</div>

													<div className="min-w-0">
														<span className="inline-flex rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#5b6982] shadow-sm">
															Step {step.number}
														</span>
														<h3 className="mt-3 text-[1rem] font-semibold leading-snug text-[#10233f]">
															{step.title}
														</h3>
													</div>
												</div>

											<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#dbe7f6] bg-white text-sm font-semibold text-[#2c568f] shadow-sm">
													{step.number}
												</span>
											</div>

											<p className="relative mt-4 text-sm leading-relaxed text-[#5c697d]">
												{step.description}
											</p>
										</article>
									);
								})}
							</div>

								<div className="mt-6 rounded-[1.5rem] border border-[#e2ebf8] bg-[#fbfdff] p-4 md:p-5">
								<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
									<div>
										<p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#24508d]">Typical delivery window</p>
										<p className="mt-1 text-sm text-[#5c697d]">Most merchants complete implementation in 2–5 business days once their KYC and webhook setup are ready.</p>
									</div>
									<div className="inline-flex items-center gap-2 rounded-full bg-[#eff5ff] px-4 py-2 text-sm font-semibold text-[#1f4f95]">
										<span className="h-2.5 w-2.5 rounded-full bg-[#18b9c3]" />
										Sandbox-ready from day one
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Section4;
