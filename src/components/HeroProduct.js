"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroProduct = (products) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2 }}
      className="hero rounded-xl bg-base-200"
    >
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src={products.products.imageUrl}
          alt={products.products.name}
          width={400}
          height={800}
          className="w-full max-w-sm rounded-lg shadow-2xl"
          priority
        />
        <div>
          <h1 className="text-5xl font-bold">{products.products.name}</h1>
          <p className="py-6">{products.products.description}</p>
          <Link
            href={"/products/" + products.products.id}
            className="btn-primary btn"
          >
            Check it out
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroProduct;
