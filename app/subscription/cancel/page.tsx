"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { XCircle } from "lucide-react"

export default function SubscriptionCancelPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <XCircle className="h-16 w-16 text-gray-500 mx-auto mb-4" />
          <CardTitle className="text-2xl">Subscription Cancelled</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p>You've cancelled the subscription process. No charges have been made.</p>
          <p className="text-sm text-gray-600">
            If you have any questions or need assistance, please contact our support team.
          </p>
          <div className="pt-4 space-y-2">
            <Button
              onClick={() => router.push("/subscription")}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
            >
              Try Again
            </Button>
            <Button variant="outline" onClick={() => router.push("/")} className="w-full">
              Return to Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
