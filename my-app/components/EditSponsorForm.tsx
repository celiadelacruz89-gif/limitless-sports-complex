"use client";

import SponsorLogoUpload from "@/components/SponsorLogoUpload";
import { updateSponsor, deleteSponsor } from "@/app/admin/sponsors/actions";
import { useState } from "react";

type Sponsor = {
  id: string;
  name: string;
  level: string | null;
  amount: number | null;
  logo_url: string | null;
  website: string | null;
  square: number | null;
};

export default function EditSponsorForm({ sponsor }: { sponsor: Sponsor }) {
  const [logoUrl, setLogoUrl] = useState(sponsor.logo_url ?? "");

  return (
    <>
      <form
        action={updateSponsor}
        className="mt-10 max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8"
      >
        <input type="hidden" name="id" defaultValue={sponsor.id} />
        <input type="hidden" name="logo_url" value={logoUrl} readOnly />

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
              defaultValue={sponsor.level ?? "Silver Sponsor"}
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
              defaultValue={sponsor.amount ?? 0}
              required
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white"
            />
          </label>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="font-bold text-slate-300">Sponsor Logo</p>
            <p className="mb-4 mt-1 text-sm text-slate-400">
              Upload a new logo to replace the current one.
            </p>

            {logoUrl && (
              <div className="mb-5">
                <img
                  src={logoUrl}
                  alt="Current sponsor logo"
                  className="h-28 w-auto rounded-xl border border-white/10 bg-white p-3"
                />
              </div>
            )}

            <SponsorLogoUpload onUpload={setLogoUrl} />

            {logoUrl && (
              <p className="mt-3 break-all text-xs text-cyan-300">
                Logo ready to save.
              </p>
            )}
          </div>

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
    </>
  );
}