import { NextResponse } from "next/server"
import Stripe from "stripe"

// Initialize Stripe with your secret key (only if available)
const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2023-10-16",
    })
  : null

export async function POST(req: Request) {
  try {
    // Check if Stripe is properly configured
    if (!stripe) {
      return NextResponse.json({ error: "Stripe not configured" }, { status: 500 })
    }

    const { email, name } = await req.json()

    // Validate required fields
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // Create or retrieve a customer
    const customers = await stripe.customers.list({ email })

    let customer

    if (customers.data.length > 0) {
      // Customer exists, use the first one
      customer = customers.data[0]

      // Update customer if name is provided
      if (name && customer.name !== name) {
        customer = await stripe.customers.update(customer.id, { name })
      }
    } else {
      // Create a new customer
      customer = await stripe.customers.create({
        email,
        name,
      })
    }

    return NextResponse.json({ customerId: customer.id })
  } catch (error: any) {
    console.error("Error creating/retrieving customer:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
