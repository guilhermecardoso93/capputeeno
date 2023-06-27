"use-client"
import { Saira_Stencil_One } from "next/font/google";
import { TagHeader, Logo } from "./styles";

interface HeaderProps {

}

const saraStencilFontLogo = Saira_Stencil_One({ 
  weight: ['400'],
  subsets: ['latin']
 })


export function Header() {
  return (
    <TagHeader>
      <Logo className={saraStencilFontLogo.className}>Capputeeno</Logo>
      <div></div>
    </TagHeader>
  )
}