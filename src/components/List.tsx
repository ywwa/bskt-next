import type { ProductMin } from "@/types";
import Item from "./Item";

interface ListProps {
  products: Omit<ProductMin, "rating">[];
}

const List = (props: ListProps) => {
  return (
    <ul className="flex flex-1 flex-col gap-3 p-3">
      {props.products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default List;
