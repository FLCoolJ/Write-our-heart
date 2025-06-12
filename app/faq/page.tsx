import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ChevronDown, Shield } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Footer from "@/components/footer"

export default function FAQPage() {
  const faqCategories = [
    {
      title: "Getting Started",
      questions: [
        {
          question: "How do I join the beta program?",
          answer:
            "Click 'Join Beta' and complete signup with payment verification. We'll send access details within 24-48 hours. Beta pricing requires continuous active subscription.",
        },
        {
          question: "What's included in the beta program?",
          answer:
            "Early platform access, personalized poetry cards, special beta pricing (40% off Individual, 20% off Enterprise), and direct input on service development.",
        },
        {
          question: "How much does the beta cost?",
          answer:
            "Individual: $5.99/month (4 cards, $1.50 each). Enterprise: $23.99/month (8-12 cards, $2.00-$3.00 each). All include premium cards, envelopes, and US postage.",
        },
      ],
    },
    {
      title: "Fair Use & Anti-Gaming",
      questions: [
        {
          question: "What's your fair use policy?",
          answer:
            "We limit 3 cards per recipient address per month, require address validation, allow one account per person/business, and charge early cancellation fees if >75% of monthly cards are used before canceling.",
        },
        {
          question: "Why do you have an early cancellation fee?",
          answer:
            "If you use >75% of monthly cards then cancel, we charge 50% of your monthly fee. This prevents abuse where users consume all cards immediately then cancel, which would be unsustainable for our service.",
        },
        {
          question: "Can I have multiple accounts?",
          answer:
            "No, we allow one account per person/business, verified by payment method and email. Multiple accounts will be merged or suspended to ensure fair usage for all subscribers.",
        },
        {
          question: "How do you prevent address abuse?",
          answer:
            "All addresses are validated before printing. We limit 3 cards per recipient address per month and flag suspicious patterns like multiple cards to the same address from different accounts.",
        },
      ],
    },
    {
      title: "Card Creation & Delivery",
      questions: [
        {
          question: "How does personalized poetry work?",
          answer:
            "Provide recipient details, occasion, and relationship info. Our system creates custom poetry, which we format into premium greeting cards with professional printing and mailing.",
        },
        {
          question: "What occasions do you support?",
          answer:
            "All major occasions: birthdays, anniversaries, holidays, graduations, weddings, sympathy, thank you, congratulations, and custom occasions you specify.",
        },
        {
          question: "Can I edit poetry before sending?",
          answer:
            "Currently our team handles poetry creation. Enterprise subscribers will get self-service editing capabilities after launch. During beta, contact support for adjustments.",
        },
      ],
    },
    {
      title: "Delivery & Timing",
      questions: [
        {
          question: "How long does delivery take?",
          answer:
            "Cards are printed and mailed every Tuesday. Orders by Monday are printed that week and arrive within 3-5 business days via USPS. International delivery adds 7-14 days.",
        },
        {
          question: "Can I schedule cards in advance?",
          answer:
            "Yes! Schedule cards for specific dates up to 6 months ahead. Perfect for birthdays, anniversaries, and recurring occasions. Cards expire 3 months after creation if unused.",
        },
        {
          question: "Do you deliver internationally?",
          answer:
            "Enterprise plans include 4 free international cards monthly. Individual plans can purchase international shipping for $6.99 per card (includes international postage).",
        },
      ],
    },
    {
      title: "Account & Billing",
      questions: [
        {
          question: "How does beta pricing work?",
          answer:
            "Beta subscribers get Individual at $5.99 (vs $9.99 launch) and Enterprise at $23.99 (vs $29.99 launch). You must maintain continuous active subscription to keep beta rates for 12 months after launch.",
        },
        {
          question: "What happens if I pause my subscription?",
          answer:
            "Pausing or canceling your subscription means you'll pay standard pricing when you reactivate. Beta pricing requires continuous active subscription - no breaks allowed.",
        },
        {
          question: "Why do cards expire after 3 months?",
          answer:
            "Card expiration prevents hoarding, ensures timely content, and helps us manage printing costs. It encourages regular use rather than accumulating cards for bulk sending.",
        },
        {
          question: "What happens to unused cards?",
          answer:
            "Unused cards expire after 3 months. This policy ensures fresh content and prevents system abuse while giving you reasonable flexibility for scheduling.",
        },
      ],
    },
    {
      title: "Technical Support",
      questions: [
        {
          question: "What if I have technical issues?",
          answer:
            "Contact support via our contact form or email. We respond within 24 hours during beta. Include your account email and detailed description of the issue.",
        },
        {
          question: "Is my information secure?",
          answer:
            "Yes, we use industry-standard encryption, secure payment processing, and strict data protection. Recipient addresses are validated and encrypted for security.",
        },
        {
          question: "Can I import my contacts?",
          answer:
            "Yes, import from CSV files or connect with popular contact services. All imported addresses go through our validation system before cards can be sent.",
        },
      ],
    },
  ]

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
          <Badge className="bg-yellow-500 text-black px-3 py-1 text-sm mb-4">Help Center</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about Write Our Heart, including our fair use policies and anti-gaming
            measures.
          </p>
        </div>

        {/* Fair Use Notice */}
        <Card className="bg-red-900/20 border border-red-700 mb-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-6 w-6 text-red-400" />
              <h3 className="text-xl font-bold text-red-400">Fair Use Policy</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div>
                <p>• Beta pricing requires continuous subscription</p>
                <p>• Early cancellation fees apply for heavy usage</p>
                <p>• One account per person/business</p>
              </div>
              <div>
                <p>• 3 cards max per recipient address/month</p>
                <p>• Address validation required</p>
                <p>• Cards expire after 3 months</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="bg-gray-900 border border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl text-yellow-500">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.questions.map((faq, questionIndex) => (
                  <Collapsible key={questionIndex}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                      <span className="font-medium text-white">{faq.question}</span>
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 bg-gray-700/80 rounded-b-lg">
                      <p className="text-gray-100 leading-relaxed">{faq.answer}</p>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-black border-0">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-lg mb-6">
                Our support team is here to help you understand our policies and get the most out of Write Our Heart.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-black hover:bg-gray-800 text-white">Contact Support</Button>
                </Link>
                <Link href="/beta-signup">
                  <Button variant="outline" className="border-black text-black hover:bg-black/10">
                    Join Beta Program
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
