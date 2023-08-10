"use client";
import { useEffect } from "react";
import AddToCartButton from "./AddToCartButton";
import PriceTag from "@/components/PriceTag";
import Image from "next/image";

export default function CompProd(props) {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className="">
      <div className="flex w-full h-[120vh]">
        <div className="flex justify-center content-center flex-wrap w-1/2">
          <div className=" w-8/12 relative  h-5/6 ">
            <Image
              className="rounded-[100px]"
              src={props.img1}
              fill={true}
              alt="background image"
              priority={true}
            ></Image>
          </div>
        </div>
        <div className="flex  relative  content-start flex-wrap w-1/2">
          <div className="p-12">
            <h1 className="text-8xl capitalize ">{props.name}</h1>
            <h3 className=" ">
              {" "}
              <PriceTag price={props.price} className={"text-4xl mt-8 mb-4"} />{" "}
            </h3>
            <h4 className="text-lg m-3 mb-6">{props.desc}</h4>
            <AddToCartButton
              productId={props.prodid}
              incrementProductQuantity={props.incrementProductQuantity}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
