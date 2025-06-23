"use client"

const MyHeartsPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4 text-gray-800">My Hearts</h1>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-700">Join Our Waiting List</h2>
        <p className="text-gray-600 mb-4">Be the first to know when Write Our Heart launches with our new pricing!</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="text-center p-4 bg-gray-100 rounded-lg">
            <h3 className="font-bold text-gray-700">Whisper Plan</h3>
            <p className="text-lg font-bold text-blue-600">$11.99/mo</p>
            <p className="text-sm text-gray-600">2 cards per month</p>
          </div>
          <div className="text-center p-4 bg-blue-100 rounded-lg border border-blue-500">
            <h3 className="font-bold text-gray-700">Heartbeat Plan</h3>
            <p className="text-lg font-bold text-blue-600">$19.99/mo</p>
            <p className="text-sm text-gray-600">4 cards per month</p>
          </div>
          <div className="text-center p-4 bg-gray-100 rounded-lg">
            <h3 className="font-bold text-gray-700">Legacy Plan</h3>
            <p className="text-lg font-bold text-blue-600">$34.99/mo</p>
            <p className="text-sm text-gray-600">7 cards per month</p>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://launch.writeourheart.com"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
          >
            Join Waiting List
          </a>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6 mt-8">
        <h2 className="text-xl font-semibold mb-2 text-gray-700">Coming Soon Features</h2>
        <p className="text-gray-600 mb-4">Cards expire after 2 months • Additional cards: $4.99 each</p>
        <p className="text-gray-600">All plans include US postage and personalized poetry.</p>
      </div>

      <div className="mt-8 text-center text-gray-500">
        <p>Powered by Write Our Heart</p>
      </div>
    </div>
  )
}

export default MyHeartsPage
