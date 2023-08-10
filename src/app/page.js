import HeroProduct from "@/components/HeroProduct";
import PaginationBar from "@/components/PaginationBar";
import ProductCard from "@/components/ProductCard";
import Home1 from "@/components/Home1";

import { prisma } from "@/lib/db/prisma";
export default async function Home({ searchParams: { page = "1" } }) {
  
  const currentPage = parseInt(page);

  const pageSize = 8;
 
  const heroItemCount = 0;

  const totalItemCount = await prisma.product.count();

  const totalPages = Math.ceil((totalItemCount - heroItemCount) / pageSize);

  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
    skip:
      (currentPage - 1) * pageSize + (currentPage === 1 ? 0 : heroItemCount),
    take: pageSize + (currentPage === 1 ? heroItemCount : 0),
  });

  return (
    <>
      <div className="">
        <Home1 />
      </div>
      <div className="flex test123 mx-5 flex-col items-center">
        {/* {currentPage === 1 && <HeroProduct products={products[0]} />} */}

        <div
          id="prod"
          className="my-4 grid sm:grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 grid-cols-4 "
        >
          {(currentPage === 1 ? products.slice(0) : products).map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>

        {totalPages > 1 && (
          <PaginationBar currentPage={currentPage} totalPages={totalPages} />
        )}
      </div>
    </>
  );
}
