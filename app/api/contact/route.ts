import { type NextRequest, NextResponse } from "next/server"

interface ContactFormData {
  name: string
  organization?: string
  email: string
  subject: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    const { name, organization, email, subject, message } = body

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // TODO: Connect to database to save contact submission
    // TODO: Send email notification to admin
    console.log("Contact submission:", { name, organization, email, subject, message })

    return NextResponse.json({
      success: true,
      message: "Thank you for contacting DHBA. We will get back to you soon.",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to submit contact form" }, { status: 500 })
  }
}
