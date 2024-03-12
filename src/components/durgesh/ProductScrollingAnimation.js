import React, { useState, useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import tw from "twin.macro";

const Container = tw.div`flex items-center justify-center min-h-screen w-screen`;
const LeftColumn = tw.div`w-1/2 overflow-hidden`;
const RightColumn = tw.div`w-1/2 px-4 py-8 overflow-hidden`;

export default ({
  products = [
    {
      image:
        "https://wp.salesforce.com/en-in/wp-content/uploads/sites/21/2023/03/pb-hp-product-smb_icon-1.jpg?resize=768,433",

      name: "First Product",
      description: "Description for First Product",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.skGPbYgW7-HfIGVptTMvGAHaHa?w=205&h=205&c=7&r=0&o=5&pid=1.7",

      name: "Second Product",
      description: "Description for Second Product",
    },
  ],
}) => {
  const [showSecondProduct, setShowSecondProduct] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate the scroll position where the right column should start scrolling
      const scrollTrigger = windowHeight / 2;

      // Determine if the scroll position is beyond the trigger point
      setShowSecondProduct(scrollPosition > scrollTrigger);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      {products.map((product, index) => (
        <React.Fragment key={index}>
          <LeftColumn>
            <Parallax y={[-20, 20]}>
              <img
                src={product.image}
                alt={`Product ${index + 1}`}
                className="w-full"
              />
            </Parallax>
          </LeftColumn>
          <RightColumn></RightColumn>
        </React.Fragment>
      ))}
    </Container>
  );
};
