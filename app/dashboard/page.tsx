"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Heart, Gift, Users, Home, Settings, HelpCircle, LogOut, PlusCircle } from "lucide-react"

export default function Dashboard() {
  const [userName, setUserName] = useState("User")
  const [freeCards, setFreeCards] = useState(4)
  const [referralCards, setReferralCards] = useState(0)
  const [heartsCount, setHeartsCount] = useState(0)

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName")
    if (storedUserName) {
      setUserName(storedUserName)
    }

    const storedHearts = localStorage.getItem("hearts")
    if (storedHearts) {
      const hearts = JSON.parse(storedHearts)
      setHeartsCount(hearts.length)
    }
  }, [])

  const totalCards = freeCards + referralCards

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-yellow-500" />
            <div>
              <h1 className="text-lg font-bold text-gray-900">Write Our Heart</h1>
              <p className="text-sm text-gray-500">Beta Dashboard</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <div className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-yellow-50 text-yellow-700 font-medium">
                <Home className="h-5 w-5" />
                <span>Dashboard</span>
              </div>
            </li>
            <li>
              <Link
                href="/my-hearts"
                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <Heart className="h-5 w-5" />
                <span>My Hearts</span>
              </Link>
            </li>
            <li>
              <Link
                href="/add-heart"
                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <PlusCircle className="h-5 w-5" />
                <span>Add Heart</span>
              </Link>
            </li>
            <li>
              <Link
                href="/account"
                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <Settings className="h-5 w-5" />
                <span>Account</span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <HelpCircle className="h-5 w-5" />
                <span>Support</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <Link href="/">
            <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-gray-100">
              <LogOut className="h-5 w-5 mr-3" />
              Back to Main Site
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <main className="p-6">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome, {userName}</h1>
              <p className="text-gray-600">Here's what's happening with your hearts.</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Hearts</CardTitle>
                  <Heart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{heartsCount}</div>
                  <p className="text-xs text-muted-foreground">People you care about</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Free Cards</CardTitle>
                  <Gift className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{freeCards}</div>
                  <p className="text-xs text-muted-foreground">Available to send</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Referral Cards</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{referralCards}</div>
                  <p className="text-xs text-muted-foreground">Earned from referrals</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Available</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{totalCards}</div>
                  <p className="text-xs text-muted-foreground">Cards ready to send</p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link href="/add-heart">
                    <Button className="w-full justify-start bg-yellow-500 hover:bg-yellow-600 text-black">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Add New Heart
                    </Button>
                  </Link>
                  <Link href="/my-hearts">
                    <Button className="w-full justify-start" variant="outline">
                      <Heart className="mr-2 h-4 w-4" />
                      View My Hearts
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Beta Access Granted</p>
                        <p className="text-xs text-gray-500">Welcome to Write Our Heart!</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Free Cards Added</p>
                        <p className="text-xs text-gray-500">4 free cards available</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
