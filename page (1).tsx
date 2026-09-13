import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const expertise = [
  {
    title: "Web & Software Development",
    description:
      "I build responsive websites, mobile applications, APIs, databases, and practical digital tools designed around real business needs.",
    skills:
      "Next.js • Flutter • TypeScript • Node.js • PostgreSQL • REST APIs",
  },
  {
    title: "Operations & Project Coordination",
    description:
      "I organize priorities, tasks, deadlines, workflows, and documentation so teams can work with more clarity and accountability.",
    skills:
      "Project Coordination • Business Operations • Workflow Management • SOPs • Task Tracking",
  },
  {
    title: "Customer & Technical Support",
    description:
      "Clear, professional multilingual support focused on solving issues, helping customers, and creating a positive experience.",
    skills:
      "Customer Service • Email Support • CRM • Issue Resolution • Technical Support",
  },
  {
    title: "Executive & Virtual Assistance",
    description:
      "Reliable day-to-day support for founders and managers who need structure, follow-up, organization, and administrative execution.",
    skills:
      "Calendar Management • Inbox Support • Meeting Preparation • Follow-ups • Documentation",
  },
];

const projects = [
  {
    category: "TECHNOLOGY",
    title: "Multilingual Business Website",
    description:
      "Development and administration of a responsive multilingual business website with customer-facing features and digital services.",
    image: "/images/projects/website-project.png",
  },
  {
    category: "OPERATIONS",
    title: "Task Tracking & Team Coordination",
    description:
      "A structured workflow designed to turn scattered tasks, deadlines, owners, and updates into a clear project tracking system.",
    image: "/images/projects/operations-support.png",
  },
  {
    category: "EXECUTIVE SUPPORT",
    title: "Calendar, Inbox & Follow-Up Management",
    description:
      "A practical executive support workflow covering scheduling, inbox organization, meeting preparation, and daily follow-ups.",
    image: "/images/projects/executive-support.png",
  },
  {
    category: "CUSTOMER SUPPORT",
    title: "Email Handling & Issue Resolution",
    description:
      "A customer support work sample focused on professional communication, empathy, problem solving, and effective follow-through.",
    image: "/images/projects/customer-support.png",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    text: "Clarify the goal, priorities, constraints, and expected outcome.",
  },
  {
    number: "02",
    title: "Organize",
    text: "Create structure around tasks, information, workflows, and responsibilities.",
  },
  {
    number: "03",
    title: "Execute",
    text: "Move the work forward with clear communication and consistent follow-through.",
  },
  {
    number: "04",
    title: "Improve",
    text: "Identify what can be simplified, documented, automated, or optimized.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden pt-24 sm:pt-32">
        <div className="absolute left-[10%] top-20 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute right-[5%] top-40 h-[380px] w-[380px] rounded-full bg-blue-500/10 blur-[130px]" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-10 sm:gap-16 sm:px-6 sm:pb-28 sm:pt-16 lg:grid-cols-[1.25fr_.75fr] lg:items-center">

          {/* HERO TEXT */}
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs text-cyan-300 sm:mb-7 sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Available for freelance & remote opportunities
            </div>

            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-400 sm:mb-5 sm:text-sm sm:tracking-[0.28em]">
              Software Development • Operations • Customer Support
            </p>

            <h1 className="max-w-5xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              I build digital solutions
              <span className="mt-2 block text-cyan-400">
                and help businesses run better.
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:mt-8 sm:text-xl sm:leading-9">
              I&apos;m Regens Sley Sylvestre, a multidisciplinary professional
              combining software development, business operations, project
              coordination, and customer support.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base sm:leading-8">
              I build websites, mobile applications, APIs, and databases while
              also helping teams improve workflows, support customers, and solve
              operational problems.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
              <Link
                href="/projects"
                className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300 sm:px-7 sm:py-3.5 sm:text-base"
              >
                View My Work
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-white/5 sm:px-7 sm:py-3.5 sm:text-base"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* HERO SIDE CARD */}
          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20 backdrop-blur sm:p-8">

              <div className="mb-5 overflow-hidden rounded-2xl border border-white/10 sm:mb-7">
                <Image
                  src="/images/profile.jpg"
                  alt="Regens Sley Sylvestre"
                  width={700}
                  height={900}
                  className="aspect-[4/3] w-full object-cover object-top sm:aspect-[4/5]"
                  priority
                />
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 sm:text-sm">
                Professional Profile
              </p>

              <h2 className="mt-3 text-2xl font-bold sm:mt-5 sm:text-3xl">
                Regens Sley Sylvestre
              </h2>

              <p className="mt-2 text-sm text-slate-400 sm:text-base">
                Operations • Support • Technology
              </p>

              <div className="mt-8 hidden space-y-5 border-t border-white/10 pt-7 sm:block">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                    Based in
                  </p>
                  <p className="mt-1 text-slate-200">Michigan, USA</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                    Languages
                  </p>
                  <p className="mt-1 text-slate-200">
                    English • French • Haitian Creole
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                    Focus
                  </p>
                  <p className="mt-1 leading-7 text-slate-200">
                    Operations, Project Coordination, Customer Support,
                    Technical Support & Digital Solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto grid max-w-7xl divide-y divide-white/10 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6">
          <div className="py-6 sm:px-7 sm:py-7">
            <p className="text-xl font-bold text-white sm:text-2xl">
              3 Languages
            </p>
            <p className="mt-1 text-sm text-slate-500">
              English, French & Haitian Creole
            </p>
          </div>

          <div className="py-6 sm:px-7 sm:py-7">
            <p className="text-xl font-bold text-white sm:text-2xl">
              Technology + Business
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Development, Operations, Coordination & Support
            </p>
          </div>

          <div className="py-6 sm:px-7 sm:py-7">
            <p className="text-xl font-bold text-white sm:text-2xl">
              Remote Ready
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Available for freelance and remote opportunities
            </p>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mb-10 max-w-2xl sm:mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-400">
              Expertise
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
              Where I add value
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              Technical execution supported by operational discipline and
              customer-focused communication.
            </p>
          </div>

          <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
            {expertise.map((item) => (
              <article
                key={item.title}
                className="group rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05] sm:p-8"
              >
                <h3 className="text-xl font-semibold sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-5 text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
                  {item.description}
                </p>

                <div className="mt-7 border-t border-white/10 pt-6">
                  <p className="text-sm leading-6 text-cyan-300 sm:leading-7">
                    {item.skills}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <Link
            href="/expertise"
            className="mt-10 inline-block font-semibold text-cyan-400 hover:text-cyan-300"
          >
            Explore all expertise →
          </Link>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="border-y border-white/10 bg-white/[0.02] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-400">
                Selected Work
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
                Featured projects
              </h2>
            </div>

            <Link
              href="/projects"
              className="font-semibold text-cyan-400 hover:text-cyan-300"
            >
              View all projects →
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0b1727]"
              >
                <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[16/9]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/70 via-transparent to-transparent" />

                  <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-[#07111f]/80 px-3 py-2 text-[11px] font-bold tracking-[0.16em] text-cyan-300 backdrop-blur sm:bottom-5 sm:left-5 sm:px-4 sm:text-xs">
                    {project.category}
                  </span>
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="text-xl font-semibold leading-snug sm:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
                    {project.description}
                  </p>

                  <Link
                    href="/projects"
                    className="mt-6 inline-block font-semibold text-white transition group-hover:text-cyan-400 sm:mt-7"
                  >
                    View project →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW I WORK */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-400">
              How I Work
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
              Clear process. Reliable execution.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              Whatever the project, I focus on understanding the problem,
              creating structure, following through, and improving the process.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <div
                key={step.number}
                className="rounded-3xl border border-white/10 p-6 sm:p-7"
              >
                <p className="text-sm font-bold text-cyan-400">
                  {step.number}
                </p>

                <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="border-y border-white/10 bg-white/[0.02] py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-400">
              About Me
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">
              Technical skills strengthened by real business experience.
            </h2>
          </div>

          <div>
            <p className="text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              My background spans web and software development, business
              operations, technical support, customer service, and entrepreneurship.
            </p>

            <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              That combination allows me to understand both the technical and
              human sides of a business — from building the system to organizing
              the workflow and supporting the people who use it.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-block font-semibold text-cyan-400 hover:text-cyan-300"
            >
              More about me →
            </Link>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-400">
            Professional Development
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
            Certifications & continuous learning
          </h2>

          <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-3">
            <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.04] p-6 sm:p-7">
              <p className="text-xs font-bold tracking-[0.16em] text-cyan-400">
                IN PROGRESS
              </p>
              <h3 className="mt-4 text-lg font-semibold">
                HubSpot Revenue Operations Certification
              </h3>
            </div>

            <div className="rounded-3xl border border-white/10 p-6 sm:p-7">
              <p className="text-xs font-bold tracking-[0.16em] text-slate-500">
                PLANNED
              </p>
              <h3 className="mt-4 text-lg font-semibold">
                Google Project Management
              </h3>
            </div>

            <div className="rounded-3xl border border-white/10 p-6 sm:p-7">
              <p className="text-xs font-bold tracking-[0.16em] text-slate-500">
                PLANNED
              </p>
              <h3 className="mt-4 text-lg font-semibold">
                Microsoft Excel Associate
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-20 sm:px-6 sm:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent px-6 py-14 text-center sm:rounded-[2.25rem] sm:px-8 sm:py-20 md:px-16">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-400">
            Let&apos;s Work Together
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-bold leading-tight sm:text-5xl">
            Need reliable support or a practical solution?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            Whether you need help with operations, customer support, project
            coordination, or technology, I&apos;d be happy to discuss how I
            can contribute.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 sm:px-8 sm:py-3.5 sm:text-base"
            >
              Let&apos;s Talk
            </Link>

            <Link
              href="/projects"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition hover:bg-white/5 sm:px-8 sm:py-3.5 sm:text-base"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
