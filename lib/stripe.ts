import Stripe from "stripe"

// Check if we have the API key before initializing Stripe
const getStripeSecretKey = () => {
  const key = process.env.STRIPE_SECRET_KEY
  if (!key) {
    console.error("Warning: STRIPE_SECRET_KEY is not defined")
    return "sk_test_placeholder" // Placeholder for development/preview
  }
  return key
}

// Only initialize on the server side
export const stripe =
  typeof window === "undefined"
    ? new Stripe(getStripeSecretKey(), {
        apiVersion: "2024-06-20",
      })
    : null

export const getStripe = () => {
  if (typeof window === "undefined") {
    return null
  }

  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  if (!publishableKey) {
    console.error("Warning: NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined")
    return null
  }

  return import("@stripe/stripe-js").then(({ loadStripe }) => loadStripe(publishableKey))
}
