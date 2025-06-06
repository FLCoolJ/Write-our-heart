import { NextResponse } from "next/server"
import { sendNotification } from "@/lib/notifications"

export async function POST(req: Request) {
  try {
    const { userId, type, planName, cardCount } = await req.json()

    // Validate required fields
    if (!userId || !type) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real app, you would fetch the user from your database
    // const user = await db.user.findUnique({ where: { id: userId } })

    // For demo purposes, we'll use mock user data
    const user = {
      email: "test@example.com",
      phone: "+15551234567", // Optional
      notificationPreferences: {
        subscriptionRenewal: { email: true, sms: false },
      },
    }

    // Currently only supporting subscription renewal notifications
    if (type !== "renewal") {
      return NextResponse.json({ error: "Invalid notification type" }, { status: 400 })
    }

    // Send notification
    const result = await sendNotification(user, "subscriptionRenewal", { planName, cardCount })

    return NextResponse.json({ success: true, result })
  } catch (error: any) {
    console.error("Error sending subscription notification:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
