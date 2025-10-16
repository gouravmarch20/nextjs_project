"use client";
import React from "react";
import { Tabs } from "./TabCompound";
const CompoundPatter = () => {
  return (
    <Tabs defaultValue="tab1">
      <Tabs.List>
        <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="tab1">
        <p>This is content for Tab 1</p>
      </Tabs.Content>
      <Tabs.Content value="tab2">
        <p>This is content for Tab 2</p>
      </Tabs.Content>
    </Tabs>
  );
};

export default CompoundPatter;
