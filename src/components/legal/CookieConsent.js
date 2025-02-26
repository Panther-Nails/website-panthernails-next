import { lazy, useEffect, useState } from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro";
import { motion, AnimatePresence } from "framer-motion";
import { ExecuteQuery } from "services/APIService";

const MinimalVariant = lazy(() =>
  import("../../components/cookie-consent-variants/MinimalVariant")
);
const DetailedVariant = lazy(() =>
  import("../../components/cookie-consent-variants/DetailedVariant")
);
const FloatingVariant = lazy(() =>
  import("../../components/cookie-consent-variants/FloatingVariant")
);
const BannerVariant = lazy(() =>
  import("../../components/cookie-consent-variants/BannerVariant")
);
const StandardVariant = lazy(() =>
  import("../../components/cookie-consent-variants/StandardVariant")
);

const Container = tw.div`fixed z-[100]`;

const getPositionStyles = (position) => {
  switch (position) {
    case "top":
      return tw`top-0 left-1/2 transform -translate-x-1/2`;
    case "bottom":
      return tw`bottom-0 left-1/2 transform -translate-x-1/2`;
    case "left":
      return tw`left-0 top-1/2 transform -translate-y-1/2`;
    case "right":
      return tw`right-0 top-1/2 transform -translate-y-1/2`;
    case "center":
      return tw`left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2`;
    case "left-center":
      return tw`left-0 top-1/2 transform -translate-y-1/2`;
    case "right-center":
      return tw`right-0 top-1/2 transform -translate-y-1/2`;
    case "right-top":
      return tw`right-0 top-0`;
    case "bottom-left":
      return tw`bottom-0 left-0`;
    case "bottom-right":
      return tw`bottom-0 right-0`;
    case "top-left":
      return tw`top-0 left-0`;
    case "top-right":
      return tw`top-0 right-0`;
    default:
      return tw`left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2`;
  }
};

export default ({ properties, data, index, children }) => {
  const [cookieOptions, setCookieOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    ExecuteQuery({
      ActionName: "Core.GMst_SelectFewFromAppPolicyKeyPointsWhereKeyPointIDCSV",
      ParameterJSON: JSON.stringify({
        KeyPointIDCSV: "37,38,39",
      }),
    }).then((response) => {
      console.log("cookie", response.items);
      if (response.message === "Successfull") {
        setCookieOptions(response.items);
        setSelectedOptions(
          response.items
            .filter((option) => option.required)
            .map((option) => option.id)
        );
      }
    });
  }, []);

  const handleToggleOption = (id) => {
    setSelectedOptions((prev) =>
      prev.includes(id)
        ? prev.filter((optionId) => optionId !== id)
        : [...prev, id]
    );
  };

  const handleSubmit = () => {
    properties?.onSubmit(selectedOptions);
    setIsOpen(false);
  };

  const renderVariant = () => {
    const props = {
      cookieOptions,
      selectedOptions,
      handleToggleOption,
      handleSubmit,
      setIsOpen,
      properties,
    };

    switch (properties.consentDisplayVariant) {
      case "minimal":
        return <MinimalVariant {...props} />;
      case "detailed":
        return <DetailedVariant {...props} />;
      case "banner":
        return <BannerVariant {...props} />;
      case "floating":
        return <FloatingVariant {...props} />;
      case "standard":
        return <StandardVariant {...props} />;
      default:
        return <StandardVariant {...props} />;
    }
  };

  //AnimatePresence
  return (
    <AnimatePresence>
      {isOpen && (
        <Container
          css={[
            getPositionStyles(properties.consentDisplayPosition),
            properties.consentDisplayVariant === "banner"
              ? tw`w-full`
              : tw`max-w-md`,
          ]}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            {renderVariant()}
          </motion.div>
        </Container>
      )}
    </AnimatePresence>
  );
};
