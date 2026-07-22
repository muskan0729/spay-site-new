import React from "react";
import { motion } from "framer-motion";
import { FaPlug, FaCreditCard, FaChartLine } from "react-icons/fa";

const steps = [
	{
		number: "01",
		title: "Integrate Spay",
		icon: FaPlug,
		description:
			"Connect via our APIs or plugins in hours, not weeks. Clean documentation, sandbox testing, and dedicated onboarding support help your team move quickly.",
	},
	{
		number: "02",
		title: "Accept Payments",
		icon: FaCreditCard,
		description:
			"Go live across UPI, cards, net banking, and wallets instantly. Intelligent routing keeps your success rates high and checkout failures low.",
	},
	{
		number: "03",
		title: "Track & Settle",
		icon: FaChartLine,
		description:
			"Monitor transactions in real time, manage refunds, and receive settlements on your schedule from one clean dashboard.",
	},
];

const fadeUp = {
	hidden: { opacity: 0, y: 24 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" },
	},
};

const Section8 = () => {
	return (
		<section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f9fbff] to-[#f2f6ff] py-14 sm:py-16 md:py-20">
			<div className="absolute -top-10 right-0 h-56 w-56 rounded-full bg-blue-100/40 blur-3xl" />
			<div className="absolute -bottom-16 left-0 h-64 w-64 rounded-full bg-indigo-100/40 blur-3xl" />

			<div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
					<motion.div
						className="relative max-w-xl"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.35 }}
						variants={fadeUp}
					>
						<div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
							<span className="h-px w-8 bg-blue-200" />
							How It Works
							<span className="h-px w-8 bg-blue-200" />
						</div>

						<h2 className="mt-4 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl">
							Up and Running in
							<span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
								Three Steps
							</span>
						</h2>

						<p className="mt-5 text-sm leading-relaxed text-gray-600 sm:text-base">
							A polished launch flow designed to feel calm, clear, and easy to follow. Each step reduces friction from integration to settlement without adding visual noise.
						</p>

						<div className="mt-8 space-y-3">
							{[
								"Integrate Spay → Fast Merchant Onboarding",
								"Accept Payments → Secure Payment Processing",
								"Track & Settle → Real-Time Tracking & Settlements",
							].map((item) => (
								<div
									key={item}
									className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white px-4 py-3 shadow-[0_8px_20px_rgba(15,23,42,0.04)]"
								>
									<span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600 ring-1 ring-blue-100">
										<FaCreditCard className="text-[11px]" />
									</span>
									<span className="text-sm font-medium text-gray-700">
										{item}
									</span>
								</div>
							))}
						</div>
					</motion.div>

					<div className="relative">
						<div className="space-y-4 sm:space-y-5">
							{steps.map((step, index) => {
								const Icon = step.icon;

								return (
									<motion.article
										key={step.number}
										className="group relative overflow-hidden rounded-[1.45rem] border border-gray-100 bg-white p-5 shadow-[0_12px_28px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(37,99,235,0.08)] sm:p-6 lg:pl-16"
										initial="hidden"
										whileInView="visible"
										viewport={{ once: true, amount: 0.25 }}
										variants={fadeUp}
										transition={{ delay: index * 0.08 }}
									>
										<div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-500 via-sky-500 to-indigo-500" />

										{/* <div className="mb-4 flex items-center justify-between gap-4 lg:absolute lg:left-4 lg:top-6 lg:mb-0 lg:flex-col lg:items-center lg:justify-start">
											<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition duration-300 group-hover:bg-blue-100">
												<Icon className="text-lg" />
											</div>

											<div className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">
												Step {step.number}
											</div>
										</div> */}

										<div className="flex items-start gap-4">
											<span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-[0_10px_20px_rgba(37,99,235,0.18)] lg:hidden">
												{index + 1}
											</span>

											<div>
												<div className="hidden lg:flex lg:items-center lg:gap-3">
													<span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-[0_10px_20px_rgba(37,99,235,0.18)]">
														{index + 1}
													</span>
													<h3 className="text-xl font-semibold text-gray-900 sm:text-[1.3rem]">
														{step.title}
													</h3>
												</div>

												<h3 className="text-xl font-semibold text-gray-900 sm:hidden">
													{step.title}
												</h3>

												<p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
													{step.description}
												</p>
											</div>
										</div>
									</motion.article>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Section8;
