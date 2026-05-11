import React from "react";

const benefits = [
	"Automate subscription billing",
	"Collect monthly or recurring payments",
	"Reduce manual follow-ups",
	"Ensure timely payment collection",
];

const Section2 = () => {
	return (
		<section className="relative overflow-hidden bg-[#f7f9fd] py-14 sm:py-16 md:py-20">
			<style>
				{`
					@keyframes sectionRise {
						from {
							opacity: 0;
							transform: translateY(16px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}

					@keyframes orbit {
						0%,
						100% {
							transform: rotate(0deg);
						}
						50% {
							transform: rotate(180deg);
						}
					}

					@keyframes lineGlow {
						0% {
							opacity: 0.45;
						}
						100% {
							opacity: 0.95;
						}
					}

					.s2-rise {
						animation: sectionRise 700ms cubic-bezier(0.22, 1, 0.36, 1) both;
					}

					.s2-orbit {
						animation: orbit 9s linear infinite;
					}

					.s2-line-glow {
						animation: lineGlow 2.4s ease-in-out infinite alternate;
					}

					@media (prefers-reduced-motion: reduce) {
						.s2-rise,
						.s2-orbit,
						.s2-line-glow {
							animation: none !important;
						}
					}
				`}
			</style>

			<div className="pointer-events-none absolute -left-28 top-6 h-64 w-64 rounded-full bg-[#1d4c9a]/10 blur-3xl" />
			<div className="pointer-events-none absolute -right-28 bottom-0 h-64 w-64 rounded-full bg-[#0ea5d4]/10 blur-3xl" />

			<div className="relative mx-auto max-w-7xl px-6 md:px-10">
				<div className="s2-rise mx-auto max-w-3xl text-center" style={{ animationDelay: "80ms" }}>
					<span className="inline-flex rounded-full border border-[#d8e4f5] bg-white px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#24508d] shadow-sm">
						UPI Autopay Explained
					</span>
					<h2 className="mt-4 text-3xl font-semibold leading-tight text-[#0f172a] sm:text-4xl md:text-[2.75rem] [font-family:Georgia,Times_New_Roman,serif]">
						What is UPI Autopay?
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#55647c] sm:text-base md:text-[1.03rem]">
						UPI Autopay is a feature that allows businesses to collect recurring payments automatically through UPI mandates. Customers authorize a payment once, and future transactions are processed automatically based on the schedule you define.
					</p>
				</div>

				<div className="mt-12 rounded-[2rem] border border-[#dce7f7] bg-white/95 p-5 shadow-[0_24px_60px_-36px_rgba(16,39,84,0.24)] md:p-7 lg:p-8">
					<div className="grid items-stretch gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
						<div className="s2-rise relative overflow-hidden rounded-[1.6rem] border border-[#e3ecf8] bg-gradient-to-b from-[#f8fbff] to-[#f0f6ff] p-6 md:p-7" style={{ animationDelay: "160ms" }}>
							<div className="pointer-events-none absolute right-[-2.4rem] top-[-2.4rem] h-24 w-24 rounded-full border border-[#b8cff1]/60" />
							<div className="pointer-events-none absolute right-[-2.4rem] top-[-2.4rem] h-24 w-24 rounded-full border border-[#b8cff1]/60 s2-orbit" />

							<p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#24508d]">
							With a UPI Autopay payment gateway, businesses can:
							</p>

							<div className="mt-5 space-y-3">
							{benefits.map((benefit, index) => (
								<div
									key={benefit}
									className="s2-rise group flex items-start gap-4 rounded-2xl border border-[#e4edf9] bg-white px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#cdddF4] hover:shadow-[0_16px_30px_-24px_rgba(22,63,137,0.28)]"
									style={{ animationDelay: `${220 + index * 80}ms` }}
								>
									<span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#edf3ff] text-sm font-semibold text-[#163f89] transition-colors duration-300 group-hover:bg-[#d9e8ff]">
										{String(index + 1).padStart(2, "0")}
									</span>
									<div>
										<p className="text-sm font-semibold text-[#12233d] sm:text-[0.98rem]">{benefit}</p>
									</div>
								</div>
							))}
							</div>
						</div>

						<div className="s2-rise relative rounded-[1.6rem] border border-[#e3ecf8] bg-white p-6 md:p-7" style={{ animationDelay: "250ms" }}>
							<div className="pointer-events-none absolute inset-x-6 top-0 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#89ace0] to-transparent s2-line-glow" />
							<div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr] md:gap-7">
								<div>
								<p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#24508d]">
									Built for recurring revenue
								</p>
								<h3 className="mt-3 text-2xl leading-tight font-semibold text-[#0f172a] [font-family:Georgia,Times_New_Roman,serif]">
									One mandate, automatic future collections.
								</h3>
								<p className="mt-4 text-sm leading-relaxed text-[#5c697d]">
									Let customers approve once and continue collecting payments on the schedule you define, without repeated reminders or manual intervention.
								</p>

								<div className="mt-6 grid grid-cols-3 gap-2 rounded-[1.2rem] bg-[#f7faff] p-3 text-center">
									{["Authorize", "Schedule", "Collect"].map((step) => (
										<div key={step} className="rounded-xl border border-[#e0ebfb] bg-white py-2">
											<p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#5074a9]">{step}</p>
										</div>
									))}
								</div>

								<div className="mt-5 rounded-[1.2rem] border border-[#e4edf9] bg-[#fbfdff] p-4">
									<p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#355c92]">
										Ideal for
									</p>
									<p className="mt-2 text-sm leading-relaxed text-[#49576b]">
										This makes UPI Autopay for businesses an ideal solution for subscription-based models and recurring billing systems.
									</p>
								</div>
							</div>

								<div className="grid gap-3">
								{[
									["Subscription billing", "Perfect for SaaS, memberships, and digital services."],
									["Recurring payments", "Collect monthly dues, EMIs, and utility payments."],
									["Lower admin effort", "Cut down on payment reminders and manual follow-ups."],
								].map(([title, text], index) => (
									<div
										key={title}
										className="s2-rise rounded-[1.1rem] border border-[#e6edf7] bg-[#fcfdff] px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d5e4fa] hover:shadow-[0_12px_26px_-24px_rgba(22,63,137,0.4)]"
										style={{ animationDelay: `${310 + index * 95}ms` }}
									>
										<p className="text-sm font-semibold text-[#163f89]">{title}</p>
										<p className="mt-1.5 text-sm leading-relaxed text-[#5c697d]">{text}</p>
									</div>
								))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Section2;
