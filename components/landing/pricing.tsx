"use client";
import React from "react";
import { Element } from "react-scroll";
import SignUpBtn from "./signUpBtn";

type Props = {};

function Pricing({}: Props) {
  return (
    <>
      <Element name="pricing">
        <div className="flex flex-col items-center gap-[100px] pb-20 pt-32">
          <h1 className="text-lg font-bold">Lorem ipsum dolor sit amet.</h1>
          <div className="flex gap-20">
            <div className="relative flex h-[420px] w-[250px] flex-col items-center justify-between rounded-lg border-2 bg-white py-5">
              <div className="flex flex-col gap-10 text-sm font-medium">
                <div className="flex flex-col gap-3">
                  <h1>Template premium</h1>
                  <div className="relative flex items-center justify-center gap-1">
                    <p className="absolute -top-2 right-5 text-xs font-semibold opacity-50">
                      80$
                    </p>
                    <p className="text-lg font-bold">60$</p>
                  </div>
                </div>
                <ul>
                  <li>Lorem, ipsum.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum.</li>
                </ul>
              </div>
              <SignUpBtn />
            </div>
            <div className="relative flex h-[420px] w-[250px] items-end justify-center rounded-lg border-2 border-brand bg-white py-5">
              <p className="absolute -top-12 rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white">
                Best value
              </p>
              <div className="flex h-full flex-col items-center justify-between">
                <div className="flex flex-col gap-10 text-sm font-medium">
                  <div className="flex flex-col gap-3">
                    <h1>Template premium</h1>
                    <div className="relative flex items-center justify-center gap-1">
                      <p className="absolute -top-2 right-5 text-xs font-semibold opacity-50">
                        199$
                      </p>
                      <p className="text-lg font-bold">100$</p>
                    </div>
                  </div>
                  <ul>
                    <li>Lorem, ipsum.</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem, ipsum.</li>
                  </ul>
                </div>
                <SignUpBtn />
              </div>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
}

export default Pricing;
