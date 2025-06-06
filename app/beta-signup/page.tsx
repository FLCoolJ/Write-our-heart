"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Heart, ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function BetaSignup() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    plan: "individual",
    heartsCount: "",
    interests: [],
    agreeTerms: false,
    agreePrivacy: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleCheckboxChange = (field: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [field]: checked }))
  }

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => {
      const interests = [...prev.interests]
      if (interests.includes(interest)) {
        return { ...prev, interests: interests.filter((i) => i !== interest) }
      } else {
        return { ...prev, interests: [...interests, interest] }
      }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="max-w-4xl mx-auto py-12 px-4">
        {!isSubmitted ? (
          <>
            <div className="mb-8">
              <Link href="/" className="inline-flex items-center text-white hover:text-yellow-500">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to home
              </Link>
            </div>

            <Card className="bg-black border border-gray-600">
              <CardHeader className="text-center">
                <Heart className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <CardTitle className="text-2xl font-bold text-white">Join the Write Our Heart Beta</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`flex items-center ${step >= 1 ? "text-yellow-500" : "text-gray-400"}`}>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${step >= 1 ? "bg-yellow-500 text-black" : "bg-gray-700 text-white"}`}
                      >
                        1
                      </div>
                      <span>Your Info</span>
                    </div>
                    <div className="flex-grow mx-4 h-px bg-gray-600"></div>
                    <div className={`flex items-center ${step >= 2 ? "text-yellow-500" : "text-gray-400"}`}>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${step >= 2 ? "bg-yellow-500 text-black" : "bg-gray-700 text-white"}`}
                      >
                        2
                      </div>
                      <span>Plan Selection</span>
                    </div>
                    <div className="flex-grow mx-4 h-px bg-gray-600"></div>
                    <div className={`flex items-center ${step >= 3 ? "text-yellow-500" : "text-gray-400"}`}>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${step >= 3 ? "bg-yellow-500 text-black" : "bg-gray-700 text-white"}`}
                      >
                        3
                      </div>
                      <span>Confirmation</span>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  {step === 1 && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="bg-gray-700 border-gray-600 text-white"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="bg-gray-700 border-gray-600 text-white"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-white">
                          What interests you about Write Our Heart? (Select all that apply)
                        </Label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {[
                            "Personalized poetry",
                            "Occasion reminders",
                            "Business branding",
                            "Convenience",
                            "Unique cards",
                            "International shipping",
                          ].map((interest) => (
                            <div key={interest} className="flex items-center space-x-2">
                              <Checkbox
                                id={interest.toLowerCase().replace(/\s+/g, "-")}
                                checked={formData.interests.includes(interest)}
                                onCheckedChange={() => handleInterestToggle(interest)}
                                className="data-[state=checked]:bg-yellow-500 data-[state=checked]:border-yellow-500"
                              />
                              <Label htmlFor={interest.toLowerCase().replace(/\s+/g, "-")} className="text-white">
                                {interest}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4">
                        <Button
                          type="button"
                          onClick={() => setStep(2)}
                          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
                          disabled={!formData.name || !formData.email}
                        >
                          Continue
                        </Button>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <Label className="text-white">Select Your Plan *</Label>
                        <RadioGroup
                          value={formData.plan}
                          onValueChange={(value) => handleInputChange("plan", value)}
                          className="space-y-4"
                        >
                          <div
                            className={`relative rounded-lg border p-4 ${formData.plan === "individual" ? "border-yellow-500 bg-yellow-500/10" : "border-gray-600 bg-gray-700"}`}
                          >
                            <RadioGroupItem
                              value="individual"
                              id="individual"
                              className="absolute right-4 top-4 data-[state=checked]:bg-yellow-500 data-[state=checked]:border-yellow-500"
                            />
                            <div className="space-y-2">
                              <Label htmlFor="individual" className="text-lg font-medium text-white">
                                Individual Plan
                              </Label>
                              <p className="text-white">$4.99/month - 4 free cards</p>
                              <ul className="text-sm text-white space-y-1">
                                <li>• US postage included</li>
                                <li>• Personalized poetry</li>
                                <li>• Occasion reminders</li>
                              </ul>
                            </div>
                          </div>

                          <div
                            className={`relative rounded-lg border p-4 ${formData.plan === "vip" ? "border-yellow-500 bg-yellow-500/10" : "border-gray-600 bg-gray-700"}`}
                          >
                            <RadioGroupItem
                              value="vip"
                              id="vip"
                              className="absolute right-4 top-4 data-[state=checked]:bg-yellow-500 data-[state=checked]:border-yellow-500"
                            />
                            <div className="space-y-2">
                              <Label htmlFor="vip" className="text-lg font-medium text-white">
                                VIP Plan
                              </Label>
                              <p className="text-white">$9.99/month - 8 free cards</p>
                              <ul className="text-sm text-white space-y-1">
                                <li>• US postage included</li>
                                <li>• Personalized poetry</li>
                                <li>• Occasion reminders</li>
                                <li>• 2 free international cards</li>
                              </ul>
                            </div>
                          </div>

                          <div
                            className={`relative rounded-lg border p-4 ${formData.plan === "enterprise" ? "border-yellow-500 bg-yellow-500/10" : "border-gray-600 bg-gray-700"}`}
                          >
                            <RadioGroupItem
                              value="enterprise"
                              id="enterprise"
                              className="absolute right-4 top-4 data-[state=checked]:bg-yellow-500 data-[state=checked]:border-yellow-500"
                            />
                            <div className="space-y-2">
                              <Label htmlFor="enterprise" className="text-lg font-medium text-white">
                                Enterprise Plan
                              </Label>
                              <p className="text-white">$17.99/month - 8-12 free cards</p>
                              <ul className="text-sm text-white space-y-1">
                                <li>• US postage included</li>
                                <li>• Personalized poetry</li>
                                <li>• Occasion reminders</li>
                                <li>• 4 free international cards</li>
                                <li>• Logo placement</li>
                              </ul>
                            </div>
                          </div>
                        </RadioGroup>
                      </div>

                      {formData.plan === "enterprise" && (
                        <div className="space-y-2">
                          <Label htmlFor="heartsCount" className="text-white">
                            How many team members will use this account? *
                          </Label>
                          <Input
                            id="heartsCount"
                            type="number"
                            min="1"
                            value={formData.heartsCount}
                            onChange={(e) => handleInputChange("heartsCount", e.target.value)}
                            className="bg-gray-700 border-gray-600 text-white"
                            required
                          />
                          <p className="text-sm text-white">
                            This helps us determine your card allocation. Enterprise accounts receive 8-12 cards based
                            on team size.
                          </p>
                        </div>
                      )}

                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button
                          type="button"
                          onClick={() => setStep(1)}
                          variant="outline"
                          className="border-gray-600 text-white hover:bg-gray-700"
                        >
                          Back
                        </Button>
                        <Button
                          type="button"
                          onClick={() => setStep(3)}
                          className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black"
                          disabled={formData.plan === "enterprise" && !formData.heartsCount}
                        >
                          Continue
                        </Button>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-6">
                      <div className="bg-gray-700 rounded-lg p-6 space-y-4 border border-gray-600">
                        <h3 className="text-lg font-medium text-white">Review Your Information</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-yellow-300">Name</p>
                            <p className="text-white">{formData.name}</p>
                          </div>
                          <div>
                            <p className="text-sm text-yellow-300">Email</p>
                            <p className="text-white">{formData.email}</p>
                          </div>
                          <div>
                            <p className="text-sm text-yellow-300">Selected Plan</p>
                            <p className="text-white capitalize">{formData.plan} Plan</p>
                          </div>
                          <div>
                            <p className="text-sm text-yellow-300">Monthly Price</p>
                            <p className="text-white">
                              {formData.plan === "individual" ? "$4.99" : formData.plan === "vip" ? "$9.99" : "$17.99"}
                            </p>
                          </div>
                        </div>

                        <div className="pt-2">
                          <p className="text-sm text-yellow-300">Interests</p>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {formData.interests.length > 0 ? (
                              formData.interests.map((interest) => (
                                <span key={interest} className="bg-gray-800 text-white px-2 py-1 rounded-full text-xs">
                                  {interest}
                                </span>
                              ))
                            ) : (
                              <span className="text-gray-400">None selected</span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="terms"
                            checked={formData.agreeTerms}
                            onCheckedChange={(checked) => handleCheckboxChange("agreeTerms", checked === true)}
                            className="data-[state=checked]:bg-yellow-500 data-[state=checked]:border-yellow-500"
                            required
                          />
                          <Label htmlFor="terms" className="text-white">
                            I agree to the{" "}
                            <Link href="/terms" className="text-yellow-500 hover:underline">
                              Terms of Service
                            </Link>
                          </Label>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="privacy"
                            checked={formData.agreePrivacy}
                            onCheckedChange={(checked) => handleCheckboxChange("agreePrivacy", checked === true)}
                            className="data-[state=checked]:bg-yellow-500 data-[state=checked]:border-yellow-500"
                            required
                          />
                          <Label htmlFor="privacy" className="text-white">
                            I agree to the{" "}
                            <Link href="/privacy" className="text-yellow-500 hover:underline">
                              Privacy Policy
                            </Link>
                          </Label>
                        </div>
                      </div>

                      <div className="pt-2 text-sm text-white">
                        <p>
                          By joining the beta, you'll lock in special pricing for 12 months after launch. No credit card
                          required during beta signup.
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button
                          type="button"
                          onClick={() => setStep(2)}
                          variant="outline"
                          className="border-gray-600 text-white hover:bg-gray-700"
                        >
                          Back
                        </Button>
                        <Button
                          type="submit"
                          className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black"
                          disabled={!formData.agreeTerms || !formData.agreePrivacy || isSubmitting}
                        >
                          {isSubmitting ? "Submitting..." : "Join Beta"}
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </>
        ) : (
          <Card className="bg-black border border-gray-600">
            <CardContent className="p-8 text-center">
              <CheckCircle className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4 text-white">You're on the List!</h2>
              <p className="text-white mb-6">
                Thank you for joining the Write Our Heart beta program. We've received your information and will be in
                touch soon with next steps.
              </p>
              <div className="bg-gray-700 rounded-lg p-6 mb-6 text-left border border-gray-600">
                <h3 className="text-lg font-medium mb-4 text-white">What happens next?</h3>
                <ol className="space-y-2 text-white">
                  <li className="flex items-start">
                    <span className="bg-yellow-500 text-black rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
                      1
                    </span>
                    <span>You'll receive a confirmation email within the next few minutes.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-yellow-500 text-black rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
                      2
                    </span>
                    <span>Our team will review your application and send you beta access instructions.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-yellow-500 text-black rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
                      3
                    </span>
                    <span>You'll be able to start creating personalized poetry cards!</span>
                  </li>
                </ol>
              </div>
              <Link href="/">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Return to Homepage</Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>

      <Footer />
    </div>
  )
}
