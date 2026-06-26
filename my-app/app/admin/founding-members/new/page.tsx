"use client";

import AdminLayout from "@/components/AdminLayout";
import { supabase } from "@/lib/supabase";
import { useState } from "react";

export default function NewFoundingMemberPage() {
  const [familyName, setFamilyName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [memberPackage, setMemberPackage] = useState("Founding Member");
  const [amount, setAmount] = useState("100");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isPaid, setIsPaid] = useState(true);
  const [notes, setNotes] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("Saving founding member...");

    const certificateNumber = `FM-${Date.now().toString().slice(-6)}`;

    const { error } = await supabase.from("founding_members").insert([
      {
        family_name: familyName,
        display_name: displayName || familyName,
        package: memberPackage,
        amount: Number(amount),
        email,
        phone,
        is_paid: isPaid,
        notes,
        certificate_number: certificateNumber,
      },
    ]);

    if (error) {
      setMessage(`Error: ${error.message}`);
      return;
    }

    setFamilyName("");
    setDisplayName("");
    setMemberPackage("Founding Member");
    setAmount("100");
    setEmail("");
    setPhone("");
    setIsPaid(true);
    setNotes("");
    setMessage("Founding member added successfully!");
  }

  return (
    <AdminLayout>
      <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
        Founding Member Program
      </p>

      <h1 className="mt-4 text-5xl font-black">Add Founding Member</h1>

      <form
        onSubmit={handleSubmit}
        className="mt-12 max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8"
      >
        <div className="grid gap-6">
          <label>
            <span className="font-bold text-slate-300">Family / Business Name</span>
            <input
              value={familyName}
              onChange={(e) => setFamilyName(e.target.value)}
              required
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white"
              placeholder="DeLaCruz Family"
            />
          </label>

          <label>
            <span className="font-bold text-slate-300">Display Name</span>
            <input
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white"
              placeholder="The DeLaCruz Family"
            />
          </label>

          <label>
            <span className="font-bold text-slate-300">Package</span>
            <select
              value={memberPackage}
              onChange={(e) => setMemberPackage(e.target.value)}
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white"
            >
              <option>Founding Member</option>
              <option>Founding Family</option>
              <option>Founding Business</option>
              <option>Legacy Founder</option>
            </select>
          </label>

          <label>
            <span className="font-bold text-slate-300">Amount</span>
            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              type="number"
              required
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white"
            />
          </label>

          <label>
            <span className="font-bold text-slate-300">Email</span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white"
            />
          </label>

          <label>
            <span className="font-bold text-slate-300">Phone</span>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white"
            />
          </label>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={isPaid}
              onChange={(e) => setIsPaid(e.target.checked)}
            />
            <span className="font-bold text-slate-300">Paid</span>
          </label>

          <label>
            <span className="font-bold text-slate-300">Notes</span>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="mt-2 min-h-32 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white"
            />
          </label>
        </div>

        <button
          type="submit"
          className="mt-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 font-black text-white"
        >
          Save Founding Member
        </button>

        {message && <p className="mt-6 font-bold text-cyan-300">{message}</p>}
      </form>
    </AdminLayout>
  );
}