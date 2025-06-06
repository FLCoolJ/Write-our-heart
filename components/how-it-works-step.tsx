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
    <div className="text-center space-y-4">
      <div className="relative">
        <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl font-bold text-black">{number}</span>
        </div>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
          <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center">
            <IconComponent className="h-4 w-4 text-yellow-500" />
          </div>
        </div>
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}
