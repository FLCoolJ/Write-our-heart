"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function SuccessPage() {
  const router = useRouter()

  useEffect(() => {
    // Optional: You can add a timer to redirect the user after a few seconds
    const timer = setTimeout(() => {
      router.push("/") // Redirect to the home page or a relevant page
    }, 5000)

    return () => clearTimeout(timer) // Clear the timer if the component unmounts
  }, [router])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-green-600 mb-4">Welcome to Write Our Heart!</h1>
        <p className="text-gray-700 mb-4">Thank you for subscribing! Your payment has been processed successfully.</p>
        <p className="text-gray-700 mb-4">You now have access to all website features.</p>
        <p className="text-gray-700 mb-4">Your subscription will be automatically renewed at the website pricing.</p>
        <p className="text-gray-700 mb-4">We're excited to have you on board!</p>
        <button
          onClick={() => router.push("/")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Join Waiting List
        </button>
      </div>
    </div>
  )
}
