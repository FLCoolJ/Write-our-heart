"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { format } from "date-fns"
import { CalendarIcon, Edit, HeartIcon, Mail, Plus, Trash } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Textarea } from "@/components/ui/textarea"

// Define the Heart type
interface HeartType {
  name: string
  relationship: string
  email: string
  phone: string
  address: {
    line1: string
    line2?: string
    city: string
    state: string
    zipCode: string
  }
  occasions: {
    [key: string]: {
      selected: boolean
      date?: Date
      customText?: string
    }
  }
  message?: {
    tone: string
    content: string
    interests: string
  }
}

export default function MyHearts() {
  const router = useRouter()
  const [hearts, setHearts] = useState<HeartType[]>([])
  const [userName, setUserName] = useState("")
  const [selectedHeart, setSelectedHeart] = useState<HeartType | null>(null)
  const [showScheduleDialog, setShowScheduleDialog] = useState(false)
  const [scheduleDate, setScheduleDate] = useState<Date>()
  const [scheduleOccasion, setScheduleOccasion] = useState("")
  const [scheduleMessage, setScheduleMessage] = useState("")
  const [remainingCards, setRemainingCards] = useState(4)
  const [userPlan, setUserPlan] = useState("Individual")
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)

  useEffect(() => {
    // Load hearts from localStorage
    const storedHearts = JSON.parse(localStorage.getItem("hearts") || "[]")
    setHearts(storedHearts)

    // Get user info
    const user = JSON.parse(localStorage.getItem("user") || "{}")
    if (user.name) {
      setUserName(user.name) // Use the stored first name directly
    }

    // Get user plan and set appropriate card limits
    if (user.plan) {
      setUserPlan(user.plan)
      setRemainingCards(user.plan === "Enterprise" ? 8 : 4)
    }
  }, [])

  const handleAddHeart = () => {
    router.push("/add-heart")
  }

  const handleEditHeart = (heart: HeartType) => {
    // In a real app, this would navigate to edit page with the heart data
    localStorage.setItem("editHeart", JSON.stringify(heart))
    router.push("/add-heart")
  }

  const handleScheduleCard = (heart: HeartType) => {
    const subject = encodeURIComponent(`Card Request for ${heart.name}`)
    const body = encodeURIComponent(`
Hello,

I would like to schedule a card for:

Recipient: ${heart.name}
Relationship: ${heart.relationship}
Address: ${heart.address.line1}${heart.address.line2 ? ", " + heart.address.line2 : ""}
City, State ZIP: ${heart.address.city}, ${heart.address.state} ${heart.address.zipCode}
Email: ${heart.email || "Not provided"}
Phone: ${heart.phone || "Not provided"}

Occasions: ${Object.entries(heart.occasions)
      .filter(([_, value]) => value.selected)
      .map(
        ([key, value]) =>
          `${value.customText || key}${value.date ? ` (${format(new Date(value.date), "MMM d, yyyy")})` : ""}`,
      )
      .join(", ")}

Please let me know when this card can be scheduled.

Thank you!
    `)

    window.open(`mailto:info@writeourheart.com?subject=${subject}&body=${body}`)
  }

  const handleDeleteHeart = (heart: HeartType) => {
    setSelectedHeart(heart)
    setShowDeleteDialog(true)
  }

  const confirmDeleteHeart = () => {
    if (selectedHeart) {
      const updatedHearts = hearts.filter((h) => h.name !== selectedHeart.name)
      setHearts(updatedHearts)
      localStorage.setItem("hearts", JSON.stringify(updatedHearts))
      setShowDeleteDialog(false)
    }
  }

  const submitScheduleRequest = () => {
    if (selectedHeart && scheduleDate && scheduleOccasion) {
      // In a real app, this would send an email to info@writeourheart.com
      // For now, we'll just show a success message
      alert(
        `Schedule request sent for ${selectedHeart.name}'s ${scheduleOccasion} card on ${format(scheduleDate, "MMMM d, yyyy")}`,
      )
      setShowScheduleDialog(false)
      setScheduleDate(undefined)
      setScheduleOccasion("")
      setScheduleMessage("")
    }
  }

  // Get upcoming occasions
  const getUpcomingOccasions = () => {
    const upcoming: { name: string; occasion: string; date: Date }[] = []

    hearts.forEach((heart) => {
      Object.entries(heart.occasions).forEach(([key, value]) => {
        if (value.selected && value.date) {
          upcoming.push({
            name: heart.name,
            occasion: value.customText || key,
            date: new Date(value.date),
          })
        }
      })
    })

    // Sort by date
    return upcoming.sort((a, b) => a.date.getTime() - b.date.getTime())
  }

  const upcomingOccasions = getUpcomingOccasions()

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-black">Hi {userName || "there"}!</h1>
          <p className="text-gray-600">Welcome to your Hearts dashboard</p>
        </div>
        <div className="mt-4 md:mt-0">
          <div className="flex flex-col items-end space-y-2">
            <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
              {userPlan} Plan
            </Badge>
            <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-200">
              {remainingCards} cards remaining
            </Badge>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-black">Free Cards</h3>
              <p className="text-3xl font-bold text-yellow-600">{remainingCards}</p>
              <p className="text-sm text-gray-500">Subscription cards left</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-black">Referral Cards</h3>
              <p className="text-3xl font-bold text-green-600">2</p>
              <p className="text-sm text-gray-500">Earned from referrals</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-black">Total Available</h3>
              <p className="text-3xl font-bold text-blue-600">{remainingCards + 2}</p>
              <Button
                variant="outline"
                size="sm"
                className="mt-2"
                onClick={() => {
                  const shareText = "Check out Write Our Heart - the easiest way to send personalized greeting cards!"
                  const shareUrl = window.location.origin
                  if (navigator.share) {
                    navigator.share({ title: "Write Our Heart", text: shareText, url: shareUrl })
                  } else {
                    navigator.clipboard.writeText(`${shareText} ${shareUrl}`)
                    alert("Referral link copied to clipboard!")
                  }
                }}
              >
                Refer Friends (+2 cards)
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {hearts.length === 0 ? (
        <Card className="mb-8">
          <CardContent className="pt-6 pb-6 text-center">
            <div className="mb-4">
              <HeartIcon className="h-12 w-12 text-yellow-500 mx-auto" />
            </div>
            <h2 className="text-xl font-semibold mb-2">No Hearts Added Yet</h2>
            <p className="text-gray-600 mb-6">Add your first Heart to start sending personalized cards</p>
            <Button onClick={handleAddHeart} className="bg-yellow-500 hover:bg-yellow-600 text-black">
              <Plus className="mr-2 h-4 w-4" />
              Add Your First Heart
            </Button>
          </CardContent>
        </Card>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {hearts.map((heart, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-yellow-400 to-yellow-500 pb-4">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-black">{heart.name}</CardTitle>
                    <Badge variant="outline" className="bg-white/80 text-black border-transparent">
                      {heart.relationship}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-700">
                      {heart.address.line1}
                      {heart.address.line2 && <>, {heart.address.line2}</>}
                    </p>
                    <p className="text-gray-700">
                      {heart.address.city}, {heart.address.state} {heart.address.zipCode}
                    </p>
                    {heart.email && <p className="text-gray-700">{heart.email}</p>}
                  </div>

                  <div className="mt-4">
                    <h3 className="text-sm font-medium mb-2">Occasions:</h3>
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(heart.occasions)
                        .filter(([_, value]) => value.selected)
                        .map(([key, value]) => (
                          <Badge key={key} variant="secondary" className="bg-gray-100">
                            {value.customText || key}
                            {value.date && (
                              <span className="ml-1 text-xs">({format(new Date(value.date), "MMM d")})</span>
                            )}
                          </Badge>
                        ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  <Button variant="outline" size="sm" onClick={() => handleEditHeart(heart)}>
                    <Edit className="mr-2 h-3 w-3" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleScheduleCard(heart)}>
                    <Mail className="mr-2 h-3 w-3" />
                    Schedule Card
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    onClick={() => handleDeleteHeart(heart)}
                  >
                    <Trash className="mr-2 h-3 w-3" />
                    Delete
                  </Button>
                </CardFooter>
              </Card>
            ))}

            <Card className="border-dashed border-2 flex items-center justify-center h-[300px]">
              <Button variant="ghost" onClick={handleAddHeart} className="flex flex-col h-24 w-24 rounded-full">
                <Plus className="h-8 w-8 mb-2" />
                <span>Add Heart</span>
              </Button>
            </Card>
          </div>

          {upcomingOccasions.length > 0 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Upcoming Occasions</CardTitle>
                <CardDescription>Cards that will be sent soon</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingOccasions.slice(0, 3).map((item, index) => (
                    <div key={index} className="flex justify-between items-center border-b pb-2">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.occasion}</p>
                      </div>
                      <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
                        {format(new Date(item.date), "MMMM d, yyyy")}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </>
      )}

      {/* Schedule Card Dialog */}
      <Dialog open={showScheduleDialog} onOpenChange={setShowScheduleDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Schedule a Card</DialogTitle>
            <DialogDescription>{selectedHeart && `Send a card to ${selectedHeart.name}`}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="occasion">Occasion</Label>
              <Input
                id="occasion"
                value={scheduleOccasion}
                onChange={(e) => setScheduleOccasion(e.target.value)}
                placeholder="e.g. Birthday, Thank You"
                required
              />
            </div>
            <div className="space-y-2">
              <Label>Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !scheduleDate && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {scheduleDate ? format(scheduleDate, "PPP") : "Select a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={scheduleDate} onSelect={setScheduleDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Additional Notes</Label>
              <Textarea
                id="message"
                value={scheduleMessage}
                onChange={(e) => setScheduleMessage(e.target.value)}
                placeholder="Any special instructions or details"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowScheduleDialog(false)}>
              Cancel
            </Button>
            <Button
              onClick={submitScheduleRequest}
              disabled={!scheduleDate || !scheduleOccasion}
              className="bg-yellow-500 hover:bg-yellow-600 text-black"
            >
              Schedule Card
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Heart Dialog */}
      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete Heart</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete {selectedHeart?.name}? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDeleteDialog(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDeleteHeart}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
