import { useSession } from "providers/SessionProvider";
import { useState, useRef, useEffect } from "react";
import { ReactComponent as RadioIcon } from "feather-icons/dist/icons/globe.svg";
import tw from "twin.macro";
import { NavLinkWrapper } from "./light";

const Container = tw.div`relative inline-block justify-end items-end`;
const Menu = tw.ul`absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md border`;
const MenuItem = tw.li`px-4 py-2 hover:bg-gray-100 cursor-pointer`;
const IconButton = tw.button` transition flex items-center justify-center gap-2`;
const GlobeIcon = tw(RadioIcon)`w-5`;

export default function CustomDropdown({ navbarHeight }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const { languages, setLanguageObject } = useSession();
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSelect(option) {
    setLanguageObject(option);
    setIsOpen(false);
  }


  return (
    <Container ref={menuRef}>
      {languages.length > 1 && (
        <IconButton onClick={() => setIsOpen(!isOpen)} title="Language">
          {isMobile && (
            <NavLinkWrapper navposition={navbarHeight}>
              Languages
            </NavLinkWrapper>
          )}
          <GlobeIcon />
        </IconButton>
      )}
      {isOpen && (
        <Menu>
          {languages.map((lang, index) => (
            <MenuItem key={index} onClick={() => handleSelect(lang)}>
              {lang?.LanguageName?.toLocaleUpperCase()} (
              {lang?.LanguageNameUnicode})
            </MenuItem>
          ))}
        </Menu>
      )}
    </Container>
  );
}
