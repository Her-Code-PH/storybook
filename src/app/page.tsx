import Link from "next/link";
import Image from 'next/image';
import M1 from "../assets/images/mockup1.png";
import M2 from "../assets/images/mockup2.png";
import M3 from "../assets/images/mockup3.png";
import M4 from "../assets/images/mockup4.png";

const Home = () => {
  return (
    <div className="mx-10 mt-10">
      <div className="hero-section h-[400px] rounded border-[1px] border-[#4B8078]"></div>
      <div className="mt-10 mb-5  flex justify-between">
        <div className='text-[#4B8078] justify-center h-full uppercase px-5'>
          <Link href="/genres">Genres</Link>
        </div>
        <div className='text-[#4B8078] justify-center h-full uppercase px-5'>
          <Link href="/genres">View All</Link>
        </div>
      </div>
      <div className="my-5 grid grid-cols-5 gap-4">
        <Image
          src={M1}
          height={240}
          alt="reads_logotype"
          className='w-full rounded object-cover h-full border-[#4B8078] cursor-pointer'
          placeholder='empty' // {empty} | {blur}
          priority={false}
        />
        <Image
          src={M4}
          height={240}
          alt="reads_logotype"
          className='w-full rounded object-cover h-full  border-[#4B8078] cursor-pointer'
          placeholder='empty' // {empty} | {blur}
          priority={false}
        />
        <Image
          src={M2}
          height={240}
          alt="reads_logotype"
          className='w-full rounded object-cover h-full border-[#4B8078] cursor-pointer'
          placeholder='empty' // {empty} | {blur}
          priority={false}
        />
        <Image
          src={M3}
          height={240}
          alt="reads_logotype"
          className='w-full rounded object-cover h-full border-[#4B8078] cursor-pointer'
          placeholder='empty' // {empty} | {blur}
          priority={false}
        />
        <Image
          src={M4}
          height={240}
          alt="reads_logotype"
          className='w-full rounded object-cover h-full border-[#4B8078] cursor-pointer'
          placeholder='empty' // {empty} | {blur}
          priority={false}
        />
        <Image
          src={M3}
          height={240}
          alt="reads_logotype"
          className='w-full rounded object-cover h-full border-[#4B8078] cursor-pointer'
          placeholder='empty' // {empty} | {blur}
          priority={false}
        />
      </div>
      <div className="my-10 grid grid-cols-2 gap-4">
        <div className="mt-10">
          <div className="text-lg">New & Trending</div>
          <div className="list mt-10">
            <div className="flex flex-row items-center">
              <div className="bg-[#4B8078] rounded w-[50px] h-[50px]">
              </div>
              <div className="flex flex-col grow pl-5 justify-center align-middle">
                <span className="text-xs">Genre</span>
                <span className="text-base">Title</span>
                <span className="text-xs">Creator - Author</span>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="bg-[#4B8078] rounded w-[50px] h-[50px]">
              </div>
              <div className="flex flex-col grow pl-5 justify-center align-middle">
                <span className="text-xs">Genre</span>
                <span className="text-base">Title</span>
                <span className="text-xs">Creator - Author</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="text-lg">ORIGINALS by Genre</div>
          <div className="list mt-10">
            <div className="flex flex-row items-center">
              <div className="bg-[#4B8078] rounded w-[50px] h-[50px]">
              </div>
              <div className="flex flex-col grow pl-5 justify-center align-middle">
                <span className="text-xs">Genre</span>
                <span className="text-base">Title</span>
                <span className="text-xs">Creator - Author</span>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="bg-[#4B8078] rounded w-[50px] h-[50px]">
              </div>
              <div className="flex flex-col grow pl-5 justify-center align-middle">
                <span className="text-xs">Genre</span>
                <span className="text-base">Title</span>
                <span className="text-xs">Creator - Author</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home;
