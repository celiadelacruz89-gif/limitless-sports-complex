    import FeaturedVideo from "@/components/FeaturedVideo";
   
    export default function Home() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
  
      {/* STICKY NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#020817]/90 px-6 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="#" className="text-xl font-black tracking-widest">
            LIMITLESS
          </a>

          <nav className="hidden gap-6 text-sm font-bold text-slate-300 md:flex">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#start" className="hover:text-white">Start Here</a>
            <a href="#sponsoramat" className="hover:text-white">Sponsor A Mat</a>
            <a href="#merch" className="hover:text-white">Merch</a>
            <a href="#creative" className="hover:text-white">Creative</a>
            <a href="#samples" className="hover:text-white">Samples</a>
            <a href="#cheer" className="hover:text-white">Cheer Music</a>
            <a href="#tball" className="hover:text-white">T-Ball Music</a>
            <a href="#vision" className="hover:text-white">Vision</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>

          <a
            href="https://form.jotform.com/261584398573068"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-3 text-sm font-black text-white transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Order Song
          </a>
        </div>
      </header>

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

    <div className="mt-12 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-8">
  <h3 className="text-3xl font-black">
    Goal: $25,000
  </h3>

  <p className="mt-4 text-slate-300">
    Sponsor a section of the mat and become part of the foundation
    of Limitless Sports Complex LLC.
  </p>

  <div className="mt-8 h-8 overflow-hidden rounded-full bg-white/10">
    <div
      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
      style={{ width: "1%" }}
    />
  </div>

  <p className="mt-4 font-bold text-cyan-300">
    $250 Raised • $25,000 Goal
  </p>

  <p className="mt-2 text-sm text-slate-400">
    1% Complete
  </p>
</div>
      
    <h3 className="mt-4 text-4xl font-black">
  Become A Founding Sponsor
</h3>
<p className="mx-auto mt-4 max-w-3xl text-lg text-slate-300">
  Your sponsorship helps build the future home of Limitless Sports Complex LLC.
  Every sponsored square directly supports cheer flooring, equipment, and a
  permanent training facility for local athletes.
</p>
{/* 2D MAT SPONSORSHIP MAP */}
<div className="mt-14 rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-10">
  <p className="text-sm font-bold uppercase tracking-[0.4em] text-slate-400">
    Sponsor The Mat
  </p>

 <h3 className="mt-4 text-3xl font-black md:text-4xl">
  Claim A Mat Section
</h3>

<div className="mt-6 rounded-2xl border border-green-500/30 bg-green-500/10 p-6">
  <h4 className="text-2xl font-black">
    1 / 50 Squares Sponsored
  </h4>

  <p className="mt-2 text-slate-300">
    $250 Raised of $25,000 Goal
  </p>
</div>

  <p className="mx-auto mt-4 max-w-3xl text-slate-300">
    Each square represents a sponsor opportunity. When a section is sponsored,
    it can be marked as claimed and recognized on our sponsor wall.
  </p>

  <div className="mx-auto mt-10 max-w-5xl rounded-3xl border border-cyan-500/30 bg-[#020817] p-4 shadow-2xl shadow-cyan-500/10">
    <div className="grid grid-cols-5 gap-2 md:grid-cols-10">
{Array.from({ length: 50 }).map((_, index) => {
  const number = index + 1;

  return (
    <a
      key={number}
      href="https://form.jotform.com/261524366412049"
      target="_blank"
      rel="noopener noreferrer"
      className={
        number === 1
          ? "group flex aspect-square items-center justify-center rounded-xl border border-green-400 bg-green-500 px-1 text-xs font-black text-white transition duration-300 hover:scale-105"
          : "group flex aspect-square items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-500/10 text-sm font-black text-cyan-100 transition duration-300 hover:scale-105 hover:bg-cyan-400 hover:text-[#020817] md:text-base"
      }
    >
      {number === 1 ? "Artegon Graphics" : `SP-${number}`}
    </a>
  );
})}
      
        );
    </div>
  </div>

  <div className="mt-8 grid gap-4 text-left md:grid-cols-3">
    <div className="rounded-2xl border border-cyan-400/30 bg-cyan-500/10 p-5">
      <p className="font-black text-cyan-300">Available</p>
      <p className="mt-2 text-sm text-slate-300">
        Open squares can be sponsored by families, businesses, or teams.
      </p>
    </div>

    <div className="rounded-2xl border border-yellow-400/30 bg-yellow-500/10 p-5">
      <p className="font-black text-yellow-300">Featured Sponsors</p>
      <p className="mt-2 text-sm text-slate-300">
        Larger sponsorships receive premium recognition and logo placement.
      </p>
    </div>

    <div className="rounded-2xl border border-green-400/30 bg-green-500/10 p-5">
      <p className="font-black text-green-300">Goal Tracker</p>
      <p className="mt-2 text-sm text-slate-300">
        Each claimed section helps us move closer to the $25,000 goal.
      </p>
    </div>
  </div>
