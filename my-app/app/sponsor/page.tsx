import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase-server";

export const dynamic = "force-dynamic";

type Sponsor = {
  id: string;
  name: string;
  level: string | null;
  amount: number | null;
  logo_url: string | null;
  website: string | null;
  square: number | null;
};

export default async function SponsorPage() {
  const { data: sponsors, error } = await supabase
    .from("sponsors")
    .select("*")
    .order("amount", { ascending: false });

  const sponsorList = (sponsors || []) as Sponsor[];

  const totalRaised = sponsorList.reduce(
    (sum, sponsor) => sum + Number(sponsor.amount || 0),
    0
  );

  const goal = 25000;
  const progressPercent = Math.min(
    Math.round((totalRaised / goal) * 100),
    100
  );

  const sponsoredSquares = sponsorList
    .map((sponsor) => sponsor.square)
    .filter(Boolean);

  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <Navbar />

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
            and secure a permanent home for athlete development in El Paso,
            Texas.
          </p>

          {error && (
            <p className="mt-8 rounded-xl border border-red-500/30 bg-red-500/10 p-4 font-bold text-red-300">
              Sponsor data could not load.
            </p>
          )}

          <div className="mx-auto mt-14 max-w-4xl rounded-3xl border border-cyan-500/30 bg-white/5 p-8">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="text-left">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-slate-400">
                  Raised So Far
                </p>
                <h3 className="mt-2 text-5xl font-black text-cyan-300">
                  ${totalRaised.toLocaleString()}
                </h3>
                <p className="mt-2 text-slate-300">
                  Goal: ${goal.toLocaleString()}
                </p>
              </div>

              <div className="text-center md:text-right">
                <p className="text-6xl font-black">{progressPercent}%</p>
                <p className="mt-2 text-slate-400">Funded</p>
              </div>
            </div>

            <div className="mt-8 h-8 overflow-hidden rounded-full bg-black/40">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <div className="mt-14">
            <h3 className="text-3xl font-black">Sponsor-A-Mat Grid</h3>
            <p className="mx-auto mt-3 max-w-3xl text-slate-300">
              Each numbered square represents a sponsor spot on our campaign
              mat. Filled squares are already sponsored.
            </p>

            <div className="mx-auto mt-8 grid max-w-5xl grid-cols-5 gap-3 md:grid-cols-10">
              {Array.from({ length: 50 }, (_, index) => {
                const squareNumber = index + 1;
                const isSponsored = sponsoredSquares.includes(squareNumber);

                return (
                  <div
                    key={squareNumber}
                    className={
                      isSponsored
                        ? "rounded-xl border border-cyan-400 bg-cyan-500/30 p-4 font-black text-cyan-100"
                        : "rounded-xl border border-white/10 bg-white/5 p-4 font-black text-slate-500"
                    }
                  >
                    {squareNumber}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-6">
            <h3 className="text-2xl font-black text-yellow-300">
              Founding Sponsor Opportunity
            </h3>

            <p className="mt-3 text-slate-300">
              The first businesses to sponsor Limitless Sports Complex will be
              permanently recognized as Founding Sponsors on our website,
              sponsor wall, and future facility.
            </p>
          </div>

          {sponsorList.length > 0 && (
            <div className="mt-8 rounded-2xl border border-green-500/30 bg-green-500/10 p-6">
              <h3 className="text-2xl font-black text-green-300">
                Thank You To Our Sponsors!
              </h3>

              <p className="mt-3 text-slate-300">
                Proud supporters helping build Limitless Sports Complex LLC.
              </p>
            </div>
          )}

          <div className="mt-16">
            <h3 className="text-4xl font-black">Sponsor Wall</h3>

            {sponsorList.length === 0 ? (
              <p className="mt-6 text-slate-400">
                Sponsor logos will appear here as they are added.
              </p>
            ) : (
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {sponsorList.map((sponsor) => {
                  const card = (
                    <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/60 hover:bg-white/10">
                      {sponsor.logo_url ? (
                        <div className="flex h-32 items-center justify-center rounded-2xl bg-white p-4">
                          <img
                            src={sponsor.logo_url}
                            alt={`${sponsor.name} logo`}
                            className="max-h-24 max-w-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="flex h-32 items-center justify-center rounded-2xl bg-black/30">
                          <p className="text-slate-500">No logo</p>
                        </div>
                      )}

                      <h4 className="mt-5 text-2xl font-black">
                        {sponsor.name}
                      </h4>

                      <p className="mt-2 font-bold text-cyan-300">
                        {sponsor.level}
                      </p>

                      <p className="mt-2 text-slate-300">
                        ${Number(sponsor.amount || 0).toLocaleString()} Sponsor
                      </p>

                      {sponsor.square && (
                        <p className="mt-2 text-sm text-slate-400">
                          Mat Square #{sponsor.square}
                        </p>
                      )}
                    </div>
                  );

                  return sponsor.website ? (
                    <a
                      key={sponsor.id}
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {card}
                    </a>
                  ) : (
                    <div key={sponsor.id}>{card}</div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="mt-12 rounded-3xl border border-cyan-500/30 bg-cyan-500/10 p-8">
            <h3 className="text-3xl font-black">Why Sponsor Limitless?</h3>

            <div className="mt-8 grid gap-4 text-left md:grid-cols-2">
              <p>✓ Support local youth athletes</p>
              <p>✓ Permanent facility recognition</p>
              <p>✓ Website recognition</p>
              <p>✓ Social media promotion</p>
              <p>✓ Community impact</p>
              <p>✓ Help build El Paso&apos;s next premier sports complex</p>
            </div>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-4">
            <div className="rounded-3xl border border-green-500/30 bg-green-500/10 p-6">
              <h3 className="text-3xl font-black">$100</h3>
              <p className="mt-3 font-bold text-green-300">Bronze Sponsor</p>
              <p className="mt-4 text-slate-300">
                Name listed on sponsor wall.
              </p>
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
              <p className="mt-3 font-bold text-yellow-300">
                Platinum Sponsor
              </p>
              <p className="mt-4 text-slate-300">
                Premium logo placement and partner recognition.
              </p>
            </div>
          </div>

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