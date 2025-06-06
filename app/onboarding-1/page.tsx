"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Send, Calendar, Users } from "lucide-react"

export default function Onboarding1() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <Heart className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <CardTitle className="text-3xl font-bold text-black">Welcome to Write Our Heart!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-center text-gray-700 text-lg">
            Simplify your card-sending experience with personalized, meaningful messages.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Send className="w-6 h-6 text-yellow-600" />
              <span className="text-gray-700">Create personalized greeting cards</span>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="w-6 h-6 text-yellow-600" />
              <span className="text-gray-700">Schedule cards for special occasions</span>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="w-6 h-6 text-yellow-600" />
              <span className="text-gray-700">Manage all your loved ones in one place</span>
            </div>
          </div>

          <Button
            onClick={() => router.push("/onboarding-2")}
            className="w-full bg-black hover:bg-gray-800 text-white text-lg py-3"
          >
            Next
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
