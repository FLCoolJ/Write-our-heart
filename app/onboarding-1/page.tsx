"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Onboarding1() {
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
          <h1 className="text-3xl font-bold text-black">Welcome to Write Our Heart!</h1>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-yellow-100 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
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
              <div>
                <h3 className="font-semibold text-black">Personalized Messages</h3>
                <p className="text-gray-600">Create meaningful cards tailored to your loved ones.</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-yellow-100 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-yellow-600"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                  <path d="m9 16 2 2 4-4" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-black">Schedule Ahead</h3>
                <p className="text-gray-600">Never miss an important occasion again.</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-yellow-100 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-yellow-600"
                >
                  <path d="M21.2 8.4c.5.38.8.96.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h3.8a2 2 0 0 0 1.4-.6L12 4.8a2 2 0 0 1 1.4-.6h3.8a2 2 0 0 1 2 2v2.2Z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-black">Save Recipient Info</h3>
                <p className="text-gray-600">Store details for easy future sending.</p>
              </div>
            </div>
          </div>
        </div>

        <Button onClick={() => router.push("/onboarding-2")} className="w-full bg-black hover:bg-gray-800 text-white">
          Next
        </Button>
      </div>
    </div>
  )
}
