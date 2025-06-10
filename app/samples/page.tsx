import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Heart, Calendar, Gift, Star } from "lucide-react"
import Footer from "@/components/footer"

export default function SamplesPage() {
  const sampleCards = [
    {
      id: 1,
      title: "Valentine's Day Romance",
      occasion: "Valentine's Day",
      relationship: "Romantic Partner",
      image: "/images/valentine-card-sample.png",
      poetry: `Two hearts that beat as one today,
Like cardinals in love's sweet play.
Among the roses, red and true,
My heart belongs forever to you.

In every petal, every wing,
I see the joy that love can bring.
So on this day of hearts so dear,
Know that you're my everything here.`,
      description:
        "A romantic Valentine's card featuring cardinals and roses with personalized poetry about eternal love.",
    },
    {
      id: 2,
      title: "Mother's Day Celebration",
      occasion: "Mother's Day",
      relationship: "Mother",
      image: "/images/mothers-day-card.png",
      poetry: `Your gentle hand has guided me,
Through life's journey, endlessly.
With tulips blooming all around,
Your love makes my heart profound.

In silhouette against the sun,
The bond we share cannot be undone.
For all you've done, for all you are,
You shine in my life like the brightest star.`,
      description:
        "A heartfelt Mother's Day card featuring a mother and child surrounded by beautiful tulips at sunset.",
    },
    {
      id: 3,
      title: "Wedding Congratulations",
      occasion: "Wedding",
      relationship: "Couple",
      image: "/images/wedding-card.png",
      poetry: `Two golden rings, two hearts combined,
A love so rare, so pure, refined.
Red roses speak of passion true,
As you both say, "I do, I do."

May your journey be filled with light,
Your bond grow stronger day and night.
Celebrating your eternal love and joy,
A union nothing can destroy.`,
      description: "An elegant wedding card with roses and gold rings celebrating the union of two hearts.",
    },
    {
      id: 4,
      title: "Thank You Appreciation",
      occasion: "Thank You",
      relationship: "Friend",
      image: "/images/thank-you-card.png",
      poetry: `Like sunflowers turning to the light,
Your friendship makes everything bright.
Roses and blooms in warm embrace,
Reflect the kindness in your face.

For your warm friendship, true and dear,
For all the times you've been so near.
This bouquet speaks what words cannot say,
Thank you for brightening every day.`,
      description: "A warm thank you card with sunflowers and roses expressing gratitude for a dear friend.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-gray-400 hover:text-yellow-500">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to home
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-yellow-500 text-black px-3 py-1 text-sm mb-4">Sample Gallery</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Personalized Poetry Examples</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we transform your sentiments into beautiful, personalized poetry cards for every occasion and
            relationship.
          </p>
        </div>

        {/* Featured Sample */}
        <div className="mb-16">
          <Card className="bg-gray-900 border border-yellow-500/50 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src={sampleCards[0].image || "/placeholder.svg"}
                  alt={sampleCards[0].title}
                  className="w-full h-full object-cover min-h-[400px]"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-yellow-500 text-black">Featured</Badge>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="h-5 w-5 text-yellow-500" />
                  <span className="text-yellow-500 font-medium">{sampleCards[0].occasion}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">{sampleCards[0].relationship}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{sampleCards[0].title}</h3>
                <div className="bg-black/50 rounded-lg p-4 mb-4">
                  <pre className="text-gray-300 whitespace-pre-wrap font-serif italic leading-relaxed">
                    {sampleCards[0].poetry}
                  </pre>
                </div>
                <p className="text-gray-400 mb-6">{sampleCards[0].description}</p>
                <Link href="/beta-signup">
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Create Your Own</Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>

        {/* Sample Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sampleCards.slice(1).map((card) => (
            <Card
              key={card.id}
              className="bg-black border border-gray-800 hover:border-yellow-500/50 transition-colors"
            >
              <div className="relative">
                <img
                  src={card.image || "/placeholder.svg"}
                  alt={card.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className="bg-black/70 text-white">
                    {card.occasion}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm text-gray-400">{card.relationship}</span>
                </div>
                <CardTitle className="text-lg">{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 rounded-lg p-3 mb-4">
                  <pre className="text-gray-300 text-sm whitespace-pre-wrap font-serif italic leading-relaxed line-clamp-6">
                    {card.poetry.split("\n").slice(0, 4).join("\n")}...
                  </pre>
                </div>
                <p className="text-gray-400 text-sm mb-4">{card.description}</p>
                <Button variant="outline" className="w-full border-yellow-500 text-yellow-500 hover:bg-yellow-500/10">
                  View Full Card
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Occasions Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">
              <span className="border-b-4 border-yellow-500 pb-1">CARDS FOR EVERY OCCASION</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We create personalized poetry for all of life's important moments.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "Birthday", icon: Gift },
              { name: "Valentine's Day", icon: Heart },
              { name: "Wedding", icon: Star },
              { name: "Anniversary", icon: Heart },
              { name: "Graduation", icon: Star },
              { name: "Thank You", icon: Heart },
              { name: "Sympathy", icon: Heart },
              { name: "Get Well", icon: Heart },
              { name: "New Baby", icon: Star },
              { name: "Retirement", icon: Star },
              { name: "Congratulations", icon: Star },
              { name: "Just Because", icon: Heart },
            ].map((occasion) => (
              <Card
                key={occasion.name}
                className="bg-gray-700 border border-gray-600 hover:border-yellow-500/50 transition-colors"
              >
                <CardContent className="p-4 text-center">
                  <occasion.icon className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
                  <p className="text-sm font-medium text-white">{occasion.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-black border-0">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Your Own?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join our beta program and start sending personalized poetry cards that truly express what's in your
                heart.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/beta-signup">
                  <Button className="bg-black hover:bg-gray-800 text-white text-lg py-6 px-8">Join Beta Program</Button>
                </Link>
                <Link href="/how-it-works">
                  <Button variant="outline" className="border-black text-black hover:bg-black/10 text-lg py-6 px-8">
                    Learn How It Works
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
