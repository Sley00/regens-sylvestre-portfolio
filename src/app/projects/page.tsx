import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import PageIntro from "@/components/PageIntro";
import SiteFrame from "@/components/SiteFrame";
import { projects } from "@/data/portfolio";

export default function ProjectsPage() {
  return (
    <SiteFrame>
      <PageIntro eyebrow="Selected work" title="Practical work samples built around real business needs." description="These projects demonstrate how I organize work, communicate with customers, support executives, and build useful digital experiences." />
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl space-y-10 px-5 sm:px-6">
          {projects.map((project, index) => (
            <article id={project.slug} key={project.slug} className="scroll-mt-28 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025]">
              <div className={`grid lg:grid-cols-2 ${index % 2 ? "" : ""}`}>
                <div className={`relative min-h-[240px] sm:min-h-[360px] ${index % 2 ? "lg:order-2" : ""}`}><Image src={project.image} alt={project.title} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" /></div>
                <div className="p-7 sm:p-10 lg:p-12"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">{project.category}</p><h2 className="mt-4 text-2xl font-semibold sm:text-3xl">{project.title}</h2><p className="mt-5 leading-8 text-slate-400">{project.description}</p><div className="mt-7 border-t border-white/10 pt-6"><h3 className="font-semibold">The challenge</h3><p className="mt-3 leading-7 text-slate-400">{project.challenge}</p></div><div className="mt-6 flex flex-wrap gap-2">{project.skills.map(skill => <span key={skill} className="rounded-full bg-white/[0.05] px-3 py-2 text-sm text-slate-300">{skill}</span>)}</div></div>
              </div>
              <div className="border-t border-white/10 p-7 sm:p-9"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Approach</p><div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{project.approach.map((step, stepIndex) => <div key={step} className="rounded-2xl border border-white/10 p-5"><span className="text-sm font-bold text-cyan-400">0{stepIndex + 1}</span><p className="mt-3 leading-7 text-slate-300">{step}</p></div>)}</div></div>
            </article>
          ))}
        </div>
      </section>
      <CallToAction />
    </SiteFrame>
  );
}
