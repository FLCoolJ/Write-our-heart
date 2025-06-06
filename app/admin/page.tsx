"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, CreditCard, Printer, Mail, Download, Eye, CheckCircle, Clock } from "lucide-react"

interface AdminStats {
  totalUsers: number
  totalCards: number
  pendingCards: number
  completedCards: number
  revenue: number
}

interface CardOrder {
  id: string
  userName: string
  recipientName: string
  occasion: string
  scheduledDate: string
  status: "pending" | "processing" | "printed" | "shipped"
  address: string
  message: string
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<AdminStats>({
    totalUsers: 0,
    totalCards: 0,
    pendingCards: 0,
    completedCards: 0,
    revenue: 0,
  })

  const [cardOrders, setCardOrders] = useState<CardOrder[]>([])
  const [selectedWeek, setSelectedWeek] = useState(new Date())

  useEffect(() => {
    // Load admin data (in real app, this would come from your backend)
    loadAdminData()
  }, [])

  const loadAdminData = () => {
    // Mock data - replace with actual API calls
    setStats({
      totalUsers: 47,
      totalCards: 156,
      pendingCards: 23,
      completedCards: 133,
      revenue: 2847.5,
    })

    setCardOrders([
      {
        id: "1",
        userName: "Fernando Rodriguez",
        recipientName: "Maria Rodriguez",
        occasion: "Birthday",
        scheduledDate: "2024-02-15",
        status: "pending",
        address: "123 Main St, Los Angeles, CA 90210",
        message: "Happy birthday to the most wonderful mother...",
      },
      // Add more mock orders
    ])
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "processing":
        return "bg-blue-100 text-blue-800"
      case "printed":
        return "bg-green-100 text-green-800"
      case "shipped":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const exportPrintQueue = () => {
    // Generate CSV or PDF for print shop
    const printData = cardOrders.filter((order) => order.status === "pending")
    console.log("Exporting print queue:", printData)
    alert("Print queue exported successfully!")
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Write Our Heart - Admin Dashboard</h1>
          <p className="text-gray-600">Manage cards, users, and print operations</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Users</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalUsers}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Mail className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Cards</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalCards}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Clock className="h-8 w-8 text-yellow-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Pending</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.pendingCards}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <CheckCircle className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Completed</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.completedCards}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <CreditCard className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">${stats.revenue.toFixed(2)}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="print-queue" className="space-y-6">
          <TabsList>
            <TabsTrigger value="print-queue">Print Queue</TabsTrigger>
            <TabsTrigger value="all-orders">All Orders</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="print-queue">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Weekly Print Queue</CardTitle>
                  <div className="flex space-x-2">
                    <Button onClick={exportPrintQueue} className="bg-green-600 hover:bg-green-700">
                      <Download className="w-4 h-4 mr-2" />
                      Export for Print
                    </Button>
                    <Button variant="outline">
                      <Printer className="w-4 h-4 mr-2" />
                      Mark as Printed
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cardOrders
                    .filter((order) => order.status === "pending")
                    .map((order) => (
                      <div key={order.id} className="border rounded-lg p-4 hover:bg-gray-50">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-4">
                              <div>
                                <h3 className="font-semibold">{order.recipientName}</h3>
                                <p className="text-sm text-gray-600">From: {order.userName}</p>
                              </div>
                              <Badge className="bg-purple-100 text-purple-800">{order.occasion}</Badge>
                              <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                            </div>
                            <div className="mt-2 text-sm text-gray-600">
                              <p>
                                <strong>Delivery Date:</strong> {new Date(order.scheduledDate).toLocaleDateString()}
                              </p>
                              <p>
                                <strong>Address:</strong> {order.address}
                              </p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-1" />
                              Preview
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="all-orders">
            <Card>
              <CardHeader>
                <CardTitle>All Card Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cardOrders.map((order) => (
                    <div key={order.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{order.recipientName}</h3>
                          <p className="text-sm text-gray-600">From: {order.userName}</p>
                          <p className="text-sm text-gray-600">Occasion: {order.occasion}</p>
                        </div>
                        <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p>User management interface would go here...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Analytics & Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Analytics dashboard would go here...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
