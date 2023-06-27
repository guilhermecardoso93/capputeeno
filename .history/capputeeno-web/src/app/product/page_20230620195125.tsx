"use client";
import { BackIcon } from "@/icons/back-icon";
import { DefaultPageLayout } from "../page";
import { Container } from "./styles";
import { BackButton } from "@/components/BackButton";
import { useProduct } from "@/hooks/useProduct";

export default function Product({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const { data } = useProduct(searchParams.id);

  return (
    <DefaultPageLayout>
      <Container>
        <BackButton navigate="/" />
        <section>
          <img src={data?.image_url} alt={data?.name} />
          <div>
            <span>{data?.category}</span>
            <h2>{data?.name}</h2>
            <span>{data?.price_in_cents}</span>
            <p>
              *Frete de R$ 40,00 para todo o Brasil. Grátis para compras acima
              de R$ 200,00
            </p>
            <div>
              <h3>Descrição</h3>
              <p>{data?.category}</p>
            </div>
          </div>
        </section>
      </Container>
    </DefaultPageLayout>
  );
}
