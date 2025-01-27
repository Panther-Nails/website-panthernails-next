import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";

import { ExecuteCommand } from "services/APIService";
import { CookieDuration, setCookie } from "services/CookieService";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ControlHeadingText = tw.p`mt-4  md:text-left text-sm  lg:text-base font-medium leading-relaxed text-[#4668C5]`;

const Form = tw.form`mt-2 text-xs   lg:text-sm flex flex-col h-[100%] w-full mx-auto md:mx-0`;
const Input = styled.input((props) => [
  tw`mt-4 w-full first:mt-0 border-b-2 border-gray-400 py-2 lg:py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`,
  `&:hover {
    border-color: ${props.themeColor === "loyalty" ? "#69264F" : "#0067CC"};
   
  }`,
]);
const Textarea = styled(Input).attrs({ as: "textarea" })`
  ${tw` h-12 lg:h-24 `}
`;
const Wraper = tw.div`first:mt-0 pt-3  `;
const SubmitButton = styled.button((props) => [
  tw`inline-block mt-2 lg:mt-8 px-8 py-3 font-bold rounded text-gray-100 focus:shadow-outline focus:outline-none transition duration-300`,
  `
    background-color: ${props.themeColor === "loyalty" ? "#77255B" : "#1E90FF"};
    
    &:hover {
      background-color: ${
        props.themeColor === "loyalty" ? "#69264F" : "#0067CC"
      };
    }
  `,
]);
const ControlLabel = tw.span`pl-2 text-xs lg:text-sm`;
const Warnings = tw.p`text-red-800`;

const FormSubmitPopup = styled.div((props) => [
  tw`w-11/12 lg:w-1/2 h-1/2  rounded-xl bg-red-600 fixed top-0  -translate-x-4    lg:translate-x-1/2 translate-y-1/4  z-50 flex flex-col `,
]);

const FormSubmitPopupTop = styled.div((props) => [
  tw`w-full h-3/4  bg-[#BFBCCB] flex items-center rounded-t-xl justify-center `,
]);
const FormSubmitPopupText = styled.h1((props) => [
  tw`text-2xl lg:text-4xl font-black text-black text-center px-2  `,
]);

const FormSubmitPopupBottom = styled.div((props) => [
  tw`w-full h-1/4 bg-[#B399A2] flex items-center justify-center rounded-b-xl`,
]);
const PopupCloseBtn = styled.button((props) => [
  tw`rounded-full bg-[#784F41] text-white text-xl  px-3 py-2 text-center`,
]);

let gFormErrors = {};
let globalValid = true;

const gEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const gMobileRegex = /^[0-9+ ]{10,15}$/;
const gNameRegex = /^[A-Za-z\s]+$/;

const globalValidationFunction = (name, value, type) => {
  if (value?.length < 1) {
    gFormErrors[name] = "Please fill the information first.";

    globalValid = false;
  }

  if (value) {
    gFormErrors[name] = "";

    globalValid = true;
  } else {
    gFormErrors[name] = "Please fill the information first.";

    globalValid = false;
  }

  if (type === "text" && !gNameRegex.test(value) && value) {
    gFormErrors[name] = "Name must contain only letters and spaces.";

    globalValid = false;
  }

  if (
    type === "text" &&
    name === "VisitorName" &&
    value &&
    value.length < 2 &&
    gNameRegex.test(value)
  ) {
    gFormErrors[name] = "Your name is too short";

    globalValid = false;
  }
  if (
    type === "text" &&
    name === "VisitorName" &&
    value &&
    value.length > 30 &&
    gNameRegex.test(value)
  ) {
    gFormErrors[name] = "Your name is too long";

    globalValid = false;
  }

  if (type === "email" && value && !gEmailRegex.test(value)) {
    gFormErrors[name] = "Invalid email format.";

    globalValid = false;
  }

  if (type === "tel" && value && !gMobileRegex.test(value)) {
    gFormErrors[name] = "Invalid mobile number.";

    globalValid = false;
  }

  return globalValid;
};

