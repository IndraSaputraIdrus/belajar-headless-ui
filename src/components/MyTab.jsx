import { Tab } from "@headlessui/react";

const tabs = [
  { tabName: "Tab 1", tabContent: "Content 1" },
  { tabName: "Tab 2", tabContent: "Content 2" },
  { tabName: "Tab 3", tabContent: "Content 3" },
];

export default function MyTab() {
  return (
    <div className="my-4 max-w-md">
      <h1>Tab</h1>
      <Tab.Group>
        <Tab.List className="flex justify-between gap-2 p-2 rounded-xl bg-gradient-to-tr from-blue-800 to-blue-300 drop-shadow-lg">
          {tabs.map((tab) => (
            <Tab className="bg-gradient-to-r from-red-500 to-orange-500 text-white drop-shadow-lg w-1/3 py-3 rounded-lg outline-none focus:ring-2 focus:ring-white">
              {tab.tabName}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="text-white bg-gradient-to-br from-indigo-600 to-indigo-300 h-56 mt-2 rounded-xl p-4 drop-shadow-lg">
          {tabs.map((tab) => (
            <Tab.Panel>{tab.tabContent}</Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
