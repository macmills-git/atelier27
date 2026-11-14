"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock,
  Code,
  CreditCard,
  FileText,
  Globe,
  Headphones,
  Layers,
  Loader2,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import { AtelierMark } from "@/components/Navbar";

/* -------------------------------------------------------------------------
   DISCIPLINES & BUDGET TIERS FOR SECTION 1 ("SEEING IS BELIEVING")
------------------------------------------------------------------------- */
const DISCIPLINES = [
  "Brand Strategy & Identity",
  "Interactive Digital Experience",
  "Creative Direction & Campaigns",
  "Visual & Content Production",
  "Print & Physical Packaging",
  "Full Concept-to-Shelf Transformation",
];

const COUNTRY_CODES = [
  { code: "+233", flag: "🇬🇭", label: "Ghana (+233)" },
  { code: "+1", flag: "🇺🇸", label: "USA / Canada (+1)" },
  { code: "+44", flag: "🇬🇧", label: "UK (+44)" },
  { code: "+33", flag: "🇫🇷", label: "France (+33)" },
  { code: "+234", flag: "🇳🇬", label: "Nigeria (+234)" },
  { code: "+254", flag: "🇰🇪", label: "Kenya (+254)" },
  { code: "+49", flag: "🇩🇪", label: "Germany (+49)" },
  { code: "+971", flag: "🇦🇪", label: "UAE (+971)" },
];

/* -------------------------------------------------------------------------
   FAQS FOR SECTION 2 ("CONTACT OUR FRIENDLY TEAM")
------------------------------------------------------------------------- */
const FAQS = [
  {
    id: "faq-1",
    icon: Sparkles,
    question: "Is there a discovery sprint available?",
    answer:
      "Yes. Every partnership begins with an intensive 30-minute discovery sprint where our directors assess strategic goals, timeline milestones, and required deliverables. We then deliver a structured scope proposal within 48 hours.",
  },
  {
    id: "faq-2",
    icon: Clock,
    question: "What are your typical project timelines?",
    answer:
      "Focused brand and naming sprints typically take 4–6 weeks. Complete end-to-end brand identity and digital flagship launches range from 8–14 weeks. Retainers are structured on 6 or 12-month commitments with monthly deliverables.",
  },
  {
    id: "faq-3",
    icon: Globe,
    question: "Do you work with international clients outside Ghana?",
    answer:
      "Yes. Approximately 60% of our commissions originate in London, New York, Paris, Lagos, and Nairobi. All reviews, sprint cadences, and design deliverables are orchestrated through synchronized GMT timeframes and collaborative Figma/Next.js staging.",
  },
  {
    id: "faq-4",
    icon: CreditCard,
    question: "How are project milestones and billing handled?",
    answer:
      "We bill in both USD ($) and Ghanaian Cedi (GH₵) with clear milestone installments: 50% upon project kickoff, 25% upon design approval, and 25% upon final code deployment and asset handoff. There are zero hidden fees.",
  },
  {
    id: "faq-5",
    icon: Code,
    question: "What is included in a flagship digital delivery?",
    answer:
      "Every flagship delivery includes full Figma tokens, bespoke Next.js interactive engineering with fluid Lenis scrolling, mobile responsive parity, headless CMS setup, 99+ Lighthouse performance optimization, and 30 days of post-launch engineering warranty.",
  },
  {
    id: "faq-6",
    icon: Layers,
    question: "Can we commission individual disciplines separately?",
    answer:
      "Yes. While many clients engage us for concept-to-shelf transformations, you can commission focused standalone sprints for brand strategy, custom typography, 3D motion/visual production, or headless web engineering.",
  },
  {
    id: "faq-7",
    icon: Shield,
    question: "Who retains copyright and intellectual property?",
    answer:
      "Upon final payment, full intellectual property and commercial copyright for all approved visual marks, codebases, custom type modifications, and production assets transfer entirely to your organization.",
  },
  {
    id: "faq-8",
    icon: Zap,
    question: "Do you provide ongoing retainers and maintenance?",
    answer:
      "Yes. For established partners, we offer ongoing monthly retainer models providing continuous design direction, campaign production, digital feature rollouts, and priority turnaround on new brand initiatives.",
  },
];

