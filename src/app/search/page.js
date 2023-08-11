import ProductCard from "@/components/ProductCard";
import { prisma } from "@/lib/db/prisma";

export function generateMetadata({ searchParams: { query } }) {
  return {
    title: `Search: ${query} - Flowmazon`,
  };
}

export default async function SearchPage({ searchParams: { query } }) {
  const products = await prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: "insensitive" } },
        { description: { contains: query, mode: "insensitive" } },
      ],
    },
    orderBy: { id: "desc" },
  });

  if (products.length === 0) {
    return <div className="text-center">No products found</div>;
  }

  return (
    <div className="grid sm:grid-cols-1 my-5 md:grid-cols-2 gap-6 lg:grid-cols-3 grid-cols-4 ">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
