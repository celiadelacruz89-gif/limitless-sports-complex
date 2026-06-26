import AdminLayout from "@/components/AdminLayout";
import { supabase } from "@/lib/supabase-server";
import { updateSponsor, deleteSponsor } from "../actions";
import Link from "next/link";

export default async function EditSponsorPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: sponsor } = await supabase
    .from("sponsors")
    .select("*")
    .eq("id", id)
    .single();

  if (!sponsor) {
    return (
      <AdminLayout>
        <h1 className="text-4xl font-black">Sponsor Not Found</h1>
        <Link href="/admin/sponsors" className="mt-6 inline-block text-cyan-300">
          Back to Sponsors
        </Link>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <Link href="/admin/sponsors" className="text-cyan-300 hover:text-white">
        ← Back to Sponsors
      </Link>

      <h1 className="mt-6 text-5xl font-black">Edit Sponsor</h1>

      <form
        action={updateSponsor}
        className="mt-10 max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8"
      >
        <input type="hidden" name="id" defaultValue={sponsor.id} />

        <div className="grid gap-6">
          <label>
            <span className="font-bold text-slate-300">Sponsor Name</span>
            <input
              name="name"
              defaultValue={sponsor.name}
              required
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white"
            />
          </label>

          <label>
            <span className="font-bold text-slate-300">Sponsor Level</span>
            <select
              name="level"
              defaultValue={sponsor.level}
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white"
            >
              <option>Bronze Sponsor</option>
              <option>Silver Sponsor</option>
              <option>Gold Sponsor</option>
              <option>Platinum Sponsor</option>
              <option>Founding Sponsor</option>
            </select>
          </label>

          <label>
            <span className="font-bold text-slate-300">Amount</span>
            <input
              name="amount"
              type="number"
              defaultValue={sponsor.amount}
              required
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white"
            />
          </label>

          <label>
            <span className="font-bold text-slate-300">Logo URL</span>
            <input
              name="logo_url"
              defaultValue={sponsor.logo_url ?? ""}
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white"
            />
          </label>

          <label>
            <span className="font-bold text-slate-300">Website</span>
            <input
              name="website"
              defaultValue={sponsor.website ?? ""}
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white"
            />
          </label>

          <label>
            <span className="font-bold text-slate-300">Mat Square Number</span>
            <input
              name="square"
              type="number"
              min="1"
              max="50"
              defaultValue={sponsor.square ?? ""}
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white"
            />
          </label>
        </div>

        <button
          type="submit"
          className="mt-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 font-black text-white"
        >
          Save Changes
        </button>
      </form>

      <form action={deleteSponsor} className="mt-6">
        <input type="hidden" name="id" defaultValue={sponsor.id} />
        <button
          type="submit"
          className="rounded-full border border-red-500/40 bg-red-500/10 px-8 py-4 font-black text-red-300"
        >
          Delete Sponsor
        </button>
      </form>
    </AdminLayout>
  );
}