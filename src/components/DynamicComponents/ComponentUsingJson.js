import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro";
import { Container } from "components/misc/Layouts";
import { Heading } from "components/misc/Typography";

export default ({
  data = {
    ComponentOrder: 2,
    DynamicLinkComponentID: 101,
    ComponentName: "About",
    ComponentHeading: "About My Website",
    ComponentStyles: '{"cardstyles":{}, "componentstyle":{}}',
    ComponentProperties:
      '{"backgroundUrl":"https://images.unsplash.com/photo-1567789884554-0b844b597180?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "videoUrl":"https://videos.pexels.com/video-files/20600550/20600550-hd_1920_1080_30fps.mp4", "description":"Cascading Style Sheets is a style sheet language used for describing the look and formatting of a document written in a markup language. While most often used to change the style of web pages and user", "buttonText": "Know More", "buttonUrl":"/"}',
  },
}) => {
  return (
    <>
      <Container>
        <Heading>{data.ComponentHeading}</Heading>
      </Container>
    </>
  );
};
