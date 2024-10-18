"use client";
import React from "react";
import { Element } from "react-scroll";

type Props = {};

function Features({}: Props) {
  return (
    <>
      <Element name="features">
        <div className="grid grid-cols-3 items-center justify-center gap-10 gap-y-[50px] px-[150px]">
          {/* <div className="col-span-3 flex w-full flex-col items-center justify-between md:flex-row"> */}
          <>
            <div className="col-start-1 col-end-3 h-[300px] w-full rounded-lg bg-white"></div>
            <div className="">
              <h1 className="text-lg font-bold">Title of the feature</h1>
              <p className="text-sm font-medium">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
                tempora, minus porro doloribus nesciunt blanditiis.
              </p>
            </div>
          </>
          {/* </div> */}
          <>
            <div className="">
              <h1 className="text-lg font-bold">Title of the feature</h1>
              <p className="text-sm font-medium">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
                tempora, minus porro doloribus nesciunt blanditiis.
              </p>
            </div>
            <div className="col-start-2 col-end-4 h-[300px] w-full rounded-lg bg-white"></div>
          </>
          <>
            <div className="col-start-1 col-end-3 h-[300px] w-full rounded-lg bg-white"></div>
            <div className="">
              <h1 className="text-lg font-bold">Title of the feature</h1>
              <p className="text-sm font-medium">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
                tempora, minus porro doloribus nesciunt blanditiis.
              </p>
            </div>
          </>
          <>
            <div className="">
              <h1 className="text-lg font-bold">Title of the feature</h1>
              <p className="text-sm font-medium">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
                tempora, minus porro doloribus nesciunt blanditiis.
              </p>
            </div>
            <div className="col-start-2 col-end-4 h-[300px] w-full rounded-lg bg-white"></div>
          </>
        </div>
      </Element>
    </>
  );
}

export default Features;
