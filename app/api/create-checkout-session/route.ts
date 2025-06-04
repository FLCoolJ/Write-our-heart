import { type NextRequest, NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"

export async function POST(req: NextRequest) {
  try {
    // Check if Stripe is initialized
    if (!stripe) {
      console.error("Stripe is not initialized")
      return NextResponse.json(
        {
          error: "Payment service is not available in preview mode",
        },
        { status: 503 },
      )
    }

    const { priceId, email, name, plan } = await req.json()

    if (!priceId || !email || !name || !plan) {
      return NextResponse.json(
        {
          error: "Missing required fields",
        },
        { status: 400 },
      )
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${req.nextUrl.origin}/onboarding-1?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.nextUrl.origin}/login`,
      customer_email: email,
      metadata: {
        plan,
        name,
      },
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (error: any) {
    console.error("Error creating checkout session:", error)
    return NextResponse.json(
      {
        error: error.message || "Error creating checkout session",
      },
      { status: 500 },
    )
  }
}
