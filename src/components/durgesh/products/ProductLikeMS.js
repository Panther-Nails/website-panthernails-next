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
    <>
      {/* <div class="flex flex-col md:flex-row bg-gray-100">
  <nav class="bg-gray-800 w-full md:w-1/4 p-4 text-white bg-blue-100">
  </nav>
 
  <div class="md:w-3/4 p-4 bg-green-100">
    <div class="flex">
      <div class="w-1/2 h-auto bg-black">
      </div>
      <div class="w-1/2 h-auto bg-primary-200">
      </div>
    </div>
  </div>
</div> */}

      {/* <Container>
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
      </Container> */}
    </>
  );
};
