import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Write Our Heart",
  description: "Latest articles about greeting cards and special occasions.",
}

export default function BlogPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600">Latest articles about greeting cards and special occasions</p>
        </div>

        {/* Featured Article */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2 h-64 md:h-auto bg-gray-200 flex items-center justify-center">
              <div className="text-gray-500 text-center">
                <div className="w-16 h-16 mx-auto mb-2 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-2xl">📝</span>
                </div>
                <p>Featured Image</p>
              </div>
            </div>
            <div className="p-8 md:w-1/2">
              <div className="text-yellow-500 font-semibold text-sm uppercase tracking-wide mb-2">Featured Article</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">The Art of Personalized Greeting Cards</h2>
              <p className="text-gray-600 mb-4">
                Discover how personalized greeting cards can strengthen relationships and create lasting memories in our
                digital age.
              </p>
              <p className="text-gray-500 text-sm mb-4">May 28, 2024</p>
              <Link
                href="/blog/art-of-personalized-greeting-cards"
                className="inline-block bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Post 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <div className="text-gray-500 text-center">
                <div className="w-12 h-12 mx-auto mb-2 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <span className="text-white">🎉</span>
                </div>
                <p>Article Image</p>
              </div>
            </div>
            <div className="p-6">
              <div className="text-yellow-500 font-semibold text-sm uppercase tracking-wide mb-2">Inspiration</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">5 Occasions You Shouldn't Miss</h3>
              <p className="text-gray-600 mb-3">
                Beyond birthdays and holidays: important moments that deserve a special greeting card.
              </p>
              <p className="text-gray-500 text-sm mb-4">May 21, 2024</p>
              <Link
                href="/blog/five-occasions-you-shouldnt-miss"
                className="text-yellow-500 hover:text-yellow-600 font-medium"
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* Post 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <div className="text-gray-500 text-center">
                <div className="w-12 h-12 mx-auto mb-2 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <span className="text-white">🖨️</span>
                </div>
                <p>Article Image</p>
              </div>
            </div>
            <div className="p-6">
              <div className="text-yellow-500 font-semibold text-sm uppercase tracking-wide mb-2">
                Behind the Scenes
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Printing Process</h3>
              <p className="text-gray-600 mb-3">
                Take a look at how we bring your personalized greeting cards to life with quality printing.
              </p>
              <p className="text-gray-500 text-sm mb-4">May 14, 2024</p>
              <Link
                href="/blog/behind-the-scenes-printing-process"
                className="text-yellow-500 hover:text-yellow-600 font-medium"
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* Post 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <div className="text-gray-500 text-center">
                <div className="w-12 h-12 mx-auto mb-2 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <span className="text-white">💝</span>
                </div>
                <p>Article Image</p>
              </div>
            </div>
            <div className="p-6">
              <div className="text-yellow-500 font-semibold text-sm uppercase tracking-wide mb-2">Customer Stories</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Spotlight: Sarah's Story</h3>
              <p className="text-gray-600 mb-3">
                How one customer used Write Our Heart to reconnect with family across the country.
              </p>
              <p className="text-gray-500 text-sm mb-4">May 7, 2024</p>
              <Link
                href="/blog/customer-spotlight-sarahs-story"
                className="text-yellow-500 hover:text-yellow-600 font-medium"
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-gray-100 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-6">Get the latest articles and tips delivered to your inbox.</p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="bg-yellow-500 text-white px-6 py-2 rounded-r-lg hover:bg-yellow-600 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
