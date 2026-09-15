# Google Sheets Integration Setup

This static website uses Google Sheets as a database replacement for storing form submissions (contact forms, quote requests, newsletter subscriptions).

## Setup Instructions

### 1. Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet
2. Create the following sheets/tabs:
   - `Contacts` - for contact form submissions
   - `Quotes` - for quote request submissions  
   - `Newsletter` - for newsletter subscriptions

### 2. Create a Google Apps Script

1. In your Google Sheet, go to `Extensions` > `Apps Script`
2. Delete any existing code and paste the following:

```javascript
function doPost(e) {
  try {
    const sheetName = e.parameter.sheetName || 'Leads';
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(sheetName);
    
    // Create sheet if it doesn't exist
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      // Add headers based on form data
      const headers = Object.keys(e.parameter).filter(key => key !== 'sheetName');
      sheet.appendRow(headers);
    }
    
    // Get form data (excluding sheetName parameter)
    const data = [];
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    
    headers.forEach(header => {
      data.push(e.parameter[header] || '');
    });
    
    // Append data to sheet
    sheet.appendRow(data);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Data saved successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Save the script (Ctrl+S or Cmd+S)
4. Click `Deploy` > `New deployment`
5. Select type: `Web app`
6. Configure:
   - **Description**: "Form submissions handler"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone" (important for public form submissions)
7. Click `Deploy` and copy the **Web app URL**

### 3. Configure Environment Variable

Create a `.env` file in the frontend directory:

```bash
REACT_APP_GOOGLE_SCRIPT_URL=YOUR_WEB_APP_URL_HERE
```

Replace `YOUR_WEB_APP_URL_HERE` with the URL you copied in step 2.

### 4. Test the Integration

1. Start the development server: `npm start`
2. Submit a test form on the Contact or Quote page
3. Check your Google Sheet - the data should appear in the appropriate tab

## Security Notes

- The Google Apps Script is configured to allow "Anyone" access for form submissions
- This is safe because the script only writes to your spreadsheet
- Never share your Web app URL publicly if it contains sensitive operations
- Consider adding additional validation in the Apps Script if needed

## Troubleshooting

**Forms not submitting:**
- Check browser console for errors
- Verify the Web app URL is correct in `.env`
- Ensure the Google Apps Script is deployed as "Anyone" access
- Check the Google Sheet for new data

**CORS errors:**
- The Apps Script handles CORS automatically
- Ensure you're using the deployed Web app URL, not the script editor URL

**Data not appearing in sheet:**
- Check that the sheet names match exactly (`Contacts`, `Quotes`, `Newsletter`)
- Verify the Apps Script has no syntax errors
- Check the deployment logs in the Apps Script dashboard
