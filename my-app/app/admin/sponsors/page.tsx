import AdminLayout from "@/components/AdminLayout";
import { supabase } from "@/lib/supabase-server";

export default async function AdminSponsorsPage() {
  const { data: sponsors, error } = await supabase
    .from("sponsors")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
  }

  return (
    <AdminLayout>
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
            Sponsor Management
          </p>

          <h1 className="mt-4 text-5xl font-black">
            Sponsors
          </h1>

          <p className="mt-4 max-w-3xl text-slate-300">
            View and manage sponsors for the Sponsor-A-Mat campaign.
          </p>
        </div>

        <a
          href="/admin/sponsors/new"
          className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-black text-white transition hover:scale-105"
        >
          + Add Sponsor
        </a>
      </div>

      <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
        <div className="grid grid-cols-5 gap-4 border-b border-white/10 bg-white/10 p-5 text-sm font-black uppercase tracking-wider text-slate-300">
          <p>Name</p>
          <p>Level</p>
          <p>Amount</p>
          <p>Square</p>
          <p>Website</p>
        </div>

        {sponsors && sponsors.length > 0 ? (
          sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="grid grid-cols-5 gap-4 border-b border-white/10 p-5 text-slate-300 last:border-b-0"
            >
              <p className="font-bold text-white">{sponsor.name}</p>
              <p>{sponsor.level}</p>
              <p>${sponsor.amount}</p>
              <p>{sponsor.square ? `#${sponsor.square}` : "—"}</p>
              <p>
                {sponsor.website ? (
                  <a
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300 hover:text-white"
                  >
                    Visit
                  </a>
                ) : (
                  "—"
                )}
              </p>
            </div>
          ))
        ) : (
          <div className="p-8 text-center text-slate-400">
            No sponsors found.
          </div>
        )}
      </div>
    </AdminLayout>
  );
}