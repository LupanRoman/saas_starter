"use client";
import React from "react";
import { Link } from "react-scroll";

type Props = {};

function NavBar({}: Props) {
  return (
    <>
      <div className="flex h-[10vh] items-center justify-between rounded-full bg-white px-10 drop-shadow-lg">
        <Link
          to="heroPage"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={0}
          duration={700}
        >
          <h1 className="cursor-pointer text-lg font-bold">Saas Name</h1>
        </Link>
        <div className="flex items-center gap-4 text-sm font-medium">
          <Link
            to="features"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-15}
            duration={700}
          >
            <p>Features</p>
          </Link>
          <Link
            to="pricing"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={50}
            duration={700}
          >
            <p>Pricing</p>
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <a href={"/auth/signUp"}>
            <button className="rounded-md bg-brand px-4 py-1 text-sm font-medium text-white">
              Sign up
            </button>
          </a>
          <a href={"/auth/signIn"}>
            <button className="text-sm font-medium opacity-50">Sign in</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default NavBar;
