import { sponsors, totalRaised, fundraisingGoal } from "@/data/sponsors";

export default function SponsorMatGrid() {
  const totalSquares = 50;

  return (
    <div className="mt-14 rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-10">
      <p className="text-sm font-bold uppercase tracking-[0.4em] text-slate-400">
        Sponsor The Mat
      </p>

      <h3 className="mt-4 text-3xl font-black md:text-4xl">
        Claim A Mat Section
      </h3>

      <div className="mt-6 rounded-2xl border border-green-500/30 bg-green-500/10 p-6">
        <h4 className="text-2xl font-black">
          {sponsors.length} / {totalSquares} Squares Sponsored
        </h4>

        <p className="mt-2 text-slate-300">
          ${totalRaised.toLocaleString()} Raised of ${fundraisingGoal.toLocaleString()} Goal
        </p>
      </div>

      <p className="mx-auto mt-4 max-w-3xl text-slate-300">
        Each square represents a sponsor opportunity. Claimed squares show the
        sponsor name. Available squares can still be sponsored.
      </p>

      <div className="mx-auto mt-10 max-w-5xl rounded-3xl border border-cyan-500/30 bg-[#020817] p-4 shadow-2xl shadow-cyan-500/10">
        <div className="grid grid-cols-5 gap-2 md:grid-cols-10">
          {Array.from({ length: totalSquares }).map((_, index) => {
            const squareNumber = index + 1;
            const sponsor = sponsors.find((s) => s.square === squareNumber);

            return (
              <a
                key={squareNumber}
                href="https://form.jotform.com/261524366412049"
                target="_blank"
                rel="noopener noreferrer"
                title={
                  sponsor
                    ? `${sponsor.name} • ${sponsor.level} • $${sponsor.amount}`
                    : `Square ${squareNumber} Available`
                }
                className={
                  sponsor
                    ? "group flex aspect-square items-center justify-center rounded-xl border border-green-400 bg-green-500 px-1 text-[10px] font-black text-white transition duration-300 hover:scale-105 md:text-xs"
                    : "group flex aspect-square items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-1 text-[10px] font-black text-cyan-100 transition duration-300 hover:scale-105 hover:bg-cyan-400 hover:text-[#020817] md:text-xs"
                }
              >
                {sponsor ? sponsor.name.split(" ")[0] : "Available"}
              </a>
            );
          })}
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
  );
}