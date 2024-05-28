import type { ApiResponse, ProductMin } from "@/types";

const BASE_URL = "https://dummyjson.com/products";

interface ProductsHookProps {
  page: number;
  searchQuery?: string;
}

interface ProductsResponse extends Omit<ApiResponse, "products"> {
  products: Omit<ProductMin, "rating">[];
}

// IMO this hook could be done better but for now if it works it's fine with me
export async function useProducts(
  args: ProductsHookProps,
): Promise<ProductsResponse> {
  const toSkip = (args.page * 10 - 10).toString();

  const reqUrl = new URL(BASE_URL);
  const reqParams = new URLSearchParams();

  if (args.searchQuery) {
    reqUrl.pathname = reqUrl.pathname + "/search";
    reqParams.set("q", args.searchQuery);
  }

  reqParams.set("limit", "10");
  reqParams.set("skip", toSkip);
  reqParams.set(
    "select",
    "id,title,description,category,price,thumbnail,rating",
  );
  reqUrl.search = reqParams.toString();

  const res = await fetch(reqUrl);
  if (!res.ok) throw new Error("Failed to fetch products");

  const data: ProductsResponse = await res.json();
  return data;
}
