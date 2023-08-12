"use client"
import TypedText from "@/components/TypeText";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const page = () => {
  
  return (
    <div className="flex items-center  justify-center h-[90vh]">
      <div className="p-1 rounded shadow-lg bg-gradient-to-r from-purple-500 via-green-500 to-blue-500">
        <div className="flex flex-col items-center p-4 space-y-2 bg-white">
          <motion.svg
            initial={{ opacity: 1, rotate: 360 }} // Start position
            animate={{ opacity: 1, rotate: 0 }} // End position
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            xmlns="http://www.w3.org/2000/svg"
            className="text-green-600 w-28 h-28"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </motion.svg>
          <h1 className="text-4xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            <TypedText d={0} text={"Thank You For Shopping!"} />
          </h1>
          <motion.p
            initial={{ opacity: 0 }} // Start position
            animate={{ opacity: 1 }} // End position
            transition={{ delay: 1.2, duration: 1.7 }}
          >
            Thank you for shopping! Check your email for invoice and further
            details
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }} // Start position
            animate={{ opacity: 1 }} // End position
            transition={{ delay: 1.8, duration: 1 }}
            className="inline-flex items-center px-4 py-2 text-white bg-indigo-600 border border-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>

            <Link href={"/"} className="text-sm font-medium">
              Home
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
    // <div className="min-h-screen bg-gray-100 flex justify-center items-center">
    //   <div className="max-w-md p-8 bg-white shadow-lg rounded-lg">
    //     <div className="text-center">
    //       {/* Replace this with your SVG or image */}
    //       <div className="text-6xl mb-4">😊</div>
    //       <h2 className="text-2xl font-semibold mb-4">Payment Successful!</h2>
    //       <p className="text-gray-600">Thank you for your purchase.</p>
    //     </div>
    //     <div className="mt-6">
    //       <Link
    //         href="/"
    //         className="block text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
    //       >
    //         Continue Shopping
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
};

export default page;
