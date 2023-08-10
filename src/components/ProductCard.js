"use client";
import Link from "next/link";
import PriceTag from "./PriceTag";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useTransition } from "react";
import { incrementProductQuantity } from "../app/products/[id]/actions";


export default function ProductCard({ product }) {
  const isNew =
    Date.now() - new Date(product.createdAt).getTime() <
    1000 * 60 * 60 * 24 * 7;

 const [isPending, startTransition] = useTransition();
 const [success, setSuccess] = useState(false);


  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      <div className="card w-full hover:text-cyan-700  bg-base-100 transition-shadow hover:shadow-xl">
        <Link href={"/products/" + product.id}>
          <div className="flex rounded-lg  h-[55vh]">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={400}
              height={700}
              className="rounded-3xl p-4 object-cover "
            />
          </div>
        </Link>
        <div className="flex flex-col px-7   py-2">
          <Link href={"/products/" + product.id}>
            <h2 className="card-title ">{product.name}</h2>
            <PriceTag
              className={"font-bold text-cyan-600"}
              price={product.price}
            />
          </Link>
        </div>
        <div className="absolute bottom-0 flex right-0  bg-blue-200 p-2 mr-5 mb-3 rounded-full">
          <button
            onClick={() => {
              setSuccess(false);
              startTransition(async () => {
                await incrementProductQuantity(product.id);
                setSuccess(true);
              });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 !text-cyan-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        {!isPending && success && (
          <span className="text-success text-xs ">Added to Cart.</span>
        )}
        </div>
      </div>
    </motion.div>
  );
}