const RadioButtonControl = ({
  radioError,
  setSelectedRadioOption,
  radioInput,
  radioExtraData,
}) => {
  const [answers, setAnswers] = useState({});
  const [inputValue, setinputValue] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    setError(gFormErrors);
  }, [inputValue, gFormErrors]);

  const handleChange = (name, value) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [name]: value }));
    setSelectedRadioOption((prevAnswers) => ({
      ...prevAnswers,
      [name]: value,
    }));
  };

  return (
    <>
      <ControlHeadingText>
        {radioExtraData.controlHeading && radioExtraData.controlHeading}
      </ControlHeadingText>
      {radioInput &&
        radioInput.map((option, optIndex) => (
          <div key={optIndex}>
            <label>
              <input
                type="radio"
                name={radioExtraData.name}
                value={option.showVal}
                onChange={() =>
                  handleChange(radioExtraData.name, option.showVal)
                }
              />
              <ControlLabel>{option.showVal}</ControlLabel>
            </label>
            {option.radioWithTextBox === "true" &&
              answers[radioExtraData.name] === option.showVal && (
                <>
                  <Input
                    type="text"
                    placeholder={option.placeholder}
                    onChange={(e) => {
                      setinputValue(e.target.value);
                      handleChange(option.name, e.target.value);
                    }}
                  />
                  {globalValidationFunction("radioText", inputValue, "text")}
                  {error ? <Warnings>{error.radioText}</Warnings> : <></>}
                </>
              )}
          </div>
        ))}
      {Object.keys(answers).length <= 0 ? (
        <Warnings>{radioError}</Warnings>
      ) : (
        <></>
      )}
    </>
  );
};

const MultiSelectDropdown = ({
  selectedValues,
  updateChosenValues,
  dropDownError,
  dropDownInput,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const options = dropDownInput;

  const handleCheckboxChange = (option) => {
    updateChosenValues((prev) => {
      if (prev.includes(option)) {
        return prev.filter((o) => o !== option);
      } else {
        return [...prev, option];
      }
    });
  };

  return (
    <div>
      <ControlHeadingText>Select product which we offer's</ControlHeadingText>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          cursor: "pointer",
          border: "1px solid #ccc",
          padding: "8px",
          borderRadius: "4px",
        }}
      >
        {selectedValues.length > 0 ? (
          selectedValues.join(", ")
        ) : (
          <ControlLabel>Select product</ControlLabel>
        )}
      </div>
      {isOpen && (
        <div
          style={{
            borderRadius: "4px",

            backgroundColor: "#fff",
          }}
        >
          {options.map((option) => (
            <div style={{}} key={option}>
              <input
                type="checkbox"
                checked={selectedValues.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              <ControlLabel>{option}</ControlLabel>
            </div>
          ))}
        </div>
      )}
      {selectedValues.length <= 0 ? (
        <Warnings>{dropDownError}</Warnings>
      ) : (
        <></>
      )}
    </div>
  );
};

