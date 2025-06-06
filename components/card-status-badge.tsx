import { Badge } from "@/components/ui/badge"

type CardStatus = "scheduled" | "processing" | "printed" | "shipped" | "delivered"

interface CardStatusBadgeProps {
  status: CardStatus
  className?: string
}

export function CardStatusBadge({ status, className }: CardStatusBadgeProps) {
  const getStatusColor = () => {
    switch (status) {
      case "scheduled":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "processing":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "printed":
        return "bg-green-100 text-green-800 border-green-200"
      case "shipped":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "delivered":
        return "bg-gray-100 text-gray-800 border-gray-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusText = () => {
    return status.charAt(0).toUpperCase() + status.slice(1)
  }

  return <Badge className={`${getStatusColor()} ${className}`}>{getStatusText()}</Badge>
}
