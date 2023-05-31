import Image from 'next/image';
import Link from 'next/link';
import Icon from "../../assets/images/reads_logotype.png"

const Topbar = () => {
  return (
    <div className="flex h-[100px] w-full">
      <div className="p-4 w-full flex justify-between">
        {/* logo */}
        <div className="logo-container">
          <Image
            src={Icon}
            height={75}
            alt="reads_logotype"
            className='object-cover w-auto h-full'
          />
        </div>
        <div className="menu-container flex">
          {/* left menu */}
          <ul className='flex flex-row items-center'>
            <li className='uppercase pl-5'>
              <Link href="/">Home</Link>
            </li>
            <li className='uppercase pl-5'>
              <Link href="/genres">Genre</Link>
            </li>
            <li className='uppercase pl-5'>
              <Link href="/popular">Popular</Link>
            </li>
            <li className='uppercase pl-5'>
              <Link href="/canvas">Canvas</Link>
            </li>
          </ul>
          {/* right menu */}
          <div className=''></div>
        </div>
      </div>
    </div>
  );
}
 
export default Topbar;
