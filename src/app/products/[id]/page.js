import PriceTag from "@/components/PriceTag";
import { prisma } from "@/lib/db/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";
import { cache } from "react";
import AddToCartButton from "./AddToCartButton";

import { getProductQuantity, incrementProductQuantity } from "./actions";
import { getProductDetails } from "./actions";

import {setProductQuantity} from "../../cart/actions"
import CompProd from "./CompProd";
import { getCart } from "@/lib/db/cart";


function isValidHexString(id) {
  const hexPattern = /^[0-9a-fA-F]{24}$/;
  return hexPattern.test(id);
}

const getProduct = cache(async (id) => {
  const isvalid = isValidHexString(id);
  if (isvalid == true) {
    const product = await prisma.product.findUnique({ where: { id } });
    if (!product) notFound();
    return product;
  } else {
    notFound();
  }
});

export async function generateMetadata({ params: { id } }) {
  const product = await getProduct(id);

  return {
    title: product.name + " - Anizon",
    description: product.description,
    openGraph: {
      images: [{ url: product.imageUrl }],
    },
  };
}

export default async function ProductPage({ params: { id } }) {

  const product = await getProduct(id);
  const cart = await getCart();
  // const quantity = await getProductDetails(id);
        const quantity = await getProductQuantity(id);

       
  return (
    <>
      <CompProd
        name={product.name}
        quantity={quantity}
        price={product.price}
        desc={product.description}
        desc2={product.description2}
        getProductDetails={getProductDetails}
        desc3={product.description3}
        setProductQuantity={setProductQuantity}
        incrementProductQuantity={incrementProductQuantity}
        prodid={product.id}
        img1={product.imageUrl}
        img2={product.imageUrl2}
        img3={product.imageUrl3}
      />
    </>
  );
}
