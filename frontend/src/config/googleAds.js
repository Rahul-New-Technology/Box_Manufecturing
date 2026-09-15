// Google Ads Configuration
// Update these IDs after going live

export const GOOGLE_ADS_CONFIG = {
  // Conversion ID (AW-XXXXXXXXXXXX)
  CONVERSION_ID: "AW-18349608095",
  
  // Conversion Label (for lead form submissions)
  CONVERSION_LABEL: "Q4y9COmf3dkcEJ-Z461E",
  
  // Full send_to string
  SEND_TO: "AW-18349608095/Q4y9COmf3dkcEJ-Z461E",
  
  // Whether tracking is enabled
  ENABLED: true
};

// Initialize Google Ads tracking
export const initGoogleAds = () => {
  if (!GOOGLE_ADS_CONFIG.ENABLED) return;
  
  // Load gtag.js
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_CONFIG.CONVERSION_ID}`;
  document.head.appendChild(script);
  
  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function() {
    window.dataLayer.push(arguments);
  };
  
  window.gtag('js', new Date());
  window.gtag('config', GOOGLE_ADS_CONFIG.CONVERSION_ID);
  
  // Add conversion tracking function
  window.gtag_report_conversion = function(url) {
    const callback = function() {
      if (typeof(url) !== 'undefined') {
        window.location = url;
      }
    };
    
    window.gtag('event', 'conversion', {
      'send_to': GOOGLE_ADS_CONFIG.SEND_TO,
      'event_callback': callback
    });
    
    return false;
  };
};

// Track conversion event
export const trackConversion = () => {
  if (!GOOGLE_ADS_CONFIG.ENABLED) return;
  
  if (typeof window.gtag_report_conversion === 'function') {
    window.gtag_report_conversion();
  }
};