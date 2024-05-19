import ProductSearchbar from "@/components/ProductSearchbar";
import { render, screen } from "@testing-library/react";

jest.mock("next/navigation", () => ({
  useRouter() {
    return { prefetch: () => null };
  },
  useSearchParams() {
    return { get: () => null };
  },
  usePathname() {},
}));

describe("Product Searchbar Component", () => {
  it("Renders component and has class property", () => {
    render(<ProductSearchbar />);

    const inputElement = screen.getByPlaceholderText("Search...");
    expect(inputElement).toHaveProperty("className");
  });
});
