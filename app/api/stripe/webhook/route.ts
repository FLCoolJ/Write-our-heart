import { NextResponse } from "next/server"
import Stripe from "stripe"
import { headers } from "next/headers"

// Initialize Stripe with your secret key (only if available)
const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2023-10-16",
    })
  : null

// Webhook secret for verifying events (only if available)
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || ""

export async function POST(req: Request) {
  // Check if Stripe is properly configured
  if (!stripe || !webhookSecret) {
    return NextResponse.json({ error: "Stripe not configured" }, { status: 500 })
  }

  const body = await req.text()
  const signature = headers().get("stripe-signature")!

  let event: Stripe.Event

  try {
    // Verify the event came from Stripe
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err: any) {
    console.error(`Webhook signature verification failed: ${err.message}`)
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
  }

  // Handle specific event types
  try {
    switch (event.type) {
      case "customer.subscription.created":
        await handleSubscriptionCreated(event.data.object as Stripe.Subscription)
        break
      case "customer.subscription.updated":
        await handleSubscriptionUpdated(event.data.object as Stripe.Subscription)
        break
      case "customer.subscription.deleted":
        await handleSubscriptionDeleted(event.data.object as Stripe.Subscription)
        break
      case "invoice.payment_succeeded":
        await handleInvoicePaymentSucceeded(event.data.object as Stripe.Invoice)
        break
      case "invoice.payment_failed":
        await handleInvoicePaymentFailed(event.data.object as Stripe.Invoice)
        break
      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Error processing webhook:", error)
    return NextResponse.json({ error: "Error processing webhook" }, { status: 500 })
  }
}

// Handler functions for different webhook events

async function handleSubscriptionCreated(subscription: Stripe.Subscription) {
  const customerId = subscription.customer as string
  const priceId = subscription.items.data[0].price.id
  const status = subscription.status
  const subscriptionId = subscription.id

  // In a real app, you would update your database
  console.log(`New subscription ${subscriptionId} created for customer ${customerId}`)

  // Determine plan type and allocate free cards
  let freeCards = 5 // Default for basic plan

  // Check which plan was purchased
  if (priceId === process.env.STRIPE_PRICE_ID_ENTERPRISE) {
    // Enterprise plan - would check company size in a real app
    freeCards = 15 // Default for enterprise
  }

  // Update user's card allocation in your database
  // await db.user.update({
  //   where: { stripeCustomerId: customerId },
  //   data: { freeCards, subscriptionId, subscriptionStatus: status }
  // })

  // Send welcome email with subscription details
  await sendSubscriptionNotification(
    customerId,
    "Your Write Our Heart subscription is active!",
    `Your subscription is now active. You have ${freeCards} free cards available this month.`,
  )
}

async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  const customerId = subscription.customer as string
  const status = subscription.status
  const subscriptionId = subscription.id

  // Update subscription status in your database
  console.log(`Subscription ${subscriptionId} updated for customer ${customerId} to ${status}`)

  // await db.user.update({
  //   where: { stripeCustomerId: customerId },
  //   data: { subscriptionStatus: status }
  // })

  // Notify user of subscription changes if needed
  if (status === "past_due") {
    await sendSubscriptionNotification(
      customerId,
      "Action required: Payment issue with your subscription",
      "We had trouble processing your payment. Please update your payment method to continue your service.",
    )
  }
}

async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  const customerId = subscription.customer as string
  const subscriptionId = subscription.id

  // Update user record in your database
  console.log(`Subscription ${subscriptionId} cancelled for customer ${customerId}`)

  // await db.user.update({
  //   where: { stripeCustomerId: customerId },
  //   data: { subscriptionId: null, subscriptionStatus: 'cancelled' }
  // })

  // Send cancellation email
  await sendSubscriptionNotification(
    customerId,
    "Your subscription has been cancelled",
    "Your Write Our Heart subscription has been cancelled. We hope to see you again soon!",
  )
}

async function handleInvoicePaymentSucceeded(invoice: Stripe.Invoice) {
  const customerId = invoice.customer as string

  if (invoice.billing_reason === "subscription_cycle") {
    // This is a recurring payment - reset the user's monthly card allocation
    const subscriptionId = invoice.subscription as string

    // Get subscription to determine plan type
    const subscription = await stripe.subscriptions.retrieve(subscriptionId)
    const priceId = subscription.items.data[0].price.id

    // Determine free card allocation based on plan
    let freeCards = 5 // Default for basic plan

    if (priceId === process.env.STRIPE_PRICE_ID_ENTERPRISE) {
      // Enterprise plan - would check company size in a real app
      freeCards = 15
    }

    // Reset user's monthly card allocation
    // await db.user.update({
    //   where: { stripeCustomerId: customerId },
    //   data: { freeCards }
    // })

    // Send monthly renewal notification
    await sendSubscriptionNotification(
      customerId,
      "Your monthly subscription has renewed",
      `Your Write Our Heart subscription has been renewed. You have ${freeCards} free cards available this month.`,
    )
  }
}

async function handleInvoicePaymentFailed(invoice: Stripe.Invoice) {
  const customerId = invoice.customer as string

  // Send payment failure notification
  await sendSubscriptionNotification(
    customerId,
    "Payment failed for your subscription",
    "We were unable to process your payment. Please update your payment method to avoid service interruption.",
  )
}

// Helper function to send notifications
async function sendSubscriptionNotification(customerId: string, subject: string, message: string) {
  // In a real app, you would fetch the user's email from your database
  // const user = await db.user.findUnique({ where: { stripeCustomerId: customerId } })

  // For now, we'll just log the notification
  console.log(`Sending notification to customer ${customerId}:`)
  console.log(`Subject: ${subject}`)
  console.log(`Message: ${message}`)

  // In production, you would use your email service:
  // await sendEmail({
  //   to: user.email,
  //   subject,
  //   body: message
  // })
}
