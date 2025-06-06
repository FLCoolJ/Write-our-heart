import Link from "next/link"
import { ArrowLeft } from "lucide-react"

// Static blog post data
const blogPosts = {
  "art-of-personalized-greeting-cards": {
    title: "The Art of Personalized Greeting Cards",
    date: "May 28, 2024",
    author: "Emma Johnson",
    category: "Featured Article",
    content: `
      <p>In today's digital age, where communication is often reduced to quick texts and emoji-filled messages, the power of a physical, personalized greeting card stands out more than ever before.</p>
      
      <h2>The Personal Touch in a Digital World</h2>
      <p>When someone receives a personalized greeting card, they're not just receiving a piece of paper – they're receiving tangible evidence that someone took the time to think about them specifically. In a world where we're constantly bombarded with generic content, this level of personalization creates a meaningful connection that digital communication often lacks.</p>
      
      <p>Studies have shown that receiving handwritten notes or personalized cards activates different parts of the brain compared to digital messages, creating stronger emotional responses and more lasting memories.</p>
      
      <h2>Beyond Generic Messages</h2>
      <p>Generic greeting cards with pre-written messages often fall flat because they don't capture the unique relationship between the sender and recipient. Personalized poetry, on the other hand, can express exactly what you want to say in a way that resonates with your specific relationship.</p>
      
      <p>Whether it's an inside joke, a shared memory, or a particular quality you admire in someone, personalized messages can capture these nuances in ways that mass-produced cards simply cannot.</p>
      
      <h2>Creating Lasting Memories</h2>
      <p>While digital messages are easily deleted or forgotten, physical cards are often kept for years. Many people have boxes or albums of special cards they've received throughout their lives. By sending a personalized greeting card, you're not just making someone's day – you're creating a keepsake they may treasure for years to come.</p>
      
      <h2>The Write Our Heart Difference</h2>
      <p>At Write Our Heart, we believe in the power of personalized expression. Our process combines your input about your relationship and sentiment with skilled writing to create truly unique greeting cards. We handle everything from the writing to the printing and mailing, making it easy for you to send meaningful, personalized cards for any occasion.</p>
      
      <p>In a world that's increasingly digital and impersonal, taking the time to send a personalized greeting card is a powerful way to strengthen relationships and create lasting memories.</p>
    `,
    relatedPosts: ["five-occasions-you-shouldnt-miss", "behind-the-scenes-printing-process"],
  },
  "five-occasions-you-shouldnt-miss": {
    title: "5 Occasions You Shouldn't Miss",
    date: "May 21, 2024",
    author: "Michael Chen",
    category: "Inspiration",
    content: `
      <p>We all know to send cards for birthdays and major holidays, but there are many other meaningful occasions that deserve recognition. Here are five often-overlooked occasions that are perfect for sending a personalized greeting card:</p>
      
      <h2>1. Work Anniversaries</h2>
      <p>Whether it's a colleague, employee, or client, acknowledging work anniversaries shows appreciation for someone's professional dedication. A personalized card can boost morale and strengthen professional relationships in ways that an email or digital message cannot.</p>
      
      <h2>2. Recovery Milestones</h2>
      <p>When someone is recovering from an illness or working through a personal challenge, acknowledging their progress with a card can provide meaningful encouragement. These cards don't have to be elaborate – a simple message of support can make a significant difference.</p>
      
      <h2>3. "Just Because" Moments</h2>
      <p>Some of the most meaningful cards are those sent without any specific occasion. A "thinking of you" card sent unexpectedly can brighten someone's day and remind them that they're valued even when there's no special event to celebrate.</p>
      
      <h2>4. Personal Achievements</h2>
      <p>Did someone in your life recently run their first 5K, learn a new skill, or achieve a personal goal? These accomplishments often go uncelebrated but are perfect opportunities to show someone you notice and appreciate their efforts.</p>
      
      <h2>5. Relationship Milestones</h2>
      <p>Beyond wedding anniversaries, consider marking the day you met a close friend, the anniversary of a meaningful conversation, or other personal milestones in your relationships. These cards often become treasured keepsakes because they acknowledge the unique history you share with someone.</p>
      
      <p>At Write Our Heart, we make it easy to never miss these important occasions. Our system helps you track important dates and sends reminders when it's time to create a card. With personalized poetry that captures your specific relationship and sentiment, you can make any occasion more meaningful.</p>
    `,
    relatedPosts: ["art-of-personalized-greeting-cards", "customer-spotlight-sarahs-story"],
  },
  "behind-the-scenes-printing-process": {
    title: "Our Printing Process",
    date: "May 14, 2024",
    author: "David Wilson",
    category: "Behind the Scenes",
    content: `
      <p>Have you ever wondered how your personalized greeting cards come to life? At Write Our Heart, we take pride in our printing process that ensures every card is of the highest quality. Here's a behind-the-scenes look at how we bring your personalized poetry to life:</p>
      
      <h2>Step 1: The Writing Process</h2>
      <p>Before any printing begins, our team works to create personalized poetry based on the information you provide about your relationship and the sentiment you want to express. This creative process ensures that each card contains a message that's uniquely meaningful to you and the recipient.</p>
      
      <h2>Step 2: Design Selection</h2>
      <p>Once the poetry is finalized, we pair it with the perfect design from our collection. Our designs are created by talented artists and are selected to complement the tone and occasion of your message.</p>
      
      <h2>Step 3: Weekly Batch Printing</h2>
      <p>Every Monday, we compile all the cards that need to be sent that week and begin our printing process. We use high-quality digital printing technology that ensures vibrant colors and crisp text. Our paper stock is carefully selected for its weight, texture, and environmental sustainability.</p>
      
      <h2>Step 4: Quality Control</h2>
      <p>After printing, each card goes through a quality control check. We examine the color accuracy, print quality, and ensure that the card meets our high standards. If a card doesn't pass this inspection, it's reprinted immediately.</p>
      
      <h2>Step 5: Packaging and Mailing</h2>
      <p>On Tuesdays, we package all cards in protective envelopes and prepare them for mailing. We use tracking when available to ensure your card reaches its destination. For domestic addresses, delivery typically takes 3-5 business days.</p>
      
      <h2>Our Commitment to Quality</h2>
      <p>By batching our printing and mailing process weekly, we're able to maintain consistent quality while keeping costs reasonable. This allows us to offer all-inclusive pricing that covers cards, envelopes, and US postage.</p>
      
      <p>If your card is ever damaged in transit or doesn't arrive, we'll resend it at no additional cost. Your satisfaction and the quality of our products are our top priorities.</p>
    `,
    relatedPosts: ["art-of-personalized-greeting-cards", "customer-spotlight-sarahs-story"],
  },
  "customer-spotlight-sarahs-story": {
    title: "Customer Spotlight: Sarah's Story",
    date: "May 7, 2024",
    author: "Jessica Martinez",
    category: "Customer Stories",
    content: `
      <p>Sarah K., a marketing director from Boston, was one of our early beta users. Her story perfectly illustrates how Write Our Heart can help maintain meaningful connections despite busy schedules and long distances.</p>
      
      <h2>The Challenge: Long-Distance Family</h2>
      <p>"My parents moved to Arizona for retirement while I stayed in Boston for my career," Sarah explains. "With the three-hour time difference and our busy schedules, it became harder to stay connected in meaningful ways. Phone calls were great, but I wanted something more tangible to show them I was thinking of them."</p>
      
      <h2>Finding Write Our Heart</h2>
      <p>Sarah discovered Write Our Heart through a colleague and decided to give it a try. "What caught my attention was the personalization aspect," she says. "I didn't want to send generic cards that could have been written for anyone. I wanted something that would speak to my specific relationship with my parents."</p>
      
      <h2>The First Card</h2>
      <p>Sarah's first card was for her mother's birthday. She provided information about their relationship, shared memories, and the sentiment she wanted to express. "When the card arrived, my mom called me in tears. She said it was like I had written it myself, but better than anything I could have come up with on my own. The poetry captured exactly what I wanted to say."</p>
      
      <h2>Building a Routine</h2>
      <p>After that first success, Sarah began using Write Our Heart regularly. "I set up all the important dates – birthdays, their anniversary, and even created a few 'just because' occasions. The reminder system ensures I never miss an important date, and the subscription model makes it easy to budget for."</p>
      
      <h2>The Impact</h2>
      <p>"My parents now have a collection of cards they keep on their mantle," Sarah shares. "When I visit, I often find them rereading the cards. It's created this beautiful physical reminder of our connection that digital communication just can't match."</p>
      
      <p>Sarah's experience highlights how personalized greeting cards can bridge physical distance and create lasting mementos of important relationships. "In a world where everything is becoming digital and temporary, there's something powerful about creating these physical tokens of love and appreciation," she reflects.</p>
      
      <p>If you have a story about how Write Our Heart has helped you maintain meaningful connections, we'd love to hear from you. Contact us to share your experience.</p>
    `,
    relatedPosts: ["five-occasions-you-shouldnt-miss", "behind-the-scenes-printing-process"],
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]

  if (!post) {
    return {
      title: "Post Not Found | Write Our Heart Blog",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | Write Our Heart Blog`,
    description: post.content.substring(0, 160).replace(/<[^>]*>/g, ""),
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
        <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
        <Link href="/blog" className="text-yellow-500 hover:text-yellow-600 inline-flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
        </Link>
      </div>
    )
  }

  const relatedPostsData = post.relatedPosts.map((slug) => blogPosts[slug])

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Back to blog link */}
        <Link href="/blog" className="text-yellow-500 hover:text-yellow-600 inline-flex items-center mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
        </Link>

        {/* Article header */}
        <div className="mb-8">
          <div className="text-yellow-500 font-semibold text-sm uppercase tracking-wide mb-2">{post.category}</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-600">
            <span className="mr-4">{post.date}</span>
            <span>By {post.author}</span>
          </div>
        </div>

        {/* Article content */}
        <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }} />

        {/* Share buttons */}
        <div className="border-t border-b border-gray-200 py-6 mb-12">
          <div className="flex items-center">
            <span className="text-gray-700 font-medium mr-4">Share this article:</span>
            <div className="flex space-x-4">
              <button className="text-gray-600 hover:text-yellow-500">Twitter</button>
              <button className="text-gray-600 hover:text-yellow-500">Facebook</button>
              <button className="text-gray-600 hover:text-yellow-500">LinkedIn</button>
              <button className="text-gray-600 hover:text-yellow-500">Email</button>
            </div>
          </div>
        </div>

        {/* Related posts */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {relatedPostsData.map((relatedPost, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="text-yellow-500 font-semibold text-sm uppercase tracking-wide mb-2">
                    {relatedPost.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{relatedPost.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {relatedPost.content.substring(0, 100).replace(/<[^>]*>/g, "")}...
                  </p>
                  <Link
                    href={`/blog/${post.relatedPosts[index]}`}
                    className="text-yellow-500 hover:text-yellow-600 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-6">Get the latest articles and tips delivered to your inbox.</p>
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              type="button"
              className="bg-yellow-500 text-white px-6 py-2 rounded-r-lg hover:bg-yellow-600 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
