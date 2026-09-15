// Google Sheets API Integration for Static Website
// This replaces the backend API with direct Google Sheets integration

const GOOGLE_SCRIPT_URL = process.env.REACT_APP_GOOGLE_SCRIPT_URL || '';

/**
 * Submit form data to Google Sheets via Google Apps Script
 * @param {Object} data - Form data to submit
 * @param {string} sheetName - Name of the sheet/tab in Google Sheets
 * @returns {Promise<Object>} - Response from Google Script
 */
export async function submitToGoogleSheets(data, sheetName = 'Leads') {
  if (!GOOGLE_SCRIPT_URL) {
    console.error('Google Script URL not configured');
    return { success: false, message: 'Google Script URL not configured' };
  }

  try {
    // Use URL-encoded form data for better compatibility
    const formData = new URLSearchParams();
    formData.append('sheetName', sheetName);
    
    Object.keys(data).forEach(key => {
      if (data[key] !== undefined && data[key] !== null && data[key] !== '') {
        formData.append(key, String(data[key]));
      }
    });

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
      mode: 'no-cors' // Important for Google Apps Script
    });

    // With no-cors mode, we can't read the response, but we assume success if no error
    console.log('Form submitted to Google Sheets:', sheetName);
    return { success: true, message: 'Data submitted successfully' };
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    throw error;
  }
}

/**
 * Submit contact form data
 */
export async function submitContactForm(formData) {
  return submitToGoogleSheets(formData, 'Contacts');
}

/**
 * Submit quote request form data
 */
export async function submitQuoteForm(formData) {
  return submitToGoogleSheets(formData, 'Quotes');
}

/**
 * Submit newsletter subscription
 */
export async function submitNewsletter(email) {
  return submitToGoogleSheets({ email }, 'Newsletter');
}
