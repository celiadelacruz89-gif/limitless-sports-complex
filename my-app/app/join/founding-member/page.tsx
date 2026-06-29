"use client";

import { useState } from "react";

const packages = [
  {
    name: "Founding Member",
    amount: 100,
  },
  {
    name: "Silver Founder",
    amount: 250,
  },
  {
    name: "Gold Founder",
    amount: 500,
  },
  {
    name: "Legendary Founder",
    amount: 1000,
  },
];

export default function FoundingMemberJoinPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(event.currentTarget);

      const response = await fetch(
        "/api/stripe/founding-member-checkout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            family_name: formData.get("family_name"),
            display_name: formData.get("display_name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            package: formData.get("package"),
            notes: formData.get("notes"),
          }),
        }
      );

      const data = await response.json();

      console.log("Checkout response:", data);

      if (!response.ok) {
        alert(data.error || "Checkout failed.");
        setLoading(false);
        return;
      }

      if (data.url) {
        window.location.href = data.url;
        return;
      }

      alert("No Stripe URL returned.");
      setLoading(false);
    } catch (error) {
      console.error(error);
      alert("Checkout request failed. Check browser console.");
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#020817] text-white px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-center">
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
            placeholder="Display Name for Founder Wall"
            className="w-full rounded-lg bg-slate-800 p-4"
          />

          <input
            name="email"
            type="email"
            required
            placeholder="Email Address"
            className="w-full rounded-lg bg-slate-800 p-4"
          />

          <input
            name="phone"
            placeholder="Phone Number"
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
            placeholder="Optional Message"
            rows={4}
            className="w-full rounded-lg bg-slate-800 p-4"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-4 text-lg font-bold hover:bg-blue-500 disabled:opacity-50"
          >
            {loading ? "Redirecting..." : "Continue To Payment"}
          </button>
        </form>
      </div>
    </main>
  );
}