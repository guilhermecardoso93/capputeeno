"use client";
import { useProducts } from "@/hooks/useProducts";
import { ProductCard } from "../ProductCard";
import { ListContainer } from "./styles";

export function ProductsList() {
  const { data } = useProducts();
  
  console.log(data)
  return (
    <ListContainer>
      {data?.map((product) => (
        <ProductCard
          key={product.id}
          title={product.name}
          price={product.price_in_cents}
          image={product.image_url}
        />
      ))}
    </ListContainer>
  );
}
