import { headers } from "next/headers"

export function getClientIP(): string {
  const headersList = headers()

  // Check various headers for IP address
  const forwarded = headersList.get("x-forwarded-for")
  const realIP = headersList.get("x-real-ip")
  const cfConnectingIP = headersList.get("cf-connecting-ip") // Cloudflare

  if (forwarded) {
    return forwarded.split(",")[0].trim()
  }

  if (realIP) {
    return realIP
  }

  if (cfConnectingIP) {
    return cfConnectingIP
  }

  return "unknown"
}

export async function logUserActivity(data: {
  email?: string
  action: string
  ipAddress: string
  userAgent?: string
  metadata?: any
}) {
  // Log to your database
  // await db.userActivity.create({
  //   data: {
  //     email: data.email,
  //     action: data.action,
  //     ipAddress: data.ipAddress,
  //     userAgent: data.userAgent,
  //     metadata: data.metadata,
  //     timestamp: new Date()
  //   }
  // })

  console.log("User activity logged:", data)
}

export async function checkIPLimits(ipAddress: string): Promise<{
  allowed: boolean
  reason?: string
}> {
  // Check recent signups from this IP
  // const recentSignups = await db.user.count({
  //   where: {
  //     ipAddress,
  //     createdAt: {
  //       gte: new Date(Date.now() - 24 * 60 * 60 * 1000) // Last 24 hours
  //     }
  //   }
  // })

  // if (recentSignups >= 3) {
  //   return {
  //     allowed: false,
  //     reason: 'Too many accounts created from this IP address'
  //   }
  // }

  return { allowed: true }
}
