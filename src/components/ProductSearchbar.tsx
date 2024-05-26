"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import { useDebouncedCallback } from "use-debounce";

const ProductSearchbar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((query: string) => {
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set("search", query);
    } else {
      params.delete("search");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 200);

  return (
    <div className="w-full group relative">
      <input
        type="text"
        className={`bg-zinc-900 py-2 px-4 transition-all duration-200
          outline-none w-full rounded-lg border border-zinc-800 
          hover:border-fuchsia-300 focus:border-fuchsia-300`}
        placeholder="Search..."
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("search")?.toString()}
      />
      <FaSearch
        className={`absolute top-1/2 right-4 -translate-y-1/2 
          pointer-events-none group-hover:text-fuchsia-300 transition-all 
          duration-200 text-zinc-500`}
      />
    </div>
  );
};

export default ProductSearchbar;
