import { BsHandThumbsUp, BsHandThumbsDown, BsBookmark } from "react-icons/bs";

type PropsType = {
  ratingsSummary: {
    aggregateRating: number;
    voteCount: number;
  };
};

const TitleFeedbacks = ({ ratingsSummary }: PropsType) => {
  return (
    <div className="flex lg:flex-col gap-1 lg:gap-4">
      <div className="flex gap-1 text-2xl self-end">
        <div className="bg-black bg-opacity-40 h-[72px] w-14 flex-center rounded-default">
          <BsBookmark className="text-primary" />
        </div>
        <div className="bg-black bg-opacity-40 h-[72px] w-14 flex-center rounded-default">
          <div className="text-center flex flex-col gap-2">
            <BsHandThumbsDown className="text-red-500" />
            <span className="text-sm font-medium">2</span>
          </div>
        </div>
        <div className="bg-black bg-opacity-40 h-[72px] w-14 flex-center rounded-default">
          <div className="text-center flex flex-col gap-2">
            <BsHandThumbsUp className="text-green-500" />
            <span className="text-sm font-medium">12</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col self-end bg-black bg-opacity-40 p-2 rounded-default">
        <span className="text-left text-xl shadow-sm">
          <strong className="text-4xl text-primary-dark">
            {ratingsSummary?.aggregateRating}
          </strong>
          /10
        </span>
        <span className="text-sm text-center font-medium">
          {ratingsSummary?.voteCount} رای
        </span>
      </div>
    </div>
  );
};

export default TitleFeedbacks;
