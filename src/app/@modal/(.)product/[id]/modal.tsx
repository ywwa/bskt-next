"use client";

import { useRouter } from "next/navigation";
import { ElementRef, ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) dialogRef.current?.showModal();
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      onClose={onDismiss}
      className="w-screen h-screen m-0 bg-black/70 backdrop-blur-lg text-white 
        flex items-center justify-center p-5 relative"
    >
      {children}
    </dialog>,
    document.getElementById("modal-root")!,
  );
}
