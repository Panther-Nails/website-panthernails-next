import { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro";
import { motion, AnimatePresence } from "framer-motion";
import { CookieIcon, X } from "lucide-react";

const FloatingButton = styled.button`
  ${tw`bg-blue-600 text-white rounded-full p-3 shadow-lg hover:bg-blue-700 transition-colors`}
`;

const ExpandedContainer = styled(motion.div)`
  ${tw`bg-white rounded-lg shadow-lg p-4 w-72`}
`;

const Header = tw.div`flex justify-between items-center mb-2`;
const Title = tw.h2`text-lg font-bold flex items-center`;
const CloseButton = tw.button`text-gray-500 hover:text-gray-700`;
const Description = tw.p`text-sm text-gray-600 mb-2`;
const Label = tw.label`flex items-center mb-2`;
const Checkbox = tw.input`mr-2 h-4 w-4 text-blue-600`;
const OptionName = tw.span`text-sm`;
const SaveButton = tw.button`bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-700 transition-colors`;

const FloatingVariant = ({
  cookieOptions,
  selectedOptions,
  handleToggleOption,
  handleSubmit,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div css={tw`fixed bottom-0 right-0`}>
      <AnimatePresence>
        {isExpanded ? (
          <ExpandedContainer
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <Header>
              <Title>
                <CookieIcon css={tw`mr-2`} size={20} /> Cookie Settings
              </Title>
              <CloseButton onClick={() => setIsExpanded(false)}>
                <X size={20} />
              </CloseButton>
            </Header>
            <Description>Choose your cookie preferences:</Description>
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
            <div css={tw`flex justify-end mt-2`}>
              <SaveButton onClick={handleSubmit}>Save</SaveButton>
            </div>
          </ExpandedContainer>
        ) : (
          <FloatingButton
            as={motion.button}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={() => setIsExpanded(true)}
          >
            <CookieIcon size={24} />
          </FloatingButton>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingVariant;
