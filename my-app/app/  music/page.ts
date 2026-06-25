import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MusicPage() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <Navbar />

      {/* MUSIC HERO */}
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-slate-400">
            Limitless Creative Services
          </p>

          <h1 className="mt-4 text-5xl font-black md:text-7xl">
            Custom Songs & Team Anthems
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Personalized songs for athletes, teams, families, coaches, senior
            nights, walkouts, highlight videos, and special moments.
          </p>

          <div className="mt-10">
            <a
              href="https://form.jotform.com/261584398573068"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-10 py-5 text-lg font-black text-white shadow-2xl transition duration-300 hover:scale-105"
            >
              Request Custom Song
            </a>
          </div>
        </div>
      </section>

      {/* MUSIC PACKAGES */}
      <section className="border-y border-white/10 bg-white/[0.04] px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-slate-400">
            Pricing
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Music Packages
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Starter",
                price: "$49",
                subtitle: "Basic Athlete Spotlight Song",
                color: "white",
                items: [
                  "Personalized athlete song",
                  "Athlete name included",
                  "1 verse + chorus",
                  "MP3 delivery",
                  "3–5 day delivery",
                ],
              },
              {
                title: "Premium",
                price: "$99",
                subtitle: "Premium Athlete Anthem",
                color: "blue",
                badge: "MOST POPULAR",
                items: [
                  "Fully custom lyrics",
                  "Emotional storytelling",
                  "Cover artwork",
                  "Social media teaser",
                  "3–7 day delivery",
                ],
              },
              {
                title: "Team",
                price: "$199+",
                subtitle: "Team Anthems & Walkout Songs",
                color: "green",
                items: [
                  "Team hype anthem",
                  "Walkout music",
                  "Competition edits",
                  "Team shoutouts",
                  "5–10 day delivery",
                ],
              },
            ].map((pkg) => (
              <div
                key={pkg.title}
                className={
                  pkg.color === "blue"
                    ? "relative rounded-3xl border border-blue-400/50 bg-blue-500/10 p-6 shadow-2xl shadow-blue-500/20 md:scale-105"
                    : pkg.color === "green"
                    ? "rounded-3xl border border-green-500/30 bg-green-500/10 p-6"
                    : "rounded-3xl border border-white/10 bg-white/10 p-6"
                }
              >
                {pkg.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-5 py-2 text-sm font-black text-white">
                    {pkg.badge}
                  </div>
                )}

                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                  {pkg.title}
                </p>

                <h3 className="mt-3 text-4xl font-black">{pkg.price}</h3>

                <p className="mt-2 font-bold text-white">{pkg.subtitle}</p>

                <ul className="mt-6 space-y-2 text-left text-slate-300">
                  {pkg.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a
              href="https://form.jotform.com/261584398573068"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-10 py-5 text-lg font-black text-white shadow-2xl transition duration-300 hover:scale-105"
            >
              Start My Song
            </a>
          </div>
        </div>
      </section>

      {/* MUSIC USES */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-slate-400">
            Perfect For
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Every Athlete Has A Story
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              "Walkout Songs",
              "Highlight Videos",
              "Senior Nights",
              "Team Anthems",
              "Birthday Songs",
              "Family Tributes",
              "Banquets",
              "Fundraisers",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/10 p-6 font-bold text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SONG SAMPLES */}
      <section className="border-y border-white/10 bg-gradient-to-b from-[#020817] to-[#07122b] px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-slate-400">
            Listen To The Limitless Sound
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Custom Song Samples
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Listen to protected previews of custom songs created for athletes,
            teams, and families.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                label: "Individual Athlete",
                title: "Athlete Spotlight Samples",
                color: "white",
                songs: [
                  ["Red Cleats, Lion Heart", "/Sample1_IndividualAthlete.mp3"],
                  ["Bat Crack Anthem", "/Sample2_IndividualAthlete.mp3"],
                ],
              },
              {
                label: "Team Anthem",
                title: "Team Hype Samples",
                color: "blue",
                songs: [
                  ["Red & Black", "/Sample1_TeamAnthem.mp3"],
                  ["Renegades Stateline", "/Sample2_TeamAnthem.mp3"],
                ],
              },
              {
                label: "Family Tribute",
                title: "Emotional Tribute Samples",
                color: "green",
                songs: [
                  ["Elizabeth’s Bravery", "/Sample1_FamilyTribute.mp3"],
                  ["Anthony", "/Sample2_FamilyTribute.mp3"],
                ],
              },
            ].map((sample) => (
              <div
                key={sample.title}
                className={
                  sample.color === "blue"
                    ? "rounded-3xl border border-blue-500/30 bg-blue-500/10 p-6"
                    : sample.color === "green"
                    ? "rounded-3xl border border-green-500/30 bg-green-500/10 p-6"
                    : "rounded-3xl border border-white/10 bg-white/10 p-6"
                }
              >
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                  {sample.label}
                </p>

                <h3 className="mt-3 text-2xl font-black">{sample.title}</h3>

                <div className="mt-6 text-left">
                  {sample.songs.map(([title, src]) => (
                    <div key={title} className="mt-5 first:mt-0">
                      <p className="mb-2 font-bold">{title}</p>
                      <audio controls className="w-full">
                        <source src={src} type="audio/mpeg" />
                      </audio>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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

      <Footer />
    </main>
  );
}