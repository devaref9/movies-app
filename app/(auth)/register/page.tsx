"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormDataSchema } from "@/lib/schema";
import FormInput from "../components/FormInput";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ButtonLoadingAnimation from "@/components/ButtonLoadingAnimation";
import { useRouter } from "next/navigation";

type Inputs = {
  username: string;
  email: string;
  password: string;
};

const Register = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
  });

  const processForm = async (data: any) => {
    setIsLoading(true);
    await axios
      .post("/api/register", data)
      .then(() => {
        router.push("/login");
        toast.success("Registered Successfully!");
      })
      .catch((error) => {
        toast.error(error.response.data);
      });
    setIsLoading(false);
  };
  return (
    <>
      <main className="p-[75px] min-h-screen">
        <form
          onSubmit={handleSubmit(processForm)}
          className="p-[25px] w-[435px] rounded-[20px] mx-auto text-[#666] shadow-form"
        >
          <div className="flex flex-col gap-6 mb-6">
            <div>
              <FormInput
                type="text"
                placeholder="نام کاربری دلخواه خود را وارد کنید"
                label="نام کاربری"
                register={{ ...register("username") }}
              />
              {errors.username?.message && (
                <span className="text-sm text-red-400">
                  {errors.username.message}
                </span>
              )}
            </div>
            <div>
              <FormInput
                type="email"
                placeholder="بدون www."
                label="پست الکترونیک"
                register={{ ...register("email") }}
              />
              {errors.email?.message && (
                <p className="text-sm text-red-400">{errors.email.message}</p>
              )}
            </div>
            <div>
              <FormInput
                type="password"
                placeholder=""
                label="رمز عبور شما"
                register={{ ...register("password") }}
              />
              {errors.password?.message && (
                <p className="text-sm text-red-400">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="flex justify-center items-center p-[20px] bg-primary w-full rounded-[12px] text-white text-xl font-bold shadow-primary-glow"
          >
            {isLoading ? <ButtonLoadingAnimation /> : "عضویت در فیلمکیو"}
          </button>
          <Link
            className="mt-8 inline-block text-lg text-center w-full text-primary-dark font-bold"
            href="/login"
          >
            ورود به پنل کاربری
          </Link>
        </form>
      </main>
    </>
  );
};

export default Register;
