import { NextResponse } from "next/server";
import Stripe from "stripe";
import { supabase } from "@/lib/supabase-server";

const packages: Record<string, { amount: number; priceId: string }> = {
  "Founding Member": {
    amount: 100,
    priceId: "price_1Tni0lRraJ6o8yHgRokuzg6m",
  },
  "Silver Founder": {
    amount: 250,
    priceId: "price_1Tni0JRraJ6o8yHg678Xko4F",
  },
  "Gold Founder": {
    amount: 500,
    priceId: "price_1TnhzuRraJ6o8yHgoFB0Kyo3",
  },
  "Legendary Founder": {
    amount: 1000,
    priceId: "price_1TnhzURraJ6o8yHgXyKhUBRh",
  },
};

export async function POST(req: Request) {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

  if (!stripeSecretKey) {
    return NextResponse.json(
      { error: "Missing STRIPE_SECRET_KEY" },
      { status: 500 }
    );
  }

  const stripe = new Stripe(stripeSecretKey);

  const body = await req.json();
  const selectedPackage = packages[body.package];

  if (!selectedPackage) {
    return NextResponse.json(
      { error: "Invalid package selected" },
      { status: 400 }
    );
  }

  const certificateNumber = `FM-${Date.now()}`;

  const { data: member, error } = await supabase
    .from("founding_members")
    .insert({
      family_name: body.family_name,
      display_name: body.display_name,
      email: body.email,
      phone: body.phone,
      package: body.package,
      amount: selectedPackage.amount,
      notes: body.notes,
      is_paid: false,
      certificate_number: certificateNumber,
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price: selectedPackage.priceId,
        quantity: 1,
      },
    ],
    customer_email: body.email,
    success_url: `${siteUrl}/founding-members?success=true`,
    cancel_url: `${siteUrl}/join/founding-member?canceled=true`,
    metadata: {
      member_id: member.id,
      package: body.package,
    },
  });
await supabase
  .from("founding_members")
  .update({
    stripe_session_id: session.id,
  })
  .eq("id", member.id);
  
  return NextResponse.json({ url: session.url });
}