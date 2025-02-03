import { Languages, useSession } from "providers/SessionProvider";
import { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

export default () => {
  const { languageObject, setLanguageObject } = useSession();
  const navigate = useNavigate();
  const { lang } = useParams();
  console.log(lang);

  const langIndex = Languages.findIndex((l) => l.code === lang);

  useEffect(() => {
    console.log("Select Language");
  }, []);

  useEffect(() => {
    if (langIndex !== -1) {
      setLanguageObject(Languages[langIndex]);
    } else {
      navigate(`/${languageObject?.code}${window.location.pathname}`);
    }
  }, [lang]);

  return <Outlet />;
};
