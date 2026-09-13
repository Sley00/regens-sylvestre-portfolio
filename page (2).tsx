import Image from "next/image";
import Link from "next/link";
import CallToAction from "@/components/CallToAction";
import PageIntro from "@/components/PageIntro";
import SiteFrame from "@/components/SiteFrame";

const values = [
  ["Clarity", "I turn unclear requests and scattered information into organized next steps."],
  ["Reliability", "I communicate consistently, respect commitments, and follow work through."],
  ["Adaptability", "I learn quickly and connect operational needs with practical technology."],
];

export default function AboutPage() {
  return (
    <SiteFrame>
      <PageIntro eyebrow="About me" title="A developer who also understands people, processes, and business operations." description="My background combines software development, hands-on operations, customer support, and entrepreneurship. That range helps me build solutions that work technically and make sense for the people using them." />

      <section className="mx-auto max-w-7xl px-5 pt-12 sm:px-6 sm:pt-16">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] border border-white/10 sm:aspect-[2.2/1]">
          <Image src="/images/technology-operations.png" alt="Technology and organized business operations workspace" fill className="object-cover" priority sizes="(min-width: 1280px) 1280px, 100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/70 via-transparent to-transparent" />
          <p className="absolute bottom-5 left-5 right-5 text-lg font-semibold sm:bottom-8 sm:left-8 sm:text-2xl">Technology, organization and dependable support</p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[.78fr_1.22fr] lg:items-center lg:gap-16">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-4">
            <Image src="/images/profile.jpg" alt="Regens Sley Sylvestre" width={1200} height={1500} className="aspect-[4/5] w-full rounded-[1.4rem] object-cover object-top" priority />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-400">My approach</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">Technical skills strengthened by real business experience.</h2>
            <p className="mt-7 text-base leading-8 text-slate-300 sm:text-lg">I enjoy making work easier to understand and easier to execute. That can mean organizing a team&apos;s tasks, helping a customer solve a problem, documenting a process, or building the digital tool that supports it.</p>
            <p className="mt-5 leading-8 text-slate-400">I am based in Michigan and work in English, French, and Haitian Creole. I am comfortable supporting remote teams and adapting to the tools and processes they already use.</p>
            <Link href="/experience" className="mt-8 inline-flex font-semibold text-cyan-400 hover:text-cyan-300">See my experience →</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <h2 className="text-3xl font-bold sm:text-4xl">What you can expect from me</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {values.map(([title, text]) => <article key={title} className="rounded-3xl border border-white/10 bg-[#091525] p-7"><h3 className="text-xl font-semibold text-cyan-300">{title}</h3><p className="mt-4 leading-7 text-slate-400">{text}</p></article>)}
          </div>
        </div>
      </section>
      <CallToAction />
    </SiteFrame>
  );
}
