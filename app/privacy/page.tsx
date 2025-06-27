import Link from "next/link"
import { ArrowLeft, Shield, Lock, Eye, Database } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/footer"

export default function PrivacyPage() {
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
          <Badge className="bg-yellow-500 text-black px-3 py-1 text-sm mb-4">Privacy</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Last updated: January 15, 2025</p>
        </div>

        {/* Security Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-green-900/20 border border-green-700">
            <CardContent className="p-6 text-center">
              <Lock className="h-8 w-8 text-green-400 mx-auto mb-3" />
              <h3 className="font-bold text-green-400 mb-2">256-bit SSL</h3>
              <p className="text-sm text-gray-300">Bank-level encryption</p>
            </CardContent>
          </Card>

          <Card className="bg-blue-900/20 border border-blue-700">
            <CardContent className="p-6 text-center">
              <Shield className="h-8 w-8 text-blue-400 mx-auto mb-3" />
              <h3 className="font-bold text-blue-400 mb-2">GDPR Compliant</h3>
              <p className="text-sm text-gray-300">EU privacy standards</p>
            </CardContent>
          </Card>

          <Card className="bg-purple-900/20 border border-purple-700">
            <CardContent className="p-6 text-center">
              <Eye className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <h3 className="font-bold text-purple-400 mb-2">No Data Sales</h3>
              <p className="text-sm text-gray-300">Never sold to third parties</p>
            </CardContent>
          </Card>

          <Card className="bg-yellow-900/20 border border-yellow-700">
            <CardContent className="p-6 text-center">
              <Database className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="font-bold text-yellow-400 mb-2">Data Control</h3>
              <p className="text-sm text-gray-300">Request deletion anytime</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gray-900 border border-gray-800">
          <CardContent className="p-8 prose prose-invert max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-yellow-500 mb-4">1. Information We Collect</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    <strong>Personal Information:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Email address (for account access and notifications)</li>
                    <li>Billing information (processed securely through Stripe)</li>
                    <li>Recipient addresses (for card delivery)</li>
                    <li>Card preferences and personalization details</li>
                  </ul>
                  <p>
                    <strong>Technical Information:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>IP addresses (for security and fraud prevention)</li>
                    <li>Browser type and device information</li>
                    <li>Usage patterns and service interactions</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-500 mb-4">2. How We Use Your Information</h2>
                <div className="space-y-4 text-gray-300">
                  <p>We use your information solely for:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <strong>Service Delivery:</strong> Creating and mailing personalized cards
                    </li>
                    <li>
                      <strong>Account Management:</strong> Processing payments and managing subscriptions
                    </li>
                    <li>
                      <strong>Communication:</strong> Sending order updates and service notifications
                    </li>
                    <li>
                      <strong>Security:</strong> Preventing fraud and ensuring fair usage
                    </li>
                    <li>
                      <strong>Improvement:</strong> Enhancing our service quality and features
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-500 mb-4">3. Data Security</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    <strong>Encryption:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>256-bit SSL/TLS encryption for all data transmission</li>
                    <li>Data encrypted at rest using industry-standard methods</li>
                    <li>Secure API connections with all third-party services</li>
                  </ul>
                  <p>
                    <strong>Payment Security:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>PCI DSS compliant payment processing through Stripe</li>
                    <li>No credit card information stored on our servers</li>
                    <li>Tokenized payment methods for recurring billing</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-500 mb-4">4. Address Validation and Security</h2>
                <div className="space-y-4 text-gray-300">
                  <p>For accurate delivery and security:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>All recipient addresses validated through USPS API</li>
                    <li>Addresses encrypted and stored securely</li>
                    <li>Suspicious address patterns flagged for review</li>
                    <li>Maximum 3 cards per recipient address per month</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-500 mb-4">5. Third-Party Services</h2>
                <div className="space-y-4 text-gray-300">
                  <p>We work with trusted partners:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <strong>Stripe:</strong> Payment processing (PCI DSS compliant)
                    </li>
                    <li>
                      <strong>USPS:</strong> Address validation and mail delivery
                    </li>
                    <li>
                      <strong>Printing Partners:</strong> Card production (data minimization)
                    </li>
                    <li>
                      <strong>Email Service:</strong> Transactional notifications only
                    </li>
                  </ul>
                  <p>
                    All partners are contractually bound to protect your data and use it only for specified services.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-500 mb-4">6. Data Retention</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    <strong>Active Accounts:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Personal data retained while account is active</li>
                    <li>Card history maintained for service quality</li>
                    <li>Unused card credits expire after 2 months</li>
                  </ul>
                  <p>
                    <strong>Closed Accounts:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Personal data deleted within 30 days of account closure</li>
                    <li>Financial records retained for 7 years (legal requirement)</li>
                    <li>Anonymized usage data may be retained for analytics</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-500 mb-4">7. Your Rights</h2>
                <div className="space-y-4 text-gray-300">
                  <p>Under GDPR and CCPA, you have the right to:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <strong>Access:</strong> Request a copy of your personal data
                    </li>
                    <li>
                      <strong>Rectification:</strong> Correct inaccurate information
                    </li>
                    <li>
                      <strong>Erasure:</strong> Request deletion of your data
                    </li>
                    <li>
                      <strong>Portability:</strong> Export your data in a readable format
                    </li>
                    <li>
                      <strong>Restriction:</strong> Limit how we process your data
                    </li>
                    <li>
                      <strong>Objection:</strong> Opt out of certain data processing
                    </li>
                  </ul>
                  <p>To exercise these rights, contact us at privacy@writeourheart.com</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-500 mb-4">8. Cookies and Tracking</h2>
                <div className="space-y-4 text-gray-300">
                  <p>We use minimal tracking:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <strong>Essential Cookies:</strong> Required for login and security
                    </li>
                    <li>
                      <strong>Analytics:</strong> Anonymous usage statistics (opt-out available)
                    </li>
                    <li>
                      <strong>No Advertising:</strong> We don't use advertising cookies or trackers
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-500 mb-4">9. International Data Transfers</h2>
                <p className="text-gray-300 leading-relaxed">
                  Your data is primarily stored in the United States. For EU residents, we ensure adequate protection
                  through standard contractual clauses and privacy frameworks compliant with GDPR requirements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-500 mb-4">10. Children's Privacy</h2>
                <p className="text-gray-300 leading-relaxed">
                  Our service is not intended for children under 13. We do not knowingly collect personal information
                  from children under 13. If you believe we have collected such information, please contact us
                  immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-500 mb-4">11. Changes to This Policy</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the
                  new policy on this page and updating the "Last updated" date. For significant changes, we will provide
                  additional notice via email.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-500 mb-4">12. Contact Us</h2>
                <div className="text-gray-300 leading-relaxed">
                  <p>For privacy-related questions or requests:</p>
                  <p className="mt-4">
                    <strong>Email:</strong> privacy@writeourheart.com
                    <br />
                    <strong>General Support:</strong> support@writeourheart.com
                    <br />
                    <strong>Contact Form:</strong>{" "}
                    <Link href="/contact" className="text-yellow-500 hover:underline">
                      writeourheart.com/contact
                    </Link>
                  </p>
                </div>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  )
}
