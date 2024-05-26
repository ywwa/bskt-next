import { cn } from "@/utils";
import { HTMLAttributes } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

interface ButtonProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, "onClick"> {
  type: "forward" | "back" | "page";
  value?: number | string;
  active?: boolean;
  onClick?: (value: number | string, type: string) => void;
  disabled?: boolean;
}

const Button = ({ type, value, active, onClick, disabled }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={() => onClick && onClick(value || "", type)}
      className={cn(
        `aspect-square flex items-center border border-zinc-700/50 size-10
        rounded-md justify-center transition-all duration-100 backdrop-blur`,
        {
          "size-9": type === "page",
          "border-zinc-700": type !== "page",
          "border-fuchsia-300 text-fuchsia-300": active,
          "hover:text-zinc-950 hover:border-fuchsia-400 hover:bg-fuchsia-400":
            !disabled,
          "opacity-20": disabled,
        },
      )}
    >
      {type === "back" && <FaArrowLeft className="p-0 m-0" />}
      {type === "forward" && <FaArrowRight />}
      {value && type === "page" && value}
    </button>
  );
};

export default Button;
