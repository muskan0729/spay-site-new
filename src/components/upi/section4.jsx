import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const faqItems = [
	{
		question: "What is Spay Fintech's UPI Autopay payment gateway in India?",
		answer:
			"Spay Fintech Private Limited offers a UPI Autopay payment gateway in India that enables businesses to collect recurring payments automatically using UPI mandates. It is designed for secure, reliable, and hassle-free subscription billing for modern businesses.",
	},
	{
		question: "How does Spay's UPI Autopay payment gateway work?",
		answer:
			"Spay's UPI Autopay payment gateway allows customers to authorize a one-time mandate. After approval, payments are automatically processed on scheduled dates through our UPI payment gateway, ensuring seamless recurring payment collection.",
	},
	{
		question:
			"Is Spay a secure UPI payment gateway provider in Mumbai and Andheri?",
		answer:
			"Yes, Spay Fintech Private Limited is a trusted UPI payment gateway provider in Mumbai and Andheri, offering a secure payment gateway with advanced encryption, compliance standards, and reliable transaction processing for businesses across India.",
	},
	{
		question:
			"Which businesses can use Spay's UPI Autopay for recurring payments?",
		answer:
			"Spay's UPI Autopay for businesses is ideal for SaaS companies, subscription platforms, OTT services, loan providers, insurance companies, and any business that requires automated recurring billing.",
	},
	{
		question: "How to integrate Spay UPI payment gateway with Autopay?",
		answer:
			"You can easily integrate Spay's UPI payment gateway integration using APIs. Our developer-friendly API payment gateway supports quick onboarding for websites and mobile apps with full UPI Autopay functionality.",
	},
	{
		question:
			"Why choose Spay Fintech as your UPI payment gateway provider in India?",
		answer:
			"Spay Fintech Private Limited stands out as a reliable UPI payment gateway provider in India with high success rates, secure infrastructure, real-time payment processing, and strong local support for businesses in Mumbai, Andheri, and across India.",
	},
];

const Section4 = () => {
	const [openIndex, setOpenIndex] = useState(0);

	const toggleItem = (index) => {
		setOpenIndex((prev) => (prev === index ? -1 : index));
	};

	return (
		<section className="relative overflow-hidden bg-[#f4f8ff] py-16 sm:py-18 md:py-24">
			<style>
				{`
					@keyframes upiFaqRise {
						from {
							opacity: 0;
							transform: translateY(14px) scale(0.985);
						}
						to {
							opacity: 1;
							transform: translateY(0) scale(1);
						}
					}

					@keyframes upiFaqOrb {
						0%,
						100% {
							transform: translateY(0px);
							opacity: 0.4;
						}
						50% {
							transform: translateY(-12px);
							opacity: 0.75;
						}
					}

					@keyframes upiFaqLine {
						0% {
							opacity: 0.3;
						}
						100% {
							opacity: 0.9;
						}
					}

					.upi-faq-rise {
						animation: upiFaqRise 720ms cubic-bezier(0.22, 1, 0.36, 1) both;
					}

					.upi-faq-orb {
						animation: upiFaqOrb 6.2s ease-in-out infinite;
					}

					.upi-faq-line {
						animation: upiFaqLine 2.4s ease-in-out infinite alternate;
					}

					@media (prefers-reduced-motion: reduce) {
						.upi-faq-rise,
						.upi-faq-orb,
						.upi-faq-line {
							animation: none !important;
						}
					}
				`}
			</style>

			<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(122deg,rgba(255,255,255,0.7)_0%,rgba(240,247,255,0.96)_46%,rgba(232,243,255,0.95)_100%)]" />
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(34,79,161,0.1),transparent_38%),radial-gradient(circle_at_88%_78%,rgba(14,165,208,0.13),transparent_42%)]" />
			<div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#1e40af]/12 blur-3xl upi-faq-orb" />
			<div className="pointer-events-none absolute -right-24 bottom-8 h-72 w-72 rounded-full bg-[#06b6d4]/14 blur-3xl upi-faq-orb" style={{ animationDelay: "1.8s" }} />

			<div className="relative mx-auto max-w-7xl px-6 md:px-10">
				<div className="upi-faq-rise mx-auto mb-10 max-w-4xl text-center" style={{ animationDelay: "80ms" }}>
					<span className="inline-flex rounded-full border border-[#dce7f6] bg-white px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#24508d] shadow-sm">
						 FAQs
					</span>
					<h2 className="mt-4 text-3xl font-semibold leading-tight text-[#0f172a] sm:text-4xl md:text-[2.85rem] [font-family:Georgia,Times_New_Roman,serif]">
						Frequently Asked Questions
					</h2>
					
				</div>

				<div className="upi-faq-rise mx-auto max-w-5xl rounded-[1.9rem] border border-[#d8e6f8] bg-white/80 p-4 shadow-[0_26px_62px_-42px_rgba(20,54,111,0.33)] backdrop-blur sm:p-5 md:p-6" style={{ animationDelay: "130ms" }}>
					<div className="pointer-events-none mb-4 h-px w-full bg-gradient-to-r from-transparent via-[#98bce7] to-transparent upi-faq-line" />
					<div className="relative space-y-3 sm:space-y-4">
						{faqItems.map((item, index) => {
							const isOpen = openIndex === index;
							return (
								<article
									key={item.question}
									className={`upi-faq-rise group relative overflow-hidden rounded-[1.25rem] border bg-white shadow-[0_18px_38px_-30px_rgba(20,54,111,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_42px_-30px_rgba(20,54,111,0.38)] ${
										isOpen ? "border-[#bfd5f3]" : "border-[#dbe8f9] hover:border-[#c7dbf6]"
									}`}
									style={{ animationDelay: `${170 + index * 85}ms` }}
								>
									<div className={`pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-[#87adde] to-transparent transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
									<button
										type="button"
										onClick={() => toggleItem(index)}
										aria-expanded={isOpen}
										className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left sm:px-6"
									>
										<div className="flex min-w-0 items-start gap-3">
											<span
												className={`mt-0.5 inline-flex h-8 min-w-8 items-center justify-center rounded-md border text-xs font-bold tracking-[0.12em] ${
													isOpen
														? "border-[#c7daf5] bg-gradient-to-br from-[#edf4ff] to-[#e3eeff] text-[#1f4f95]"
														: "border-[#dbe8f9] bg-[#f6f9ff] text-[#2f5f9f]"
												}`}
											>
												{String(index + 1).padStart(2, "0")}
											</span>
											<span className="text-[1rem] font-semibold leading-snug text-[#10233f] sm:text-[1.05rem]">
												{item.question}
											</span>
										</div>

										<span
											className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${
												isOpen
													? "bg-[#163f89] text-white"
													: "bg-[#edf4ff] text-[#1f4f95]"
											}`}
										>
											{isOpen ? <FaMinus className="text-sm" /> : <FaPlus className="text-sm" />}
										</span>
									</button>

									<div
										className={`grid transition-all duration-300 ${
											isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
										}`}
									>
										<div className="min-h-0 overflow-hidden">
											<div className="border-t border-[#e5eef9] bg-gradient-to-b from-[#f8fbff] via-white to-[#fafdff] px-5 pb-5 pt-4 sm:px-6">
												<p className="text-sm leading-relaxed text-[#586883] sm:text-[0.98rem]">
													{item.answer}
												</p>
											</div>
										</div>
									</div>
								</article>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Section4;
