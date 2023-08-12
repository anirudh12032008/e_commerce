"use client";
import { motion } from "framer-motion";
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

  

   if (cart?.items.length == 0) {
    return (
      <>
        
      </>
    );
  } else if (typeof cart?.items == "undefined"){
    return(
<>

      </>
    )
  } else {
  

  return (
    <>
      <motion.button
        initial={{ opacity: 0, y: -100 }} // Start position
        whileInView={{ opacity: 1, y: 0 }} // End position
        transition={{ delay: 0.3, duration: 0.3 }}
        viewport={{ once: true }}
        className="btn-primary w-4/12 mb-3 btn sm:w-[200px]"
        onClick={handleClick}
      >
        Check out
      </motion.button>
    </>
  );
}}
