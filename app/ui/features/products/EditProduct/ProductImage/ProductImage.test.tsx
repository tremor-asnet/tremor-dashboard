import { fireEvent, render } from "@testing-library/react";

// Components
import ProductImage from "./ProductImage";

const onRemoveImageMock = jest.fn();
const onUploadMock = jest.fn();

describe("ProductImage component", () => {
  it("should render snapshot correctly", () => {
    const component = render(
      <ProductImage
        name="Minimal Bar Stool 3"
        desc="Description"
        image="https://i.ibb.co/PGcBzMv/a-high-detail-shot-of-a-cat-we.png"
        disabled={false}
        isUpload={false}
        onRemoveImage={onRemoveImageMock}
        onUpload={onUploadMock}
      />,
    );

    expect(component).toMatchSnapshot();
  });

  it("renders loading indicator when isUpload is true", () => {
    const { queryAllByText } = render(
      <ProductImage
        name="Minimal Bar Stool 3"
        desc="Description"
        image="https://i.ibb.co/PGcBzMv/a-high-detail-shot-of-a-cat-we.png"
        isUpload={true}
        onRemoveImage={onRemoveImageMock}
        onUpload={onUploadMock}
      />,
    );

    const loadingTexts = queryAllByText("Loading...");

    expect(loadingTexts.length).toBeGreaterThan(0);
  });

  it("renders custom image when isUpload is false", () => {
    const { queryByAltText } = render(
      <ProductImage
        name="Minimal Bar Stool 3"
        desc=""
        image="https://i.ibb.co/PGcBzMv/a-high-detail-shot-of-a-cat-we.png"
        isUpload={false}
        onRemoveImage={onRemoveImageMock}
        onUpload={onUploadMock}
      />,
    );

    expect(queryByAltText("Minimal Bar Stool 3")).not.toBeNull();
  });

  it("calls onRemoveImage function when remove button is clicked", () => {
    const { getByText } = render(
      <ProductImage
        name="Minimal Bar Stool 3"
        desc="Description"
        image="https://i.ibb.co/PGcBzMv/a-high-detail-shot-of-a-cat-we.png"
        onRemoveImage={onRemoveImageMock}
        onUpload={onUploadMock}
      />,
    );

    const removeButton = getByText("Remove");
    fireEvent.click(removeButton);

    expect(onRemoveImageMock).toHaveBeenCalledTimes(1);
  });

  it("calls onUpload with the correct file", () => {
    // Create a PNG file object
    const file = new File(["test image"], "test.png", { type: "image/png" });

    const { getByLabelText } = render(
      <ProductImage
        name="Minimal Bar Stool 3"
        desc="Description"
        image="https://i.ibb.co/PGcBzMv/a-high-detail-shot-of-a-cat-we.png"
        isUpload={false}
        onRemoveImage={onRemoveImageMock}
        onUpload={onUploadMock}
      />,
    );

    const inputElement = getByLabelText("Edit");

    // Simulate a change event with the file
    fireEvent.change(inputElement, { target: { files: [file] } });

    expect(onUploadMock).toHaveBeenCalledWith(file);
  });
});
