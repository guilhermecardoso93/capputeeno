"use-client"
import { TagHeader, Logo, saraStencilFontLogo } from "./styles";

interface HeaderProps {

}

export function Header() {
  return (
    <TagHeader>
      <Logo className={saraStencilFontLogo.className}>Capputeeno</Logo>
      <div></div>
    </TagHeader>
  )
}