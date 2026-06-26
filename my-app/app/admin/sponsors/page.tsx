import AdminLayout from "@/components/AdminLayout";
import { supabase } from "@/lib/supabase-server";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminSponsorsPage() {
  const { data: sponsors, error } = await supabase
    .from("sponsors")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
  }

  const sponsorList = sponsors || [];

  const totalSponsors = sponsorList.length;

  const totalRaised = sponsorList.reduce(
    (sum, sponsor) => sum + Number(sponsor.amount || 0),
    0
  );

  const squaresClaimed = sponsorList.filter(
    (sponsor) => sponsor.square
  ).length;

  const totalSquares = 50;
  const openSquares = totalSquares - squaresClaimed;

  return (
    <AdminLayout>
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
            Sponsor Management
          </p>

          <h1 className="mt-4 text-5xl font-black">Sponsors</h1>

          <p className="mt-4 max-w-3xl text-slate-300">
            View, edit, and manage sponsors for the Sponsor-A-Mat campaign.
          </p>
        </div>

        <Link
          href="/admin/sponsors/new"
          className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-black text-white transition hover:scale-105"
        >
          + Add Sponsor
        </Link>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-4">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-400">
            Total Sponsors
          </p>
          <h2 className="mt-4 text-4xl font-black text-white">
            {totalSponsors}
          </h2>
        </div>

        <div className="rounded-3xl border border-cyan-500/30 bg-cyan-500/10 p-6">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-400">
            Total Raised
          </p>
          <h2 className="mt-4 text-4xl font-black text-cyan-300">
            ${totalRaised.toLocaleString()}
          </h2>
        </div>

        <div className="rounded-3xl border border-green-500/30 bg-green-500/10 p-6">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-400">
            Squares Claimed
          </p>
          <h2 className="mt-4 text-4xl font-black text-green-300">
            {squaresClaimed}
          </h2>
        </div>

        <div className="rounded-3xl border border-yellow-500/30 bg-yellow-500/10 p-6">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-400">
            Open Squares
          </p>
          <h2 className="mt-4 text-4xl font-black text-yellow-300">
            {openSquares}
          </h2>
        </div>
      </div>

      <div className="mt-12 overflow-x-auto rounded-3xl border border-white/10 bg-white/5">
        <div className="min-w-[900px]">
          <div className="grid grid-cols-6 gap-4 border-b border-white/10 bg-white/10 p-5 text-sm font-black uppercase tracking-wider text-slate-300">
            <p>Name</p>
            <p>Level</p>
            <p>Amount</p>
            <p>Square</p>
            <p>Website</p>
            <p>Actions</p>
          </div>

          {sponsorList.length > 0 ? (
            sponsorList.map((sponsor) => (
              <div
                key={sponsor.id}
                className="grid grid-cols-6 gap-4 border-b border-white/10 p-5 text-slate-300 last:border-b-0"
              >
                <p className="font-bold text-white">{sponsor.name}</p>
                <p>{sponsor.level}</p>
                <p>${Number(sponsor.amount || 0).toLocaleString()}</p>
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

                <Link
                  href={`/admin/sponsors/${sponsor.id}`}
                  className="font-bold text-cyan-300 hover:text-white"
                >
                  Edit
                </Link>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-slate-400">
              No sponsors found.
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}