import tw from "twin.macro";
export const PrimaryButton = tw.button`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`;

const Link = tw.a`w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 mt-4 first:mt-0 sm:mt-0 sm:mr-8 sm:last:mr-0 rounded-full font-bold border border-transparent tracking-wide transition duration-300 focus:outline-none focus:shadow-outline`;

export const PrimaryThemeButton = tw(
  Link
)` shadow-lg cursor-pointer bg-gradient-to-r from-gradientStartColor to-gradientEndColor hover:from-hovergradientStartColor hover:to-hovergradientEndColor text-black font-bold hover:border-black`;

export const SimpleButton = tw.button``;
