"use client";

import { BackButton } from "@/components/BackButton";
import { DefaultPageLayout } from "../page";
import { CartList, Container, CartListContainer } from "./styles";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Product, ProductInCart } from "@/typesProps/product";

export default function CartPage() {
  const { value } = useLocalStorage('cart-items', [])
  
  function calculateTotal(value: ProductInCart[]) {
    return value.reduce((sum, item) => sum += (item.price_in_cents * item.quantity), 0)
  }

  const cartTotal = calculateTotal(value)

  return (
    <DefaultPageLayout>
      <Container>
        <BackButton navigate='/'/>
        <CartListContainer>
          <h3>Seu carrinho</h3>
          <p>
            Total ({value.length} Produtos)
            <span> R$ {cartTotal}</span>
          </p>
        </CartListContainer>
      </Container>
    </DefaultPageLayout>
  );
}
