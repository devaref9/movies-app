"use client";

import { useState } from "react";
import FormInput from "../components/FormInput";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import ButtonLoadingAnimation from "@/components/ButtonLoadingAnimation";

type User = {
  email: string;
  password: string;
};

const Login = () => {
  const router = useRouter();
  const [data, setData] = useState<User>({
    password: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    await signIn("credentials", { ...data, redirect: false })
      .then((callback) => {
        setIsLoading(false);
        if (callback?.error) {
          toast.error(callback.error);
        } else if (callback?.ok && !callback?.error) {
          router.push("/")
          toast.success("Logged in successfully!");
        }
      })
  };
  return (
    <>
      <main className="p-[75px] min-h-screen">
        <form
          onSubmit={handleLogin}
          className="p-[25px] w-[435px] rounded-[20px] mx-auto text-[#666] shadow-form"
        >
          <div className="flex flex-col gap-6 mb-6">
            <FormInput
              type="email"
              placeholder="بدون www."
              label="پست الکترونیک"
              value={data?.email}
              handleChange={(e: any) => {
                setData({ ...data, email: e.target.value } as User);
              }}
            />
            <FormInput
              type="password"
              placeholder=""
              label="رمز عبور شما"
              value={data?.password}
              handleChange={(e: any) => {
                setData({ ...data, password: e.target.value } as User);
              }}
            />
          </div>
          <button
            type="submit"
            className="flex justify-center items-center p-[20px] bg-secondary w-full rounded-[12px] text-white text-xl font-bold shadow-secondary-glow"
          >
            {isLoading ? <ButtonLoadingAnimation /> : "ورود به پنل کاربری"}
          </button>
          <Link
            className="mt-8 inline-block text-lg text-center w-full text-primary-dark font-bold"
            href="/register"
          >
            عضویت در فیلمکیو
          </Link>
        </form>
      </main>
    </>
  );
};

export default Login;
