import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import illustration from "images/login-illustration.svg";
import logo from "images/logo.svg";
import googleIconImageSrc from "images/google-icon.png";
import twitterIconImageSrc from "images/twitter-icon.png";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";

import { Fragment } from "react";

const Container = tw(
  ContainerBase
)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h4`text-lg xl:text-xl  font-bold text-center`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

const SocialButtonsContainer = tw.div`flex flex-col items-center`;
const SocialButton = styled.a`
  ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`}
  .iconContainer {
    ${tw`bg-white p-2 rounded-full`}
  }
  .icon {
    ${tw`w-4`}
  }
  .text {
    ${tw`ml-4`}
  }
`;

const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${(props) => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-sm bg-contain bg-center bg-no-repeat`}
`;

const DropdownButton = tw.button`justify-between inline-flex w-full px-8 py-4  gap-x-1 rounded-lg font-medium bg-gray-100 border border-gray-200 text-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const DropdownContainer = tw.div`relative z-10 mt-2  w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`;
const DropdownItems = tw.div`py-1`;
const DropdownItem = tw.a`text-gray-700 block px-4 py-2 text-sm`;

export default ({
  logoLinkUrl = "#",
  illustrationImageSrc = illustration,
  headingText = "To authenticate , Please provide mobile number",
  socialButtons = [
    {
      iconImageSrc: googleIconImageSrc,
      text: "Sign In With Google",
      url: "https://google.com",
    },
    {
      iconImageSrc: twitterIconImageSrc,
      text: "Sign In With Twitter",
      url: "https://twitter.com",
    },
  ],
  submitButtonText = "Sent OTP",
  SubmitButtonIcon = LoginIcon,
  forgotPasswordUrl = "#",
  signupUrl = "#",
}) => {
  const [disabled, setDisbled] = useState(false);
  const [userInput, setUserInput] = React.useState({ MobileNoOREmailID: "" });
  const maxLength = 10;
  var items = [
    { text: "home", href: "/" },
    { text: "home", href: "/" },
    { text: "home", href: "/" },
    { text: "home", href: "/" },
  ];

  const SendOTPButton = () => {
    console.log("In Sent OTP", disabled);
    if (disabled === false) {
      console.log("In IF", disabled);
      return (
        <SubmitButton type="submit" onClick={onSendOTP}>
          <SubmitButtonIcon className="icon" />
          <span className="text">{submitButtonText}</span>
        </SubmitButton>
      );
    } else {
      console.log("In Else", disabled);
      return (
        <Input
          id="OTP"
          type="text"
          placeholder="Enter OTP"
          inputMode="numeric"
        />
      );
    }
  };

  const onSendOTP = () => {
    if (userInput.MobileNoOREmailID === "") {
      alert("Please enter mobile no.");
      return;
    }

    // var telephoneNoRegex = countryJSONDetails[0].TelephoneNumberValidationRegex;
    // telephoneNoRegex = telephoneNoRegex.replace(/\\\\/g, "\\");
    // var pattern = new RegExp(telephoneNoRegex);
    // if (telephoneNoRegex != null || telephoneNoRegex != "") {
    //   if (!pattern.test(userInput.MobileNoOREmailID)) {
    //     infoNotify("Mobile number is not valid");
    //     return;
    //   }
    // }
    //setIsMobileOREmailIDEnabled(true);
    //insertOTP();
  };

  function onMobileNoChange(event, newValue) {
    console.log("In On Change");
    if (event.target.value == "") {
      window.location.reload(); //if click on send otp and then empty the field
      return;
    }
    var sanitizedValue = newValue.replace(/[^0-9]/g, ""); //In UC Browser inputmode="numeric not working" so added this
    event.target.value = sanitizedValue;

    setUserInput({ ...userInput, [event.target.id]: event.target.value });
  }

  return (
    <AnimationRevealPage>
      <Container></Container>
    </AnimationRevealPage>
  );
};
