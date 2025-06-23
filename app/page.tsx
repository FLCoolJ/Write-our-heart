import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Mail, Calendar, Heart, ArrowRight, Check } from "lucide-react"
import TestimonialCard from "@/components/testimonial-card"
import PricingCard from "@/components/pricing-card"
import HowItWorksStep from "@/components/how-it-works-step"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Personalized Poetry Cards, Written From Your Heart</h1>
            <p className="text-xl text-gray-300 mb-8">
              Express what you actually feel—without struggling to find the words. We turn your sentiments into
              beautiful, personalized greeting cards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/beta-signup">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-6 text-lg">
                  Join Waiting List
                </Button>
              </Link>
              <Link href="/samples">
                <Button
                  variant="outline"
                  className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 px-8 py-6 text-lg"
                >
                  See Examples
                </Button>
              </Link>
            </div>
            <div className="flex items-center mt-6">
              <Check className="h-5 w-5 text-yellow-500 mr-2" />
              <span className="text-gray-300">Includes cards, envelopes & US postage</span>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/valentine-card-sample.png"
              alt="Valentine's Day card sample"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Most Greeting Cards Fail</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Generic cards don't express your real feelings. We solve that problem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-black border border-gray-800 hover:border-yellow-500/50 transition-colors">
              <CardContent className="p-8">
                <div className="rounded-full bg-yellow-500/10 w-12 h-12 flex items-center justify-center mb-6">
                  <Mail className="h-6 w-6 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">Generic Messages</h3>
                <p className="text-gray-400">
                  Store-bought cards use the same tired phrases that don't reflect your unique relationship.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border border-gray-800 hover:border-yellow-500/50 transition-colors">
              <CardContent className="p-8">
                <div className="rounded-full bg-yellow-500/10 w-12 h-12 flex items-center justify-center mb-6">
                  <Calendar className="h-6 w-6 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">Forgotten Occasions</h3>
                <p className="text-gray-400">
                  Busy lives mean important dates slip by until it's too late to send a meaningful card.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border border-gray-800 hover:border-yellow-500/50 transition-colors">
              <CardContent className="p-8">
                <div className="rounded-full bg-yellow-500/10 w-12 h-12 flex items-center justify-center mb-6">
                  <Heart className="h-6 w-6 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">Writer's Block</h3>
                <p className="text-gray-400">
                  You know how you feel, but struggle to find the perfect words to express those emotions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">How Write Our Heart Works</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Three simple steps to never miss an important occasion again.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <HowItWorksStep
              number="1"
              title="Add Your Hearts"
              description="Enter the special people in your life and their important occasions."
              icon="Users"
            />

            <HowItWorksStep
              number="2"
              title="Personalize Your Message"
              description="Tell us about your relationship and the sentiment you want to express."
              icon="Edit"
            />

            <HowItWorksStep
              number="3"
              title="We Handle The Rest"
              description="We create, print, and mail your personalized poetry cards on schedule."
              icon="CheckCircle"
            />
          </div>

          <div className="mt-12 text-center">
            <Link href="/how-it-works">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg py-6 px-8">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-500 text-black px-3 py-1 text-sm mb-4">Launch Pricing</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Lock in our special launch rates for 12 months.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingCard
              title="Individual"
              price="$4.99"
              period="month"
              description="Perfect for personal use"
              features={[
                "4 free cards per month",
                "US postage included",
                "Personalized poetry",
                "Occasion reminders",
                "Additional cards: $4.99 each",
              ]}
              buttonText="Join Waiting List"
              buttonLink="/beta-signup"
              popular={false}
            />

            <PricingCard
              title="Enterprise"
              price="$17.99"
              period="month"
              description="Ideal for businesses"
              features={[
                "8-12 free cards per month",
                "US postage included",
                "Logo placement",
                "Team management",
                "Additional cards: $4.99 each",
              ]}
              buttonText="Join Waiting List"
              buttonLink="/beta-signup"
              popular={true}
            />
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400">All plans include a 14-day free trial. Cancel anytime.</p>
            <Link href="/pricing" className="text-yellow-500 hover:underline inline-flex items-center mt-2">
              See full pricing details <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">What Our Early Users Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our growing community of people who never miss an important occasion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="The poetry they created captured exactly what I wanted to say to my mom on her birthday. It was like they read my mind!"
              author="Sarah K."
              role="Marketing Director"
              rating={5}
            />

            <TestimonialCard
              quote="As a small business owner, I use Write Our Heart to send thank you cards to clients. The personalized touch has helped me retain more customers."
              author="Michael T."
              role="Financial Advisor"
              rating={5}
            />

            <TestimonialCard
              quote="I'm terrible with words but wanted to tell my wife how much she means to me. The card they created brought her to tears - in a good way!"
              author="David L."
              role="Software Engineer"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-yellow-500 text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Never Miss Another Important Occasion</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our waiting list today and lock in special pricing for 12 months after launch.
          </p>
          <Link href="/beta-signup">
            <Button className="bg-black hover:bg-gray-800 text-white text-lg py-6 px-8">Get Started Now</Button>
          </Link>
          <p className="mt-4 text-sm">Limited spots available. No credit card required to join waitlist.</p>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose Write Our Heart</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're different from traditional greeting card companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Personalized Poetry</h3>
                  <p className="text-gray-400">
                    Every card features custom poetry based on your relationship and sentiment, not generic pre-written
                    text.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">All-Inclusive Pricing</h3>
                  <p className="text-gray-400">
                    Cards, envelopes, and US postage included in every subscription. No hidden fees or extra charges.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Never Miss an Occasion</h3>
                  <p className="text-gray-400">
                    Our system tracks important dates and ensures cards arrive on time, every time.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Weekly Batch Processing</h3>
                  <p className="text-gray-400">
                    Cards printed every Monday and mailed Tuesday, ensuring consistent quality and reliable delivery.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Business Solutions</h3>
                  <p className="text-gray-400">
                    Add your logo to cards and envelopes. Perfect for client appreciation and relationship building.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Satisfaction Guaranteed</h3>
                  <p className="text-gray-400">
                    If your card is damaged or undelivered, we'll resend at no charge. Your satisfaction is our
                    priority.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to know about Write Our Heart.
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
                <h3 className="text-xl font-bold mb-2">How long does delivery take?</h3>
                <p className="text-gray-400">
                  Cards are printed every Monday and mailed every Tuesday. Delivery typically takes 3-5 business days
                  within the US. International shipping times vary by destination.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Can I see examples of the poetry?</h3>
                <p className="text-gray-400">
                  Yes! Visit our{" "}
                  <Link href="/samples" className="text-yellow-500 hover:underline">
                    sample gallery
                  </Link>{" "}
                  to see examples of personalized poetry for different occasions and relationships.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Link href="/faq" className="text-yellow-500 hover:underline inline-flex items-center">
              View all FAQs <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-yellow-500 to-yellow-600 text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Express What's in Your Heart?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our waiting list today and start sending personalized poetry cards to the people who matter most.
          </p>
          <Link href="/beta-signup">
            <Button className="bg-black hover:bg-gray-800 text-white text-lg py-6 px-8">Join the Waiting List</Button>
          </Link>
          <p className="mt-4">
            Questions?{" "}
            <Link href="/contact" className="underline">
              Contact us
            </Link>
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
