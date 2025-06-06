"use client"

import { useState } from "react"
import { X } from "lucide-react"
import Link from "next/link"

export default function BetaBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-yellow-500 text-black py-2 px-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="font-medium">🚀 Beta Access Available!</span>
          <span className="hidden md:inline ml-2">Lock in special pricing for 12 months after launch.</span>
        </div>
        <div className="flex items-center">
          <Link href="/beta-signup" className="underline font-medium mr-4">
            Join Now
          </Link>
          <button onClick={() => setIsVisible(false)} className="text-black hover:text-gray-800">
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
