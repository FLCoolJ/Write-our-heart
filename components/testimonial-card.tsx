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
    <Card className="bg-black border border-gray-800 hover:border-yellow-500/50 transition-colors h-full">
      <CardContent className="p-8 flex flex-col h-full">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`h-5 w-5 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-600"}`} />
          ))}
        </div>

        <blockquote className="text-gray-300 italic mb-6 flex-grow">"{quote}"</blockquote>

        <div className="flex items-center mt-auto">
          <div className="rounded-full bg-yellow-500/20 w-12 h-12 flex items-center justify-center mr-4">
            <span className="text-yellow-500 font-bold">{author.charAt(0)}</span>
          </div>
          <div>
            <p className="font-semibold text-white">{author}</p>
            <p className="text-gray-400 text-sm">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
