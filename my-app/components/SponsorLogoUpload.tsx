"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

type Props = {
  onUpload: (url: string) => void;
};

export default function SponsorLogoUpload({ onUpload }: Props) {
  const [uploading, setUploading] = useState(false);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    setUploading(true);

    const fileName = `${Date.now()}-${file.name}`;

    const { error } = await supabase.storage
      .from("sponsor-logos")
      .upload(fileName, file);

    if (error) {
      alert(error.message);
      setUploading(false);
      return;
    }

    const {
      data: { publicUrl },
    } = supabase.storage
      .from("sponsor-logos")
      .getPublicUrl(fileName);

    onUpload(publicUrl);
    setUploading(false);
  }

  return (
    <div className="space-y-2">
      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
      />

      {uploading && (
        <p className="text-cyan-300">
          Uploading...
        </p>
      )}
    </div>
  );
}