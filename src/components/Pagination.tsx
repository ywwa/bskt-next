"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";
import Button from "./Button";

interface PaginationProps {
  page: number;
  last: number;
}

const Pagination = (props: PaginationProps) => {
  const { push, replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // just delete page param if theres no search results
    if (props.last === 0) replace(pathname + "?" + deleteQueryParam("page"));
    // this one prevents user from going past limits
    else if (props.page > props.last)
      replace(pathname + "?" + buildQueryString("page", String(props.last)));
  }, [searchParams]);

  // helper function for rebuilding searchparams
  const buildQueryString = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(key, value);
      return params.toString();
    },
    [searchParams],
  );

  // helper function for deleting param from searchparams
  const deleteQueryParam = useCallback(
    (key: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(key);
      return params.toString();
    },
    [searchParams],
  );

  // pagination handler that supports search aswell
  // previous version as resetting search
  function handleClick(value: number | string, type: string) {
    let targetPage: number;

    if (type === "page") targetPage = Number(value);
    else targetPage = type === "forward" ? props.page + 1 : props.page - 1;
    push(pathname + "?" + buildQueryString("page", targetPage.toString()), {
      scroll: false,
    });
  }

  // [1],2,3    render page buttons
  // 1,[2],3
  // 2,[3],4
  const renderPageList = () => {
    const { page, last } = props,
      pages = [],
      windowSize = 3;

    let start = Math.max(1, page - Math.floor(windowSize / 2));
    let end = Math.min(last, start + windowSize - 1);

    if (end > last) start = Math.max(1, last - windowSize + 1);

    for (let i = start; i <= end; i++) pages.push(i);

    return pages.map((pageNum) => (
      <Button
        key={pageNum}
        type="page"
        value={pageNum}
        active={pageNum === page}
        onClick={() => handleClick(pageNum, "page")}
      />
    ));
  };

  return (
    <div className="flex items-center justify-center gap-3 space-x-3 py-2">
      <Button
        type="back"
        disabled={props.page <= 1}
        onClick={() => handleClick(props.page, "back")}
      />
      <div className="flex w-3/12 justify-center gap-2">{renderPageList()}</div>
      <Button
        type="forward"
        disabled={props.page >= props.last}
        onClick={() => handleClick(props.page, "forward")}
      />
    </div>
  );
};

export default Pagination;
