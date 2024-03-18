import { render } from "@testing-library/react";

// Components
import ChannelsChart from "./ChannelsChart";

// Mocks
import { CHANNELS_CHART_DATA } from "@/mocks";

describe("Testing ChannelsChart component", () => {
  window.ResizeObserver =
    window.ResizeObserver ||
    jest.fn().mockImplementation(() => ({
      disconnect: jest.fn(),
      observe: jest.fn(),
      unobserve: jest.fn(),
    }));

  it("should render correctly title with display ChannelsChart", () => {
    const { getByText } = render(
      <ChannelsChart title="Channels" channelChartData={CHANNELS_CHART_DATA} />,
    );

    const title = getByText("Channels");

    expect(title).toBeTruthy;
  });

  it("Should match snapshot", () => {
    const { container } = render(
      <ChannelsChart title="Channels" channelChartData={CHANNELS_CHART_DATA} />,
    );
    expect(container).toMatchSnapshot();
  });
});
