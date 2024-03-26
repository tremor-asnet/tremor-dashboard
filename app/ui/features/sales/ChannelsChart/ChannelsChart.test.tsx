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

  it("Should match snapshot", () => {
    const { container } = render(
      <ChannelsChart title="Channels" channelChartData={CHANNELS_CHART_DATA} />,
    );
    expect(container).toMatchSnapshot();
  });

  it("Should show no data if data is empty", () => {
    const mockNoData = {
      sale_total: 0,
      sale_social_media: 0,
      channels: [],
    };

    const { getByText } = render(
      <ChannelsChart title="Channels" channelChartData={mockNoData} />,
    );
    expect(getByText("No data")).toBeInTheDocument;
  });
});
