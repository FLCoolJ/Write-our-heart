"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface SubscriptionButtonProps {
  planId: string
  planName: string
  className?: string
  children?: React.ReactNode
}

export function SubscriptionButton({ planId, planName, className, children }: SubscriptionButtonProps) {
  const [loading, setLoading] = useState(false)

  const handleSubscribe = async () => {
    setLoading(true)

    try {
      // Mock user data - in a real app, this would come from your auth system
      const user = {
        id: "user_123",
        email: "test@example.com",
        name: "Test User",
      }

      // 1. Create or get Stripe customer
      const customerResponse = await fetch("/api/stripe/customer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: user.email,
          name: user.name,
        }),
      })

      const { customerId, error: customerError } = await customerResponse.json()

      if (customerError) {
        throw new Error(customerError)
      }

      // 2. Create checkout session
      const checkoutResponse = await fetch("/api/stripe/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          plan: planId,
          userId: user.id,
          userEmail: user.email,
        }),
      })

      const { url, error: checkoutError } = await checkoutResponse.json()

      if (checkoutError) {
        throw new Error(checkoutError)
      }

      // 3. Redirect to checkout
      window.location.href = url
    } catch (error) {
      console.error("Error subscribing:", error)
      alert("There was an error processing your subscription. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button onClick={handleSubscribe} disabled={loading} className={className}>
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Processing...
        </>
      ) : (
        children || `Subscribe to ${planName}`
      )}
    </Button>
  )
}
