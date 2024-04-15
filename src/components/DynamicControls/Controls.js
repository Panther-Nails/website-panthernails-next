import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro";
import {
  PrimaryThemeButton,
  GradientDuotone,
  SimpleButton,
  PrimaryButton,
  SecondaryButton,
  Link,
} from "components/misc/Buttons";

import { Button } from "@material-tailwind/react";

export const getButtonByType = (buttonType) => {
  switch (buttonType) {
    case "Custom":
      return PrimaryThemeButton;
    case "Gradient":
      return GradientDuotone;
    case "Tailwind":
      return Button;
    case "Primary":
      return PrimaryButton;
    case "Secondary":
      return SecondaryButton;
    case "Link":
      return Link;
    default:
      return SimpleButton;
  }
};

export const getStyle = (props) => {
  return {
    backgroundColor: `${props.bgColor}`,
    color: `${props.textColor}`,
    border: "",
    padding: "",
    borderRadius: `${props.rounded}%`,
    rotate: `${props.rotate}deg`,
    backgroundImage: `url(${props.backgroundImageUrl})`,
  };
};
