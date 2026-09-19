import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

const NotFoundPage = () => (
  <main className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-linear-to-b from-white to-[#eefaff] px-6 text-center">
    <div
      aria-hidden
      className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-[#1eade6]/15 blur-[120px]"
    />
    <div
      aria-hidden
      className="pointer-events-none absolute bottom-0 -left-16 h-72 w-72 rounded-full bg-[#cf4446]/10 blur-[120px]"
    />

    <div className="relative">
      <p className="bg-linear-to-r from-[#1eade6] to-[#cf4446] bg-clip-text text-7xl font-extrabold text-transparent sm:text-8xl">
        404
      </p>
      <h1 className="mt-4 text-2xl font-bold text-[#1b2c48] sm:text-3xl">
        This page took a wrong turn
      </h1>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
        The page you&apos;re looking for isn&apos;t here — it may have been moved
        or the link isn&apos;t ready yet. Let&apos;s get you back on track.
      </p>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-[#1eade6] px-6 py-3 font-semibold text-white shadow-md transition-colors hover:bg-[#1b2c48]"
        >
          <Home size={18} /> Back to Home
        </Link>
        <Link
          href="/contact-us"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-semibold text-[#1b2c48] transition-colors hover:border-[#1eade6] hover:text-[#1eade6]"
        >
          <ArrowLeft size={18} /> Contact Us
        </Link>
      </div>
    </div>
  </main>
);

export default NotFoundPage;
