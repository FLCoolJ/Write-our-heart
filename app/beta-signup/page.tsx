"use client"

import type React from "react"

import { useState } from "react"

export default function BetaSignupPage() {
  const [email, setEmail] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/waiting-list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setSuccess(true)
      } else {
        console.error("Signup failed")
        // Handle error appropriately (e.g., display an error message)
      }
    } catch (error) {
      console.error("Error during signup:", error)
      // Handle error appropriately
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Join the Write Our Heart Waiting List</h2>

        {success ? (
          <div className="text-green-500 text-center">
            Thank you! You've been added to the waiting list. We'll be in touch soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Join Waiting List
              </button>
            </div>
          </form>
        )}

        <div className="mt-4 text-center">
          <p className="text-gray-600 text-sm">Website Pricing Coming Soon!</p>
        </div>
      </div>
    </div>
  )
}
