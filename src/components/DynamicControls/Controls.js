import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro";
import { PrimaryThemeButton } from "components/misc/Buttons";
import { SimpleButton } from "components/misc/Buttons";
import { GradientDuotone } from "components/misc/Buttons";
import { Button } from "@material-tailwind/react";
import { PrimaryButton } from "components/misc/Buttons";
import { SecondaryButton } from "components/misc/Buttons";

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
    default:
      return SimpleButton;
  }
};

export const getCardType = (cardType) => {
  switch (cardType) {
    default:
      return null;
  }
};

export const getLinkType = (linkType) => {
  switch (linkType) {
    default:
      return null;
  }
};
