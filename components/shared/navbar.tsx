import Link from "next/link";
import MenuIcon from "../icons/menu";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import CloseIcon from "../icons/close";

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
    <div className="fixed top-0 left-0 right-0 container mx-auto">
      <nav className="p-5 lg:p-6 flex items-center justify-between gap-x-6 border border-white bg-background">
        <div className="flex items-center gap-x-2">
          <div className="lg:h-8 w-6 lg:w-8 h-6 rounded-full bg-primary"></div>
          <p className="text-grey-950 text-base lg:text-lg font-bold custom-text-tracking">
            Brand Name
          </p>
        </div>
        <div className="hidden lg:flex items-center ">
          {navMenu.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className=" px-5 py-4 transition-colors ease-out duration-300 hover:bg-grey-200 rounded-full text-base font-normal custom-text-tracking"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <Link
          href=""
          className="bg-primary px-5 py-4 rounded-full font-bold text-white text-base lg:block hidden"
        >
          Get Started
        </Link>
        <div className="flex lg:hidden">
          <Sheet>
            <SheetTrigger>
              <MenuIcon />
              <SheetContent side="top">
                <MobileMenu />
              </SheetContent>
            </SheetTrigger>
          </Sheet>
        </div>
      </nav>
    </div>
  );
};

const MobileMenu = () => {
  return (
    <Sheet>
      <div className="p-5 flex flex-col gap-y-20 h-screen w-full">
        <SheetClose asChild>
          <div className="flex items-end justify-end">
            <CloseIcon />
          </div>
        </SheetClose>
        <div className="flex flex-col items-center gap-y-5 text-center">
          {navMenu.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className=" px-5 py-4 transition-colors ease-out duration-300 hover:bg-grey-200 rounded-full text-2xl font-medium text-center custom-text-tracking"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </Sheet>
  );
};

export default Navbar;
