"use client"

import { useState } from "react"

const PersonalizeMessagePage = () => {
  const [message, setMessage] = useState("")
  const [name, setName] = useState("")
  const [expiration, setExpiration] = useState("")
  const [cvv, setCvv] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [personalizedMessage, setPersonalizedMessage] = useState("")
  const [showWaitingListMessage, setShowWaitingListMessage] = useState(false)

  const handlePersonalize = () => {
    // Basic validation (expand as needed)
    if (!name || !expiration || !cvv || !cardNumber) {
      alert("Please fill in all card details.")
      return
    }

    // Simulate card validation (replace with actual API call)
    if (cardNumber.length !== 16) {
      alert("Invalid card number. Must be 16 digits.")
      return
    }

    if (cvv.length !== 3) {
      alert("Invalid CVV. Must be 3 digits.")
      return
    }

    const expirationRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/
    if (!expirationRegex.test(expiration)) {
      alert("Invalid expiration date. Use MM/YY format.")
      return
    }

    const [month, year] = expiration.split("/")
    const expiryDate = new Date(`20${year}`, month - 1) // Month is 0-indexed
    const today = new Date()
    const validUntil = new Date(today.getFullYear(), today.getMonth() + 2, today.getDate()) // Card expires in 2 months

    if (expiryDate < validUntil) {
      alert("Your card has expired or will expire soon. Please use a valid card.")
      return
    }

    setPersonalizedMessage(`Hello ${name}, your message is: ${message}. Thank you for joining our waiting list!`)
  }

  const handleJoinWaitingList = () => {
    setShowWaitingListMessage(true)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Personalize Your Message</h1>

      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
          Message:
        </label>
        <textarea
          id="message"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Card Details:</label>
        <input
          type="text"
          placeholder="Card Number"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <div className="flex">
          <input
            type="text"
            placeholder="Expiration (MM/YY)"
            className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
            value={expiration}
            onChange={(e) => setExpiration(e.target.value)}
          />
          <input
            type="text"
            placeholder="CVV"
            className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handlePersonalize}
      >
        Personalize
      </button>

      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
        onClick={handleJoinWaitingList}
      >
        Join Waiting List
      </button>

      {personalizedMessage && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <p className="text-lg">{personalizedMessage}</p>
        </div>
      )}

      {showWaitingListMessage && (
        <div className="mt-4 p-4 bg-green-100 rounded">
          <p className="text-lg">Thank you for joining our waiting list! We will notify you when we are ready.</p>
        </div>
      )}

      <div className="mt-4">
        <p>Our website pricing is designed to be affordable and accessible.</p>
      </div>
    </div>
  )
}

export default PersonalizeMessagePage
