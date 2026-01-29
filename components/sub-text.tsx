interface SubTextProps {
  title: string;
  description: string;
  containerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const SubText = ({
  title,
  description,
  containerClassName = "",
  titleClassName = "",
  descriptionClassName = "",
}: SubTextProps) => {
  return (
    <div
      className={`flex flex-col items-center text-center gap-y-3 ${containerClassName}`}
    >
      <p
        className={`text-grey-950 font-medium text-3xl lg:text-5xl lg:leading-[57.6px] ${titleClassName}`}
      >
        {title}
      </p>
      <p
        className={`text-base tracking-[0.5%] font-normal leading-[25.6px] text-grey-700 max-w-165.5 ${descriptionClassName}`}
      >
        {description}
      </p>
    </div>
  );
};

export default SubText;
