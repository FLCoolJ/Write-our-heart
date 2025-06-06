"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Heart, ArrowLeft } from "lucide-react"

export default function PersonalizeMessage() {
  const router = useRouter()
  const [heartData, setHeartData] = useState<any>(null)
  const [tone, setTone] = useState("")
  const [message, setMessage] = useState("")
  const [interests, setInterests] = useState("")

  useEffect(() => {
    const stored = localStorage.getItem("currentHeart")
    if (stored) {
      setHeartData(JSON.parse(stored))
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (message.split(" ").length < 50) {
      alert("Please write at least 50 words in your personal message.")
      return
    }

    // Update heart data with personalization
    const updatedHeart = {
      ...heartData,
      tone,
      message,
      interests,
      id: Date.now(), // Simple ID generation
    }

    // Store in localStorage (in a real app, this would be saved to a database)
    const existingHearts = JSON.parse(localStorage.getItem("hearts") || "[]")
    existingHearts.push(updatedHeart)
    localStorage.setItem("hearts", JSON.stringify(existingHearts))

    router.push("/confirmation")
  }

  const wordCount = message.split(" ").filter((word) => word.length > 0).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-yellow-500 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center mb-6">
          <Button variant="ghost" onClick={() => router.back()} className="text-black hover:bg-black/10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>

        <Card>
          <CardHeader className="text-center">
            <Heart className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <CardTitle className="text-2xl font-bold text-black">Personalize Message for {heartData?.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <Label className="text-lg font-semibold">Preferred Tone</Label>
                <RadioGroup value={tone} onValueChange={setTone} className="grid grid-cols-2 gap-4">
                  {["Serious", "Inspirational", "Playful", "Informal", "Heartfelt", "Humorous", "Persuasive"].map(
                    (toneOption) => (
                      <div key={toneOption} className="flex items-center space-x-2">
                        <RadioGroupItem value={toneOption.toLowerCase()} id={toneOption.toLowerCase()} />
                        <Label htmlFor={toneOption.toLowerCase()}>{toneOption}</Label>
                      </div>
                    ),
                  )}
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-lg font-semibold">
                  Personal Message (minimum 50 words) *
                </Label>
                <Textarea
                  id="message"
                  placeholder="Write a heartfelt message for your loved one..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[120px]"
                  required
                />
                <p className={`text-sm ${wordCount >= 50 ? "text-green-600" : "text-red-500"}`}>
                  Word count: {wordCount}/50 minimum
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="interests" className="text-lg font-semibold">
                  Their Interests
                </Label>
                <Input
                  id="interests"
                  placeholder="e.g., gardening, cooking, reading, sports..."
                  value={interests}
                  onChange={(e) => setInterests(e.target.value)}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black text-lg py-3"
                disabled={!tone || wordCount < 50}
              >
                Continue
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
