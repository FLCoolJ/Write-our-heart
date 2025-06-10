import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

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
    <Card className={`bg-black h-full relative ${popular ? "border-yellow-500" : "border-gray-800"}`}>
      {popular && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center">
          <Badge className="bg-yellow-500 text-black px-3 py-1">Most Popular</Badge>
        </div>
      )}

      <CardHeader className="pt-8 pb-6 text-center">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <div className="mt-4">
          <span className="text-4xl font-bold text-white">{price}</span>
          <span className="text-gray-400">/{period}</span>
        </div>
        <p className="text-gray-400 mt-2">{description}</p>
      </CardHeader>

      <CardContent className="space-y-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <Check className="h-5 w-5 text-yellow-500" />
              </div>
              <span className="ml-3 text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>

        <Link href={buttonLink} className="block w-full">
          <Button
            className={`w-full ${
              popular ? "bg-yellow-500 hover:bg-yellow-600 text-black" : "bg-gray-800 hover:bg-gray-700 text-white"
            }`}
          >
            {buttonText}
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
