import { Saira_Stencil_One } from "next/font/google";
import { styled } from "styled-components";

export const saraStencilFontLogo = Saira_Stencil_One({ 
  weight: ['400'],
  subsets: ['latin']
 })

export const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 160px;
`;
 export const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 40px;
  line-height: 150%;
 
 `