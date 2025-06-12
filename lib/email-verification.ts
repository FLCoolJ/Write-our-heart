import { randomBytes } from "crypto"

export interface EmailVerification {
  email: string
  token: string
  expiresAt: Date
  verified: boolean
}

export async function sendVerificationEmail(email: string) {
  const token = randomBytes(32).toString("hex")
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours

  // Store verification token in database
  // await db.emailVerification.create({
  //   data: { email, token, expiresAt, verified: false }
  // })

  const verificationUrl = `${process.env.NEXT_PUBLIC_APP_URL}/verify-email?token=${token}`

  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #000;">Verify Your Email - Write Our Heart</h1>
      <p>Please click the link below to verify your email address:</p>
      <a href="${verificationUrl}" style="background-color: #fbbf24; color: #000; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
        Verify Email Address
      </a>
      <p>This link expires in 24 hours.</p>
      <p>If you didn't request this verification, please ignore this email.</p>
    </div>
  `

  // Send email using your email service
  // await sendEmail({
  //   to: email,
  //   subject: 'Verify Your Email - Write Our Heart',
  //   html: emailHtml
  // })

  return { token, expiresAt }
}

export async function verifyEmailToken(token: string) {
  // Check token in database
  // const verification = await db.emailVerification.findUnique({
  //   where: { token }
  // })

  // if (!verification || verification.expiresAt < new Date()) {
  //   return { valid: false, error: 'Invalid or expired token' }
  // }

  // Mark as verified
  // await db.emailVerification.update({
  //   where: { token },
  //   data: { verified: true }
  // })

  return { valid: true, email: "user@example.com" }
}
