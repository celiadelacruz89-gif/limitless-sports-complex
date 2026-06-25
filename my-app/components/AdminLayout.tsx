import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 py-16">
        {children}
      </div>

      <Footer />
    </main>
  );
}