import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import { ProcessChildComponentsSeparately } from "services/ComponentService.js";
import { CookieDuration, getCookie, setCookie } from "services/CookieService";
import PopupModal, { ClosePopupControl } from "helpers/PopupModal";
import { useSWRConfig } from "swr";

const Container = tw.div` h-full w-full flex flex-col items-start    `;
const PopupHeader = tw.div` w-full h-[5%] lg:h-[2%] flex items-center justify-end `;
const PopupContent = tw.div`h-[95%] lg:h-[98%] w-full px-5`;

export default ({ properties, children }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [shouldCloseOnOverlayClick, setShouldCloseOnOverlayClick] =
    useState(false);
  const swrConfig = useSWRConfig();
  var startTime = properties?.startTime
    ? JSON.parse(properties.startTime)
    : 5000;

  var endTime = properties?.endTime ? JSON.parse(properties.endTime) : 1000000;

  const chaildData = swrConfig.cache.get(children[0].CacheKey)?.data?.items[0];

  const childProperty = JSON.parse(chaildData?.Properties || "[]");

  const popupKeyVal = getCookie(childProperty?.keyName);
  const showOnce = getCookie(`${properties.pageKey}-once`);


  useEffect(() => {
    const timerStart = setTimeout(() => {
      if (popupKeyVal !== childProperty?.productEnquiryFor && showOnce===null) {
        if (properties.popupShowOnce) {
          setCookie(
            `${properties.pageKey}-once`,
            properties.pageKey,
            CookieDuration.Day
          );
        }

        if (properties.popupCloseOnOverlayClick === "true") {
          setShowPopup(true);
          setShouldCloseOnOverlayClick(true);
        } else {
          setShowPopup(true);
          setShouldCloseOnOverlayClick(false);
        }
      } else {
        setShowPopup(false);
      }
    }, startTime);

    return () => clearTimeout(timerStart);
  }, []);

  useEffect(() => {
    const timerEnd = setTimeout(() => {
      setShowPopup(false);
    }, endTime);
    return () => clearTimeout(timerEnd);
  }, [endTime]);

  return (
    <PopupModal
      size={properties?.popupSize}
      showPopup={showPopup}
      closeOnOverlay={shouldCloseOnOverlayClick}
      setShowPopup={setShowPopup}
    >
      <Container>
        <PopupHeader>
          <ClosePopupControl setShowPopup={setShowPopup} />
        </PopupHeader>
        <PopupContent>
          {ProcessChildComponentsSeparately(children)}
        </PopupContent>
      </Container>
    </PopupModal>
  );
};
