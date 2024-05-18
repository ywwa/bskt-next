import { TProduct } from "@/types";
import ProductListEntry from "./ProductListEntry";

const ProductList = ({ data }: { data: TProduct[] }) => {
  return (
    <ul className="flex flex-col flex-1 gap-3 p-3">
      {data.map((p) => (
        <ProductListEntry key={p.id} data={p} />
      ))}
    </ul>
  );
};

export default ProductList;
