"use client";

import { useState } from "react";

const packages = [
  {
    name: "Founding Member",
    amount: 100,
    priceId: "price_1TmhSXRraJ6o8yHgGcpo6jI0",
  },
  {
    name: "Silver Founder",
    amount: 250,
    priceId: "price_1TmhT1RraJ6o8yHgS2ettZw5",
  },
  {
    name: "Gold Founder",
    amount: 500,
    priceId: "price_1TmhTRRraJ6o8yHgC6whsW9A",
  },
  {
    name: "Legendary Founder",
    amount: 1000,
    priceId: "price_1TmhTnRraJ6o8yHgjIaskqag",
  },
];

export default function FoundingMemberJoinPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);

    const response = await fetch("/api/stripe/founding-member-checkout", {
      method: "POST",
      body: JSON.stringify({
        family_name: formData.get("family_name"),
        display_name: formData.get("display_name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        package: formData.get("package"),
        notes: formData.get("notes"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

     if (data.url) {
  window.location.href = data.url;
} else {
  alert(data.error || "Something went wrong. Please try again.");
  setLoading(false);
}

  return (
    <main className="min-h-screen bg-[#020817] text-white px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h1 clif (data.url)assName="text-4xl font-bold text-center">
          Become A Founding Member
        </h1>

        <p className="mt-4 text-center text-slate-300">
          Join the first families helping build Limitless Sports Complex LLC.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 rounded-2xl bg-slate-900 p-8 space-y-5"
        >
          <input
            name="family_name"
            required
            placeholder="Family Name"
            className="w-full rounded-lg bg-slate-800 p-4"
          />

          <input
            name="display_name"
            placeholder="Display Name for Wall"
            className="w-full rounded-lg bg-slate-800 p-4"
          />

          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="w-full rounded-lg bg-slate-800 p-4"
          />

          <input
            name="phone"
            placeholder="Phone"
            className="w-full rounded-lg bg-slate-800 p-4"
          />

          <select
            name="package"
            required
            className="w-full rounded-lg bg-slate-800 p-4"
          >
            <option value="">Select Founder Level</option>
            {packages.map((pkg) => (
              <option key={pkg.name} value={pkg.name}>
                {pkg.name} — ${pkg.amount}
              </option>
            ))}
          </select>

          <textarea
            name="notes"
            placeholder="Notes or message"
            className="w-full rounded-lg bg-slate-800 p-4"
          />

          <button
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-4 font-bold hover:bg-blue-500 disabled:opacity-50"
          >
            {loading ? "Redirecting..." : "Continue To Payment"}
          </button>
        </form>
      </div>
    </main>
  );
}