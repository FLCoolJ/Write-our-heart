"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CreditCard, User, Bell } from "lucide-react"

export default function AccountPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  // Mock user data - in a real app, this would come from your auth system
  const user = {
    name: "Test User",
    email: "test@example.com",
    subscription: {
      plan: "individual",
      status: "active",
      renewalDate: "2023-12-01",
      freeCards: 5,
      usedCards: 2,
    },
    stripeCustomerId: "cus_123456789",
  }

  const handleManageSubscription = async () => {
    setLoading(true)

    try {
      const response = await fetch("/api/stripe/create-portal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerId: user.stripeCustomerId,
        }),
      })

      const { url, error } = await response.json()

      if (error) {
        throw new Error(error)
      }

      window.location.href = url
    } catch (error) {
      console.error("Error opening customer portal:", error)
      alert("There was an error opening the billing portal. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-yellow-500 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">Account Settings</h1>
          <p className="text-black/70">Manage your account and subscription</p>
        </div>

        <Tabs defaultValue="subscription" className="space-y-6">
          <TabsList>
            <TabsTrigger value="subscription">
              <CreditCard className="h-4 w-4 mr-2" />
              Subscription
            </TabsTrigger>
            <TabsTrigger value="profile">
              <User className="h-4 w-4 mr-2" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="notifications">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </TabsTrigger>
          </TabsList>

          <TabsContent value="subscription">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Your Subscription</CardTitle>
                    <CardDescription>Manage your subscription and billing</CardDescription>
                  </div>
                  <Badge className="bg-green-100 text-green-800 capitalize">{user.subscription.status}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-sm text-gray-500">Current Plan</div>
                      <div className="text-xl font-semibold capitalize">{user.subscription.plan} Plan</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-sm text-gray-500">Next Billing Date</div>
                      <div className="text-xl font-semibold">
                        {new Date(user.subscription.renewalDate).toLocaleDateString()}
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-sm text-gray-500">Cards Available</div>
                      <div className="text-xl font-semibold">
                        {user.subscription.freeCards - user.subscription.usedCards} of {user.subscription.freeCards}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => router.push("/subscription")}>
                    Change Plan
                  </Button>
                  <Button
                    onClick={handleManageSubscription}
                    disabled={loading}
                    className="bg-yellow-500 hover:bg-yellow-600 text-black"
                  >
                    {loading ? "Loading..." : "Manage Billing"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your account details</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name</label>
                      <input type="text" defaultValue={user.name} className="w-full p-2 border rounded-md" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <input type="email" defaultValue={user.email} className="w-full p-2 border rounded-md" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Password</label>
                    <input type="password" placeholder="••••••••" className="w-full p-2 border rounded-md" />
                  </div>
                  <div className="flex justify-end">
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Save Changes</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Manage how you receive notifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Card Status Updates</h3>
                      <p className="text-sm text-gray-500">
                        Receive notifications when your cards are printed and shipped
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <label className="text-sm">Email</label>
                      <input type="checkbox" defaultChecked className="h-4 w-4" />
                      <label className="text-sm ml-2">SMS</label>
                      <input type="checkbox" className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Subscription Reminders</h3>
                      <p className="text-sm text-gray-500">Get notified before your subscription renews</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <label className="text-sm">Email</label>
                      <input type="checkbox" defaultChecked className="h-4 w-4" />
                      <label className="text-sm ml-2">SMS</label>
                      <input type="checkbox" className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Special Offers</h3>
                      <p className="text-sm text-gray-500">Receive updates about promotions and new features</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <label className="text-sm">Email</label>
                      <input type="checkbox" defaultChecked className="h-4 w-4" />
                      <label className="text-sm ml-2">SMS</label>
                      <input type="checkbox" className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Save Preferences</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
