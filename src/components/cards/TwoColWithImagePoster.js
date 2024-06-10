import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto `;
const Column = tw.div``;
const CardColumn = tw(Column)`md:w-72 `;

const Card = tw.div``;
const CardImage = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-80 bg-cover bg-center rounded`,
]);

const CardText = tw.div`mt-4`;
const CardTitle = tw.h5`text-xl mt-4 font-bold`;
const CardAction = tw(PrimaryButtonBase)`w-full mt-6`;
const TwoColumn = styled.div(() => [
  `::-webkit-scrollbar {
      display: none;
    }`,
  tw`md:flex items-center justify-center gap-8 `,
]);

export default ({ properties, children, data }) => {
  var inputs = JSON.parse(properties.inputs);
  const HandleNavigation = (url) => {
    window.open(url);
  };
  return (
    <Container>
      <Content tw="rounded-sm">
        <TwoColumn tw="bg-white p-8 rounded-lg">
          {inputs.map((card, index) => (
            <CardColumn key={index}>
              <Card>
                <CardImage imageSrc={card.imageSrc} />
                <CardText tw="text-center">
                  <CardTitle>{card.title}</CardTitle>
                  <CardAction
                    onClick={() => {
                      HandleNavigation(card.url);
                    }}
                    tw="hocus:bg-primary-900"
                  >
                    {card.buttonText}
                  </CardAction>
                </CardText>
              </Card>
            </CardColumn>
          ))}
        </TwoColumn>
      </Content>
    </Container>
  );
};
