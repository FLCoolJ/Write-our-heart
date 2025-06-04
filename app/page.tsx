"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function SplashScreen() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/login")
    }, 5000) // 5 seconds as requested

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-yellow-400 to-yellow-500">
      <div className="text-center">
        <div className="mb-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Symbol-KnzztGcDroWkNGwT9RfLPHEFDvjy6y.png"
            alt="Write Our Heart Logo"
            width={150}
            height={150}
            className="mx-auto"
          />
        </div>
        <h1 className="text-4xl font-bold text-black mb-4">Welcome to Write Our Heart</h1>
        <p className="text-xl text-black mb-8">Loading...</p>
        <div className="w-64 h-2 bg-gray-200 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-black animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
