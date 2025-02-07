import { useAnimatedSiteOptionsToggler } from "components/headers/light";
import useLocalStorage from "hooks/useLocalStorage";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ExecuteQuery } from "services/APIService";

import { CookieConsentValue } from "services/CookieService";

const SessionContext = createContext(null);

// [{"LanguageID":1,"LanguageName":"English","LanguageNameUnicode":"English","LanguageTranslationCode":"en_IN","LanguageVoiceNameCSV":"en-in-x-ahp-local,en-in-x-ahp-network"},{"LanguageID":2,"LanguageName":"Hindi","LanguageNameUnicode":"हिन्दी","LanguageTranslationCode":"hi_IN","LanguageVoiceNameCSV":"hi-in-x-hic-local,hi-in-x-hid-local"},{"LanguageID":3,"LanguageName":"Marathi","LanguageNameUnicode":"मराठी","LanguageTranslationCode":"mr_IN","LanguageVoiceNameCSV":null}]

export const SessionProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const [languages, setLanguages] = useLocalStorage("languages", []);
  const [languageObject, setLanguageObject] = useLocalStorage(
    "languageObject",
    {}
  );
  const [hasNotificationSeen, setHasNotificationSeen] = useState(false);

  const [notificationText, setNotificationText] = useState("");
  const [notificationType, setNotificationType] = useState("none");

  const [showPopup, setShowPopup] = useState(false);
  const [shouldCloseOnOverlayClick, setShouldCloseOnOverlayClick] =
    useState(false);

  const [cookieConsent, setCookieConsent] = useState(CookieConsentValue);

  const [modalStyle, setModalStyle] = useState({});

  const [popupRenderer, setPopupRenderer] = useState(() => <></>);

  const setNotification = (notificationText, notificationType = "none") => {
    setNotificationText(notificationText);
    setNotificationType(notificationType);
  };

  const showModalPopup = (popupContent, size) => {
    setPopupRenderer(popupContent);
    setShouldCloseOnOverlayClick(false);
    setShowPopup(true);
    setModalStyle({ size: size });
  };

  const showNonModalPopup = (popupContent, size) => {
    setPopupRenderer(popupContent);
    setShouldCloseOnOverlayClick(true);
    setShowPopup(true);
    setModalStyle({ size: size });
  };

  const hidePopup = () => setShowPopup(false);

  return (
    <SessionContext.Provider
      value={{
        theme,
        setTheme,
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
        popupRenderer,
        shouldCloseOnOverlayClick,
        showModalPopup,
        showNonModalPopup,
        hidePopup,
        modalStyle,
        setModalStyle,
        languages,
        setLanguages,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  return useContext(SessionContext);
};

const Languages = [
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
  {
    name: "Arabic",
    nameUnicode: "عربي",
    code: "ar",
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