const MultiSelectCheckbox = ({
  selectedOptions,
  setSelectedOptions,
  checkBoxError,
  checkBoxInput,
  checkBoxExtraData,
  setCheckBoxKey,
}) => {
  const [otherText, setOtherText] = useState("");
  const [error, setError] = useState();

  useEffect(() => {
    setError(gFormErrors);
  }, [otherText, gFormErrors]);

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prev) => {
      if (option === "Other") {
        if (prev.includes("Other")) {
          const updated = prev.filter((o) => o !== "Other" && o !== otherText);
          setOtherText("");
          return updated;
        } else {
          return otherText ? [...prev, otherText] : [...prev, "Other"];
        }
      } else {
        return prev.includes(option)
          ? prev.filter((o) => o !== option)
          : [...prev, option];
      }
    });
  };

  const handleOtherTextChange = (e) => {
    const newText = e.target.value;
    setOtherText(newText);

    setSelectedOptions((prev) => {
      const includesOther = prev.includes("Other");

      if (newText) {
        if (!includesOther) {
          return [...prev];
        } else {
          const updated = prev.filter((o) => o !== otherText);
          return [...updated, newText];
        }
      } else {
        return prev.filter((o) => o !== "Other" && o !== otherText);
      }
    });
  };

  const handleSelectAllChange = (event) => {
    const checked = event.target.checked;

    setSelectedOptions(checked ? [...checkBoxInput] : []);
  };

  const handleLabelClick = (option) => {
    handleCheckboxChange(option);
  };

  useEffect(() => {
    setCheckBoxKey({
      [checkBoxExtraData.name]: selectedOptions
        .join(",")
        .replace(",Select All", "")
        .replace("Other,", "")
        .replace(",Other", ""),
    });
  }, [selectedOptions, checkBoxExtraData.name, setCheckBoxKey]);

  const allChecked = checkBoxInput.every((option) =>
    selectedOptions.includes(option)
  );

  return (
    <>
      <ControlHeadingText>
        {checkBoxExtraData.controlHeading}
      </ControlHeadingText>

      {checkBoxInput.map((option, index) => (
        <div key={index}>
          {option.toLowerCase() === "select all" ? (
            <div>
              <input
                type="checkbox"
                checked={allChecked}
                onChange={handleSelectAllChange}
                id={`select-all-checkbox`} // Unique ID for the select all checkbox
              />
              <ControlLabel
                onClick={handleSelectAllChange} // Use the same handler to toggle
                htmlFor={`select-all-checkbox`}
                checked={!allChecked}
              >
                {option}
              </ControlLabel>
            </div>
          ) : (
            <div>
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => handleCheckboxChange(option)}
                id={`checkbox-${option}`} // Unique ID for each checkbox
              />
              <ControlLabel
                onClick={() => handleLabelClick(option)}
                htmlFor={`checkbox-${option}`} // Link label to checkbox
              >
                {option}
              </ControlLabel>
              {option === "Other" && selectedOptions.includes("Other") && (
                <>
                  <Input
                    type="text"
                    placeholder="Please specify"
                    value={otherText}
                    onChange={handleOtherTextChange}
                  />
                  {globalValidationFunction("radioText", otherText, "text")}
                  {error ? <Warnings>{error.radioText}</Warnings> : <></>}
                </>
              )}
            </div>
          )}
        </div>
      ))}
      {selectedOptions.length === 0 && <Warnings>{checkBoxError}</Warnings>}
    </>
  );
};

