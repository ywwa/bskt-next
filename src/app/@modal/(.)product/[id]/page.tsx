import FullPageProductPage from "@/components/ProductPage";
import { Modal } from "./modal";

export default function ProductModal({
  params: { id },
}: {
  params: { id: number };
}) {
  return (
    <Modal>
      <FullPageProductPage productId={id} />
    </Modal>
  );
}
