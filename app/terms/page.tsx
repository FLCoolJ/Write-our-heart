import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-gray-400 hover:text-yellow-500">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to home
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-yellow-500 text-black px-3 py-1 text-sm mb-4">Legal</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Terms and Conditions</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Last updated: January 15, 2025</p>
        </div>

        <Card className="bg-gray-900 border border-gray-800">
          <CardContent className="p-8 prose prose-invert max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-yellow-500 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-300 leading-relaxed">
                  By accessing and using Write Our Heart ("Service"), you accept and agree to be bound by the terms and
                  provision of this agreement. If you do not agree to abide by the above, please do not use this
                  service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-500 mb-4">2. Service Description</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Write Our Heart provides personalized greeting card services with custom poetry. Our service includes:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Creation of personalized poetry based on your input</li>
                  <li>Professional printing on premium card stock</li>
                  <li>Mailing services including US postage</li>
                  <li>Subscription management and billing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-500 mb-4">3. Subscription Plans and Billing</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    <strong>Available Plans:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Whisper Plan: $11.99/month (2 cards)</li>
                    <li>Heartbeat Plan: $19.99/month (4 cards)</li>
                    <li>Legacy Plan: $34.99/month (7 cards)</li>
                  </ul>
                  <p>
                    <strong>Billing Terms:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Monthly subscriptions are billed in advance</li>
                    <li>Annual subscriptions receive 2 bonus cards and save 2 months</li>
                    <li>Additional cards available for $4.99 each</li>
                    <li>Cards expire 2 months after allocation</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-500 mb-4">4. Fair Use Policy</h2>
                <div className="space-y-4 text-gray-300">
                  <p>To ensure fair usage for all subscribers:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>One account per billing address with payment method verification</li>
                    <li>Maximum 3 cards per recipient address per month</li>
                    <li>All addresses must pass USPS validation</li>
                    <li>Early cancellation fee applies if &gt;75% of monthly cards are used before canceling</li>
                    <li>Account activity is monitored for usage patterns</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-500 mb-4">5. Cancellation and Refunds</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    <strong>Cancellation:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>You may cancel your subscription at any time</li>
                    <li>Cancellation takes effect at the end of your current billing period</li>
                    <li>
                      Early cancellation fee of 50% of monthly subscription applies if &gt;75% of cards are used before
                      canceling
                    </li>
                  </ul>
                  <p>
                    <strong>Refunds:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>No refunds for partial months of service</li>
                    <li>Damaged or undelivered cards will be resent at no charge</li>
                    <li>Annual subscriptions are non-refundable after 30 days</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-500 mb-4">6. Content and Intellectual Property</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    You retain ownership of the personal information you provide. Write Our Heart retains rights to:
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>The poetry and creative content we generate</li>
                    <li>Our proprietary algorithms and processes</li>
                    <li>Card designs and layouts</li>
                  </ul>
                  <p>You grant us permission to use your input to create personalized content for your cards.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-500 mb-4">7. Privacy and Data Protection</h2>
                <p className="text-gray-300 leading-relaxed">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the
                  Service, to understand our practices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-500 mb-4">8. Limitation of Liability</h2>
                <p className="text-gray-300 leading-relaxed">
                  Write Our Heart shall not be liable for any indirect, incidental, special, consequential, or punitive
                  damages, including without limitation, loss of profits, data, use, goodwill, or other intangible
                  losses, resulting from your use of the service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-500 mb-4">9. Modifications to Terms</h2>
                <p className="text-gray-300 leading-relaxed">
                  We reserve the right to modify these terms at any time. We will notify users of significant changes
                  via email or through our service. Continued use of the service after changes constitutes acceptance of
                  the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-500 mb-4">10. Contact Information</h2>
                <p className="text-gray-300 leading-relaxed">
                  If you have any questions about these Terms and Conditions, please contact us at:
                  <br />
                  Email: support@writeourheart.com
                  <br />
                  Website:{" "}
                  <Link href="/contact" className="text-yellow-500 hover:underline">
                    writeourheart.com/contact
                  </Link>
                </p>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  )
}
