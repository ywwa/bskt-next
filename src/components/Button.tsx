import { cn } from "@/utils";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface ButtonProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, "onClick"> {
  type: "page" | "back" | "forward";
  value?: number | string;
  active?: boolean;
  disabled?: boolean;
  onClick?: (value: number | string, type: string) => void;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      disabled={props.disabled}
      onClick={() =>
        props.onClick && props.onClick(props.value || "", props.type)
      }
      className={cn(
        `flex aspect-square size-10 items-center justify-center rounded-md
        border border-zinc-700/50 backdrop-blur transition-all duration-100`,
        {
          "size-9": props.type === "page",
          "border-fuchsia-300 text-fuchsia-300": props.active,
          "opacity-20": props.disabled,
          "hover:border-fuchsia-400 hover:bg-fuchsia-400 hover:text-zinc-950":
            !props.disabled,
        },
      )}
    >
      {props.value && props.type === "page" && props.value}
      {props.type === "back" && <FaArrowLeft />}
      {props.type === "forward" && <FaArrowRight />}
    </button>
  );
};

export default Button;
