import { NextResponse } from "next/server"
import { sendVerificationEmail } from "@/lib/email-verification"

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    await sendVerificationEmail(email)

    return NextResponse.json({
      success: true,
      message: "Verification email sent",
    })
  } catch (error) {
    console.error("Email verification error:", error)
    return NextResponse.json({ error: "Failed to send verification email" }, { status: 500 })
  }
}
