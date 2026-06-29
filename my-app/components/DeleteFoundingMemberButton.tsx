"use client";

export default function DeleteFoundingMemberButton() {
  return (
    <button
      type="submit"
      onClick={(e) => {
        const confirmed = confirm(
          "Are you sure you want to delete this founding member?"
        );

        if (!confirmed) {
          e.preventDefault();
        }
      }}
      className="rounded-full bg-red-500 px-4 py-2 text-sm font-black text-white transition hover:bg-red-400"
    >
      Delete
    </button>
  );
}