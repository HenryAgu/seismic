import Header from "./header";
import HighlightCard from "./highlight-card";
import SubText from "./sub-text";

export interface HighlightCardType {
  image: string;
  title: string;
  description: string;
}

const highlightCards: HighlightCardType[] = [
  {
    image: "/highlight1.png",
    title: "Package Receiving",
    description: "We receive your international orders at our overseas warehouse.",
  },
  {
    image: "/highlight2.png",
    title: "Parcel Consolidation",
    description: "Combine multiple packages into one shipment to reduce shipping costs.",
  },
  {
    image: "/highlight3.png",
    title: "Shipping Cost Calculator",
    description: "See your shipping cost before paying. No surprises.",
  },
  {
    image: "/highlight4.png",
    title: "Real-Time Tracking",
    description: "Track your package from warehouse to delivery in Nigeria.",
  },
  {
    image: "/highlight5.png",
    title: "Assisted Purchase",
    description: "If a store doesn’t accept your card, share the product link and we’ll help you buy it.",
  },
  {
    image: "/highlight6.png",
    title: "Order Notifications",
    description: "Get updates when your package arrives, ships, and is delivered.",
  },
];


const PlatformHighlights = () => {
  return (
    <section className="px-5 lg:px-10 xl:px-32 py-12 flex flex-col gap-y-8">
      <div className="flex flex-col gap-y-6">
        <Header title="Platform Highlights" />
        <SubText
          title="Everything You Need, In One Place"
          description="All your global shopping and shipping tools, together."
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {highlightCards.map((item)=>(
          <HighlightCard key={item.title} item={item}/>
        ))}
      </div>
    </section>
  );
};

export default PlatformHighlights;
