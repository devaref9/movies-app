import getTitleComments from "@/lib/getTitleComments";
import NewComment from "../NewComment";
import SingleComment from "../SingleComment";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AuthMessage from "../AuthMessage";

const Comments = async ({ titleId }: { titleId: string }) => {
  const comments = await getTitleComments(titleId);
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col gap-8">
      {session ? <NewComment /> : <AuthMessage />}
      {!comments?.length ? (
        <p className="font-bold text-center">
          تاکنون دیدگاهی ارسال نشده. اولین نفری باشید که نظر خودشو برای دیگران
          به اشتراک میزاره :)
        </p>
      ) : (
        <div className="flex flex-col gap-3">
          {comments?.map((comment: any) => {
            return (
              <SingleComment key={comment.id} comment={comment} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Comments;
