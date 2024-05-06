import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";

const Container = tw.div`relative w-full h-screen  p-20 bg-gray-500  border-4 border-red-900`;

export default ({ children, finalJson,cfinalJson }) => {
  return (
    <>
      <Container>
        <h1>{finalJson.heading}</h1>

        <Container>
          {children.map((child, index) => {
            const chpJson = JSON.parse(child.HPJSON);
            var tp = children[index];
            // console.log("testchildren", cfinalJson);

            return (
              <>
                <h1>{chpJson.heading}</h1>
                <Container>
                  {tp.Children.map((child, index) => {
                    var tp = children[index];
                    // console.log("test3");
                    const chpJson = JSON.parse(child.HPJSON);

                    return <h1>{chpJson.heading}</h1>;
                  })}
                </Container>
              </>
            );
          })}
        </Container>
      </Container>
    </>
  );
};
