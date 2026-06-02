export default function Home() {
  const matGoal = 25000;
  const matRaised = 0;
  const matPercent = Math.min((matRaised / matGoal) * 100, 100);

  return (
    <main className="min-h-screen bg-[#020817] text-white">

      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.35),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(30,64,175,0.25),transparent_35%)]" />

        <div className="relative z-10 mx-auto max-w-5xl rounded-[2rem] border border-white/15 bg-white/5 p-8 shadow-2xl shadow-black/50 backdrop-blur-md md:p-14">

          <p className="mb-5 text-sm font-bold uppercase tracking-[0.45em] text-slate-300">
            El Paso, Texas
          </p>

          <h1 className="bg-gradient-to-r from-white via-slate-300 to-slate-500 bg-clip-text text-6xl font-black tracking-tight text-transparent md:text-8xl">
            LIMITLESS
          </h1>

          <p className="mt-4 text-2xl font-semibold text-slate-200 md:text-3xl">
            Sports Complex LLC
          </p>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            A premium indoor sports facility built for batting cages,
            cheer training, team rentals, athlete development,
            camps, private lessons, and community growth.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 md:flex-row">

            <a
              href="mailto:limitless915sc@gmail.com"
              className="rounded-full bg-gradient-to-r from-white to-slate-400 px-8 py-4 font-black text-[#020817] shadow-lg shadow-slate-500/20 hover:from-slate-200 hover:to-white"
            >
              Contact Us
            </a>

            <a
              href="https://instagram.com/limitless915sc"
              target="_blank"
              className="rounded-full border border-white/25 bg-white/10 px-8 py-4 font-black text-white hover:bg-white hover:text-[#020817]"
            >
              Follow Instagram
            </a>

          </div>
        </div>
      </section>

      {/* SPONSOR A MAT */}
      <section className="bg-slate-950 text-white py-20 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-sm font-bold uppercase tracking-[0.4em] text-slate-400">
            Community Campaign
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Sponsor-a-Mat
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300 max-w-3xl mx-auto">
            Help us build a safe and professional training space
            for athletes across El Paso. Every donation helps fund
            cheer flooring, athlete safety equipment, and training areas.
          </p>

          <div className="mt-14 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/40">

            <div className="flex justify-between mb-4 text-lg font-bold">
              <span>${matRaised.toLocaleString()} Raised</span>
              <span>${matGoal.toLocaleString()} Goal</span>
            </div>

            <div className="h-8 w-full overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-8 rounded-full bg-gradient-to-r from-slate-300 to-blue-400 transition-all duration-700"
                style={{ width: `${matPercent}%` }}
              />
            </div>

            <p className="mt-5 text-2xl font-black">
              {matPercent.toFixed(0)}% Funded
            </p>

            <div className="mt-12 flex flex-col items-center gap-6">

              {/* PAYPAL */}
              <form
                action="https://www.paypal.com/donate"
                method="post"
                target="_top"
              >
                <input
                  type="hidden"
                  name="campaign_id"
                  value="7D2GKYZ57KXLL"
                />

                <input
                  type="image"
                  src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
                  border="0"
                  name="submit"
                  title="PayPal - The safer, easier way to pay online!"
                  alt="Donate with PayPal button"
                />

                <img
                  alt=""
                  border="0"
                  src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                  width="1"
                  height="1"
                />
              </form>

              {/* CASH APP */}
              <div className="rounded-2xl border border-green-500/30 bg-green-500/10 px-8 py-5">
                <p className="text-sm uppercase tracking-[0.35em] text-green-300">
                  Cash App
                </p>

                <p className="mt-2 text-2xl font-black">
                  $Limitless915
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* PROGRAMS */}
      <section className="px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <div className="text-center">

            <p className="text-sm font-bold uppercase tracking-[0.4em] text-slate-400">
              First Launch Phase
            </p>

            <h2 className="mt-4 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-4xl font-black text-transparent md:text-5xl">
              Batting Cages + Cheer Gym
            </h2>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">

            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/12 to-white/5 p-8 shadow-2xl shadow-black/30">

              <div className="mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-white to-slate-500" />

              <h3 className="text-3xl font-black">
                Batting Cages
              </h3>

              <p className="mt-5 leading-8 text-slate-300">
                Indoor baseball and softball batting cages for
                individual reps, team rentals, hitting practice,
                lessons, and future clinics.
              </p>

            </div>

            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/12 to-white/5 p-8 shadow-2xl shadow-black/30">

              <div className="mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-white to-slate-500" />

              <h3 className="text-3xl font-black">
                Cheer Gym
              </h3>

              <p className="mt-5 leading-8 text-slate-300">
                Tumbling, stunting, jumps, choreography,
                conditioning, competition prep, private lessons,
                and team practice space.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="border-y border-white/10 bg-white/[0.04] px-6 py-24">

        <div className="mx-auto max-w-5xl text-center">

          <h2 className="text-4xl font-black md:text-5xl">
            Built to Help Athletes Rise
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-300">
            Limitless Sports Complex LLC was created to give
            athletes a safe, professional, and inspiring place
            to train year-round. Our mission is to provide a
            community-centered facility where athletes can build
            confidence, discipline, strength, skill, and opportunity.
          </p>

        </div>
      </section>

      {/* CONTACT */}
      <section className="px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <h2 className="text-center text-4xl font-black md:text-5xl">
            Connect With Us
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl border border-white/10 bg-white/10 p-8 text-center">

              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                Email
              </p>

              <a
                href="mailto:limitless915sc@gmail.com"
                className="mt-4 block font-bold text-slate-100"
              >
                limitless915sc@gmail.com
              </a>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-8 text-center">

              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                Instagram
              </p>

              <a
                href="https://instagram.com/limitless915sc"
                target="_blank"
                className="mt-4 block font-bold text-slate-100"
              >
                @limitless915sc
              </a>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-8 text-center">

              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                Facebook
              </p>

              <p className="mt-4 font-bold text-slate-100">
                Limitless Sports Complex LLC
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-8 text-center">

              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                TikTok
              </p>

              <p className="mt-4 font-bold text-slate-100">
                @limitless915sc
              </p>

            </div>

          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Limitless Sports Complex LLC. All rights reserved.
      </footer>

    </main>
  );
}
