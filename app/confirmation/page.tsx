"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, CheckCircle, Mail } from "lucide-react"

export default function Confirmation() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <CardTitle className="text-3xl font-bold text-black">You're all set!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-center">
          <div className="space-y-4">
            <Heart className="w-12 h-12 text-yellow-600 mx-auto" />
            <p className="text-gray-700 text-lg">Your Heart has been added successfully!</p>
            <div className="bg-white/20 rounded-lg p-4">
              <Mail className="w-8 h-8 text-black mx-auto mb-2" />
              <p className="text-black font-medium">
                You'll receive email confirmations when cards are scheduled and sent.
              </p>
            </div>
          </div>

          <Button
            onClick={() => router.push("/my-hearts")}
            className="w-full bg-black hover:bg-gray-800 text-white text-lg py-3"
          >
            Start Sending Cards
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
