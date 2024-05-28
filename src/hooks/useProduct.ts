import type { ProductMin } from "@/types";
import useSWR, { Fetcher } from "swr";

// should've put this into separate file named contants.ts
// but because theres only one url theres no much point of it
const BASE_URL = "https://dummyjson.com/products";

// this is just evil to be honest

const fetcher: Fetcher<ProductMin> = async (url: string) => {
  const reqUrl = new URL(url);
  const reqParams = new URLSearchParams();

  reqParams.set(
    "select",
    "id,title,description,category,price,thumbnail,rating,brand",
  );

  reqUrl.search = reqParams.toString();

  const res = await fetch(reqUrl);
  if (!res.ok) throw new Error();
  const data: ProductMin = await res.json();
  return data;
};

const useProduct = (id: number) => useSWR(BASE_URL + "/" + id, fetcher, {});

export default useProduct;
