"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CancelPage() {
  const router = useRouter()

  useEffect(() => {
    // Simulate cancellation process
    const timer = setTimeout(() => {
      alert("Your subscription has been cancelled. You will retain access until the end of your current billing cycle.")
      router.push("/")
    }, 2000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardContent className="p-8 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-lg mb-4">Cancelling your subscription...</p>
          <Button onClick={() => router.push("/")} variant="outline">
            Return Home
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
