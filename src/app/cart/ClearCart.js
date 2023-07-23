"use client";
import React, { useTransition } from "react";

const ClearCart = (props) => {
  const [isPending, startTransition] = useTransition();

  if (props.cart.items.length == 0) {
    return (
      <>
        <p>Your cart is empty.</p>
      </>
    );
  } else {
    return (
      <>
        <button
          onClick={() => {
            startTransition(async () => {
              await props.clearCart();
            });
          }}
          className="btn-error mt-5 btn sm:w-[200px]"
        >
          Clear Cart
        </button>
      </>
    );
  }
};

export default ClearCart;
