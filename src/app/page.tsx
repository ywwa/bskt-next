import List from "@/components/List";
import Pagination from "@/components/Pagination";
import Searchbar from "@/components/Searchbar";
import { useProducts } from "@/hooks/useProducts";

interface PageProps {
  searchParams: {
    search?: string;
    page?: string;
  };
}
export default async function HomePage({ searchParams }: PageProps) {
  const query = searchParams?.search || "";
  const page = Number(searchParams?.page) || 1;

  const data = await useProducts({ page: page, searchQuery: query });
  const lastPage = Math.ceil(data.total / 10);

  return (
    <main
      className="flex min-h-screen flex-col bg-squared bg-[size:25px_25px] 
      bg-fixed"
    >
      <div
        className="mx-auto flex w-full flex-1 flex-col space-y-5 p-5 lg:w-2/3 
        xl:w-1/3"
      >
        <Searchbar />
        <List products={data.products} />
        <Pagination page={page} last={lastPage} />
      </div>
    </main>
  );
}
