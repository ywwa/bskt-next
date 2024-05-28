"use client";

import { ProductMin } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ItemProps {
  product: Omit<ProductMin, "rating">;
}

const fallbackImage = "https://dummyjson.com/image/80";

const Item = ({ product }: ItemProps) => {
  const [error, setError] = useState(false);

  return (
    <li
      className="rounded-md border border-zinc-800 backdrop-blur transition-all 
      duration-200 hover:border-fuchsia-300"
    >
      <Link href={`/product/${product.id}`} passHref>
        <div className="flex items-center gap-2 p-2">
          <div className="flex w-9/12 gap-2">
            <div
              className="relative aspect-square size-10 overflow-hidden 
              rounded-md"
            >
              <Image
                onError={() => setError(true)}
                src={error ? fallbackImage : product.thumbnail}
                alt={product.title}
                fill
                sizes="80px"
              />
            </div>

            <span className="my-2 w-px border border-dashed border-zinc-800" />

            <div className="flex flex-1 flex-col justify-center truncate pr-2">
              <p className="truncate text-sm">{product.title}</p>
              <p className="text-ellipsis text-xs text-zinc-400">
                {product.category}
              </p>
            </div>
          </div>

          <p className="w-3/12 text-end text-sm font-medium">
            {product.price}
            <span className="text-xs text-neutral-400">&#8364;</span>
          </p>
        </div>
      </Link>
    </li>
  );
};

export default Item;
