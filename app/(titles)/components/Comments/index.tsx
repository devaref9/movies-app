import getTitleComments from "@/lib/getTitleComments";
import NewComment from "../NewComment";
import SingleComment from "../SingleComment";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AuthMessage from "../AuthMessage";
import { Suspense } from "react";
import ButtonLoadingAnimation from "@/components/ButtonLoadingAnimation";

const Comments = async ({ titleId }: { titleId: string }) => {
  const comments = await getTitleComments(titleId);
  const session: any = await getServerSession(authOptions);

  return (
    <div className="flex flex-col gap-8">
      {session ? <NewComment /> : <AuthMessage />}

        {comments && !(comments.length > 0) && (
          <p className="font-bold text-center">
            تاکنون دیدگاهی ارسال نشده. اولین نفری باشید که نظر خودشو برای دیگران
            به اشتراک میزاره :)
          </p>
        )}
        {comments && comments.length > 0 && (
          <div className="flex flex-col gap-3">
            {comments?.map((comment: any) => {
              return <SingleComment key={comment.id} comment={comment} />;
            })}
          </div>
        )}
    </div>
  );
};

export default Comments;
