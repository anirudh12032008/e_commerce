"use client";
import React, { useEffect } from "react";
import CartEntry from "./CartEntry";
import CheckOutButton from "./CheckOutButton";
import ClearCart from "./ClearCart";
import { setProductQuantity } from "./actions";
import { formatPrice } from "@/lib/format";
import { clearCart } from "./actions";

const CompCart = (props) => {
  return (
    <div>
      <div>
        {/* use 424242.... for card no. and any future date for card and any cvc */}
        <h1 className="mb-6 text-center text-5xl font-bold">Shopping Cart</h1>
        {props.cart?.items.map((cartItem) => (
          <CartEntry
            cartItem={cartItem}
            key={cartItem.id}
            setProductQuantity={setProductQuantity}
          />
        ))}
        {!props.cart?.items.length && <p></p>}
        <div className="flex flex-col  items-center">
          <p className="mb-3 font-bold">
            Total: {formatPrice(props.cart?.subtotal || 0)}
          </p>
          <CheckOutButton cart={props.cart} products={props.cart?.items} />
          <ClearCart clearCart={clearCart} cart={props.cart} />
        </div>
      </div>
    </div>
  );
};

export default CompCart;
