import styled from "styled-components";
import tw from "twin.macro";

import {
  bundleIcon,
  CutRegular,
  CutFilled,
  Home16Regular,
  Home16Filled,
  ArrowLeft16Filled,
  ArrowLeft16Regular,
  ArrowRight16Filled,
  HomeDatabaseRegular,
  HomeDatabase20Filled,
  ArrowRight16Regular,
} from "@fluentui/react-icons";
import { NavLink } from "react-router-dom";
import pnlogo from "../../images/pnlogo.svg";

export const HomeIcon = bundleIcon(Home16Filled, Home16Regular);
export const ExpandIcon = bundleIcon(ArrowRight16Filled, ArrowRight16Regular);
export const CollapseIcon = bundleIcon(ArrowLeft16Filled, ArrowLeft16Regular);
export const CutIcon = bundleIcon(CutFilled, CutRegular);
export const HomeDatabsase = bundleIcon(
  HomeDatabaseRegular,
  HomeDatabase20Filled
);

export const LogoLink = styled(NavLink)`
  ${tw`flex w-auto items-center font-black `};

  img {
    ${tw`h-8 `}
  }
`;

export const MenuLink = tw(
  NavLink
)`lg:text-left w-auto px-3 pt-1 pb-2 block duration-300`;

export const Divider = tw.hr`border-2 border-b-primary-900 `;

export const CompanyLogo = (props) => {
  return (
    <LogoLink to={props.to}>
      <img src={pnlogo} alt="Panther Nails"></img>
    </LogoLink>
  );
};
