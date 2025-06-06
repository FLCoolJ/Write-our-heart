"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Plus } from "lucide-react"

export default function Onboarding2() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <Heart className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <CardTitle className="text-2xl font-bold text-black">Let's add your first Heart</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <p className="text-gray-700 text-lg mb-6">
              A "Heart" is someone special in your life. Add their details so you can send them personalized cards for
              any occasion.
            </p>

            <div className="bg-white/20 rounded-lg p-6 mb-6">
              <Plus className="w-12 h-12 text-black mx-auto mb-4" />
              <p className="text-black font-medium">Start by adding someone you care about</p>
            </div>
          </div>

          <Button
            onClick={() => router.push("/add-heart")}
            className="w-full bg-black hover:bg-gray-800 text-white text-lg py-3"
          >
            Add Your First Heart
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
