import React from "react";
import {
	FiRefreshCw,
	FiTrendingDown,
	FiDollarSign,
	FiUsers,
	FiSmartphone,
	FiShield,
	FiZap,
	FiFileText,
} from "react-icons/fi";

const benefitCards = [
	{
		icon: FiRefreshCw,
		title: "100% Automated Payment Collection",
		description:
			"Once the mandate is in place, your automatic payment processing engine runs without human intervention. Every billing date, every month, every customer is handled automatically.",
	},
	{
		icon: FiTrendingDown,
		title: "Dramatic Reduction in Churn and Missed Payments",
		description:
			"Voluntary churn happens when customers leave. Involuntary churn happens when payments fail silently. UPI Autopay's structured mandate system reduces payment failure rates by up to 60% compared to reminder-based collection.",
	},
	{
		icon: FiDollarSign,
		title: "Predictable, Reliable Cash Flow",
		description:
			"Know exactly how much revenue will hit your account each settlement cycle. Forecast confidently, plan operations accurately, and stop guessing month-end numbers.",
	},
	{
		icon: FiUsers,
		title: "Reduce Operations Headcount",
		description:
			"Manual payment teams spend hours chasing customers, reconciling payments, and updating records. With UPI payment gateway integration, this entire workflow is automated, freeing your team for higher-value work.",
	},
	{
		icon: FiSmartphone,
		title: "Frictionless Customer Experience",
		description:
			"Customers approve once and forget. No monthly login, no reminder anxiety, and no re-entering card details. A better payment experience means higher retention and stronger NPS scores.",
	},
	{
		icon: FiShield,
		title: "Fully Secure and Compliant",
		description:
			"UPI Autopay operates on NPCI's secure infrastructure. Spay's gateway adds PCI-DSS compliance, AES-256 encryption, and RBI-regulated payment aggregator status, making it one of the most secure payment gateway options in India.",
	},
	{
		icon: FiZap,
		title: "Real-Time Payment Processing and Settlement",
		description:
			"Debits happen at the scheduled time. Settlement notifications hit your system instantly via webhook. No waiting, no batch delays. True real-time payment processing for modern businesses.",
	},
	{
		icon: FiFileText,
		title: "Automatic Invoicing and GST-Ready Reports",
		description:
			"Each successful debit auto-generates a payment receipt and updates your MIS. GST-ready reports export in one click, saving your finance team hours every month-end.",
	},
];

const Section3 = () => {
	return (
		<section className="relative overflow-hidden bg-[#f5f8fc] py-16 sm:py-18 md:py-24">
			<style>
				{`
					@keyframes b3Rise {
						from {
							opacity: 0;
							transform: translateY(20px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}

					@keyframes b3Glow {
						0%,
						100% {
							opacity: 0.2;
							transform: scale(1);
						}
						50% {
							opacity: 0.45;
							transform: scale(1.05);
						}
					}

					.b3-rise {
						animation: b3Rise 720ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
					}

					.b3-glow {
						animation: b3Glow 6s ease-in-out infinite;
					}

					@media (prefers-reduced-motion: reduce) {
						.b3-rise,
						.b3-glow {
							animation: none !important;
						}
					}
				`}
			</style>

			<div className="pointer-events-none absolute -left-24 top-8 h-72 w-72 rounded-full bg-[#1e40af]/10 blur-3xl b3-glow" />
			<div className="pointer-events-none absolute -right-16 bottom-2 h-72 w-72 rounded-full bg-[#06b6d4]/10 blur-3xl b3-glow" style={{ animationDelay: "1.4s" }} />
			<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8e4f5] to-transparent" />

			<div className="relative mx-auto max-w-7xl px-6 md:px-10">
				<div className="b3-rise mx-auto max-w-4xl text-center" style={{ animationDelay: "80ms" }}>
					<span className="inline-flex rounded-full border border-[#dce7f6] bg-white px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#24508d] shadow-sm">
						Business Impact
					</span>

					<h2 className="mt-4 text-3xl font-semibold leading-tight text-[#0f172a] sm:text-4xl md:text-[2.8rem] [font-family:Georgia,Times_New_Roman,serif]">
						Benefits of UPI Autopay for Businesses
						
						
					</h2>

					<p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-[#56657f] sm:text-base md:text-[1.05rem]">
						If you manage a business with monthly subscribers, loan EMIs, insurance premiums, or any kind of scheduled payment, you already know the pain of manual follow-ups, missed payments, and awkward customer conversations. UPI Autopay for businesses eliminates that pain entirely. Here is what you gain:
					</p>
				</div>

				<div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
					{benefitCards.map((item, index) => {
						const Icon = item.icon;

						return (
							<article
								key={item.title}
								className="b3-rise group relative overflow-hidden rounded-[1.35rem] border border-[#deebfa] bg-white p-5 shadow-[0_14px_34px_-28px_rgba(20,54,111,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-[#cddff6] hover:shadow-[0_18px_36px_-28px_rgba(20,54,111,0.26)]"
								style={{ animationDelay: `${140 + index * 80}ms` }}
							>
								<div className="pointer-events-none absolute right-0 top-0 flex h-16 w-16 items-center justify-center rounded-bl-[1.1rem] bg-[#eff5ff]">
									<span className="text-sm font-semibold text-[#2c568f]">
										{String(index + 1).padStart(2, "0")}
									</span>
								</div>

								<div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#d8e6fb] bg-[#eef5ff] text-[#1f4f95] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#dfeeff]">
									<Icon size={20} />
								</div>

								<h3 className="text-[1.04rem] font-semibold leading-snug text-[#10233f]">
									{item.title}
								</h3>

								<p className="mt-3 text-sm leading-relaxed text-[#586883]">
									{item.description}
								</p>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Section3;
