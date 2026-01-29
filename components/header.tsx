type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <span className="bg-primary-50 border-[0.5px] border-primary-200 text-center rounded-full py-3 px-6 w-fit text-sm font-normal custom-text-tracking mx-auto">
      {title}
    </span>
  );
};

export default Header;
