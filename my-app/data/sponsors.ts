export const fundraisingGoal = 25000;

export const sponsors = [
  {
    name: "Artegon Graphics",
    level: "Silver Sponsor",
    amount: 250,
    logo: "/artegon-graphics-logo.png",
    website: "",
    square: 1,
  },
];

export const totalRaised = sponsors.reduce(
  (sum, sponsor) => sum + sponsor.amount,
  0
);

export const progressPercent = Math.min(
  Math.round((totalRaised / fundraisingGoal) * 100),
  100
);