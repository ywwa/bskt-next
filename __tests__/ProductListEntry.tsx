import ProductList from "@/components/ProductList";
import { render } from "@testing-library/react";

jest.mock("next/navigation", () => ({
  useRouter() {
    return { prefetch: () => null };
  },
  useSearchParams() {},
  usePathname() {},
}));

describe("ProductList Component && i have no clue how you test fetch related stuff", () => {
  it("Render product list", async () => {
    const { container } = render(<ProductList data={[]} />);

    expect(container).toBeTruthy();
  });
});
