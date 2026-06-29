import AdminLayout from "@/components/AdminLayout";
import { supabase } from "@/lib/supabase-server";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function CertificatePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: member } = await supabase
    .from("founding_members")
    .select("*")
    .eq("id", id)
    .single();

  if (!member) {
    return (
      <AdminLayout>
        <h1 className="text-4xl font-black text-red-300">Member Not Found</h1>
      </AdminLayout>
    );
  }

  const founderName = member.display_name || member.family_name || "Founding Member";
  const joinedDate = member.created_at
    ? new Date(member.created_at).toLocaleDateString()
    : new Date().toLocaleDateString();

  return (
    <AdminLayout>
      <div className="mb-8 flex gap-4 print:hidden">
        <Link
          href="/admin/founding-members"
          className="rounded-full bg-white/10 px-6 py-3 font-bold text-white"
        >
          Back
        </Link>

        <button
          onClick={() => window.print()}
          className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 font-black text-white"
        >
          Print / Save PDF
        </button>
      </div>

      <div className="mx-auto max-w-5xl bg-white p-10 text-black print:max-w-none">
        <div className="border-[10px] border-blue-900 p-10 text-center">
          <img
            src="/limitless-logo.png"
            alt="Limitless Sports Complex"
            className="mx-auto mb-8 h-40 object-contain"
          />

          <p className="text-lg font-bold uppercase tracking-[0.4em] text-blue-900">
            Limitless Sports Complex LLC
          </p>

          <h1 className="mt-6 text-6xl font-black uppercase">
            Certificate of Recognition
          </h1>

          <p className="mt-8 text-xl">This certificate is proudly presented to</p>

          <h2 className="mt-6 text-5xl font-black text-blue-900">
            {founderName}
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9">
            In appreciation of your support as a{" "}
            <strong>{member.package}</strong> and your commitment to helping build
            the future home of athlete development, cheer training, batting cages,
            and community growth.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 text-sm font-bold uppercase tracking-widest">
            <p>Certificate: {member.certificate_number || "—"}</p>
            <p>Amount: ${Number(member.amount || 0).toLocaleString()}</p>
            <p>Date: {joinedDate}</p>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-16">
            <div>
              <div className="border-t-2 border-black pt-3 font-bold">
                Celia DeLaCruz
              </div>
              <p className="text-sm uppercase tracking-widest">Founder & CEO</p>
            </div>

            <div>
              <div className="border-t-2 border-black pt-3 font-bold">
                Rudy Bertolli
              </div>
              <p className="text-sm uppercase tracking-widest">Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}