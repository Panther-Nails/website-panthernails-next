import { useNavigate } from "react-router-dom";

import tw from "twin.macro";
const PopupImg = tw.img`w-[100%] h-[100%] rounded-xl cursor-pointer`;
const FullImgContainer = tw.div`w-[100%] h-[100%]`;

export default ({ properties }) => {
  const navigate = useNavigate();
  const navigateTo = (url) => () => {
    navigate(url);
  };

  return (
    <FullImgContainer>
      <PopupImg
        src={properties.imageSrc}
        onClick={navigateTo(properties.navigetUrl)}
      />
    </FullImgContainer>
  );
};
