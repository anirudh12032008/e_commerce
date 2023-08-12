"use client";
import TypedText from "@/components/TypeText";
import { formatPrice } from "@/lib/format";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTransition } from "react";

export default function CartEntry({
  cartItem: { product, quantity },
  setProductQuantity,
}) {
  const [isPending, startTransition] = useTransition();

  const quantityOptions = [];
  for (let i = 1; i <= 99; i++) {
    quantityOptions.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }
  

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="flex   xs:items-start md:ml-12 sm:ml-10 flex-wrap ml-16 items-center gap-3">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={170}
          height={170}
          className="rounded-lg"
        />
        <div className="ml-4">
          <Link href={"/products/" + product.id} className="font-bold">
            <TypedText text={product.name} d={0.4}/>
          </Link>
          <div>Price: {formatPrice(product.price)}</div>
          <div className="my-1 flex items-center gap-2">
            Quantity:
            <select
              className="select-bordered select w-full max-w-[80px]"
              defaultValue={quantity}
              onChange={(e) => {
                const newQuantity = parseInt(e.currentTarget.value);
                startTransition(async () => {
                  await setProductQuantity(product.id, newQuantity);
                });
              }}
            >
              <option value={0}>0 (Remove)</option>
              {quantityOptions}
            </select>
          </div>
          <div className="flex items-center gap-3">
            Total: {formatPrice(product.price * quantity)}
            {isPending && (
              <span className="loading loading-spinner loading-sm" />
            )}
          </div>
        </div>
      </div>
      <div className="divider" />
    </motion.div>
  );
}
