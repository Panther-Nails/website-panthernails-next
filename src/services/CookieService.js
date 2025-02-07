export const CookieDuration = {
  Seconds10: 10 * 1000,
  Seconds30: 30 * 1000,
  Minute: 60 * 1000,
  Minute5: 5 * 60 * 1000,
  Minute10: 10 * 60 * 1000,
  Hour: 60 * 60 * 1000, //36000000
  Hour6: 6 * 60 * 60 * 1000,
  Day: 24 * 60 * 60 * 1000,
  Week: 7,
  Month: 30,
  Year: 365,
  Forever: 400, // Maximum cookie duration
};

export const GetPageCacheKey = (pathname) => {
  let path = pathname.replaceAll("/", "-");
  let pathBase64 = btoa(path);
  return getCookie(CookieKeys.CookieConsent) !== CookieValues.Rejected
    ? pathBase64 + path
    : null;
};

export const CookieKeys = {
  CookieConsent: "cookie-consent",
};

export const CookieValues = {
  Accepted: "cookie-accepted",
  AcceptedEssential: "cookie-accepted-essential",
  Rejected: "cookie-rejected",
};

export function setCookie(name, value, duration) {
  eraseCookie(name);
  var expires = "";
  if (duration) {
    var date = new Date();
    date.setTime(date.getTime() + duration);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

export function setCookieForDays(name, value, duration) {
  eraseCookie(name);
  var expires = "";
  if (duration) {
    var date = new Date();
    date.setDate(date.getDate() + duration);
    expires = "; expires=" + date.toUTCString();
  }

  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

export function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function eraseCookie(name) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

export const CookieConsentValue = getCookie(CookieKeys.CookieConsent);
