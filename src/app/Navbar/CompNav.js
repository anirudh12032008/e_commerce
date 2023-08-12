"use client";
import Image from "next/image";
import { redirect } from "next/navigation";
import Link from "next/link";
import React from "react";
import ShoppingCartButton from "./ShoppingCartButton";
import UserMenuButton from "./UserMenuButton";
import { motion } from "framer-motion";


async function searchProducts(formData) {
  const searchQuery = formData.get("searchQuery")?.toString();

  if (searchQuery) {
    redirect("/search?query=" + searchQuery);
  }
}


const CompNav = (params) => {
  return (
    <div>
      <motion.div
        initial={{ opacity:0 }} // Initial position, off-screen at the top
        animate={{ opacity:1 }} // Target position, sliding into view from the top
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-blue-400 to-purple-500 text-white"
      >
        <div className="navbar m-auto max-w-7xl sm:flex-col gap-2 flex-row">
          <div className="flex-1">
            <Link href="/" className="btn-ghost btn text-xl normal-case">
              <Image
                src={params.logo}
                height={40}
                width={40}
                alt="Anizon logo"
              />
              Anizon
            </Link>
          </div>
          <div className="flex-none gap-2">
            <form action={searchProducts}>
              <div className="form-control">
                <input
                  name="searchQuery"
                  placeholder="Search"
                  className="input-bordered input w-full min-w-[100px]"
                />
              </div>
            </form>
            <ShoppingCartButton cart={params.cart} />
            <UserMenuButton session={params.session} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CompNav;
