import { render } from "@testing-library/react";

// Componenents
import SalaryCard from "./SalaryCard";

//Mocks
import { mockSalaryData } from "@/mocks";

describe("SalaryCard Testing", () => {
  it("should match snapshot", () => {
    const component = render(<SalaryCard salaryData={mockSalaryData[0]} />);
    expect(component).toMatchSnapshot();
  });
});
