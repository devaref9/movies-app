import Link from "next/link";

type PropsType = {
  title: string,
  href: string,
}
export default function MenuItem({ title, href }:PropsType) {
  return (
    <li className="text-light hover:text-primary transition-all">
      <Link
        className="[word-spacing:-4px]"
        href={href}
      >
        {title}
      </Link>
    </li>
  );
}
