"use client";

import AdminLayout from "@/components/AdminLayout";
import { supabase } from "@/lib/supabase";
import { useState } from "react";

export default function NewSponsorPage() {
  const [name, setName] = useState("");
  const [level, setLevel] = useState("Silver Sponsor");
  const [amount, setAmount] = useState("250");
  const [logoUrl, setLogoUrl] = useState("");
  const [website, setWebsite] = useState("");
  const [square, setSquare] = useState("1");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("Saving sponsor...");

    const { error } = await supabase.from("sponsors").insert([
      {
        name,
        level,
        amount: Number(amount),
        logo_url: logoUrl,
        website,
        square: Number(square),
      },
    ]);

    if (error) {
      setMessage(`Error: ${error.message}`);
      return;
    }

    setName("");
    setLevel("Silver Sponsor");
    setAmount("250");
    setLogoUrl("");
    setWebsite("");
    setSquare("");
    setMessage("Sponsor added successfully!");
  }

  return (
    <AdminLayout>
      <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
        Sponsor Management
      </p>

      <h1 className="mt-4 text-5xl font-black">Add Sponsor</h1>

      <p className="mt-4 max-w-3xl text-slate-300">
        Add a new sponsor to the Sponsor Wall, Fundraising Thermometer, and
        Sponsor-A-Mat grid.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-12 max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8"
      >
        <div className="grid gap-6">
          <label className="block">
            <span className="font-bold text-slate-300">Sponsor Name</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-cyan-400"
              placeholder="Artegon Graphics"
            />
          </label>

          <label className="block">
            <span className="font-bold text-slate-300">Sponsor Level</span>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-cyan-400"
            >
              <option>Bronze Sponsor</option>
              <option>Silver Sponsor</option>
              <option>Gold Sponsor</option>
              <option>Platinum Sponsor</option>
              <option>Founding Sponsor</option>
            </select>
          </label>

          <label className="block">
            <span className="font-bold text-slate-300">Amount</span>
            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              type="number"
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-cyan-400"
              placeholder="250"
            />
          </label>

          <label className="block">
            <span className="font-bold text-slate-300">Logo URL</span>
            <input
              value={logoUrl}
              onChange={(e) => setLogoUrl(e.target.value)}
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-cyan-400"
              placeholder="/artegon-graphics-logo.png"
            />
          </label>

          <label className="block">
            <span className="font-bold text-slate-300">Website</span>
            <input
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-cyan-400"
              placeholder="https://example.com"
            />
          </label>

          <label className="block">
            <span className="font-bold text-slate-300">Mat Square Number</span>
            <input
              value={square}
              onChange={(e) => setSquare(e.target.value)}
              required
              type="number"
              min="1"
              max="50"
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-cyan-400"
              placeholder="1"
            />
          </label>
        </div>

        <button
          type="submit"
          className="mt-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 font-black text-white transition hover:scale-105"
        >
          Save Sponsor
        </button>

        {message && <p className="mt-6 font-bold text-cyan-300">{message}</p>}
      </form>
    </AdminLayout>
  );
}