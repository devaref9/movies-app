"use client";
import { usePathname, useRouter } from "next/navigation";
import { useRef, useTransition } from "react";

const postComment = async ({
  text,
  titleId,
}: {
  text: string;
  titleId: string;
}) => {
  const res = fetch("https://movies-app-wheat-six.vercel.app/api/titles/comments/:titleId", {
    method: "POST",
    body: JSON.stringify({ text, titleId }),
    //@ts-ignore
    "Content-Type": "application/json",
  });
  return (await res);
};

const NewComment = () => {
  const params = usePathname();
  const router = useRouter();
  const titleId = params.split("/")[2];
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    await postComment({
      text: textRef.current?.value || "",
      titleId: titleId,
    });
    startTransition(() => {
      // Refresh the current route and fetch new data from the server without
      // losing client-side browser or React state.
      router.refresh();
    });

    if (textRef.current) {
      textRef.current.value = "";
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <textarea
        ref={textRef}
        className="w-[60%] h-[120px] mx-auto bg-[#2e2e2e] border border-transparent rounded-xl p-3.5 text-sm font-medium transition-all outline-0 focus:border focus:border-gray-500"
        placeholder="دیدگاه خود را اینجا بنویسید"
      ></textarea>
      <button
        className="btn btn-primary self-center"
        type="submit"
        disabled={isPending}
      >
        ارسال دیدگاه
      </button>
    </form>
  );
};

export default NewComment;
