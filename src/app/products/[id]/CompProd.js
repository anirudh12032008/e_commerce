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
      <div className="flex w-full   from-blue-300 to-pink-300 bg-gradient-to-l min-h-[95vh]">
        <div className="flex justify-center content-center flex-wrap w-1/2">
          <div className=" w-8/12 relative  h-5/6 ">
            <Image
              className="rounded-[100px]"
              src={props.img1}
              fill={true}
              alt="background image"
              priority={true}
              objectFit="cover"
              layout="fill"
            ></Image>
          </div>
        </div>
        <div className="flex mt-6 relative  content-start flex-wrap w-1/2">
          <div className="p-12">
            <h1 className="text-5xl font-semibold capitalize ">{props.name}</h1>
            <h3 className="my-10 ">
              {" "}
              <PriceTag price={props.price} className={"text-4xl "} />{" "}
            </h3>
            <h4 className="text-2xl font-semibold">Product Details</h4>
            <h4 className="text-lg my-3 mb-6">{props.desc}</h4>
            <AddToCartButton
              updateQuantity={props.setProductQuantity}
              getProductDetails={props.getProductDetails}
              quantity1={props.quantity}
              productId={props.prodid}
              incrementProductQuantity={props.incrementProductQuantity}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
