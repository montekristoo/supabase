import React from "react";
import { Banner } from "./Banner";
import { FirstSection } from "./FirstSection";
import { SecondSection } from "./SecondSection";
import { ThirdSection } from "./ThirdSection";

export const Main = () => {
  return (
    <>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Banner />
    </>
  );
};
