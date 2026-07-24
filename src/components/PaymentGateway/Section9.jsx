import React from "react";
import { motion } from "framer-motion";
import {
	FaMobileAlt,
	FaCreditCard,
	FaUniversity,
	FaWallet,
	FaLink,
	FaRedoAlt,
} from "react-icons/fa";

const paymentMethods = [
	{
		title: "UPI Payments",
		icon: <FaMobileAlt />,
		description:
			"Fast, familiar, and the preferred choice for most Indian shoppers. Supports all major UPI apps with high success rates even during peak traffic.",
	},
	{
		title: "Credit & Debit Cards",
		icon: <FaCreditCard />,
		description:
			"Visa, Mastercard, RuPay, and Amex with 3D Secure authentication and smart routing to maximise approvals.",
	},
	{
		title: "Net Banking",
		icon: <FaUniversity />,
		description:
			"50+ banks supported. Reliable for high-value transactions and B2B payments where customers prefer direct bank transfers.",
	},
	{
		title: "Digital Wallets",
		icon: <FaWallet />,
		description:
			"Paytm, Amazon Pay, Mobikwik, and more. Particularly effective for repeat buyers and lower-ticket purchases.",
	},
	{
		title: "Payment Links",
		icon: <FaLink />,
		description:
			"No website needed. Create and share payment links over WhatsApp or email in seconds. A favourite tool for service businesses across Mumbai.",
	},
	{
		title: "UPI Autopay",
		icon: <FaRedoAlt />,
		description:
			"Collect subscriptions and recurring payments automatically. Reduce follow-ups and build predictable monthly revenue.",
	},
];

const Section9 = () => {
	const fadeUp = {
		hidden: { opacity: 0, y: 24 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.55, ease: "easeOut" },
		},
	};

	return (
		<section className="relative overflow-hidden bg-white py-14 sm:py-16 md:py-20">
			<div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,rgba(248,251,255,0.65),rgba(255,255,255,0.9))]" />

			<div className="relative mx-auto max-w-6xl px-6">
				<div className="mx-auto max-w-4xl text-center">
					<motion.p
						className="inline-flex items-center gap-2 border-l-2 border-[#1099d0] pl-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#163f89]"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeUp}
					>
						Payment Methods Supported
					</motion.p>

					<motion.h2
						className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeUp}
						transition={{ delay: 0.06 }}
					>
						Every Way Your Customer Wants to Pay
					</motion.h2>

					<motion.p
						className="mx-auto mt-4 max-w-3xl text-sm sm:text-base text-gray-600 leading-relaxed"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeUp}
						transition={{ delay: 0.12 }}
					>
						From UPI to credit cards, Spay covers every major payment method in India so nothing stands between your customer and a completed order.
					</motion.p>
				</div>

				<div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{paymentMethods.map((method, index) => (
						<motion.article
							key={method.title}
							className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300"
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							variants={fadeUp}
							transition={{ delay: index * 0.05 }}
							whileHover={{ y: -4 }}
						>
							<div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

							<div className="flex items-start gap-4">
								<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eff6ff] text-[#2563EB] ring-1 ring-blue-100 transition-transform duration-300 group-hover:scale-105">
									<span className="text-lg">{method.icon}</span>
								</div>

								<div className="min-w-0">
									<h4 className="text-lg font-semibold text-gray-900">{method.title}</h4>
									<p className="mt-2 text-sm leading-relaxed text-gray-600">{method.description}</p>
								</div>
							</div>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
};

export default Section9;
