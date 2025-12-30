import Link from "next/link";

const NotFoundPage = () => (
  <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center text-gray-800">
    <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
      404 error
    </p>
    <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold font-sora">
      Page not found
    </h1>
    <p className="mt-4 max-w-md text-base text-gray-600 leading-relaxed font-poppins">
      The page you&apos;re looking for doesn&apos;t exist or has been moved.
      Check the URL or head back to the home page.
    </p>
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <Link
        href="/"
        className="rounded-md bg-black px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-gray-900"
      >
        Go home
      </Link>
      <Link
        href="/contact-us"
        className="rounded-md border border-gray-300 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-gray-700 transition hover:border-gray-400 hover:text-gray-900"
      >
        Contact support
      </Link>
    </div>
  </main>
);

export default NotFoundPage;