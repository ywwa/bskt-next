"use client";

import { cn } from "@/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDebouncedCallback } from "use-debounce";

const Searchbar = () => {
  const [focused, setFocused] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // handle delay when to perform an action after user stops typing
  const handleSearch = useDebouncedCallback((q: string) => {
    const params = new URLSearchParams(searchParams);
    if (q) params.set("search", q);
    else params.delete("search");

    if (params.has("page")) params.delete("page");

    // replace > push, clean search history
    // but i see reasons why push might be better in some cases
    replace(`${pathname}?${params.toString()}`);
  }, 200);

  return (
    <div className="group relative w-full">
      <input
        type="text"
        placeholder="Search..."
        defaultValue={searchParams.get("search")?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full rounded-lg border border-zinc-800 bg-zinc-900/20 px-4 
        py-2 outline-none transition-all duration-200 placeholder:text-center 
        hover:border-fuchsia-300 focus:border-fuchsia-400 
        focus:hover:border-fuchsia-300"
      />
      <FaSearch
        className={cn(
          `pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 
          text-zinc-500 transition-all duration-200 
          group-hover:text-fuchsia-300`,
          { "text-fuchsia-400": focused },
        )}
      />
    </div>
  );
};

export default Searchbar;
