import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import defaultCardImage from "images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import FastIconImage from "images/fast-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
import SimpleIconImage from "images/simple-icon.svg";

const Container = tw.div`relative  w-full `;
const Content = tw.div`max-w-screen-xl mx-auto py-10`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center py-5 `}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full `;

const Column = styled.div`
  ${tw`w-1/6 max-w-sm `}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8 transition-transform duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 border-solid bg-blue-400 h-32 mb-5 rounded-lg shadow-lg shadow-gray-500`}
  .imageContainer {
    ${tw` text-center flex-shrink-0 mx-auto`}
    img {
      ${tw`w-40 max-w-sm`}
    }
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({
  cards = null,
  heading = "Amazing Features",
  subheading = "Features",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      imageSrc:
        "https://www.tatamotors.com/wp-content/themes/tatamotors_2019/images/tata_motors_logo.png",
    },
    {
      imageSrc:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABCCAMAAABaULmmAAAAY1BMVEX///8AAAAaGhqQkJD19fW9vb2NjY3Q0NDd3d34+Pi3t7eKiorDw8PJycnr6+v7+/s/Pz9UVFTl5eWwsLBgYGCcnJxJSUlra2t3d3cvLy9ZWVkoKChERESoqKg4ODiDg4MMDAwFOqpUAAAFHUlEQVRYhe2ZyaKzKgyARW3Vtmq1dap1eP+nvEgYAoT2/Ku7aTanIPBBCCHhRFEUtZkjeVVHX+Vo+OFTVnnVlagvc1W+Mlf2aVjSL9ijXU5+SsUYF686hsFbVZF4XCFj6/bE8jqaPGmuAJwCWKOHAJexLozNnbl/5dZv6IFUFOSyIcgdpE7+zJVYbBKCO7/vSubd6DqArVQD33porpznDdcJbmINexvluA+aq03x+jeuxNq2Jrhnp3MrDIft5IlSNsKl+AtXTnOx25HcKBrDC+4+2p7HTeimAW60HvU9xYW9FxObfYW43CWwJSHuKWQ5D/EhzwMKcbiXkImGuOB3CJ90P+ob6TvmL9wbYIkjGeLC+K7fiaJSHQn44TWwuBlgG2L4ILeh9Simsx6/3qQFYK70az11LP6Rm5ltha0rw9wKDtxEnLYP3JVUo/ABM4w0UTo0XHnOJ/pu+ze7avFZXKgmmlusLHQkPnGFFnd3ruBOpOKKmLBVxa0BG9O39Be/8XIqQQmbKoLnsq9DxQVPa9r+kTuq42LJ2QbBNGyfAFx9tYTuFpqbPkUf1yukrmI30Sz120xMS0DR/j2YZpvs4i7XMyQwM7u3ua1AYtqwBHd6NVJezaovfs+Xi1rLUwh1xnjBiNuB1u5hLimeLwdHYcWvsGB8tRruWf0m45Ygd/GaQpR0RqtL5V1McQ9Llo6SChH/HseWWv+poqotQUaruANSkedMg1zXog7pzedrZdZ6yGo8v+Sq4BpOHhHyCu5Q3qSUMA/Cl2fWxM7djotmnsA1Xhtsa/KuJO8cDdZ83XpfBH91uEhfEz2e5zeK3d0yIWC51/ZpU5vMsXIvrmulgr5xlUIdPwOOj1tUixb+ytSC9Hr8OFbao5OqEX4SDGa16rArbqXz7TPUXE2TiNs7aiGUf34hCG6mu1ajXKsQawOpPAXmaTtMiisTIGQchWOlPF1311OFuXCp2h6WvI/klpgJLrbxONPckXpILuEw6fv36kxw9ncciba5EFfZKvK9gXsffLG6keCs+MG0lAqdFJorswzkMANceeqkZoWL9H2OFnG0IBgLcKUG98oqE1HQCW0xZBtfHx5Eg8C7ijokOjipci5USJDn+otok396XmoPqUw/ImYu8tCXn/zkJz/5yU/+TymyR6mvp6oUoiLH/ChY2Q2O6CL9XxXz75Ucfa9OD1yyR+IhCI/3rrUqrdM0zeoxoWG8wGLUu8fh3VsWWpNdbzrqLEa2ryxWsYeIMHYdRSfswZHZLke74GSWc88wgNZHxgaU6zQytn2aGPCqP99nDqk7+Upy48FVXY0qxGidnNPlQmhnAqZma1FW2Y9iwTlL3h63sx9cOnvgzXnoo7m7CphanjM0Jg7uF9H/Ody0njU3tl8Mcjbg3R2cmO7CppmLmqrQM4/j1bYcmJtZSN+lfMFcAyePm7qZHQ+G1073HEb36+3CRQVxr2ZZllEHnJVQ66xDy76LtjV6jdGF4HrpRXY1OUgX23Gio+dX/L6vJs7vWH+/v+MYcVuW8A33udGbiI6rWFXWMmvJCpLbHE8BmzZWlpwO0Vk550bbMQLBvYEx1nLZDwFo9Gtfxt6XrByYPkeVCIYV97CrQi34IXd2mxA3Peyb4PITOpbZY2JyffOScUWjl5AxZru2NZknqIGfCcwNbOQuN7ZSiU6jdvqkVZKY98uM5wizejupE57crVYCUxc1+g0ii/JLKv+oVuq77lgXkfcLtbNL/wH9GDrGOlcEugAAAABJRU5ErkJggg==",
      title: "24/7 Support",
    },
    {
      imageSrc:
        "https://www.truflopipes.com/wp-content/uploads/2019/11/Logo-2-1.png",
      title: "Customizable",
    },
    {
      imageSrc:
        "https://sparkminda.com/wp-content/uploads/2019/04/mindalogo.png",
      title: "Reliable",
    },
    {
      imageSrc: "https://oneapp.panthernails.com/FS/A8C/CompanyLogos/127.png",
      title: "Fast",
    },
    {
      imageSrc:
        "https://varmora.com/wp-content/uploads/2020/09/Logo-Varmora.png",
      title: "Fast",
    },
    {
      imageSrc: "https://oneapp.panthernails.com/FS/A8C/CompanyLogos/MYK.png",
      title: "Fast",
    },
    {
      imageSrc:
        "https://oneapp.panthernails.com/FS/A8C/CompanyLogos/171_Dark.png",
      title: "Fast",
    },
    {
      imageSrc: "https://oneapp.panthernails.com/FS/A8C/CompanyLogos/116.png",
      title: "Fast",
    },
    {
      imageSrc:
        "https://oneapp.panthernails.com/FS/A8C/CompanyLogos/165_old.png",
      title: "Fast",
    },
    {
      imageSrc: "https://oneapp.panthernails.com/FS/A8C/CompanyLogos/144.png",
      title: "Fast",
    },
    {
      imageSrc:
        "data:image/png;base64,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",
      title: "Fast",
    },

    {
      imageSrc: "https://oneapp.panthernails.com/FS/A8C/CompanyLogos/162.png",
      title: "Fast",
    },
    {
      imageSrc: "https://oneapp.panthernails.com/FS/A8C/CompanyLogos/163.png",
      title: "Fast",
    },
    {
      imageSrc:
        "https://www.ardexendura.com/wp-content/uploads/2018/05/ardex_logo_small.png",
      title: "Fast",
    },
    {
      imageSrc:
        "https://mangalamlubricants.com/wp-content/uploads/2020/08/logo.png",
      title: "Fast",
    },
    {
      imageSrc:
        "https://static.wixstatic.com/media/d8c679_6d4d4b80698e4184ba6a45b1dd577185~mv2.png/v1/fill/w_161,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Pupa%20logo%20red.png",
      title: "Fast",
    },
  ];

  const HighlightedText = tw.span`text-primary-500`;

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <Content>
        <Heading>
          Our Esteemed<HighlightedText>Clients</HighlightedText>
        </Heading>
      </Content>
      <ThreeColumnContainer>
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
