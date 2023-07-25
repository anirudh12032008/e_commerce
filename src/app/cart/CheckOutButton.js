"use client";
import getStipePromise from "../../lib/stripe";

export default function CheckOutButton({ cart, products }) {
  const handleCheckout = async (products) => {
    const stripe = await getStipePromise();
    const response = await fetch("/api/stripe-session/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify(products),
    });

    const data = await response.json();
    if (data.session) {
      stripe?.redirectToCheckout({ sessionId: data.session.id });
    }
  };
  function handleClick() {
    handleCheckout(products);
  }

  return (
    <div className="py-5">
      <button className="btn-primary btn sm:w-[200px]" onClick={handleClick}>
        Check out
      </button>
    </div>
  );
}
