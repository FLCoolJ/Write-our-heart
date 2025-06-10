import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ChevronDown } from "lucide-react"
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
            "Simply click the 'Join Beta' button on our homepage and fill out the signup form. We'll send you an invitation with access details within 24-48 hours.",
        },
        {
          question: "What's included in the beta program?",
          answer:
            "Beta users get early access to our platform, the ability to create and send personalized poetry cards, and special beta pricing. You'll also help shape our service with your feedback.",
        },
        {
          question: "Is there a cost for the beta program?",
          answer:
            "Yes, we offer two subscription tiers for beta: Individual ($4.99/month for 4 cards) and Enterprise ($17.99/month for 8-12 cards). All plans include US postage and envelopes.",
        },
      ],
    },
    {
      title: "Card Creation & Delivery",
      questions: [
        {
          question: "How does the personalized poetry work?",
          answer:
            "You provide details about the recipient, occasion, and your relationship. Our program creates custom poetry based on this information, which we then format into beautiful greeting cards.",
        },
        {
          question: "What occasions do you support?",
          answer:
            "We support all major occasions including birthdays, anniversaries, Valentine's Day, Mother's Day, graduations, weddings, sympathy, thank you cards, and more. You can also create cards for any custom occasion.",
        },
        {
          question: "Can I edit the poetry before sending?",
          answer:
            "At this time, our team handles all poetry creation and editing. When we launch, Enterprise subscribers will have the ability to request edits to their poetry before finalizing cards.",
        },
      ],
    },
    {
      title: "Delivery & Timing",
      questions: [
        {
          question: "How long does delivery take?",
          answer:
            "We print and mail cards every Tuesday. Cards ordered by Monday will be printed that week and typically arrive within 3-5 business days via USPS.",
        },
        {
          question: "Can I schedule cards in advance?",
          answer:
            "Yes! You can create cards and schedule them to be sent on specific dates. This is perfect for birthdays, anniversaries, and other recurring occasions.",
        },
        {
          question: "Do you deliver internationally?",
          answer:
            "Currently, we only deliver within the United States. International delivery is planned for future releases.",
        },
      ],
    },
    {
      title: "Poetry & Personalization",
      questions: [
        {
          question: "How personal is the poetry?",
          answer:
            "Very personal! The poetry is generated based on your specific relationship details, shared memories, and the recipient's interests that you provide.",
        },
        {
          question: "What if I don't like the generated poetry?",
          answer:
            "During the beta, our team can make adjustments to ensure you're satisfied with your cards. After launch, Enterprise subscribers will have self-service editing capabilities to refine their poetry.",
        },
        {
          question: "Can I save favorite poems for future use?",
          answer: "Yes, you can save poems and card templates to reuse or modify for future occasions.",
        },
      ],
    },
    {
      title: "Account & Billing",
      questions: [
        {
          question: "How does billing work?",
          answer:
            "We offer two subscription tiers: Individual ($4.99/month for 4 cards) and Enterprise ($17.99/month for 8-12 cards). Beta subscribers lock in these special rates for 12 months after launch.",
        },
        {
          question: "Can I cancel anytime?",
          answer:
            "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your current billing period.",
        },
        {
          question: "What happens to my data if I cancel?",
          answer:
            "Your account data is preserved for 90 days after cancellation in case you want to reactivate. After that, it's permanently deleted.",
        },
      ],
    },
    {
      title: "Technical Support",
      questions: [
        {
          question: "What if I have technical issues?",
          answer:
            "Contact our support team through the contact form or email us directly. We typically respond within 24 hours during the beta period.",
        },
        {
          question: "Is my personal information secure?",
          answer:
            "Yes, we use industry-standard encryption and security measures to protect your personal information and payment details.",
        },
        {
          question: "Can I import contacts from other services?",
          answer:
            "Yes, you can import contacts from CSV files or connect with popular contact services to easily add your recipients.",
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
            Find answers to common questions about Write Our Heart. Can't find what you're looking for? Contact our
            support team.
          </p>
        </div>

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
              <p className="text-lg mb-6">Our support team is here to help you get the most out of Write Our Heart.</p>
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
