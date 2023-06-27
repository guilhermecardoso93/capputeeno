"use client";
import { BackIcon } from "@/icons/back-icon";
import { DefaultPageLayout } from "../page";
import { Container } from "./styles";
import { BackButton } from "@/components/BackButton";

export default function Product() {
  return (
    <DefaultPageLayout>
      <Container>
        <button>
          <BackButton navigate="/"/>
          <p>Voltar</p>
        </button>
        <section>Informações</section>
      </Container>
    </DefaultPageLayout>
  );
}
