import React, { useState } from "react";

const faqs = [
	{
		question: "What is a one click checkout payment gateway?",
		answer:
			"A one click checkout payment gateway allows returning customers to complete a purchase with a single tap, without re-entering payment details, delivery address, or OTPs. Spay securely stores customer preferences after the first transaction and retrieves them instantly at checkout, dramatically reducing friction and cart abandonment for e-commerce businesses.",
	},
	{
		question:
			"Which businesses can use the one click checkout payment gateway in India?",
		answer:
			"Spay's one click checkout is designed for any e-commerce business operating in India, from D2C brands and fashion retailers to electronics stores, subscription services, and marketplace sellers. Whether you are a startup or an established merchant, Spay scales with your business.",
	},
	{
		question: "How long does one click checkout integration take?",
		answer:
			"Most merchants are fully live within one business day. Shopify and WooCommerce plugin integrations typically take under 30 minutes. For custom API integrations, our comprehensive developer documentation and dedicated support team ensure a smooth, predictable process.",
	},
	{
		question:
			"Is Spay's payment gateway available in Mumbai and Andheri specifically?",
		answer:
			"Yes. Spay Fintech is headquartered in Andheri, Mumbai, and merchants in the Mumbai metropolitan area benefit from local onboarding support and hands-on account management from our Andheri office. We also serve e-commerce businesses across all of India with the same quality of service.",
	},
	{
		question: "What payment modes does Spay support?",
		answer:
			"Spay supports 50+ Indian payment methods including UPI (all major apps), credit and debit cards (Visa, Mastercard, RuPay, Amex), net banking across all major banks, digital wallets, BNPL providers, and EMI on select credit cards.",
	},
	{
		question: "Is Spay's payment gateway secure?",
		answer:
			"Yes. Spay is PCI-DSS Level 1 certified, fully RBI-compliant, and uses end-to-end encryption on every transaction. Our platform also implements real-time fraud detection and 3D Secure authentication to protect both merchants and customers.",
	},
	{
		question: "Does Spay help reduce cart abandonment?",
		answer:
			"Significantly. By removing checkout friction through one click checkout, fast payment processing, and a mobile-optimised checkout UI, Spay merchants typically see a 30 to 40 percent improvement in checkout conversion rates, meaning fewer lost sales and more revenue from the same traffic.",
	},
];

const Faq = () => {
	const [openIndex, setOpenIndex] = useState(0);

	return (
		<section className="relative overflow-hidden bg-[#f2f7ff] py-14 md:py-20">
			<div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#1099d0]/20 blur-3xl" />
			<div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#163f89]/15 blur-3xl" />

			<div className="mx-auto max-w-6xl px-4 md:px-8">
				<div className="grid gap-8 lg:grid-cols-[0.95fr_1.45fr] lg:gap-10">
					<div className="lg:sticky lg:top-24 lg:h-fit">
						<div className="relative overflow-hidden rounded-[28px] border border-[#163f89]/15 bg-white p-6 shadow-[0_24px_60px_-36px_rgba(22,63,137,0.65)] md:p-8">
							<div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#1099d0]/20 blur-2xl" />
							<div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#163f89]/15 blur-2xl" />

							<p className="relative mb-3 inline-flex rounded-full border border-[#163f89]/20 bg-[#f6faff] px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#163f89]">
								One Click Checkout FAQs
							</p>
							<h2 className="relative text-2xl font-bold leading-tight text-[#102e6a] md:text-3xl">
								Frequently Asked Questions About Spay&apos;s One Click Checkout
								Payment Gateway
							</h2>
							<p className="relative mt-4 text-sm leading-relaxed text-[#3a4c70] md:text-base">
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
								
							</div>
						</div>
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
												? "border-[#163f89] bg-[#163f89] text-white"
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
												<span className="text-base font-semibold leading-snug text-[#123778] md:text-lg">
													{item.question}
												</span>
											</span>

											<span
												className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xl font-semibold transition ${
													isOpen
														? "bg-[#163f89] text-white"
														: "bg-[#edf4ff] text-[#163f89]"
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
													<p className="text-sm leading-relaxed text-[#2f3d57] md:text-base">
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
