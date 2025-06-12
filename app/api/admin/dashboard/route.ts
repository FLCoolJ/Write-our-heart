import { NextResponse } from "next/server"

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const range = searchParams.get("range") || "30d"

    // This would query your actual database
    const dashboardData = {
      overview: {
        totalUsers: 1247,
        activeSubscriptions: 892,
        cardsThisMonth: 3456,
        revenue: 15678,
      },
      occasions: [
        { name: "Birthday", count: 1234, percentage: 35 },
        { name: "Anniversary", count: 567, percentage: 16 },
        { name: "Thank You", count: 432, percentage: 12 },
        { name: "Valentine's Day", count: 321, percentage: 9 },
        { name: "Other", count: 987, percentage: 28 },
      ],
      locations: {
        senders: [
          { state: "CA", count: 234 },
          { state: "TX", count: 198 },
          { state: "NY", count: 156 },
          { state: "FL", count: 134 },
          { state: "IL", count: 98 },
        ],
        recipients: [
          { state: "CA", count: 198 },
          { state: "TX", count: 176 },
          { state: "NY", count: 145 },
          { state: "FL", count: 123 },
          { state: "WA", count: 87 },
        ],
      },
      demographics: [
        { ageGroup: "18-25", count: 156 },
        { ageGroup: "26-35", count: 342 },
        { ageGroup: "36-45", count: 298 },
        { ageGroup: "46-55", count: 234 },
        { ageGroup: "56+", count: 217 },
      ],
      weeklyStats: [
        { week: "Week 1", cards: 234, signups: 45 },
        { week: "Week 2", cards: 267, signups: 52 },
        { week: "Week 3", cards: 298, signups: 38 },
        { week: "Week 4", cards: 312, signups: 61 },
      ],
    }

    return NextResponse.json(dashboardData)
  } catch (error) {
    console.error("Dashboard API error:", error)
    return NextResponse.json({ error: "Failed to fetch dashboard data" }, { status: 500 })
  }
}
