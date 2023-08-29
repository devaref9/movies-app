import Link from "next/link";
import { FaTelegramPlane, FaInstagram, FaTwitter } from "react-icons/fa";
import SocialIcon from "@/components/SocialIcon";

export default function Footer() {
  return (
    <footer className="custom-container pt-6 pb-[75px] lg:pb-6 lg:pt-12 flex flex-col gap-4 items-center">
      <ul className="flex gap-4 items-center">
        <li>
          <SocialIcon Icon={FaTelegramPlane} href={"https://t.me/filmkio"} />
        </li>
        <li>
          <SocialIcon
            Icon={FaInstagram}
            href={"https://www.instagram.com/filmkio/"}
          />
        </li>
        <li>
          <SocialIcon Icon={FaTwitter} href={"/"} />
        </li>
      </ul>
      <ul className="hidden lg:flex items-center gap-6">
        <li className="text-gray-400 hover:text-primary transition">
          <Link href={"/"}>صفحه نخست</Link>
        </li>
        <span className="bg-gray-400 h-1 w-1 rounded-full"></span>
        <li className="text-gray-400 hover:text-primary transition">
          <Link href={"/movies"}>فیلم ها</Link>
        </li>
        <span className="bg-gray-400 h-1 w-1 rounded-full"></span>
        <li className="text-gray-400 hover:text-primary transition">
          <Link href={"/series"}>سریال ها</Link>
        </li>
      </ul>
      <p className="font-medium text-[11px] lg:text-sm text-gray-500">
        تمامی حقوق مادی و معنوی این وبسایت متعلق به{" "}
        <span className="text-primary">فیلمکیو</span> می باشد .
      </p>
    </footer>
  );
}
