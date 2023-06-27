"use client";
import { DefaultPageLayout } from "../page";
import { Container } from "./styles";

export default function Product() {
  return (
    <DefaultPageLayout>
      <Container>
        <button>Voltar</button>
        <section>Informações</section>
      </Container>
    </DefaultPageLayout>
  );
}
