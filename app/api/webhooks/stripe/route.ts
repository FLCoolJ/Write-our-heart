import { type NextRequest, NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import { headers } from "next/headers"

export async function POST(req: NextRequest) {
  const body = await req.text()
  const signature = headers().get("stripe-signature")!

  let event: any

  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (err) {
    console.error("Webhook signature verification failed:", err)
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
  }

  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object
      console.log("Payment successful:", session)

      // Here you would typically:
      // 1. Create user in your database
      // 2. Set up their subscription
      // 3. Send welcome email
      break

    case "customer.subscription.updated":
    case "customer.subscription.deleted":
      const subscription = event.data.object
      console.log("Subscription updated:", subscription)

      // Handle subscription changes
      break

    default:
      console.log(`Unhandled event type: ${event.type}`)
  }

  return NextResponse.json({ received: true })
}
