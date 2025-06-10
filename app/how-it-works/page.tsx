import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle, Clock, Calendar, Truck, PenTool } from "lucide-react"
import Footer from "@/components/footer"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-gray-400 hover:text-yellow-500">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to home
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-yellow-500 text-black px-3 py-1 text-sm mb-4">Our Process</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">How Write Our Heart Works</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From your heart to their hands in three simple steps. Here's how we turn your sentiments into beautiful,
            personalized poetry cards.
          </p>
        </div>

        {/* Process Overview */}
        <div className="mb-20">
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-800 -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                <div className="w-12 h-12 rounded-full bg-yellow-500 text-black flex items-center justify-center mb-6 mx-auto md:mx-0">
                  <span className="font-bold text-lg">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center md:text-left">Add Your Hearts</h3>
                <p className="text-gray-400 mb-4">
                  Start by adding the special people in your life to your "Hearts" list. Include their name, address,
                  and the occasions you want to celebrate.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span>Add as many Hearts as you want</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span>Select multiple occasions per Heart</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span>Import contacts from your address book</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                <div className="w-12 h-12 rounded-full bg-yellow-500 text-black flex items-center justify-center mb-6 mx-auto md:mx-0">
                  <span className="font-bold text-lg">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center md:text-left">Personalize Your Message</h3>
                <p className="text-gray-400 mb-4">
                  Tell us about your relationship and the sentiment you want to express. Our system will transform your
                  input into beautiful, personalized poetry.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span>Answer simple questions about your relationship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span>Share specific memories or feelings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span>Review and approve the final poetry</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                <div className="w-12 h-12 rounded-full bg-yellow-500 text-black flex items-center justify-center mb-6 mx-auto md:mx-0">
                  <span className="font-bold text-lg">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center md:text-left">We Handle The Rest</h3>
                <p className="text-gray-400 mb-4">
                  Once approved, we create, print, and mail your personalized poetry cards on schedule. You'll receive
                  notifications at each step of the process.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span>Professional printing on premium card stock</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span>Cards mailed directly to recipients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span>Delivery tracking and confirmation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Weekly Schedule</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We operate on a weekly batch processing schedule to ensure consistent quality and reliable delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-black border border-gray-800">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-yellow-500/10 w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Sunday</h3>
                    <p className="text-gray-400">
                      Final day to submit or edit card requests for the upcoming week's batch. All submissions after
                      Sunday at 11:59 PM will be processed the following week.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border border-gray-800">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-yellow-500/10 w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <PenTool className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Monday</h3>
                    <p className="text-gray-400">
                      Our team reviews all submissions and finalizes the poetry for each card. Cards are then sent to
                      our printing facility for production.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border border-gray-800">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-yellow-500/10 w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Truck className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Tuesday</h3>
                    <p className="text-gray-400">
                      All cards are printed, quality-checked, and mailed out. You'll receive a notification when your
                      card has been shipped, including tracking information.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border border-gray-800">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-yellow-500/10 w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Delivery Time</h3>
                    <p className="text-gray-400">
                      Cards typically arrive within 3-5 business days for US addresses. International delivery times
                      vary by destination. We recommend scheduling cards at least 2 weeks before the occasion.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Common questions about our process and service.</p>
          </div>

          <div className="space-y-6">
            <Card className="bg-gray-800 border border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">How far in advance should I schedule my cards?</h3>
                <p className="text-gray-400">
                  We recommend scheduling cards at least 2 weeks before the occasion to ensure timely delivery. For
                  international addresses, 3-4 weeks is ideal. Our system will remind you of upcoming occasions so you
                  never miss an important date.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Can I see the card before it's sent?</h3>
                <p className="text-gray-400">
                  Yes! You'll have the opportunity to review and approve both the poetry and the card design before it's
                  printed and mailed. If you're not satisfied, you can request revisions or choose a different design.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">What if I need to make a last-minute change?</h3>
                <p className="text-gray-400">
                  You can edit your card details up until Sunday at 11:59 PM for the upcoming week's batch. After that,
                  the card will be locked for production. For urgent changes after the deadline, please contact our
                  customer support team.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">How do you handle recurring occasions like birthdays?</h3>
                <p className="text-gray-400">
                  Our system automatically tracks recurring occasions like birthdays and anniversaries. You'll receive a
                  reminder two weeks before each occasion, giving you time to personalize that year's message or use the
                  same details as before.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Link href="/faq" className="text-yellow-500 hover:underline">
              View all FAQs
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-black border-0">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join our beta program today and start sending personalized poetry cards that truly express what's in
                your heart.
              </p>
              <Link href="/beta-signup">
                <Button className="bg-black hover:bg-gray-800 text-white text-lg py-6 px-8">Join the Beta</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
