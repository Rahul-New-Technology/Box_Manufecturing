# Google Ads Conversion Tracking Setup

## Overview
Google Ads conversion tracking has been successfully integrated into the GN Packaging website. This will track form submissions as conversions for your Google Ads campaigns.

## Implementation Details

### 1. Base Tracking Code Added
The Google Ads tracking code has been added to `public/index.html`:
- Google Tag Manager script with Conversion ID: `AW-18349608095`
- Conversion tracking function with label: `Q4y9COmf3dkcEJ-Z461E`

### 2. Form Conversion Tracking
Conversion tracking has been added to the following forms:

#### Contact Form (`src/pages/Contact.jsx`)
- Triggers conversion when contact form is successfully submitted
- Calls `window.gtag_report_conversion()` after successful form submission

#### Quote Form (`src/pages/Quote.jsx`) 
- Triggers conversion when quote request is successfully submitted
- Calls `window.gtag_report_conversion()` after successful form submission

#### Custom Packaging Configurator (`src/pages/CustomPackaging.jsx`)
- Triggers conversion when custom packaging request is sent via WhatsApp
- Calls `window.gtag_report_conversion()` before opening WhatsApp

### 3. Configuration File
Created `src/config/googleAds.js` for centralized Google Ads configuration:
- Conversion ID
- Conversion Label
- Send-to string
- Enable/disable toggle
- Helper functions for initialization and tracking

## Current IDs (Testing Phase)
The following IDs are currently in use (these appear to be test IDs):

- **Conversion ID**: `AW-18349608095`
- **Conversion Label**: `Q4y9COmf3dkcEJ-Z461E`
- **Full Send-to**: `AW-18349608095/Q4y9COmf3dkcEJ-Z461E`

## Post-Live Update Instructions

### After going live, you need to update the Google Ads IDs:

1. **Get your live Google Ads conversion IDs** from your Google Ads account:
   - Go to Google Ads → Tools & Settings → Conversions
   - Find your "Lead form" or "Contact form" conversion action
   - Copy the Conversion ID and Conversion Label

2. **Update the following files** with your live IDs:

#### File 1: `public/index.html`
```html
<!-- Update this line with your live Conversion ID -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-YOUR_LIVE_CONVERSION_ID"></script>

<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

// Update this line with your live Conversion ID
gtag('config', 'AW-YOUR_LIVE_CONVERSION_ID');
</script>

<!-- Update this line with your live send-to string -->
<script>
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-YOUR_LIVE_CONVERSION_ID/YOUR_LIVE_CONVERSION_LABEL',
      'event_callback': callback
  });
  return false;
}
</script>
```

#### File 2: `src/config/googleAds.js`
```javascript
export const GOOGLE_ADS_CONFIG = {
  // Update with your live Conversion ID
  CONVERSION_ID: "AW-YOUR_LIVE_CONVERSION_ID",
  
  // Update with your live Conversion Label
  CONVERSION_LABEL: "YOUR_LIVE_CONVERSION_LABEL",
  
  // Update with your live send-to string
  SEND_TO: "AW-YOUR_LIVE_CONVERSION_ID/YOUR_LIVE_CONVERSION_LABEL",
  
  // Keep enabled
  ENABLED: true
};
```

## Testing

### Before Going Live:
1. Fill out and submit the Contact form
2. Fill out and submit the Quote form  
3. Use the Custom Packaging configurator
4. Check Google Ads account to see if test conversions are recorded

### After Going Live:
1. Update the IDs as instructed above
2. Rebuild the project: `npm run build`
3. Deploy to your live site
4. Test the forms again
5. Verify conversions are being tracked in your Google Ads account

## How Conversion Tracking Works

1. **Page Load**: When a user visits any page, the Google Ads tracking code loads
2. **Form Submission**: When a user successfully submits a form:
   - The form data is sent to your backend
   - On success, the `gtag_report_conversion()` function is called
   - This sends a conversion event to Google Ads
3. **Google Ads Recording**: Google Ads records this as a conversion with the associated campaign data

## Notes

- The current IDs appear to be test IDs. Replace them with your live Google Ads IDs after going live.
- Conversion tracking will work for all form submissions (Contact, Quote, Custom Packaging)
- No additional setup is needed in Google Ads - just create conversion actions and get the IDs
- The tracking is GDPR compliant as it doesn't collect personal data beyond what's necessary for conversion tracking

## Support

If you need help setting up conversion actions in Google Ads:
1. Go to Google Ads → Tools & Settings → Measurement → Conversions
2. Click "New conversion action"
3. Select "Website" or "Import from Google Analytics"
4. Follow the setup wizard to get your Conversion ID and Label