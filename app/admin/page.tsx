"use client"

import { useState, useEffect } from "react"

const AdminPage = () => {
  const [waitingListUsers, setWaitingListUsers] = useState([])
  const [websitePricingData, setWebsitePricingData] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch waiting list users
        const usersResponse = await fetch("/api/waiting-list-users")
        if (!usersResponse.ok) {
          throw new Error(`Failed to fetch waiting list users: ${usersResponse.status}`)
        }
        const usersData = await usersResponse.json()
        setWaitingListUsers(usersData)

        // Fetch website pricing data
        const pricingResponse = await fetch("/api/website-pricing")
        if (!pricingResponse.ok) {
          throw new Error(`Failed to fetch website pricing data: ${pricingResponse.status}`)
        }
        const pricingData = await pricingResponse.json()
        setWebsitePricingData(pricingData)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      {/* Waiting List Users Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Waiting List Users</h2>
        {waitingListUsers.length > 0 ? (
          <ul className="list-disc pl-5">
            {waitingListUsers.map((user) => (
              <li key={user.id}>{user.email}</li>
            ))}
          </ul>
        ) : (
          <p>No users on the waiting list.</p>
        )}
      </section>

      {/* Website Pricing Section */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Website Pricing</h2>
        {Object.keys(websitePricingData).length > 0 ? (
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Plan</th>
                <th className="px-4 py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(websitePricingData).map(([plan, price]) => (
                <tr key={plan}>
                  <td className="border px-4 py-2">{plan}</td>
                  <td className="border px-4 py-2">${price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No website pricing data available.</p>
        )}
      </section>
    </div>
  )
}

export default AdminPage
