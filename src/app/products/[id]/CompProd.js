"use client";
import { useEffect } from "react";
import AddToCartButton from "./AddToCartButton";
import PriceTag from "@/components/PriceTag";
import Image from "next/image";
import TypedText from "@/components/TypeText";
import { motion } from "framer-motion";


export default function CompProd(props) {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className="">
      <div className="flex w-full  md:flex-col from-blue-300 to-pink-300 bg-gradient-to-l min-h-[95vh]">
        <div className="flex justify-center md:items-center md:w-full content-center flex-wrap w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }} // Start position
            animate={{ opacity: 1, scale: 1 }} // End position
            transition={{ duration: 1.5 }}
            className=" w-8/12 flex  md:min-h-[55vh] md:w-11/12  sm:min-h-[45vh] md:mt-3 md:items-center md:content-center md:justify-center relative lg:w-10/12 h-5/6 "
          >
            <Image
              className="rounded-[100px] md:rounded-lg items-center md:bg-contain "
              src={props.img1}
              fill={true}
              alt="background image"
              priority={true}
              objectFit="cover "
              layout="fill"
            ></Image>
          </motion.div>
        </div>
        <div className="flex mt-6 md:mt-3 relative md:w-full  content-start flex-wrap w-1/2">
          <div className="p-12 md:p-6">
            <h1 className="text-5xl md:text-3xl font-semibold capitalize ">
              {" "}
              <TypedText d={0.6} text={props.name} />
            </h1>
            <motion.h3
              initial={{ opacity: 0 }} // Start position
              animate={{ opacity: 1 }} // End position
              transition={{ delay: 1, duration: 1 }}
              className="my-10 md:my-3"
            >
              {" "}
              <PriceTag
                price={props.price}
                className={"text-4xl md:text-2xl "}
              />{" "}
            </motion.h3>
            <h4 className="text-2xl md:text-xl font-semibold">
              <TypedText text={"Product Details"} d={1.3} />
            </h4>
            <motion.h4
              initial={{ opacity: 0 }} // Start position
              animate={{ opacity: 1 }} // End position
              transition={{ delay: 2, duration: 0.5 }}
              className="text-lg md:text-base my-3 mb-6"
            >
              {props.desc}
            </motion.h4>
            <motion.div
              initial={{ opacity: 0 }} // Start position
              animate={{ opacity: 1 }} // End position
              transition={{ delay: 2.4, duration: 0.5 }}
              className="flex md:items-center md:justify-center"
            >
              <AddToCartButton
                updateQuantity={props.setProductQuantity}
                getProductDetails={props.getProductDetails}
                quantity1={props.quantity}
                productId={props.prodid}
                incrementProductQuantity={props.incrementProductQuantity}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
