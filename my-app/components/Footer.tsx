import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020817]">
      <div className="mx-auto max-w-7xl px-6 py-14">

        {/* Top Section */}
        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h2 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-3xl font-black text-transparent">
              LIMITLESS
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              Building the future home of athlete development,
              baseball training, cheer programs, custom music,
              and community growth in El Paso, Texas.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-black text-white">
              Explore
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              <Link href="/" className="text-slate-400 hover:text-white">
                Home
              </Link>

              <Link href="/baseball" className="text-slate-400 hover:text-white">
                Baseball
              </Link>

              <Link href="/cheer" className="text-slate-400 hover:text-white">
                Cheer
              </Link>

              <Link href="/music" className="text-slate-400 hover:text-white">
                Custom Music
              </Link>

              <Link href="/merch" className="text-slate-400 hover:text-white">
                Merch
              </Link>

              <Link href="/sponsor" className="text-slate-400 hover:text-white">
                Sponsor
              </Link>

            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-black text-white">
              Connect
            </h3>

            <div className="mt-5 space-y-3">

              <p className="text-slate-400">
                El Paso, Texas
              </p>

              <a
                href="mailto:limitless915sc@gmail.com"
                className="block text-cyan-400 hover:text-cyan-300"
              >
                limitless915sc@gmail.com
              </a>

              <a
                href="https://www.instagram.com/limitless915sc"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-slate-400 hover:text-white"
              >
                Instagram
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-slate-400 hover:text-white"
              >
                Facebook
              </a>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">

          <p className="text-sm text-slate-500">
            © 2026 Limitless Sports Complex LLC. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm">

            <Link
              href="/merch"
              className="text-slate-500 hover:text-white"
            >
              Shop
            </Link>

            <Link
              href="/music"
              className="text-slate-500 hover:text-white"
            >
              Order Music
            </Link>

            <Link
              href="/sponsor"
              className="text-slate-500 hover:text-white"
            >
              Donate
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}