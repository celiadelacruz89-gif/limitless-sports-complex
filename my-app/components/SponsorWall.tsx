const sponsors = [
  {
    name: "Artegon Graphics",
    level: "Silver Sponsor",
    amount: "$250",
    logo: "/artegon-graphics-logo.png",
    website: "",
  },
];

export default function SponsorWall() {
  const totalSlots = 8;
  const openSlots = totalSlots - sponsors.length;

  return (
    <section className="mt-16 rounded-[2rem] border border-white/10 bg-white/5 p-8">
      <p className="text-sm font-bold uppercase tracking-[0.4em] text-slate-400">
        Founding Sponsors
      </p>

      <h3 className="mt-4 text-4xl font-black">
        Sponsor Wall
      </h3>

      <p className="mx-auto mt-4 max-w-3xl text-slate-300">
        Businesses and families helping build the future home of Limitless Sports Complex.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-4">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.name}
            className="group rounded-3xl border border-cyan-400/40 bg-cyan-500/10 p-6 text-center shadow-2xl shadow-cyan-500/10 transition duration-300 hover:scale-105"
          >
            <div className="flex h-28 items-center justify-center rounded-2xl bg-white p-4">
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-20 w-auto object-contain"
              />
            </div>

            <h4 className="mt-5 text-xl font-black">
              {sponsor.name}
            </h4>

            <p className="mt-2 font-bold text-cyan-300">
              {sponsor.level}
            </p>

            <p className="mt-1 text-sm text-slate-300">
              {sponsor.amount}
            </p>

            {sponsor.website && (
              <a
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-bold text-cyan-300 hover:text-white"
              >
                Visit Website
              </a>
            )}
          </div>
        ))}

        {Array.from({ length: openSlots }).map((_, index) => (
          <a
            key={index}
            href="https://form.jotform.com/261524366412049"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-56 flex-col items-center justify-center rounded-3xl border border-dashed border-white/20 bg-black/20 p-6 text-center transition duration-300 hover:scale-105 hover:border-cyan-400 hover:bg-cyan-500/10"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
              Available
            </p>

            <p className="mt-3 text-xl font-black text-white">
              Your Logo Here
            </p>

            <p className="mt-3 text-sm text-slate-400">
              Become a Founding Sponsor
            </p>
          </a>
        ))}
      </div>

      <p className="mt-8 text-sm font-bold text-cyan-300">
        {sponsors.length} of {totalSlots} Featured Sponsor Spots Claimed
      </p>
    </section>
  );
}