import Link from "next/link";
import { SearchParamsType } from "@/types";
import { headers } from "next/headers";
import getTitleComments from "@/lib/getTitleComments";

type Props = {
  searchParams: SearchParamsType;
  TABS: {
    [key: string]: string;
  };
  titleId: string;
};

const TitlesTabs = async ({ searchParams, TABS, titleId }: Props) => {
  const headersList = headers();
  const pathname = headersList.get("x-invoke-path") || "";

  let activeTab = "";
  if (!searchParams.section || searchParams.section === TABS.DOWNLOAD) {
    activeTab = TABS.DOWNLOAD;
  } else {
    activeTab = TABS.COMMENTS;
  }

  const comments = await getTitleComments(titleId);

  return (
    <>
      <ul className="flex bg-black justify-evenly gap-20">
        <li
          className={`${activeTab === TABS.DOWNLOAD ? "text-primary" : ""}
              half-space py-4 font-bold cursor-pointer`}
        >
          <Link href={`${pathname}?section=${TABS.DOWNLOAD}`} scroll={false}>
            {TABS.DOWNLOAD}
          </Link>
        </li>
        <li
          className={`${activeTab === TABS.COMMENTS ? "text-primary" : ""}
              half-space py-4 font-bold cursor-pointer flex items-center gap-1.5`}
        >
          <Link href={`${pathname}?section=${TABS.COMMENTS}`} scroll={false}>
            {TABS.COMMENTS}
          </Link>
          <span className="w-5 h-5 self-center rounded-full bg-primary-dark text-dark flex items-center justify-center text-lg font-medium">
            {comments && comments.length}
          </span>
        </li>
      </ul>
    </>
  );
};

export default TitlesTabs;
