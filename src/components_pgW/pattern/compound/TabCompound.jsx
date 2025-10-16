import React, { createContext, useContext, useState } from "react";

// Create Context for Tabs
const TabsContext = createContext();

export function Tabs({ children, defaultValue }) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="w-full">{children}</div>
    </TabsContext.Provider>
  );
}

// Sub-components
Tabs.List = function TabsList({ children }) {
  return (
    <div className="flex space-x-2 border-b border-gray-300">{children}</div>
  );
};

Tabs.Trigger = function TabsTrigger({ value, children }) {
  const { activeTab, setActiveTab } = useContext(TabsContext);

  const baseClasses =
    "px-4 py-2 text-sm font-medium rounded-t-md focus:outline-none transition-colors";
  const activeClasses = "bg-white border-b-2 border-blue-500 text-blue-600";
  const inactiveClasses =
    "text-gray-500 hover:text-gray-700 hover:border-gray-300";

  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`${baseClasses} ${
        activeTab === value ? activeClasses : inactiveClasses
      }`}
    >
      {children}
    </button>
  );
};

Tabs.Content = function TabsContent({ value, children }) {
  const { activeTab } = useContext(TabsContext);

  if (activeTab !== value) return null;

  return (
    <div className="p-4 bg-white border border-gray-300 rounded-b-md">
      {children}
    </div>
  );
};
