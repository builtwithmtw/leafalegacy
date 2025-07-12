function doPost(e) {
  const sheet = SpreadsheetApp.openByUrl(
    "https://docs.google.com/spreadsheets/d/1RqY1U6DkL79f8scFq0PrEQAwYdZk8awB5FC-o-IgAvc/edit"
  ).getSheetByName("Sheet1");

  const data = e.parameter;

  sheet.appendRow([
    data.name || "",
    data.email || "",
    data.honoreeName || "",
    data.honoreeEmail || "",
    data.forest || "",
    data.message || "",
    new Date(),
  ]);

  MailApp.sendEmail({
    to: data.email,
    subject: `Thank you for contacting Leaf a Legacy`,
    htmlBody: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #f9f9f9;">
      <h2 style="color: #2c3e50;">🌿 Leaf a Legacy – Message Received</h2>
      <p>Dear <strong>${data.name}</strong>,</p>

      <p>Thank you for reaching out to <strong>Leaf a Legacy</strong>. We’ve received your message and will get back to you as soon as possible.</p>

      <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;" />

      <h4 style="margin-bottom: 5px;">📋 Message Summary</h4>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Honoree Name:</strong> ${data.honoreeName}</p>
      <p><strong>Honoree Email:</strong> ${data.honoreeEmail}</p>
      <p><strong>Forest:</strong> ${data.forest}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="background: #fff; padding: 10px 15px; border-left: 4px solid #27ae60; margin: 10px 0;">
        ${data.message}
      </blockquote>

      <p style="color: #2e7d32; font-weight: bold;">
        ✅ Thank you, an eCard will be sent to your recipient (${data.honoreeEmail}) within 7 days.
      </p>

      <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;" />

      <p style="font-size: 14px; color: #555;">If this message was sent by mistake, please ignore this email.</p>
      <p style="font-size: 14px; color: #555;">Warm regards,<br/><strong>Leaf a Legacy Team</strong></p>

      <div style="margin-top: 30px; font-size: 12px; color: #999;">
        <p>🌐 <a href="https://leafalegacy.netlify.app" target="_blank" style="color: #27ae60;">leafalegacy.app</a></p>
      </div>
    </div>
  `,
  });

  const result = ContentService.createTextOutput(
    JSON.stringify({ status: "success" })
  );
  result.setMimeType(ContentService.MimeType.JSON);

  return result;
}

// CORS Preflight Support (Optional, but helps with debugging and avoids preflight errors)
function doGet(e) {
  return ContentService.createTextOutput("Donation Form API is running.");
}
