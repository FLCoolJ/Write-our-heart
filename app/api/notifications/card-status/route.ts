import { NextResponse } from "next/server"
import { sendNotification } from "@/lib/notifications"

export async function POST(req: Request) {
  try {
    const { userId, cardId, status, recipientName, occasion } = await req.json()

    // Validate required fields
    if (!userId || !cardId || !status || !recipientName || !occasion) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real app, you would fetch the user from your database
    // const user = await db.user.findUnique({ where: { id: userId } })

    // For demo purposes, we'll use mock user data
    const user = {
      email: "test@example.com",
      phone: "+15551234567", // Optional
      notificationPreferences: {
        cardScheduled: { email: true, sms: false },
        cardPrinted: { email: true, sms: true },
        cardShipped: { email: true, sms: true },
      },
    }

    // Determine which notification template to use based on status
    let notificationType: any

    switch (status) {
      case "scheduled":
        notificationType = "cardScheduled"
        break
      case "printed":
        notificationType = "cardPrinted"
        break
      case "shipped":
        notificationType = "cardShipped"
        break
      default:
        return NextResponse.json({ error: "Invalid card status" }, { status: 400 })
    }

    // Send notification
    const result = await sendNotification(user, notificationType, { recipientName, occasion })

    // In a real app, you would update the card status in your database
    // await db.card.update({
    //   where: { id: cardId },
    //   data: { status }
    // })

    return NextResponse.json({ success: true, result })
  } catch (error: any) {
    console.error("Error sending card status notification:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
