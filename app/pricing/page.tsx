"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X, Calculator, Gift } from "lucide-react"
import { useState } from "react"
import Footer from "@/components/footer"

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  const monthlyPlans = [
    {
      name: "Whisper Plan",
      price: "$11.99",
      period: "month",
      cards: "2 premium cards per month",
      costPerCard: "$6.00 per card (including postage)",
      features: [
        "2 premium cards per month",
        "US postage included",
        "Personalized poetry",
        "Occasion reminders",
        "Cards expire after 2 months",
        "Additional cards: $4.99 each",
      ],
      excludes: ["Custom logo placement"],
      popular: false,
    },
    {
      name: "Heartbeat Plan",
      price: "$19.99",
      period: "month",
      cards: "4 premium cards per month",
      costPerCard: "$5.00 per card (including postage)",
      features: [
        "4 premium cards per month",
        "US postage included",
        "Personalized poetry",
        "Occasion reminders",
        "Cards expire after 2 months",
        "Additional cards: $4.99 each",
      ],
      excludes: ["Custom logo placement"],
      popular: true,
    },
    {
      name: "Legacy Plan",
      price: "$34.99",
      period: "month",
      cards: "7 premium cards per month",
      costPerCard: "$5.00 per card (including postage)",
      features: [
        "7 premium cards per month",
        "US postage included",
        "Personalized poetry",
        "Occasion reminders",
        "Cards expire after 2 months",
        "Additional cards: $4.99 each",
        "Custom logo placement",
      ],
      excludes: [],
      popular: false,
    },
  ]

  const annualPlans = [
    {
      name: "Whisper Plan",
      price: "$119.90",
      period: "year",
      cards: "2 premium cards per month",
      costPerCard: "$5.00 per card (including postage)",
      monthlySavings: "$23.98",
      features: [
        "2 premium cards per month",
        "US postage included",
        "Personalized poetry",
        "Occasion reminders",
        "Cards expire after 2 months",
        "Additional cards: $4.99 each",
        "🎁 2 bonus cards when you pay annually",
      ],
      excludes: ["Custom logo placement"],
      popular: false,
    },
    {
      name: "Heartbeat Plan",
      price: "$199.90",
      period: "year",
      cards: "4 premium cards per month",
      costPerCard: "$4.17 per card (including postage)",
      monthlySavings: "$39.98",
      features: [
        "4 premium cards per month",
        "US postage included",
        "Personalized poetry",
        "Occasion reminders",
        "Cards expire after 2 months",
        "Additional cards: $4.99 each",
        "🎁 2 bonus cards when you pay annually",
      ],
      excludes: ["Custom logo placement"],
      popular: true,
    },
    {
      name: "Legacy Plan",
      price: "$349.99",
      period: "year",
      cards: "7 premium cards per month",
      costPerCard: "$4.17 per card (including postage)",
      monthlySavings: "$69.89",
      features: [
        "7 premium cards per month",
        "US postage included",
        "Personalized poetry",
        "Occasion reminders",
        "Cards expire after 2 months",
        "Additional cards: $4.99 each",
        "Custom logo placement",
        "🎁 2 bonus cards when you pay annually",
      ],
      excludes: [],
      popular: false,
    },
  ]

  const currentPlans = isAnnual ? annualPlans : monthlyPlans

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Lock in a plan with continuous subscription. All plans include premium cards, envelopes, and US postage.
          </p>

          <div className="inline-flex items-center bg-gray-900 rounded-full p-1 mb-12">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                !isAnnual ? "bg-yellow-500 text-black" : "text-gray-300"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                isAnnual ? "bg-yellow-500 text-black" : "text-gray-300"
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-green-500 text-black px-2 py-1 rounded-full">Save 2 months</span>
            </button>
          </div>

          {/* Annual Bonus Message */}
          {isAnnual && (
            <div className="mb-8 p-4 bg-gradient-to-r from-yellow-500/20 to-green-500/20 border border-yellow-500/30 rounded-lg max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 text-yellow-400 mb-2">
                <Gift className="h-5 w-5" />
                <span className="font-semibold">Annual Bonus</span>
              </div>
              <p className="text-white">
                Pay annually and get <span className="font-bold text-yellow-400">2 additional bonus cards</span> to lock
                in the words that matter year-round!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentPlans.map((plan, index) => (
              <Card
                key={plan.name}
                className={`bg-black h-full relative ${plan.popular ? "border-yellow-500" : "border-gray-800"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <Badge className="bg-yellow-500 text-black px-3 py-1">Most Popular</Badge>
                  </div>
                )}

                <CardHeader className="pt-8 pb-6 text-center">
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">/{plan.period}</span>
                  </div>
                  <p className="text-gray-400 mt-2">{plan.cards}</p>

                  {/* Annual savings badge */}
                  {isAnnual && plan.monthlySavings && (
                    <div className="mt-2">
                      <Badge className="bg-green-500 text-black text-xs px-2 py-1">
                        Save {plan.monthlySavings} vs Monthly
                      </Badge>
                    </div>
                  )}

                  {/* Cost per card calculation */}
                  <div className="mt-3 p-2 bg-gray-900 rounded-lg">
                    <div className="flex items-center justify-center gap-2 text-sm text-yellow-500">
                      <Calculator className="h-4 w-4" />
                      <span>{plan.costPerCard}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          {feature.includes("🎁") ? (
                            <Gift className="h-5 w-5 text-yellow-500" />
                          ) : (
                            <Check className="h-5 w-5 text-yellow-500" />
                          )}
                        </div>
                        <span
                          className={`ml-3 ${feature.includes("🎁") ? "text-yellow-400 font-medium" : "text-gray-300"}`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                    {plan.excludes.map((exclude, excludeIndex) => (
                      <li key={excludeIndex} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <X className="h-5 w-5 text-gray-600" />
                        </div>
                        <span className="ml-3 text-gray-500">{exclude}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="https://launch.writeourheart.com" className="block w-full">
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">Join</Button>
                  </Link>

                  {/* Small print */}
                  <div className="text-xs text-gray-500 mt-3 leading-tight text-center">
                    <p>*One account per billing address. Subject to address validation and usage monitoring.</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Anti-Gaming Notice */}
      <section className="py-10 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-red-900/20 border border-red-700">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-red-400">Fair Use Policy</h3>
              <div className="space-y-2 text-gray-300">
                <p>• Early cancellation fee applies if &gt;75% of monthly cards used before canceling</p>
                <p>• One account per billing address with payment method verification</p>
                <p>• Maximum 3 cards per recipient address per month</p>
                <p>• All addresses validated through USPS before printing</p>
                <p>• Account activity monitored for usage patterns and IP tracking</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to know about our pricing and subscription model.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="bg-black border border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">How does the subscription work?</h3>
                <p className="text-gray-400">
                  You receive card credits each month based on your plan (Whisper: 2 cards, Heartbeat: 4 cards, Legacy:
                  7 cards). Cards are distributed weekly and expire after 2 months to ensure fresh, timely content.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">What's the early cancellation policy?</h3>
                <p className="text-gray-400">
                  If you use more than 75% of your monthly cards before canceling, an early cancellation fee equal to
                  50% of your monthly subscription applies. This prevents abuse where users consume all cards
                  immediately then cancel, which would be unsustainable for our service.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Are there limits on recipients?</h3>
                <p className="text-gray-400">
                  Yes, we limit 3 cards per recipient address per month to prevent abuse. All addresses are validated
                  through USPS API before printing. This ensures fair usage while allowing you to send multiple
                  occasions to the same person.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Why do cards expire after 2 months?</h3>
                <p className="text-gray-400">
                  Card expiration prevents hoarding and ensures you're sending timely, relevant content. It also helps
                  us manage printing costs and maintain service quality for all subscribers.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">What happens to unused cards?</h3>
                <p className="text-gray-400">
                  Unused cards expire after 2 months. This policy ensures fresh content and prevents system abuse while
                  giving you reasonable flexibility for scheduling.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">How much do I save with annual billing?</h3>
                <p className="text-gray-400">
                  Annual subscribers save the equivalent of 2 months compared to monthly billing, plus receive 2 bonus
                  cards to lock in the words that matter year-round. Whisper saves $23.98, Heartbeat saves $39.98, and
                  Legacy saves $69.89 per year.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">What are the 2 bonus cards for annual subscribers?</h3>
                <p className="text-gray-400">
                  Annual subscribers receive 2 additional premium cards (beyond their monthly allocation) when they pay
                  for the full year upfront. These bonus cards help you lock in the words that matter for special
                  occasions throughout the year.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-yellow-500 text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Express What's in Your Heart?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Choose your plan and start sending personalized poetry cards to the people who matter most.
          </p>
          <Link href="https://launch.writeourheart.com">
            <Button className="bg-black hover:bg-gray-800 text-white text-lg py-6 px-8">Get Started</Button>
          </Link>
          <p className="mt-4">
            Questions?{" "}
            <Link href="/contact" className="underline">
              Contact us
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
