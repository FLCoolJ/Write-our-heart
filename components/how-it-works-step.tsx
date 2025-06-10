import { Card, CardContent } from "@/components/ui/card"
import { Users, Edit, CheckCircle } from "lucide-react"

interface HowItWorksStepProps {
  number: string
  title: string
  description: string
  icon: "Users" | "Edit" | "CheckCircle"
}

const iconMap = {
  Users,
  Edit,
  CheckCircle,
}

export default function HowItWorksStep({ number, title, description, icon }: HowItWorksStepProps) {
  const IconComponent = iconMap[icon]

  return (
    <Card className="bg-gray-900 border border-gray-800 hover:border-yellow-500/50 transition-colors">
      <CardContent className="p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-yellow-500 text-black flex items-center justify-center mb-6 mx-auto">
          <span className="font-bold text-xl">{number}</span>
        </div>
        <div className="mb-4">
          <IconComponent className="h-8 w-8 text-yellow-500 mx-auto" />
        </div>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </CardContent>
    </Card>
  )
}
