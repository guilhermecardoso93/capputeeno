"use client";

import { Saira_Stencil_One } from "next/font/google";
import { useFilter } from "@/hooks/useFilter";
import { CartControl } from "../CartControl";
import { PrimaryInputWSearchIcon } from "../PrimaryInput";
import { TagHeader, Logo } from "./styles";

const sairaStencil = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});

interface HeaderProps {}
export function Header(props: HeaderProps) {
  const { setSearch, search } = useFilter();

  return (
    <TagHeader>
      <Logo className={sairaStencil.className}>Capputeeno</Logo>
      <div>
        <PrimaryInputWSearchIcon
          value={search}
          handleChange={setSearch}
          placeholder="Procurando por algo específico?"
        />
        <CartControl />
      </div>
    </TagHeader>
  );
}
