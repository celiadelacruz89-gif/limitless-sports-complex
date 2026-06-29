"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 font-black text-white"
    >
      Print / Save PDF
    </button>
  );
}