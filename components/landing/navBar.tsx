import React from 'react';

type Props = {};

function NavBar({}: Props) {
  return (
    <>
      <div className="flex items-center text-white justify-between px-10 bg-white/10 h-[10vh] rounded-full">
        <h1 className="text-lg font-bold ">Saas Name</h1>
        <div className="flex items-center gap-4 text-sm font-medium">
          <p>Features</p>
          <p>Pricing</p>
        </div>
        <div className="flex items-center gap-5">
          <button className="bg-brand px-4 py-1 rounded-lg text-sm font-medium">
            Sign up
          </button>
          <button className="text-sm font-medium opacity-50">Sign in</button>
        </div>
      </div>
    </>
  );
}

export default NavBar;
