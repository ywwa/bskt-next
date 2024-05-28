"use client";
import ProductPageContent from "@/components/ProductPageContent";
import Modal from "./modal";

interface ProductModalPageProps {
  params: { id: number };
}

export default function ProductModalPage({
  params: { id },
}: ProductModalPageProps) {
  return (
    <Modal>
      <ProductPageContent productId={id} />
    </Modal>
  );
}
