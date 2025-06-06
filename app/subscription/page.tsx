"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Loader2 } from "lucide-react"
import { loadStripe } from "@stripe/stripe-js"

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function SubscriptionPage() {
  const router = useRouter()
  const [loading, setLoading] = useState<string | null>(null)

  // Mock user data - in a real app, this would come from your auth system
  const user = {
    id: "user_123",
    email: "test@example.com",
    name: "Test User",
  }

  const plans = [
    {
      id: "individual",
      name: "Individual Plan",
      price: "$3.99",
      period: "month",
      description: "Perfect for personal use",
      features: ["5 free cards per month", "Personalized messages", "Email notifications", "Basic templates"],
    },
    {
      id: "enterprise",
      name: "Enterprise Plan",
      price: "$15.99",
      period: "month",
      description: "For businesses of all sizes",
      features: [
        "8-25 free cards per month",
        "Bulk contact import",
        "Team management",
        "Premium templates",
        "Priority support",
      ],
    },
  ]

  const handleSubscribe = async (planId: string) => {
    setLoading(planId)

    try {
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
      setLoading(null)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-yellow-500 p-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Choose Your Plan</h1>
          <p className="text-xl text-black/80">
            Select the plan that works best for you during our beta testing period
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan) => (
            <Card key={plan.id} className={`border-2 ${plan.id === "enterprise" ? "border-purple-400" : ""}`}>
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-500">/{plan.period}</span>
                </CardDescription>
                <p className="text-sm text-gray-600 mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() => handleSubscribe(plan.id)}
                  disabled={loading !== null}
                  className={`w-full ${
                    plan.id === "enterprise" ? "bg-purple-600 hover:bg-purple-700" : "bg-yellow-600 hover:bg-yellow-700"
                  } text-white`}
                >
                  {loading === plan.id ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    `Subscribe to ${plan.name}`
                  )}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-black/70">
            All plans include a 14-day free trial. Cancel anytime.
            <br />
            By subscribing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  )
}
