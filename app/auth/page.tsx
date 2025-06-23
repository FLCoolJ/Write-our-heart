"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const AuthPage = () => {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      alert("Please enter your email.")
      return
    }

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsSubmitted(true)
    } catch (error: any) {
      alert("Something went wrong. Please try again.")
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Join Waiting List</CardTitle>
          <CardDescription className="text-center">Enter your email to join the waiting list.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          {!isSubmitted ? (
            <form onSubmit={handleSignIn}>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="your@email.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <Button className="w-full mt-4" type="submit">
                Join Waiting List
              </Button>
            </form>
          ) : (
            <div className="text-center">
              <p className="mb-4">Thank you! You've been added to the waiting list.</p>
              <Button className="w-full" onClick={() => (window.location.href = "/")}>
                Return Home
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default AuthPage
