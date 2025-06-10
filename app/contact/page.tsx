"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Mail, Send, CheckCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill out all required fields")
      setIsSubmitting(false)
      return
    }

    // Simulate API call
    try {
      // In a real implementation, you would send the form data to your backend
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSubmitted(true)
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

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
          <Badge className="bg-yellow-500 text-black px-3 py-1 text-sm mb-4">Support</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions or need assistance? Our team is here to help you get the most out of Write Our Heart.
          </p>
        </div>

        {!isSubmitted ? (
          <Card className="bg-gray-900 border border-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl text-yellow-500">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              {error && (
                <div className="bg-red-900/30 border border-red-800 text-red-200 px-4 py-3 rounded mb-6">{error}</div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">
                      Your Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-700 text-white"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-700 text-white"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-white">
                    Subject
                  </Label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Billing Question">Billing Question</option>
                    <option value="Card Creation Help">Card Creation Help</option>
                    <option value="Delivery Issue">Delivery Issue</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">
                    Message <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[150px] bg-gray-800 border-gray-700 text-white"
                    required
                  />
                </div>

                <div className="flex justify-end">
                  <Button
                    type="submit"
                    className="bg-yellow-500 hover:bg-yellow-600 text-black"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="mr-2">Sending...</span>
                        <div className="animate-spin h-4 w-4 border-2 border-black border-t-transparent rounded-full"></div>
                      </>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Card className="bg-gray-900 border border-gray-800">
            <CardContent className="p-12 text-center">
              <CheckCircle className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">Message Sent Successfully!</h2>
              <p className="text-gray-300 mb-8">
                Thank you for contacting us. We've received your message and will get back to you within 24-48 hours.
              </p>
              <div className="flex justify-center">
                <Link href="/">
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Return to Homepage</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Contact Information */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-gray-900 border border-gray-800">
            <CardContent className="p-6 text-center">
              <Mail className="h-8 w-8 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Email</h3>
              <p className="text-gray-300">
                <a href="mailto:support@writeourheart.com" className="text-yellow-500 hover:underline">
                  support@writeourheart.com
                </a>
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border border-gray-800">
            <CardContent className="p-6 text-center">
              <CheckCircle className="h-8 w-8 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Support Hours</h3>
              <p className="text-gray-300">Monday - Friday</p>
              <p className="text-gray-300">9:00 AM - 5:00 PM EST</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border border-gray-800">
            <CardContent className="p-6 text-center">
              <CheckCircle className="h-8 w-8 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Response Time</h3>
              <p className="text-gray-300">We typically respond within</p>
              <p className="text-gray-300">24-48 hours</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
