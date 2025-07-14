import { Suspense } from "react";
import { QueryClient } from "@tanstack/react-query";
import { getProducts } from "@/lib/api/products";
import Loading from "./loading";
import ProductGrid from "./components/products/ProductGrid";

// export const revalidate = 3600

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <Suspense fallback={<Loading />}>
        <ProductGrid />
      </Suspense>
    </div>
  );
}
