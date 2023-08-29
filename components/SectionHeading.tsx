import Link from "next/link";
import { IconType } from "react-icons/lib";

type PropsType = {
  title: string;
  Icon: IconType;
  linkText: string;
  href: string;
};

export default function SectionHeading({
  title,
  Icon,
  linkText,
  href,
}: PropsType) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <Icon className="text-primary text-2xl lg:text-3xl" />
        <h2 className="font-bold lg:text-xl">{title}</h2>
      </div>
      <Link
        href={href}
        className="bg-primary-dark p-2 text-sm lg:text-base text-dark hover:rounded-xl transition-all hover:brightness-110 duration-[400ms]"
      >
        {linkText}
      </Link>
    </div>
  );
}
