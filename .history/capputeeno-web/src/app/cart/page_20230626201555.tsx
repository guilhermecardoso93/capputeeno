"use client";

import { BackButton } from "@/components/BackButton";
import { DefaultPageLayout } from "../page";
import { CartList, Container, CartListContainer } from "./styles";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export default function CartPage() {
  const { value } = useLocalStorage('cart-items', [])

  return (
    <DefaultPageLayout>
      <Container>
        <BackButton navigate='/'/>
        <CartListContainer>
          <h3>Seu carrinho</h3>
          <p>
            Total ({value.length} Produtos)
            <span> R$ 50,00</span>
          </p>
        </CartListContainer>
      </Container>
    </DefaultPageLayout>
  );
}
