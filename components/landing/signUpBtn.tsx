import Link from "next/link";
import React from "react";

type Props = {};

function SignUpBtn({}: Props) {
  return (
    <>
      <div>
        <Link href={"/auth/signUp"}>
          <button className="rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white">
            Sign up
          </button>
        </Link>
      </div>
    </>
  );
}

export default SignUpBtn;
