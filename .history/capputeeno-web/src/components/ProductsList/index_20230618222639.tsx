"use client";
import { useProducts } from "@/hooks/useProducts";
import { ProductCard } from "../ProductCard";

export function ProductsList() {
  const { data } = useProducts();

  console.log(data)

  return (
    <div>
      {data?.map((product) => (
        <ProductCard
          title={product.name}
          price={product.price_in_cents}
          image={product.image_url}
          key={product.id}
        />
      ))}
    </div>
  );
}
