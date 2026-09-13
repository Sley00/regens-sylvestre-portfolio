import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="px-5 pb-20 pt-4 sm:px-6 sm:pb-28 sm:pt-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent px-6 py-14 text-center sm:px-10 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-400">Let&apos;s work together</p>
        <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">Need reliable support or a practical solution?</h2>
        <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-400 sm:text-lg sm:leading-8">Tell me what you are working on, what is getting in the way, and what a successful result looks like.</p>
        <Link href="/contact" className="mt-8 inline-flex rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300">Start a conversation</Link>
      </div>
    </section>
  );
}
