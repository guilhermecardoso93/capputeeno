import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FilterBar } from "../FilterBar";
import { ProductsList } from "../ProductsList";
import { FilterContextProvider } from "@/context/FilterContext";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";

interface DefaultProvidersProps {
  children: ReactNode
}

const theme = {
  desktopBreakpoint: "968px",
  tableBreakpoint: "768px",
}

export function DefaultProviders({ children } : DefaultProvidersProps){
  const client = new QueryClient();
  return(
      <QueryClientProvider client={client}>
          <FilterContextProvider>
              <ThemeProvider theme={theme}>
                  {children}
              </ThemeProvider>
          </FilterContextProvider>
      </QueryClientProvider>
  )
}