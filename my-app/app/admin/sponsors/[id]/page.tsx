import AdminLayout from "@/components/AdminLayout";
import EditSponsorForm from "@/components/EditSponsorForm";
import { supabase } from "@/lib/supabase-server";
import Link from "next/link";

export const dynamic = "force-dynamic";

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
        <Link
          href="/admin/sponsors"
          className="mt-6 inline-block text-cyan-300"
        >
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

      <p className="mt-4 max-w-3xl text-slate-300">
        Update sponsor information, replace the logo, or remove this sponsor
        from the campaign.
      </p>

      <EditSponsorForm sponsor={sponsor} />
    </AdminLayout>
  );
}