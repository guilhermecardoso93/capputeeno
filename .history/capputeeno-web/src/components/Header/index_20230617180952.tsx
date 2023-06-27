import { TagHeader, Logo, saraStencilFontLogo } from "./styles";

interface HeaderProps {

}

export function Header() {
  return (
    <TagHeader>
      <Logo className={saraStencilFontLogo.className}/>
      <div></div>
    </TagHeader>
  )
}