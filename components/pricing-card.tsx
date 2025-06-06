import Link from "next/link"
import { Button } from "@/components/ui/button"
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
    <div
      className={`rounded-lg overflow-hidden ${
        popular ? "border-2 border-yellow-500 transform scale-105 shadow-xl" : "border border-gray-800 shadow-lg"
      }`}
    >
      {popular && <div className="bg-yellow-500 text-black text-center py-2 font-medium">Most Popular</div>}
      <div className="bg-gray-900 p-8">
        <div className="text-center">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <div className="flex items-center justify-center mb-2">
            <span className="text-4xl font-bold text-white">{price}</span>
            <span className="text-gray-400 ml-2">/{period}</span>
          </div>
          <p className="text-gray-400 mb-6">{description}</p>
        </div>

        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
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
      </div>
    </div>
  )
}
