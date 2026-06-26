"use client";

import { useState } from "react";
import SponsorLogoUpload from "@/components/SponsorLogoUpload";

export default function UploadTestPage() {
  const [url, setUrl] = useState("");

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        Upload Test
      </h1>

      <SponsorLogoUpload onUpload={setUrl} />

      {url && (
        <div className="mt-6 space-y-4">
          <img
            src={url}
            alt="Sponsor Logo"
            className="h-32 w-auto border rounded"
          />

          <p className="break-all text-sm">
            {url}
          </p>
        </div>
      )}
    </main>
  );
}