import { NextResponse } from "next/server"
import { validateUSPSAddress } from "@/lib/usps-integration"

export async function POST(req: Request) {
  try {
    const addressData = await req.json()

    const result = await validateUSPSAddress(addressData)

    return NextResponse.json(result)
  } catch (error) {
    console.error("Address validation error:", error)
    return NextResponse.json({ valid: false, error: "Address validation failed" }, { status: 500 })
  }
}
