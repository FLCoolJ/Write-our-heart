"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { Users, CreditCard, Calendar, Printer, Download, Eye } from "lucide-react"

// Types
interface User {
  id: string
  name: string
  email: string
  plan: "Basic" | "Premium" | "Enterprise"
  cardsRemaining: number
  cardsUsed: number
  joinDate: Date
  lastActive: Date
  status: "active" | "inactive" | "suspended"
}

interface ScheduledCard {
  id: string
  userId: string
  userName: string
  recipientName: string
  recipientAddress: string
  occasion: string
  scheduledDate: Date
  status:
    | "pending"
    | "ai_processing"
    | "design_ready"
    | "queued_for_print"
    | "printing"
    | "printed"
    | "mailed"
    | "delivered"
  aiGenerated: boolean
  designUrl?: string
  trackingNumber?: string
}

interface PrintBatch {
  id: string
  date: Date
  cardCount: number
  status: "scheduled" | "printing" | "completed"
  estimatedCompletion: Date
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterPlan, setFilterPlan] = useState("all")

  // Mock data - in real app this would come from API
  const [users, setUsers] = useState<User[]>([
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      plan: "Basic",
      cardsRemaining: 2,
      cardsUsed: 2,
      joinDate: new Date(2023, 5, 15),
      lastActive: new Date(2023, 8, 20),
      status: "active",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      plan: "Premium",
      cardsRemaining: 7,
      cardsUsed: 5,
      joinDate: new Date(2023, 6, 22),
      lastActive: new Date(2023, 8, 19),
      status: "active",
    },
    {
      id: "3",
      name: "Bob Johnson",
      email: "bob@example.com",
      plan: "Enterprise",
      cardsRemaining: 15,
      cardsUsed: 9,
      joinDate: new Date(2023, 7, 10),
      lastActive: new Date(2023, 8, 18),
      status: "active",
    },
  ])

  const [scheduledCards, setScheduledCards] = useState<ScheduledCard[]>([
    {
      id: "card1",
      userId: "1",
      userName: "John Doe",
      recipientName: "Mary Doe",
      recipientAddress: "123 Main St, Anytown, ST 12345",
      occasion: "Birthday",
      scheduledDate: new Date(2023, 8, 25),
      status: "ai_processing",
      aiGenerated: true,
    },
    {
      id: "card2",
      userId: "2",
      userName: "Jane Smith",
      recipientName: "Tom Smith",
      recipientAddress: "456 Oak Ave, Somewhere, ST 67890",
      occasion: "Anniversary",
      scheduledDate: new Date(2023, 8, 28),
      status: "design_ready",
      aiGenerated: true,
      designUrl: "/designs/card2.pdf",
    },
    {
      id: "card3",
      userId: "3",
      userName: "Bob Johnson",
      recipientName: "Alice Johnson",
      recipientAddress: "789 Pine Rd, Elsewhere, ST 54321",
      occasion: "Graduation",
      scheduledDate: new Date(2023, 9, 5),
      status: "queued_for_print",
      aiGenerated: true,
      designUrl: "/designs/card3.pdf",
    },
  ])

  const [printBatches, setPrintBatches] = useState<PrintBatch[]>([
    {
      id: "batch1",
      date: new Date(2023, 8, 24), // This Sunday
      cardCount: 15,
      status: "scheduled",
      estimatedCompletion: new Date(2023, 8, 25),
    },
    {
      id: "batch2",
      date: new Date(2023, 8, 17), // Last Sunday
      cardCount: 12,
      status: "completed",
      estimatedCompletion: new Date(2023, 8, 18),
    },
  ])

  // Analytics data
  const monthlyData = [
    { month: "Jan", cards: 45, users: 12 },
    { month: "Feb", cards: 52, users: 15 },
    { month: "Mar", cards: 48, users: 18 },
    { month: "Apr", cards: 61, users: 22 },
    { month: "May", cards: 55, users: 25 },
    { month: "Jun", cards: 67, users: 28 },
    { month: "Jul", cards: 72, users: 32 },
    { month: "Aug", cards: 68, users: 35 },
  ]

  const planDistribution = [
    { name: "Basic", value: 60, color: "#0088FE" },
    { name: "Premium", value: 30, color: "#00C49F" },
    { name: "Enterprise", value: 10, color: "#FFBB28" },
  ]

  const statusDistribution = scheduledCards.reduce(
    (acc, card) => {
      acc[card.status] = (acc[card.status] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  // Filtered data
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "all" || user.status === filterStatus
    const matchesPlan = filterPlan === "all" || user.plan === filterPlan
    return matchesSearch && matchesStatus && matchesPlan
  })

  const filteredCards = scheduledCards.filter((card) => {
    const matchesSearch =
      card.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.recipientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.occasion.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesSearch
  })

  // Stats calculations
  const totalUsers = users.length
  const activeUsers = users.filter((u) => u.status === "active").length
  const totalCardsScheduled = scheduledCards.length
  const cardsReadyToPrint = scheduledCards.filter((c) => c.status === "queued_for_print").length
  const totalRevenue = users.reduce((sum, user) => {
    const planPrices = { Basic: 4.99, Premium: 9.99, Enterprise: 17.99 }
    return sum + planPrices[user.plan]
  }, 0)

  const getStatusColor = (status: string) => {
    const colors = {
      pending: "bg-yellow-100 text-yellow-800",
      ai_processing: "bg-blue-100 text-blue-800",
      design_ready: "bg-green-100 text-green-800",
      queued_for_print: "bg-purple-100 text-purple-800",
      printing: "bg-orange-100 text-orange-800",
      printed: "bg-gray-100 text-gray-800",
      mailed: "bg-indigo-100 text-indigo-800",
      delivered: "bg-emerald-100 text-emerald-800",
    }
    return colors[status as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  const exportPrintQueue = () => {
    const printReady = scheduledCards.filter((c) => c.status === "queued_for_print")
    const csvContent = [
      ["Card ID", "Recipient", "Address", "Occasion", "Scheduled Date", "Design URL"].join(","),
      ...printReady.map((card) =>
        [
          card.id,
          card.recipientName,
          `"${card.recipientAddress}"`,
          card.occasion,
          card.scheduledDate.toLocaleDateString(),
          card.designUrl || "",
        ].join(","),
      ),
    ].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `print-queue-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-black">Admin Dashboard</h1>
          <p className="text-gray-600">Write Our Heart - Management Console</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={exportPrintQueue}>
            <Download className="mr-2 h-4 w-4" />
            Export Print Queue
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="cards">Cards</TabsTrigger>
          <TabsTrigger value="print">Print Queue</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalUsers}</div>
                <p className="text-xs text-muted-foreground">{activeUsers} active users</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Cards Scheduled</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalCardsScheduled}</div>
                <p className="text-xs text-muted-foreground">{cardsReadyToPrint} ready to print</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${totalRevenue.toFixed(2)}</div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Print Batches</CardTitle>
                <Printer className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{printBatches.length}</div>
                <p className="text-xs text-muted-foreground">
                  Next: {printBatches.find((b) => b.status === "scheduled")?.date.toLocaleDateString()}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Card Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {scheduledCards.slice(0, 5).map((card) => (
                    <div key={card.id} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{card.recipientName}</p>
                        <p className="text-sm text-gray-500">
                          {card.occasion} • {card.userName}
                        </p>
                      </div>
                      <Badge className={getStatusColor(card.status)}>{card.status.replace("_", " ")}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Print Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {printBatches.map((batch) => (
                    <div key={batch.id} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{batch.date.toLocaleDateString()}</p>
                        <p className="text-sm text-gray-500">{batch.cardCount} cards</p>
                      </div>
                      <Badge
                        className={
                          batch.status === "completed"
                            ? "bg-green-100 text-green-800"
                            : batch.status === "printing"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-yellow-100 text-yellow-800"
                        }
                      >
                        {batch.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <Input
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="md:w-1/3"
            />
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="md:w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="suspended">Suspended</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterPlan} onValueChange={setFilterPlan}>
              <SelectTrigger className="md:w-48">
                <SelectValue placeholder="Filter by plan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Plans</SelectItem>
                <SelectItem value="Basic">Basic</SelectItem>
                <SelectItem value="Premium">Premium</SelectItem>
                <SelectItem value="Enterprise">Enterprise</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>Manage user accounts and subscriptions</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Plan</TableHead>
                    <TableHead>Cards Left</TableHead>
                    <TableHead>Cards Used</TableHead>
                    <TableHead>Join Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{user.plan}</Badge>
                      </TableCell>
                      <TableCell>{user.cardsRemaining}</TableCell>
                      <TableCell>{user.cardsUsed}</TableCell>
                      <TableCell>{user.joinDate.toLocaleDateString()}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            user.status === "active"
                              ? "bg-green-100 text-green-800"
                              : user.status === "inactive"
                                ? "bg-gray-100 text-gray-800"
                                : "bg-red-100 text-red-800"
                          }
                        >
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cards" className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <Input
              placeholder="Search cards..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="md:w-1/3"
            />
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="md:w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="ai_processing">AI Processing</SelectItem>
                <SelectItem value="design_ready">Design Ready</SelectItem>
                <SelectItem value="queued_for_print">Queued for Print</SelectItem>
                <SelectItem value="printing">Printing</SelectItem>
                <SelectItem value="mailed">Mailed</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Card Management</CardTitle>
              <CardDescription>Track all scheduled and processed cards</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Card ID</TableHead>
                    <TableHead>Sender</TableHead>
                    <TableHead>Recipient</TableHead>
                    <TableHead>Occasion</TableHead>
                    <TableHead>Scheduled Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>AI Generated</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCards.map((card) => (
                    <TableRow key={card.id}>
                      <TableCell className="font-mono text-sm">{card.id}</TableCell>
                      <TableCell>{card.userName}</TableCell>
                      <TableCell>{card.recipientName}</TableCell>
                      <TableCell>{card.occasion}</TableCell>
                      <TableCell>{card.scheduledDate.toLocaleDateString()}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(card.status)}>{card.status.replace("_", " ")}</Badge>
                      </TableCell>
                      <TableCell>
                        {card.aiGenerated ? (
                          <Badge className="bg-blue-100 text-blue-800">Yes</Badge>
                        ) : (
                          <Badge variant="outline">No</Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          {card.designUrl && (
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="print" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Print Queue</CardTitle>
                <CardDescription>Cards ready for printing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {scheduledCards
                    .filter((card) => card.status === "queued_for_print")
                    .map((card) => (
                      <div key={card.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{card.recipientName}</p>
                          <p className="text-sm text-gray-500">
                            {card.occasion} • {card.userName}
                          </p>
                          <p className="text-xs text-gray-400">{card.recipientAddress}</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Print Batches</CardTitle>
                <CardDescription>Scheduled and completed print runs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {printBatches.map((batch) => (
                    <div key={batch.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{batch.date.toLocaleDateString()}</p>
                        <p className="text-sm text-gray-500">{batch.cardCount} cards</p>
                        <p className="text-xs text-gray-400">
                          Est. completion: {batch.estimatedCompletion.toLocaleDateString()}
                        </p>
                      </div>
                      <Badge
                        className={
                          batch.status === "completed"
                            ? "bg-green-100 text-green-800"
                            : batch.status === "printing"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-yellow-100 text-yellow-800"
                        }
                      >
                        {batch.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="cards" fill="#8884d8" name="Cards Sent" />
                    <Bar dataKey="users" fill="#82ca9d" name="New Users" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Plan Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={planDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {planDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Card Status Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(statusDistribution).map(([status, count]) => (
                  <div key={status} className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold">{count}</div>
                    <div className="text-sm text-gray-500 capitalize">{status.replace("_", " ")}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
