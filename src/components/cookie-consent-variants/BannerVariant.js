import tw from "twin.macro";
import { CookieIcon } from "lucide-react";
import { css } from "styled-components/macro";

const Container = tw.div`bg-gray-800 text-white p-4 flex items-center justify-between`;
const Content = tw.div`flex items-center`;
const Description = tw.p`text-sm mr-4`;
const ButtonContainer = tw.div`flex items-center space-x-4`;
const AcceptAllButton = tw.button`bg-white text-gray-800 px-4 py-2 rounded text-sm font-medium hover:bg-gray-200 transition-colors`;
const SavePreferencesButton = tw.button`bg-transparent border border-white px-4 py-2 rounded text-sm font-medium hover:bg-white hover:text-gray-800 transition-colors`;

const BannerVariant = ({
  cookieOptions,
  selectedOptions,
  handleToggleOption,
  handleSubmit,
}) => {
  return (
    <Container>
      <Content>
        <CookieIcon css={tw`mr-2`} size={24} />
        <Description>
          We use cookies to enhance your experience. By continuing to visit this
          site you agree to our use of cookies.
        </Description>
      </Content>
      <ButtonContainer>
        <AcceptAllButton
          onClick={() => handleSubmit(cookieOptions.map((option) => option.id))}
        >
          Accept All
        </AcceptAllButton>
        <SavePreferencesButton onClick={handleSubmit}>
          Save Preferences
        </SavePreferencesButton>
      </ButtonContainer>
    </Container>
  );
};

export default BannerVariant;
