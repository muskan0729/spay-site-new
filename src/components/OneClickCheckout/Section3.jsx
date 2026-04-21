import React from "react";

const featureItems = [
	{
		icon: "fas fa-magic",
		title: "Instant checkout in one click",
		description:
			"Return customers pay in a single tap. Spay securely saves payment details so your shoppers never have to fill a form twice.",
	},
	{
		icon: "fas fa-code",
		title: "Developer-friendly API",
		description:
			"Our RESTful API lets your dev team integrate one click checkout in hours, not weeks. Clean docs, test sandbox, and full SDK support included.",
	},
	{
		icon: "fas fa-mobile-alt",
		title: "Mobile-first design",
		description:
			"Every pixel of our checkout UI is optimized for smartphones. Fast, clean, thumb-friendly, and designed to work beautifully on every device.",
	},
	{
		icon: "fas fa-shield-alt",
		title: "Bank-grade security",
		description:
			"PCI-DSS compliant, end-to-end encrypted, and RBI-regulated. Your customers' data is protected at every step of the payment journey.",
	},
	{
		icon: "fas fa-credit-card",
		title: "50+ payment modes",
		description:
			"UPI, credit and debit cards, net banking, wallets, BNPL, every Indian payment method your customers prefer, all in one place.",
	},
	{
		icon: "fas fa-chart-line",
		title: "Real-time analytics",
		description:
			"Track conversion rates, payment success rates, drop-off points, and revenue in real time from your Spay merchant dashboard.",
	},
];

const Section3 = () => {
	return (
		<section className="relative overflow-hidden bg-[#f4f8ff] py-16 sm:py-18 md:py-22">
			<style>
				{`
					@keyframes whySpayFadeUp {
						from {
							opacity: 0;
							transform: translateY(18px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}

					@keyframes whySpayFloat {
						0%, 100% {
							transform: translateY(0px) scale(1);
						}
						50% {
							transform: translateY(-8px) scale(1.02);
						}
					}

					.why-spay-fade-up {
						animation: whySpayFadeUp 760ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
					}

					.why-spay-float {
						animation: whySpayFloat 6s ease-in-out infinite;
					}
				`}
			</style>

			<div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#163f89]/10 blur-3xl" />
			<div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#1099d0]/10 blur-3xl" />

			<div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
				<div className="why-spay-fade-up mx-auto mb-10 max-w-3xl text-center md:mb-14" style={{ animationDelay: "80ms" }}>
					<p className="text-[11px] font-semibold uppercase tracking-[0.17em] text-[#1f56aa]">
						Why Spay
					</p>
					<h2 className="mt-3 text-3xl font-semibold leading-tight text-[#0d2447] sm:text-4xl [font-family:Georgia,Times_New_Roman,serif]">
						Everything your checkout needs, nothing it does not.
					</h2>
					<p className="mt-4 text-sm leading-relaxed text-[#5a6f90] sm:text-base">
						Our fast checkout payment gateway is engineered specifically for Indian
						e-commerce, with features that drive real business outcomes.
					</p>
				</div>

				<div className="grid gap-5 lg:grid-cols-12 lg:grid-rows-3">
					<aside className="why-spay-fade-up lg:col-span-4 lg:row-span-3" style={{ animationDelay: "120ms" }}>
						<div className="relative h-full overflow-hidden rounded-[1.7rem] border border-[#d9e5f8] bg-gradient-to-br from-[#163f89] via-[#1f56aa] to-[#1099d0] p-6 text-white shadow-[0_24px_55px_-34px_rgba(16,66,145,0.7)] sm:p-7">
							<div className="why-spay-float pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full border border-white/25" />
							<div className="why-spay-float pointer-events-none absolute -left-10 bottom-10 h-28 w-28 rounded-full border border-white/20" style={{ animationDelay: "1.8s" }} />

							<p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/85">
								Built For Indian E-commerce
							</p>
							<h3 className="mt-3 text-2xl font-semibold leading-tight [font-family:Georgia,Times_New_Roman,serif] sm:text-[1.9rem]">
								Checkout performance that directly impacts revenue.
							</h3>
							<p className="mt-4 text-sm leading-relaxed text-white/90">
								From first tap to settlement, Spay is designed to reduce friction,
								increase trust, and lift conversion for fast-moving brands.
							</p>

							<div className="mt-6 grid grid-cols-2 gap-3">
								<div className="rounded-xl border border-white/25 bg-white/10 p-3 backdrop-blur-sm">
									<p className="text-[1.35rem] font-semibold leading-none [font-family:Georgia,Times_New_Roman,serif]">1-click</p>
									<p className="mt-1 text-[11px] uppercase tracking-[0.1em] text-white/80">Checkout flow</p>
								</div>
								<div className="rounded-xl border border-white/25 bg-white/10 p-3 backdrop-blur-sm">
									<p className="text-[1.35rem] font-semibold leading-none [font-family:Georgia,Times_New_Roman,serif]">99.9%</p>
									<p className="mt-1 text-[11px] uppercase tracking-[0.1em] text-white/80">Uptime focus</p>
								</div>
							</div>
						</div>
					</aside>

					{featureItems.map((item, index) => {
						const layout = [
							"lg:col-span-4 lg:row-span-1",
							"lg:col-span-4 lg:row-span-1",
							"lg:col-span-4 lg:row-span-1",
							"lg:col-span-4 lg:row-span-1",
							"lg:col-span-4 lg:row-span-1",
							"lg:col-span-4 lg:row-span-1",
						];

						return (
							<article
								key={item.title}
								className={`why-spay-fade-up group relative overflow-hidden rounded-2xl border border-[#dbe7f8] bg-white p-5 shadow-[0_16px_38px_-32px_rgba(20,54,111,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-[#c7daf6] hover:shadow-[0_24px_46px_-34px_rgba(16,63,136,0.48)] sm:p-6 ${layout[index]}`}
								style={{ animationDelay: `${170 + index * 85}ms` }}
							>
								<div className="absolute right-3 top-2 text-[2.4rem] font-semibold leading-none text-[#d9e6fa] [font-family:Georgia,Times_New_Roman,serif]">
									0{index + 1}
								</div>

								<div className="flex items-start gap-3">
									<div className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#d6e4fa] bg-[#edf3ff] text-[#163f89] shadow-sm shadow-[#163f89]/10 ring-1 ring-white">
										<i className={`${item.icon} text-[#163f89]`} aria-hidden="true"></i>
									</div>

									<div className="min-w-0">
										<h3 className="text-[1.03rem] font-semibold leading-snug text-[#10294f]">
											{item.title}
										</h3>
										<p className="mt-2 text-sm leading-relaxed text-[#5f7496]">
											{item.description}
										</p>
									</div>
								</div>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Section3;
