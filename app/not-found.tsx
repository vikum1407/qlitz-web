import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] text-white flex items-center justify-center px-6 py-20">
      <div className="text-center max-w-xl">
        <h1 className="text-7xl font-extrabold mb-6 bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] bg-clip-text text-transparent">
          404
        </h1>

        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>

        <p className="text-white/60 mb-10">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          href="/"
          className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] font-semibold hover:opacity-90 transition"
        >
          Go Back Home
        </Link>
      </div>
    </main>
  );
}
