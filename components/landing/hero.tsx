"use client";
import React from "react";
import { Element } from "react-scroll";

type Props = {};

function Hero({}: Props) {
  return (
    <>
      <Element name="heroPage">
        <div className="landing-hero flex h-[100svh] px-[40px] pb-[100px] pt-32 text-white">
          <div className="flex w-1/2 flex-col justify-between pl-20 pt-16">
            <div className="flex flex-col items-start gap-10">
              <h1 className="text-5xl font-black">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                fuga!
              </h1>
              <p className="w-1/2 text-sm font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                quidem recusandae sit? Nam, cum itaque.
              </p>
            </div>
            <div className="flex w-full justify-center">
              <button className="w-fit rounded-[10px] bg-brand px-5 py-2 text-lg font-bold">
                Sign up now
              </button>
            </div>
          </div>
          <div className="hidden w-1/2 items-center justify-center md:flex">
            <div className="flex h-[400px] w-[300px] items-center justify-center rounded-lg bg-gray-500">
              <p className="text-sm font-medium">Showcase</p>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
}

export default Hero;
