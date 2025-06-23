"use client"
import { useRouter } from "next/navigation"

const ConfirmationPage = () => {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-semibold text-center mb-4">Waiting List Confirmed</h1>
        <p className="text-gray-700 mb-4 text-center">Thank you for joining our waiting list!</p>
        <p className="text-gray-700 mb-4 text-center">
          We're excited to have you. We'll notify you when a spot opens up.
        </p>
        <p className="text-gray-700 mb-4 text-center">
          In the meantime, you can learn more about our features and pricing on our website.
        </p>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => router.push("/")}
          >
            Go to Website
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationPage
