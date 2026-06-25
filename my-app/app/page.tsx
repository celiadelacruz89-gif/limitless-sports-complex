import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedVideo from "@/components/FeaturedVideo";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <Navbar />

  {/* HERO */}
<section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-28 text-center">

  {/* BACKGROUND VIDEO */}
<video
  id="heroVideo"
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 z-0 h-full w-full object-cover brightness-125 contrast-110"
>

  <source src="/hero-video.mp4" type="video/mp4" />
  </video>

  {/* DARK OVERLAY */}
 <div className="absolute inset-0 z-0 bg-black/35" />

  {/* CONTENT */}
  <div className="relative z-10 mx-auto max-w-5xl rounded-[2rem] border border-white/15 bg-black/30 p-8 shadow-[0_0_80px_rgba(59,130,246,0.15)] backdrop-blur-md md:p-14">

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
      Building the future home of athlete development, batting cages,
      cheer training, custom music, and community growth in El Paso.
    </p>

    <div className="mt-10 flex flex-col justify-center gap-4 md:flex-row">

      <a
        href="mailto:limitless915sc@gmail.com"
        className="rounded-full bg-gradient-to-r from-white to-slate-400 px-8 py-4 font-black text-[#020817] transition duration-300 hover:scale-105 hover:shadow-2xl"
      >
        Contact Us
      </a>

      <a
        href="https://instagram.com/limitless915sc"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-white/25 bg-white/10 px-8 py-4 font-black text-white transition duration-300 hover:scale-105 hover:bg-white hover:text-[#020817]"
      >
        Follow Instagram
      </a>

      <a
        href="https://form.jotform.com/261584398573068"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 font-black text-white shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl"
      >
        Order A Custom Song
      </a>

    </div>

  </div>

</section>

  {/* FEATURED VIDEO */}
<section className="border-y border-white/10 bg-[#020817] px-6 py-16">
  <div className="mx-auto max-w-7xl">
    <FeaturedVideo />
  </div>
</section>

      {/* QUICK ACTIONS */}
      <section id="start" className="px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-slate-400">
            Start Here
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            How Can Limitless Help You?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Choose what you need today and we’ll guide you to the right place.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-purple-500/30 bg-purple-500/10 p-8 shadow-2xl shadow-purple-500/10">
              <h3 className="text-3xl font-black">Custom Song</h3>
              <p className="mt-5 leading-8 text-slate-300">
                Request an athlete spotlight song, family tribute,
                senior night song, or full team anthem.
              </p>
              <a
                href="https://form.jotform.com/261584398573068"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-7 py-4 font-black text-white transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Request A Song
              </a>
            </div>

            <div className="rounded-3xl border border-blue-500/30 bg-blue-500/10 p-8 shadow-2xl shadow-blue-500/10">
              <h3 className="text-3xl font-black">Support The Vision</h3>
              <p className="mt-5 leading-8 text-slate-300">
                Sponsor, donate, or support the future home of Limitless Sports
                Complex and athlete development.
              </p>
              <a
                href="https://pci.jotform.com/form/261524366412049"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-full bg-blue-500 px-7 py-4 font-black text-white transition duration-300 hover:scale-105 hover:bg-blue-400 hover:shadow-2xl"
              >
                Become A Sponsor
              </a>
            </div>

            <div className="rounded-3xl border border-green-500/30 bg-green-500/10 p-8 shadow-2xl shadow-green-500/10">
              <h3 className="text-3xl font-black">Follow Facility Updates</h3>
              <p className="mt-5 leading-8 text-slate-300">
                Stay connected as we build toward batting cages,
                cheer training, athlete programs, and future events.
              </p>
              <a
                href="mailto:limitless915sc@gmail.com?subject=Limitless Facility Updates"
                className="mt-8 inline-block rounded-full bg-green-500 px-7 py-4 font-black text-white transition duration-300 hover:scale-105 hover:bg-green-400 hover:shadow-2xl"
              >
                Get Updates
              </a>
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
              <h3 className="text-3xl font-black">Batting Cages</h3>
              <p className="mt-5 leading-8 text-slate-300">
                Indoor baseball and softball batting cages for individual reps,
                team rentals, hitting practice, lessons, and future clinics.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/12 to-white/5 p-8 shadow-2xl shadow-black/30">
              <div className="mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-white to-slate-500" />
              <h3 className="text-3xl font-black">Cheer Gym</h3>
              <p className="mt-5 leading-8 text-slate-300">
                Tumbling, stunting, jumps, choreography, conditioning,
                competition prep, private lessons, and team practice space.
              </p>
            </div>
          </div>
        </div>
      </section>

{/* FUTURE FACILITY */}
<section className="border-y border-white/10 bg-[#020817] px-6 py-24">
  <div className="mx-auto max-w-7xl">

    <div className="text-center">
      <p className="text-sm font-bold uppercase tracking-[0.4em] text-slate-400">
        Future Home
      </p>

      <h2 className="mt-4 text-4xl font-black md:text-6xl">
        Limitless Sports Complex
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
        A future facility designed for athlete development, batting cages,
        cheer training, camps, events, and community growth.
      </p>
    </div>

    <div className="mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl">
      <img
        src="/facility-rendering.png"
        alt="Future Limitless Sports Complex"
        className="w-full object-cover"
      />
    </div>

    <div className="mt-10 grid gap-6 md:grid-cols-4">
      <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6 text-center">
        <h3 className="text-3xl font-black">2</h3>
        <p className="mt-2 text-slate-300">Cheer Floors</p>
      </div>

      <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6 text-center">
        <h3 className="text-3xl font-black">2-3</h3>
        <p className="mt-2 text-slate-300">Batting Cages</p>
      </div>

      <div className="rounded-2xl border border-purple-500/20 bg-purple-500/10 p-6 text-center">
        <h3 className="text-3xl font-black">8,800</h3>
        <p className="mt-2 text-slate-300">Square Feet</p>
      </div>

      <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-6 text-center">
        <h3 className="text-3xl font-black">∞</h3>
        <p className="mt-2 text-slate-300">Opportunities</p>
      </div>
    </div>

  </div>
</section>

      {/* THE VISION */}
      <section id="vision" className="border-y border-white/10 bg-gradient-to-b from-[#020817] to-[#07122b] px-6 py-28">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.45em] text-slate-400">
            The Vision
          </p>

          <h2 className="mt-5 text-5xl font-black md:text-6xl">
            Building Something Bigger For Athletes
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-slate-300">
            Limitless Sports Complex LLC is currently building toward a future
            indoor sports facility designed to give athletes a safe, inspiring,
            and professional place to train, grow, and create opportunities both
            on and off the field.
          </p>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-400">
            Through community support, fundraising, sponsorships, creative
            services, athlete development, and local partnerships, we are turning
            the Limitless vision into reality — one step at a time.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-24">
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
                rel="noopener noreferrer"
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
                TikTok + YouTube
              </p>
              <p className="mt-4 font-bold text-slate-100">@limitless915sc</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}