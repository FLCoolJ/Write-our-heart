import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

interface PricingCardProps {
  title: string
  price: string
  period: string
  description: string
  features: string[]
  buttonText: string
  buttonLink: string
  popular?: boolean
}

export default function PricingCard({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  buttonLink,
  popular = false,
}: PricingCardProps) {
  return (
    <Card
      className={`relative bg-black border ${popular ? "border-yellow-500" : "border-gray-800"} hover:border-yellow-500/50 transition-colors`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-yellow-500 text-black">Most Popular</Badge>
        </div>
      )}
      <CardHeader className="text-center pb-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
        <div className="mt-4">
          <span className="text-3xl font-bold text-white">${price}</span>
          <span className="text-gray-400">/{period}</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <Link href={buttonLink} className="block">
          <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">{buttonText}</Button>
        </Link>
      </CardContent>
    </Card>
  )
}
