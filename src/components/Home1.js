"use client"
import Image from "next/image";
import React from "react";
import img from "../assets/1234.png";
import Link from "next/link";
import {motion} from 'framer-motion'

const Home1 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      <div className="w-[98%] flex md:flex-col md:justify-center  flex-row h-[88vh] md:h-[60vh]  from-blue-300 to-pink-300 bg-gradient-to-r rounded-3xl  mx-3 md:w-[97%]">
        <div className="flex pl-14 md:w-full   lg:pl-10 lg:w-6/12 xl:w-7/12 w-8/12 justify-center flex-col">
          <div className="text-5xl  md:text-4xl  m-2 uppercase font-light">
            Your One-Stop{" "}
          </div>
          <div className="uppercase m-2  text-5xl md:font-medium md:text-4xl font-semibold">
            Shop for Everything
          </div>
          <div className="w-8/12 md:w-11/12 my-7 font-light">
            Welcome to our ultimate shopping destination. Discover a diverse
            range of products, from electronics and fashion to lifestyle
            essentials. Your one-stop shop for all your needs.
          </div>
          <div className="">
            <Link href="#prod">
              <button
               className="inline-block rounded-full hover:bg-blue-500 hover:text-white  px-6 pb-2 pt-2.5 text-base  font-semibold uppercase leading-normal text-cyan-600  transition duration-150 ease-in-out bg-white shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
               >
                buy now
              </button>
            </Link>
          </div>
        </div>

        <div className="flex relative md:hidden lg:w-7/12 xl:w-6/12 w-4/12">
          <Image
            src={img}
            alt="intro image"
            objectFit="cover"
            priority={true}
            layout="fill"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Home1;
