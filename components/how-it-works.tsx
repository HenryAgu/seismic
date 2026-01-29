import React from "react";
import Header from "./header";
import SubText from "./sub-text";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <section
      className="px-5 lg:px-10 xl:px-32 py-12 flex flex-col gap-y-8 scroll-mt-12 lg:scroll-mt-24"
      id="steps"
    >
      <div className="flex flex-col gap-y-6">
        <Header title="Simple Steps" />
        <SubText
          title="How it Works"
          descriptionClassName="max-w-[472px]"
          description="Buying from international stores doesn’t have to be complicated. Here’s how we make it simple."
        />
      </div>
      <div className="my-10 w-full lg:w-[80%] mx-auto">
        <Image
          src="/steps.webp"
          width={967}
          height={1240}
          alt="steps-image"
          className="aspect-967/1240 w-full"
        />
      </div>
    </section>
  );
};

export default HowItWorks;
