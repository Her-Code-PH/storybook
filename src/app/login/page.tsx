/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react';
import { useRouter } from 'next/navigation'
import { signIn } from '@/firebase/auth';
import ActionButton from '@/components/buttons/action-button';

const Login = () => {
  const router = useRouter()

  // const handleForm = async (event: any) => {
  //   event.preventDefault()
  //   let email = '',
  //     password = '';
  //   const { result, error } = await signIn(email, password);

  //   if (error) {
  //     return console.log(error)
  //   }
  //   // else successful
  //   return router.push("/dashboard/publish")
  // }

  const handleLoginWithGoogle = () => { }

  return (
    <div className="flex mt-10 w-[360px] min-h-[490px]">
      <div className='rounded border-[1px] border-slate-100'>
        <div className='h-full flex flex-col p-10 justify-between'>
          <div className='grid gap-2 justify-stretch'>
            <div className='text-lg font-semibold mb-2'>Login to Reads</div>
            <div className='w-full'>
              {/* <form onSubmit={handleForm} className="form grid">
                <label htmlFor="email">
                  <p className='text-xs'>Email</p>
                  <input 
                    className='rounded w-full' 
                    // onChange={(e) => setEmail(e.target.value)} 
                    required 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="example@mail.com" />
                </label>
                <label htmlFor="password">
                  <p className='text-xs'>Password</p>
                  <input
                    className='rounded w-full'
                    // onChange={(e) => setPassword(e.target.value)}
                    required 
                    type="password"
                    name="password" 
                    id="password"
                    placeholder="password" />
                </label>
                <ActionButton
                  onClick={handleForm}
                  buttonText='Login'
                  type='contained'
                />
              </form> */}
            </div>
            {/* input email */}
            {/* input password */}
            <div className='text-xs'>or</div>
            <ActionButton
              onClick={handleLoginWithGoogle}
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
