import React, { createContext, useContext, useState } from "react";

const SessionContext = createContext(null);

export const SessionProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en-IN");
  const [hasNotificationSeen, setHasNotificationSeen] = useState(false);

  return (
    <SessionContext.Provider
      value={{
        theme,
        setTheme,
        language,
        setLanguage,
        hasNotificationSeen,
        setHasNotificationSeen,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  return useContext(SessionContext);
};
