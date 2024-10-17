import NavBar from '@/components/landing/navBar';
import React from 'react';

type Props = {};

function page({}: Props) {
  return (
    <>
      <div>
        <div className="fixed z-50 w-full px-5 pt-5 md:px-96">
          <NavBar />
        </div>
      </div>
    </>
  );
}

export default page;
