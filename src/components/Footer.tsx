import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050b14]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-semibold text-white">Regens Sley Sylvestre</h2>
          <p className="mt-1 text-sm text-slate-400">
            Software Development • Operations • Support
          </p>
        </div>

        <div className="flex gap-5 text-sm text-slate-400">
          <Link href="/projects" className="hover:text-white">
            Projects
          </Link>
          <Link href="/experience" className="hover:text-white">
            Experience
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
        </div>

        <a href="mailto:regenssleysylvestre@gmail.com" className="text-sm text-slate-400 hover:text-white">
          Email me
        </a>

        <p className="text-sm text-slate-500">
          © 2026 Regens Sley Sylvestre
        </p>
      </div>
    </footer>
  );
}
