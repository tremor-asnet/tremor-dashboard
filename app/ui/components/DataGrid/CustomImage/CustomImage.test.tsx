import { render, fireEvent } from "@testing-library/react";
import CustomImage from "./CustomImage";
import React from "react";

// Mock next/image component
jest.mock("next/image", () => {
  return jest.fn(props => {
    return <img src={props.src} alt={props.alt} onError={props.onError} />;
  });
});

// Mock useState
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe("CustomImage Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Renders with provided props", () => {
    const props = {
      className: "custom-class",
      src: "/images/image_square.jpg",
      width: 100,
      height: 100,
      alt: "Test Alt",
    };
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockReturnValue([false, jest.fn()]);
    const { getByAltText } = render(<CustomImage {...props} />);
    const image = getByAltText(props.alt);
    expect(image.getAttribute("src")).toEqual(props.src);
  });

  it("Renders with fallback source on error", () => {
    const props = {
      src: "/images/no_image_square.jpg",
      width: 100,
      height: 100,
      alt: "Test Alt",
    };
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockReturnValue([true, jest.fn()]);
    const { getByAltText } = render(<CustomImage {...props} />);
    const image = getByAltText("No Image");
    expect(image.getAttribute("src")).toEqual(props.src);
  });

  it("Sets fallback source on error", () => {
    const props = {
      src: "/images/image_square.jpg",
      width: 100,
      height: 100,
      alt: "Test Alt",
    };
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockReturnValue([false, setState]);

    const { getByAltText } = render(<CustomImage {...props} />);
    const image = getByAltText(props.alt);
    fireEvent.error(image);

    expect(setState).toHaveBeenCalledWith(true);
  });
});
