import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CheerPage() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
        <Navbar />
      {/* CHEER HERO */}
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-slate-400">
            Limitless Cheer
          </p>

          <h1 className="mt-4 text-5xl font-black md:text-7xl">
            Cheer Training & Custom Cheer Music
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Cheer training, tumbling, stunting, routine support, and custom cheer
            mixes designed for showcases, camps, pep rallies, and competitions.
          </p>
        </div>
      </section>

      {/* CHEER TRAINING */}
      <section className="border-y border-white/10 bg-gradient-to-b from-[#07122b] to-[#020817] px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-slate-400">
            Future Cheer Gym
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Cheer Development Space
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-pink-500/30 bg-pink-500/10 p-8">
              <h3 className="text-3xl font-black">Tumbling</h3>
              <p className="mt-5 text-slate-300">
                Skill-building for jumps, rolls, walkovers, handsprings, and future
                tumbling development.
              </p>
            </div>

            <div className="rounded-3xl border border-purple-500/30 bg-purple-500/10 p-8">
              <h3 className="text-3xl font-black">Stunting</h3>
              <p className="mt-5 text-slate-300">
                Training space for stunt technique, body control, grips, timing,
                and team development.
              </p>
            </div>

            <div className="rounded-3xl border border-cyan-500/30 bg-cyan-500/10 p-8">
              <h3 className="text-3xl font-black">Team Practice</h3>
              <p className="mt-5 text-slate-300">
                A future space for teams to train, clean routines, condition, and
                prepare for performances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHEER MUSIC */}
      <section id="cheer" className="border-y border-white/10 bg-white/[0.04] px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-slate-400">
            Cheer Music
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Custom Cheer Mix Tracks
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            High-energy cheer music for routines, entrances, showcases, pep rallies,
            camps, halftime performances, and competitions.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-pink-500/30 bg-pink-500/10 p-6">
              <h3 className="text-3xl font-black">:45</h3>
              <p className="mt-3 text-2xl font-black text-pink-300">$75</p>
              <p className="mt-4 text-sm font-bold uppercase tracking-[0.25em] text-pink-200">
                Intro / Performance Clip
              </p>
              <p className="mt-4 leading-7 text-slate-300">
                Best for short showcases, entrances, halftime performances,
                pep rallies, camps, or social media performance edits.
              </p>
            </div>

            <div className="rounded-3xl border border-purple-500/30 bg-purple-500/10 p-6">
              <h3 className="text-3xl font-black">1:00</h3>
              <p className="mt-3 text-2xl font-black text-purple-300">$100</p>
              <p className="mt-4 text-sm font-bold uppercase tracking-[0.25em] text-purple-200">
                Short Routine Mix
              </p>
              <p className="mt-4 leading-7 text-slate-300">
                Great for school performances, exhibitions, mini routines,
                intros, and beginner teams needing clean high-energy music.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-purple-500/30 bg-purple-500/10 p-8">
            <h3 className="text-3xl font-black">Add-Ons</h3>
            <p className="mt-5 leading-8 text-slate-300">
              Rush delivery +$50, extra revision +$25, voiceover only $40+,
              custom chant writing, and premium theme packages available.
            </p>
          </div>

          <div className="mt-12">
            <a
              href="https://form.jotform.com/261585481619063"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-10 py-5 text-lg font-black text-white shadow-2xl transition duration-300 hover:scale-105"
            >
              Start My Cheer Mix
            </a>
          </div>
        </div>
      </section>
  
   <Footer />
     </main>
   );
 }