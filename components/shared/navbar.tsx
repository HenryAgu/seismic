import Link from "next/link";

interface NavMenu {
  path: string;
  title: string;
}

const navMenu: NavMenu[] = [
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
];

const Navbar = () => {
  return (
    <nav className="p-6 flex items-center justify-between gap-x-6 border border-white bg-background">
      <div className="flex items-center gap-x-2">
        <div className="h-8 w-8 rounded-full bg-primary"></div>
        <p className="text-gray-950 text-lg font-bold custom-text-tracking">
          Brand Name
        </p>
      </div>
      <div className="flex items-center ">
        {navMenu.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className=" px-5 py-4 transition-colors ease-out duration-300 hover:bg-gray-200 rounded-full text-base font-normal custom-text-tracking"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <Link
        href=""
        className="bg-primary px-5 py-4 rounded-full font-bold text-white text-base"
      >
        Get Started
      </Link>
    </nav>
  );
};

export default Navbar;
