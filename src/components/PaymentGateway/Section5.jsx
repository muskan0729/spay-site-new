import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const features = [
	{
		title: "Bank-Grade Security",
		description:
			"Every transaction on Spay Fintech's secure payment gateway is protected with 256-bit SSL encryption, tokenisation, and 3D Secure authentication. Merchants across Mumbai, Andheri, and India can accept payments knowing every customer transaction is completely safe.",
	},
	{
		title: "High Success Rate",
		description:
			"Smart routing and real-time retry logic push transaction success rates above 99% consistently making Spay Fintech India's most reliable high success rate payment gateway. Fewer failures mean more revenue and happier customers for your business every single day.",
	},
	{
		title: "Real-Time Payment Processing",
		description:
			"Spay Fintech processes every transaction in under 1.5 seconds  so customers across Mumbai, Andheri, and pan-India never wait at checkout. Fast payment processing is not a feature here it is our everyday standard.",
	},
	{
		title: "Advanced Analytics Dashboard",
		description:
			"Get real-time reports, settlement summaries, refund tracking, and transaction-level insights all from one powerful merchant dashboard. Whether you are in Andheri or anywhere across India, complete payment visibility is always at your fingertips.",
	},
	{
		title: "Mobile Payment Gateway",
		description:
			"Spay Fintech's mobile payment gateway is fully optimised for Android and iOS no extra SDK required for most use cases. Your customers get a smooth, fast checkout experience on any device, anywhere in India.",
	},
	{
		title: "Infinite Scalability",
		description:
			"Our cloud-native infrastructure auto-scales from 100 to 100,000 transactions per minute during peak seasons zero downtime, zero stress. Businesses across Mumbai, Andheri, and pan-India stay fully operational no matter how high the traffic goes.",
	},
];

const Section5 = () => {
	return (
		<section className="relative overflow-hidden bg-gradient-to-b from-[#f0f7ff] via-white to-[#e8f3ff] py-14 sm:py-16 md:py-20">
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.09),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.08),transparent_34%)]" />
				<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200/70 to-transparent" />
				<div className="absolute -top-28 -left-20 h-72 w-72 rounded-full bg-blue-100/18 blur-3xl" />
				<div className="absolute top-24 right-10 h-44 w-44 rounded-full bg-sky-100/18 blur-3xl" />
				<div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-blue-100/14 blur-3xl" />
			</div>

			<div className="relative container mx-auto px-4 sm:px-6">
				<div className="mx-auto max-w-3xl text-left sm:text-center mb-10 sm:mb-12">
					<p className="inline-flex items-center gap-2 rounded-full border border-[#163f89]/15 bg-[#f6faff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#163f89] shadow-[0_8px_20px_rgba(15,23,42,0.05)]">
						<FaCheckCircle className="text-[#2563eb]" />
						Features Built for High-Growth Businesses
					</p>

				<h2 className="mt-5 text-3xl font-semibold leading-tight text-[#0d2447] sm:text-4xl [font-family:Georgia,Times_New_Roman,serif]">
					Features Built for High-Growth Businesses
				</h2>

				<p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#5a6f90] sm:text-base">
						Speed, security, and scalability these aren't just promises. They are engineered into every layer of Spay Fintech's payment infrastructure.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
					{features.map((feature) => (
						<article
							key={feature.title}
							className="group rounded-2xl border border-slate-200 bg-[#fbfcfe] p-5 shadow-[0_10px_24px_-18px_rgba(15,23,42,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_18px_36px_-22px_rgba(29,78,216,0.28)] sm:p-6"
						>
							<div className="flex items-start gap-4">
								<div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100 transition-colors duration-300 group-hover:bg-emerald-100">
									<FaCheckCircle className="text-sm" />
								</div>

								<div className="min-w-0 flex-1">
									<h3 className="text-sm font-semibold leading-snug text-[#0d2447] sm:text-base">
										{feature.title}
									</h3>
										<p className="mt-2 text-sm leading-relaxed text-[#3a4c70]">
										{feature.description}
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

export default Section5;
