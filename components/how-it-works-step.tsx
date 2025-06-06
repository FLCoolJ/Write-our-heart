import { Card, CardContent } from "@/components/ui/card"
import { Users, Edit, CheckCircle, Calendar, Heart, Mail } from "lucide-react"

interface HowItWorksStepProps {
  number: string
  title: string
  description: string
  icon: string
}

export default function HowItWorksStep({ number, title, description, icon }: HowItWorksStepProps) {
  const getIcon = () => {
    switch (icon) {
      case "Users":
        return <Users className="h-8 w-8 text-yellow-500" />
      case "Edit":
        return <Edit className="h-8 w-8 text-yellow-500" />
      case "CheckCircle":
        return <CheckCircle className="h-8 w-8 text-yellow-500" />
      case "Calendar":
        return <Calendar className="h-8 w-8 text-yellow-500" />
      case "Heart":
        return <Heart className="h-8 w-8 text-yellow-500" />
      case "Mail":
        return <Mail className="h-8 w-8 text-yellow-500" />
      default:
        return <CheckCircle className="h-8 w-8 text-yellow-500" />
    }
  }

  return (
    <Card className="bg-black border border-gray-800 hover:border-yellow-500/50 transition-colors h-full">
      <CardContent className="p-8">
        <div className="rounded-full bg-yellow-500/10 w-16 h-16 flex items-center justify-center mb-6">
          <span className="text-2xl font-bold text-yellow-500">{number}</span>
        </div>

        <div className="mb-4">{getIcon()}</div>

        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </CardContent>
    </Card>
  )
}
