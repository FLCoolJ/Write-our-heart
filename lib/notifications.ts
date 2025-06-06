import nodemailer from "nodemailer"
import twilio from "twilio"

// Email configuration
const emailTransporter = nodemailer.createTransport({
  // For beta testing, you can use services like SendGrid, Mailgun, or even Gmail
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

// SMS configuration (optional)
const twilioClient =
  process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN
    ? twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
    : null

// Email templates
const emailTemplates = {
  cardScheduled: (recipientName: string, occasion: string) => ({
    subject: `Your card for ${recipientName} has been scheduled`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <img src="${process.env.NEXT_PUBLIC_APP_URL}/images/logo.png" alt="Write Our Heart Logo" style="width: 100px; margin: 20px auto; display: block;" />
        <h1 style="color: #000; text-align: center;">Your Card Has Been Scheduled</h1>
        <p>Good news! Your ${occasion} card for ${recipientName} has been scheduled for printing.</p>
        <p>We'll notify you once it's been printed and shipped.</p>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p style="margin: 0;"><strong>Recipient:</strong> ${recipientName}</p>
          <p style="margin: 10px 0 0;"><strong>Occasion:</strong> ${occasion}</p>
        </div>
        <p>Thank you for using Write Our Heart!</p>
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
          <p>© ${new Date().getFullYear()} Write Our Heart. All rights reserved.</p>
        </div>
      </div>
    `,
  }),

  cardPrinted: (recipientName: string, occasion: string) => ({
    subject: `Your card for ${recipientName} has been printed`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <img src="${process.env.NEXT_PUBLIC_APP_URL}/images/logo.png" alt="Write Our Heart Logo" style="width: 100px; margin: 20px auto; display: block;" />
        <h1 style="color: #000; text-align: center;">Your Card Has Been Printed</h1>
        <p>Great news! Your ${occasion} card for ${recipientName} has been printed and will be shipped soon.</p>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p style="margin: 0;"><strong>Recipient:</strong> ${recipientName}</p>
          <p style="margin: 10px 0 0;"><strong>Occasion:</strong> ${occasion}</p>
        </div>
        <p>Thank you for using Write Our Heart!</p>
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
          <p>© ${new Date().getFullYear()} Write Our Heart. All rights reserved.</p>
        </div>
      </div>
    `,
  }),

  cardShipped: (recipientName: string, occasion: string) => ({
    subject: `Your card for ${recipientName} has been shipped`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <img src="${process.env.NEXT_PUBLIC_APP_URL}/images/logo.png" alt="Write Our Heart Logo" style="width: 100px; margin: 20px auto; display: block;" />
        <h1 style="color: #000; text-align: center;">Your Card Has Been Shipped</h1>
        <p>Wonderful news! Your ${occasion} card for ${recipientName} has been shipped and is on its way.</p>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p style="margin: 0;"><strong>Recipient:</strong> ${recipientName}</p>
          <p style="margin: 10px 0 0;"><strong>Occasion:</strong> ${occasion}</p>
        </div>
        <p>Thank you for using Write Our Heart!</p>
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
          <p>© ${new Date().getFullYear()} Write Our Heart. All rights reserved.</p>
        </div>
      </div>
    `,
  }),

  subscriptionRenewal: (planName: string, cardCount: number) => ({
    subject: `Your Write Our Heart subscription has renewed`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <img src="${process.env.NEXT_PUBLIC_APP_URL}/images/logo.png" alt="Write Our Heart Logo" style="width: 100px; margin: 20px auto; display: block;" />
        <h1 style="color: #000; text-align: center;">Subscription Renewed</h1>
        <p>Your ${planName} subscription has been renewed successfully.</p>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p style="margin: 0;"><strong>Plan:</strong> ${planName}</p>
          <p style="margin: 10px 0 0;"><strong>Free Cards Available:</strong> ${cardCount}</p>
        </div>
        <p>Thank you for your continued support!</p>
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
          <p>© ${new Date().getFullYear()} Write Our Heart. All rights reserved.</p>
        </div>
      </div>
    `,
  }),
}

// SMS templates
const smsTemplates = {
  cardScheduled: (recipientName: string, occasion: string) =>
    `Write Our Heart: Your ${occasion} card for ${recipientName} has been scheduled for printing.`,

  cardPrinted: (recipientName: string) =>
    `Write Our Heart: Your card for ${recipientName} has been printed and will be shipped soon.`,

  cardShipped: (recipientName: string) =>
    `Write Our Heart: Your card for ${recipientName} has been shipped and is on its way.`,

  subscriptionRenewal: (planName: string, cardCount: number) =>
    `Write Our Heart: Your ${planName} subscription has been renewed. You have ${cardCount} free cards available.`,
}

// Send email notification
export async function sendEmailNotification(to: string, templateName: keyof typeof emailTemplates, templateData: any) {
  try {
    const template = emailTemplates[templateName]
    if (!template) {
      throw new Error(`Email template "${templateName}" not found`)
    }

    const { subject, html } = template(...Object.values(templateData))

    const mailOptions = {
      from: `"Write Our Heart" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    }

    const info = await emailTransporter.sendMail(mailOptions)
    console.log(`Email sent: ${info.messageId}`)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error("Error sending email notification:", error)
    return { success: false, error }
  }
}

// Send SMS notification (optional)
export async function sendSmsNotification(to: string, templateName: keyof typeof smsTemplates, templateData: any) {
  try {
    if (!twilioClient) {
      throw new Error("Twilio client not configured")
    }

    const template = smsTemplates[templateName]
    if (!template) {
      throw new Error(`SMS template "${templateName}" not found`)
    }

    const message = template(...Object.values(templateData))

    const result = await twilioClient.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to,
    })

    console.log(`SMS sent: ${result.sid}`)
    return { success: true, sid: result.sid }
  } catch (error) {
    console.error("Error sending SMS notification:", error)
    return { success: false, error }
  }
}

// Send both email and SMS notifications
export async function sendNotification(
  user: { email: string; phone?: string; notificationPreferences?: any },
  type: keyof typeof emailTemplates & keyof typeof smsTemplates,
  data: any,
) {
  const results = {
    email: null,
    sms: null,
  }

  // Send email notification
  const shouldSendEmail = !user.notificationPreferences || user.notificationPreferences[type]?.email !== false

  if (shouldSendEmail) {
    results.email = await sendEmailNotification(user.email, type, data)
  }

  // Send SMS notification if phone number is available and user has opted in
  const shouldSendSms = user.phone && user.notificationPreferences && user.notificationPreferences[type]?.sms === true

  if (shouldSendSms) {
    results.sms = await sendSmsNotification(user.phone, type, data)
  }

  return results
}
