import tw, { styled,css } from "twin.macro";
// export const SectionDescription = tw.p` text-sm md:text-base lg:text-lg font-medium leading-relaxed text-sitecolor-300 max-w-xl`;
  export const SectionDescription = styled.p(props => [
    tw`text-sm md:text-base lg:text-lg font-medium leading-relaxed text-gray-500 max-w-xl`,
    props.SectionDescription === 'sectiondecriptioncolor'? tw`w-10/12 text-sitecolor-300   ` :
    tw``,
  ]);
  export const Description = styled.p(props => [
    tw`text-sm md:text-base lg:text-lg font-medium leading-relaxed text-gray-500 max-w-xl`,
    props.Description === 'descriptioncolor'? tw` text-sitecolor-300 w-10/12  ` :
    tw``,
  ]);