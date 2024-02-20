import GetStarted from "components/cta/GetStarted";
import tw from "twin.macro";
import ScrollAnimationScale from "./ScrollAnimationScale";
import GridWithFeaturedPost from "components/blogs/GridWithFeaturedPost";
import Testimonial from "components/testimonials/SimplePrimaryBackground";
// import WithStatsAndImage2 from "/components/blocks/Features/WithStatsAndImage2";

const PrimaryButtonForClose = tw.button`px-5 py-3 font-bold bg-black rounded bg-pink-500 text-gray-100 hocus:bg-pink-500 shadow-gray-700  hocus:text-gray-900 focus:shadow-inner focus:outline-none transition duration-300 shadow-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  hover:animate-none mb-0`;
const PopupSection = tw.div`absolute h-full w-full bg-transparent items-center justify-center backdrop-blur-xl mb-0`;


export default ({ isOpen, onClose, selectedCard }) => {
  if (!isOpen) return null;

  return (
    <PopupSection>
      <ScrollAnimationScale scale={0.8}>
        <PrimaryButtonForClose onClick={onClose}>Close</PrimaryButtonForClose>

        {selectedCard == 1 ? <GetStarted/> : null}
        {selectedCard == 2 ? <Testimonial /> : null}
        {selectedCard == 0 ? <GetStarted /> : null}
      </ScrollAnimationScale>
    </PopupSection>
  );
};
