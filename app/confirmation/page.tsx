"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Confirmation() {
  const router = useRouter()
  const [heartName, setHeartName] = useState("")

  useEffect(() => {
    // Get the name of the last added heart
    const hearts = JSON.parse(localStorage.getItem("hearts") || "[]")
    if (hearts.length > 0) {
      setHeartName(hearts[hearts.length - 1].name)
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <Card className="border-green-200 shadow-lg">
          <CardContent className="pt-6 pb-6 text-center">
            <div className="mb-6 flex justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0TXCiT3mr4jJ3WNhADS0V5md6CJz3w.png"
                alt="Success - Heart Added"
                width={300}
                height={400}
                className="mx-auto rounded-lg"
              />
            </div>

            <h1 className="text-3xl font-bold text-black mb-2">Your Heart is added.</h1>
            <p className="text-gray-600 mb-6">
              {heartName ? `${heartName} has been` : "Your first Heart has been"} successfully added to your account.
            </p>

            <Button
              onClick={() => router.push("/my-hearts")}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
            >
              Start Sending Cards
            </Button>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">Your card will be created with care and delivered on time.</p>
        </div>
      </div>
    </div>
  )
}
