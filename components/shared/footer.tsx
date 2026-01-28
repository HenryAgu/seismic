import Link from "next/link";

interface FooterMenu {
  path: string;
  title: string;
}

const Footer = () => {
  const footerMenu: FooterMenu[] = [
    {
      path: "",
      title: "How it works",
    },
    {
      path: "",
      title: "Features",
    },
    {
      path: "",
      title: "FAQs",
    },
    {
      path: "",
      title: "support",
    },
    {
      path: "",
      title: "Track Order",
    },
    {
      path: "",
      title: "Terms of Service",
    },
  ];
  return (
    <footer className="bg-primary pt-18 pb-5 flex flex-col items-center gap-y-12 px-5">
      <div className="flex flex-col items-center gap-y-4">
        <div className="flex items-center gap-x-2">
          <div className="lg:h-8 lg:w-8 w-6 h-6 rounded-full bg-white"></div>
          <p className="text-white text-base lg:text-lg font-bold custom-text-tracking">
            Brand Name
          </p>
        </div>
        <p className="max-w-118 mx-auto text-center text-primary-400 text-base lg:text-lg custom-text-tracking">
          Shop internationally, receive your items in Nigeria. Simply, safely,
          and transparently.
        </p>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center gap-4 lg:gap-6">
        {footerMenu.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className="text-primary-400 text-base lg:text-lg py-5 px-6 border border-primary-400 rounded-full"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <p className="text-white text-sm lg:text-base leading-[28.8px] font-normal custom-text-tracking">
        © 2025 YourPlatformName. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
