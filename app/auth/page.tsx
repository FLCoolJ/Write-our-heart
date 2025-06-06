"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AuthPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [showResetForm, setShowResetForm] = useState(false)
  const [isSignup, setIsSignup] = useState(false)

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.target as HTMLFormElement)
    const fullName = formData.get("fullName") as string

    if (fullName) {
      // Extract first name from full name for signup
      const firstName = fullName.split(" ")[0]
      localStorage.setItem("userName", firstName)
      localStorage.setItem("isFirstTime", "true")
      // Set initial free cards for new users
      localStorage.setItem("freeCards", "5") // 5 free cards for new users
      localStorage.setItem("referralCards", "0")
    } else {
      // For login, check if user exists
      localStorage.setItem("isFirstTime", "false")
    }

    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false)
      const isFirstTime = localStorage.getItem("isFirstTime") === "true"

      if (isFirstTime) {
        router.push("/onboarding-1")
      } else {
        router.push("/my-hearts")
      }
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <img src="/images/logo.png" alt="Write Our Heart Logo" className="w-12 h-12 mx-auto mb-4" />
          <CardTitle className="text-2xl font-bold">Write Our Heart</CardTitle>
          <CardDescription>Create personalized greeting cards for your loved ones</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" className="w-full" onValueChange={(value) => setIsSignup(value === "signup")}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <form onSubmit={handleAuth} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="Enter your email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" name="password" type="password" placeholder="Enter your password" required />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Login"}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form onSubmit={handleAuth} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" name="fullName" placeholder="Enter your full name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signupEmail">Email</Label>
                  <Input id="signupEmail" name="signupEmail" type="email" placeholder="Enter your email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signupPassword">Password</Label>
                  <Input
                    id="signupPassword"
                    name="signupPassword"
                    type="password"
                    placeholder="Create a password"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
                  disabled={isLoading}
                >
                  {isLoading ? "Creating account..." : "Sign Up"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          {/* Forgot Password Button - only show for login tab */}
          {!isSignup && !showResetForm && (
            <div className="mt-4">
              <Button
                variant="outline"
                onClick={() => setShowResetForm(true)}
                className="w-full bg-gray-100 hover:bg-gray-200 text-black border-gray-300"
              >
                Forgot Password?
              </Button>
            </div>
          )}

          {/* Reset Password Form */}
          {showResetForm && (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg border">
              <h3 className="text-lg font-semibold text-black mb-2">Reset Password</h3>
              <p className="text-sm text-gray-600 mb-4">Enter your email to reset your password</p>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="resetEmail">Email</Label>
                  <Input id="resetEmail" type="email" placeholder="Enter your email" required />
                </div>
                <div className="flex space-x-2">
                  <Button type="submit" className="flex-1 bg-gray-600 hover:bg-gray-700 text-white">
                    Send Reset Link
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setShowResetForm(false)} className="flex-1">
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
