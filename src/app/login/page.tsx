/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react';
import { useRouter } from 'next/navigation'
import { googleSignIn, appleSignIn } from '@/firebase/auth';
import ActionButton from '@/components/buttons/action-button';
import { getAuth } from 'firebase/auth';
import { app } from '@/firebase/app';

const auth = getAuth(app);

const Login = () => {
  const router = useRouter()
  const isLoggedIn = auth.currentUser

  const handleLoginWithGoogle = async () => {
    const apiResponse = await googleSignIn()
    const {
      result,
      error,
    } = apiResponse

    if (!error && result) {
      localStorage.setItem('user', JSON.stringify(result?.user))
      router.push("/dashboard/publish")
    }
  }

  const handleLoginWithApple = async () => {
    const apiResponse = await appleSignIn();
    const {
      result,
      error,
    } = apiResponse

    if (!error && result) {
      localStorage.setItem('user', JSON.stringify(result?.user))
      router.push("/dashboard/publish")
    }
  }

  return !isLoggedIn && (
    <div className="flex w-[360px] min-h-[490px]">
      <div className='rounded border-[1px] border-slate-100'>
        <div className='h-full flex flex-col p-10 justify-between text-center'>
          <div className='grid gap-2 justify-stretch'>
            <div className='text-2xl font-bold text-[#4B8078] mb-2'>Login to Reads</div>
            <div className='w-full'>
            </div>
            <ActionButton
              onClick={handleLoginWithApple}
              buttonText='Continue with Apple'
              type='contained'
            />
            <ActionButton
              onClick={handleLoginWithGoogle}
              buttonText='Continue with Google'
              type='contained'
            />
          </div>
          <div className='footer'>
            <div className='text-xs'>By continuing, you agree to Reads's Terms of Service and acknowledge you've read our Privacy Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
