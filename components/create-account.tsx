import Image from "next/image";
import Link from "next/link";
import React from "react";

const CreateAccount = () => {
  return (
    <section className="py-12 flex lg:flex-row flex-col lg:items-center gap-y-10 gap-x-6 px-5 lg:px-10 xl:px-32">
      <div className="basis-2/4 flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-4">
          <p className="text-grey-950 font-black text-4xl lg:text-[52px] lg:leading-[62.4px]">
            Start Shipping From Abroad Without Stress
          </p>
          <p className="text-lg tracking-[0.5%] font-normal leading-[25.6px] text-grey-700 max-w-110.5">
            Shop internationally with confidence and receive your items in
            Nigeria with ease.
          </p>
        </div>
        <Link
          href=""
          className="px-6 py-5 bg-primary text-white w-fit rounded-full text-base lg:text-lg font-bold"
        >
          Create an Account
        </Link>
      </div>
      <div className="basis-2/4 flex flex-col gap-3 lg:gap-y-6">
        <Image
          src="/account1.png"
          width={620}
          height={248}
          alt=""
          className="border-[0.5px] aspect-620/248 border-grey-400 rounded-[32px] object-cover md:w-full md:h-full"
        />
        <div className="flex gap-x-3 lg:gap-x-6">
          <div className="basis-2/4">
            <Image
              src="/account2.png"
              width={298}
              height={248}
              alt=""
              className="border-[0.5px] border-grey-400 rounded-[32px] object-cover w-full"
            />
          </div>
          <div className="basis-2/4">
            <Image
              src="/account3.png"
              width={298}
              height={248}
              alt=""
              className="border-[0.5px] border-grey-400 rounded-[32px] object-cover w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateAccount;
