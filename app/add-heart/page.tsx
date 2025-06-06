"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, ArrowLeft } from "lucide-react"

export default function AddHeart() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    relationship: "",
    email: "",
    phone: "",
    addressLine: "",
    city: "",
    state: "",
    zipCode: "",
    occasions: [] as string[],
    occasionDates: {} as { [key: string]: string }, // Add this line
    date: "",
  })

  // Add state for the "Other" occasion autocomplete:
  const [otherOccasion, setOtherOccasion] = useState("")
  const [showOtherSuggestions, setShowOtherSuggestions] = useState(false)

  // Add support for editing existing hearts
  // Add this after the useState hooks:
  const [isEditing, setIsEditing] = useState(false)

  // Add a new state variable after the existing useState hooks:
  const [showConfirmation, setShowConfirmation] = useState(false)

  // Add this to the useEffect hook:
  useEffect(() => {
    // Check if we're editing an existing heart
    const editingHeart = localStorage.getItem("editingHeart")
    if (editingHeart) {
      const heartData = JSON.parse(editingHeart)
      setFormData({
        ...heartData,
        occasionDates: heartData.occasionDates || {},
      })
      setOtherOccasion(heartData.otherOccasion || "")
      setIsEditing(true)
      // Clear the editing heart from localStorage
      localStorage.removeItem("editingHeart")
    }
  }, [])

  // Add a useEffect to monitor occasion selections after the existing useEffect:
  useEffect(() => {
    // Show confirmation when user has selected at least one occasion
    setShowConfirmation(formData.occasions.length > 0)
  }, [formData.occasions])

  // Update the handleSubmit function to handle editing:
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create the heart object
    const heartData = {
      ...formData,
      otherOccasion: formData.occasions.includes("other") ? otherOccasion : "",
      id: isEditing ? formData.id : Date.now(),
    }

    // Store in localStorage
    const existingHearts = JSON.parse(localStorage.getItem("hearts") || "[]")

    if (isEditing) {
      // Update existing heart
      const updatedHearts = existingHearts.map((heart: any) => (heart.id === heartData.id ? heartData : heart))
      localStorage.setItem("hearts", JSON.stringify(updatedHearts))
    } else {
      // Add new heart
      localStorage.setItem("currentHeart", JSON.stringify(heartData))
      router.push("/personalize-message")
      return
    }

    // If editing, go directly to my-hearts
    router.push("/my-hearts")
  }

  const handleInputChange = (field: string, value: any) => {
    if (field === "occasions" && typeof value === "string") {
      setFormData((prev) => ({ ...prev, [field]: [value] }))
    } else if (field === "occasions" && Array.isArray(value)) {
      setFormData((prev) => ({ ...prev, [field]: value }))
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }))
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-yellow-500 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center mb-6">
          <Button variant="ghost" onClick={() => router.back()} className="text-black hover:bg-black/10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>

        <Card>
          <CardHeader className="text-center">
            <Heart className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            {/* Update the card header to reflect editing state */}
            {/* Find the CardTitle and replace it with: */}
            <CardTitle className="text-2xl font-bold text-black">{isEditing ? "Edit Heart" : "Add a Heart"}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    placeholder="Enter their name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="relationship">Relationship *</Label>
                  <Input
                    id="relationship"
                    placeholder="e.g., Mother, Friend, Partner"
                    value={formData.relationship}
                    onChange={(e) => handleInputChange("relationship", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="their.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="addressLine">Address</Label>
                <Input
                  id="addressLine"
                  placeholder="Street address"
                  value={formData.addressLine}
                  onChange={(e) => handleInputChange("addressLine", e.target.value)}
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={(e) => handleInputChange("state", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zipCode">ZIP Code</Label>
                  <Input
                    id="zipCode"
                    placeholder="ZIP Code"
                    value={formData.zipCode}
                    onChange={(e) => handleInputChange("zipCode", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="occasions">Occasions *</Label>
                <div className="border rounded-md p-4 space-y-3">
                  {[
                    { name: "Birthday", needsDate: true },
                    { name: "Christmas", needsDate: false },
                    { name: "Valentine's Day", needsDate: false },
                    { name: "Mother's Day", needsDate: false },
                    { name: "Father's Day", needsDate: false },
                    { name: "Graduation", needsDate: true },
                    { name: "Easter", needsDate: false },
                    { name: "St. Patrick's Day", needsDate: false },
                    { name: "Sympathy", needsDate: true },
                    { name: "Thank You", needsDate: false },
                    { name: "Weddings", needsDate: true },
                    { name: "Thinking of You", needsDate: false },
                    { name: "Get Well", needsDate: false },
                    { name: "New Baby", needsDate: true },
                    { name: "Congratulations", needsDate: false },
                  ].map((option) => (
                    <div key={option.name} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id={option.name.toLowerCase().replace(/\s+/g, "-")}
                          checked={formData.occasions.includes(option.name.toLowerCase().replace(/\s+/g, "-"))}
                          onChange={(e) => {
                            const value = option.name.toLowerCase().replace(/\s+/g, "-")
                            if (e.target.checked) {
                              handleInputChange("occasions", [...formData.occasions, value])
                            } else {
                              handleInputChange(
                                "occasions",
                                formData.occasions.filter((item) => item !== value),
                              )
                              // Remove the date for this occasion if unchecked
                              const newDates = { ...formData.occasionDates }
                              delete newDates[value]
                              setFormData((prev) => ({ ...prev, occasionDates: newDates }))
                            }
                          }}
                          className="h-4 w-4 rounded border-gray-300 text-yellow-600 focus:ring-yellow-500"
                        />
                        <Label htmlFor={option.name.toLowerCase().replace(/\s+/g, "-")}>{option.name}</Label>
                      </div>
                      {option.needsDate &&
                        formData.occasions.includes(option.name.toLowerCase().replace(/\s+/g, "-")) && (
                          <div className="flex items-center space-x-2">
                            <Input
                              type="date"
                              value={formData.occasionDates[option.name.toLowerCase().replace(/\s+/g, "-")] || ""}
                              onChange={(e) => {
                                const occasionKey = option.name.toLowerCase().replace(/\s+/g, "-")
                                setFormData((prev) => ({
                                  ...prev,
                                  occasionDates: {
                                    ...prev.occasionDates,
                                    [occasionKey]: e.target.value,
                                  },
                                }))
                              }}
                              className="w-40"
                            />
                          </div>
                        )}
                    </div>
                  ))}

                  {/* Other occasion with autocomplete and date */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="other"
                        checked={formData.occasions.includes("other")}
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleInputChange("occasions", [...formData.occasions, "other"])
                          } else {
                            handleInputChange(
                              "occasions",
                              formData.occasions.filter((item) => item !== "other"),
                            )
                            setOtherOccasion("")
                            // Remove the date for other occasion if unchecked
                            const newDates = { ...formData.occasionDates }
                            delete newDates["other"]
                            setFormData((prev) => ({ ...prev, occasionDates: newDates }))
                          }
                        }}
                        className="h-4 w-4 rounded border-gray-300 text-yellow-600 focus:ring-yellow-500"
                      />
                      <Label htmlFor="other">Other</Label>
                    </div>

                    {formData.occasions.includes("other") && (
                      <div className="ml-6 space-y-2">
                        <div className="relative">
                          <Input
                            placeholder="Type occasion name..."
                            value={otherOccasion}
                            onChange={(e) => {
                              setOtherOccasion(e.target.value)
                              setShowOtherSuggestions(e.target.value.length > 1)
                            }}
                            onFocus={() => setShowOtherSuggestions(otherOccasion.length > 1)}
                            onBlur={() => setTimeout(() => setShowOtherSuggestions(false), 200)}
                            className="w-full"
                          />

                          {showOtherSuggestions && (
                            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-40 overflow-y-auto">
                              {[
                                "Anniversary",
                                "Retirement",
                                "Housewarming",
                                "Promotion",
                                "Apology",
                                "Encouragement",
                                "Friendship",
                                "Love",
                                "Miss You",
                                "Good Luck",
                              ]
                                .filter((suggestion) => suggestion.toLowerCase().includes(otherOccasion.toLowerCase()))
                                .map((suggestion) => (
                                  <div
                                    key={suggestion}
                                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => {
                                      setOtherOccasion(suggestion)
                                      setShowOtherSuggestions(false)
                                    }}
                                  >
                                    {suggestion}
                                  </div>
                                ))}
                            </div>
                          )}
                        </div>

                        <div className="flex items-center space-x-2">
                          <Label className="text-sm">Date:</Label>
                          <Input
                            type="date"
                            value={formData.occasionDates["other"] || ""}
                            onChange={(e) => {
                              setFormData((prev) => ({
                                ...prev,
                                occasionDates: {
                                  ...prev.occasionDates,
                                  other: e.target.value,
                                },
                              }))
                            }}
                            className="w-40"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Confirmation Section */}
              {showConfirmation && (
                <div className="space-y-4">
                  <div className="bg-green-100 border border-green-300 rounded-lg p-4">
                    <h3 className="text-black font-semibold mb-2">Selected Occasions:</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {formData.occasions.map((occasion) => {
                        const displayName =
                          occasion === "other" && otherOccasion
                            ? otherOccasion
                            : occasion.charAt(0).toUpperCase() + occasion.slice(1).replace("-", " ")

                        const hasDate = formData.occasionDates[occasion]
                        const needsDate = [
                          "birthday",
                          "graduation",
                          "sympathy",
                          "new-baby",
                          "weddings",
                          "other",
                        ].includes(occasion)

                        return (
                          <div
                            key={occasion}
                            className={`px-3 py-1 rounded-full text-sm ${
                              needsDate && !hasDate ? "bg-yellow-200 text-yellow-800" : "bg-green-200 text-green-800"
                            }`}
                          >
                            {displayName}
                            {hasDate && (
                              <span className="ml-1 text-xs">
                                ({new Date(hasDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })})
                              </span>
                            )}
                            {needsDate && !hasDate && <span className="ml-1 text-xs">⚠️ Needs date</span>}
                          </div>
                        )
                      })}
                    </div>

                    {/* Check if any occasions need dates */}
                    {formData.occasions.some(
                      (occ) =>
                        ["birthday", "graduation", "sympathy", "new-baby", "weddings", "other"].includes(occ) &&
                        !formData.occasionDates[occ],
                    ) ? (
                      <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                        <p className="text-black text-sm mb-2">
                          ⚠️ Some occasions still need dates. Please add dates or continue without them.
                        </p>
                        <div className="flex space-x-2">
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => setShowConfirmation(false)}
                            className="bg-yellow-100 hover:bg-yellow-200 text-black"
                          >
                            Revise Selections
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-green-50 border border-green-200 rounded p-3">
                        <p className="text-black font-medium">✅ Done! All selected occasions are ready.</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Update the submit button to reflect editing state */}
              {/* Find the submit button and replace it with: */}
              <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black text-lg py-3">
                {isEditing ? "Save Changes" : "Continue"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
