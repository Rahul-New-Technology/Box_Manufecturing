# Google Apps Script Setup for Form Submissions

## Instructions to Set Up Google Apps Script

### Step 1: Create Google Apps Script Project

1. Go to [Google Apps Script](https://script.google.com/)
2. Click "New Project"
3. Delete the default code
4. Copy and paste the code below

### Step 2: Paste This Code

```javascript
// Google Apps Script for GN Packaging Form Submissions
// This script handles form submissions and saves them to Google Sheets

// Sheet names where data will be stored
const SHEETS = {
  CONTACTS: 'Contacts',
  QUOTES: 'Quotes',
  NEWSLETTER: 'Newsletter'
};

// Function to handle GET requests (for testing)
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({ status: 'success', message: 'Script is working' })
  ).setMimeType(ContentService.MimeType.JSON);
}

// Function to handle POST requests (form submissions)
function doPost(e) {
  try {
    const params = e.parameter;
    const sheetName = params.sheetName || 'Contacts';
    
    // Get the spreadsheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(sheetName);
    
    // Create sheet if it doesn't exist
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
    }
    
    // Get all parameters except sheetName, timestamp, and source (to avoid duplicates)
    const headers = Object.keys(params).filter(key => 
      key !== 'sheetName' && 
      key !== 'timestamp' && 
      key !== 'source'
    );
    
    // Set up headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Source', ...headers]);
    }
    
    // Add timestamp and source (only once, at the beginning)
    const timestamp = new Date().toISOString();
    const source = sheetName.toLowerCase().replace('s', ''); // contact, quote, newsletter
    
    // Prepare data row - timestamp and source first, then form data
    const rowData = [timestamp, source];
    headers.forEach(header => {
      rowData.push(params[header] || '');
    });
    
    // Append the data
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({ 
        status: 'success', 
        message: 'Data saved successfully',
        sheet: sheetName,
        row: sheet.getLastRow()
      })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ 
        status: 'error', 
        message: error.toString() 
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Function to create all required sheets
function setupSheets() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  Object.values(SHEETS).forEach(sheetName => {
    let sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      // Headers will be auto-created on first submission
    }
  });
}

// Function to clear all data (use with caution)
function clearAllSheets() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  Object.values(SHEETS).forEach(sheetName => {
    const sheet = ss.getSheetByName(sheetName);
    if (sheet) {
      sheet.clear();
      // Headers will be auto-created on next submission
    }
  });
}
```

### Step 3: Deploy the Script

1. Click **Deploy** → **New Deployment**
2. Select type: **Web app**
3. Configure:
   - **Description**: "GN Packaging Form Handler"
   - **Execute as**: **Me** (your email)
   - **Who has access**: **Anyone** (important for form submissions)
4. Click **Deploy**
5. Copy the **Web App URL** 
6. Update your `.env` file with this URL

### Step 4: Update Your .env File

Replace the URL in your `.env` file with the new Web App URL:
```
REACT_APP_GOOGLE_SCRIPT_URL=YOUR_NEW_WEB_APP_URL_HERE
```

### Step 5: Test the Script

1. Open the Web App URL in your browser
2. You should see: `{"status":"success","message":"Script is working"}`
3. Submit a form from your website
4. Check your Google Sheet - data should appear

### Step 6: Clean Up Existing Sheet (If you have duplicate columns)

If you already have duplicate columns (Timestamp, Source, timestamp, source), follow these steps:

1. Open your Google Sheet
2. **Delete all rows** with duplicate headers
3. **Keep only the first row** with correct headers: `Timestamp, Source, name, email, phone, subject, message, company, city, product, quantity`
4. **Alternative:** Clear the entire sheet and let the script recreate headers automatically:
   - Run the `clearAllSheets` function in the script editor
   - Submit a new form - headers will be created automatically

### Step 7: (Optional) Set Up Sheets Manually

If you want to set up the sheets manually:

1. Open your Google Sheet
2. Run the `setupSheets` function:
   - Click **Run** → Select `setupSheets`
   - Grant permissions if asked
3. This will create the required sheets (headers will be auto-created on first submission)

### Important Notes

- **Who has access** must be set to **Anyone** for form submissions to work
- The script automatically creates columns based on form data
- If columns don't appear, check the script logs for errors
- The script adds Timestamp and Source columns automatically

### Troubleshooting

**If data is not saving:**
1. Check that the Web App is deployed with "Anyone" access
2. Verify the URL in `.env` matches the Web App URL
3. Check the script execution logs in Google Apps Script
4. Ensure the spreadsheet has edit permissions for the script

**If columns are not created:**
1. Run the `setupSheets` function manually
2. Check script logs for any errors
3. Verify the script has permission to modify the spreadsheet