// Components
import { Tab, TabGroup, TabList, Text } from "@tremor/react";

// Types
import { ITab } from "@/types";
interface TabsProps {
  tabs: ITab[];
}

const Tabs = ({ tabs }: TabsProps): JSX.Element => {
  const renderTabs = (): JSX.Element[] => {
    return tabs.map(tab => (
      <>
        <Tab className="ui-selected:border-0 ui-selected:bg-tremor-background py-[5px] hover:border-0 hover:outline-0 shadow-none ui-selected:shadow-md rounded-lg w-full md:w-auto max-w-full items-center justify-center">
          <div
            key={tab.name}
            className="flex items-center justify-center text-tremor-content-title text-base px-6">
            <span className="text-xl pr-2">{tab.icon}</span>
            <span>{tab.name}</span>
          </div>
        </Tab>
      </>
    ));
  };

  return (
    <TabGroup className="w-auto">
      <TabList className="w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center bg-[rgb(248,249,250)] p-1 rounded-xl border-0">
        {renderTabs()}
      </TabList>
    </TabGroup>
  );
};

export default Tabs;
