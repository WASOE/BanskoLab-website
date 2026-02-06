import {getRequestConfig} from "next-intl/server";

export default getRequestConfig(async ({requestLocale}) => {
  // Get the locale from the request, or use default
  let locale = await requestLocale;
  
  // Ensure locale is valid, fallback to default
  const locales = ["en", "bg"];
  if (!locale || !locales.includes(locale)) {
    locale = "en";
  }
  
  let messages = {};
  
  try {
    // Messages are at root level, same level as i18n/
    messages = (await import(`../messages/${locale}.json`)).default;
  } catch (error) {
    console.error(`Failed to load messages for locale "${locale}":`, error);
    // Fallback to English if locale file doesn't exist
    if (locale !== "en") {
      try {
        messages = (await import(`../messages/en.json`)).default;
      } catch (fallbackError) {
        console.error("Failed to load fallback English messages:", fallbackError);
      }
    }
  }

  return {
    locale,
    messages,
  };
});
