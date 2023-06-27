"use client";

import { BackButton } from "@/components/BackButton";
import { DefaultPageLayout } from "../page";
import { CartList, Container, CartListContainer } from "./styles";

export default function CartPage() {
  return (
    <DefaultPageLayout>
      <Container>
        <BackButton navigate='/'/>
        <CartListContainer>
          <h3>Seu carrinho</h3>
          <p>
            Total de (x Produtos)
            <span> R$ 50,00</span>
          </p>
        </CartListContainer>
      </Container>
    </DefaultPageLayout>
  );
}
