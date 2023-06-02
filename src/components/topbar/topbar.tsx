'use client'
import Image from 'next/image';
import Link from 'next/link';
import Icon from "../../assets/images/reads_logotype.png";
import ActionButton from '../action-button/action-button';

const Topbar = () => {
  return (
    <div className="flex h-[100px] w-full bg-gray-50 sticky top-0">
      {/* Desktop Topbar */}
      <div className="md:px-10 md:py-5 xs:px-2 xs:py-2 w-full flex justify-between">
        {/* logo */}
        <div className="logo-container">
          <Image
            src={Icon}
            alt="reads_logotype"
            className='object-cover w-auto h-full transition hover:-translate-y-1 hover:scale-100 cursor-pointer max-h-16'
            placeholder='empty' // {empty} | {blur}
            priority={false}
          />
        </div>
        <div className="menu-container flex md:flex sm:hidden xs:hidden">
          {/* left menu */}
          <div className='flex flex-row items-center justify-center justify-items-center'>
            <div className='text-[#4B8078] flex flex-col justify-center h-full uppercase px-2 first:pl-0'>
              <Link href="/">HOME</Link>
            </div>
            <div className='text-[#4B8078] flex flex-col justify-center h-full uppercase px-2'>
              <Link href="/genres">GENRES</Link>
            </div>
            <div className='text-[#4B8078] flex flex-col justify-center h-full uppercase px-2'>
              <Link href="/popular">POPULAR</Link>
            </div>
            <div className='text-[#4B8078] flex flex-col justify-center h-full uppercase px-2 last:pr-0'>
              <Link href="/canvas">CANVAS</Link>
            </div>
          </div>
          {/* right menu */}
          <div className='py-2 flex flex-row pl-2'>
            <ActionButton buttonText='PUBLISH' type="outlined" href='/dashboard/publish' />
            <ActionButton buttonText='LOGIN' type="contained" href='/login' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
