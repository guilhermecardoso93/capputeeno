"use-client";
import { Saira_Stencil_One } from "next/font/google";
import { TagHeader, Logo } from "./styles";
import { PrimaryInputWSearchIcon } from "../PrimaryInput";

interface HeaderProps {}

const saraStencilFontLogo = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});

export function Header() {
  return (
    <TagHeader>
      <Logo className={saraStencilFontLogo.className}>Capputeeno</Logo>
      <div>
        <PrimaryInputWSearchIcon
          //value={search}
          //handleChange={setSearch}
          placeholder="Procurando por algo específico?"
        />
      </div>
    </TagHeader>
  );
}
