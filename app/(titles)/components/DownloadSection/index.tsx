import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import AuthMessage from "../AuthMessage";

const DownloadSection = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    return (
      <p className="font-bold text-center">به زودی لینک افزوده خواهد شد </p>
    );
  } else {
    return <AuthMessage />;
  }
};

export default DownloadSection;
