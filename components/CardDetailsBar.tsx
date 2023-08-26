const CardDetailsBar = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <span
      className={`${className} absolute top-4 text-xs text-center right-0 bg-primary-dark w-24 rotate-45 translate-x-6 text-light z-10`}
    >
      {text}
    </span>
  );
};

export default CardDetailsBar;
