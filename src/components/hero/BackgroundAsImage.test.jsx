import { fireEvent, render, waitFor } from "@testing-library/react";
import React from "react";
import BackgroundAsImage, { PrimaryAction } from "./BackgroundAsImage";
import { screen } from "@testing-library/dom";

const properties = {
  backgroundImageUrl:
    "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600",
  buttonText: "Book a Demo",
  buttonUrl:
    "https://calendly.com/contract-labour-management/demo?back=1&month=2024-05",
  heading: "Transform Your Workforce Management with Panther Nails ONE APP",
  notification: "Revolutionizing HRMS for Contractual & Distributed Workforce.",
};

const renderComponent = () => <BackgroundAsImage properties={properties} />;

const componentToBeInTheDocument = (componentName) => {
  const heading = document.getElementById("heading");
  const headingval = heading.innerHTML;

  expect(headingval).toBeInTheDocument;
};

describe("test the backgroundAsImage", () => {
  it("should present heading", () => {
    render(renderComponent());
    const heading = document.getElementById("heading");
    const headingval = heading.innerHTML;

    expect(headingval).toBeInTheDocument;
  });

  it("should present notification", () => {
    render(renderComponent());
    const notification = document.getElementById("notification");
    const notificationval = notification.innerHTML;
    expect(notificationval).toBeInTheDocument;
  });

  it("should present button", () => {
    render(renderComponent());
    const herobtn = screen.getByRole("button", { name: /Book a Demo/i });

    expect(herobtn.value).toBeInTheDocument;
  });

  it("should after button click window.open is call", async () => {
    const mockClickHandler = jest.fn();
    window.open = mockClickHandler;
    render(renderComponent());

    const herobtn = screen.getByRole("button", { name: /Book a Demo/i });
    fireEvent.click(herobtn);

    expect(mockClickHandler).toHaveBeenCalledTimes(1);
    expect(mockClickHandler).toHaveBeenCalledWith(
      "https://calendly.com/contract-labour-management/demo?back=1&month=2024-05",
      "_blank"
    );
  });
});
