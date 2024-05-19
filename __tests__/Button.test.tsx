import ButtonC from "@/components/Button";
import { render, screen } from "@testing-library/react";

describe("Button Component", () => {
  it("Render 'forward' button and not be disabled", () => {
    render(<ButtonC type="forward" />);

    const button = screen.getByRole("button");

    expect(button).toHaveProperty("disabled");
  });

  it("Render 'back' button and not be disabled", () => {
    render(<ButtonC type="back" />);

    const button = screen.getByRole("button");

    expect(button).toHaveProperty("disabled");
  });

  it("Render 'page' button and have value of '1'", () => {
    render(<ButtonC type="page" value={1} />);

    const button = screen.getByRole("button").innerHTML;

    expect(button).toEqual("1");
  });
});
