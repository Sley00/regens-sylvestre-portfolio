import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import SiteFrame from "@/components/SiteFrame";

const details = [
  ["Location", "Michigan, USA"],
  ["Languages", "English, French & Haitian Creole"],
  ["Availability", "Freelance and remote opportunities"],
  ["Focus", "Software development, operations & support"],
];

export default function ContactPage() {
  return (
    <SiteFrame>
      <PageIntro eyebrow="Contact" title="Let’s discuss the work you need to move forward." description="Share your goal, current challenge, timeline, and the kind of support you need. I will respond with clear next steps." />
      <section className="py-20 sm:py-28"><div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[1.15fr_.85fr]">
        <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-transparent p-8 sm:p-12"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Best way to reach me</p><h2 className="mt-5 text-3xl font-bold sm:text-4xl">Send me an email.</h2><p className="mt-6 max-w-2xl leading-8 text-slate-300">Tell me about your project, the result you need, and your preferred timeline. I will respond with clear next steps.</p><a href="mailto:regenssleysylvestre@gmail.com" className="mt-8 inline-flex rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300">Email me</a><a href="mailto:regenssleysylvestre@gmail.com" className="mt-5 block break-all text-slate-300 underline decoration-cyan-400/50 underline-offset-4 hover:text-white">regenssleysylvestre@gmail.com</a></div>
        <aside className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 sm:p-10"><h2 className="text-2xl font-semibold">At a glance</h2><dl className="mt-7 divide-y divide-white/10">{details.map(([term, description]) => <div key={term} className="py-5 first:pt-0"><dt className="text-sm uppercase tracking-[0.15em] text-slate-500">{term}</dt><dd className="mt-2 leading-7 text-slate-200">{description}</dd></div>)}</dl></aside>
      </div><div className="mx-auto mt-8 max-w-7xl px-5 sm:px-6"><Link href="/projects" className="font-semibold text-cyan-400 hover:text-cyan-300">Review selected work before reaching out →</Link></div></section>
    </SiteFrame>
  );
}
