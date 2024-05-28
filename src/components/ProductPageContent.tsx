"use client";
import useProduct from "@/hooks/useProduct";
import { cn } from "@/utils";
import { useRouter } from "next/navigation";
import { HTMLAttributes } from "react";
import { IoClose } from "react-icons/io5";
import Rating from "./Rating";

interface ProductPageContentProps extends HTMLAttributes<HTMLDivElement> {
  productId: number;
  hideCloseBtn?: boolean;
}

const ProductPageContent = ({
  productId,
  hideCloseBtn,
  className,
}: ProductPageContentProps) => {
  const { back } = useRouter();
  const { data, isLoading } = useProduct(productId);

  return (
    <div
      className={cn(
        `relative flex  flex-col rounded-md border border-zinc-700 
        bg-zinc-950 p-5 md:w-2/3 lg:w-1/3`,
        className,
      )}
    >
      {!hideCloseBtn && (
        <button
          className="absolute transition-all hover:text-red-400"
          onClick={back}
        >
          <IoClose size={30} />
        </button>
      )}

      <div
        className="relative mx-auto flex aspect-square w-2/3 items-center 
        justify-center overflow-hidden rounded-lg"
      >
        {isLoading ? (
          <div className="h-full w-full animate-pulse bg-zinc-900/50" />
        ) : (
          data && (
            <img src={data.thumbnail} alt={data.title} draggable={false} />
          )
        )}
      </div>

      <div
        className="mt-5 flex flex-col items-center border-t border-dashed 
        border-zinc-700 px-1"
      >
        <div className="my-2 flex w-full flex-col">
          <p
            className={cn("text-lg font-medium text-white", {
              "h-6 w-2/5 animate-pulse rounded-full bg-zinc-900/50": isLoading,
            })}
          >
            {data && data.title}
          </p>
          <div className="flex justify-between text-zinc-500">
            <span
              className={cn({
                "mt-2 h-5 w-1/5 animate-pulse rounded-full bg-zinc-900/50":
                  isLoading,
              })}
            >
              {data && data.brand}
            </span>
            <span
              className={cn("text-sm font-medium", {
                "mt-1 w-1/6 rounded-full bg-zinc-900/50": isLoading,
              })}
            >
              {data && (
                <>
                  <span className="text-base text-white">{data.price}</span>
                  &#8364;
                </>
              )}
            </span>
          </div>
        </div>
      </div>

      <div
        className={cn("mt-4 flex flex-col text-justify text-sm text-zinc-400", {
          "animate-pulse": isLoading,
        })}
      >
        {isLoading ? (
          <>
            <span className="mb-1 mr-5 h-4 rounded-full bg-zinc-900/50" />
            <span className="mb-1 h-4 rounded-full bg-zinc-900/50" />
            <span className="mb-1 h-4 w-2/5 rounded-full bg-zinc-900/50" />
          </>
        ) : (
          data && data.description
        )}
      </div>

      <div className="relative mt-5 flex justify-center text-zinc-500">
        <div className="relative">
          <Rating value={!data ? 0 : Math.floor(data.rating * 10) / 10} />
          {isLoading ? null : (
            <sup className="absolute -right-9 top-1">({data?.rating})</sup>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPageContent;
