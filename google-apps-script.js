// This code should be deployed as a Google Apps Script Web App
// It will receive form data and add it to a Google Sheet

function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents)

    // Open the Google Sheet by ID (replace with your actual Sheet ID)
    const sheet = SpreadsheetApp.openById("YOUR_GOOGLE_SHEET_ID").getActiveSheet()

    // Add a new row with the form data
    sheet.appendRow([
      new Date(), // Timestamp
      data.name,
      data.email,
      data.subject,
      data.message,
    ])

    // Return success response
    return ContentService.createTextOutput(JSON.stringify({ success: true })).setMimeType(ContentService.MimeType.JSON)
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.toString() })).setMimeType(
      ContentService.MimeType.JSON,
    )
  }
}

// This function is needed to test the web app
function doGet() {
  return ContentService.createTextOutput(JSON.stringify({ status: "The service is running" })).setMimeType(
    ContentService.MimeType.JSON,
  )
}
