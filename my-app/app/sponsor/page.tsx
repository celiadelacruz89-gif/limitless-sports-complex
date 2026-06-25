import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SponsorWall from "@/components/SponsorWall";
import FundraisingThermometer from "@/components/FundraisingThermometer";
import SponsorMatGrid from "@/components/SponsorMatGrid";

export default function SponsorPage() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
        <Navbar />
        
      {/* SPONSOR HERO */}
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-slate-400">
            Build With Us
          </p>

          <h1 className="mt-4 text-6xl font-black md:text-8xl">
            Become A Founding Sponsor
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Every sponsorship helps build the future home of Limitless Sports
            Complex LLC and creates more opportunities for athletes in El Paso.
          </p>
        </div>
      </section>

      {/* SPONSOR A MAT */}
      <section
        id="sponsoramat"
        className="border-y border-white/10 bg-gradient-to-b from-[#07122b] to-[#020817] px-6 py-24"
      >
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-slate-400">
            Sponsor A Mat Campaign
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            Help Build The Future Home Of
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Limitless Sports Complex
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-slate-300">
            We are raising funds to purchase cheer flooring, training equipment,
            and secure a permanent home for athlete development in El Paso, Texas.
          </p>

         <FundraisingThermometer />

         <SponsorMatGrid />

          {/* FOUNDER OPPORTUNITY */}
          <div className="mt-10 rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-6">
            <h3 className="text-2xl font-black text-yellow-300">
              Founding Sponsor Opportunity
            </h3>

            <p className="mt-3 text-slate-300">
              The first businesses to sponsor Limitless Sports Complex will be
              permanently recognized as Founding Sponsors on our website, sponsor
              wall, and future facility.
            </p>
          </div>

          {/* THANK YOU */}
          <div className="mt-8 rounded-2xl border border-green-500/30 bg-green-500/10 p-6">
            <h3 className="text-2xl font-black text-green-300">
              Thank You Artegon Graphics!
            </h3>

            <p className="mt-3 text-slate-300">
              Proud Founding Sponsor of Limitless Sports Complex LLC.
            </p>
          </div>

          <SponsorWall />

          {/* WHY SPONSOR */}
          <div className="mt-12 rounded-3xl border border-cyan-500/30 bg-cyan-500/10 p-8">
            <h3 className="text-3xl font-black">Why Sponsor Limitless?</h3>

            <div className="mt-8 grid gap-4 text-left md:grid-cols-2">
              <p>✓ Support local youth athletes</p>
              <p>✓ Permanent facility recognition</p>
              <p>✓ Website recognition</p>
              <p>✓ Social media promotion</p>
              <p>✓ Community impact</p>
              <p>✓ Help build El Paso's next premier sports complex</p>
            </div>
          </div>

          {/* SPONSORSHIP LEVELS */}
          <div className="mt-14 grid gap-8 md:grid-cols-4">
            <div className="rounded-3xl border border-green-500/30 bg-green-500/10 p-6">
              <h3 className="text-3xl font-black">$100</h3>
              <p className="mt-3 font-bold text-green-300">Bronze Sponsor</p>
              <p className="mt-4 text-slate-300">Name listed on sponsor wall.</p>
            </div>

            <div className="rounded-3xl border border-blue-500/30 bg-blue-500/10 p-6">
              <h3 className="text-3xl font-black">$250</h3>
              <p className="mt-3 font-bold text-blue-300">Silver Sponsor</p>
              <p className="mt-4 text-slate-300">
                Logo on sponsor wall and website.
              </p>
            </div>

            <div className="rounded-3xl border border-purple-500/30 bg-purple-500/10 p-6">
              <h3 className="text-3xl font-black">$500</h3>
              <p className="mt-3 font-bold text-purple-300">Gold Sponsor</p>
              <p className="mt-4 text-slate-300">
                Featured sponsor recognition.
              </p>
            </div>

            <div className="rounded-3xl border border-yellow-500/30 bg-yellow-500/10 p-6">
              <h3 className="text-3xl font-black">$1,000+</h3>
              <p className="mt-3 font-bold text-yellow-300">Platinum Sponsor</p>
              <p className="mt-4 text-slate-300">
                Premium logo placement and partner recognition.
              </p>
            </div>
          </div>

          {/* CTA BUTTONS */}
          <div className="mt-12 flex flex-col justify-center gap-4 md:flex-row">
            <a
              href="https://www.paypal.com/donate?campaign_id=7D2GKYZ57KXLL"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-10 py-5 text-lg font-black text-white shadow-2xl transition duration-300 hover:scale-105"
            >
              Donate Now
            </a>

            <a
              href="https://form.jotform.com/261524366412049"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 bg-white/10 px-10 py-5 text-lg font-black text-white transition duration-300 hover:scale-105"
            >
              Claim Your Sponsor Spot
            </a>
          </div>
        </div>
      </section>
     <Footer />
    </main>
  );
}