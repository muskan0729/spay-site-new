import React from "react";
import heroImage from "../../assets/images/one-click-checkout-payment-gateway-mumbai-india.jpeg";

const HeroSection = () => {
	return (
		<section className="relative overflow-hidden bg-[#f5f7fb]">
			<div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(15,61,145,0.09),transparent_38%),radial-gradient(circle_at_85%_80%,rgba(51,123,181,0.10),transparent_36%)]"></div>

			<div className="relative mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20 lg:py-22">
				<div className="grid items-center gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14">
					<div className="space-y-7 text-center md:text-left">
						<p className="inline-flex items-center gap-2 border-l-2 border-[#1099d0] pl-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0f3d91]">
							One Click Checkout Payment Gateway
						</p>

						<h1 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
							Checkout that converts.
							<span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
								Payment that flows.
							</span>
						</h1>

						<p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-gray-600 leading-relaxed lg:mx-0">
							Spay Fintech gives e-commerce businesses across India a fast, elegant one-click checkout experience, built to reduce cart abandonment and turn browser intent into completed payments.
						</p>

						<div className="flex flex-col items-center gap-4 sm:flex-row md:items-start">
							<a href="https://spay.live/contact-us" className="rounded-full bg-[#2B7FFF] px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#102f67] hover:shadow-lg hover:shadow-[#163f89]/30">
								Get Started Now
							</a>
						</div>
					</div>

					<div className="mx-auto w-full max-w-xl lg:ml-auto lg:mr-0">
						<div className="relative overflow-hidden  ]">
							<img
								src={heroImage}
								alt="Spay one click checkout interface preview"
								className="h-[250px] w-full rounded-2xl object-cover sm:h-[300px] md:h-[340px]"
							/>


							{/* <div className="absolute right-5 top-5 rounded-xl bg-[#163f89] px-3 py-2 text-xs font-semibold text-white shadow-lg">
								+34% conversion uplift
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
