"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Onboarding2() {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Symbol-KnzztGcDroWkNGwT9RfLPHEFDvjy6y.png"
            alt="Write Our Heart Logo"
            width={100}
            height={100}
            className="mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold text-black">Let's Get Started!</h1>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 text-center">
          <div className="mb-6">
            <div className="bg-yellow-100 inline-flex p-4 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-yellow-600"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-black mb-2">Add Your First Heart</h2>
            <p className="text-gray-600 mb-6">
              A "Heart" is someone special you want to send cards to. Let's add your first recipient to get started.
            </p>
          </div>

          <Button
            onClick={() => router.push("/add-heart")}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
          >
            Add My First Heart
          </Button>
        </div>

        <div className="text-center text-gray-500 text-sm">
          <p>You'll be able to add more Hearts later.</p>
        </div>
      </div>
    </div>
  )
}
