import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./useFilter";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

function fetcher() {
  return axios.post(
    API_URL,
    `
    query {
      allProducts,
      id,
      name,
      price_in_cents
    }
  `
  );
}

export function useProducts() {
  const {} = useQuery({
    queryFn: () => {},
    queryKey: ["products"],
  });
}
