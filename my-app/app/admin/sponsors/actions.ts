"use server";

import { supabase } from "@/lib/supabase-server";
import { redirect } from "next/navigation";

export async function deleteSponsor(formData: FormData) {
  const id = formData.get("id") as string;

  await supabase.from("sponsors").delete().eq("id", id);

  redirect("/admin/sponsors");
}

export async function updateSponsor(formData: FormData) {
  const id = formData.get("id") as string;

  await supabase
    .from("sponsors")
    .update({
      name: formData.get("name"),
      level: formData.get("level"),
      amount: Number(formData.get("amount")),
      logo_url: formData.get("logo_url"),
      website: formData.get("website"),
      square: Number(formData.get("square")),
    })
    .eq("id", id);

  redirect("/admin/sponsors");
}