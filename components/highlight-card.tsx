import Image from "next/image";
import { HighlightCardType } from "./platform-highlights";

interface HighlightCardProps {
  item: HighlightCardType;
}

const HighlightCard = ({ item }: HighlightCardProps) => {
  return (
    <div
      className="
        group
        border-[0.5px] border-grey-400
        rounded-[32px]
        flex flex-col
        overflow-hidden
        bg-white
        transition-transform duration-300 ease-out
        hover:scale-[1.03]
        hover:shadow-lg
      "
    >
      <Image
        src={item.image}
        alt={item.title}
        width={405}
        height={324}
        className="
          w-full
          object-cover
          aspect-405/324
          rounded-t-[32px]
          transition-transform duration-300 ease-out
          group-hover:scale-105
        "
      />

      <div className="p-5 bg-white flex flex-col gap-y-3 h-full">
        <p className="text-grey-950 font-bold text-2xl leading-[28.8px] custom-text-tracking">
          {item.title}
        </p>
        <p className="text-grey-700 text-base font-normal leading-[25.6px]">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default HighlightCard;
