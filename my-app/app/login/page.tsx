import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#020817] px-6 py-24 text-white">
      <div className="mx-auto max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.4em] text-slate-400">
          Limitless Admin
        </p>

        <h1 className="mt-4 text-5xl font-black">
          Login Coming Soon
        </h1>

        <p className="mt-6 text-slate-300">
          This page is reserved for the future Limitless admin login.
        </p>

        <Link
          href="/admin"
          className="mt-8 inline-block rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 font-black text-white"
        >
          Go To Dashboard
        </Link>
      </div>
    </main>
  );
}