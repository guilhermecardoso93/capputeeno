import { InputHTMLAttributes } from "react";
import { Input, InputContainer } from "./styles";
import { SearchIcon } from "../icons/search-icon";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string,
  handleChange: (value: string ) => void
}

export function PrimaryInputWSearchIcon(props: InputProps){
  return (
      <InputContainer>
          <Input 
              onChange={(event) => props.handleChange(event.target.value)} 
              {...props}
          />
          <SearchIcon/>
      </InputContainer>
  )
}