import { BuiltForCard } from "./built-for-card";
import Header from "./header";
import SubText from "./sub-text";

export interface BuiltForCardType {
  title: string;
  description: string;
  image: string;
  imagePosition: "top" | "bottom";
  offset?: boolean;
}

const builtForCards: BuiltForCardType[] = [
  {
    title: "Small Business Owners",
    description: "Importing items for resale in Nigeria.",
    image: "/featured-card-left.png",
    imagePosition: "bottom",
  },
  {
    title: "Everyday Shoppers",
    description: "Buying clothes, gadgets, and accessories from abroad.",
    image: "/featured-card-right.png",
    imagePosition: "top",
    offset: true,
  },
];

const BuiltForYou = () => {
  return (
    <section className="px-5 lg:px-10 xl:px-32 py-12 flex flex-col gap-y-8">
      <div className="flex flex-col gap-y-6">
        <Header title="Built for You" />
        <SubText
          title="Who Is This For?"
          description="Designed for Nigerians who shop internationally and want reliable delivery back home."
          descriptionClassName="max-w-[472px]"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {builtForCards.map((card) => (
          <BuiltForCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
};

export default BuiltForYou;
