import Link from "next/link";
import { supabase } from "@/lib/supabase-server";

export default async function FoundingMembersPage() {
  const { data: members } = await supabase
    .from("founding_members")
    .select("*")
    .order("created_at", { ascending: false });

  const totalMembers = members?.length || 0;
  const totalRaised =
    members?.reduce((sum, member) => sum + (member.amount || 0), 0) || 0;

  const goal = 100;
  const percent = Math.min((totalMembers / goal) * 100, 100);

  return (
    <div className="min-h-screen bg-[#020817] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold">
            Founding Member Collection
          </h1>

          <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto">
            Become one of the first 100 families helping build the future
            home of Limitless Sports Complex LLC.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="rounded-2xl bg-slate-900 p-8 text-center">
            <p className="text-slate-400">Founding Members</p>
            <h2 className="text-4xl font-bold mt-2">{totalMembers}</h2>
          </div>

          <div className="rounded-2xl bg-slate-900 p-8 text-center">
            <p className="text-slate-400">Funds Raised</p>
            <h2 className="text-4xl font-bold mt-2">
              ${totalRaised.toLocaleString()}
            </h2>
          </div>

          <div className="rounded-2xl bg-slate-900 p-8 text-center">
            <p className="text-slate-400">Spots Remaining</p>
            <h2 className="text-4xl font-bold mt-2">
              {Math.max(goal - totalMembers, 0)}
            </h2>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-12">
          <div className="flex justify-between mb-2">
            <span>{totalMembers} of 100 Members</span>
            <span>{percent.toFixed(0)}%</span>
          </div>

          <div className="w-full h-6 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>

        {/* Join Button */}
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-block rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold hover:bg-blue-500"
          >
            Become A Founding Member
          </Link>
        </div>

        {/* Member Wall */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Founding Member Wall
          </h2>

          {members?.length === 0 ? (
            <div className="text-center text-slate-400">
              No founding members yet.
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {members?.map((member) => (
                <div
                  key={member.id}
                  className="rounded-2xl bg-slate-900 p-6 text-center"
                >
                  <h3 className="font-bold text-lg">
                    {member.display_name ||
                      member.family_name ||
                      "Founding Member"}
                  </h3>

                  <p className="text-slate-400 mt-2">
                    Certificate #{member.certificate_number}
                  </p>

                  <p className="text-blue-400 mt-3">
                    ${member.amount?.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}