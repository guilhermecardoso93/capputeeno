"use client";

import { BackButton } from "@/components/BackButton";
import { DefaultPageLayout } from "../page";
import {
  CartList,
  Container,
  CartListContainer,
  CartResultContainer,
} from "./styles";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Product, ProductInCart } from "@/typesProps/product";
import { formatPrice } from "@/utils/formatPrice";
import { CartItem } from "@/components/CartComponents/CartItem";

export default function CartPage() {
  const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>(
    "cart-items",
    []
  );

  function calculateTotal(value: ProductInCart[]) {
    return value.reduce(
      (sum, item) => (sum += item.price_in_cents * item.quantity),
      0
    );
  }

  const cartTotal = formatPrice(calculateTotal(value));

  function handleDeleteItem(id: string) {
    const newValue = value.filter((item) => {
      if (item.id !== id) return item;
    });
    updateLocalStorage(newValue);
  }

  function handleUpdateQuantity(id: string, quantity: number) {
    const newValue = value.map((item) => {
      if (item.id !== id) return item;
      return { ...item, quantity: quantity };
    });
    updateLocalStorage(newValue);
  }

  return (
    <DefaultPageLayout>
      <Container>
        <CartListContainer>
          <BackButton navigate="/" />
          <h3>Seu carrinho</h3>
          <p>
            Total {value.length} produtos
            <span>{cartTotal}</span>
          </p>
          <CartList>
            {value.map((item) => (
              <CartItem
                product={item}
                key={item.id}
                handleDelete={handleDeleteItem}
                handleUpdateQuantity={handleUpdateQuantity}
              />
            ))}
          </CartList>
        </CartListContainer>
        <CartResultContainer></CartResultContainer>
      </Container>
    </DefaultPageLayout>
  );
}
