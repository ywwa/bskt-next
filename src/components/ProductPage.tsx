"use client";

import { TProduct } from "@/types";
import Rating from "./Rating";
import { HTMLAttributes } from "react";
import { cn } from "@/utils";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";

interface ProductPageProps extends HTMLAttributes<HTMLDivElement> {
  productId: number;
  hideCloseBtn?: boolean;
}

async function getProduct(id: number): Promise<TProduct> {
  const reqUrl = new URL("https://dummyjson.com/products/" + id);
  const res = await fetch(reqUrl);
  if (!res.ok) throw new Error();

  return res.json();
}

export default async function FullPageProductPage({
  productId,
  hideCloseBtn,
  className,
}: ProductPageProps) {
  const { back } = useRouter();
  const data = await getProduct(productId);
  return (
    <div
      className={cn(
        "border p-5 md:w-2/3 lg:w-1/3 bg-zinc-950 rounded-md border-zinc-700 flex flex-col relative",
        className,
      )}
    >
      {!hideCloseBtn && (
        <button
          className="absolute hover:text-red-400 transition-all"
          onClick={back}
        >
          <IoClose size={30} />
        </button>
      )}
      <div className="w-2/3 h-full mx-auto relative overflow-hidden rounded-lg">
        <img src={data.thumbnail} alt={data.title} draggable={false} />
      </div>
      <div className="px-1 flex flex-col items-center border-t mt-5 border-dashed border-zinc-700">
        <div className="flex justify-between items-center py-2 w-full">
          <div className="text-zinc-500">
            <p className="text-lg text-white font-bold">{data.title}</p>
            {data.brand}
          </div>
          <p className="font-bold text-zinc-500">
            <span className="text-xl text-white">{data.price}</span>
            &#8364;
          </p>
        </div>
        <p className="text-zinc-400">{data.description}</p>
        <div className="mt-5 flex items-center text-zinc-500 relative">
          <Rating value={data.rating} />{" "}
          <sup className="absolute -right-9 top-1">({data.rating})</sup>
        </div>
      </div>
    </div>
  );
}
