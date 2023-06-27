import { BackButton } from "@/components/BackButton";
import { DefaultPageLayout } from "../page";
import { Container } from "./styles";

export default function CartPage() {
  return (
    <DefaultPageLayout>
      <Container>
        <BackButton />
      </Container>
    </DefaultPageLayout>
  );
}
