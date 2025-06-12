import { NextResponse } from "next/server"
import { getClientIP, logUserActivity, checkIPLimits } from "@/lib/ip-tracking"

export async function POST(req: Request) {
  try {
    const { email, action } = await req.json()
    const ipAddress = getClientIP()
    const userAgent = req.headers.get("user-agent") || "unknown"

    // Check IP limits
    const ipCheck = await checkIPLimits(ipAddress)
    if (!ipCheck.allowed) {
      return NextResponse.json({ error: ipCheck.reason }, { status: 429 })
    }

    // Log the activity
    await logUserActivity({
      email,
      action,
      ipAddress,
      userAgent,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("IP tracking error:", error)
    return NextResponse.json({ error: "Failed to track activity" }, { status: 500 })
  }
}
