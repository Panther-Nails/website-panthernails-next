import { useState } from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro";
import { motion } from "framer-motion";
import { CookieIcon, ChevronDown, ChevronUp, X } from "lucide-react";

const Container = tw.div`bg-white rounded-lg shadow-lg p-6`;
const Header = tw.div`flex items-center justify-between mb-4`;
const Title = tw.h2`text-xl font-bold flex items-center`;
const CloseButton = tw.button`text-gray-500 hover:text-gray-700`;
const Description = tw.p`text-gray-600 mb-4`;
const OptionContainer = tw.div`mb-4`;
const OptionHeader = tw.div`flex items-center justify-between`;
const Label = tw.label`flex items-center cursor-pointer`;
const Checkbox = tw.input`mr-2 h-5 w-5 text-blue-600`;
const OptionName = tw.span`font-medium`;
const ExpandButton = tw.button`text-blue-600 hover:text-blue-800`;
const OptionDescription = tw(motion.div)`overflow-hidden`;
const SubmitButton = tw.button`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors`;

const StandardVariant = ({
  cookieOptions,
  selectedOptions,
  handleToggleOption,
  handleSubmit,
  setIsOpen,
  properties,
}) => {
  const [expandedOption, setExpandedOption] = useState(null);

  return (
    <Container>
      <Header>
        <Title>
          {properties.consentIconURL ? (
            <>
              <img
                src={`${properties.consentIconURL}`}
                alt={`${properties.consentIconURL}`}
              />
            </>
          ) : (
            <CookieIcon css={tw`mr-2`} aria-label="CookieIcon" />
          )}
          {properties.consentHeading || ""}
        </Title>
        <CloseButton onClick={() => setIsOpen(false)}>
          <X size={24} />
        </CloseButton>
      </Header>
      <Description>{properties.consentDescription || ""}</Description>
      {cookieOptions.map((option) => (
        <OptionContainer key={option.KeyPointID}>
          <OptionHeader>
            <Label>
              <Checkbox
                type="checkbox"
                checked={selectedOptions.includes(option.KeyPointID)}
                onChange={() => handleToggleOption(option.KeyPointID)}
                disabled={option.KeyPointTickBoxRequired}
              />
              <OptionName>{option.KeyPointName}</OptionName>
            </Label>
            <ExpandButton
              onClick={() =>
                setExpandedOption(
                  expandedOption === option.KeyPointID
                    ? null
                    : option.KeyPointID
                )
              }
            >
              {expandedOption === option.KeyPointID ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </ExpandButton>
          </OptionHeader>
          <OptionDescription
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: expandedOption === option.KeyPointID ? "auto" : 0,
              opacity: expandedOption === option.KeyPointID ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <p css={tw`text-gray-600 mt-2`}>{option.KeyPointDescription}</p>
          </OptionDescription>
        </OptionContainer>
      ))}
      <div css={tw`flex justify-end mt-6`}>
        <SubmitButton onClick={handleSubmit}>Save Preferences</SubmitButton>
      </div>
    </Container>
  );
};

export default StandardVariant;
