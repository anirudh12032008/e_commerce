import Image from "next/image";
import React from "react";
import img from "../assets/1234.png";
import Link from "next/link";

const Home1 = () => {
  return (
    <div className="w-[98%] flex flex-row h-[88vh] from-blue-300 to-pink-300 bg-gradient-to-r rounded-3xl  mx-3">
      <div className="flex pl-14 w-8/12 justify-center flex-col">
        <div className="text-5xl m-2 uppercase font-light">Your One-Stop </div>
        <div className="uppercase m-2 text-5xl  font-semibold">
          Shop for Everything
        </div>
        <div className="w-8/12 my-7 font-light">
          Welcome to our ultimate shopping destination. Discover a diverse range
          of products, from electronics and fashion to lifestyle essentials.
          Your one-stop shop for all your needs.
        </div>
        <div>
          <Link href="#prod">
            <button className="inline-block rounded-full  px-6 pb-2 pt-2.5 text-base  font-semibold uppercase leading-normal text-cyan-600  transition duration-150 ease-in-out bg-white shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
              buy now
            </button>
          </Link>
        </div>
      </div>

      <div className="flex relative w-4/12">
          <Image
            src={img}
            alt="intro image"
            objectFit="cover"
            priority={true}
            layout="fill"
          />
        
      </div>
      {/* <div className="flex overflow-hidden relative">
        <div className="absolute inset-0">
          <Image src={img} alt="intro image" priority={true} layout="fill" objectFit="cover" />
        </div>
      </div> */}
    </div>
  );
};

export default Home1;
