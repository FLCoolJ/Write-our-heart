"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, User } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// Add this after the existing imports
import { getStripe } from "@/lib/stripe"

// Replace these with your actual Price IDs from Stripe Dashboard
const STRIPE_PRICES = {
  Individual: "price_1QQnJhP8m8aMJJJJJJJJJJJJ", // Replace with your Standard Beta Plan price ID
  Enterprise: "price_1QQnJhP8m8aMKKKKKKKKKKKK", // Replace with your Enterprise Beta Testing price ID
}

export default function LoginPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("login")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [plan, setPlan] = useState("Individual")
  const [companyName, setCompanyName] = useState("")
  const [companyAddress, setCompanyAddress] = useState("")
  const [companyPhone, setCompanyPhone] = useState("")
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null)
  const [error, setError] = useState("")
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [resetEmail, setResetEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would validate credentials against a backend
    if (email && password) {
      // Mock successful login - get existing user data
      const existingUser = JSON.parse(localStorage.getItem("user") || "{}")
      router.push("/my-hearts")
    } else {
      setError("Please enter both email and password")
    }
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    if (!email || !password || !name) {
      setError("Please fill in all required fields")
      setIsLoading(false)
      return
    }

    if (plan === "Enterprise" && (!companyName || !companyAddress || !companyPhone)) {
      setError("Please fill in all company information for Enterprise plan")
      setIsLoading(false)
      return
    }

    try {
      // Check if we're in preview mode (no API access)
      if (process.env.NODE_ENV === "development" || window.location.hostname.includes("vercel.app")) {
        console.log("Development/Preview mode: Skipping actual Stripe checkout")
        // Mock successful signup
        localStorage.setItem(
          "user",
          JSON.stringify({
            email,
            name: name.split(" ")[0],
            fullName: name,
            plan,
            cardsRemaining: plan === "Enterprise" ? 8 : 4,
            profilePhoto: profilePhoto ? URL.createObjectURL(profilePhoto) : null,
            ...(plan === "Enterprise" && {
              company: {
                name: companyName,
                address: companyAddress,
                phone: companyPhone,
              },
            }),
          }),
        )
        router.push("/onboarding-1")
        return
      }

      // Create Stripe checkout session
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId: STRIPE_PRICES[plan as keyof typeof STRIPE_PRICES],
          email,
          name,
          plan,
        }),
      })

      const { sessionId, error: apiError } = await response.json()

      if (apiError) {
        setError(apiError || "Failed to create checkout session")
        return
      }

      if (sessionId) {
        // Redirect to Stripe Checkout
        const stripe = await getStripe()

        if (stripe) {
          const { error } = await stripe.redirectToCheckout({ sessionId })
          if (error) {
            setError("Payment failed. Please try again.")
          }
        } else {
          setError("Stripe is not available. Please try again later.")
        }
      } else {
        setError("Failed to create checkout session")
      }
    } catch (error) {
      console.error("Signup error:", error)
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would trigger a password reset email
    if (resetEmail) {
      setShowForgotPassword(false)
      // Show success message or redirect
    }
  }

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setProfilePhoto(file)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-black">Write Our Heart</h1>
          <p className="text-gray-600">Personalized greeting cards made simple</p>
        </div>

        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card>
              <CardHeader className="bg-gradient-to-r from-yellow-400 to-yellow-500">
                <CardTitle className="text-black">Login</CardTitle>
                <CardDescription className="text-gray-700">
                  Enter your credentials to access your account
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleLogin}>
                <CardContent className="pt-6">
                  {error && (
                    <Alert variant="destructive" className="mb-4">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col">
                  <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                    Login
                  </Button>
                </CardFooter>
              </form>
            </Card>

            <div className="mt-4">
              <Dialog open={showForgotPassword} onOpenChange={setShowForgotPassword}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full text-black border-gray-300">
                    Forgot Password?
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Reset Password</DialogTitle>
                    <DialogDescription>
                      Enter your email address and we'll send you a link to reset your password.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleResetPassword} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="reset-email">Email</Label>
                      <Input
                        id="reset-email"
                        type="email"
                        placeholder="your@email.com"
                        value={resetEmail}
                        onChange={(e) => setResetEmail(e.target.value)}
                        required
                      />
                    </div>
                    <DialogFooter>
                      <Button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                        Send Reset Link
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </TabsContent>

          <TabsContent value="signup">
            <Card>
              <CardHeader className="bg-gradient-to-r from-yellow-400 to-yellow-500">
                <CardTitle className="text-black">Create an Account</CardTitle>
                <CardDescription className="text-gray-700">Sign up to start sending personalized cards</CardDescription>
              </CardHeader>
              <form onSubmit={handleSignup}>
                <CardContent className="pt-6 space-y-4">
                  {error && (
                    <Alert variant="destructive" className="mb-4">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  {/* Personal Information */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <Label className="text-sm">Profile Photo</Label>
                        <div className="relative">
                          <div className="w-12 h-12 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50">
                            {profilePhoto ? (
                              <img
                                src={URL.createObjectURL(profilePhoto) || "/placeholder.svg"}
                                alt="Profile"
                                className="w-full h-full rounded-full object-cover"
                              />
                            ) : (
                              <User className="h-6 w-6 text-gray-400" />
                            )}
                          </div>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handlePhotoUpload}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-password">Password</Label>
                      <Input
                        id="signup-password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Plan Selection */}
                  <div className="space-y-3">
                    <Label>Choose Your Plan</Label>
                    <RadioGroup value={plan} onValueChange={setPlan}>
                      <div className="flex items-center space-x-2 p-3 border rounded-lg">
                        <RadioGroupItem value="Individual" id="individual" />
                        <Label htmlFor="individual" className="flex-1">
                          <div className="flex justify-between">
                            <div>
                              <div className="font-medium">Individual Plan</div>
                              <div className="text-sm text-gray-500">Perfect for personal use</div>
                            </div>
                            <div className="text-right">
                              <div className="font-bold">$4.99/month</div>
                              <div className="text-sm text-gray-500">4 free cards</div>
                            </div>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 border rounded-lg">
                        <RadioGroupItem value="Enterprise" id="enterprise" />
                        <Label htmlFor="enterprise" className="flex-1">
                          <div className="flex justify-between">
                            <div>
                              <div className="font-medium">Enterprise Plan</div>
                              <div className="text-sm text-gray-500">For businesses and teams</div>
                            </div>
                            <div className="text-right">
                              <div className="font-bold">$17.99/month</div>
                              <div className="text-sm text-gray-500">8 free cards</div>
                            </div>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Company Information for Enterprise */}
                  {plan === "Enterprise" && (
                    <div className="space-y-4 p-4 bg-blue-50 rounded-lg">
                      <h3 className="font-medium text-blue-900">Company Information</h3>
                      <div className="space-y-2">
                        <Label htmlFor="company-name">Company Name</Label>
                        <Input
                          id="company-name"
                          placeholder="Your Company Inc."
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company-address">Company Address</Label>
                        <Input
                          id="company-address"
                          placeholder="123 Business St, City, State 12345"
                          value={companyAddress}
                          onChange={(e) => setCompanyAddress(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company-phone">Company Phone</Label>
                        <Input
                          id="company-phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                          value={companyPhone}
                          onChange={(e) => setCompanyPhone(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <Button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
                    disabled={isLoading}
                  >
                    {isLoading ? "Processing..." : "Sign Up & Subscribe"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
