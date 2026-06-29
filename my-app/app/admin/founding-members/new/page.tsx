import AdminLayout from "@/components/AdminLayout";
import { supabase } from "@/lib/supabase-server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function createMember(formData: FormData) {
  "use server";

  const family_name = String(formData.get("family_name") || "");
  const display_name = String(formData.get("display_name") || "");
  const selectedPackage = String(formData.get("package") || "");
  const amount = Number(formData.get("amount") || 0);
  const email = String(formData.get("email") || "");
  const phone = String(formData.get("phone") || "");
  const is_paid = formData.get("is_paid") === "true";
  const notes = String(formData.get("notes") || "");

  const { count } = await supabase
    .from("founding_members")
    .select("*", { count: "exact", head: true });

  const nextNumber = (count || 0) + 1;
  const certificateNumber = `FM-${String(nextNumber).padStart(4, "0")}`;

  await supabase.from("founding_members").insert({
    family_name,
    display_name,
    package: selectedPackage,
    amount,
    email,
    phone,
    is_paid,
    notes,
    certificate_number: certificateNumber,
  });

  revalidatePath("/admin/founding-members");
  revalidatePath("/founding-members");

  redirect("/admin/founding-members");
}

export default function NewFoundingMemberPage() {
  return (
    <AdminLayout>
      <div className="mx-auto max-w-3xl">
        <h1 className="text-5xl font-black">Add Founding Member</h1>

        <p className="mt-4 text-slate-300">
          Add a new founding member and automatically assign their certificate number.
        </p>

        <form
          action={createMember}
          className="mt-10 space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8"
        >
          <div>
            <label className="mb-2 block font-bold">Family Name</label>
            <input
              name="family_name"
              required
              className="w-full rounded-xl bg-black/30 p-3 text-white"
            />
          </div>

          <div>
            <label className="mb-2 block font-bold">Display Name</label>
            <input
              name="display_name"
              className="w-full rounded-xl bg-black/30 p-3 text-white"
            />
          </div>

          <div>
            <label className="mb-2 block font-bold">Package</label>
            <select
              name="package"
              required
              className="w-full rounded-xl bg-black/30 p-3 text-white"
            >
              <option value="Founding Member">Founding Member — $100</option>
              <option value="Silver Founder">Silver Founder — $250</option>
              <option value="Gold Founder">Gold Founder — $500</option>
              <option value="Legendary Founder">Legendary Founder — $1,000</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-bold">Amount</label>
            <input
              type="number"
              name="amount"
              defaultValue={100}
              required
              className="w-full rounded-xl bg-black/30 p-3 text-white"
            />
          </div>

          <div>
            <label className="mb-2 block font-bold">Email</label>
            <input
              type="email"
              name="email"
              className="w-full rounded-xl bg-black/30 p-3 text-white"
            />
          </div>

          <div>
            <label className="mb-2 block font-bold">Phone</label>
            <input
              name="phone"
              className="w-full rounded-xl bg-black/30 p-3 text-white"
            />
          </div>

          <div>
            <label className="mb-2 block font-bold">Payment Status</label>
            <select
              name="is_paid"
              defaultValue="false"
              className="w-full rounded-xl bg-black/30 p-3 text-white"
            >
              <option value="false">Unpaid</option>
              <option value="true">Paid</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-bold">Notes</label>
            <textarea
              name="notes"
              rows={4}
              className="w-full rounded-xl bg-black/30 p-3 text-white"
            />
          </div>

          <button
            type="submit"
            className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 font-black text-white transition hover:scale-105"
          >
            Add Member
          </button>
        </form>
      </div>
    </AdminLayout>
  );
}