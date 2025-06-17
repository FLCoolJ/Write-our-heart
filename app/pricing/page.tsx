import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X, Calculator } from "lucide-react"
import Footer from "@/components/footer"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="bg-yellow-500 text-black px-3 py-1 text-sm mb-4">Limited Beta Pricing</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Lock in our special beta rates with continuous subscription. All plans include premium cards, envelopes, and
            US postage.
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
            {/* Standard Plan */}
            <Card className="bg-black border border-gray-800 h-full relative">
              <CardHeader className="pt-8 pb-6 text-center">
                <h3 className="text-xl font-bold text-white">Standard</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">$5.99</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-gray-400 mt-2">Perfect for personal use</p>

                {/* Cost per card calculation */}
                <div className="mt-3 p-2 bg-gray-900 rounded-lg">
                  <div className="flex items-center justify-center gap-2 text-sm text-yellow-500">
                    <Calculator className="h-4 w-4" />
                    <span>$1.50 per card (including postage)</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-yellow-500" />
                    </div>
                    <span className="ml-3 text-gray-300">4 premium cards per month</span>
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
                    <span className="ml-3 text-gray-300">Cards expire after 3 months</span>
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
                    <span className="ml-3 text-gray-500">International shipping</span>
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

                <div className="text-center text-sm space-y-1">
                  <div className="bg-green-900/30 border border-green-700 rounded p-3">
                    <p className="text-green-400 font-semibold">Beta Savings</p>
                    <p className="text-gray-300">Beta: $5.99/month ($1.50 per card)</p>
                    <p className="text-gray-300">Launch: $9.99/month ($2.50 per card)</p>
                    <p className="text-yellow-500 font-bold">You save: $1.00 per card including mailing!</p>
                  </div>

                  {/* Small print */}
                  <div className="text-xs text-gray-500 mt-3 leading-tight">
                    <p>*Beta pricing requires continuous active subscription and email verification.</p>
                    <p>*One account per billing address. Subject to address validation and usage monitoring.</p>
                  </div>
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
                  <span className="text-4xl font-bold text-white">$23.99</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-gray-400 mt-2">Ideal for businesses</p>

                {/* Cost per card calculation */}
                <div className="mt-3 p-2 bg-gray-900 rounded-lg">
                  <div className="flex items-center justify-center gap-2 text-sm text-yellow-500">
                    <Calculator className="h-4 w-4" />
                    <span>$2.40 per card (including postage)</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-yellow-500" />
                    </div>
                    <span className="ml-3 text-gray-300">10 premium cards per month</span>
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
                    <span className="ml-3 text-gray-300">Cards expire after 3 months</span>
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
                    <span className="ml-3 text-gray-300">Custom logo placement</span>
                  </li>
                </ul>

                <Link href="/beta-signup" className="block w-full">
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">Join Beta</Button>
                </Link>

                <div className="text-center text-sm space-y-1">
                  <div className="bg-green-900/30 border border-green-700 rounded p-3">
                    <p className="text-green-400 font-semibold">Beta Savings</p>
                    <p className="text-gray-300">Beta: $23.99/month ($2.40 per card)</p>
                    <p className="text-gray-300">Launch: $29.99/month ($3.00 per card)</p>
                    <p className="text-yellow-500 font-bold">You save: $0.60 per card including mailing!</p>
                  </div>

                  {/* Small print */}
                  <div className="text-xs text-gray-500 mt-3 leading-tight">
                    <p>*Beta pricing requires continuous active subscription and email verification.</p>
                    <p>*One account per billing address. Subject to address validation and usage monitoring.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
                <p>• Beta pricing requires continuous active subscription with verified email</p>
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
                  You receive card credits each month based on your plan (Standard: 4 cards, Enterprise: 10 cards).
                  Cards are distributed weekly and expire after 3 months to ensure fresh, timely content. Beta pricing
                  requires continuous active subscription with verified email and billing information.
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
                <h3 className="text-xl font-bold mb-2">How do I keep my beta pricing?</h3>
                <p className="text-gray-400">
                  Beta subscribers must maintain continuous active subscription with verified email to keep special
                  rates. Pausing, canceling, or downgrading will result in standard pricing when you reactivate. Beta
                  rates are locked for 12 months after official launch.
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
                <h3 className="text-xl font-bold mb-2">Why do cards expire after 3 months?</h3>
                <p className="text-gray-400">
                  Card expiration prevents hoarding and ensures you're sending timely, relevant content. It also helps
                  us manage printing costs and maintain service quality for all subscribers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-yellow-500 text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Lock In Beta Pricing Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our beta program and save $1.00 per card on Standard or $0.60 per card on Enterprise. Limited time
            offer!
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
