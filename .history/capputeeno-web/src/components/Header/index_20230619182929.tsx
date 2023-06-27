"use-client";
import { Saira_Stencil_One } from "next/font/google";
import { TagHeader, Logo } from "./styles";
import { PrimaryInputWSearchIcon } from "../PrimaryInput";
import { CartControl } from "../CartControl";
import { useFilter } from "@/hooks/useFilter";


const saraStencilFontLogo = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});

export function Header() {
  const {setSearch, search} = useFilter();

  return (
    <TagHeader>
      <Logo className={saraStencilFontLogo.className}>Capputeeno</Logo>
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
