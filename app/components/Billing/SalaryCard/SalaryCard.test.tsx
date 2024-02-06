import { render } from "@testing-library/react";

// Componenents
import SalaryCard from "./SalaryCard";

//Mocks
import { mockSalaryData } from "@/mocks";

describe("SalaryCard Testing", () => {
  it("should match snapshot", () => {
    const component = render(
      <SalaryCard
        type={mockSalaryData[0].type}
        value={mockSalaryData[0].value}
      />,
    );
    expect(component).toMatchSnapshot();
  });
});
