"use client";
import React from "react";
import { AppProgressBar } from "next-nprogress-bar";

const ProgressBar = () => {
  return (
    <AppProgressBar
      height="2px"
      color="#22c55e"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
};

export default ProgressBar;
