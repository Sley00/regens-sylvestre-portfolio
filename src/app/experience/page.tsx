import PageIntro from "@/components/PageIntro";
import SiteFrame from "@/components/SiteFrame";
import CallToAction from "@/components/CallToAction";
import { experience } from "@/data/portfolio";

export default function ExperiencePage() {
  return (
    <SiteFrame>
      <PageIntro eyebrow="Experience" title="Hands-on experience with operations, service, and digital projects." description="My path combines structured production work, business ownership, customer service, and continuous technical development." />
      <section className="py-20 sm:py-28"><div className="mx-auto max-w-5xl space-y-6 px-5 sm:px-6">{experience.map(item => <article key={item.role} className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 sm:p-10"><div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"><div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-400">{item.company}</p><h2 className="mt-3 text-2xl font-semibold sm:text-3xl">{item.role}</h2></div><span className="w-fit rounded-full border border-white/10 px-4 py-2 text-sm text-slate-400">{item.period}</span></div><p className="mt-6 max-w-3xl leading-8 text-slate-400">{item.summary}</p><div className="mt-7 flex flex-wrap gap-2">{item.highlights.map(highlight => <span key={highlight} className="rounded-full bg-white/[0.05] px-3.5 py-2 text-sm text-slate-300">{highlight}</span>)}</div></article>)}</div></section>
      <CallToAction />
    </SiteFrame>
  );
}
