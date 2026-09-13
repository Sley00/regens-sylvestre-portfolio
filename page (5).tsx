import PageIntro from "@/components/PageIntro";
import SiteFrame from "@/components/SiteFrame";
import CallToAction from "@/components/CallToAction";
import { certifications } from "@/data/portfolio";

export default function CertificationsPage() {
  return (
    <SiteFrame>
      <PageIntro eyebrow="Professional development" title="Continuous learning focused on useful business skills." description="I am strengthening my knowledge in revenue operations, project management, data organization, and technology." />
      <section className="py-20 sm:py-28"><div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-6 md:grid-cols-3">{certifications.map(item => <article key={item.title} className={`rounded-[2rem] border p-7 sm:p-8 ${item.status === "In progress" ? "border-cyan-400/25 bg-cyan-400/[0.045]" : "border-white/10 bg-white/[0.025]"}`}><p className={`text-sm font-bold uppercase tracking-[0.18em] ${item.status === "In progress" ? "text-cyan-400" : "text-slate-500"}`}>{item.status}</p><h2 className="mt-5 text-xl font-semibold leading-8">{item.title}</h2><p className="mt-4 text-slate-400">{item.provider}</p></article>)}</div><div className="mx-auto mt-10 max-w-7xl px-5 sm:px-6"><div className="rounded-3xl border border-white/10 p-7 sm:p-9"><h2 className="text-2xl font-semibold">Learning beyond certifications</h2><p className="mt-4 max-w-3xl leading-8 text-slate-400">I also build hands-on web, mobile, API, and database projects. This practical work helps me apply new concepts to realistic business problems.</p></div></div></section>
      <CallToAction />
    </SiteFrame>
  );
}
