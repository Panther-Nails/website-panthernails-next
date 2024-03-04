import React from "react";
import tw from "twin.macro";

const Container = tw.div`py-12 bg-gradient-to-b from-gray-100 to-white`;
const InnerContainer = tw.div`container mx-auto`;
const Title = tw.h2`text-3xl font-semibold text-center mb-6`;
const Grid = tw.div`grid grid-cols-3 gap-8`;

const ServiceCard = tw.div`bg-white rounded-lg shadow-lg p-6 flex flex-col`;
const ServiceIcon = tw.img`w-12 h-12 mx-auto mb-4`;
const ServiceName = tw.h3`text-xl font-semibold text-center mb-2`;
const ServiceDescription = tw.p`text-sm text-gray-700`;

export default ({ 
    services = [
        { title: "Service 1", description: "Description of Service 1" },
        { title: "Service 2", description: "Description of Service 2" },
      ]
       

}) => {
  return (
    <Container>
      <InnerContainer>
        <Title>Our Services</Title>
        <Grid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceIcon src={service.iconSrc} alt={service.Name} />
              <ServiceName>{service.Name} </ServiceName>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </Grid>
      </InnerContainer>
    </Container>
  );
};


