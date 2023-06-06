// 'use client'
import Image from 'next/image';
import Link from 'next/link';
import Icon from "../../assets/images/icons/reads_ico.svg";
import HrefButton from '../buttons';

type User = {
  name: string;
};

interface TopbarProps {
  user?: User
  onLogin?: () => void;
  onLogout?: () => void;
}

const Topbar = ({
  user,
  onLogin,
  onLogout
}: TopbarProps) => {
  return (
    <>
      {/* Desktop */}
      <div className="flex justify-between px-10 py-5 items-center border-[1px] border-slate-100">
        <div className='h-[32px] flex items-center'>
          <Image
            src={Icon}
            alt='reads_logotype'
            className='h-full w-auto mr-10'
          />
          <div className='lg:flex hidden'>
            <HrefButton
              href='/'
              buttonText='HOME'
              type='text'
            />
            <HrefButton
              href='/'
              buttonText='GENRES'
              type='text'
            />
            <HrefButton
              href='/'
              buttonText='POPULAR'
              type='text'
            />
          </div>
        </div>
        <div className='items-center lg:flex hidden'>
          <HrefButton
            href='/login'
            buttonText='LOGIN'
            type='outlined'
          />
        </div>
        <div className='lg:hidden flex'>

        </div>
      </div>
    </>
  );
}

export default Topbar;
