import React from "react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

const benefits = [
	"Automate subscription billing",
	"Collect recurring payments instantly",
	"Reduce manual follow-ups",
	"Secure approvals with one-time mandates",
];

const Section2 = () => {
	return (
		<section className="relative overflow-hidden bg-white py-16 md:py-20" style={{ fontFamily: "Poppins, sans-serif" }}>
			<div className="absolute -left-12 top-12 h-48 w-48 rounded-full bg-[#2563eb]/10 blur-3xl pointer-events-none" />

			<div className="relative mx-auto max-w-6xl px-6 md:px-10">
				<div className="grid gap-12 lg:grid-cols-[0.95fr_0.9fr] items-start">
					<div className="space-y-6">
						<span className="inline-flex items-center gap-2 rounded-full bg-[#eff6ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#2563eb]">
							UPI Autopay
						</span>

						<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-gray-900">
							Automate subscriptions &
							<span className="block text-[#2563eb]">Repeat payments</span>
						</h2>

						<p className="max-w-2xl text-sm sm:text-base text-gray-600">
							A clean, modern UPI Autopay experience that reduces manual work and makes payments predictable for your business and customers.
						</p>

						<div className="grid gap-3 sm:grid-cols-2">
							{benefits.map((benefit) => (
								<div key={benefit} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
									<div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#2563eb] shadow-sm">
										<FaCheckCircle className="text-base" />
									</div>
									<p className="text-sm font-medium text-slate-900">{benefit}</p>
								</div>
							))}
						</div>

						<div className="mt-6 flex flex-col sm:flex-row gap-3">
							<a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1f4bb8]">
								Get Started
								<FaArrowRight className="text-xs" />
							</a>
							<a href="/integration" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50">
								Learn Integration
							</a>
						</div>
					</div>

					<div className="rounded-[2rem] border border-slate-200 bg-[#f8fbff] p-6 shadow-sm sm:p-8">
						<p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2563eb]">How it works</p>
						<h3 className="mt-3 text-xl font-semibold text-slate-900">One authorisation, three simple steps</h3>
						<div className="mt-6 space-y-4">
							{[
								{
									title: "Authorize mandate",
									text: "Customer approves the UPI mandate once for future charges.",
								},
								{
									title: "Set payment schedule",
									text: "Choose billing frequency, amount range and retry rules.",
								},
								{
									title: "Collect automatically",
									text: "Payments happen on schedule without manual follow-up.",
								},
							].map((item, index) => (
								<div key={item.title} className="flex items-start gap-4 rounded-3xl bg-white px-4 py-4 shadow-sm">
									<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2563eb]/10 text-[#2563eb] font-semibold">{index + 1}</div>
									<div>
										<p className="font-semibold text-slate-900">{item.title}</p>
										<p className="mt-1 text-sm text-slate-600">{item.text}</p>
									</div>
								</div>
							))}
						</div>
						<div className="mt-6 border-t border-slate-200 pt-4">
							<p className="text-sm text-slate-600">Built for modern businesses that need predictable recurring payments without complexity.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Section2;

