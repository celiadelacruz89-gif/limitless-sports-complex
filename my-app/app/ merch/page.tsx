import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MerchPage() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <Navbar />

      {/* FOUNDING MEMBER BUNDLES */}
      <section className="border-y border-white/10 bg-[#020817] px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-slate-400">
            Founding Member Collection
          </p>

          <h1 className="mt-4 text-4xl font-black md:text-6xl">
            Bundle Packages
          </h1>

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
              href="https://form.jotform.com/limitless915sc/Merchshop"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-10 py-5 text-lg font-black text-white shadow-2xl transition duration-300 hover:scale-105"
            >
              Become A Founding Family
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
                price: "$20",
                details: [
                  "Front: LIMITLESS",
                  "Back: BUILT BEFORE THE BUILDING",
                  "FOUNDING MEMBER 2026",
                ],
              },
              {
                name: "Founding Member Hoodie",
                price: "$45",
                details: [
                  "Front: LIMITLESS",
                  "Back: NO LIMITS NO EXCUSES",
                  "BUILT BEFORE THE BUILDING",
                ],
              },
              {
                name: "Legacy Hat",
                price: "$20",
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
                  href="https://form.jotform.com/limitless915sc/Merchshop"
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

      <Footer />
    </main>
  );
}