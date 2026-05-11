import React, { useEffect, useMemo, useState } from "react";

const performanceItems = [
	{
		icon: "fas fa-bullseye",
		title: "Success Rate",
		value: "89.9%",
		detail: "completed checkouts",
	},
	{
		icon: "fas fa-shield-alt",
		title: "Uptime",
		value: "99.9%",
		detail: "payment reliability SLA",
	},
	{
		icon: "fas fa-bolt",
		title: "Checkout Speed",
		value: "1.2s",
		detail: "average payment start",
	},
	{
		icon: "fas fa-chart-line",
		title: "Visitor Conversion",
		value: "56.9K+",
		detail: "monthly successful intents",
	},
];

const getNextHourlySlot = () => {
	const now = new Date();
	const next = new Date(now);
	next.setMinutes(0, 0, 0);
	next.setHours(next.getHours() + 1);
	return next.getTime();
};

const splitDuration = (milliseconds) => {
	const safeValue = Math.max(0, milliseconds);
	const totalSeconds = Math.floor(safeValue / 1000);
	const hours = Math.floor(totalSeconds / 3600);
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	const seconds = totalSeconds % 60;

	return { hours, minutes, seconds };
};

const Section2 = () => {
	const initialTarget = useMemo(() => getNextHourlySlot(), []);
	const [targetTime, setTargetTime] = useState(initialTarget);
	const [timeLeft, setTimeLeft] = useState(() => splitDuration(initialTarget - Date.now()));

	useEffect(() => {
		const timer = setInterval(() => {
			const remaining = targetTime - Date.now();

			if (remaining <= 0) {
				const nextTarget = getNextHourlySlot();
				setTargetTime(nextTarget);
				setTimeLeft(splitDuration(nextTarget - Date.now()));
				return;
			}

			setTimeLeft(splitDuration(remaining));
		}, 1000);

		return () => clearInterval(timer);
	}, [targetTime]);

	return (
		<section className="relative bg-[#f6f9fe] py-12 md:py-16">
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(22,63,137,0.06),transparent_34%),radial-gradient(circle_at_88%_78%,rgba(16,153,208,0.07),transparent_36%)]"></div>

			<div className="relative mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
				<div className="rounded-[1.8rem] border border-[#d8e4f6] bg-gradient-to-b from-white via-[#fbfdff] to-[#f7fbff] px-6 py-6 shadow-[0_22px_58px_-40px_rgba(17,52,112,0.4)] md:px-8 md:py-7">
					<div className="mb-5 flex flex-wrap items-center justify-between gap-4 border-b border-[#e6edf9] pb-5">
						

				
					</div>

					<div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
						{performanceItems.map((item) => (
							<article
								key={item.title}
								className="group rounded-2xl border border-[#dfe9f8] bg-white px-4 py-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c7daf7] hover:shadow-[0_16px_40px_-30px_rgba(16,55,125,0.55)]"
							>
								<div className="flex items-center gap-4">
									<div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d6e4fa] bg-[#edf3ff] text-[#163f89] shadow-sm shadow-[#163f89]/10 ring-1 ring-white">
										<i className={`${item.icon} text-[#163f89]`} aria-hidden="true"></i>
									</div>

									<div className="min-w-0">
										<p className="text-sm font-semibold text-[#5b6f91]">{item.title}</p>
										<p className="text-[2rem] font-semibold leading-none text-[#10294f] [font-family:Georgia,Times_New_Roman,serif]">
											{item.value}
										</p>
									</div>
								</div>

								<p className="mt-3 text-xs font-medium uppercase tracking-[0.11em] text-[#7c8eac]">
									{item.detail}
								</p>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Section2;
