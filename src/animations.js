import { keyframes } from "styled-components";
import tw from "twin.macro";
import styled from "styled-components";

// const floatingImage = {
//     @keyframes floating {
//         0% { transform: translate(0,  0px); }
//         50%  { transform: translate(0, 15px); }
//         100%   { transform: translate(0, -0px); }
//     }
// }

export const Animations = {
  floating: {
    animationName: "floating",
    animationduration: "3s",
    animationiterationcount: "infinite",
    animationtimingfunction: "ease-in-out",
    marginleft: "30px",
    margintop: "5px",
  },
  animationTwo: {},
};
