import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

// Sample blog data (static content that doesn't require database)
const blogPosts = [
  {
    id: 1,
    slug: "art-of-personalized-greeting-cards",
    title: "The Art of Personalized Greeting Cards",
    excerpt: "Discover how personalized greeting cards can strengthen relationships and create lasting memories.",
    date: "May 28, 2024",
    author: "Emma Johnson",
    authorRole: "Creative Director",
    authorImage: "/placeholder.svg?height=100&width=100",
    category: "Tips & Advice",
    imageUrl: "/placeholder.svg?height=600&width=1200",
    content: `
      <p>In today's digital age, where communication is often reduced to quick texts and emoji-filled messages, the art of sending personalized greeting cards stands out as a meaningful gesture that creates lasting connections.</p>
      
      <h2>The Personal Touch</h2>
      <p>When you send a personalized greeting card, you're doing more than just acknowledging an occasion – you're showing that you've taken the time to select something specifically for the recipient. This personal touch communicates thoughtfulness and care in a way that digital messages simply cannot.</p>
      
      <p>Studies have shown that receiving physical mail, especially personalized items like greeting cards, activates different parts of the brain associated with emotional processing and memory compared to digital communications. The tangible nature of cards creates stronger, more lasting impressions.</p>
      
      <h2>Creating Lasting Memories</h2>
      <p>Unlike digital messages that get buried in inboxes or forgotten in chat histories, physical greeting cards often become keepsakes. Many people display cards in their homes, save them in memory boxes, or even frame particularly special ones.</p>
      
      <p>These physical mementos serve as ongoing reminders of your relationship and the special occasions you've shared. Years later, discovering an old card can bring back memories and emotions in a powerful way.</p>
      
      <h2>Strengthening Relationships</h2>
      <p>The effort involved in selecting, personalizing, and sending a physical card signals investment in a relationship. This investment doesn't go unnoticed by recipients, who often feel more valued receiving a thoughtful card than a quick digital message.</p>
      
      <p>For long-distance relationships, whether family, friends, or romantic partners, personalized greeting cards can help bridge the physical gap and maintain emotional closeness despite the distance.</p>
      
      <h2>The Write Our Heart Difference</h2>
      <p>At Write Our Heart, we understand the power of personalized greeting cards. Our service makes it easy to create custom cards that perfectly express your feelings, while still maintaining the thoughtfulness and personal touch that makes greeting cards special.</p>
      
      <p>By combining the convenience of online ordering with the warmth of handwritten messages and quality printing, we're helping people strengthen their relationships one card at a time.</p>
      
      <h2>Getting Started</h2>
      <p>Ready to experience the difference personalized greeting cards can make in your relationships? Join our beta program today and start creating meaningful connections with the people who matter most in your life.</p>
    `,
    tags: ["greeting cards", "personalization", "relationships", "communication"],
  },
  {
    id: 2,
    slug: "five-occasions-you-shouldnt-miss",
    title: "5 Occasions You Shouldn't Miss",
    excerpt: "Beyond birthdays and holidays: important moments that deserve a special greeting card.",
    date: "May 21, 2024",
    author: "Michael Chen",
    authorRole: "Customer Experience Manager",
    authorImage: "/placeholder.svg?height=100&width=100",
    category: "Inspiration",
    imageUrl: "/placeholder.svg?height=600&width=1200",
    content: `
      <p>We all remember to send cards for birthdays and major holidays, but there are many other meaningful occasions that deserve recognition. Here are five often-overlooked moments that merit a special greeting card.</p>
      
      <h2>1. Work Anniversaries</h2>
      <p>In our careers, work anniversaries often pass by without much acknowledgment. Yet, these milestones represent years of dedication, growth, and contribution. A thoughtful card recognizing a colleague's work anniversary can boost morale and strengthen professional relationships.</p>
      
      <p>Consider mentioning specific achievements or qualities you admire about your colleague. This personal touch transforms a simple greeting into a meaningful affirmation of their professional value.</p>
      
      <h2>2. Recovery Milestones</h2>
      <p>Whether someone is recovering from illness, working through addiction, or healing after a loss, recovery milestones deserve recognition. These journeys are often challenging and lonely, making acknowledgment from loved ones particularly meaningful.</p>
      
      <p>A card celebrating someone's strength and progress can provide encouragement exactly when they need it most. Focus on their courage and resilience rather than the difficulty of their situation.</p>
      
      <h2>3. Personal Achievements</h2>
      <p>Did someone in your life recently run their first 5K? Master a difficult recipe? Complete an online course? These personal achievements may seem small to others but are significant to the individual.</p>
      
      <p>Sending a card that recognizes these accomplishments shows that you're paying attention to what matters to them and that you celebrate their growth and interests.</p>
      
      <h2>4. Home Anniversaries</h2>
      <p>The anniversary of moving into a home is rarely celebrated, yet it marks an important chapter in life. Whether it's been one year or ten years, acknowledging this milestone can be deeply meaningful.</p>
      
      <p>A card reminiscing about housewarming memories or noting how they've made the space their own acknowledges the importance of home and the life they've built there.</p>
      
      <h2>5. "Just Because" Moments</h2>
      <p>Perhaps the most overlooked occasion is no occasion at all. Sending a card "just because" can be the most touching gesture, as it comes without obligation or expectation.</p>
      
      <p>These unexpected greetings often arrive exactly when someone needs a boost, a reminder that they're thought of, or simply a moment of connection in an otherwise ordinary day.</p>
      
      <h2>Making It Easy</h2>
      <p>At Write Our Heart, we understand that life gets busy, making it difficult to remember and act on all these occasions. That's why our service helps you track important dates and sends timely reminders, ensuring you never miss an opportunity to strengthen your connections.</p>
      
      <p>Join our beta program today and start celebrating all of life's meaningful moments – both the obvious and the overlooked.</p>
    `,
    tags: ["occasions", "celebrations", "relationships", "milestones"],
  },
  {
    id: 3,
    slug: "behind-the-scenes-printing-process",
    title: "Behind the Scenes: Our Printing Process",
    excerpt: "Take a look at how we bring your personalized greeting cards to life with quality printing.",
    date: "May 14, 2024",
    author: "David Wilson",
    authorRole: "Production Manager",
    authorImage: "/placeholder.svg?height=100&width=100",
    category: "Behind the Scenes",
    imageUrl: "/placeholder.svg?height=600&width=1200",
    content: `
      <p>Have you ever wondered what happens after you click "send" on your personalized greeting card? At Write Our Heart, we take pride in our printing process that transforms your digital creation into a high-quality physical card. Let's take a behind-the-scenes tour of how your cards come to life.</p>
      
      <h2>Step 1: Digital Preparation</h2>
      <p>Once you've designed your card and written your message, our system prepares your design for printing. This involves converting the digital file to the proper format, checking color profiles, and ensuring all elements are positioned correctly.</p>
      
      <p>Our pre-press team reviews each card individually, making subtle adjustments if needed to ensure optimal print quality. This human touch helps catch any potential issues before printing begins.</p>
      
      <h2>Step 2: Paper Selection</h2>
      <p>The foundation of any great greeting card is quality paper. We use premium 120 lb cardstock with a subtle texture that feels substantial in the hand and provides an excellent printing surface.</p>
      
      <p>For our standard cards, we use FSC-certified paper, meaning it comes from responsibly managed forests. Our premium line features papers with cotton content for an even more luxurious feel.</p>
      
      <h2>Step 3: Printing Technology</h2>
      <p>We use state-of-the-art digital presses that produce vibrant colors and sharp details. Unlike mass-produced greeting cards that use standard CMYK printing, our process incorporates extended color gamut technology, allowing for richer colors and more accurate reproduction of your designs.</p>
      
      <p>For metallic elements or special effects, we employ specialty inks and foiling techniques that add dimension and visual interest to your cards.</p>
      
      <h2>Step 4: Finishing Touches</h2>
      <p>After printing, each card goes through several finishing processes. Cards are precisely cut to size, scored for clean folding, and inspected for quality. Depending on the design, additional finishes like spot UV coating, embossing, or edge painting may be applied.</p>
      
      <p>We then pair each card with a matching envelope made from complementary paper stock, creating a cohesive presentation.</p>
      
      <h2>Step 5: Quality Control</h2>
      <p>Before any card leaves our facility, it undergoes a thorough quality check. Our team inspects for color accuracy, print quality, proper cutting and folding, and overall appearance. Only cards that meet our high standards continue to the packaging stage.</p>
      
      <p>This attention to detail ensures that the card you receive is exactly what you envisioned – or even better.</p>
      
      <h2>Step 6: Packaging and Shipping</h2>
      <p>Finally, your card is carefully packaged to prevent damage during transit. We use protective sleeves and rigid mailers to keep cards pristine until they reach their destination.</p>
      
      <p>For direct-to-recipient shipping, we include your card in a hand-addressed envelope for that personal touch, making it indistinguishable from a card you might have sent yourself.</p>
      
      <h2>The Write Our Heart Difference</h2>
      <p>While many greeting card services focus on volume and speed, we prioritize quality and craftsmanship. Our weekly batch printing model allows us to give each card the attention it deserves while still providing timely delivery.</p>
      
      <p>The result is a greeting card that stands out – not just for its personalized message, but for its exceptional quality that reflects the thought and care behind your sentiment.</p>
      
      <p>Ready to experience the difference quality printing makes? Join our beta program today and see for yourself how we bring your heartfelt messages to life.</p>
    `,
    tags: ["printing", "quality", "production", "behind the scenes"],
  },
  {
    id: 4,
    slug: "customer-spotlight-sarahs-story",
    title: "Customer Spotlight: Sarah's Story",
    excerpt: "How one customer used Write Our Heart to reconnect with family across the country.",
    date: "May 7, 2024",
    author: "Jessica Taylor",
    authorRole: "Community Manager",
    authorImage: "/placeholder.svg?height=100&width=100",
    category: "Customer Stories",
    imageUrl: "/placeholder.svg?height=600&width=1200",
    content: `
      <p>At Write Our Heart, we're privileged to be part of our customers' meaningful connections and heartfelt moments. Today, we're sharing Sarah's story – a testament to how personalized greeting cards can bridge distances and strengthen family bonds.</p>
      
      <h2>Meeting Sarah</h2>
      <p>Sarah Miller is a busy marketing executive and mother of two living in Seattle. Three years ago, her parents and sister relocated to Florida, putting nearly 3,000 miles between them. Like many families separated by distance, they stayed connected through calls, texts, and occasional video chats.</p>
      
      <p>"We talked regularly," Sarah explains, "but something was missing. The conversations started feeling routine – updates about work, the kids' activities, the weather. We weren't connecting on a deeper level anymore."</p>
      
      <h2>The Challenge of Distance</h2>
      <p>As months passed, Sarah noticed her children were becoming less engaged during family calls. Her parents were missing milestones, and her sister's new home still felt abstract and unfamiliar. The physical distance was creating an emotional one.</p>
      
      <p>"I realized we were communicating, but not really sharing our lives," Sarah says. "I wanted my family to feel present in our daily experiences, not just informed about them."</p>
      
      <h2>Discovering Write Our Heart</h2>
      <p>Sarah joined our beta program after a colleague mentioned our service. Initially, she was just looking for a convenient way to send birthday cards without last-minute rushes to the store.</p>
      
      <p>"What caught my attention was the quality and personalization," she recalls. "These weren't generic cards with a signature. I could include specific memories, inside jokes, and recent photos that made each card uniquely meaningful."</p>
      
      <h2>Beyond Birthdays</h2>
      <p>What began as birthday card management soon expanded. Sarah started sending cards for small achievements, seasonal changes, and sometimes just to share a memory or funny moment.</p>
      
      <p>"I sent my dad a card after my son lost his first tooth, with a photo and the whole story of the 'tooth fairy visit.' My dad called me in tears, saying he felt like he was there with us. That's when I realized these cards were doing something our calls and texts couldn't."</p>
      
      <h2>Creating Tangible Connections</h2>
      <p>Sarah's parents and sister began displaying the cards in their homes – on refrigerators, mantels, and bulletin boards. These physical reminders of their Seattle family became conversation pieces and daily touchpoints.</p>
      
      <p>"My sister told me she looks at the cards during her morning coffee. My mom has them arranged chronologically on a dedicated shelf, like a developing story of our lives. They've become more than messages – they're artifacts of our relationship."</p>
      
      <h2>The Reciprocal Effect</h2>
      <p>Inspired by Sarah's cards, her family began sending their own. Her children now receive mail addressed specifically to them – something that's become a special excitement in their digital-native lives.</p>
      
      <p>"My kids race to the mailbox hoping for cards from grandma or aunt Lisa. They save every one. It's teaching them about thoughtfulness and the value of tangible connections in a way I never expected."</p>
      
      <h2>The Ripple Effect</h2>
      <p>Sarah's consistent card-sending has influenced her entire family's communication style. Their video calls now reference card contents, creating deeper conversations. They share more specific details and meaningful moments, knowing these might appear in future cards.</p>
      
      <p>"We're more attentive to each other's lives now," Sarah reflects. "We notice and celebrate the small things. The cards have given us a new language for staying connected."</p>
      
      <h2>Your Story</h2>
      <p>Stories like Sarah's remind us why we created Write Our Heart. In a world where communication is often reduced to quick digital exchanges, personalized greeting cards offer a meaningful alternative that strengthens relationships across any distance.</p>
      
      <p>Ready to create your own connection story? Join our beta program today and discover how the simple act of sending thoughtful, personalized cards can transform your relationships.</p>
    `,
    tags: ["customer story", "family", "long distance", "connection"],
  },
]

