import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  BsJustifyRight,
  BsFillFileEarmarkPlayFill,
  BsFillCollectionPlayFill,
  BsHousesFill,
} from "react-icons/bs";
import { IconType } from "react-icons/lib";

type OptionsType = {
  title: string;
  icon: IconType;
  href: string;
}[];

const options: OptionsType = [
  { title: "خانه", icon: BsHousesFill, href: "/" },
  { title: "فیلم ها", icon: BsFillFileEarmarkPlayFill, href: "/movies" },
  { title: "سریال ها", icon: BsFillCollectionPlayFill, href: "/series" },
];

const MobileNavbar = () => {
  const [activeNumber, setActiveNumber] = useState<Number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    options.forEach((item, index) => {
      if (pathname === item.href) setActiveNumber(index);
    });
  }, [pathname]);

  return (
    <nav className="fixed w-full bottom-0 right-0 left-0 bg-[#0c1012] z-20 lg:hidden">
      <div className="custom-container">
        <ul className="flex justify-around">
          {options.map((item, index) => {
            return (
              <li
                key={index}
                className={`relative transition ${
                  activeNumber === index
                    ? "before:absolute before:top-0 before:w-full before:h-[2px] before:bg-primary transition text-primary"
                    : "text-white transition"
                } font-medium text-sm py-2`}
              >
                <Link
                  href={item.href}
                  className="flex flex-col items-center justify-center gap-[6px]"
                >
                  <item.icon className="text-2xl" />
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavbar;
