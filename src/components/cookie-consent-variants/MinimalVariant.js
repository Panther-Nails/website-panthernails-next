import tw from "twin.macro";
import { css } from "styled-components/macro";

import { CookieIcon, X } from "lucide-react";

const Container = tw.div`bg-white rounded-lg shadow-lg p-4`;
const Header = tw.div`flex items-center justify-between mb-2`;
const Title = tw.h2`text-lg font-bold flex items-center`;
const CloseButton = tw.button`text-gray-500 hover:text-gray-700`;
const Description = tw.p`text-sm text-gray-600 mb-2`;
const OptionsContainer = tw.div`flex flex-wrap gap-2 mb-2`;
const Label = tw.label`flex items-center`;
const Checkbox = tw.input`mr-1 h-4 w-4 text-blue-600`;
const OptionName = tw.span`text-sm`;
const SubmitButton = tw.button`bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-700 transition-colors`;

const MinimalVariant = ({
  cookieOptions,
  selectedOptions,
  handleToggleOption,
  handleSubmit,
  setIsOpen,
}) => {
  console.log("Calling minimal");

  return (
    <Container>
      <Header>
        <Title>
          <CookieIcon css={tw`mr-2`} size={20} /> Cookies
        </Title>
        <CloseButton onClick={() => setIsOpen(false)}>
          <X size={20} />
        </CloseButton>
      </Header>
      <Description>
        We use cookies to improve your experience. Choose your preferences
        below.
      </Description>
      <OptionsContainer>
        {cookieOptions.map((option) => (
          <Label key={option.id}>
            <Checkbox
              type="checkbox"
              checked={selectedOptions.includes(option.id)}
              onChange={() => handleToggleOption(option.id)}
              disabled={option.required}
            />
            <OptionName>{option.name}</OptionName>
          </Label>
        ))}
      </OptionsContainer>
      <div css={tw`flex justify-end`}>
        <SubmitButton onClick={handleSubmit}>Accept</SubmitButton>
      </div>
    </Container>
  );
};

export default MinimalVariant;
