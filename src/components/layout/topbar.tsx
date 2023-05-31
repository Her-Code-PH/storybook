import Image from 'next/image';
import Link from 'next/link';
import Icon from "../../assets/images/reads_logotype.png";

const Topbar = () => {
  return (
    <div className="flex h-[100px] w-full">
      <div className="px-10 py-5 w-full flex justify-between">
        {/* logo */}
        <div className="logo-container">
          <Image
            src={Icon}
            height={75}
            alt="reads_logotype"
            className='object-cover w-auto h-full'
            placeholder='empty' // {empty} | {blur}
            priority={false}
          />
        </div>
        <div className="menu-container flex">
          {/* left menu */}
          <ul className='flex flex-row items-center justify-center justify-items-center'>
            <li className='flex flex-col justify-center h-full uppercase px-5 first:pl-0'>
              <Link href="/">HOME</Link>
            </li>
            <li className='flex flex-col justify-center h-full uppercase px-5'>
              <Link href="/genres">GENRES</Link>
            </li>
            <li className='flex flex-col justify-center h-full uppercase px-5'>
              <Link href="/popular">POPULAR</Link>
            </li>
            <li className='flex flex-col justify-center h-full uppercase px-5 last:pr-0'>
              <Link href="/canvas">CANVAS</Link>
            </li>
          </ul>
          {/* right menu */}
          <div className='py-2 flex flex-row pl-5'>
            <button className='mr-1 py-2 rounded-full bg-white text-black w-[100px]'>PUBLISH</button>
            <button className='ml-1 py-2 rounded-full bg-white text-black w-[100px]'>LOGIN</button>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Topbar;
