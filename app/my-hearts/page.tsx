"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Calendar, Mail, Phone, MapPin, Gift, Users } from "lucide-react"

// Update the HeartData interface to match our new structure
interface HeartData {
  id: number
  name: string
  relationship: string
  email: string
  phone: string
  addressLine: string
  city: string
  state: string
  zipCode: string
  occasions: string[]
  occasionDates: { [key: string]: string }
  otherOccasion?: string
  date: string
  tone: string
  message: string
  interests: string
}

export default function MyHearts() {
  const router = useRouter()
  const [hearts, setHearts] = useState<HeartData[]>([])
  const [userName, setUserName] = useState("User")
  const [freeCards, setFreeCards] = useState(0)
  const [referralCards, setReferralCards] = useState(0)

  useEffect(() => {
    const storedHearts = localStorage.getItem("hearts")
    if (storedHearts) {
      setHearts(JSON.parse(storedHearts))
    }

    // Get the user's name from localStorage
    const storedUserName = localStorage.getItem("userName")
    if (storedUserName) {
      setUserName(storedUserName)
    }

    // Get card credits
    const storedFreeCards = localStorage.getItem("freeCards")
    const storedReferralCards = localStorage.getItem("referralCards")

    if (storedFreeCards) {
      setFreeCards(Number.parseInt(storedFreeCards))
    }
    if (storedReferralCards) {
      setReferralCards(Number.parseInt(storedReferralCards))
    }
  }, [])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getOccasionColor = (occasion: string) => {
    const colors: { [key: string]: string } = {
      birthday: "bg-pink-100 text-pink-800",
      anniversary: "bg-red-100 text-red-800",
      congratulations: "bg-green-100 text-green-800",
      "thank-you": "bg-blue-100 text-blue-800",
      "get-well": "bg-purple-100 text-purple-800",
      holiday: "bg-orange-100 text-orange-800",
      "just-because": "bg-yellow-100 text-yellow-800",
    }
    return colors[occasion] || "bg-gray-100 text-gray-800"
  }

  const totalCards = freeCards + referralCards

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-yellow-500 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-black mb-2">Hi {userName}, Welcome Back!</h1>
              <p className="text-black/70">Manage your Hearts and schedule meaningful cards</p>
            </div>
            <img src="/images/logo.png" alt="Write Our Heart Logo" className="w-12 h-12" />
          </div>

          {/* Card Credits Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Gift className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-sm text-green-600 font-medium">Free Cards</p>
                    <p className="text-2xl font-bold text-green-800">{freeCards}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-blue-600 font-medium">Referral Cards</p>
                    <p className="text-2xl font-bold text-blue-800">{referralCards}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-yellow-50 border-yellow-200">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-yellow-600" />
                  <div>
                    <p className="text-sm text-yellow-600 font-medium">Total Available</p>
                    <p className="text-2xl font-bold text-yellow-800">{totalCards}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Referral Section */}
          <Card className="mb-6 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-purple-800 mb-1">Refer Friends & Get Free Cards!</h3>
                  <p className="text-sm text-purple-600">Share Write Our Heart and earn 2 free cards per referral</p>
                </div>
                <Button
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                  onClick={() => {
                    const referralLink = `${window.location.origin}?ref=${userName}`
                    navigator.clipboard.writeText(referralLink)
                    alert("Referral link copied to clipboard!")
                  }}
                >
                  Share & Earn
                </Button>
              </div>
            </CardContent>
          </Card>

          <Button onClick={() => router.push("/add-heart")} className="bg-black hover:bg-gray-800 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Add New Heart
          </Button>
          <Button
            onClick={() => router.push("/dashboard")}
            className="bg-yellow-500 hover:bg-yellow-600 text-black ml-2"
          >
            Go to Dashboard
          </Button>
        </div>

        {hearts.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <img src="/images/logo.png" alt="Write Our Heart Logo" className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No Hearts Added Yet</h3>
              <p className="text-gray-500 mb-6">Start by adding someone special to send them personalized cards</p>
              <Button
                onClick={() => router.push("/add-heart")}
                className="bg-yellow-500 hover:bg-yellow-600 text-black"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Your First Heart
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6">
            {hearts.map((heart) => (
              <Card key={heart.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <img src="/images/logo.png" alt="Write Our Heart Logo" className="w-8 h-8" />
                      <div>
                        <CardTitle className="text-xl text-black">{heart.name}</CardTitle>
                        <p className="text-gray-600">{heart.relationship}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {heart.occasions.map((occasion) => {
                        const displayName =
                          occasion === "other" && heart.otherOccasion
                            ? heart.otherOccasion
                            : occasion.charAt(0).toUpperCase() + occasion.slice(1).replace("-", " ")

                        const occasionDate = heart.occasionDates?.[occasion]

                        return (
                          <Badge key={occasion} className={getOccasionColor(occasion)}>
                            {displayName}
                            {occasionDate && (
                              <span className="ml-1 text-xs">
                                (
                                {new Date(occasionDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                                )
                              </span>
                            )}
                          </Badge>
                        )
                      })}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(heart.date)}</span>
                      </div>
                      {heart.email && (
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Mail className="w-4 h-4" />
                          <span>{heart.email}</span>
                        </div>
                      )}
                      {heart.phone && (
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Phone className="w-4 h-4" />
                          <span>{heart.phone}</span>
                        </div>
                      )}
                      {heart.addressLine && (
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <MapPin className="w-4 h-4" />
                          <span className="truncate">
                            {heart.addressLine}, {heart.city}, {heart.state} {heart.zipCode}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm">
                        <span className="font-medium text-gray-700">Tone:</span>
                        <span className="ml-2 text-gray-600 capitalize">{heart.tone}</span>
                      </div>
                      {heart.interests && (
                        <div className="text-sm">
                          <span className="font-medium text-gray-700">Interests:</span>
                          <span className="ml-2 text-gray-600">{heart.interests}</span>
                        </div>
                      )}
                      <div className="text-sm">
                        <span className="font-medium text-gray-700">Message Preview:</span>
                        <p className="text-gray-600 mt-1 text-xs line-clamp-2">{heart.message.substring(0, 100)}...</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        localStorage.setItem("editingHeart", JSON.stringify(heart))
                        router.push(`/add-heart?edit=${heart.id}`)
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        if (totalCards > 0) {
                          // Deduct a card and proceed with scheduling
                          const newFreeCards = freeCards > 0 ? freeCards - 1 : freeCards
                          const newReferralCards = freeCards > 0 ? referralCards : referralCards - 1

                          localStorage.setItem("freeCards", newFreeCards.toString())
                          localStorage.setItem("referralCards", newReferralCards.toString())
                          setFreeCards(newFreeCards)
                          setReferralCards(newReferralCards)

                          window.location.href = `mailto:info@writeourheart.com?subject=Schedule Card Request for ${heart.name}&body=I would like to schedule a card for ${heart.name} (${heart.relationship}).%0D%0A%0D%0AOccasions: ${heart.occasions.join(", ")}%0D%0A%0D%0APlease confirm this card scheduling request.`
                        } else {
                          alert(
                            "You don't have any free cards left. Please refer friends or upgrade your subscription!",
                          )
                        }
                      }}
                      disabled={totalCards === 0}
                    >
                      Schedule Card {totalCards === 0 && "(No cards left)"}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        if (confirm(`Are you sure you want to delete ${heart.name}?`)) {
                          const updatedHearts = hearts.filter((h) => h.id !== heart.id)
                          setHearts(updatedHearts)
                          localStorage.setItem("hearts", JSON.stringify(updatedHearts))
                        }
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
