import Image from "next/image";
import { BuiltForCardType } from "./built-for-you";


interface BuiltForCardProps {
  card: BuiltForCardType;
}

export const BuiltForCard = ({ card }: BuiltForCardProps) => {
  const content = (
    <div className="p-5 bg-white flex flex-col gap-y-3">
      <p className="text-2xl font-bold text-grey-950 leading-[28.8px] tracking-[1%]">
        {card.title}
      </p>
      <p className="text-grey-700 font-normal text-base leading-[25.6px]">
        {card.description}
      </p>
    </div>
  );

  const image = (
    <Image
      src={card.image}
      alt={card.title}
      width={620}
      height={457}
      className="object-cover w-full"
    />
  );

  return (
    <div
      className={`
        basis-2/4
        flex flex-col
        border-[0.5px] border-grey-400 h-fit
        rounded-[32px]
        overflow-hidden
        ${card.offset ? "md:mt-24" : ""}
      `}
    >
      {card.imagePosition === "top" ? image : content}
      {card.imagePosition === "top" ? content : image}
    </div>
  );
};
