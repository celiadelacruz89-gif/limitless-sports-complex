import { supabase } from "@/lib/supabase-server";

export const dynamic = "force-dynamic";

type Sponsor = {
  id: string;
  name: string;
  level: string | null;
  amount: number | null;
  logo_url: string | null;
  website: string | null;
};

export default async function SponsorWall() {
  const { data: sponsors } = await supabase
    .from("sponsors")
    .select("*")
    .order("amount", { ascending: false });

  const sponsorList = sponsors || [];

  return (
    <section className="mt-16 rounded-[2rem] border border-white/10 bg-white/5 p-8">
      <p className="text-sm font-bold uppercase tracking-[0.4em] text-slate-400">
        Sponsor Recognition
      </p>

      <h3 className="mt-4 text-4xl font-black">Sponsor Wall</h3>

      <p className="mx-auto mt-4 max-w-3xl text-slate-300">
        Businesses and families helping build the future home of Limitless
        Sports Complex.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {sponsorList.map((sponsor: Sponsor) => (
          <div
            key={sponsor.id}
            className="rounded-3xl border border-cyan-400/40 bg-cyan-500/10 p-6 text-center shadow-2xl shadow-cyan-500/10"
          >
            {sponsor.logo_url && (
              <div className="flex h-28 items-center justify-center rounded-2xl bg-white p-4">
                <img
                  src={sponsor.logo_url}
                  alt={sponsor.name}
                  className="max-h-20 w-auto object-contain"
                />
              </div>
            )}

            <h4 className="mt-5 text-xl font-black">{sponsor.name}</h4>

            <p className="mt-2 font-bold text-cyan-300">{sponsor.level}</p>

            <p className="mt-1 text-sm text-slate-300">
              ${Number(sponsor.amount || 0).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}