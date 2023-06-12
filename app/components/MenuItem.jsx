import Link from "next/link";

export default function MenuItem({ title, href }) {
  return (
    <li className="text-slate-800 hover:text-gray-100 transition-all">
      <Link href={href}>{title}</Link>
    </li>
  );
}
