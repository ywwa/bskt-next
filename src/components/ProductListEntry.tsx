import { TProduct } from "@/types";
import Image from "next/image";
import Link from "next/link";

const ProductListEntry = ({ data }: { data: TProduct }) => {
  return (
    <Link href={`/product/${data.id}`} passHref>
      <li
        className="border border-zinc-800 rounded-md flex p-2 backdrop-blur 
          items-center"
      >
        <div className="w-10/12 flex gap-2">
          <div
            className="relative aspect-square size-10 rounded-md 
              overflow-hidden"
          >
            <Image src={data.thumbnail} alt={data.title} fill sizes="40px" />
          </div>

          <div className="w-px border my-2 border-dashed border-zinc-800" />
          <div className="flex flex-col flex-1 justify-center truncate">
            <p className="text-sm truncate">{data.title}</p>
            <p className="text-xs text-zinc-400 text-ellipsis">
              {data.category}
            </p>
          </div>
        </div>

        <p className="w-2/12 text-end font-medium text-sm">
          {data.price}
          <span className="text-neutral-400 text-xs">&#8364;</span>
        </p>
      </li>
    </Link>
  );
};

export default ProductListEntry;
