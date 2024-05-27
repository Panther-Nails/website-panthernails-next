import tw from "twin.macro";

export const SectionHeading = tw.h1`text-4xl sm:text-5xl text-primary-900 tracking-wide text-center `;
export const Subheading = tw.h5`font-bold text-primary-500`;

export const HighlightedHeading = ({ children }) => {
  return (
    <>
      {children.split("`").map((chunk, index) => {
        if (index % 2 == 0) return <span tw="text-primary-900">{chunk}</span>;
        else return <span tw="text-primary-500">{chunk}</span>;
      })}
    </>
  );
};