export default ({ properties, subheading = "Contact Us" }) => {
  const [formData, setFormData] = useState({});

  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [checkBoxError, setCheckBoxError] = useState("");
  const [dropDownError, setDropDownError] = useState("");
  const [radioError, setRadioError] = useState("");

  const [radioInputValidate, setRadioInputValidate] = useState(false);
  const [checkBoxInputValidate, setcheckBoxInputValidate] = useState();

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [selectedRadioOption, setSelectedRadioOption] = useState("");
  const [checkBoxKey, setCheckBoxKey] = useState();

  const [isPopupClose, setIsPopupClose] = useState(false);

  const resetForm = () => {
    setIsPopupClose(false);
    document.getElementById("form").reset();
    setStep(1);
  };

  const AfterSubmitPopup = () => {
    return (
      <>
        {isPopupClose && (
          <FormSubmitPopup>
            <FormSubmitPopupTop>
              <FormSubmitPopupText>
                Thank you for contact us our team contact you soon!
              </FormSubmitPopupText>
            </FormSubmitPopupTop>
            <FormSubmitPopupBottom>
              <PopupCloseBtn onClick={resetForm}>Close</PopupCloseBtn>
            </FormSubmitPopupBottom>
          </FormSubmitPopup>
        )}
      </>
    );
  };

  const handleInsertSiteVisitorAndEnquiry = (parameterData, next) => {
    const params = JSON.stringify(parameterData);

    ExecuteCommand({
      ActionName: "WSM.GMst_InsertSiteVisitorAndEnquiry",
      ParameterJSON: params,
    }).then((response) => {
      if (response.message === "Successfull") {
        if (next !== "FinalStep") {
          resetForm();

          notify();
          setIsPopupClose(true);
        }
      } else {
        alert(response.message);
      }
    });
  };

  const element = document.getElementById("PopupControl");

  const closePopupForm = () => {
    if (element) {
      element.style.display = "none";
      setCookie("Popupkey", properties.productEnquiryFor, CookieDuration.Day);
    }
  };

  const ShowFieldCount = properties.showFieldCount
    ? properties.showFieldCount
    : 3;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  let formErrors = {};
  let valid = true;

  const validationFunction = (input, value) => {
    if (
      input.type !== "checkbox" &&
      input.type !== "dropdown" &&
      input.type !== "radio"
    ) {
      if (value === undefined || value === "") {
        formErrors[input.name] = "Please fill the information first.";

        valid = false;
      }
    }
    if (input.type === "text" && !gNameRegex.test(value)) {
      formErrors[input.name] = "Name must contain only letters and spaces.";

      valid = false;
    }

    if (
      input.type === "text" &&
      input.name === "VisitorName" &&
      value &&
      value.length < 2 &&
      gNameRegex.test(value)
    ) {
      formErrors[input.name] = "Your name is too short";

      valid = false;
    }
    if (
      input.type === "text" &&
      input.name === "VisitorName" &&
      value &&
      value.length > 30 &&
      gNameRegex.test(value)
    ) {
      formErrors[input.name] = "Your name is too long";

      valid = false;
    }

    if (input.type === "email" && value && !gEmailRegex.test(value)) {
      formErrors[input.name] = "Invalid email format.";

      valid = false;
    }

    if (input.type === "tel" && value && !gMobileRegex.test(value)) {
      formErrors[input.name] = "Invalid mobile number.";

      valid = false;
    }

    controlValidation(input, value);
  };

  const controlValidation = (input, value) => {
    if (input.type === "checkbox") {
      if (selectedOptions?.length <= 0) {
        setCheckBoxError("Please select option");

        valid = false;
      }
    }
    if (input.type === "dropdown") {
      if (selectedProduct?.length <= 0) {
        setDropDownError("please select option");

        valid = false;
      }
    }
    if (input.type === "radio") {
      if (!selectedRadioOption[input.name]) {
        setRadioError("Please select an option");
        valid = false;
      }
    }
  };

  const validateStepOne = () => {
    for (let i = 0; i < Math.min(ShowFieldCount, inputs.length); i++) {
      const input = inputs[i];
      const value = formData[input.name];

      validationFunction(input, value);
    }

    setErrors(formErrors);

    return valid;
  };

  const validateStepTwo = () => {
    for (let i = ShowFieldCount; i < inputs.length; i++) {
      const input = inputs[i];
      const value = formData[input.name];

      validationFunction(input, value);
    }

    setErrors(formErrors);

    return valid;
  };

  const parameterJsonData = () => {
    const finalProduct = selectedProduct.join(",");

    const {
      CompanyName,
      ContactReference,
      MessageText,
      VisitorEmailID,
      VisitorMobileNo,
      VisitorName,
      ...remainFieldData
    } = formData;

    const data = {
      CompanyName,
      ContactReference,
      MessageText,
      VisitorEmailID,
      VisitorMobileNo,
      VisitorName,
      DescriptionJSON: {
        ...remainFieldData,
        ...checkBoxKey,
        ...selectedRadioOption,
      },
      ProductEnquiryFor: properties.productEnquiryFor
        ? properties.productEnquiryFor
        : finalProduct,
      RowsAffecting: "1",
    };
    return data;
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validateStepOne() && globalValid) {
      const next = "FinalStep";
      console.log("next", parameterJsonData());

      handleInsertSiteVisitorAndEnquiry(parameterJsonData(), next);
      setStep(2);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (step === 2 && validateStepTwo() && globalValid) {
      console.log("Form submitted:", parameterJsonData());
      handleInsertSiteVisitorAndEnquiry(parameterJsonData());
    } else if (
      inputs.length <= ShowFieldCount &&
      validateStepOne() &&
      globalValid
    ) {
      console.log("Form submitted:", parameterJsonData());
      handleInsertSiteVisitorAndEnquiry(parameterJsonData());
    }
  };

  var inputs = JSON.parse(properties.inputs);

  const inputControls = (label) => {
    if (label.type.toUpperCase() === "CHECKBOX") {
      return (
        <MultiSelectCheckbox
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
          checkBoxError={checkBoxError}
          checkBoxInput={label.selectValue}
          checkBoxExtraData={label}
          setCheckBoxKey={setCheckBoxKey}
        />
      );
    } else if (label.type.toUpperCase() === "RADIO") {
      return (
        <RadioButtonControl
          radioInput={label.selectValue}
          radioExtraData={label}
          setSelectedRadioOption={setSelectedRadioOption}
          selectedRadioOption={selectedRadioOption}
          radioError={radioError}
          setRadioError={setRadioError}
          radioInputValidate={radioInputValidate}
          setRadioInputValidate={setRadioInputValidate}
        />
      );
    } else if (label.type.toUpperCase() === "TEXTAREA") {
      return (
        <>
          <Textarea
            name={label.name}
            placeholder={label.placeholder}
            onChange={handleChange}
            themeColor={properties.productEnquiryFor}
          />
          {errors[label.name] && (
            <Warnings className="error">{errors[label.name]}</Warnings>
          )}
        </>
      );
    } else if (label.type.toUpperCase() === "DROPDOWN") {
      return (
        <MultiSelectDropdown
          selectedValues={selectedProduct} // Pass the selected values
          updateChosenValues={setSelectedProduct} // Pass the setter function
          dropDownError={dropDownError}
          dropDownInput={label.selectValue}
        />
      );
    } else {
      return (
        <>
          <Input
            className="inputbox"
            type={label.type}
            name={label.name}
            placeholder={label.placeholder}
            onChange={handleChange}
            themeColor={properties.productEnquiryFor}
          />
          {errors[label.name] && (
            <Warnings className="error">{errors[label.name]}</Warnings>
          )}
        </>
      );
    }
  };

  const notify = () => {
    resetForm();
    toast("Thank you for contact us our team contact you soon!", {
      onClose: () => {
        closePopupForm();
      },
    });
  };

  // console.log("two step form");

  return (
    <>
      <ToastContainer />
      <Form
        id="form"
        action={properties.formAction}
        method={properties.formMethod}
        onSubmit={handleSubmit}
      >
        {inputs.length <= ShowFieldCount ? (
          <>
            {inputs.map((label, index) => (
              <Wraper key={index}>{label && inputControls(label)}</Wraper>
            ))}
            <SubmitButton
              type="submit"
              themeColor={properties.productEnquiryFor}
            >
              Submit
            </SubmitButton>
          </>
        ) : (
          <>
            {step === 1 && (
              <>
                {inputs.slice(0, ShowFieldCount).map((label, index) => (
                  <Wraper key={index}>{label && inputControls(label)}</Wraper>
                ))}
                <SubmitButton
                  type="submit"
                  themeColor={properties.productEnquiryFor}
                  onClick={handleNext}
                >
                  Next
                </SubmitButton>
              </>
            )}

            {step === 2 && (
              <>
                {inputs.slice(ShowFieldCount).map((label, index) => (
                  <Wraper key={index + 3}>
                    {label && inputControls(label)}
                  </Wraper>
                ))}

                <SubmitButton
                  type="submit"
                  themeColor={properties.productEnquiryFor}
                >
                  Submit
                </SubmitButton>
              </>
            )}
          </>
        )}
      </Form>
      {/* 
      <AfterSubmitPopup /> */}
    </>
  );
};
