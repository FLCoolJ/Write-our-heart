import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Heart, Users, Award, Mail } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import BetaBanner from "@/components/beta-banner"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <BetaBanner />
      <Navbar />

      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-gray-400 hover:text-yellow-500">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to home
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-yellow-500 text-black px-3 py-1 text-sm mb-4">Our Story</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Write Our Heart</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We believe that every relationship deserves words that truly capture what's in your heart.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6">
                In a world of digital messages and generic greeting cards, we're bringing back the art of meaningful
                communication. Write Our Heart was founded on the belief that every person deserves to express their
                deepest feelings through beautiful, personalized poetry.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                We understand that finding the right words can be challenging, especially when you want to express
                something truly meaningful. That's why we've created a service that transforms your sentiments into
                eloquent poetry, ensuring your loved ones receive cards that speak directly to their hearts.
              </p>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-yellow-500/10 w-12 h-12 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Authentic Expression</h3>
                  <p className="text-gray-400">Every card reflects your unique relationship and feelings</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/welcome-page.png"
                alt="Write Our Heart welcome screen with greeting cards"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-black p-4 rounded-lg">
                <p className="font-semibold">Founded in 2024</p>
                <p className="text-sm">Born from a desire to reconnect hearts</p>
              </div>
            </div>
          </div>
        </div>

        {/* Founder Story */}
        <div className="mb-20">
          <Card className="bg-gray-800 border border-gray-700">
            <CardContent className="p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1">
                  <img
                    src="/images/founder-image.png"
                    alt="Founder"
                    className="rounded-full w-48 h-48 mx-auto object-cover"
                  />
                </div>
                <div className="lg:col-span-2">
                  <h2 className="text-3xl font-bold mb-4">A Personal Journey</h2>
                  <p className="text-gray-300 mb-4">
                    "Write Our Heart was born from my own struggle to find the right words for my grandmother's 90th
                    birthday. I spent hours trying to write something that captured how much she meant to me, but
                    everything felt inadequate or cliché."
                  </p>
                  <p className="text-gray-300 mb-4">
                    "That's when I realized that millions of people face this same challenge every day. We have deep
                    feelings but struggle to express them in a way that truly honors our relationships. I knew there had
                    to be a better way."
                  </p>
                  <p className="text-gray-300 mb-6">
                    "Write Our Heart is my solution to this universal problem. We're not just creating greeting cards;
                    we're helping people express their authentic selves and strengthen their most important
                    relationships."
                  </p>
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="font-semibold">Sarah Johnson</p>
                      <p className="text-gray-400">Founder & CEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These principles guide everything we do at Write Our Heart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-black border border-gray-800 hover:border-yellow-500/50 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="rounded-full bg-yellow-500/10 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold mb-4">Authenticity</h3>
                <p className="text-gray-400">
                  We believe in genuine expression. Every card we create reflects your true feelings and unique
                  relationship, never generic sentiments.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border border-gray-800 hover:border-yellow-500/50 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="rounded-full bg-yellow-500/10 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold mb-4">Connection</h3>
                <p className="text-gray-400">
                  We're passionate about strengthening human connections. Our cards are designed to bring people closer
                  together through meaningful communication.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border border-gray-800 hover:border-yellow-500/50 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="rounded-full bg-yellow-500/10 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold mb-4">Excellence</h3>
                <p className="text-gray-400">
                  We're committed to delivering exceptional quality in every aspect of our service, from poetry creation
                  to printing and delivery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* How We're Different */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We're Different</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just another greeting card company. Here's what sets us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
                    <span className="text-black font-bold text-sm">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Truly Personalized</h3>
                  <p className="text-gray-400">
                    Unlike template-based services, we create unique poetry based on your specific relationship and the
                    sentiment you want to express.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
                    <span className="text-black font-bold text-sm">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">All-Inclusive Service</h3>
                  <p className="text-gray-400">
                    One price includes everything: custom poetry, premium cards, envelopes, and US postage. No hidden
                    fees or surprise charges.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
                    <span className="text-black font-bold text-sm">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Reliable Delivery</h3>
                  <p className="text-gray-400">
                    Our weekly batch processing ensures consistent quality and timing. Cards are printed every Monday
                    and mailed every Tuesday.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
                    <span className="text-black font-bold text-sm">4</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Business Solutions</h3>
                  <p className="text-gray-400">
                    We offer enterprise plans with logo placement and team management, perfect for businesses wanting to
                    strengthen client relationships.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
                    <span className="text-black font-bold text-sm">5</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Never Miss an Occasion</h3>
                  <p className="text-gray-400">
                    Our intelligent reminder system tracks important dates and ensures your cards arrive exactly when
                    they should.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
                    <span className="text-black font-bold text-sm">6</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Satisfaction Guaranteed</h3>
                  <p className="text-gray-400">
                    If your card is damaged, lost, or doesn't meet your expectations, we'll make it right at no charge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-black border-0">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Have questions about our mission or want to learn more about Write Our Heart? We'd love to hear from
                you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-black hover:bg-gray-800 text-white text-lg py-6 px-8">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Us
                  </Button>
                </Link>
                <Link href="/beta-signup">
                  <Button variant="outline" className="border-black text-black hover:bg-black/10 text-lg py-6 px-8">
                    Join Our Beta
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
