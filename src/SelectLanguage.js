import { useSession } from "providers/SessionProvider";
import { useEffect } from "react";
import {
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { ExecuteQuery } from "services/APIService";
import { useExecuteQuerySWR } from "services/useExecuteQuerySWR";

export default () => {
  const { languageObject, setLanguageObject, languages, setLanguages } =
    useSession();
  const { group, subgroup, name } = useParams();
  // const { data } = useExecuteQuerySWR(
  //   `Core.GMst_SelectFewFromCompanyLanguagesAndMasters`,
  //   {
  //     ActionName: "Core.GMst_SelectFewFromCompanyLanguagesAndMasters",
  //     ParameterJSON: JSON.stringify({}),
  //   },
  //   {
  //     revalidateIfStale: false,
  //     revalidateOnMount: false,
  //     revalidateOnReconnect: false,
  //     revalidateOnFocus: false,
  //     refreshInterval: 24 * 60 * 60 * 1000,
  //   }
  // );
  const navigate = useNavigate();
  const { search } = useLocation();

  const queryParams = new URLSearchParams(search);
  const langQuery = queryParams.get("lang");

  useEffect(() => {
    if (languages.length == 0)
      ExecuteQuery({
        ActionName: "Core.GMst_SelectFewFromCompanyLanguagesAndMasters",
        ParameterJSON: JSON.stringify({}),
      }).then((response) => {
        if (response.message === "Successfull") {
          setLanguages(
            response.items.map((lang) => ({ TextDirection: "ltr", ...lang }))
          );

          setLanguageObject({ TextDirection: "ltr", ...response.items[0] });
        }
      });
  }, []);

  useEffect(() => {
    if (languages.length > 0) {
      const LangIndex = languages.findIndex(
        (l) => l.LanguageTranslationCode === langQuery
      );

      if (LangIndex !== -1) {
        setLanguageObject(languages[LangIndex]);
      } else {
        if (Object.keys(languageObject).length == 0)
          setLanguageObject(languages[0]);
      }
    }
  }, [languages]);

  useEffect(() => {
    if (
      languageObject.LanguageTranslationCode &&
      langQuery !== languageObject.LanguageTranslationCode
    ) {
      navigate(
        `${window.location.pathname}?lang=${languageObject.LanguageTranslationCode}`
      );
    }
  }, [languageObject, group, subgroup, name, search]);

  return <Outlet />;
};
