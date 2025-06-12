"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, XCircle } from "lucide-react"

export default function VerifyEmailPage() {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [message, setMessage] = useState("")
  const searchParams = useSearchParams()
  const token = searchParams.get("token")

  useEffect(() => {
    if (!token) {
      setStatus("error")
      setMessage("Invalid verification link")
      return
    }

    fetch("/api/verify-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.valid) {
          setStatus("success")
          setMessage("Email verified successfully!")
        } else {
          setStatus("error")
          setMessage(data.error || "Verification failed")
        }
      })
      .catch(() => {
        setStatus("error")
        setMessage("Verification failed")
      })
  }, [token])

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <Card className="bg-gray-900 border-gray-800 max-w-md w-full">
        <CardContent className="p-8 text-center">
          {status === "loading" && (
            <div>
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto mb-4"></div>
              <p>Verifying your email...</p>
            </div>
          )}

          {status === "success" && (
            <div>
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold mb-2">Email Verified!</h1>
              <p className="text-gray-300">{message}</p>
            </div>
          )}

          {status === "error" && (
            <div>
              <XCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold mb-2">Verification Failed</h1>
              <p className="text-gray-300">{message}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
