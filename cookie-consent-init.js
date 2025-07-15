// cookie-consent-init.js
document.addEventListener('DOMContentLoaded', function () {
  cookieconsent.run({
    notice_banner_type: "interstitial",
    consent_type: "express",
    palette: "light",
    language: "de", // Немецкий
    page_load_consent_levels: ["strictly-necessary"],
    notice_banner_reject_button_hide: true,
    preferences_center_close_button_hide: false,
    page_refresh_confirmation_buttons: false,
    website_privacy_policy_url: "https://skaesthetics.de/datenschutz",
    website_name: "SK Aesthetics"
  });
});