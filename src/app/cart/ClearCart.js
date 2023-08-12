"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useTransition } from "react";

const ClearCart = (props) => {
  const [isPending, startTransition] = useTransition();

  if (props.cart?.items.length == 0) {
    return (
      <>
        <div className="text-3xl m-3 text-center">
          Your cart is empty
        </div>
        <Link href={"/"}>
          <button className="inline-block rounded-full mb-8 hover:bg-blue-100 px-6 pb-2 pt-2.5 text-base  font-semibold uppercase leading-normal text-cyan-600  transition duration-150 ease-in-out bg-white shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
Start Shopping          </button>
        </Link>
      </>
    );
  }else if (typeof props.cart?.items == "undefined") {
    return (
      <>
        <div className="text-3xl m-4 text-center">Your cart is empty</div>
        <Link href={"/"}>
          <button className="inline-block rounded-full mb-8 hover:bg-blue-100 px-6 pb-2 pt-2.5 text-base  font-semibold uppercase leading-normal text-cyan-600  transition duration-150 ease-in-out bg-white shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
            Start Shopping{" "}
          </button>
        </Link>
      </>
    );
  } else {
    
    return (
      <>
        <motion.button
          initial={{ opacity: 0, y: -100 }} // Start position
          whileInView={{ opacity: 1, y: 0 }} // End position
          transition={{ delay: 0.9, duration: 0.3 }}
          viewport={{ once: true }}
          onClick={() => {
            startTransition(async () => {
              await props.clearCart();
            });
          }}
          className="btn-error w-4/12 mt-1 btn sm:w-[200px]"
        >
          Clear Cart
        </motion.button>
      </>
    );
  }
};

export default ClearCart;
