jest.mock("next/navigation", () => ({
  useRouter() {
    return { prefetch: () => null };
  },
  useSearchParams() {},
  usePathname() {},
}));

describe("ProductListEntry Component && i have no clue how you test fetch related stuff", () => {
  it("Render product entry", async () => {});
});