type Props = {
  params: { slug: string }
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Post Not Found | Write Our Heart Blog",
      description: "The blog post you're looking for could not be found.",
    }
  }

  return {
    title: `${post.title} | Write Our Heart Blog`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  // Get related posts (excluding current post)
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3)

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero section */}
        <div className="mb-10">
          <div className="uppercase tracking-wide text-sm text-yellow-500 font-semibold mb-2">{post.category}</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-600 mb-6">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>By {post.author}</span>
          </div>
          <div className="relative h-80 w-full rounded-lg overflow-hidden mb-8">
            <Image src={post.imageUrl || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>
        </div>

        {/* Author info */}
        <div className="flex items-center mb-8 p-4 bg-gray-50 rounded-lg">
          <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
            <Image src={post.authorImage || "/placeholder.svg"} alt={post.author} fill className="object-cover" />
          </div>
          <div>
            <p className="font-medium text-gray-900">{post.author}</p>
            <p className="text-sm text-gray-600">{post.authorRole}</p>
          </div>
        </div>

        {/* Article content */}
        <div className="prose prose-yellow max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

        {/* Tags */}
        <div className="mt-10 pt-6 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Share buttons */}
        <div className="mt-8 flex items-center">
          <span className="text-gray-700 mr-4">Share this article:</span>
          <div className="flex space-x-2">
            <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </button>
            <button className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </button>
            <button className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Related posts */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <div key={relatedPost.id} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="h-40 w-full relative">
                  <Image
                    src={relatedPost.imageUrl || "/placeholder.svg"}
                    alt={relatedPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="uppercase tracking-wide text-xs text-yellow-500 font-semibold mb-1">
                    {relatedPost.category}
                  </div>
                  <Link
                    href={`/blog/${relatedPost.slug}`}
                    className="block text-lg font-semibold text-gray-900 hover:underline"
                  >
                    {relatedPost.title}
                  </Link>
                  <p className="mt-1 text-sm text-gray-500">{relatedPost.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Back to blog */}
        <div className="mt-10">
          <Link href="/blog" className="inline-flex items-center text-yellow-500 hover:text-yellow-600">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to all articles
          </Link>
        </div>
      </div>
    </div>
  )
}
