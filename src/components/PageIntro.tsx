type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 pb-16 pt-36 sm:pb-20 sm:pt-44">
      <div className="pointer-events-none absolute left-[12%] top-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-[110px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-400">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
      </div>
    </section>
  );
}
