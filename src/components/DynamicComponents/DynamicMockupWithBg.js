// import React from "react";
// import tw from "twin.macro";
// import { css } from "styled-components/macro";
// import styled from "styled-components";
// import { Container, Image, TextColumn } from "components/misc/Layouts";
// import { Description, Heading } from "components/misc/Typography";
// import AnimationRevealPage from "helpers/AnimationRevealPage";
// import { ImageContainer } from "components/misc/Layouts";
// export default ({
//   data = {
//     subheading: "Our Expertise",
//     heading: "Designed & Developed by Professionals",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     componentProperties: {
//       primaryButtonText: "Learn More",
//       primaryButtonUrl: "https://timerse.com",
//       imageSrc: TeamIllustrationSrc,
//       buttonRounded: true,
//       imageRounded: true,
//       imageBorder: false,
//       imageShadow: false,
//       imageCss: null,
//       imageDecoratorBlob: false,
//       imageDecoratorBlobCss: null,
//       textOnLeft: false,
//       showButton: false,
//     },
//   },
// }) => {
//   return (
//     <>
//       <Container tw="px-12">
//         <TwoColumn tw="py-3">
//           <TextColumn textOnLeft={data.componentProperties.textOnLeft}>
//             <TextContent>
//               <Subheading>{data.subheading}</Subheading>
//               <Heading>{data.heading}</Heading>
//               <Description>{data.description}</Description>
//             </TextContent>
//           </TextColumn>
//           <ImageColumn>
//             <Image
//               css={data.componentProperties.imageCss}
//               src={data.componentProperties.imageSrc}
//               imageBorder={data.componentProperties.imageBorder}
//               imageShadow={data.componentProperties.imageShadow}
//               imageRounded={data.componentProperties.imageRounded}
//             />
//             {data.componentProperties.imageDecoratorBlob && (
//               <DecoratorBlob
//                 css={data.componentProperties.imageDecoratorBlobCss}
//               />
//             )}
//           </ImageColumn>
//         </TwoColumn>
//       </Container>
//     </>
//   );
// };
