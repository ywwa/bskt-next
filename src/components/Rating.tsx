import { FaStar } from "react-icons/fa6";

const Rating = ({ value }: { value: number }) => {
  const getStarStyle = (starIndex: number) => {
    if (value >= starIndex) {
      return "text-yellow-500";
    } else if (value >= starIndex - 0.5) {
      return "relative";
    } else {
      return "text-gray-300";
    }
  };
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((starIndex) => (
        <span
          key={starIndex}
          className={`star ${getStarStyle(starIndex)} relative`}
          style={
            value >= starIndex - 0.5 && value < starIndex
              ? {
                  background:
                    "linear-gradient(to right, #f59e0b 50%, #d1d5db 50%)",
                  WebkitBackgroundClip: "text",
                  color: "#999999",
                }
              : {}
          }
        >
          <FaStar size={20} />
        </span>
      ))}
    </div>
  );
};

export default Rating;
