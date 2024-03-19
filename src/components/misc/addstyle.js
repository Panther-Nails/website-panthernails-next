import tw, { styled, css } from "twin.macro";

export const theme = "theme2";


export const setbg = () => {
  if (theme === "theme1") {
    return tw`bg-colorPrimary `;
  } else if (theme === "theme2") {
    return tw`bg-sitecolor-100`;
  } else if (theme === "theme3") {
    return tw`bg-blue-100`;
  }
};

export const setshcolor = () => {
  if (theme === "theme1") {
    return tw`text-colorOnPrimary  `;
  } else if (theme === "theme2") {
    return tw`text-sitecolor-300  `;
  } else if (theme === "theme3") {
    return tw`text-pink-900  `;
  }
};
export const sethcolor = () => {
  if (theme === "theme1") {
    return tw`text-colorOnPrimaryHeighlight `;
  } else if (theme === "theme2") {
    return tw`text-sitecolor-900  `;
  } else if (theme === "theme3") {
    return tw`text-blue-500  `;
  }
};

export const setsdcolor = () => {
  if (theme === "theme1") {
    return tw`text-gray-500   `;
  } else if (theme === "theme2") {
    return tw`text-black  `;
  } else if (theme === "theme3") {
    return tw`text-blue-800  `;
  }
};
export const setdcolor = () => {
  if (theme === "theme1") {
    return tw`text-sitecolor-300 `;
  } else if (theme === "theme2") {
    return tw`text-indigo-300  `;
  } else if (theme === "theme3") {
    return tw`text-purple-700  `;
  }
};
