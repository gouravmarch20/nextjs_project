"use client";
import React, { useState } from "react";
import UseEffectP from "@/components_pgW/1_react_learning/components/UseEffectProto";
import CallbackMemo1 from "@/components_pgW/1_react_learning/components/CallbackMemo";
import UseMemoProto from "@/components_pgW/1_react_learning/components/UseMemoProto";
import UseForwardRefDemo from "@/components_pgW/1_react_learning/components/UseForwardRefDemo";

const Hooks = () => {
  return (
    <div>
      {/* <UseEffectP /> */}
      {/* <CallbackMemo1 /> */}
      {/* <UseMemoProto /> */}
      <UseForwardRefDemo/>
    </div>
  );
};

export default Hooks;
