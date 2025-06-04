"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft } from "lucide-react"
import { Progress } from "@/components/ui/progress"

const tones = [
  { id: "serious", label: "Serious", description: "Formal and thoughtful" },
  { id: "inspirational", label: "Inspirational", description: "Uplifting and motivational" },
  { id: "playful", label: "Playful", description: "Light-hearted and fun" },
  { id: "informal", label: "Informal", description: "Casual and conversational" },
  { id: "heartfelt", label: "Heartfelt", description: "Emotional and sincere" },
  { id: "humorous", label: "Humorous", description: "Funny and entertaining" },
  { id: "persuasive", label: "Persuasive", description: "Convincing and compelling" },
]

export default function PersonalizeMessage() {
  const router = useRouter()
  const [tone, setTone] = useState("")
  const [message, setMessage] = useState("")
  const [interests, setInterests] = useState("")
  const [wordCount, setWordCount] = useState(0)
  const minWordCount = 50

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value
    setMessage(text)
    setWordCount(text.trim() ? text.trim().split(/\s+/).length : 0)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // In a real app, this would update the heart data in the database
    const hearts = JSON.parse(localStorage.getItem("hearts") || "[]")
    if (hearts.length > 0) {
      const lastHeart = hearts[hearts.length - 1]
      lastHeart.message = {
        tone,
        content: message,
        interests,
      }
      localStorage.setItem("hearts", JSON.stringify(hearts))
    }

    router.push("/confirmation")
  }

  const isEnterprise = false // This would be determined by user subscription
  const requiredWordCount = isEnterprise ? 30 : 50
  const wordCountPercentage = Math.min((wordCount / requiredWordCount) * 100, 100)

  return (
    <div className="container max-w-2xl mx-auto py-8 px-4">
      <div className="mb-6">
        <Button variant="ghost" onClick={() => router.back()} className="mb-4">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <h1 className="text-3xl font-bold text-black">Personalize Your Message</h1>
        <p className="text-gray-600">Add details to create a meaningful card</p>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader className="bg-gradient-to-r from-yellow-400 to-yellow-500">
            <CardTitle className="text-black">Message Details</CardTitle>
            <CardDescription className="text-gray-700">
              Help us create the perfect message for your recipient
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="space-y-3">
                <Label>Preferred Tone</Label>
                <RadioGroup value={tone} onValueChange={setTone} className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {tones.map((t) => (
                    <div key={t.id} className="flex items-center space-x-2">
                      <RadioGroupItem value={t.id} id={t.id} />
                      <Label htmlFor={t.id} className="flex flex-col">
                        <span>{t.label}</span>
                        <span className="text-xs text-gray-500">{t.description}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label htmlFor="message">Personal Message</Label>
                  <span className={`text-sm ${wordCount >= requiredWordCount ? "text-green-600" : "text-gray-500"}`}>
                    {wordCount}/{requiredWordCount} words minimum
                  </span>
                </div>
                <Textarea
                  id="message"
                  value={message}
                  onChange={handleMessageChange}
                  placeholder={`Write a personal message (minimum ${requiredWordCount} words)`}
                  className="min-h-[200px]"
                  required
                />
                <Progress value={wordCountPercentage} className="h-1" />
              </div>

              <div className="space-y-3">
                <Label htmlFor="interests">Recipient's Interests</Label>
                <Textarea
                  id="interests"
                  value={interests}
                  onChange={(e) => setInterests(e.target.value)}
                  placeholder="What does this person enjoy? (e.g., gardening, cooking, sports, music)"
                  className="min-h-[100px]"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              disabled={wordCount < requiredWordCount || !tone}
              className="w-full bg-black hover:bg-gray-800 text-white"
            >
              Continue
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}
