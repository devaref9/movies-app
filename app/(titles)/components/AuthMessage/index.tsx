import Link from "next/link";
import React from "react";
import { FiLogIn, FiUserPlus } from "react-icons/fi";

const AuthMessage = () => {
  return (
    <p className="flex justify-center items-center gap-2">
      <Link
        href={"/login"}
        className="font-bold text-lg flex gap-1 items-center justify-center hover:text-secondary transition"
      >
        وارد شوید <FiLogIn className="text-xl text-secondary" />
      </Link>
      و یا
      <Link
        href={"/register"}
        className="font-bold text-lg flex gap-1 items-center justify-center hover:text-primary transition"
      >
        ثبت نام کنید
        <FiUserPlus className="text-xl text-primary" />
      </Link>
    </p>
  );
};

export default AuthMessage;
