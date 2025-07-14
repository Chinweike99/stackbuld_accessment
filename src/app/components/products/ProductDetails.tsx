"use client";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cartStores";
import { Product } from "@/types/types";
import Image from "next/image";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>
        <p className="text-gray-700 mb-6">{product.description}</p>
        <div className="flex items-center gap-4 mb-6">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {product.category}
          </span>
          {product.rating && (
            <span className="flex items-center">
              ⭐ {product.rating.toFixed(1)}
            </span>
          )}
        </div>
        <Button
          onClick={() => addItem(product)}
          className="w-full md:w-auto px-8 py-3"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