</div>

<div className="mt-10 rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-6">
  <h3 className="text-2xl font-black text-yellow-300">
    Founding Sponsor Opportunity
  </h3>

  <p className="mt-3 text-slate-300">
    The first businesses to sponsor Limitless Sports Complex will be permanently
    recognized as Founding Sponsors on our website, sponsor wall, and future facility.
  </p>
</div>
<div className="mt-8 rounded-2xl border border-green-500/30 bg-green-500/10 p-6">
  <h3 className="text-2xl font-black text-green-300">
    Thank You Artegon Graphics!
  </h3>

  <p className="mt-3 text-slate-300">
    Proud Founding Sponsor of Limitless Sports Complex LLC.
  </p>
</div>
{/* FEATURED SPONSORS WALL */}
<div className="mt-16 rounded-[2rem] border border-white/10 bg-white/5 p-8">
  <p className="text-sm font-bold uppercase tracking-[0.4em] text-slate-400">
    Featured Sponsors
  </p>

  <h3 className="mt-4 text-4xl font-black">
    Founding Sponsor Wall
  </h3>

  <p className="mx-auto mt-4 max-w-3xl text-slate-300">
    Sponsor logos and family names will be displayed here as the campaign grows.
  </p>

  <div className="mt-10 grid gap-6 md:grid-cols-4">
    {[1, 2, 3, 4].map((sponsor) => (
  <div
    key={sponsor}
    className={
      sponsor === 1
        ? "flex h-32 items-center justify-center rounded-2xl border border-cyan-400 bg-white p-6"
        : "flex h-32 items-center justify-center rounded-2xl border border-dashed border-white/20 bg-black/20 p-6"
    }
  >
    {sponsor === 1 ? (
      <img
        src="/artegon-graphics-logo.png"
        alt="Artegon Graphics"
        className="max-h-20 w-auto object-contain"
      />
    ) : (
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
          Founding Sponsor
        </p>

        <p className="mt-2 text-lg font-black text-white">
          Your Logo Here
        </p>
      </div>
    )}
  </div>
))}
  </div>
</div>
    <div className="mt-14 grid gap-8 md:grid-cols-4">

      <div className="rounded-3xl border border-green-500/30 bg-green-500/10 p-6">
        <h3 className="text-3xl font-black">$100</h3>
        <p className="mt-3 font-bold text-green-300">
          Bronze Sponsor
        </p>
        <p className="mt-4 text-slate-300">
          Name listed on sponsor wall.
        </p>
      </div>

      <div className="rounded-3xl border border-blue-500/30 bg-blue-500/10 p-6">
        <h3 className="text-3xl font-black">$250</h3>
        <p className="mt-3 font-bold text-blue-300">
          Silver Sponsor
        </p>
        <p className="mt-4 text-slate-300">
          Logo on sponsor wall and website.
        </p>
      </div>

      <div className="rounded-3xl border border-purple-500/30 bg-purple-500/10 p-6">
        <h3 className="text-3xl font-black">$500</h3>
        <p className="mt-3 font-bold text-purple-300">
          Gold Sponsor
        </p>
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
        Become A Sponsor
      </a>

    </div>

  </div>
