import Features from "@/components/landing/features";
import Hero from "@/components/landing/hero";
import NavBar from "@/components/landing/navBar";
import Pricing from "@/components/landing/pricing";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <>
      <div>
        <div className="fixed z-50 w-full px-5 pt-5 md:px-96">
          <NavBar />
        </div>
        <Hero />
        <Features />
        <Pricing />
      </div>
    </>
  );
}

export default page;
