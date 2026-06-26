import AdminLayout from "@/components/AdminLayout";
import { supabase } from "@/lib/supabase-server";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function FoundingMembersAdminPage() {
  const { data: members, error } = await supabase
    .from("founding_members")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) console.error(error);

  const memberList = members || [];
  const totalMembers = memberList.length;
  const totalRaised = memberList.reduce(
    (sum, member) => sum + Number(member.amount || 0),
    0
  );
  const goalMembers = 100;
  const remainingSpots = goalMembers - totalMembers;

  return (
    <AdminLayout>
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
            Founding Member Program
          </p>

          <h1 className="mt-4 text-5xl font-black">Founding Members</h1>

          <p className="mt-4 max-w-3xl text-slate-300">
            Manage the 100 Founding Members campaign for Limitless Sports
            Complex.
          </p>
        </div>

        <Link
          href="/admin/founding-members/new"
          className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-black text-white transition hover:scale-105"
        >
          + Add Member
        </Link>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-400">
            Total Members
          </p>
          <h2 className="mt-4 text-4xl font-black">{totalMembers}</h2>
        </div>

        <div className="rounded-3xl border border-cyan-500/30 bg-cyan-500/10 p-6">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-400">
            Revenue Raised
          </p>
          <h2 className="mt-4 text-4xl font-black text-cyan-300">
            ${totalRaised.toLocaleString()}
          </h2>
        </div>

        <div className="rounded-3xl border border-yellow-500/30 bg-yellow-500/10 p-6">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-400">
            Remaining Spots
          </p>
          <h2 className="mt-4 text-4xl font-black text-yellow-300">
            {remainingSpots}
          </h2>
        </div>
      </div>

      <div className="mt-12 overflow-x-auto rounded-3xl border border-white/10 bg-white/5">
        <div className="min-w-[900px]">
          <div className="grid grid-cols-6 gap-4 border-b border-white/10 bg-white/10 p-5 text-sm font-black uppercase tracking-wider text-slate-300">
            <p>Name</p>
            <p>Package</p>
            <p>Amount</p>
            <p>Paid</p>
            <p>Certificate</p>
            <p>Contact</p>
          </div>

          {memberList.length > 0 ? (
            memberList.map((member) => (
              <div
                key={member.id}
                className="grid grid-cols-6 gap-4 border-b border-white/10 p-5 text-slate-300 last:border-b-0"
              >
                <p className="font-bold text-white">
                  {member.display_name || member.family_name}
                </p>
                <p>{member.package}</p>
                <p>${Number(member.amount || 0).toLocaleString()}</p>
                <p className={member.is_paid ? "text-green-300" : "text-red-300"}>
                  {member.is_paid ? "Paid" : "Unpaid"}
                </p>
                <p>{member.certificate_number || "—"}</p>
                <p>{member.email || member.phone || "—"}</p>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-slate-400">
              No founding members added yet.
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}