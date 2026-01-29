import Image from "next/image";

type ServicesType = {
  image: string;
  title: string;
  description: string;
};

const services: ServicesType[] = [
  {
    image: "/global.svg",
    title: "Shop Globally",
    description: "Buy from US and other international stores.",
  },
  {
    image: "/house.svg",
    title: "Overseas Warehouse",
    description: "We receive and process your items securely.",
  },
  {
    image: "/bus.svg",
    title: "Delivered to Nigeria",
    description: "Your package arrives at your chosen Nigerian address.",
  },
  {
    image: "/shield-search.svg",
    title: "Transparent & Secure",
    description: "Clear costs, real tracking, safe payments.",
  },
];

const Services = () => {
  return (
    <section className="px-5 lg:px-10 xl:px-32 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((item) => (
        <div className="bg-grey-200 p-6 py-10 lg:py-6 rounded-[32px] flex flex-col items-center gap-y-6" key={item.title}>
          <Image src={item.image} alt={item.title} width={52} height={52} className="aspect-square" />
          <p className="text-center text-grey-950 font-bold text-xl leading-7">{item.title}</p>
          <p className="text-center text-base font-normal text-grey-700 leading-[25.6px] tracking-[0.5%]">{item.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Services;
