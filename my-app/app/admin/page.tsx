import AdminLayout from "@/components/AdminLayout";
import { supabase } from "@/lib/supabase-server";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const { data: sponsors, error } = await supabase
    .from("sponsors")
    .select("*");

  if (error) {
    console.error(error);
  }

  const sponsorCount = sponsors?.length ?? 0;

  const totalRaised =
    sponsors?.reduce((sum, sponsor) => sum + (sponsor.amount ?? 0), 0) ?? 0;

  return (
    <AdminLayout>
      <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
        Limitless Dashboard
      </p>

      <h1 className="mt-4 text-5xl font-black">
        Admin Control Center
      </h1>

      <p className="mt-4 max-w-3xl text-slate-300">
        Manage sponsors, fundraising, merchandise, custom music,
        founding families, camps, and more from one place.
      </p>

      {/* DASHBOARD STATS */}
      <div className="mt-14 grid gap-6 md:grid-cols-4">
        <div className="rounded-3xl border border-cyan-500/30 bg-cyan-500/10 p-6">
          <p className="text-slate-400">Sponsors</p>

          <h2 className="mt-3 text-5xl font-black">
            {sponsorCount}
          </h2>
        </div>

        <div className="rounded-3xl border border-green-500/30 bg-green-500/10 p-6">
          <p className="text-slate-400">Raised</p>

          <h2 className="mt-3 text-5xl font-black">
            ${totalRaised.toLocaleString()}
          </h2>
        </div>

        <div className="rounded-3xl border border-yellow-500/30 bg-yellow-500/10 p-6">
          <p className="text-slate-400">Founding Families</p>

          <h2 className="mt-3 text-5xl font-black">
            0
          </h2>
        </div>

        <div className="rounded-3xl border border-purple-500/30 bg-purple-500/10 p-6">
          <p className="text-slate-400">Music Orders</p>

          <h2 className="mt-3 text-5xl font-black">
            0
          </h2>
        </div>
      </div>

      {/* MANAGEMENT CARDS */}
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <a
          href="/admin/sponsors"
          className="rounded-3xl border border-cyan-500/30 bg-cyan-500/10 p-8 transition hover:scale-105"
        >
          <h3 className="text-2xl font-black">
            Sponsors
          </h3>

          <p className="mt-3 text-slate-300">
            Add, edit and manage sponsors.
          </p>
        </a>

        <a
          href="/admin/founding-members"
          className="rounded-3xl border border-green-500/30 bg-green-500/10 p-8 transition hover:scale-105"
        >
          <h3 className="text-2xl font-black">
            Founding Families
          </h3>

          <p className="mt-3 text-slate-300">
            Manage founding member packages.
          </p>
        </a>

        <a
          href="/admin/music"
          className="rounded-3xl border border-purple-500/30 bg-purple-500/10 p-8 transition hover:scale-105"
        >
          <h3 className="text-2xl font-black">
            Music Orders
          </h3>

          <p className="mt-3 text-slate-300">
            View custom song requests.
          </p>
        </a>

        <a
          href="/admin/merch"
          className="rounded-3xl border border-pink-500/30 bg-pink-500/10 p-8 transition hover:scale-105"
        >
          <h3 className="text-2xl font-black">
            Merch Orders
          </h3>

          <p className="mt-3 text-slate-300">
            Track merchandise orders.
          </p>
        </a>

        <a
          href="/admin/donations"
          className="rounded-3xl border border-blue-500/30 bg-blue-500/10 p-8 transition hover:scale-105"
        >
          <h3 className="text-2xl font-black">
            Donations
          </h3>

          <p className="mt-3 text-slate-300">
            View donations and fundraising progress.
          </p>
        </a>

        <a
          href="/admin/settings"
          className="rounded-3xl border border-white/20 bg-white/10 p-8 transition hover:scale-105"
        >
          <h3 className="text-2xl font-black">
            Website Settings
          </h3>

          <p className="mt-3 text-slate-300">
            Configure your website and business information.
          </p>
        </a>
      </div>

      {/* RECENT SPONSORS */}
      <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-3xl font-black">
          Recent Sponsors
        </h2>

        <div className="mt-8 space-y-4">
          {sponsors && sponsors.length > 0 ? (
            sponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div>
                  <h3 className="text-xl font-bold">
                    {sponsor.name}
                  </h3>

                  <p className="text-slate-400">
                    {sponsor.level}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-2xl font-black text-cyan-300">
                    ${sponsor.amount}
                  </p>

                  <p className="text-sm text-slate-400">
                    Square #{sponsor.square}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-slate-400">
              No sponsors have been added yet.
            </p>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}