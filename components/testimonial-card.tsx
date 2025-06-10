import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  rating: number
}

export default function TestimonialCard({ quote, author, role, rating }: TestimonialCardProps) {
  return (
    <Card className="bg-black border border-gray-800 hover:border-yellow-500/50 transition-colors">
      <CardContent className="p-8">
        <div className="flex mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
          ))}
        </div>
        <blockquote className="text-gray-300 mb-4 italic">"{quote}"</blockquote>
        <div>
          <div className="font-bold text-white">{author}</div>
          <div className="text-gray-400 text-sm">{role}</div>
        </div>
      </CardContent>
    </Card>
  )
}
