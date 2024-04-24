import React from "react";
import tw from "twin.macro";
// import { Container } from "components/misc/Layouts";
const Container = tw.div`bg-gray-100 py-12 `;
const InnerContainer = tw.div`container mx-auto bg-black flex flex-row py-5 justify-center items-center`;
const Title = tw.h2`text-3xl font-semibold text-center mb-6`;
const Grid = tw.div`grid grid-cols-3 gap-8`;
 
const ProductCard = tw.div`bg-white rounded-lg shadow-lg p-6 flex flex-col`;
const ProductImage = tw.img`w-32 h-32 mx-auto mb-4`;
const ProductName = tw.h3`text-xl font-semibold text-center mb-2`;
const ProductDescription = tw.p`text-sm text-gray-700`;
export default({ 
    products = [
        {
          name: "Product 1",
          description: "Description of Product 1",
          imageSrc: "data:image/png;base64,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",
        },
        {
          name: "Product 2",
          description: "Description of Product 2",
          imageSrc: "product2.jpg",
        },
      ],
}) => {
    return (
        <Container>
          <InnerContainer>
            <Title>Our Products</Title>
            <Grid>
              {products.map((product, index) => (
                <ProductCard key={index}>
                    <ProductImage src={product.imageSrc}/>
                    <ProductName>{product.Name}</ProductName>
                  <ProductDescription>{product.description}</ProductDescription>
                </ProductCard>
              ))}
            </Grid>
          </InnerContainer>
        </Container>
      );
    };
     
 