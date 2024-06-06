import React, { useEffect, useState } from "react";
import styled from "styled-components"; //eslint-disable-line
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import { ProcessChildComponentsSeparately } from "DynamicPage";

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

// const popupSizes = {
//   big: tw`w-1/2 h-1/2 `,
//   medium: tw`w-1/3 h-1/3`,
//   small: tw`w-1/4 h-1/4`,
//   none: tw``,
// };

// const popupPositions = {
//   center: tw`translate-x-1/2 translate-y-1/4 `,
//   leftTop: tw`translate-x-[400px] translate-y-24 `,
//   none: tw``,
// };

const Popup = styled.div((props) => [
  tw`fixed top-0 left-0 rounded  z-50 w-1/2 h-1/2 translate-x-1/2 translate-y-1/4 `,
  //   getSizeAndPosition(props),
]);

export default ({ properties, children, index }) => {
  const [showPopup, setShowPopup] = useState(false);

  var startTime = properties.startTime
    ? JSON.parse(properties.startTime)
    : 5000;

  var endTime = properties.endTime ? JSON.parse(properties.endTime) : 10000;

  useEffect(() => {
    const timerStart = setTimeout(() => {
      setShowPopup(true);
    }, startTime);

    return () => clearTimeout(timerStart);
  }, [startTime]);

  useEffect(() => {
    const timerEnd = setTimeout(() => {
      setShowPopup(false);
    }, endTime);

    return () => clearTimeout(timerEnd);
  }, [showPopup]);

  return showPopup ? (
    <>
      <Popup size="small" position="center">
        <CloseIcon
          tw="p-1 bg-red-500 rounded rounded-full hocus:bg-gray-600 fixed right-0 z-50 cursor-pointer"
          onClick={() => setShowPopup(false)}
        />
        <>{ProcessChildComponentsSeparately(children)}</>
      </Popup>
    </>
  ) : (
    <></>
  );
};
