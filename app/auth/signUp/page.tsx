import { signInWithGoogle, signUpAction } from '@/services/authService';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import googleIcon from '@/public/googleIcon.png';
import { ChevronLeft } from 'lucide-react';

type Props = {};

function SignUp({ searchParams }: { searchParams: { message: string } }) {
  return (
    <>
      <Link href={'/'} className="flex absolute left-5 top-5 z-50 text-white">
        <ChevronLeft size={30} />
      </Link>
      <div className="flex h-[100svh] flex-col items-center justify-center bg-gradient-to-b from-white/10 to-white/5 md:w-2/5 md:rounded-r-2xl text-white">
        <form action={signInWithGoogle}>
          <button className="flex items-center gap-6 rounded-lg bg-white/10 px-[32px] py-[16px] text-xl font-bold ">
            <Image
              alt="logo of google"
              width={30}
              height={30}
              src={googleIcon}
            />
            Continue with Google
          </button>
        </form>
        <p className="pb-[40px] pt-[20px] font-semibold">or</p>
        <form
          autoComplete="off"
          action={signUpAction}
          className="flex flex-col gap-3"
        >
          <input
            className="active:bg-mainBG rounded-lg bg-white/10 py-[12px] indent-2 text-base font-semibold outline-none "
            type="email"
            placeholder="Email address"
            name="email"
            required
          />
          <input
            className="active:bg-mainBG rounded-lg bg-white/10 py-[12px] indent-2 text-base font-semibold outline-none "
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <div className="controls flex flex-col gap-2 pt-[100px]">
            <button className="rounded-lg bg-brand py-[10px] text-xl font-bold text-white">
              Sign up
            </button>
            <Link href={'/auth/signIn'}>
              <button className="text-textColor text-base">
                Already have an account ?
                <span className="font-bold"> Sign in</span>
              </button>
            </Link>
          </div>
          {searchParams?.message && (
            <p className="bg-3BG/20 text-textColor/50 mt-4 p-4 text-center">
              {searchParams.message}
            </p>
          )}
        </form>
      </div>
    </>
  );
}

export default SignUp;
