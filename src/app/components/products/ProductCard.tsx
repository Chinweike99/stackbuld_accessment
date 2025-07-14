"use client";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cartStores";
import { Product } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <Link href={`/product/${product.slug}`}>
        <div className="aspect-square relative">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <p className="text-gray-500 text-sm line-clamp-2 my-2">
            {product.description}
          </p>
          <p className="font-bold text-lg">${product.price.toFixed(2)}</p>
        </div>
      </Link>
      <div className="p-4 pt-0">
        <Button
          onClick={(e) => {
            e.preventDefault();
            addItem(product);
          }}
          className="w-full"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
