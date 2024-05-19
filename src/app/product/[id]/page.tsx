"use client";

import FullPageProductPage from "@/components/ProductPage";
import { useRouter } from "next/navigation";

export default function ProductPage({
  params: { id },
}: {
  params: { id: number };
}) {
  const { back } = useRouter();
  return (
    <main className="flex flex-col items-center justify-between py-20 h-screen bg-squared bg-[size:25px_25px] bg-fixed">
      <div className="container flex flex-col items-center mx-auto">
        <FullPageProductPage productId={id} hideCloseBtn className="border-none bg-transparent" />
      </div>
      <button className="text-lg border py-2 px-8 rounded-md backdrop-blur 
        border-zinc-700 hover:border-fuchsia-300 transition-all duration-200
        hover:text-black hover:bg-fuchsia-300" onClick={back}>
        Back
      </button>
    </main>
  );
}
