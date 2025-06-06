"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Bell, Mail, Phone } from "lucide-react"

interface NotificationPreference {
  email: boolean
  sms: boolean
}

interface NotificationPreferences {
  cardScheduled: NotificationPreference
  cardPrinted: NotificationPreference
  cardShipped: NotificationPreference
  subscriptionRenewal: NotificationPreference
  specialOffers: NotificationPreference
}

interface NotificationPreferencesProps {
  initialPreferences?: Partial<NotificationPreferences>
  onSave?: (preferences: NotificationPreferences) => void
}

export function NotificationPreferences({ initialPreferences, onSave }: NotificationPreferencesProps) {
  const [preferences, setPreferences] = useState<NotificationPreferences>({
    cardScheduled: { email: true, sms: false },
    cardPrinted: { email: true, sms: true },
    cardShipped: { email: true, sms: true },
    subscriptionRenewal: { email: true, sms: false },
    specialOffers: { email: true, sms: false },
    ...initialPreferences,
  })

  const handleToggle = (
    category: keyof NotificationPreferences,
    channel: keyof NotificationPreference,
    value: boolean,
  ) => {
    setPreferences((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [channel]: value,
      },
    }))
  }

  const handleSave = () => {
    onSave?.(preferences)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Bell className="mr-2 h-5 w-5" />
          Notification Preferences
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4 items-center">
            <div className="col-span-1"></div>
            <div className="flex items-center justify-center">
              <Mail className="mr-1 h-4 w-4" />
              <Label>Email</Label>
            </div>
            <div className="flex items-center justify-center">
              <Phone className="mr-1 h-4 w-4" />
              <Label>SMS</Label>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center">
            <div>
              <p className="font-medium">Card Scheduled</p>
              <p className="text-sm text-gray-500">When your card is scheduled for printing</p>
            </div>
            <div className="flex justify-center">
              <Switch
                checked={preferences.cardScheduled.email}
                onCheckedChange={(checked) => handleToggle("cardScheduled", "email", checked)}
              />
            </div>
            <div className="flex justify-center">
              <Switch
                checked={preferences.cardScheduled.sms}
                onCheckedChange={(checked) => handleToggle("cardScheduled", "sms", checked)}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center">
            <div>
              <p className="font-medium">Card Printed</p>
              <p className="text-sm text-gray-500">When your card has been printed</p>
            </div>
            <div className="flex justify-center">
              <Switch
                checked={preferences.cardPrinted.email}
                onCheckedChange={(checked) => handleToggle("cardPrinted", "email", checked)}
              />
            </div>
            <div className="flex justify-center">
              <Switch
                checked={preferences.cardPrinted.sms}
                onCheckedChange={(checked) => handleToggle("cardPrinted", "sms", checked)}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center">
            <div>
              <p className="font-medium">Card Shipped</p>
              <p className="text-sm text-gray-500">When your card has been shipped</p>
            </div>
            <div className="flex justify-center">
              <Switch
                checked={preferences.cardShipped.email}
                onCheckedChange={(checked) => handleToggle("cardShipped", "email", checked)}
              />
            </div>
            <div className="flex justify-center">
              <Switch
                checked={preferences.cardShipped.sms}
                onCheckedChange={(checked) => handleToggle("cardShipped", "sms", checked)}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center">
            <div>
              <p className="font-medium">Subscription Renewal</p>
              <p className="text-sm text-gray-500">When your subscription renews</p>
            </div>
            <div className="flex justify-center">
              <Switch
                checked={preferences.subscriptionRenewal.email}
                onCheckedChange={(checked) => handleToggle("subscriptionRenewal", "email", checked)}
              />
            </div>
            <div className="flex justify-center">
              <Switch
                checked={preferences.subscriptionRenewal.sms}
                onCheckedChange={(checked) => handleToggle("subscriptionRenewal", "sms", checked)}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center">
            <div>
              <p className="font-medium">Special Offers</p>
              <p className="text-sm text-gray-500">Promotions and new features</p>
            </div>
            <div className="flex justify-center">
              <Switch
                checked={preferences.specialOffers.email}
                onCheckedChange={(checked) => handleToggle("specialOffers", "email", checked)}
              />
            </div>
            <div className="flex justify-center">
              <Switch
                checked={preferences.specialOffers.sms}
                onCheckedChange={(checked) => handleToggle("specialOffers", "sms", checked)}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button onClick={handleSave} className="bg-yellow-500 hover:bg-yellow-600 text-black">
            Save Preferences
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
