"use client"

import { useState } from "react"

const SubscriptionPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null)

  const plans = [
    {
      name: "Whisper",
      monthlyPrice: 11.99,
      annualPrice: 119.9,
      cards: 2,
      annualBonusCards: 2,
    },
    {
      name: "Heartbeat",
      monthlyPrice: 19.99,
      annualPrice: 199.9,
      cards: 4,
      annualBonusCards: 2,
    },
    {
      name: "Legacy",
      monthlyPrice: 34.99,
      annualPrice: 349.99,
      cards: 7,
      annualBonusCards: 2,
    },
  ]

  const handlePlanSelect = (planName) => {
    setSelectedPlan(planName)
    // Redirect to waiting list
    window.location.href = "https://launch.writeourheart.com"
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Subscription Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 ${
              selectedPlan === plan.name ? "border-2 border-blue-500" : ""
            }`}
          >
            <h2 className="text-xl font-semibold mb-4">{plan.name}</h2>
            <p className="text-gray-600 mb-2">
              Monthly: ${plan.monthlyPrice}/mo ({plan.cards} cards)
            </p>
            <p className="text-gray-600 mb-2">
              Annually: ${plan.annualPrice}/yr ({plan.cards + plan.annualBonusCards} cards)
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => handlePlanSelect(plan.name)}
            >
              Join Waiting List
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <p className="text-gray-700">Additional cards: $4.99 each</p>
        <p className="text-gray-700">Cards expire after 2 months.</p>
      </div>
    </div>
  )
}

export default SubscriptionPage
