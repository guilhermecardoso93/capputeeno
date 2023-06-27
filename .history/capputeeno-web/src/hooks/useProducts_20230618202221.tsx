import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./useFilter";

function fetcher() {
  return axios.post('localhost:3333',`
    query {
      allProducts,
      id,
      name,
      price_in_cents
    }
  `);
}

export function useProducts() {
  const {} = useQuery({
    queryFn: () => {},
    queryKey: ["products"],
  });
}
