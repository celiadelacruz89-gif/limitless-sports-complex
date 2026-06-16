import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Limitless Sports Complex LLC",
  description:
    "Limitless Sports Complex LLC provides athlete development, batting cages, cheer training, custom songs, team anthems, and sports programs in El Paso, Texas.",
  keywords: [
    "Limitless Sports Complex",
    "El Paso Sports Complex",
    "Batting Cages El Paso",
    "Cheer Gym El Paso",
    "Custom Team Songs",
    "Athlete Anthems",
    "Cheer Music",
    "Youth Sports",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}