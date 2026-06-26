import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase-server";

export const dynamic = "force-dynamic";

export default async function FoundingMembersPage() {
  const { data: members } = await supabase
    .from("founding_members")
    .select("*")
    .order("created_at", { ascending: false });

  const memberList = members || [];

  const totalMembers = memberList.length;
  const goalMembers = 100;

  const progressPercent = Math.min(
    Math.round((totalMembers / goalMembers) * 100),
    100
  );

  const totalRaised = memberList.reduce(
    (sum, member) => sum + Number(member.amount || 0),
    0
  );

  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <Navbar />

      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-slate-400">
            Founding Member Campaign
          </p>

          <h1 className="mt-4 text-6xl font-black md:text-8xl">
            100 Founding Members
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
            Become one of the first 100 supporters helping build
            Limitless Sports Complex.
          </p>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="text-sm uppercase tracking-widest text-slate-400">
                Members
              </p>
              <h2 className="mt-3 text-5xl font-black">
                {totalMembers}
              </h2>
            </div>

            <div className="rounded-3xl border border-cyan-500/30 bg-cyan-500/10 p-8">
              <p className="text-sm uppercase tracking-widest text-slate-400">
                Raised
              </p>
              <h2 className="mt-3 text-5xl font-black text-cyan-300">
                ${totalRaised.toLocaleString()}
              </h2>
            </div>

            <div className="rounded-3xl border border-yellow-500/30 bg-yellow-500/10 p-8">
              <p className="text-sm uppercase tracking-widest text-slate-400">
                Remaining
              </p>
              <h2 className="mt-3 text-5xl font-black text-yellow-300">
                {goalMembers - totalMembers}
              </h2>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-4xl">
            <div className="mb-4 flex justify-between text-sm font-bold">
              <span>{totalMembers} Members</span>
              <span>{goalMembers} Goal</span>
            </div>

            <div className="h-8 overflow-hidden rounded-full bg-black/40">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <p className="mt-4 text-2xl font-black text-cyan-300">
              {progressPercent}% Complete
            </p>
          </div>

          <div className="mt-20">
            <h2 className="text-4xl font-black">
              Founding Member Wall
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {memberList.map((member) => (
                <div
                  key={member.id}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-2xl font-black">
                    {member.display_name || member.family_name}
                  </h3>

                  <p className="mt-2 text-cyan-300 font-bold">
                    {member.package}
                  </p>

                  <p className="mt-3 text-slate-300">
                    Founding Member
                  </p>

                  {member.certificate_number && (
                    <p className="mt-3 text-xs text-slate-500">
                      {member.certificate_number}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <a
              href="https://form.jotform.com/261524366412049"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-10 py-5 text-lg font-black text-white"
            >
              Become A Founding Member
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}