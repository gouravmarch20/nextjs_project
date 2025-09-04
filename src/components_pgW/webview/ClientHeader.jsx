"use client";
import React, { Suspense, lazy } from "react";

const Header = lazy(() => import("./Header"));

const ClientHeader = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading header...</p>}>
        <Header />
      </Suspense>
    </div>
  );
};

export default ClientHeader;