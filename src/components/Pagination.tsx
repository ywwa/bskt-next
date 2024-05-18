"use client";

import { usePathname, useRouter } from "next/navigation";
import Button from "./Button";

interface PaginationProps {
  page: number;
  lastPage: number;
}

const Pagination = ({ page, lastPage }: PaginationProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams();

  const updatePage = (targetPage: number) => {
    params.set("page", String(targetPage));
    router.replace(`${pathname}?${params.toString()}`);
  };

  function handleClick(value: number | string, type: string) {
    let targetPage;
    if (type === "page") targetPage = Number(value);
    else targetPage = type === "forward" ? page + 1 : page - 1;

    updatePage(targetPage);
  }

  const renderPageButtons = () => {
    const pageNumbers = [];

    if (page === 1) pageNumbers.push(page, page + 1, page + 2);
    else if (page === lastPage) pageNumbers.push(page - 2, page - 1, page);
    else pageNumbers.push(page - 1, page, page + 1);

    return pageNumbers.map((pageNumber) => (
      <Button
        key={pageNumber}
        type="page"
        onClick={() => handleClick(pageNumber, "page")}
        value={pageNumber}
        active={pageNumber === page}
      />
    ));
  };

  return (
    <div className="py-2 flex items-center justify-center gap-3">
      <Button
        type="back"
        onClick={() => handleClick(page, "back")}
        disabled={page === 1}
      />
      <div className="flex gap-2">{renderPageButtons()}</div>

      <Button
        type="forward"
        onClick={() => handleClick(page, "forward")}
        disabled={page === lastPage}
      />
    </div>
  );
};

export default Pagination;
