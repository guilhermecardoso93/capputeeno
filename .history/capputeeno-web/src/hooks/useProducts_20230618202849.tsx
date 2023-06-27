import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { ProductsFetchResponse } from "@/typesProps/products-response";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

function fetcher(): AxiosPromise<ProductsFetchResponse> {
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
  const { data } = useQuery({
    queryFn: fetcher,
    queryKey: ["products"],
  });

  return {
    data: data?.data?.data.allProducts,
  };
}
