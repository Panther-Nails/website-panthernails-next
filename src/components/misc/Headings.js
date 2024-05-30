import tw from "twin.macro";

export const SectionHeading = tw.h1`text-4xl sm:text-5xl text-primary-900 tracking-wide text-center `;
export const Subheading = tw.h5`font-bold text-primary-500`;

const DynamicHeading = tw.h1(
  SectionHeading
)`w-full mt-4 font-black px-4 lg:px-0 text-2xl sm:text-4xl lg:text-5xl text-center leading-tight `;

export const HighlightedHeading = ({ children }) => {
  return (
    <DynamicHeading>
      {children.split("`").map((chunk, index) => {
        if (index % 2 == 0) return <span tw="text-primary-900">{chunk}</span>;
        else return <span tw="text-primary-500">{chunk}</span>;
      })}
    </DynamicHeading>
  );
};
