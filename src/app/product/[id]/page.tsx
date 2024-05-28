"use client";

import ProductPageContent from "@/components/ProductPageContent";
import { useRouter } from "next/navigation";

interface ProductPageProps {
  params: { id: number };
}

const ProductPage = ({ params: { id } }: ProductPageProps) => {
  const { back } = useRouter();

  return (
    <main
      className="flex h-screen flex-col items-center justify-between bg-squared 
      bg-[size:25px_25px] bg-fixed py-20"
    >
      <div className="container mx-auto flex flex-1 flex-col items-center">
        <ProductPageContent
          productId={id}
          hideCloseBtn
          className="border-none bg-transparent"
        />
      </div>

      <button
        className="rounded-md border border-zinc-700 px-8 py-2 text-lg 
        backdrop-blur transition-all duration-200 hover:border-fuchsia-300
        hover:bg-fuchsia-300 hover:text-black"
        onClick={back}
      >
        Back
      </button>
    </main>
  );
};

export default ProductPage;
