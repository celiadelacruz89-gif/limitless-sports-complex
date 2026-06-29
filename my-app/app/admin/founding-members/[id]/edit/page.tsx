import AdminLayout from "@/components/AdminLayout";
import { supabase } from "@/lib/supabase-server";
import { notFound } from "next/navigation";
import { revalidatePath } from "next/cache";

async function updateMember(formData: FormData) {
  "use server";

  const id = String(formData.get("id"));

  await supabase
    .from("founding_members")
    .update({
      display_name: formData.get("display_name"),
      package: formData.get("package"),
      amount: Number(formData.get("amount")),
      email: formData.get("email"),
      phone: formData.get("phone"),
      certificate_number: formData.get("certificate_number"),
      is_paid: formData.get("is_paid") === "true",
    })
    .eq("id", id);

  revalidatePath("/admin/founding-members");
  revalidatePath("/founding-members");
}

export default async function EditMemberPage({
  params,
}: {
  params: { id: string };
}) {
  const { data: member } = await supabase
    .from("founding_members")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!member) {
    notFound();
  }

  return (
    <AdminLayout>
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-4xl font-black">
          Edit Founding Member
        </h1>

        <form
          action={updateMember}
          className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8"
        >
          <input type="hidden" name="id" value={member.id} />

          <div>
            <label className="mb-2 block font-bold">
              Display Name
            </label>
            <input
              name="display_name"
              defaultValue={member.display_name || ""}
              className="w-full rounded-xl bg-black/30 p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-bold">
              Package
            </label>
            <input
              name="package"
              defaultValue={member.package || ""}
              className="w-full rounded-xl bg-black/30 p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-bold">
              Amount
            </label>
            <input
              type="number"
              name="amount"
              defaultValue={member.amount || 0}
              className="w-full rounded-xl bg-black/30 p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-bold">
              Email
            </label>
            <input
              name="email"
              defaultValue={member.email || ""}
              className="w-full rounded-xl bg-black/30 p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-bold">
              Phone
            </label>
            <input
              name="phone"
              defaultValue={member.phone || ""}
              className="w-full rounded-xl bg-black/30 p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-bold">
              Certificate Number
            </label>
            <input
              name="certificate_number"
              defaultValue={member.certificate_number || ""}
              className="w-full rounded-xl bg-black/30 p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-bold">
              Payment Status
            </label>

            <select
              name="is_paid"
              defaultValue={String(member.is_paid)}
              className="w-full rounded-xl bg-black/30 p-3"
            >
              <option value="true">Paid</option>
              <option value="false">Unpaid</option>
            </select>
          </div>

          <button
            type="submit"
            className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 font-black text-white"
          >
            Save Changes
          </button>
        </form>
      </div>
    </AdminLayout>
  );
}