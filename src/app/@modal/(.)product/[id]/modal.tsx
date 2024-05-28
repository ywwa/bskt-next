"use client";

import { useRouter } from "next/navigation";
import { ElementRef, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }: { children: React.ReactNode }) => {
  const { back } = useRouter();

  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) dialogRef.current?.showModal();
  }, []);

  return createPortal(
    <dialog
      ref={dialogRef}
      onClose={() => back()}
      className="relative m-0 flex h-screen w-screen items-center 
      justify-center bg-black/70 p-5 text-white backdrop-blur-lg"
    >
      {children}
    </dialog>,
    document.getElementById("modal-root")!,
  );
};

export default Modal;
