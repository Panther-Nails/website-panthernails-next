import React from "react";
import tw from "twin.macro";

// Define your CSS styles using Tailwind CSS
const Container = tw.div`flex justify-center items-center`;
const Column = tw.div`flex flex-col justify-center items-center`;
const CardContainer = tw.div`flex flex-col justify-center items-center p-4`;
const Image = tw.img`w-72 h-72 `;
const Content = tw.div`text-center`;

export default ({
  data = [
    {
      imageUrl:
        "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/lakehouse_context_001_web_blade?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=764&hei=10000&qlt=100&fmt=png-alpha&fit=constrain",
      heading: "Heading 1",
      description: "Description 1",
    },
    {
      imageUrl:
        "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/TeamsSizzle-Ignite_tbmnl_en-us?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1306&hei=1306&qlt=100&fmt=png-alpha&fit=constrain",
      heading: "Heading 2",
      description: "Description 2",
    },
  ],
}) => {
  return (
    <Container>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <Column>
            <CardContainer>
              <Image src={item.imageUrl} alt="Image" />
              <Content>
                <h2>{item.heading}</h2>
                <p>{item.description}</p>
              </Content>
            </CardContainer>
          </Column>
        </React.Fragment>
      ))}
    </Container>
  );
};
