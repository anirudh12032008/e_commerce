import PriceTag from "@/components/PriceTag";
import { prisma } from "@/lib/db/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";
import { cache } from "react";
import AddToCartButton from "./AddToCartButton";
import { incrementProductQuantity } from "./actions";

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

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={500}
        height={500}
        className="rounded-lg"
        priority
      />

      <div>
        <h1 className="text-5xl font-bold ">{product.name}</h1>
        <PriceTag price={product.price} className="mt-4" />
        <p className="py-6">{product.description}</p>
        <AddToCartButton
          productId={product.id}
          incrementProductQuantity={incrementProductQuantity}
        />
      </div>
    </div>
  );
}
