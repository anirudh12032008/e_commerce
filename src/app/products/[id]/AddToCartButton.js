"use client";
import { useState, useTransition } from "react";

export default function AddToCartButton({
  productId,
  incrementProductQuantity,
  className,
  getProductDetails,
  updateQuantity,
  quantity1,
}) {
  let product = { quantity: 0 };
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  const [quantity, setQuantity] = useState(quantity1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    updateQuantity(productId, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      updateQuantity(productId, quantity - 1);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <div className="my-1 flex items-center gap-2">
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded-lg"
          onClick={handleIncrement}
        >
          +
        </button>
        <div className="border-2 border-slate-600  text-black font-semibold px-3 py-1 rounded-lg">
          {" "}
          {quantity}
        </div>
        <button
          className="bg-red-500 text-white px-3 py-1 rounded-lg"
          onClick={handleDecrement}
        >
          -
        </button>
      </div>
      <button
        className="flex justify-center items-center border-cyan-400 border-solid border-2 rounded-full hover:bg-blue-500 hover:text-white  px-5 pb-2 pt-2.5 text-base  font-semibold uppercase leading-normal text-cyan-600  transition duration-150 ease-in-out bg-white shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        onClick={() => {
          setSuccess(false);
          startTransition(async () => {
            await incrementProductQuantity(productId);
            setSuccess(true);
            handleIncrement();
          });
        }}
      >
        Add to Cart
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 ml-2 w-5"
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
      {isPending && <span className="loading loading-spinner loading-md" />}
      {!isPending && success && (
        <span className="text-success">Added to Cart.</span>
      )}
    </div>
  );
}
