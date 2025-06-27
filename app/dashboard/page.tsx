"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Heart, Plus, Calendar, CreditCard, Settings, Mail, Clock, CheckCircle, AlertCircle, Gift } from "lucide-react"

export default function Dashboard() {
  const [user, setUser] = useState({
    name: "Sarah Johnson",
    email: "sarah@example.com",
    plan: "Heartbeat Plan",
    cardsRemaining: 2,
    totalCards: 4,
    nextBilling: "2024-02-15",
    isAnnual: true,
  })

  const [recentCards, setRecentCards] = useState([
    {
      id: 1,
      recipient: "Mom",
      occasion: "Birthday",
      status: "delivered",
      sentDate: "2024-01-10",
      deliveryDate: "2024-01-13",
    },
    {
      id: 2,
      recipient: "John Smith",
      occasion: "Thank You",
      status: "in_transit",
      sentDate: "2024-01-12",
      estimatedDelivery: "2024-01-16",
    },
    {
      id: 3,
      recipient: "Emma Wilson",
      occasion: "Congratulations",
      status: "processing",
      sentDate: "2024-01-14",
      estimatedDelivery: "2024-01-18",
    },
  ])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "in_transit":
        return <Mail className="h-4 w-4 text-yellow-500" />
      case "processing":
        return <Clock className="h-4 w-4 text-blue-500" />
      default:
        return <AlertCircle className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "delivered":
        return "Delivered"
      case "in_transit":
        return "In Transit"
      case "processing":
        return "Processing"
      default:
        return "Unknown"
    }
  }

  const progressPercentage = ((user.totalCards - user.cardsRemaining) / user.totalCards) * 100

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto p-6">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}!</h1>
          <p className="text-gray-400">Express what's truly in your heart with personalized poetry cards.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Cards Remaining</p>
                  <p className="text-2xl font-bold text-yellow-500">{user.cardsRemaining}</p>
                </div>
                <Heart className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Current Plan</p>
                  <p className="text-lg font-semibold text-white">{user.plan}</p>
                  {user.isAnnual && (
                    <Badge className="bg-green-500 text-black text-xs mt-1">
                      <Gift className="h-3 w-3 mr-1" />
                      Annual
                    </Badge>
                  )}
                </div>
                <CreditCard className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Next Billing</p>
                  <p className="text-lg font-semibold text-white">{new Date(user.nextBilling).toLocaleDateString()}</p>
                </div>
                <Calendar className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Cards Sent</p>
                  <p className="text-2xl font-bold text-white">{user.totalCards - user.cardsRemaining}</p>
                </div>
                <Mail className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Usage Progress */}
        <Card className="bg-gray-900 border-gray-800 mb-8">
          <CardHeader>
            <CardTitle className="text-yellow-500">Monthly Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Cards used this month</span>
                <span className="text-white">
                  {user.totalCards - user.cardsRemaining} of {user.totalCards}
                </span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
              <p className="text-sm text-gray-400">
                {user.cardsRemaining > 0
                  ? `You have ${user.cardsRemaining} cards remaining this month.`
                  : "You've used all your cards for this month. Additional cards are $4.99 each."}
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Quick Actions */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-yellow-500">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link href="https://launch.writeourheart.com">
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                  <Plus className="h-4 w-4 mr-2" />
                  Join Waiting List
                </Button>
              </Link>

              <Link href="/my-hearts">
                <Button variant="outline" className="w-full border-gray-600 text-white hover:bg-gray-800">
                  <Heart className="h-4 w-4 mr-2" />
                  View My Cards
                </Button>
              </Link>

              <Link href="/account">
                <Button variant="outline" className="w-full border-gray-600 text-white hover:bg-gray-800">
                  <Settings className="h-4 w-4 mr-2" />
                  Account Settings
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Recent Cards */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-yellow-500">Recent Cards</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentCards.map((card) => (
                  <div key={card.id} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(card.status)}
                      <div>
                        <p className="font-medium text-white">{card.recipient}</p>
                        <p className="text-sm text-gray-400">{card.occasion}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-white">{getStatusText(card.status)}</p>
                      <p className="text-xs text-gray-400">
                        {card.status === "delivered"
                          ? `Delivered ${new Date(card.deliveryDate!).toLocaleDateString()}`
                          : `Est. ${new Date(card.estimatedDelivery!).toLocaleDateString()}`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/my-hearts">
                <Button variant="ghost" className="w-full mt-4 text-yellow-500 hover:text-yellow-400 hover:bg-gray-800">
                  View All Cards
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Annual Bonus Reminder */}
        {user.isAnnual && (
          <Card className="bg-gradient-to-r from-yellow-500/20 to-green-500/20 border border-yellow-500/30 mt-8">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <Gift className="h-6 w-6 text-yellow-400" />
                <div>
                  <h3 className="font-semibold text-yellow-400">Annual Subscriber Bonus</h3>
                  <p className="text-white">
                    You have 2 bonus cards available as an annual subscriber! Use them to lock in the words that matter
                    most.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Current Website Pricing */}
        <Card className="bg-gray-900 border-gray-800 mt-8">
          <CardHeader>
            <CardTitle className="text-yellow-500">Current Pricing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gray-800 rounded-lg">
                <h3 className="text-lg font-bold text-white mb-2">Whisper</h3>
                <p className="text-2xl font-bold text-yellow-500 mb-2">$11.99/mo</p>
                <p className="text-sm text-gray-400">2 cards per month</p>
                <p className="text-xs text-gray-500 mt-2">Annual: $119.90 (2 bonus cards)</p>
              </div>
              <div className="text-center p-4 bg-gray-800 rounded-lg border border-yellow-500">
                <h3 className="text-lg font-bold text-white mb-2">Heartbeat</h3>
                <p className="text-2xl font-bold text-yellow-500 mb-2">$19.99/mo</p>
                <p className="text-sm text-gray-400">4 cards per month</p>
                <p className="text-xs text-gray-500 mt-2">Annual: $199.90 (2 bonus cards)</p>
              </div>
              <div className="text-center p-4 bg-gray-800 rounded-lg">
                <h3 className="text-lg font-bold text-white mb-2">Legacy</h3>
                <p className="text-2xl font-bold text-yellow-500 mb-2">$34.99/mo</p>
                <p className="text-sm text-gray-400">7 cards per month</p>
                <p className="text-xs text-gray-500 mt-2">Annual: $349.99 (2 bonus cards)</p>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-400">Additional cards: $4.99 each • Cards expire after 2 months</p>
            </div>
          </CardContent>
        </Card>

        {/* Join Waiting List CTA */}
        <Card className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black mt-8">
          <CardContent className="p-6 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="mb-6">Join our waiting list to be notified when Write Our Heart goes live.</p>
            <Link href="https://launch.writeourheart.com">
              <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3">Join Waiting List</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
