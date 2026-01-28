import localFont from "next/font/local";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="pt-50 flex flex-col gap-y-6">
      <div className="flex flex-col items-center w-full gap-y-6">
        <span className="bg-primary-50 border-[0.5px] border-primary-200 rounded-full py-3 px-6 w-fit text-sm font-normal custom-text-tracking">
          Global Shopping, Made Simple
        </span>
        <h1 className="text-gray-950 text-center font-black text-[52px] leading-[62.4px]">
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
      <div className="flex flex-col gap-y-6"></div>
    </section>
  );
};

export default Hero;
