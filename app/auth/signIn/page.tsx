import Link from 'next/link';
import Image from 'next/image';
import googleIcon from '@/public/googleIcon.png';
import { signInAction, signInWithGoogle } from '@/services/authService';
import { ChevronLeft } from 'lucide-react';

export default function SignIn({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return (
    <>
      <Link
        href={'/'}
        className="flex absolute left-5 top-5 z-50 text-white
      "
      >
        <ChevronLeft size={30} />
      </Link>
      <div className="flex h-[100svh] flex-col items-center justify-center text-white bg-gradient-to-b from-white/10 to-white/5 drop-shadow-2xl md:w-2/5 md:rounded-r-2xl">
        <form action={signInWithGoogle}>
          <button className="text-textColor flex items-center gap-6 rounded-lg bg-white/10 px-[32px] py-[16px] text-xl font-bold drop-shadow-lg">
            <Image
              alt="log of google"
              width={30}
              height={30}
              src={googleIcon}
            />
            Continue with Google
          </button>
        </form>
        <p className="text-textColor pb-[40px] pt-[20px] font-semibold">or</p>
        <form
          autoComplete="off"
          action={signInAction}
          className="flex flex-col gap-3"
        >
          <input
            className="active:bg-mainBG rounded-lg bg-white/10 py-[12px] indent-2 text-base font-semibold outline-none drop-shadow-lg"
            type="email"
            placeholder="Email address"
            name="email"
            required
          />
          <input
            className="active:bg-mainBG rounded-lg bg-white/10 py-[12px] indent-2 text-base font-semibold outline-none drop-shadow-lg"
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <div className="controls flex flex-col gap-2 pt-[100px]">
            <button className="text-textColor rounded-lg bg-brand py-[10px] text-xl font-bold text-white">
              Sign in
            </button>
            <Link href={'/auth/signUp'}>
              <button className="text-textColor text-base">
                Don't have an account yet?
                <span className="font-bold"> Sign up</span>
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
