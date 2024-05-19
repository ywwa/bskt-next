import { ApiResponse, TProduct } from "./types";

export async function getProducts(
  page: number,
  searchQuery: string,
): Promise<ApiResponse> {
  const toSkip = (page * 10 - 10).toString();

  const reqUrl = new URL("https://dummyjson.com/products");
  const reqQry = new URLSearchParams();

  if (searchQuery) {
    reqUrl.pathname = reqUrl.pathname + "/search";
    reqQry.set("q", encodeURI(searchQuery));
    reqQry.set("limit", "10");
    reqUrl.search = reqQry.toString();

    const res = await fetch(reqUrl);
    if (!res.ok) throw new Error();
    return res.json();
  }

  const res = await fetch(
    `https://dummyjson.com/products?limit=10&skip=${toSkip}`,
  );

  if (!res.ok) throw new Error();
  return res.json();
}

export async function getProduct(id: number): Promise<TProduct> {
  const reqUrl = new URL("https://dummyjson.com/products/" + id);
  const res = await fetch(reqUrl);
  if (!res.ok) throw new Error();

  return res.json();
}
