"use client";
import { ProductsList } from "@/components/ProductsList";
import { FilterBar } from "@/components/FilterBar";
import styled from "styled-components";

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DefaultPageLayout = styled.div`
  padding: 12px 24px;
  min-height: 100vh;
  background-color: var(--bg-primary);

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    padding: 34px 160px;
  }
`;

export default function Home() {
  return (
    <DefaultPageLayout>
      <PageWrapper>
        <FilterBar />
        <ProductsList />
      </PageWrapper>
    </DefaultPageLayout>
  );
}
