import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/email-illustration.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto pb-20 md:pb-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft === "true"
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`;
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`;
const Textarea = styled(Input).attrs({ as: "textarea" })`
  ${tw`h-24`}
`;

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`;

export default ({ children, properties, index, subheading = "Contact Us" }) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  var inputs = JSON.parse(properties.inputs);
  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image
            imageSrc={
              properties.imageSrc ? properties.imageSrc : EmailIllustrationSrc
            }
          />
        </ImageColumn>
        <TextColumn textOnLeft={properties.textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>
              {properties.heading}
              <span tw="text-primary-500">{properties.highlightHeading}</span>
            </Heading>
            {properties.description && (
              <Description>{properties.description}</Description>
            )}
            <Form action={properties.formAction} method={properties.formMethod}>
              {inputs.map((label, index) => (
                <Input
                  key={index}
                  type={label.type}
                  name={label.name}
                  placeholder={label.placeholder}
                  required
                />
              ))}

              <Textarea name="body" placeholder={properties.placeholder} />
              <SubmitButton type="submit">{properties.buttonText}</SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
