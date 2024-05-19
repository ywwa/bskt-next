import Button from "@/components/Button";
import Pagination from "@/components/Pagination";
import { render } from "@testing-library/react";

jest.mock("next/navigation", () => ({
  useRouter() {
    return { prefetch: () => null };
  },
  useSearchParams() {},
  usePathname() {},
}));

describe("Pagination Component", () => {
  it("Render pagination Component and have layout of [<- 1 2 3 ->]", () => {
    const { container: pagination } = render(
      <Pagination page={1} lastPage={10} />,
    );

    const { container: pageButton2 } = render(<Button type="page" value={2} />);
    const { container: pageButton3 } = render(<Button type="page" value={3} />);

    expect(pagination.querySelector("div > button")).toHaveProperty("disabled");
    expect(pagination.querySelector("div > button:nth-child(2)")).not.toBe(
      true,
    );
    expect(
      pagination.querySelector("div > div > div > button:nth-child(2)"),
    ).toStrictEqual(pageButton2.querySelector("button"));
    expect(
      pagination.querySelector("div > div > div > button:nth-child(3)"),
    ).toStrictEqual(pageButton3.querySelector("button"));
  });
});
