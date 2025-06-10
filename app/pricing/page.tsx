import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react"
import Footer from "@/components/footer"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="bg-yellow-500 text-black px-3 py-1 text-sm mb-4">Beta Pricing</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Lock in our special beta rates for 12 months after launch. All plans include cards, envelopes, and US
            postage.
          </p>

          <div className="inline-flex items-center bg-gray-900 rounded-full p-1 mb-12">
            <button className="px-6 py-2 rounded-full bg-yellow-500 text-black font-medium">Monthly</button>
            <button className="px-6 py-2 rounded-full text-gray-300 font-medium">Annual (Coming Soon)</button>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Individual Plan */}
            <Card className="bg-black border border-gray-800 h-full relative">
              <CardHeader className="pt-8 pb-6 text-center">
                <h3 className="text-xl font-bold text-white">Individual</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">$4.99</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-gray-400 mt-2">Perfect for personal use</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-yellow-500" />
                    </div>
                    <span className="ml-3 text-gray-300">4 free cards per month</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-yellow-500" />
                    </div>
                    <span className="ml-3 text-gray-300">US postage included</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-yellow-500" />
                    </div>
                    <span className="ml-3 text-gray-300">Personalized poetry</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-yellow-500" />
                    </div>
                    <span className="ml-3 text-gray-300">Occasion reminders</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-yellow-500" />
                    </div>
                    <span className="ml-3 text-gray-300">Additional cards: $4.99 each</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <X className="h-5 w-5 text-gray-600" />
                    </div>
                    <span className="ml-3 text-gray-500">International shipping included</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <X className="h-5 w-5 text-gray-600" />
                    </div>
                    <span className="ml-3 text-gray-500">Logo placement</span>
                  </li>
                </ul>

                <Link href="/beta-signup" className="block w-full">
                  <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">Join Beta</Button>
                </Link>

                <div className="text-center text-sm text-gray-500">
                  <p>Beta price: $4.99/month</p>
                  <p>Launch price: $7.99/month</p>
                  <p className="text-yellow-500">You save: 38%</p>
                </div>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-black border border-yellow-500 h-full relative">
              <div className="absolute -top-4 left-0 right-0 flex justify-center">
                <Badge className="bg-yellow-500 text-black px-3 py-1">Most Popular</Badge>
              </div>

              <CardHeader className="pt-8 pb-6 text-center">
                <h3 className="text-xl font-bold text-white">Enterprise</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">$17.99</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-gray-400 mt-2">Ideal for businesses</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-yellow-500" />
                    </div>
                    <span className="ml-3 text-gray-300">8-12 free cards per month</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-yellow-500" />
                    </div>
                    <span className="ml-3 text-gray-300">US postage included</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-yellow-500" />
                    </div>
                    <span className="ml-3 text-gray-300">Personalized poetry</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-yellow-500" />
                    </div>
                    <span className="ml-3 text-gray-300">Occasion reminders</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-yellow-500" />
                    </div>
                    <span className="ml-3 text-gray-300">Additional cards: $4.99 each</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-yellow-500" />
                    </div>
                    <span className="ml-3 text-gray-300">4 free international cards</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-yellow-500" />
                    </div>
                    <span className="ml-3 text-gray-300">Logo placement</span>
                  </li>
                </ul>

                <Link href="/beta-signup" className="block w-full">
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">Join Beta</Button>
                </Link>

                <div className="text-center text-sm text-gray-500">
                  <p>Beta price: $17.99/month</p>
                  <p>Launch price: $20.99/month</p>
                  <p className="text-yellow-500">You save: 14%</p>
                </div>
              </CardContent>
            </Card>
          </div>
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
                  You'll receive a set number of card credits each month based on your plan. Cards are distributed
                  weekly (not all at once). Unused credits expire after 6 months to ensure fresh content.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">What happens if I need more cards than my plan includes?</h3>
                <p className="text-gray-400">
                  You can purchase additional cards for $4.99 each, which includes the card, envelope, and US postage.
                  International shipping is an additional $2.00 per card.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Can I cancel my subscription anytime?</h3>
                <p className="text-gray-400">
                  Yes, you can cancel your subscription at any time. However, if you've used more than 75% of your
                  monthly cards before canceling, an early cancellation fee may apply. This helps us maintain fair usage
                  of our service.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">What happens to my beta pricing after launch?</h3>
                <p className="text-gray-400">
                  Beta subscribers who maintain continuous service will keep their beta rates for 12 months after our
                  official launch. After that period, you'll transition to standard pricing with 30-day advance notice.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Do unused cards roll over to the next month?</h3>
                <p className="text-gray-400">
                  Yes, unused cards roll over for up to 6 months. This gives you flexibility while ensuring you're
                  always sending fresh, timely content.
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
            Join our beta program today and start sending personalized poetry cards to the people who matter most.
          </p>
          <Button className="bg-black hover:bg-gray-800 text-white text-lg py-6 px-8">Join the Beta</Button>
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
