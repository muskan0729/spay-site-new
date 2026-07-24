import React, { useState } from "react";

const faqs = [
	{
		question: "How do I choose the best payment gateway provider for my business in India?",
		answer:
			"Choosing the right payment gateway provider depends on factors such as security, payment success rate, settlement speed, supported payment methods, and ease of integration. A reliable online payment gateway should support UPI, cards, net banking, and digital wallets while providing a secure checkout experience. Spay helps businesses across India accept payments with a scalable, secure payment gateway designed for startups, e-commerce brands, and enterprises.",
	},
	{
		question:
			"Which businesses can benefit from an online payment gateway?",
		answer:
			"An online payment gateway is suitable for e-commerce stores, service providers, educational institutions, healthcare businesses, travel companies, SaaS platforms, subscription-based businesses, freelancers, and retailers. Whether you're launching a startup or managing an established enterprise, Spay's payment gateway simplifies online payment collection and supports business growth with secure and reliable payment processing.",
	},
	{
		question: "How long does it take to integrate a payment gateway into a website or mobile app?",
		answer:
			"With Spay's API payment gateway, businesses can integrate online payments quickly using developer-friendly APIs, SDKs, and ready-to-use plugins. Depending on your platform and requirements, payment gateway integration can often be completed within a short timeframe, enabling you to start accepting UPI payments, cards, and other digital payment methods with minimal development effort.",
	},
	{
		question:
			"Why is payment success rate important when choosing a payment gateway?",
		answer:
			"A high payment success rate means more successful transactions and fewer failed payments, directly impacting revenue and customer satisfaction. Spay's secure payment gateway is built to deliver reliable payment processing, intelligent routing, and a seamless checkout experience, helping businesses improve conversions and reduce transaction failures.",
	},
	{
		question: "Does Spay support multiple payment methods through a single payment gateway integration?",
		answer:
			"Yes. Spay offers a multi payment gateway solution that enables businesses to accept payments through UPI, credit cards, debit cards, net banking, digital wallets, payment links, and recurring payments—all through a single integration. This simplifies payment management while giving customers the flexibility to pay using their preferred payment method.",
	},
	{
		question: "Why do businesses across India choose Spay as their payment gateway provider?",
		answer:
			"Businesses choose Spay because it combines secure payment processing, easy integration, multiple payment options, and reliable support in one platform. Our payment gateway in India is designed to help startups, SMEs, e-commerce brands, and enterprises accept online payments with confidence. With scalable technology, fast settlements, and developer-friendly APIs, Spay enables businesses to streamline collections and deliver a better payment experience. ",
	},
	{
		question: "Does Spay help reduce cart abandonment?",
		answer:
			"Significantly. By removing checkout friction through one click checkout, fast payment processing, and a mobile-optimized checkout UI, Spay merchants typically see a 30 to 40 percent improvement in checkout conversion rates, meaning fewer lost sales and more revenue from the same traffic.",
	},
];

const Faq = () => {
	const [openIndex, setOpenIndex] = useState(0);

	return (
		<section className="relative overflow-hidden bg-[#f2f7ff] py-14 md:py-20">
			<div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#1099d0]/20 blur-3xl" />
			<div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#163f89]/15 blur-3xl" />

			<div className="mx-auto max-w-6xl px-4 md:px-8">
				{/* <div className="grid gap-8 lg:grid-cols-[0.95fr_1.45fr] lg:gap-10"> */}
				<div className="max-w-5xl mx-auto">
					<div className="lg:sticky lg:top-24 lg:h-fit">
						{/* <div className="relative overflow-hidden rounded-[28px] border border-[#163f89]/15 bg-white p-6 shadow-[0_24px_60px_-36px_rgba(22,63,137,0.65)] md:p-8">
							<div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#1099d0]/20 blur-2xl" />
							<div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#163f89]/15 blur-2xl" />

							<p className="relative mb-3 inline-flex rounded-full border border-[#163f89]/20 bg-[#f6faff] px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#163f89]">
								One Click Checkout FAQs
							</p>
							<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
								Frequently Asked Questions About Spay&apos;s One Click Checkout
								Payment Gateway
							</h2>
							<p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
								Everything merchants ask before going live. Tap a question to view
								the answer.
							</p>

							<div className="relative mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
								<div className="rounded-2xl border border-[#d8e8ff] bg-[#f7fbff] px-4 py-3">
									<p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#163f89]">
										Integration
									</p>
									<p className="mt-1 text-lg font-bold text-[#0e336f]">1 day</p>
								</div>
								<div className="rounded-2xl border border-[#d8e8ff] bg-[#f7fbff] px-4 py-3">
									<p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#163f89]">
										Payment Modes
									</p>
									<p className="mt-1 text-lg font-bold text-[#0e336f]">50+</p>
								</div>
								
							</div> */}
						{/* </div> */}
					</div>

					<div className="relative space-y-4">
						<div className="pointer-events-none absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-[#163f89]/50 via-[#1099d0]/30 to-transparent md:block" />

						{faqs.map((item, index) => {
							const isOpen = openIndex === index;
							const serial = String(index + 1).padStart(2, "0");

							return (
								<article
									key={item.question}
									className="group relative md:pl-11"
								>
									<span
										className={`absolute left-0 top-5 hidden h-8 w-8 items-center justify-center rounded-full border text-xs font-bold tracking-[0.1em] md:flex ${
											isOpen
												? "bg-[#155DFC] text-white"
												: "border-[#b7cff5] bg-white text-[#163f89]"
										}`}
									>
										{serial}
									</span>

									<div className="overflow-hidden rounded-3xl border border-[#d4e4ff] bg-white shadow-[0_16px_42px_-30px_rgba(22,63,137,0.55)] transition group-hover:border-[#163f89]/40">
										<button
											type="button"
											onClick={() => setOpenIndex(isOpen ? -1 : index)}
											className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left md:px-7"
											aria-expanded={isOpen}
										>
											<span className="flex items-start gap-3">
												<span className="mt-0.5 rounded-lg bg-[#eff5ff] px-2 py-1 text-[10px] font-bold tracking-[0.16em] text-[#163f89] md:hidden">
													{serial}
												</span>
												<span className="text-xl font-semibold text-gray-900 leading-snug md:text-lg">
													{item.question}
												</span>
											</span>

											<span
												className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xl font-semibold transition ${
													isOpen
														? "bg-[#155DFC] text-white"
														: "bg-[#155DFC] text-white"
												}`}
												aria-hidden="true"
											>
												{isOpen ? "-" : "+"}
											</span>
										</button>

										<div
											className={`grid overflow-hidden transition-all duration-300 ${
												isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
											}`}
										>
											<div className="min-h-0">
												<div className="border-t border-[#e8f1ff] bg-gradient-to-r from-[#f9fcff] to-white px-5 pb-6 pt-4 md:px-7 md:pt-5">
													<p className="text-gray-600 text-sm leading-relaxed md:text-base">
														{item.answer}
													</p>
												</div>
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

export default Faq;
