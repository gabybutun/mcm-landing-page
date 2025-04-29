import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const formData = await request.json()

    // Google Sheets API endpoint
    // This uses the Google Sheets API v4 with a web app deployment from Google Apps Script
    const GOOGLE_SHEETS_URL = process.env.GOOGLE_SHEETS_URL

    if (!GOOGLE_SHEETS_URL) {
      return NextResponse.json({ success: false, message: "Google Sheets URL not configured" }, { status: 500 })
    }

    // Send data to Google Sheets
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date().toISOString(),
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to submit form to Google Sheets")
    }

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
    })
  } catch (error) {
    console.error("Error submitting form:", error)
    return NextResponse.json({ success: false, message: "Failed to submit form" }, { status: 500 })
  }
}
