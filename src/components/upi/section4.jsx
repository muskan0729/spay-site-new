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
question: "Why choose Spay Fintech as your UPI payment gateway provider in India?",
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
<section className="relative overflow-hidden bg-gradient-to-b from-[#eff6ff] via-white to-[#f8fbff] py-16 md:py-24">
<div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent pointer-events-none" />
<div className="absolute -left-12 top-12 h-44 w-44 rounded-full bg-[#2563eb]/10 blur-3xl pointer-events-none" />
<div className="absolute -right-16 bottom-8 h-44 w-44 rounded-full bg-[#06b6d4]/10 blur-3xl pointer-events-none" />

<div className="relative mx-auto max-w-6xl px-6 md:px-10">
<div className="max-w-3xl text-center mx-auto">
<span className="inline-flex items-center gap-2 rounded-full bg-[#eff6ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#2563eb]">
FAQs
</span>

<h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-slate-900">
Clear answers to your UPI Autopay questions
<span className="block text-[#2563eb]">built for modern businesses.</span>
</h2>

<p className="mt-5 text-sm sm:text-base text-slate-600">
Everything you need to know about Spay UPI Autopay, integration, security, and recurring billing.
</p>
</div>

<div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
<div className="space-y-4">
{faqItems.map((item, index) => {
const isOpen = openIndex === index;
return (
<article
key={item.question}
className={`overflow-hidden rounded-[1.5rem] border bg-white shadow-sm transition-all duration-300 ${
isOpen ? "border-[#cfe0fd] shadow-[0_22px_48px_-30px_rgba(29,78,216,0.2)]" : "border-[#e2e8f0] hover:border-[#cbd5e1] hover:shadow-[0_10px_24px_-18px_rgba(15,23,42,0.12)]"
}`}
>
<button
type="button"
onClick={() => toggleItem(index)}
aria-expanded={isOpen}
className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
>
<div className="flex min-w-0 items-start gap-4">
<span className={`mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl border text-sm font-semibold ${
isOpen ? "border-[#cfe0fd] bg-[#eff6ff] text-[#2563eb]" : "border-[#dbeafe] bg-[#f8fbff] text-[#1d4ed8]"
}`}> 
{index + 1}
</span>
<span className="text-base font-semibold leading-tight text-slate-900">{item.question}</span>
</div>
<span className={`flex h-9 w-9 items-center justify-center rounded-full text-white transition ${
isOpen ? "bg-[#2563eb]" : "bg-[#e2e8f0] text-[#2563eb]"
}`}>{isOpen ? <FaMinus className="text-sm" /> : <FaPlus className="text-sm" />}</span>
</button>

<div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-screen" : "max-h-0"}`}>
<div className="border-t border-[#e2e8f0] bg-[#f8fbff] px-6 py-5 text-sm leading-relaxed text-slate-600">
{item.answer}
</div>
</div>
</article>
);
})}
</div>

<div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
<p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2563eb]">Need help faster?</p>
<h3 className="mt-3 text-2xl font-semibold text-slate-900">Talk to our UPI payments team</h3>
<p className="mt-4 text-sm leading-relaxed text-slate-600">
Our experts can answer setup questions, share integration templates, and help you go live with UPI billing confidently.
</p>
<div className="mt-6 space-y-3 rounded-[1.5rem] bg-[#eff6ff] p-4">
<p className="text-sm font-semibold text-slate-900">What we include</p>
<ul className="space-y-2 text-sm text-slate-600">
<li>• Rapid onboarding support</li>
<li>• API integration guidance</li>
<li>• Settlement and compliance advice</li>
</ul>
</div>
<a
href="/contact"
className="inline-flex items-center justify-center rounded-full bg-[#2563eb] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1f4bb8]"
>
Contact Support
</a>
</div>
</div>
</div>
</section>
);
};

export default Section4;
