"use client";
import React, { useEffect } from "react";
import CartEntry from "./CartEntry";
import CheckOutButton from "./CheckOutButton";
import ClearCart from "./ClearCart";
import { setProductQuantity } from "./actions";
import { formatPrice } from "@/lib/format";
import { clearCart } from "./actions";
import { motion } from "framer-motion";
import TypedText from "@/components/TypeText";
import Link from "next/link";


const CompCart = (props) => {
   useEffect(() => {
     (async () => {
       const LocomotiveScroll = (await import("locomotive-scroll")).default;
       const locomotiveScroll = new LocomotiveScroll();
     })();
   }, []);

  return (
    <div>
      <motion.div>
        {/* use 424242.... for card no. and any future date for card and any cvc */}
        <h1 className="mb-6 text-center text-5xl font-bold">
          {" "}
          <TypedText d={0.3} text={"Shopping Cart"} />
          <Link className="underline text-blue-500" href={'/guide'}>How to do test Payments </Link>
        </h1>
        <div className="">
          {props.cart?.items.map((cartItem) => (
            <CartEntry
              cartItem={cartItem}
              key={cartItem.id}
              setProductQuantity={setProductQuantity}
            />
          ))}
        </div>
        {!props.cart?.items.length && <p></p>}
        <div className="flex flex-col  items-center">
          <motion.p
            initial={{ opacity: 0 }} // Start position
            whileInView={{ opacity: 1 }} // End position
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-3 text-xl font-bold"
          >
            Total: {formatPrice(props.cart?.subtotal || 0)}
          </motion.p>
          <CheckOutButton cart={props.cart} products={props.cart?.items} />
          <ClearCart clearCart={clearCart} cart={props.cart} />
        </div>
      </motion.div>
    </div>
  );
};

export default CompCart;
