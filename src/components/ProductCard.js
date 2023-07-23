"use client";
import Link from "next/link";
import PriceTag from "./PriceTag";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  const isNew =
    Date.now() - new Date(product.createdAt).getTime() <
    1000 * 60 * 60 * 24 * 7;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2 }}
    >
      <Link
        href={"/products/" + product.id}
        className="card w-full bg-base-100 transition-shadow hover:shadow-xl"
      >
        <figure>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={800}
            height={400}
            className="h-48 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          {isNew && <div className="badge badge-secondary">NEW</div>}
          <p>{product.description}</p>
          <PriceTag price={product.price} />
        </div>
      </Link>
    </motion.div>
  );
}
