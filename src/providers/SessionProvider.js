import React, { createContext, useContext, useState } from "react";
import { CookieConsentValue } from "services/CookieService";

const SessionContext = createContext(null);

export const SessionProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en-IN");
  const [languageObject, setLanguageObject] = useState(Languages[0]);
  const [hasNotificationSeen, setHasNotificationSeen] = useState(false);

  const [notificationText, setNotificationText] = useState("");
  const [notificationType, setNotificationType] = useState("none");

  const [showPopup, setShowPopup] = useState(true);
  const [cookieConsent, setCookieConsent] = useState(CookieConsentValue);

  const setNotification = (notificationText, notificationType = "none") => {
    setNotificationText(notificationText);
    setNotificationType(notificationType);
  };

  return (
    <SessionContext.Provider
      value={{
        theme,
        setTheme,
        language,
        setLanguage,
        hasNotificationSeen,
        setHasNotificationSeen,
        languageObject,
        setLanguageObject,
        notificationText,
        setNotification,
        notificationType,
        setShowPopup,
        showPopup,
        cookieConsent,
        setCookieConsent,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  return useContext(SessionContext);
};

export const Languages = [
  {
    name: "english",
    nameUnicode: "English",
    code: "en",
    logo: "",
    textDirection: "ltr",
  },
  {
    name: "hindi",
    nameUnicode: "हिन्दी",
    code: "hi",
    logo: "",
    textDirection: "ltr",
  },
  {
    name: "marathi",
    nameUnicode: "मराठी",
    code: "mr",
    logo: "",
    textDirection: "ltr",
  },
  {
    name: "tamil",
    nameUnicode: "தமிழ்",
    code: "ta",
    logo: "",
    textDirection: "ltr",
  },
  {
    name: "telugu",
    nameUnicode: "తెలుగు",
    code: "te",
    logo: "",
    textDirection: "ltr",
  },
  {
    name: "malayalam",
    nameUnicode: "മലയാളം",
    code: "ml",
    logo: "",
    textDirection: "ltr",
  },
  {
    name: "kannada",
    nameUnicode: "ಪರಿಶೀಲಿಸಿ",
    code: "kn",
    logo: "",
    textDirection: "ltr",
  },
  {
    name: "bengali",
    nameUnicode: "বাংলা",
    code: "bn",
    logo: "",
    textDirection: "ltr",
  },
  {
    name: "punjabi",
    nameUnicode: "ਪੰਜਾਬੀ",
    code: "pa",
    logo: "",
    textDirection: "ltr",
  },
  {
    name: "gujrati",
    nameUnicode: "ગુજરાતી",
    code: "gu",
    logo: "",
    textDirection: "ltr",
  },
  {
    name: "oriya",
    nameUnicode: "ଓଡିଆ",
    code: "or",
    logo: "",
    textDirection: "ltr",
  },
  {
    name: "assamese",
    nameUnicode: "অসমীয়া",
    code: "as",
    logo: "",
    textDirection: "ltr",
  },
  {
    name: "sanskrit",
    nameUnicode: "संस्कृत",
    code: "sa",
    logo: "",
    textDirection: "ltr",
  },
  {
    name: "spanish",
    nameUnicode: "Español",
    code: "es",
    logo: "",
    textDirection: "ltr",
  },
  {
    name: "german",
    nameUnicode: "Deutsch",
    code: "de",
    logo: "",
    textDirection: "ltr",
  },
];

/*

sinhala
nepali

thai
malay
indonasian

spanish
german Deutsch
*/

// Chinese	中国人
// Korea	한국
// Arabic	عربي
// Urdu	اردو
// Sindhi	سنڌي
// Russian	Россия
// Italian	Italian
// French	français
// Thai	แบบไทย
// Albanian	Shqip
// Armenian	Հայերեն
// Azerbaijani	Azərbaycan