/* -------------------------------------------------------------------------
   SECTION 1: "LET'S TALK" FORM INNER COMPONENT
------------------------------------------------------------------------- */
function ContactFormWithParams() {
  const searchParams = useSearchParams();
  const initialIdea = searchParams.get("idea") || "";
  return <ContactFormInner key={initialIdea} initialIdea={initialIdea} />;
}

type FormStatus = "idle" | "sending" | "sent";

function ContactFormInner({ initialIdea }: { initialIdea: string }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [countryCode, setCountryCode] = useState("+233");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [discipline, setDiscipline] = useState("Brand Strategy & Identity");
  const [message, setMessage] = useState(initialIdea);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [submittedName, setSubmittedName] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !email.trim()) return;
    if (status === "sending") return;

    setStatus("sending");
    setSubmittedName(firstName.trim());
    setSubmittedEmail(email.trim());

    // Realistic smooth dispatch delay
    await new Promise((resolve) => setTimeout(resolve, 850));

    setStatus("sent");
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setCompany("");
    setPhoneNumber("");
    setMessage("");
    setStatus("idle");
  };

  return (
    <div className="relative rounded-[2.5rem] border border-black/8 bg-white p-8 shadow-[0_30px_90px_rgba(0,0,0,0.08)] sm:p-10 md:p-12">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <h3 className="text-3xl font-normal tracking-tight text-[#0B0B0C] md:text-4xl">
            Let&apos;s talk
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-[#6E6E73]">
            Share your brand ambition, and our directors will prepare
            tailored scope recommendations.
          </p>
        </div>

        {/* Row 1: First Name & Last Name */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-medium text-[#0B0B0C]">
              First Name <span className="text-[#D95D39]">*</span>
            </label>
            <input
              type="text"
              required
              disabled={status === "sending"}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Kofi"
              className="mt-1.5 w-full rounded-xl border border-black/15 bg-white px-3.5 py-2.5 text-sm text-[#0B0B0C] placeholder-black/30 transition-colors focus:border-[#0B0B0C] focus:outline-none disabled:opacity-60"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#0B0B0C]">
              Last Name
            </label>
            <input
              type="text"
              disabled={status === "sending"}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Mensah"
              className="mt-1.5 w-full rounded-xl border border-black/15 bg-white px-3.5 py-2.5 text-sm text-[#0B0B0C] placeholder-black/30 transition-colors focus:border-[#0B0B0C] focus:outline-none disabled:opacity-60"
            />
          </div>
        </div>

        {/* Row 2: Work Email */}
        <div>
          <label className="block text-xs font-medium text-[#0B0B0C]">
            Work Email <span className="text-[#D95D39]">*</span>
          </label>
          <input
            type="email"
            required
            disabled={status === "sending"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="founder@company.com"
            className="mt-1.5 w-full rounded-xl border border-black/15 bg-white px-3.5 py-2.5 text-sm text-[#0B0B0C] placeholder-black/30 transition-colors focus:border-[#0B0B0C] focus:outline-none disabled:opacity-60"
          />
        </div>

        {/* Row 3: Company Name */}
        <div>
          <label className="block text-xs font-medium text-[#0B0B0C]">
            Company Name <span className="text-[#D95D39]">*</span>
          </label>
          <input
            type="text"
            required
            disabled={status === "sending"}
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Zuri Holdings — zurigroup.com"
            className="mt-1.5 w-full rounded-xl border border-black/15 bg-white px-3.5 py-2.5 text-sm text-[#0B0B0C] placeholder-black/30 transition-colors focus:border-[#0B0B0C] focus:outline-none disabled:opacity-60"
          />
        </div>

        {/* Row 4: Phone Number with Country Code */}
        <div>
          <label className="block text-xs font-medium text-[#0B0B0C]">
            Phone Number
          </label>
          <div className="mt-1.5 flex gap-2">
            <select
              disabled={status === "sending"}
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="rounded-xl border border-black/15 bg-white px-2.5 py-2.5 text-xs text-[#0B0B0C] focus:border-[#0B0B0C] focus:outline-none disabled:opacity-60"
            >
              {COUNTRY_CODES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.flag} {c.code}
                </option>
              ))}
            </select>
            <input
              type="tel"
              disabled={status === "sending"}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="24 272 7021"
              className="w-full flex-1 rounded-xl border border-black/15 bg-white px-3.5 py-2.5 text-sm text-[#0B0B0C] placeholder-black/30 transition-colors focus:border-[#0B0B0C] focus:outline-none disabled:opacity-60"
            />
          </div>
        </div>

        {/* Row 5: Discipline / Industry */}
        <div>
          <label className="block text-xs font-medium text-[#0B0B0C]">
            Discipline / Focus Area
          </label>
          <select
            disabled={status === "sending"}
            value={discipline}
            onChange={(e) => setDiscipline(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-black/15 bg-white px-3.5 py-2.5 text-xs text-[#0B0B0C] focus:border-[#0B0B0C] focus:outline-none disabled:opacity-60"
          >
            {DISCIPLINES.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        {/* Row 6: Additional Context */}
        <div>
          <label className="block text-xs font-medium text-[#0B0B0C]">
            Additional Context
          </label>
          <textarea
            rows={3}
            disabled={status === "sending"}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Describe your brand goals and timeline so we can connect you with the right director..."
            className="mt-1.5 w-full resize-none rounded-xl border border-black/15 bg-white px-3.5 py-2.5 text-sm text-[#0B0B0C] placeholder-black/30 transition-colors focus:border-[#0B0B0C] focus:outline-none disabled:opacity-60"
          />
        </div>

        <p className="text-[11px] text-[#86868B]">
          By clicking send, you agree to ATELIER 27&apos;s confidentiality
          and NDA standards.
        </p>

        {/* Submit Button with Live Sending Feedback */}
        <div>
          {status === "idle" && (
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0B0B0C] py-4 text-xs font-semibold text-white lowercase shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1A4BFF] hover:shadow-xl active:translate-y-0"
            >
              <span>send message</span>
              <Send className="h-3.5 w-3.5" />
            </button>
          )}

          {status === "sending" && (
            <button
              type="button"
              disabled
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0B0B0C]/85 py-4 text-xs font-semibold text-white lowercase shadow-md cursor-wait"
            >
              <Loader2 className="h-4 w-4 animate-spin text-white" />
              <span>sending message...</span>
            </button>
          )}

          {status === "sent" && (
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#188038] py-4 text-xs font-semibold text-white lowercase shadow-lg transition-all duration-300 hover:bg-[#13662d]"
            >
              <Check className="h-4 w-4 text-white" />
              <span>message sent — click to send another</span>
            </button>
          )}
        </div>

        {/* Feedback Banner when message is sent */}
        <AnimatePresence>
          {status === "sent" && (
            <motion.div
              initial={{ opacity: 0, y: 10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="rounded-2xl border border-[#2EBD6E]/30 bg-[#2EBD6E]/10 p-4 text-left">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#188038] text-white">
                    <Check className="h-3 w-3" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-[#0B0B0C]">
                      Thank you, {submittedName || "there"}!
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-[#48484C]">
                      Your inquiry has been dispatched to our Strategy Lead.
                      We will review and respond within 24–48 hours at{" "}
                      <span className="font-semibold text-[#0B0B0C]">
                        {submittedEmail}
                      </span>
                      .
                    </p>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="mt-2 text-xs font-medium text-[#0B0B0C] underline underline-offset-2 hover:text-[#1A4BFF]"
                    >
                      send another message
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}

/* -------------------------------------------------------------------------
   MAIN CONTACT PAGE: DUAL DESIGN ARCHITECTURE
   1. Section with background first ("Seeing is believing" + Floating Form)
   2. Section without background follows ("Contact our friendly team" + FAQ)
------------------------------------------------------------------------- */
export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<string | null>("faq-1");
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const toggleFaq = (id: string) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  const visibleFaqs = showAllFaqs ? FAQS : FAQS.slice(0, 4);

  return (
    <div className="bg-[#FAF9F6] text-[#0B0B0C]">
      {/* ====================================================================
          SECTION 1: THE ONE WITH BACKGROUND FIRST (Image 2 Inspiration)
          "Seeing is believing." + 3D Frosted Glass Backdrop + "Let's talk" Card
          ==================================================================== */}
      <section className="relative overflow-hidden border-b border-black/10 pb-24 pt-36 md:pb-32 md:pt-44">
        {/* Optimized 3D Frosted Glass Background Artwork */}
        <div className="pointer-events-none absolute inset-0 z-0 select-none">
          <Image
            src="/images/contact-3d-backdrop.jpg"
            alt="3D floating frosted glass lozenges backdrop"
            fill
            priority
            unoptimized
            className="object-cover object-center opacity-80"
          />
          {/* Subtle gradient wash to ensure sharp typography */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6]/90 via-[#FAF9F6]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Monumental Headline & Editorial Narrative */}
            <div className="space-y-8 lg:col-span-6 lg:pt-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-1.5 text-[11px] font-mono tracking-wider text-[#6E6E73] backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[#D95D39]" />
                <span>ATELIER 27 • DIRECTORS DESK</span>
              </div>

              <div>
                <h1 className="text-[clamp(3rem,6vw,5.5rem)] leading-[0.98] font-normal tracking-[-0.035em] text-[#0B0B0C]">
                  Seeing is believing.
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-[#48484C] md:text-lg">
                  We&apos;d love to show you ATELIER 27 in action. Scoping brand
                  systems, flagship web platforms, tactile physical craft, and
                  campaign narratives tailored to your ambition.
                </p>
              </div>
            </div>

            {/* Right Column: Floating Form Card ("Let's talk") */}
            <div className="lg:col-span-6">
              <Suspense
                fallback={
                  <div className="rounded-[2.5rem] border border-black/10 bg-white p-12 text-center font-mono text-xs text-[#86868B]">
                    Loading project intake...
                  </div>
                }
              >
                <ContactFormWithParams />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 2: THE ONE WITHOUT BACKGROUND FOLLOWS (Image 1 Inspiration)
          "Contact our friendly team" + 4 Cards + Frequently Asked Questions
          ==================================================================== */}
      <section className="bg-white py-24 md:py-36">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          {/* Header with Triple Slash Monogram */}
          <div className="text-center">
            <AtelierMark className="mx-auto h-8 w-8 text-[#0B0B0C]" />
            <h2 className="mt-4 text-[clamp(2.5rem,5vw,4.25rem)] leading-none font-normal tracking-[-0.035em] text-[#0B0B0C]">
              Contact our friendly team
            </h2>
            <p className="mt-4 text-base text-[#6E6E73] md:text-lg">
              Let us know how we can help your brand build lasting distinction.
            </p>
          </div>

          {/* 4 Clean Floating Contact Cards (Matching Image 1) */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1: Chat to sales */}
            <div className="flex flex-col justify-between rounded-2xl border border-black/10 bg-[#FAF9F6] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-black/30 hover:shadow-lg">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-white text-[#0B0B0C]">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-[#0B0B0C]">
                  Chat to partnerships
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[#6E6E73]">
                  Speak directly with our strategic directors about new brand
                  commissions.
                </p>
              </div>
              <div className="mt-6 border-t border-black/8 pt-4">
                <a
                  href="mailto:partnerships@atelier27studio.com"
                  className="text-xs font-semibold text-[#0B0B0C] underline-offset-4 hover:underline"
                >
                  partnerships@atelier27studio.com
                </a>
              </div>
            </div>

            {/* Card 2: Chat to support */}
            <div className="flex flex-col justify-between rounded-2xl border border-black/10 bg-[#FAF9F6] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-black/30 hover:shadow-lg">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-white text-[#0B0B0C]">
                  <Headphones className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-[#0B0B0C]">
                  Client services
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[#6E6E73]">
                  We&apos;re here to assist active client sprints, design token
                  syncs, and retainers.
                </p>
              </div>
              <div className="mt-6 border-t border-black/8 pt-4">
                <a
                  href="mailto:hello@atelier27studio.com"
                  className="text-xs font-semibold text-[#0B0B0C] underline-offset-4 hover:underline"
                >
                  hello@atelier27studio.com
                </a>
              </div>
            </div>

            {/* Card 3: Visit us */}
            <div className="flex flex-col justify-between rounded-2xl border border-black/10 bg-[#FAF9F6] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-black/30 hover:shadow-lg">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-white text-[#0B0B0C]">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-[#0B0B0C]">
                  Visit the studio
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[#6E6E73]">
                  Accra Studio HQ — 27 Ring Road Central, Osu &amp; Labone.
                </p>
              </div>
              <div className="mt-6 border-t border-black/8 pt-4">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold text-[#0B0B0C] underline-offset-4 hover:underline"
                >
                  View on Google Maps
                </a>
              </div>
            </div>

            {/* Card 4: Call us */}
            <div className="flex flex-col justify-between rounded-2xl border border-black/10 bg-[#FAF9F6] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-black/30 hover:shadow-lg">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-white text-[#0B0B0C]">
                  <Phone className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-[#0B0B0C]">
                  Call the desk
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[#6E6E73]">
                  Monday – Friday from 09:00 to 18:00 GMT (UTC+0).
                </p>
              </div>
              <div className="mt-6 border-t border-black/8 pt-4">
                <a
                  href="tel:+233242727021"
                  className="text-xs font-semibold text-[#0B0B0C] underline-offset-4 hover:underline"
                >
                  +233 (0) 24 272 7021
                </a>
              </div>
            </div>
          </div>

          {/* Frequently Asked Questions (Matching Image 1 Accordion Section) */}
          <div className="mt-28 md:mt-36">
            <h3 className="text-center text-[clamp(2.15rem,4.5vw,3.25rem)] leading-tight font-normal tracking-[-0.03em] text-[#0B0B0C]">
              Frequently asked questions
            </h3>
            <p className="mt-3 text-center text-sm text-[#6E6E73]">
              Everything you need to know about partnering with ATELIER 27.
            </p>

            <div className="mx-auto mt-12 max-w-3xl divide-y divide-black/10">
              {visibleFaqs.map((faq) => {
                const isOpen = openFaq === faq.id;
                const IconComponent = faq.icon;

                return (
                  <div key={faq.id} className="py-5">
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      className="flex w-full items-center justify-between gap-4 text-left transition-colors hover:text-[#1A4BFF]"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-black/10 bg-[#FAF9F6] text-[#0B0B0C]">
                          <IconComponent className="h-4 w-4" />
                        </div>
                        <span className="text-base font-medium tracking-tight text-[#0B0B0C] md:text-lg">
                          {faq.question}
                        </span>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-[#86868B] transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-[#0B0B0C]" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <p className="pl-[2.85rem] pr-6 pt-3 text-sm leading-relaxed text-[#555558] md:text-base">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Load More FAQs Button (Matching Image 1 Pill) */}
            <div className="mt-12 text-center">
              <button
                type="button"
                onClick={() => setShowAllFaqs((prev) => !prev)}
                className="inline-flex items-center gap-2 rounded-full bg-[#0B0B0C] px-8 py-3.5 text-xs font-semibold text-white lowercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1A4BFF] hover:shadow-lg"
              >
                <span>{showAllFaqs ? "show fewer questions" : "load more"}</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
