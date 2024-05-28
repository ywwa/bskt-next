import { cn } from "@/utils";
import { FaStar } from "react-icons/fa";

const Rating = ({ value }: { value: number }) => {
  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index + 1}
          className={cn(`relative`, {
            "text-yellow-500": value >= index + 1,
          })}
        >
          <FaStar size={20} />
        </span>
      ))}
    </div>
  );
};

export default Rating;
