import Image from "next/image";
import { HighlightCardType } from "./platform-highlights";

interface HighlightCardProps {
  item: HighlightCardType;
}

const HighlightCard = ({ item }: HighlightCardProps) => {
  return (
    <div className="border-[0.5px] border-grey-400 rounded-[32px] flex flex-col">
      <Image
        src={item.image}
        alt={item.title}
        width={405}
        height={324}
        className="w-full object-cover aspect-405/324 rounded-t-[32px]"
      />
      <div className="p-5 bg-white flex flex-col gap-y-3 rounded-b-[32px] h-full">
        <p className="text-grey-950 font-bold text-2xl leading-[28.8px] custom-text-tracking">{item.title}</p>
        <p className="text-grey-700 text-base font-normal leadin-[25.6px]">{item.description}</p>
      </div>
    </div>
  );
};

export default HighlightCard;
