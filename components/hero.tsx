import Image from "next/image";

const Hero = () => {
  return (
    <section className="lg:pt-50 pt-30 flex flex-col gap-y-6 px-5">
      <div className="flex flex-col items-center w-full gap-y-6">
        <span className="bg-primary-50 border-[0.5px] border-primary-200 rounded-full py-3 px-6 w-fit text-sm font-normal custom-text-tracking">
          Global Shopping, Made Simple
        </span>
        <h1 className="text-grey-950 text-center font-black text-4xl lg:text-[52px] lg:leading-[62.4px]">
          Buy from International Stores. <br /> We Deliver to Nigeria.
        </h1>
      </div>
      <Image
        src="/hero.webp"
        width={1100}
        height={296}
        className="aspect-1100/296 object-cover flex items-center justify-center mx-auto"
        alt="hero-image"
      />
      <div className="flex flex-col items-center text-center gap-y-6 max-w-141 mx-auto">
        <p className="text-base tracking-[0.5%] font-normal leading-[25.6px] text-grey-700">
          We help{" "}
          <span className="text-grey-950">Nigerians shop from abroad,</span>{" "}
          receive items at our overseas warehouse, and{" "}
          <span className="text-grey-950">ship them safely to Nigeria,</span>{" "}
          with clear pricing and full tracking.
        </p>
        <div className="flex items-center gap-x-4">
          <button className="py-4 px-5 rounded-full border border-primary text-sm lg:text-base font-bold leading-[19.2px] bg-primary text-white">
            Get Started
          </button>
          <button className="py-4 px-5 rounded-full border border-primary text-sm lg:text-base font-bold leading-[19.2px] text-primary">
            How it Works
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
