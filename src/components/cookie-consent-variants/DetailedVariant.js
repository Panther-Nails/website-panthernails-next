import { useState } from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro";
import { motion } from "framer-motion";
import { CookieIcon, ChevronDown, ChevronUp, X } from "lucide-react";

const Container = tw.div`bg-white rounded-lg shadow-lg p-6`;
const Header = tw.div`flex items-center justify-between mb-4`;
const Title = tw.h2`text-2xl font-bold flex items-center`;
const CloseButton = tw.button`text-gray-500 hover:text-gray-700`;
const Description = tw.p`text-gray-600 mb-6`;
const OptionContainer = tw.div`mb-6 border-b pb-4`;
const OptionHeader = tw.div`flex items-center justify-between mb-2`;
const Label = tw.label`flex items-center cursor-pointer`;
const Checkbox = tw.input`mr-3 h-5 w-5 text-blue-600`;
const OptionName = tw.span`font-semibold text-lg`;
const ExpandButton = tw.button`text-blue-600 hover:text-blue-800`;
const OptionDescription = tw(motion.div)`overflow-hidden`;
const CookieList = tw.div`bg-gray-100 p-4 rounded`;
const CookieListTitle = tw.h4`font-medium mb-2`;
const CookieListItems = tw.ul`list-disc list-inside text-sm text-gray-600`;
const Footer = tw.div`flex justify-between items-center mt-6`;
const PrivacyLink = tw.a`text-blue-600 hover:underline`;
const SubmitButton = tw.button`bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors`;

const DetailedVariant = ({
  cookieOptions,
  selectedOptions,
  handleToggleOption,
  handleSubmit,
  setIsOpen,
}) => {
  const [expandedOption, setExpandedOption] = useState(null);

  return (
    <Container>
      <Header>
        <Title>
          <CookieIcon css={tw`mr-2`} /> Detailed Cookie Preferences
        </Title>
        <CloseButton onClick={() => setIsOpen(false)}>
          <X size={24} />
        </CloseButton>
      </Header>
      <Description>
        We value your privacy and want to be transparent about the cookies we
        use. Please review each category and select your preferences.
      </Description>
      {cookieOptions.map((option) => (
        <OptionContainer key={option.id}>
          <OptionHeader>
            <Label>
              <Checkbox
                type="checkbox"
                checked={selectedOptions.includes(option.id)}
                onChange={() => handleToggleOption(option.id)}
                disabled={option.required}
              />
              <OptionName>{option.name}</OptionName>
            </Label>
            <ExpandButton
              onClick={() =>
                setExpandedOption(
                  expandedOption === option.id ? null : option.id
                )
              }
            >
              {expandedOption === option.id ? (
                <ChevronUp size={24} />
              ) : (
                <ChevronDown size={24} />
              )}
            </ExpandButton>
          </OptionHeader>
          <OptionDescription
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: expandedOption === option.id ? "auto" : 0,
              opacity: expandedOption === option.id ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <p css={tw`text-gray-600 mt-2 mb-4`}>{option.description}</p>
            <CookieList>
              <CookieListTitle>Cookies used:</CookieListTitle>
              <CookieListItems>
                <li>Cookie 1: Purpose of this cookie</li>
                <li>Cookie 2: Purpose of this cookie</li>
                <li>Cookie 3: Purpose of this cookie</li>
              </CookieListItems>
            </CookieList>
          </OptionDescription>
        </OptionContainer>
      ))}
      <Footer>
        <PrivacyLink href="#">Privacy Policy</PrivacyLink>
        <SubmitButton onClick={handleSubmit}>Save Preferences</SubmitButton>
      </Footer>
    </Container>
  );
};

export default DetailedVariant;
