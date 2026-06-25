import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BaseballPage() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
        <Navbar />
      {/* BASEBALL HERO */}
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-slate-400">
            Limitless Baseball
          </p>

          <h1 className="mt-4 text-5xl font-black md:text-7xl">
            Batting Cages, Training & Baseball Music
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Future indoor batting cages, youth baseball training, team rentals,
            walkout songs, player spotlight songs, and custom team anthems.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 md:flex-row">
            <a
              href="https://form.jotform.com/261584398573068"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-red-500 to-yellow-500 px-8 py-4 font-black text-white shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Request Baseball Music
            </a>

            <a
              href="/sponsor"
              className="rounded-full border border-white/25 bg-white/10 px-8 py-4 font-black text-white transition duration-300 hover:scale-105 hover:bg-white hover:text-[#020817]"
            >
              Support The Facility
            </a>
          </div>
        </div>
      </section>

      {/* BASEBALL TRAINING */}
      <section className="border-y border-white/10 bg-gradient-to-b from-[#07122b] to-[#020817] px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-slate-400">
            Future Baseball Training
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Built For Reps, Confidence & Development
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Limitless Sports Complex is building toward a future indoor baseball
            training space for athletes, teams, families, and coaches in El Paso.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-red-500/30 bg-red-500/10 p-8">
              <h3 className="text-3xl font-black">Batting Cages</h3>
              <p className="mt-5 leading-8 text-slate-300">
                Future indoor cages for hitting reps, softball training,
                baseball training, private lessons, and team rentals.
              </p>
            </div>

            <div className="rounded-3xl border border-yellow-500/30 bg-yellow-500/10 p-8">
              <h3 className="text-3xl font-black">Youth Development</h3>
              <p className="mt-5 leading-8 text-slate-300">
                A positive training environment for young athletes learning
                fundamentals, confidence, discipline, and consistency.
              </p>
            </div>

            <div className="rounded-3xl border border-blue-500/30 bg-blue-500/10 p-8">
              <h3 className="text-3xl font-black">Team Rentals</h3>
              <p className="mt-5 leading-8 text-slate-300">
                Future rental options for teams needing indoor practice space,
                hitting rotations, clinics, camps, and offseason training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BASEBALL MUSIC */}
      <section className="border-y border-white/10 bg-white/[0.04] px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-slate-400">
            Baseball Music
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Walkout Songs & Team Anthems
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Custom clean hype songs for baseball players, T-ball teams,
            tournaments, highlight videos, senior nights, and proud parent posts.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-red-500/30 bg-red-500/10 p-8">
              <h3 className="text-3xl font-black">Player Walkout Song</h3>
              <p className="mt-5 leading-8 text-slate-300">
                A short hype song made for a player’s name, number, sport,
                personality, team colors, and walkout moment.
              </p>
            </div>

            <div className="rounded-3xl border border-yellow-500/30 bg-yellow-500/10 p-8">
              <h3 className="text-3xl font-black">Team Hype Song</h3>
              <p className="mt-5 leading-8 text-slate-300">
                A custom song for the whole team, perfect for game days,
                social posts, end-of-season videos, and banquets.
              </p>
            </div>

            <div className="rounded-3xl border border-blue-500/30 bg-blue-500/10 p-8">
              <h3 className="text-3xl font-black">Highlight Reel Song</h3>
              <p className="mt-5 leading-8 text-slate-300">
                A custom track made for player videos, proud parent posts,
                tournament recaps, and special sports memories.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-6">
              <h3 className="text-3xl font-black">$49</h3>
              <p className="mt-3 text-slate-300">Basic player song</p>
            </div>

            <div className="rounded-3xl border border-red-500/40 bg-red-500/10 p-6 shadow-2xl shadow-red-500/20">
              <h3 className="text-3xl font-black">$99</h3>
              <p className="mt-3 text-slate-300">Premium player anthem</p>
            </div>

            <div className="rounded-3xl border border-blue-500/40 bg-blue-500/10 p-6">
              <h3 className="text-3xl font-black">$199+</h3>
              <p className="mt-3 text-slate-300">Full team song package</p>
            </div>
          </div>

          <div className="mt-12">
            <a
              href="https://form.jotform.com/261584398573068"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-red-500 to-yellow-500 px-10 py-5 text-lg font-black text-white shadow-2xl transition duration-300 hover:scale-105"
            >
              Request Baseball Music
            </a>
          </div>
        </div>
      </section>

      {/* WHY BASEBALL FAMILIES */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-slate-400">
            Why Limitless Baseball
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            More Than A Cage. A Place To Grow.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-6">
              <h3 className="text-2xl font-black">Confidence</h3>
              <p className="mt-4 text-slate-300">
                Helping young athletes feel prepared, proud, and excited to play.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-6">
              <h3 className="text-2xl font-black">Repetition</h3>
              <p className="mt-4 text-slate-300">
                Creating future access to consistent reps and development.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-6">
              <h3 className="text-2xl font-black">Team Culture</h3>
              <p className="mt-4 text-slate-300">
                Supporting teams, coaches, families, and community growth.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-6">
              <h3 className="text-2xl font-black">Memories</h3>
              <p className="mt-4 text-slate-300">
                Custom songs and videos that turn sports moments into keepsakes.
              </p>
            </div>
          </div>
        </div>
      </section>
      
        <Footer />
    </main>
  );
}