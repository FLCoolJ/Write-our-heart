"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { format } from "date-fns"
import { ChevronLeft } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

// Define occasion types
const occasionTypes = [
  { id: "birthday", label: "Birthday", needsDate: true, needsYear: true },
  { id: "christmas", label: "Christmas", needsDate: false },
  { id: "valentines", label: "Valentine's Day", needsDate: false },
  { id: "mothersDay", label: "Mother's Day", needsDate: false },
  { id: "fathersDay", label: "Father's Day", needsDate: false },
  { id: "graduation", label: "Graduation", needsDate: true },
  { id: "easter", label: "Easter", needsDate: false },
  { id: "stPatricks", label: "St. Patrick's Day", needsDate: false },
  { id: "sympathy", label: "Sympathy", needsDate: true },
  { id: "thankYou", label: "Thank You", needsDate: true },
  { id: "wedding", label: "Wedding", needsDate: true },
  { id: "thinkingOfYou", label: "Thinking of You", needsDate: true },
  { id: "getWell", label: "Get Well", needsDate: true },
  { id: "newBaby", label: "New Baby", needsDate: true },
  { id: "congratulations", label: "Congratulations", needsDate: true },
  { id: "other", label: "Other", needsDate: true, customText: true },
]

export default function AddHeart() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [relationship, setRelationship] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address1, setAddress1] = useState("")
  const [address2, setAddress2] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [selectedOccasions, setSelectedOccasions] = useState<{
    [key: string]: { selected: boolean; date?: Date; customText?: string; birthYear?: number }
  }>({})
  const [showCalendar, setShowCalendar] = useState(false)
  const [currentOccasion, setCurrentOccasion] = useState("")
  const [customOccasion, setCustomOccasion] = useState("")
  const [showReviewDialog, setShowReviewDialog] = useState(false)
  const [calendarDialogs, setCalendarDialogs] = useState<{ [key: string]: boolean }>({})

  const handleOccasionToggle = (occasionId: string) => {
    setSelectedOccasions((prev) => {
      const occasion = occasionTypes.find((o) => o.id === occasionId)
      const isSelected = prev[occasionId]?.selected || false

      // If toggling on and needs date, prepare to show calendar
      if (!isSelected && occasion?.needsDate) {
        setCurrentOccasion(occasionId)
        setShowCalendar(true)
      }

      return {
        ...prev,
        [occasionId]: {
          selected: !isSelected,
          date: prev[occasionId]?.date,
          customText: prev[occasionId]?.customText,
          birthYear: prev[occasionId]?.birthYear,
        },
      }
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // In a real app, this would save to a database
    const heartData = {
      name,
      relationship,
      email,
      phone,
      address: {
        line1: address1,
        line2: address2,
        city,
        state,
        zipCode,
      },
      occasions: selectedOccasions,
    }

    // Save to localStorage for demo purposes
    const existingHearts = JSON.parse(localStorage.getItem("hearts") || "[]")
    localStorage.setItem("hearts", JSON.stringify([...existingHearts, heartData]))

    router.push("/personalize-message")
  }

  const handleReviewOccasions = () => {
    setShowReviewDialog(true)
  }

  // Generate year options (from 1920 to current year)
  const currentYear = new Date().getFullYear()
  const yearOptions = Array.from({ length: currentYear - 1919 }, (_, i) => currentYear - i)

  return (
    <div className="container max-w-2xl mx-auto py-8 px-4">
      <div className="mb-6">
        <Button variant="ghost" onClick={() => router.back()} className="mb-4">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <h1 className="text-3xl font-bold text-black">Add a Heart</h1>
        <p className="text-gray-600">Enter details about your special someone</p>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader className="bg-gradient-to-r from-yellow-400 to-yellow-500">
            <CardTitle className="text-black">Recipient Information</CardTitle>
            <CardDescription className="text-gray-700">
              Fill in the details of the person you want to send cards to
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name*</Label>
                  <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="relationship">Relationship*</Label>
                  <Input
                    id="relationship"
                    placeholder="e.g. Mother, Friend, Colleague"
                    value={relationship}
                    onChange={(e) => setRelationship(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address1">Address Line 1*</Label>
                <Input id="address1" value={address1} onChange={(e) => setAddress1(e.target.value)} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address2">Address Line 2</Label>
                <Input id="address2" value={address2} onChange={(e) => setAddress2(e.target.value)} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City*</Label>
                  <Input id="city" value={city} onChange={(e) => setCity(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State*</Label>
                  <Input id="state" value={state} onChange={(e) => setState(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zipCode">Zip Code*</Label>
                  <Input id="zipCode" value={zipCode} onChange={(e) => setZipCode(e.target.value)} required />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label className="text-base">Occasions</Label>
                  <p className="text-sm text-gray-500 mb-2">Select all occasions you'd like to send cards for</p>

                  <div className="space-y-3">
                    {occasionTypes
                      .filter((o) => o.id !== "other")
                      .map((occasion) => (
                        <div key={occasion.id} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id={occasion.id}
                              checked={selectedOccasions[occasion.id]?.selected || false}
                              onCheckedChange={() => handleOccasionToggle(occasion.id)}
                            />
                            <Label htmlFor={occasion.id} className="text-sm font-normal">
                              {occasion.label}
                            </Label>
                          </div>
                          {occasion.needsDate && selectedOccasions[occasion.id]?.selected && (
                            <div className="flex items-center space-x-2">
                              {/* Birth Year Selector for Birthday */}
                              {occasion.needsYear && (
                                <Select
                                  value={selectedOccasions[occasion.id]?.birthYear?.toString() || ""}
                                  onValueChange={(value) => {
                                    setSelectedOccasions((prev) => ({
                                      ...prev,
                                      [occasion.id]: {
                                        ...prev[occasion.id],
                                        birthYear: Number.parseInt(value),
                                      },
                                    }))
                                  }}
                                >
                                  <SelectTrigger className="w-20">
                                    <SelectValue placeholder="Year" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {yearOptions.map((year) => (
                                      <SelectItem key={year} value={year.toString()}>
                                        {year}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              )}
                              <Dialog
                                open={calendarDialogs[occasion.id] || false}
                                onOpenChange={(open) =>
                                  setCalendarDialogs((prev) => ({ ...prev, [occasion.id]: open }))
                                }
                              >
                                <DialogTrigger asChild>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className={cn(
                                      "text-left font-normal",
                                      !selectedOccasions[occasion.id]?.date && "text-muted-foreground",
                                    )}
                                    onClick={() => setCalendarDialogs((prev) => ({ ...prev, [occasion.id]: true }))}
                                  >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {selectedOccasions[occasion.id]?.date
                                      ? format(new Date(selectedOccasions[occasion.id].date as Date), "MMM d")
                                      : "Select date"}
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="p-0 bg-white w-auto">
                                  <Calendar
                                    mode="single"
                                    selected={
                                      selectedOccasions[occasion.id]?.date
                                        ? new Date(selectedOccasions[occasion.id].date as Date)
                                        : undefined
                                    }
                                    onSelect={(date) => {
                                      if (date) {
                                        setSelectedOccasions((prev) => ({
                                          ...prev,
                                          [occasion.id]: {
                                            ...prev[occasion.id],
                                            selected: true,
                                            date,
                                          },
                                        }))
                                        setCalendarDialogs((prev) => ({ ...prev, [occasion.id]: false }))
                                      }
                                    }}
                                    initialFocus
                                    className="border-none"
                                    captionLayout="dropdown-buttons"
                                    fromYear={1920}
                                    toYear={currentYear + 10}
                                  />
                                </DialogContent>
                              </Dialog>
                            </div>
                          )}
                        </div>
                      ))}

                    {/* Other occasion with autocomplete */}
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="other"
                          checked={selectedOccasions.other?.selected || false}
                          onCheckedChange={() => handleOccasionToggle("other")}
                        />
                        <Label htmlFor="other" className="text-sm font-normal">
                          Other
                        </Label>
                      </div>
                      {selectedOccasions.other?.selected && (
                        <div className="flex items-center space-x-2">
                          <Input
                            value={customOccasion}
                            onChange={(e) => setCustomOccasion(e.target.value)}
                            placeholder="Type occasion..."
                            className="w-32"
                            list="occasion-suggestions"
                          />
                          <datalist id="occasion-suggestions">
                            <option value="Anniversary" />
                            <option value="Retirement" />
                            <option value="Housewarming" />
                            <option value="Promotion" />
                            <option value="Get Well Soon" />
                            <option value="Just Because" />
                          </datalist>
                          <Dialog
                            open={calendarDialogs.other || false}
                            onOpenChange={(open) => setCalendarDialogs((prev) => ({ ...prev, other: open }))}
                          >
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                className={cn(
                                  "text-left font-normal",
                                  !selectedOccasions.other?.date && "text-muted-foreground",
                                )}
                                onClick={() => setCalendarDialogs((prev) => ({ ...prev, other: true }))}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {selectedOccasions.other?.date
                                  ? format(new Date(selectedOccasions.other.date as Date), "MMM d, yyyy")
                                  : "Date"}
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="p-0 bg-white w-auto">
                              <Calendar
                                mode="single"
                                selected={
                                  selectedOccasions.other?.date
                                    ? new Date(selectedOccasions.other.date as Date)
                                    : undefined
                                }
                                onSelect={(date) => {
                                  if (date) {
                                    setSelectedOccasions((prev) => ({
                                      ...prev,
                                      other: {
                                        ...prev.other,
                                        date,
                                        customText: customOccasion,
                                      },
                                    }))
                                    setCalendarDialogs((prev) => ({ ...prev, other: false }))
                                  }
                                }}
                                initialFocus
                                className="border-none"
                                captionLayout="dropdown-buttons"
                                fromYear={1920}
                                toYear={currentYear + 10}
                              />
                            </DialogContent>
                          </Dialog>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Green confirmation box */}
                  {Object.values(selectedOccasions).some((o) => o.selected) && (
                    <div className="mt-4 p-4 bg-green-100 border border-green-200 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-green-800">Selected Occasions</h3>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {Object.entries(selectedOccasions)
                              .filter(([_, value]) => value.selected)
                              .map(([key, value]) => (
                                <Badge key={key} className="bg-green-200 text-green-800">
                                  {key === "other" && value.customText
                                    ? value.customText
                                    : occasionTypes.find((o) => o.id === key)?.label || key}
                                  {value.date && ` (${format(value.date, "MMM d")})`}
                                  {value.birthYear && ` - Born ${value.birthYear}`}
                                </Badge>
                              ))}
                          </div>
                        </div>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => setShowReviewDialog(true)}
                          className="text-green-700 border-green-300"
                        >
                          Review
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="button" variant="outline" onClick={handleReviewOccasions} className="w-full">
              Review Selected Occasions
            </Button>
            <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white">
              Continue
            </Button>
          </CardFooter>
        </Card>
      </form>

      <Dialog open={showReviewDialog} onOpenChange={setShowReviewDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Selected Occasions</DialogTitle>
          </DialogHeader>
          <div className="space-y-2">
            {Object.entries(selectedOccasions)
              .filter(([_, value]) => value.selected)
              .map(([key, value]) => {
                const occasion = occasionTypes.find((o) => o.id === key)
                return (
                  <div key={key} className="flex justify-between items-center py-2 border-b">
                    <div>{key === "other" && value.customText ? value.customText : occasion?.label}</div>
                    <div className="text-sm text-gray-500">
                      {value.date ? format(value.date, "MMMM d, yyyy") : "No date required"}
                      {value.birthYear && ` (Born ${value.birthYear})`}
                    </div>
                  </div>
                )
              })}
          </div>
          {Object.entries(selectedOccasions).filter(([_, value]) => value.selected).length === 0 && (
            <p className="text-center text-gray-500 py-4">No occasions selected yet</p>
          )}
          <div className="flex justify-end">
            <Button onClick={() => setShowReviewDialog(false)} className="bg-green-600 hover:bg-green-700 text-white">
              Done
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
