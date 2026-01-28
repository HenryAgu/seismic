import Image from "next/image";

interface Stores {
  image: string;
  width: number;
  height: number;
}

const stores: Stores[] = [
  {
    image: "/adidas.svg",
    width: 96,
    height: 66,
  },
  {
    image: "/Chanel.svg",
    width: 86,
    height: 86,
  },
  {
    image: "/nike.svg",
    width: 126,
    height: 66,
  },
  {
    image: "/Chanel.svg",
    width: 86,
    height: 86,
  },
  {
    image: "/Amazon.svg",
    width: 152,
    height: 46,
  },
  {
    image: "/ebay.svg",
    width: 116,
    height: 46,
  },
  {
    image: "/north-face.svg",
    width: 141,
    height: 66,
  },
  {
    image: "/Amazon.svg",
    width: 152,
    height: 46,
  },
];

const PopularStores = () => {
  return (
    <section className="py-12 flex flex-col gap-6 px-5">
      <span className="bg-primary-50 border-[0.5px] border-primary-200 text-center rounded-full py-3 px-6 w-fit text-sm font-normal custom-text-tracking mx-auto">
        Popular Stores
      </span>
      <div className="flex flex-col items-center text-center gap-y-3">
        <p className="text-grey-950 font-medium text-3xl lg:text-5xl lg:leading-[57.6px]">
          Top Stores Nigerians Shop From
        </p>
        <p className="text-base tracking-[0.5%] font-normal leading-[25.6px] text-grey-700 max-w-165.5">
          Shop from trusted international brands across fashion, electronics,
          home, and more. We handle the delivery from abroad and bring your
          items safely to Nigeria.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-6 lg:px-10 xl:px-32">
        {stores.map((item, index) => (
          <div
            className="bg-grey-200 py-10 px-6 rounded-2xl flex flex-col items-center justify-center"
            key={index}
          >
            <Image
              src={item.image}
              width={item.width}
              height={item.height}
              alt="store-image"
              className={`aspect-${item.width}/${item.height} `}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularStores;
