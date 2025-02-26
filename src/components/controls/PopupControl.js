import React, { useEffect, useState } from "react";
import styled from "styled-components"; //eslint-disable-line
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import { ProcessChildComponentsSeparately } from "services/ComponentService.js";
import { useSession } from "providers/SessionProvider";
import { getCookie } from "services/CookieService";
import PopupModal, { ClosePopupControl } from "helpers/PopupModal";
import { useSWRConfig } from "swr";

// export const NotificationBarPullout = styled.div((props) => [
//   tw`top-0 border-b z-50 flex justify-between items-center p-1 lg:px-20 font-semibold`,
//   backgroundColor[props.type || "none"],
// ]);

// const getSizeAndPosition = (props) => {
//   if (props.size == "big" && props.position == "center")
//     return tw`w-1/2 h-1/2 translate-x-1/2 translate-y-1/4`;
//   else if (props.size == "small" && props.position == "center")
//     return tw`w-1/4 h-1/4 translate-x-full translate-y-full`;
//   else return tw``;
// };

// const popupPositions = {
//   center: tw`translate-x-1/2 translate-y-1/4 `,
//   leftTop: tw`translate-x-[400px] translate-y-24 `,
//   none: tw``,
// };

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

  const chaildProperty = JSON.parse(chaildData?.Properties || "[]");

  const popupKeyVal = getCookie("Popupkey");

  useEffect(() => {
    const timerStart = setTimeout(() => {
      if (popupKeyVal !== chaildProperty?.productEnquiryFor) {
        console.log("popupKeyVal", popupKeyVal);

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
