import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import PageIntro from "@/components/PageIntro";
import SiteFrame from "@/components/SiteFrame";
import { expertise } from "@/data/portfolio";

export default function ExpertisePage() {
  return (
    <SiteFrame>
      <PageIntro eyebrow="Expertise" title="Software development combined with practical business support." description="I build digital solutions and bring the operational organization and customer-focused communication needed to make them useful in the real world." />
      <section className="mx-auto max-w-7xl px-5 pt-12 sm:px-6 sm:pt-16">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] border border-white/10 sm:aspect-[2.2/1]">
          <Image src="/images/developer-workspace.png" alt="Modern software development workspace" fill className="object-cover" priority sizes="(min-width: 1280px) 1280px, 100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/75 via-transparent to-transparent" />
          <p className="absolute bottom-5 left-5 right-5 text-lg font-semibold text-white sm:bottom-8 sm:left-8 sm:text-2xl">Web, mobile, API and database development</p>
        </div>
      </section>
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl space-y-6 px-5 sm:px-6">
          {expertise.map((item) => (
            <article key={item.title} className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 sm:p-9 lg:grid-cols-[1.05fr_.95fr] lg:gap-14">
              <div><h2 className="text-2xl font-semibold sm:text-3xl">{item.title}</h2><p className="mt-5 leading-8 text-slate-400">{item.description}</p><div className="mt-7 flex flex-wrap gap-2">{item.skills.map(skill => <span key={skill} className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.05] px-3.5 py-2 text-sm text-cyan-300">{skill}</span>)}</div></div>
              <div className="rounded-2xl border border-white/10 bg-[#07111f] p-6"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">How this helps</p><ul className="mt-5 space-y-4">{item.outcomes.map(outcome => <li key={outcome} className="flex gap-3 leading-7 text-slate-300"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />{outcome}</li>)}</ul></div>
            </article>
          ))}
        </div>
      </section>
      <CallToAction />
    </SiteFrame>
  );
}
