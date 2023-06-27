"use client";

import { BackButton } from "@/components/BackButton";
import { DefaultPageLayout } from "../page";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Product, ProductInCart } from "@/typesProps/product";
import { formatPrice } from "@/utils/formatPrice";
import { CartItem } from "@/components/CartComponents/CartItem";
import { Divider } from "@/components/Divider";
import { Container } from "../product/styles";

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
  const deliveryFee = 4000;
  const cartTotalWithDelivery = formatPrice(
    calculateTotal(value) + deliveryFee
  );

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
        <CartResultContainer>
          <h3>Resumo do Pedido</h3>
          <TotalItem isBold={false}>
            <p>Subtotal de produtos</p>
            <p>{cartTotal}</p>
          </TotalItem>
          <TotalItem isBold={false}>
            <p>Entrega</p>
            <p>{formatPrice(deliveryFee)}</p>
          </TotalItem>
          <Divider />
          <TotalItem isBold>
            <p>Total</p>
            <p>{cartTotalWithDelivery}</p>
          </TotalItem>
          <ShopBtn>FINALIZAR COMPRA</ShopBtn>
        </CartResultContainer>
      </Container>
    </DefaultPageLayout>
  );
}