</section>
{/* FOUNDING MEMBER BUNDLES */}
<section className="border-y border-white/10 bg-[#020817] px-6 py-24">
  <div className="mx-auto max-w-7xl text-center">
    <p className="text-sm font-bold uppercase tracking-[0.4em] text-slate-400">
      Founding Member Collection
    </p>

    <h2 className="mt-4 text-4xl font-black md:text-6xl">
      Bundle Packages
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
      Support the future of Limitless Sports Complex and become part of the foundation.
    </p>

    <div className="mt-14 grid gap-8 md:grid-cols-3">
      <div className="rounded-3xl border border-white/10 bg-white/10 p-8">
        <h3 className="text-3xl font-black">Athlete Package</h3>
        <p className="mt-4 text-5xl font-black text-cyan-300">$50</p>

        <ul className="mt-8 space-y-3 text-left text-slate-300">
          <li>• Shirt</li>
          <li>• Decal</li>
          <li>• Certificate</li>
        </ul>
      </div>

      <div className="relative rounded-3xl border-2 border-cyan-400 bg-cyan-500/10 p-8 shadow-[0_0_50px_rgba(34,211,238,0.25)] md:scale-105">
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-cyan-400 px-6 py-2 text-sm font-black text-[#020817]">
          PRIMARY OFFER
        </div>

        <h3 className="text-3xl font-black">Family Package</h3>
        <p className="mt-4 text-5xl font-black text-cyan-300">$100</p>

        <ul className="mt-8 space-y-3 text-left text-slate-300">
          <li>• 2 Shirts</li>
          <li>• 2 Decals</li>
          <li>• Founding Member Certificate</li>
          <li>• Name on Founding Families Wall</li>
        </ul>
      </div>

      <div className="rounded-3xl border border-yellow-500/30 bg-yellow-500/10 p-8">
        <h3 className="text-3xl font-black">Legacy Package</h3>
        <p className="mt-4 text-5xl font-black text-yellow-300">$150</p>

        <ul className="mt-8 space-y-3 text-left text-slate-300">
          <li>• Hoodie</li>
          <li>• Shirt</li>
          <li>• Hat</li>
          <li>• Certificate</li>
          <li>• Website Recognition</li>
        </ul>
      </div>
    </div>

    <div className="mt-12">
      <a
        href="https://form.jotform.com/261524366412049"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-10 py-5 text-lg font-black text-white shadow-2xl transition duration-300 hover:scale-105"
      >
        Claim A Bundle
      </a>
    </div>
  </div>
</section>
{/* MERCH STORE */}
<section
  id="merch"
  className="border-y border-white/10 bg-gradient-to-b from-[#07122b] to-[#020817] px-6 py-24"
>
  <div className="mx-auto max-w-7xl">
    <div className="text-center">
      <p className="text-sm font-bold uppercase tracking-[0.4em] text-slate-400">
        Official Limitless Merch
      </p>

      <h2 className="mt-4 text-4xl font-black md:text-6xl">
        Rep The Movement
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
        Every purchase helps build the future home of Limitless Sports Complex.
      </p>
    </div>

    <div className="mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl">
      <img
        src="/limitless-merch-banner.png"
        alt="Official Limitless Merch"
        className="w-full"
      />
    </div>

    <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
      {[
        {
          name: "Founding Member Tee",
          price: "$30",
          details: ["Front: LIMITLESS", "Back: BUILT BEFORE THE BUILDING", "FOUNDING MEMBER 2026"],
        },
        {
          name: "Founding Member Hoodie",
          price: "$45",
          details: ["Front: LIMITLESS", "Back: NO LIMITS NO EXCUSES", "BUILT BEFORE THE BUILDING"],
        },
        {
          name: "Legacy Hat",
          price: "$30",
          details: ["Front: LIMITLESS", "Side: FOUNDING MEMBER"],
        },
        {
          name: "Decal",
          price: "$5",
          details: ["LIMITLESS", "or", "BUILT BEFORE THE BUILDING"],
        },
        {
          name: "20 oz Tumbler",
          price: "$25",
          details: ["Front: LIMITLESS", "Back: FOUNDING MEMBER 2026"],
        },
      ].map((item) => (
        <div
          key={item.name}
          className="rounded-3xl border border-cyan-500/30 bg-cyan-500/10 p-6 text-center shadow-2xl shadow-cyan-500/10"
        >
          <h3 className="text-xl font-black">{item.name}</h3>
          <p className="mt-3 text-4xl font-black text-cyan-300">
            {item.price}
          </p>

          <ul className="mt-6 space-y-2 text-left text-sm text-slate-300">
            {item.details.map((detail) => (
              <li key={detail}>• {detail}</li>
            ))}
          </ul>

          <a
            href="https://form.jotform.com/261524366412049"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-sm font-black text-white transition duration-300 hover:scale-105"
          >
            Order Now
          </a>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CREATIVE SERVICES */}
      <section id="creative" className="border-y border-white/10 bg-white/[0.04] px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-slate-400">
            Limitless Creative Services
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Custom Songs & Team Anthems
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Personalized songs for individual athletes, teams, coaches, families,
            and special events. From player spotlight songs to full team anthems,
            we help turn your story into music.
          </p>

          <p className="mt-4 text-slate-400">
            Senior Nights • Team Walkouts • Highlight Videos • Birthdays •
            Military Tributes • Banquets • Fundraisers
          </p>

          <h3 className="mt-10 text-3xl font-black">Starting at Only $49</h3>

          <div className="mt-10 flex flex-col justify-center gap-4 md:flex-row">
            <a
              href="https://form.jotform.com/261584398573068"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-white to-slate-400 px-8 py-4 font-black text-[#020817] transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Request Custom Song
            </a>

            <a
              href="https://form.jotform.com/261584398573068"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/25 bg-white/10 px-8 py-4 font-black text-white transition duration-300 hover:scale-105 hover:bg-white hover:text-[#020817]"
            >
              Request Team Anthem
            </a>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                Starter
              </p>
              <h3 className="mt-3 text-4xl font-black">$49</h3>
              <p className="mt-2 font-bold text-white">
                Basic Athlete Spotlight Song
              </p>
              <ul className="mt-6 space-y-2 text-left text-slate-300">
                <li>• Personalized athlete song</li>
                <li>• Athlete name included</li>
                <li>• 1 verse + chorus</li>
                <li>• MP3 delivery</li>
                <li>• 3–5 day delivery</li>
              </ul>

              <a
                href="https://form.jotform.com/261584398573068"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-full bg-white px-6 py-3 font-black text-[#020817] transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Request Package
              </a>

              <a
                href="https://buy.stripe.com/test_5kQ4gB4ZD2ed2dl2A4cV201"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-full border border-white/25 px-6 py-3 font-black text-white transition duration-300 hover:scale-105 hover:bg-white hover:text-[#020817]"
              >
                Pay $49
              </a>
            </div>

            <div className="relative rounded-3xl border border-blue-400/50 bg-blue-500/10 p-6 shadow-2xl shadow-blue-500/20 md:scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-5 py-2 text-sm font-black text-white">
                MOST POPULAR
              </div>

              <p className="text-sm uppercase tracking-[0.3em] text-blue-300">
                Premium
              </p>
              <h3 className="mt-3 text-4xl font-black">$99</h3>
              <p className="mt-2 font-bold text-white">
                Premium Athlete Anthem
              </p>
              <ul className="mt-6 space-y-2 text-left text-slate-300">
                <li>• Fully custom lyrics</li>
                <li>• Emotional storytelling</li>
                <li>• Cover artwork</li>
                <li>• Social media teaser</li>
                <li>• 3–7 day delivery</li>
              </ul>

              <a
                href="https://form.jotform.com/261584398573068"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-full bg-blue-500 px-6 py-3 font-black text-white transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Request Package
              </a>

              <a
                href="https://buy.stripe.com/test_3cIeVfcs58CB9FNb6AcV202"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-full border border-blue-300/40 px-6 py-3 font-black text-white transition duration-300 hover:scale-105 hover:bg-blue-500"
              >
                Pay $99
              </a>
            </div>

            <div className="rounded-3xl border border-green-500/30 bg-green-500/10 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-green-300">
                Team
              </p>
              <h3 className="mt-3 text-4xl font-black">$199+</h3>
              <p className="mt-2 font-bold text-white">
                Team Anthems & Walkout Songs
              </p>
              <ul className="mt-6 space-y-2 text-left text-slate-300">
                <li>• Team hype anthem</li>
                <li>• Walkout music</li>
                <li>• Competition edits</li>
                <li>• Team shoutouts</li>
                <li>• 5–10 day delivery</li>
              </ul>

              <a
                href="https://form.jotform.com/261584398573068"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-full bg-green-500 px-6 py-3 font-black text-white transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Request Package
              </a>

              <a
                href="https://buy.stripe.com/test_3cIcN763Hf0Z6tB1w0cV203"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-full border border-green-300/40 px-6 py-3 font-black text-white transition duration-300 hover:scale-105 hover:bg-green-500"
              >
                Pay $199
              </a>
            </div>
          </div>

          <p className="mt-8 text-sm text-slate-400">
            Rush delivery available for an additional fee.
          </p>

          <div className="mt-12 grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 text-left md:grid-cols-4">
            <p className="text-slate-300">✔ Personalized for your athlete or team</p>
            <p className="text-slate-300">✔ Professionally mixed and mastered</p>
            <p className="text-slate-300">✔ Delivered digitally</p>
            <p className="text-slate-300">✔ Built for social media & highlight videos</p>
          </div>
        </div>
      </section>

      {/* CREATIVE PORTFOLIO */}
      <section id="samples" className="border-y border-white/10 bg-gradient-to-b from-[#020817] to-[#07122b] px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-slate-400">
            Listen To The Limitless Sound
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Custom Song Samples
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Listen to protected 15-second previews of custom songs created for
            athletes, teams, and families.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl shadow-black/20 transition duration-300 hover:scale-[1.02]">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                Individual Athlete
              </p>
              <h3 className="mt-3 text-2xl font-black">
                Athlete Spotlight Samples
              </h3>
              <p className="mt-4 text-slate-300">
                Personalized songs for players, senior nights, birthdays, and
                highlight videos.
              </p>

              <div className="mt-6 text-left">
                <p className="mb-2 font-bold">Red Cleats, Lion Heart</p>
                <audio controls className="w-full">
                  <source src="/Sample1_IndividualAthlete.mp3" type="audio/mpeg" />
                </audio>

                <p className="mt-5 mb-2 font-bold">Bat Crack Anthem</p>
                <audio controls className="w-full">
                  <source src="/Sample2_IndividualAthlete.mp3" type="audio/mpeg" />
                </audio>

                <p className="mt-3 text-sm text-slate-400">
                  15-second protected previews
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-blue-500/30 bg-blue-500/10 p-6 shadow-2xl shadow-blue-500/20 transition duration-300 hover:scale-[1.02]">
              <p className="text-sm uppercase tracking-[0.3em] text-blue-300">
                Team Anthem
              </p>
              <h3 className="mt-3 text-2xl font-black">Team Hype Samples</h3>
              <p className="mt-4 text-slate-300">
                Custom anthems for teams, walkouts, competitions, and hype reels.
              </p>

              <div className="mt-6 text-left">
                <p className="mb-2 font-bold">Red & Black</p>
                <audio controls className="w-full">
                  <source src="/Sample1_TeamAnthem.mp3" type="audio/mpeg" />
                </audio>

                <p className="mt-5 mb-2 font-bold">Renegades Stateline</p>
                <audio controls className="w-full">
                  <source src="/Sample2_TeamAnthem.mp3" type="audio/mpeg" />
                </audio>

                <p className="mt-3 text-sm text-slate-400">
                  15-second protected previews
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-green-500/30 bg-green-500/10 p-6 shadow-2xl shadow-green-500/20 transition duration-300 hover:scale-[1.02]">
              <p className="text-sm uppercase tracking-[0.3em] text-green-300">
                Family Tribute
              </p>
              <h3 className="mt-3 text-2xl font-black">
                Emotional Tribute Samples
              </h3>
              <p className="mt-4 text-slate-300">
                Emotional keepsake songs for families, military kids, siblings,
                and proud parents.
              </p>

              <div className="mt-6 text-left">
                <p className="mb-2 font-bold">Elizabeth’s Bravery</p>
                <audio controls className="w-full">
                  <source src="/Sample1_FamilyTribute.mp3" type="audio/mpeg" />
                </audio>

                <p className="mt-5 mb-2 font-bold">Anthony</p>
                <audio controls className="w-full">
                  <source src="/Sample2_FamilyTribute.mp3" type="audio/mpeg" />
                </audio>

                <p className="mt-3 text-sm text-slate-400">
                  15-second protected previews
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <a
              href="https://form.jotform.com/261584398573068"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-10 py-5 text-lg font-black text-white shadow-2xl transition duration-300 hover:scale-105"
            >
              Request Your Custom Song
            </a>
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
            Custom Cheer Mixes Tracks
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

          <div className="mt-12 grid gap-8 md:grid-cols-1">
            <div className="rounded-3xl border border-purple-500/30 bg-purple-500/10 p-8">
              <h3 className="text-3xl font-black">Add-Ons</h3>
              <p className="mt-5 leading-8 text-slate-300">
                Rush delivery +$50, extra revision +$25, voiceover only $40+,
                custom chant writing, and premium theme packages available.
              </p>
            </div>
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

      {/* T-BALL MUSIC */}
      <section id="tball" className="border-y border-white/10 bg-gradient-to-b from-[#020817] to-[#07122b] px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-slate-400">
            T-Ball & Youth Sports Music
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Custom Walkout Songs For Young Athletes
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Fun, clean, hype songs for T-ball players, baseball teams,
            football players, birthday shoutouts, highlight videos,
            and youth sports memories.
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
              Request T-Ball Music
            </a>
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

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Limitless Sports Complex LLC. All rights reserved.
      </footer>
    </main>
  );
}