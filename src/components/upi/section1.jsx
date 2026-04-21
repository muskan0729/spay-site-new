import React from "react";
import autopayVisual from "../../assets/images/autopay7.webp";

const trustPoints = ["Instant mandate setup", "NPCI compliant", "24x7 recurring collections"];

const Section1 = () => {
	return (
		<section className="relative overflow-hidden bg-[#f2f5fb]">
			<style>
				{`
					@keyframes upiHeroRise {
						from {
							opacity: 0;
							transform: translateY(16px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}

					@keyframes upiPulse {
						0%,
						100% {
							transform: scale(1);
							opacity: 0.45;
						}
						50% {
							transform: scale(1.08);
							opacity: 0.72;
						}
					}

					.upi-hero-rise {
						animation: upiHeroRise 720ms cubic-bezier(0.2, 0.85, 0.2, 1) both;
					}

					.upi-hero-pulse {
						animation: upiPulse 4s ease-in-out infinite;
					}
				`}
			</style>

			<div className="pointer-events-none absolute left-[-6rem] top-[-5rem] h-[16rem] w-[16rem] rounded-full bg-[#1d4c9a]/20 blur-3xl" />
			<div className="pointer-events-none absolute bottom-[-6rem] right-[-4rem] h-[18rem] w-[18rem] rounded-full bg-[#0ea5d4]/20 blur-3xl" />

			<div className="relative mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20 lg:py-16">
				<div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
					<div className="upi-hero-rise space-y-7 text-center md:text-left" style={{ animationDelay: "70ms" }}>
						<p className="inline-flex items-center gap-2 border-l-2 border-[#1099d0] pl-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0f3d91]">
							UPI AutoPay For India
						</p>

						<h1 className="text-[2rem] font-medium leading-[1.12] text-[#09162b] sm:text-5xl lg:text-[3.5rem] [font-family:Georgia,Times_New_Roman,serif]">
							Recurring payments
							<br />
							that never miss a <span className="italic text-[#1d4c9a]">beat.</span>
						</h1>

						<p className="mx-auto max-w-xl text-[1.03rem] leading-relaxed text-[#2a3a52] md:mx-0 md:text-lg">
							Launch UPI AutoPay in days with Spay Fintech. Collect subscriptions, EMIs, and utility dues with seamless e-mandates, predictable settlements, and a checkout your customers trust.
						</p>

						{/* <div className="flex flex-wrap justify-center gap-2.5 md:justify-start">
							{trustPoints.map((point, index) => (
								<span
									key={point}
									className="upi-hero-rise rounded-full border border-[#d5e3f9] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#1c3e77] shadow-sm"
									style={{ animationDelay: `${160 + index * 100}ms` }}
								>
									{point}
								</span>
							))}
						</div> */}

						<div className="flex flex-col items-center gap-4 sm:flex-row md:items-start">
							<a
								href="https://spay.live/contact-us"
								className="rounded-full bg-[#163f89] px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#102f67] hover:shadow-lg hover:shadow-[#163f89]/30"
							>
								Get Started Now
							</a>
							<a
								href="https://spay.live/integration"
								className="rounded-full border border-[#163f89]/25 bg-white px-8 py-3 text-sm font-semibold text-[#163f89] transition-colors duration-300 hover:bg-[#edf3ff]"
							>
								View API Docs
							</a>
						</div>
					</div>

					<div className="upi-hero-rise mx-auto w-full max-w-xl lg:ml-auto lg:mr-0" style={{ animationDelay: "220ms" }}>
						<div className="relative">
							<div className="absolute left-[-1rem] top-6 h-16 w-16 rounded-full bg-[#0ea5d4]/30 blur-2xl upi-hero-pulse" />
							<div className="absolute bottom-4 right-[-1.2rem] h-20 w-20 rounded-full bg-[#1d4c9a]/25 blur-2xl upi-hero-pulse" style={{ animationDelay: "1.2s" }} />

							<div className="relative overflow-hidden rounded-[1.7rem] border border-white/80 bg-gradient-to-br from-white to-[#e8f1ff] p-4 shadow-[0_20px_50px_-24px_rgba(23,53,110,0.38)] md:p-5">
								<img
									src={autopayVisual}
									alt="Spay UPI AutoPay dashboard preview"
									className="h-[260px] w-full rounded-[1.2rem] object-cover sm:h-[320px] md:h-[360px]"
								/>

								<div className="absolute left-5 top-5 rounded-xl bg-[#0f3d91] px-3 py-2 text-xs font-semibold text-white shadow-lg">
									AutoPay success rate 99.9%
								</div>

								<div className="absolute bottom-5 right-5 rounded-xl border border-[#cfe1ff] bg-white/95 px-3 py-2 text-[11px] font-semibold text-[#193d74] shadow-sm">
									Zero missed billing cycles
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Section1;
