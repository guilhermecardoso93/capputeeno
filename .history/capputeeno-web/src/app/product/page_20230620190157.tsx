"use client";
import { BackIcon } from "@/icons/back-icon";
import { DefaultPageLayout } from "../page";
import { Container } from "./styles";

export default function Product() {
  return (
    <DefaultPageLayout>
      <Container>
        <button>
          <BackIcon />
        </button>
        <section>Informações</section>
      </Container>
    </DefaultPageLayout>
  );
}
