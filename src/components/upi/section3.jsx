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
		title: "Automated payment collection",
		description:
			"Once the mandate is active, payments collect automatically without manual follow-up, ensuring every billing cycle is handled smoothly.",
	},
	{
		icon: FiTrendingDown,
		title: "Fewer failed payments",
		description:
			"Structured UPI mandates lower payment failures and reduce churn, making revenue more predictable.",
	},
	{
		icon: FiDollarSign,
		title: "Predictable cash flow",
		description:
			"Know when money will arrive. Plan confidently with regular settlements and fewer surprises.",
	},
	{
		icon: FiUsers,
		title: "Lower operational load",
		description:
			"Remove repetitive collection work from your finance team and free them to focus on growth.",
	},
	{
		icon: FiSmartphone,
		title: "Modern customer experience",
		description:
			"Customers approve once and enjoy a frictionless payment journey on every cycle.",
	},
	{
		icon: FiShield,
		title: "Secure, compliant payments",
		description:
			"Built on NPCI infrastructure with strong encryption and Spay’s trusted compliance controls.",
	},
	{
		icon: FiZap,
		title: "Real-time processing",
		description:
			"Transactions move fast and settlement updates arrive quickly through instant notification flows.",
	},
	{
		icon: FiFileText,
		title: "GST-ready reporting",
		description:
			"Receipts and reconciliations are generated automatically for cleaner finance workflows.",
	},
];

const Section3 = () => {
	return (
		<section className="relative overflow-hidden bg-gradient-to-b from-[#eef4ff] via-white to-[#f7fbff] py-16 md:py-24" style={{ fontFamily: "Poppins, sans-serif" }}>
			<div className="absolute -left-12 top-12 h-44 w-44 rounded-full bg-[#2563eb]/15 blur-3xl pointer-events-none" />
			<div className="absolute -right-12 bottom-8 h-44 w-44 rounded-full bg-[#60a5fa]/15 blur-3xl pointer-events-none" />

			<div className="relative mx-auto max-w-6xl px-6 md:px-10">
				<div className="max-w-3xl text-center mx-auto">
					<span className="inline-flex items-center gap-2 rounded-full bg-[#eff6ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#2563eb]">
						Business Impact
					</span>

					<h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-gray-900">
						Built for Recurring Payments
					</h2>

					<p className="mt-5 text-sm sm:text-base text-gray-600">
						A clean payments experience that improves collections, lowers risk, and keeps your customers on schedule.
					</p>
				</div>

				<div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
					{benefitCards.map((item, index) => {
						const Icon = item.icon;

						return (
							<article
								key={item.title}
								className="rounded-[1.5rem] border border-slate-200 bg-[#f8fbff] p-5 transition hover:-translate-y-0.5 hover:shadow-lg"
							>
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#2563eb] shadow-sm">
									<Icon size={20} />
								</div>
								<h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
								<p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Section3;
