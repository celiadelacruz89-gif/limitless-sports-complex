import {
  fundraisingGoal,
  progressPercent,
  sponsors,
  totalRaised,
} from "@/data/sponsors";

export default function FundraisingThermometer() {
  return (
    <div className="mt-12 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-8">
      <h3 className="text-3xl font-black">
        Goal: ${fundraisingGoal.toLocaleString()}
      </h3>

      <p className="mt-4 text-slate-300">
        Sponsor a section of the mat and become part of the foundation of
        Limitless Sports Complex LLC.
      </p>

      <div className="mt-8 h-8 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <p className="mt-4 font-bold text-cyan-300">
        ${totalRaised.toLocaleString()} Raised • ${fundraisingGoal.toLocaleString()} Goal
      </p>

      <p className="mt-2 text-sm text-slate-400">
        {progressPercent}% Complete • {sponsors.length} Sponsor{" "}
        {sponsors.length === 1 ? "Spot" : "Spots"} Claimed
      </p>
    </div>
  );
}