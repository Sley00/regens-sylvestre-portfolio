import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-[9999] border-b border-white/10 bg-[#07111f]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 sm:py-5">

        {/* NAME */}
        <Link
          href="/"
          className="flex items-center gap-3 text-base font-bold tracking-tight text-white sm:text-xl"
        >
          <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-cyan-400/60 shadow-lg shadow-cyan-950/40">
            <Image
              src="/images/profile.jpg"
              alt="Regens Sley Sylvestre"
              fill
              className="object-cover object-[50%_24%]"
              sizes="44px"
              priority
            />
          </span>
          <span className="hidden sm:inline">Regens Sley Sylvestre</span>
          <span className="sm:hidden">Regens Sylvestre</span>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          <Link href="/about" className="transition hover:text-white">
            About
          </Link>

          <Link href="/expertise" className="transition hover:text-white">
            Expertise
          </Link>

          <Link href="/projects" className="transition hover:text-white">
            Projects
          </Link>

          <Link href="/experience" className="transition hover:text-white">
            Experience
          </Link>

          <Link href="/certifications" className="transition hover:text-white">
            Certifications
          </Link>

          <Link href="/contact" className="transition hover:text-white">
            Contact
          </Link>
        </nav>

        {/* DESKTOP BUTTON */}
        <Link
          href="mailto:regenssleysylvestre@gmail.com"
          className="hidden rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 md:inline-flex"
        >
          Email Me
        </Link>

        {/* MOBILE MENU */}
        <details className="group relative md:hidden">

          {/* HAMBURGER / X */}
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-white/15 bg-white/[0.04]">
            <div className="relative h-5 w-5">

              <span
                className="
                  absolute left-0 top-[3px]
                  h-[2px] w-5 bg-white
                  transition-all duration-300
                  group-open:top-[9px]
                  group-open:rotate-45
                "
              />

              <span
                className="
                  absolute left-0 top-[9px]
                  h-[2px] w-5 bg-white
                  transition-all duration-300
                  group-open:opacity-0
                "
              />

              <span
                className="
                  absolute left-0 top-[15px]
                  h-[2px] w-5 bg-white
                  transition-all duration-300
                  group-open:top-[9px]
                  group-open:-rotate-45
                "
              />

            </div>
          </summary>

          {/* MOBILE DROPDOWN */}
          <div className="fixed left-0 right-0 top-[77px] border-t border-white/10 bg-[#07111f] shadow-2xl">
            <nav className="flex flex-col px-5 pb-6 pt-3">

              <Link
                href="/about"
                className="border-b border-white/10 py-4 text-lg font-medium text-slate-200 transition hover:text-white"
              >
                About
              </Link>

              <Link
                href="/expertise"
                className="border-b border-white/10 py-4 text-lg font-medium text-slate-200 transition hover:text-white"
              >
                Expertise
              </Link>

              <Link
                href="/projects"
                className="border-b border-white/10 py-4 text-lg font-medium text-slate-200 transition hover:text-white"
              >
                Projects
              </Link>

              <Link
                href="/experience"
                className="border-b border-white/10 py-4 text-lg font-medium text-slate-200 transition hover:text-white"
              >
                Experience
              </Link>

              <Link
                href="/certifications"
                className="border-b border-white/10 py-4 text-lg font-medium text-slate-200 transition hover:text-white"
              >
                Certifications
              </Link>

              <Link
                href="/contact"
                className="py-4 text-lg font-medium text-slate-200 transition hover:text-white"
              >
                Contact
              </Link>

              <Link
                href="mailto:regenssleysylvestre@gmail.com"
                className="mt-3 flex justify-center rounded-full bg-cyan-400 px-6 py-3.5 font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Email Me
              </Link>

            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
