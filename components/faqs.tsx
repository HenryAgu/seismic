import Link from "next/link";
import Header from "./header";
import SubText from "./sub-text";

interface Faq {
  title: string;
  content: string;
}

const faqs: Faq[] = [
  {
    title: "Do I get a personal warehouse address?",
    content:
      "No. All packages are received at our shared overseas warehouse and processed securely.",
  },
  {
    title: "Do you handle customs fees?",
    content:
      "Customs duties are determined by Nigerian customs and are not controlled by us.",
  },
  {
    title: "Can I shop from any international store?",
    content: "Yes, as long as the store can ship to our warehouse location.",
  },
  {
    title: "Can I track my package?",
    content: "Yes. You’ll receive tracking updates from warehouse to delivery.",
  },
  {
    title: "What if my item is damaged?",
    content: "Optional insurance is available for eligible shipments.",
  },
];

const Faqs = () => {
  return (
    <section className="px-5 lg:px-10 xl:px-32 py-12 flex flex-col gap-y-8">
      <div className="flex flex-col gap-y-6">
        <Header title="Built for You" />
        <SubText
          title="FAQs"
          descriptionClassName="max-w-[472px]"
          description="Focused on your needs, our team delivers solutions to ensure adequate and secure buy and ship to Nigeria."
        />
      </div>
      <div className="flex flex-col gap-4 w-full lg:w-[70%] mx-auto">
        {faqs.map((item) => (
          <div
            key={item.title}
            className="
        p-8
        bg-grey-200
        rounded-[32px]
        flex
        flex-col
        md:flex-row
        md:items-center
        gap-y-4
        md:gap-x-8
      "
          >
            {/* Question */}
            <p className="md:basis-[40%] text-grey-950 font-bold text-base">
              {item.title}
            </p>

            {/* Answer */}
            <p className="md:basis-[60%] font-normal text-grey-600 text-base leading-[25.6px] text-grey-700">
              {item.content}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-y-4 items-center text-center">
        <div className="flex flex-col gap-y-2">
          <p className="text-xl font-bold text-grey-950 leading-7">
            Still have a question?
          </p>
          <p className="text-grey-700 text-base font-normal tracking-[0.15%]">
            Reach out to our support team.
          </p>
        </div>
        <Link href="" className="border border-primary py-4 px-5 rounded-full font-bold text-sm">Contact Us</Link>
      </div>
    </section>
  );
};

export default Faqs;
