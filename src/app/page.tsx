import Pagination from "@/components/Pagination";
import ProductList from "@/components/ProductList";
import ProductSearchbar from "@/components/ProductSearchbar";
import { getProducts } from "@/dataGetters";

interface HomeProps {
  searchParams?: {
    search?: string;
    page?: string;
  };
}

export default async function Home({ searchParams }: HomeProps) {
  const searchQuery = searchParams?.search || "";
  const currentPage = Number(searchParams?.page) || 1;

  const data = await getProducts(currentPage, searchQuery);
  return (
    <main className="flex flex-col h-screen bg-squared bg-[size:25px_25px] bg-fixed">
      <div className="mx-auto h-screen w-full lg:w-2/3 xl:w-1/3 space-y-5 p-5 flex flex-col">
        <ProductSearchbar />
        <ProductList data={data.products} />
        <Pagination page={currentPage} lastPage={data.total / 10} />
      </div>
    </main>
  );
}
